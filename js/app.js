// Data Buku Lengkap Toko Buku USK
const initialBooks = [
    {
        id: 1,
        judul: 'Buku Baru',
        penulis: 'Dr. Tri Wahyu',
        penerbit: 'USK Press',
        tahun: 2026,
        harga: 50000,
        kategori: 'baru',
        stok: 1,
        status: 'Tersedia',
        coverGradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        deskripsi: 'Panduan lengkap dan komprehensif literatur baru bagi mahasiswa dan umum di lingkungan kampus USK.'
    },
    {
        id: 2,
        judul: 'Buku Ekonomi & Bisnis',
        penulis: 'Dr. Tri Wahyu Adi',
        penerbit: 'Literasi Nusantara',
        tahun: 2025,
        harga: 75000,
        kategori: 'Bisnis & Ekonomi',
        stok: 0,
        status: 'Habis',
        coverGradient: 'linear-gradient(135deg, #0284c7, #0f172a)',
        deskripsi: 'Strategi, Inovasi, dan Keberlanjutan menyajikan pandangan mendalam mengenai dinamika ekonomi dan bisnis perusahaan listrik dalam era yang penuh tantangan dan perubahan.'
    },
    {
        id: 3,
        judul: 'belajar laravel pemula 11',
        penulis: 'bang dylan',
        penerbit: 'granmedia',
        tahun: 2026,
        harga: 50000,
        kategori: 'Sains & Teknologi',
        stok: 15,
        status: 'Tersedia',
        coverGradient: 'linear-gradient(135deg, #18181b, #ef4444)',
        deskripsi: 'ringan dan santai. Belajar pemrograman framework Laravel 11 dari dasar fundamental hingga membangun aplikasi web modern siap pakai.'
    },
    {
        id: 4,
        judul: 'Filosofi Teras',
        penulis: 'Henry Manampiring',
        penerbit: 'Kompas',
        tahun: 2018,
        harga: 75000,
        kategori: 'Pengembangan Diri',
        stok: 20,
        status: 'Tersedia',
        coverGradient: 'linear-gradient(135deg, #10b981, #047857)',
        deskripsi: 'Penerapan filsafat Stoisisme kuno untuk mental yang tangguh, damai, dan tenang dalam menghadapi dinamika kehidupan modern.'
    },
    {
        id: 5,
        judul: 'Bumi Manusia',
        penulis: 'Pramoedya Ananta Toer',
        penerbit: 'Hasta Mitra',
        tahun: 1980,
        harga: 98000,
        kategori: 'Novel & Fiksi',
        stok: 10,
        status: 'Tersedia',
        coverGradient: 'linear-gradient(135deg, #b45309, #78350f)',
        deskripsi: 'Kisah roman klasik pergerakan nasional dan kebangkitan intelektual di masa kolonial Hindia Belanda.'
    },
    {
        id: 6,
        judul: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        penerbit: 'Bentang Pustaka',
        tahun: 2005,
        harga: 85000,
        kategori: 'Novel & Fiksi',
        stok: 12,
        status: 'Tersedia',
        coverGradient: 'linear-gradient(135deg, #6366f1, #4338ca)',
        deskripsi: 'Kisah inspiratif perjuangan sepuluh anak di Belitung dalam meraih pendidikan dan menggapai mimpi di tengah keterbatasan.'
    }
];

// Keranjang Belanja Default Pengguna
let cartItems = [
    {
        id: 3,
        judul: 'belajar laravel pemula 11',
        kategori: 'Sains & Teknologi',
        harga: 50000,
        jumlah: 1
    },
    {
        id: 6,
        judul: 'Laskar Pelangi',
        kategori: 'Novel & Fiksi',
        harga: 85000,
        jumlah: 1
    }
];

