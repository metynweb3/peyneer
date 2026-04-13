"""
Peynir Atölyesi - Flask Backend Server
SQLite veritabanı ile kullanıcı yönetimi (register/login/profil)
"""

from flask import Flask, request, jsonify, session, send_from_directory
import sqlite3
import hashlib
import secrets
import os
import re
from functools import wraps
from datetime import timedelta

# ===== PATHS =====
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_DIR = os.path.join(BASE_DIR, 'database')
DB_PATH = os.path.join(DB_DIR, 'cheese_shop.db')
SECRET_KEY_FILE = os.path.join(DB_DIR, '.secret_key')

# ===== FLASK APP =====
app = Flask(__name__)
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=7)


# ===== SECRET KEY MANAGEMENT =====
def get_secret_key():
    """Kalıcı gizli anahtar oluştur/oku (session'lar sunucu yeniden başlatıldığında korunsun)"""
    os.makedirs(DB_DIR, exist_ok=True)
    if os.path.exists(SECRET_KEY_FILE):
        with open(SECRET_KEY_FILE, 'r') as f:
            key = f.read().strip()
            if key:
                return key
    key = secrets.token_hex(32)
    with open(SECRET_KEY_FILE, 'w') as f:
        f.write(key)
    return key


app.secret_key = get_secret_key()


# ===== DATABASE =====
def get_db():
    """Veritabanı bağlantısı al"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db():
    """Veritabanı tablolarını oluştur"""
    os.makedirs(DB_DIR, exist_ok=True)
    conn = get_db()
    conn.executescript('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            salt TEXT NOT NULL,
            phone TEXT DEFAULT '',
            address TEXT DEFAULT '',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            total_amount REAL NOT NULL,
            shipping_cost REAL DEFAULT 0,
            status TEXT DEFAULT 'beklemede',
            note TEXT DEFAULT '',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS order_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_id INTEGER NOT NULL,
            product_id INTEGER NOT NULL,
            product_name TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            unit_price REAL NOT NULL,
            unit TEXT DEFAULT '',
            FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
        );
    ''')
    conn.commit()
    conn.close()


# ===== PASSWORD HELPERS =====
def hash_password(password, salt=None):
    """PBKDF2 ile şifre hash'le"""
    if salt is None:
        salt = secrets.token_hex(16)
    hashed = hashlib.pbkdf2_hmac(
        'sha256',
        password.encode('utf-8'),
        salt.encode('utf-8'),
        100000
    )
    return hashed.hex(), salt


def verify_password(password, password_hash, salt):
    """Şifre doğrula"""
    hashed, _ = hash_password(password, salt)
    return secrets.compare_digest(hashed, password_hash)


# ===== VALIDATION =====
def is_valid_email(email):
    return bool(re.match(r'^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$', email))


# ===== AUTH DECORATOR =====
def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if 'user_id' not in session:
            return jsonify({'success': False, 'message': 'Giriş yapmanız gerekiyor'}), 401
        return f(*args, **kwargs)
    return decorated


def user_to_dict(user):
    """SQLite Row objesini dict'e çevir"""
    return {
        'id': user['id'],
        'first_name': user['first_name'],
        'last_name': user['last_name'],
        'email': user['email'],
        'phone': user['phone'] or '',
        'address': user['address'] or '',
        'created_at': user['created_at']
    }


# ===== STATIC FILE ROUTES =====
@app.route('/')
def index():
    return send_from_directory(BASE_DIR, 'index.html')


@app.route('/<path:filename>')
def serve_static(filename):
    """Statik dosyaları sun (CSS, JS, images)"""
    file_path = os.path.join(BASE_DIR, filename)
    if os.path.isfile(file_path):
        return send_from_directory(BASE_DIR, filename)
    return jsonify({'error': 'Dosya bulunamadı'}), 404


