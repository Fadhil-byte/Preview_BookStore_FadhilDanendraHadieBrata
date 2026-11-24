# Preview_BookStore_FadhilDanendraHadieBrata

Repositori ini memuat berkas pratinjau antarmuka (*frontend preview*) mandiri berbasis **Vanilla HTML, CSS, dan JavaScript** yang dibuat **100% identik dengan tampilan sistem asli Toko Buku USK (BukuKita USK)**.

---

## 🎨 Desain UI/UX (Figma)
Rancangan antarmuka visual sistem ini dapat diakses pada tautan Figma berikut:
* **Figma Project:** [USK Book Store - Fadhil](https://www.figma.com/design/HAhu7pnLgQ0O2KBmLJ33Z5/USK-Book_Store-Fadhil?node-id=0-1&t=nqpwRJVbiNqHJ2Go-1)

---

## 📱 Daftar Halaman Pratinjau

1. **Landing Page (`index.html`)**
   * Desain identik dengan halaman muka sistem Laravel.
   * Hero banner resmi Universitas Syiah Kuala dengan tombol akses cepat.
   * Kartu ketentuan wajib masuk akun sebelum checkout.
   * Statistik operasional toko (Judul Buku, Kategori, Pengguna, Metode Bayar).
   * Alur 4 langkah pemesanan buku.
   * Cuplikan rekomendasi buku terbaru dengan filter kategori, pencarian live, dan modal rincian sinopsis buku.
   * Tiga kartu keunggulan toko buku dan CTA pendaftaran akun.

2. **Login & Registrasi Akun (`auth.html`)**
   * Tab interaktif untuk beralih antara formulir Masuk ke Akun dan Pendaftaran Akun Baru.
   * Validasi email pendaftaran wajib berdomain `@gmail.com` dan kata sandi minimal 8 karakter.
   * Tombol *quick-fill* akun demo (User & Admin) untuk pengujian cepat.

3. **Panel Pelanggan / User (`user.html`)**
   * **Dashboard User:** Sambutan selamat datang pelanggan, panduan informasi belanja, dan banner pintasan.
   * **Katalog Buku:** Pencarian buku, filter kategori, pengurutan harga, serta modal detail buku lengkap dengan kuantitas pemesanan.
   * **Keranjang Belanja:** Perhitungan otomatis jumlah eksemplar, subtotal belanja, dan simulasi proses checkout.
   * **Pesanan Saya:** Tabel riwayat transaksi dengan badge status bayar dan status pesanan, serta modal detail faktur (#ORD-...).
   * **Contact Admin:** Formulir pengiriman pertanyaan ke pengelola toko dan riwayat pesan yang telah dibalas admin.

4. **Panel Administrator (`admin.html`)**
   * **Dashboard Admin:** Statistik 5 metrik utama toko, panduan tugas operasional administrator, dan tombol pintasan menu.
   * **Kelola Kategori:** Formulir penambahan kategori baru di sisi kiri dan tabel daftar kategori di sisi kanan.
   * **Daftar Pesanan Admin:** Monitoring seluruh pesanan buku dari berbagai pelanggan beserta status verifikasi.
   * **Pesan Masuk:** Daftar pesan pelanggan dengan fitur buka modal baca pesan dan pengiriman balasan admin.
   * **Data User:** Rekapitulasi akun terdaftar di sistem beserta hak akses (*role*).

---

## 📁 Struktur Direktori

```text
preview-website/
├── css/
│   └── style.css       # Desain murni (Design Tokens, Components, Modals)
├── js/
│   └── app.js          # Logika interaktif (Katalog, Keranjang, Modal 3D, Tabs)
├── admin.html          # Pratinjau antarmuka Administrator
├── auth.html           # Pratinjau Masuk & Daftar Akun
├── index.html          # Pratinjau Landing Page & Katalog Utama
├── README.md           # Dokumentasi repositori
└── user.html           # Pratinjau Panel Pelanggan / Pembeli
```

---

## 🚀 Cara Menjalankan

Seluruh berkas dibuat menggunakan standar web murni (HTML5, CSS3, ES6) tanpa perlu server lokal khusus atau `npm run dev`:
1. Clone repositori ini atau unduh berkas ZIP:
   ```bash
   git clone https://github.com/Fadhil-byte/Preview_BookStore_FadhilDanendraHadieBrata.git
   cd Preview_BookStore_FadhilDanendraHadieBrata
   ```
2. Buka berkas `index.html` langsung menggunakan peramban web pilihan Anda (Google Chrome, Microsoft Edge, Mozilla Firefox).
3. Gunakan bilah navigasi hitam di bagian paling atas (**PREVIEW MODE**) untuk berpindah cepat antar halaman.

---

&copy; 2026 Toko Buku USK. Dikembangkan oleh **Muhammad Fadhil Danendra Hadie Brata**.