// Helper: Format Rupiah
function formatRupiah(number) {
    return 'Rp ' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Helper: Toast Notifikasi
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// -----------------------------------------------------------------------------
// RENDER KATALOG BUKU (LANDING & USER)
// -----------------------------------------------------------------------------
function createBookCardHTML(book, isUserMode = false) {
    const isAvailable = book.stok > 0;
    const badgeStock = isAvailable
        ? `<span class="tokopedia-badge-stock in">Sisa ${book.stok}</span>`
        : `<span class="tokopedia-badge-stock out">Stok Habis</span>`;

    return `
        <div class="tokopedia-card" onclick="showBookDetail(${book.id})">
            <div class="tokopedia-image-box" style="background: ${book.coverGradient}; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:16px; position:relative; overflow:hidden;">
                <!-- 3D Mini Book Icon Effect -->
                <div style="background: rgba(255,255,255,0.15); border: 1.5px solid rgba(255,255,255,0.3); border-radius: 6px; width: 68px; height: 96px; display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow: 0 8px 16px rgba(0,0,0,0.3);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
                    <span style="font-size: 8px; font-weight: 800; color: #ffffff; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.5px;">BUKU USK</span>
                </div>
            </div>

            <div class="tokopedia-info">
                <h3 class="tokopedia-title" title="${book.judul}">${book.judul}</h3>
                <div class="tokopedia-price">${formatRupiah(book.harga)}</div>
                <div class="tokopedia-author">Penulis: ${book.penulis}</div>
                <div class="tokopedia-meta">${book.kategori} &bull; ${book.tahun}</div>

                <div class="tokopedia-footer">
                    <span>Banda Aceh</span>
                    ${badgeStock}
                </div>

                <div style="margin-top: 10px;">
                    <button type="button" class="btn btn-secondary btn-sm" style="width: 100%; font-size: 11.5px; padding: 6px 10px;" onclick="event.stopPropagation(); showBookDetail(${book.id})">
                        ${isUserMode ? 'Lihat Detail & Beli' : 'Masuk Akun untuk Memesan'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderLandingBooks(booksToRender) {
    const container = document.getElementById('book-grid-container');
    if (!container) return;

    if (booksToRender.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #ffffff; border-radius: 12px; border: 1px solid var(--border-color);">
                <p style="font-size: 16px; color: var(--text-muted);">Tidak ada buku yang sesuai dengan pencarian atau filter Anda.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = booksToRender.map(book => createBookCardHTML(book, false)).join('');
}

function renderUserCatalog(booksToRender) {
    const container = document.getElementById('user-book-grid');
    if (!container) return;

    if (booksToRender.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #ffffff; border-radius: 12px; border: 1px solid var(--border-color);">
                <p style="font-size: 16px; color: var(--text-muted);">Tidak ada buku yang sesuai dengan pencarian atau filter Anda.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = booksToRender.map(book => createBookCardHTML(book, true)).join('');
}

// -----------------------------------------------------------------------------
// FILTERING & SEARCHING
// -----------------------------------------------------------------------------
let currentLandingCategory = 'all';

function setCategoryFilter(category, buttonEl) {
    currentLandingCategory = category;
    if (buttonEl) {
        document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
        buttonEl.classList.add('active');
    }
    filterBooks();
}

function filterBooks() {
    const searchInput = document.getElementById('live-search-input');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = initialBooks.filter(book => {
        const matchesCategory = (currentLandingCategory === 'all') || (book.kategori === currentLandingCategory);
        const matchesQuery = book.judul.toLowerCase().includes(query) ||
                             book.penulis.toLowerCase().includes(query) ||
                             book.kategori.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
    });

    renderLandingBooks(filtered);
}

let currentUserCategory = 'all';

function setUserCategory(category, buttonEl) {
    currentUserCategory = category;
    if (buttonEl) {
        document.querySelectorAll('#pane-user-katalog .filter-pill').forEach(btn => btn.classList.remove('active'));
        buttonEl.classList.add('active');
    }
    filterUserCatalog();
}

function filterUserCatalog() {
    const searchInput = document.getElementById('user-search-input');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = initialBooks.filter(book => {
        const matchesCategory = (currentUserCategory === 'all') || (book.kategori === currentUserCategory);
        const matchesQuery = book.judul.toLowerCase().includes(query) ||
                             book.penulis.toLowerCase().includes(query) ||
                             book.kategori.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
    });

    renderUserCatalog(filtered);
}

function sortUserBooks(criteria) {
    let sorted = [...initialBooks];
    if (criteria === 'harga_asc') {
        sorted.sort((a, b) => a.harga - b.harga);
    } else if (criteria === 'harga_desc') {
        sorted.sort((a, b) => b.harga - a.harga);
    } else if (criteria === 'judul_asc') {
        sorted.sort((a, b) => a.judul.localeCompare(b.judul));
    }
    renderUserCatalog(sorted);
}

// -----------------------------------------------------------------------------
// DETAIL BUKU MODAL
// -----------------------------------------------------------------------------
function showBookDetail(bookId) {
    const book = initialBooks.find(b => b.id === bookId);
    if (!book) return;

    const modal = document.getElementById('book-detail-modal');
    const headerTitle = document.getElementById('modal-book-title-header');
    const body = document.getElementById('modal-book-body');

    headerTitle.textContent = book.judul;

    const stockBadge = book.stok > 0
        ? `<span class="status-badge badge-success" style="padding: 4px 12px; font-size: 12px;">Tersedia (${book.stok} pcs)</span>`
        : `<span class="status-badge badge-danger" style="padding: 4px 12px; font-size: 12px;">Stok Habis</span>`;

    body.innerHTML = `
        <div class="book-detail-layout" style="display: grid; grid-template-columns: 280px 1fr; gap: 32px; align-items: flex-start;">
            <!-- Left 3D Book Illustration -->
            <div style="background: #f8fafc; border: 1.5px solid var(--border-color); border-radius: var(--radius-lg); padding: 32px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: var(--shadow-sm);">
                <div style="width: 170px; height: 245px; background: ${book.coverGradient}; border-radius: 8px 12px 12px 8px; box-shadow: -6px 8px 24px rgba(15, 23, 42, 0.35); position: relative; border-left: 7px solid rgba(0,0,0,0.3); display: flex; flex-direction: column; justify-content: space-between; padding: 20px 16px; color: #ffffff;">
                    <div style="font-size: 9px; font-weight: 700; background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px; width: fit-content; text-transform: uppercase;">
                        ${book.kategori}
                    </div>
                    <div>
                        <div style="font-size: 15px; font-weight: 800; line-height: 1.25; margin-bottom: 6px;">${book.judul}</div>
                        <div style="font-size: 10.5px; opacity: 0.85;">${book.penulis}</div>
                    </div>
                    <div style="font-size: 9px; opacity: 0.7; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 6px;">
                        Toko Buku USK &bull; ${book.tahun}
                    </div>
                </div>
            </div>

            <!-- Right Details -->
            <div>
                <span style="font-size: 12.5px; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: 0.5px;">${book.kategori}</span>
                <h1 style="font-size: 26px; font-weight: 800; color: var(--text-main); margin: 6px 0 10px;">${book.judul}</h1>
                
                <div style="font-size: 13.5px; color: var(--text-muted); margin-bottom: 20px;">
                    Penulis: <strong style="color: var(--text-main);">${book.penulis}</strong> &bull;
                    Penerbit: <strong style="color: var(--text-main);">${book.penerbit}</strong> &bull;
                    Tahun: <strong style="color: var(--text-main);">${book.tahun}</strong>
                </div>

                <!-- Price Box -->
                <div style="background: var(--background); border: 1.5px solid var(--border-color); border-radius: var(--radius); padding: 18px 24px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-size: 11.5px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">HARGA BUKU</div>
                        <div style="font-size: 24px; font-weight: 800; color: var(--primary);">${formatRupiah(book.harga)}</div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 11.5px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">STATUS STOK</div>
                        ${stockBadge}
                    </div>
                </div>

                <div style="margin-bottom: 24px;">
                    <h3 style="font-size: 15px; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">Deskripsi / Sinopsis</h3>
                    <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">${book.deskripsi}</p>
                </div>

                <!-- Add to Cart Form -->
                ${book.stok > 0 ? `
                    <div style="display: flex; gap: 12px; align-items: flex-end;">
                        <div style="width: 90px;">
                            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px;">Jumlah</label>
                            <input type="number" id="detail-modal-qty" class="form-control" value="1" min="1" max="${book.stok}" style="text-align: center; font-weight: 700;">
                        </div>
                        <button type="button" class="btn btn-primary" style="flex: 1; padding: 12px; font-size: 14px; font-weight: 700;" onclick="handleAddToCartFromModal(${book.id})">
                            Masukkan ke Keranjang Belanja
                        </button>
                    </div>
                ` : `
                    <div class="alert alert-danger" style="margin: 0; font-size: 13.5px;">
                        Maaf, stok untuk buku ini sedang habis saat ini.
                    </div>
                `}
            </div>
        </div>
    `;

    modal.classList.add('show');
}

function closeBookDetail(event) {
    const modal = document.getElementById('book-detail-modal');
    if (modal) modal.classList.remove('show');
}

function closeBookDetailDirect() {
    const modal = document.getElementById('book-detail-modal');
    if (modal) modal.classList.remove('show');
}

function handleAddToCartFromModal(bookId) {
    const qtyInput = document.getElementById('detail-modal-qty');
    const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
    
    addToCart(bookId, qty);
    closeBookDetailDirect();
}

// -----------------------------------------------------------------------------
// CART OPERATIONS
// -----------------------------------------------------------------------------
function addToCart(bookId, qty = 1) {
    const book = initialBooks.find(b => b.id === bookId);
    if (!book) return;

    const existingIndex = cartItems.findIndex(item => item.id === bookId);
    if (existingIndex > -1) {
        cartItems[existingIndex].jumlah += qty;
    } else {
        cartItems.push({
            id: book.id,
            judul: book.judul,
            kategori: book.kategori,
            harga: book.harga,
            jumlah: qty
        });
    }

    updateCartBadge();
    renderCartTable();
    showToast(`"${book.judul}" (${qty} item) berhasil ditambahkan ke keranjang!`);
}

function updateCartQuantity(bookId, delta) {
    const item = cartItems.find(i => i.id === bookId);
    if (!item) return;

    item.jumlah += delta;
    if (item.jumlah <= 0) {
        removeCartItem(bookId);
        return;
    }

    updateCartBadge();
    renderCartTable();
}

function removeCartItem(bookId) {
    cartItems = cartItems.filter(i => i.id !== bookId);
    updateCartBadge();
    renderCartTable();
    showToast('Item berhasil dihapus dari keranjang.');
}

function updateCartBadge() {
    const totalCount = cartItems.reduce((acc, item) => acc + item.jumlah, 0);
    const navBadge = document.getElementById('nav-cart-count');
    if (navBadge) navBadge.textContent = totalCount;
}

function renderCartTable() {
    const tbody = document.getElementById('cart-table-body');
    const summaryQty = document.getElementById('cart-summary-qty');
    const summarySubtotal = document.getElementById('cart-summary-subtotal');
    const summaryTotal = document.getElementById('cart-summary-total');

    if (!tbody) return;

    if (cartItems.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 48px; color: var(--text-muted);">
                    Keranjang belanja Anda masih kosong. Silakan buka katalog untuk menambahkan buku.
                </td>
            </tr>
        `;
        if (summaryQty) summaryQty.textContent = '0';
        if (summarySubtotal) summarySubtotal.textContent = 'Rp 0';
        if (summaryTotal) summaryTotal.textContent = 'Rp 0';
        return;
    }

    let totalHarga = 0;
    let totalQty = 0;

    tbody.innerHTML = cartItems.map(item => {
        const subtotal = item.harga * item.jumlah;
        totalHarga += subtotal;
        totalQty += item.jumlah;

        return `
            <tr>
                <td>
                    <strong style="color: var(--text-main); font-size: 14px;">${item.judul}</strong>
                    <div style="font-size: 12px; color: var(--text-muted);">${item.kategori}</div>
                </td>
                <td style="font-weight: 600;">${formatRupiah(item.harga)}</td>
                <td style="text-align: center;">
                    <div style="display: inline-flex; align-items: center; border: 1.5px solid var(--border-color); border-radius: var(--radius-sm); overflow: hidden;">
                        <button type="button" onclick="updateCartQuantity(${item.id}, -1)" style="border: none; background: #f8fafc; padding: 6px 10px; cursor: pointer; font-weight: 700;">-</button>
                        <span style="padding: 6px 14px; font-weight: 700; font-size: 13.5px;">${item.jumlah}</span>
                        <button type="button" onclick="updateCartQuantity(${item.id}, 1)" style="border: none; background: #f8fafc; padding: 6px 10px; cursor: pointer; font-weight: 700;">+</button>
                    </div>
                </td>
                <td style="font-weight: 700; color: var(--primary);">${formatRupiah(subtotal)}</td>
                <td style="text-align: center;">
                    <button type="button" class="btn btn-danger btn-sm" onclick="removeCartItem(${item.id})">Hapus</button>
                </td>
            </tr>
        `;
    }).join('');

    if (summaryQty) summaryQty.textContent = totalQty.toString();
    if (summarySubtotal) summarySubtotal.textContent = formatRupiah(totalHarga);
    if (summaryTotal) summaryTotal.textContent = formatRupiah(totalHarga);
}