# ===== AUTH API =====
@app.route('/api/register', methods=['POST'])
def register():
    """Yeni kullanıcı kaydı"""
    data = request.get_json()
    if not data:
        return jsonify({'success': False, 'message': 'Geçersiz istek'}), 400

    first_name = data.get('first_name', '').strip()
    last_name = data.get('last_name', '').strip()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '')
    phone = data.get('phone', '').strip()

    # Validation
    errors = []
    if not first_name:
        errors.append('Ad alanı zorunludur')
    if not last_name:
        errors.append('Soyad alanı zorunludur')
    if not email:
        errors.append('E-posta alanı zorunludur')
    elif not is_valid_email(email):
        errors.append('Geçerli bir e-posta adresi girin')
    if not password:
        errors.append('Şifre alanı zorunludur')
    elif len(password) < 6:
        errors.append('Şifre en az 6 karakter olmalıdır')

    if errors:
        return jsonify({'success': False, 'message': errors[0]}), 400

    password_hash, salt = hash_password(password)

    try:
        conn = get_db()
        cursor = conn.execute(
            'INSERT INTO users (first_name, last_name, email, password_hash, salt, phone) VALUES (?, ?, ?, ?, ?, ?)',
            (first_name, last_name, email, password_hash, salt, phone)
        )
        conn.commit()

        user = conn.execute('SELECT * FROM users WHERE id = ?', (cursor.lastrowid,)).fetchone()
        conn.close()

        # Auto-login after registration
        session.permanent = True
        session['user_id'] = user['id']

        return jsonify({
            'success': True,
            'message': 'Kayıt başarılı! Hoş geldiniz.',
            'user': user_to_dict(user)
        }), 201

    except sqlite3.IntegrityError:
        return jsonify({'success': False, 'message': 'Bu e-posta adresi zaten kullanılıyor'}), 409
    except Exception as e:
        print(f"Register error: {e}")
        return jsonify({'success': False, 'message': 'Bir hata oluştu, lütfen tekrar deneyin'}), 500


@app.route('/api/login', methods=['POST'])
def login():
    """Kullanıcı girişi"""
    data = request.get_json()
    if not data:
        return jsonify({'success': False, 'message': 'Geçersiz istek'}), 400

    email = data.get('email', '').strip().lower()
    password = data.get('password', '')

    if not email or not password:
        return jsonify({'success': False, 'message': 'E-posta ve şifre gereklidir'}), 400

    conn = get_db()
    user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
    conn.close()

    if not user:
        return jsonify({'success': False, 'message': 'E-posta veya şifre hatalı'}), 401

    if not verify_password(password, user['password_hash'], user['salt']):
        return jsonify({'success': False, 'message': 'E-posta veya şifre hatalı'}), 401

    session.permanent = True
    session['user_id'] = user['id']

    return jsonify({
        'success': True,
        'message': f'Hoş geldiniz, {user["first_name"]}!',
        'user': user_to_dict(user)
    })


@app.route('/api/logout', methods=['POST'])
def logout():
    """Kullanıcı çıkışı"""
    session.clear()
    return jsonify({'success': True, 'message': 'Çıkış yapıldı'})


@app.route('/api/user', methods=['GET'])
@login_required
def get_user():
    """Mevcut kullanıcı bilgilerini getir"""
    conn = get_db()
    user = conn.execute('SELECT * FROM users WHERE id = ?', (session['user_id'],)).fetchone()
    conn.close()

    if not user:
        session.clear()
        return jsonify({'success': False, 'message': 'Kullanıcı bulunamadı'}), 404

    return jsonify({
        'success': True,
        'user': user_to_dict(user)
    })


@app.route('/api/user', methods=['PUT'])
@login_required
def update_user():
    """Kullanıcı profil bilgilerini güncelle"""
    data = request.get_json()
    if not data:
        return jsonify({'success': False, 'message': 'Geçersiz istek'}), 400

    first_name = data.get('first_name', '').strip()
    last_name = data.get('last_name', '').strip()
    phone = data.get('phone', '').strip()
    address = data.get('address', '').strip()

    if not first_name or not last_name:
        return jsonify({'success': False, 'message': 'Ad ve soyad gereklidir'}), 400

    conn = get_db()
    conn.execute(
        '''UPDATE users 
           SET first_name=?, last_name=?, phone=?, address=?, updated_at=CURRENT_TIMESTAMP 
           WHERE id=?''',
        (first_name, last_name, phone, address, session['user_id'])
    )
    conn.commit()

    user = conn.execute('SELECT * FROM users WHERE id = ?', (session['user_id'],)).fetchone()
    conn.close()

    return jsonify({
        'success': True,
        'message': 'Profil başarıyla güncellendi!',
        'user': user_to_dict(user)
    })