function simulateCheckout() {
    if (cartItems.length === 0) {
        showToast('Keranjang belanja Anda masih kosong.');
        return;
    }
    showToast('Simulasi Checkout Berhasil! Pesanan #ORD-20261124-USK dibuat.');
    cartItems = [];
    updateCartBadge();
    renderCartTable();
}

// -----------------------------------------------------------------------------
// TAB SWITCHERS
// -----------------------------------------------------------------------------
function switchUserTab(tabName, linkEl) {
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const targetPane = document.getElementById(`pane-user-${tabName}`);
    if (targetPane) targetPane.classList.add('active');

    if (linkEl) {
        linkEl.classList.add('active');
    } else {
        const matchingLink = document.getElementById(`nav-user-${tabName}`);
        if (matchingLink) matchingLink.classList.add('active');
    }

    if (tabName === 'katalog') {
        renderUserCatalog(initialBooks);
    } else if (tabName === 'keranjang') {
        renderCartTable();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchAdminTab(tabName, linkEl) {
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const targetPane = document.getElementById(`pane-admin-${tabName}`);
    if (targetPane) targetPane.classList.add('active');

    if (linkEl) {
        linkEl.classList.add('active');
    } else {
        const matchingLink = document.getElementById(`nav-admin-${tabName}`);
        if (matchingLink) matchingLink.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleAdminDropdown() {
    const menu = document.getElementById('admin-dropdown-menu');
    if (menu) menu.classList.toggle('show');
}

function closeAdminDropdown() {
    const menu = document.getElementById('admin-dropdown-menu');
    if (menu) menu.classList.remove('show');
}

// -----------------------------------------------------------------------------
// AUTH OPERATIONS
// -----------------------------------------------------------------------------
function switchAuthMode(mode) {
    const loginPane = document.getElementById('auth-login-pane');
    const registerPane = document.getElementById('auth-register-pane');
    const loginBtn = document.getElementById('tab-login-btn');
    const registerBtn = document.getElementById('tab-register-btn');

    if (mode === 'register') {
        loginPane.style.display = 'none';
        registerPane.style.display = 'block';
        loginBtn.style.color = 'var(--text-muted)';
        loginBtn.style.borderBottomColor = 'transparent';
        loginBtn.style.fontWeight = '600';
        registerBtn.style.color = 'var(--primary)';
        registerBtn.style.borderBottomColor = 'var(--primary)';
        registerBtn.style.fontWeight = '700';
    } else {
        loginPane.style.display = 'block';
        registerPane.style.display = 'none';
        loginBtn.style.color = 'var(--primary)';
        loginBtn.style.borderBottomColor = 'var(--primary)';
        loginBtn.style.fontWeight = '700';
        registerBtn.style.color = 'var(--text-muted)';
        registerBtn.style.borderBottomColor = 'transparent';
        registerBtn.style.fontWeight = '600';
    }
}

function quickFillUser() {
    document.getElementById('login-email').value = 'user@gmail.com';
    document.getElementById('login-password').value = 'user1234';
    showToast('Kredensial User terisi! Mengalihkan ke Panel User...');
    setTimeout(() => {
        window.location.href = 'user.html';
    }, 800);
}

function quickFillAdmin() {
    document.getElementById('login-email').value = 'admin@tokobuku.usk';
    document.getElementById('login-password').value = 'admin123';
    showToast('Kredensial Admin terisi! Mengalihkan ke Panel Admin...');
    setTimeout(() => {
        window.location.href = 'admin.html';
    }, 800);
}

function handleLoginPreview(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    if (email.includes('admin')) {
        showToast('Login berhasil sebagai Administrator!');
        setTimeout(() => window.location.href = 'admin.html', 700);
    } else {
        showToast('Login berhasil sebagai Pelanggan!');
        setTimeout(() => window.location.href = 'user.html', 700);
    }
}

function handleRegisterPreview(event) {
    event.preventDefault();
    const email = document.getElementById('reg-email').value;
    if (!email.endsWith('@gmail.com')) {
        alert('Pendaftaran gagal! Sesuai ketentuan USK, email wajib menggunakan domain @gmail.com');
        return;
    }
    showToast('Pendaftaran akun berhasil! Mengalihkan ke Panel User...');
    setTimeout(() => window.location.href = 'user.html', 900);
}

// -----------------------------------------------------------------------------
// INVOICE & MODALS
// -----------------------------------------------------------------------------
function showInvoiceModal(code, total, payment, status) {
    const modal = document.getElementById('invoice-modal');
    const title = document.getElementById('invoice-modal-title');
    const body = document.getElementById('invoice-modal-body');

    title.textContent = `Faktur Pesanan #${code}`;
    body.innerHTML = `
        <div style="background: #f8fafc; border: 1.5px solid var(--border-color); border-radius: var(--radius); padding: 18px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 13px; color: var(--text-muted);">Status Pesanan:</span>
                <span class="status-badge badge-danger" style="font-size: 12px;">${status}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 13px; color: var(--text-muted);">Metode Pembayaran:</span>
                <strong style="font-size: 13px;">${payment}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; border-top: 1px dashed var(--border-color); padding-top: 8px;">
                <span style="font-size: 13px; font-weight: 700;">Total Pembayaran:</span>
                <strong style="font-size: 16px; color: var(--primary);">${total}</strong>
            </div>
        </div>

        <div style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 20px;">
            Pesanan ini tercatat di basis data toko buku USK. Pengembalian dana atau kompensasi pesanan dibatalkan telah diproses ke saldo pelanggan.
        </div>

        <button type="button" class="btn btn-secondary" style="width: 100%;" onclick="closeInvoiceDirect()">Tutup Rincian</button>
    `;
    modal.classList.add('show');
}

function closeInvoiceModal(event) {
    const modal = document.getElementById('invoice-modal');
    if (modal) modal.classList.remove('show');
}

function closeInvoiceDirect() {
    const modal = document.getElementById('invoice-modal');
    if (modal) modal.classList.remove('show');
}

// Admin Reply Modal
function openAdminReplyModal(subject, sender, email, message) {
    const modal = document.getElementById('admin-reply-modal');
    const body = document.getElementById('admin-reply-body');

    body.innerHTML = `
        <div style="background: var(--background); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 16px; margin-bottom: 18px;">
            <div style="font-size: 16px; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">${subject}</div>
            <div style="font-size: 12.5px; color: var(--text-muted);">Dari: <strong>${sender}</strong> (${email}) &bull; Akun Terdaftar</div>
            <div style="margin-top: 12px; padding: 10px 14px; background: #ffffff; border: 1px solid var(--border-color); border-radius: 6px; font-size: 13.5px;">
                "${message}"
            </div>
        </div>

        <div style="margin-bottom: 18px;">
            <label style="display: block; font-size: 13px; font-weight: 700; margin-bottom: 6px;">Tuliskan Balasan Admin ke User:</label>
            <textarea id="admin-reply-input" class="form-control" rows="4" placeholder="Tuliskan jawaban atau konfirmasi untuk user ini..."></textarea>
        </div>

        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" class="btn btn-secondary" onclick="closeAdminReplyDirect()">Batal</button>
            <button type="button" class="btn btn-primary" onclick="submitAdminReply('${sender}')">Kirim Balasan ke User</button>
        </div>
    `;

    modal.classList.add('show');
}

function closeAdminReplyModal(event) {
    const modal = document.getElementById('admin-reply-modal');
    if (modal) modal.classList.remove('show');
}

function closeAdminReplyDirect() {
    const modal = document.getElementById('admin-reply-modal');
    if (modal) modal.classList.remove('show');
}

function submitAdminReply(sender) {
    showToast(`Balasan berhasil dikirimkan ke akun ${sender}!`);
    closeAdminReplyDirect();
}

function handleAddCategory(event) {
    event.preventDefault();
    const nameInput = document.getElementById('cat-name-input');
    const descInput = document.getElementById('cat-desc-input');

    const name = nameInput.value.trim();
    const desc = descInput.value.trim();

    const tbody = document.getElementById('category-table-body');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>6</td>
        <td><strong>${name}</strong></td>
        <td style="color: var(--text-muted); font-size: 13px;">${desc || '-'}</td>
        <td style="text-align: center;"><span class="status-badge" style="background:#eff6ff; color:#2563eb;">0 buku</span></td>
        <td style="text-align: center;">
            <button class="btn btn-secondary btn-sm" onclick="showToast('Fitur edit kategori')">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="this.closest('tr').remove(); showToast('Kategori berhasil dihapus');">Hapus</button>
        </td>
    `;
    tbody.appendChild(newRow);

    nameInput.value = '';
    descInput.value = '';
    showToast(`Kategori "${name}" berhasil ditambahkan!`);
}

function handleUserSendMessage(event) {
    event.preventDefault();
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    const historyContainer = document.getElementById('user-message-history');
    const newMsgCard = document.createElement('div');
    newMsgCard.style = 'background: var(--background); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 18px; margin-bottom: 14px;';
    newMsgCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <strong style="font-size: 14.5px; color: var(--text-main);">${subject}</strong>
            <span class="status-badge" style="background:#fffbeb; color:#d97706; font-size: 11px;">Menunggu Balasan Admin</span>
        </div>
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 0;">"${message}"</p>
    `;
    historyContainer.insertBefore(newMsgCard, historyContainer.firstChild);

    document.getElementById('contact-subject').value = '';
    document.getElementById('contact-message').value = '';
    showToast('Pesan Anda berhasil dikirim ke Administrator!');
}

// Inisialisasi awal saat halaman landing dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderLandingBooks(initialBooks);
});