@app.route('/api/user/password', methods=['PUT'])
@login_required
def change_password():
    """Şifre değiştir"""
    data = request.get_json()
    if not data:
        return jsonify({'success': False, 'message': 'Geçersiz istek'}), 400

    current_password = data.get('current_password', '')
    new_password = data.get('new_password', '')

    if not current_password:
        return jsonify({'success': False, 'message': 'Mevcut şifre gereklidir'}), 400
    if len(new_password) < 6:
        return jsonify({'success': False, 'message': 'Yeni şifre en az 6 karakter olmalıdır'}), 400

    conn = get_db()
    user = conn.execute('SELECT * FROM users WHERE id = ?', (session['user_id'],)).fetchone()

    if not verify_password(current_password, user['password_hash'], user['salt']):
        conn.close()
        return jsonify({'success': False, 'message': 'Mevcut şifre hatalı'}), 401

    new_hash, new_salt = hash_password(new_password)
    conn.execute(
        'UPDATE users SET password_hash=?, salt=?, updated_at=CURRENT_TIMESTAMP WHERE id=?',
        (new_hash, new_salt, session['user_id'])
    )
    conn.commit()
    conn.close()

    return jsonify({'success': True, 'message': 'Şifre başarıyla güncellendi!'})


# ===== ORDER API =====
@app.route('/api/orders', methods=['POST'])
@login_required
def create_order():
    """Yeni sipariş oluştur"""
    data = request.get_json()
    if not data:
        return jsonify({'success': False, 'message': 'Geçersiz istek'}), 400

    items = data.get('items', [])
    total_amount = data.get('total_amount', 0)
    shipping_cost = data.get('shipping_cost', 0)
    note = data.get('note', '').strip()

    if not items:
        return jsonify({'success': False, 'message': 'Sepet boş'}), 400

    conn = get_db()
    try:
        cursor = conn.execute(
            'INSERT INTO orders (user_id, total_amount, shipping_cost, note) VALUES (?, ?, ?, ?)',
            (session['user_id'], total_amount, shipping_cost, note)
        )
        order_id = cursor.lastrowid

        for item in items:
            conn.execute(
                'INSERT INTO order_items (order_id, product_id, product_name, quantity, unit_price, unit) VALUES (?, ?, ?, ?, ?, ?)',
                (order_id, item['id'], item['name'], item['quantity'], item['price'], item.get('unit', ''))
            )

        conn.commit()

        order = conn.execute('SELECT * FROM orders WHERE id = ?', (order_id,)).fetchone()
        order_items = conn.execute('SELECT * FROM order_items WHERE order_id = ?', (order_id,)).fetchall()
        conn.close()

        return jsonify({
            'success': True,
            'message': f'Sipariş #{order_id} başarıyla oluşturuldu!',
            'order': {
                'id': order['id'],
                'total_amount': order['total_amount'],
                'shipping_cost': order['shipping_cost'],
                'status': order['status'],
                'note': order['note'],
                'created_at': order['created_at'],
                'items': [dict(i) for i in order_items]
            }
        }), 201

    except Exception as e:
        conn.rollback()
        conn.close()
        print(f"Order error: {e}")
        return jsonify({'success': False, 'message': 'Sipariş oluşturulurken hata oluştu'}), 500


@app.route('/api/orders', methods=['GET'])
@login_required
def get_orders():
    """Kullanıcının siparişlerini listele"""
    conn = get_db()
    orders = conn.execute(
        'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
        (session['user_id'],)
    ).fetchall()

    result = []
    for order in orders:
        items = conn.execute(
            'SELECT * FROM order_items WHERE order_id = ?',
            (order['id'],)
        ).fetchall()
        result.append({
            'id': order['id'],
            'total_amount': order['total_amount'],
            'shipping_cost': order['shipping_cost'],
            'status': order['status'],
            'note': order['note'],
            'created_at': order['created_at'],
            'items': [dict(i) for i in items]
        })

    conn.close()
    return jsonify({'success': True, 'orders': result})


# ===== RUN =====
if __name__ == '__main__':
    init_db()
    print()
    print("=" * 56)
    print("  PEYNIR ATOLYESI - Sunucu Baslatildi!")
    print("=" * 56)
    print(f"  Web:  http://localhost:5000")
    print(f"  DB:   {DB_PATH}")
    print(f"  Key:  {SECRET_KEY_FILE}")
    print("=" * 56)
    print()
    app.run(debug=True, host='127.0.0.1', port=5000)
