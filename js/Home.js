// Mengambil elemen yang dibutuhkan dari HTML
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// --- Bagian 1: Animasi Buka-Tutup (Kode Anda) ---
// Menambahkan event listener pada tombol klik
btn.addEventListener('click', () => {
    // Menambah/menghapus kelas 'active' pada container search
    search.classList.toggle('active');

    // Memberikan fokus (agar kursor langsung aktif) ke input field
    input.focus();
});


// --- Bagian 2: Fungsi Pencarian (Tambahan Baru) ---
// Menambahkan event listener pada input field untuk mendeteksi tombol keyboard
input.addEventListener('keyup', (event) => {
    // Memeriksa apakah tombol yang ditekan adalah "Enter"
    if (event.key === 'Enter') {
        // 1. Mengambil teks yang diketik oleh pengguna
        const searchTerm = input.value;

        // 2. Memeriksa apakah input tidak kosong
        if (searchTerm.trim() !== '') {
            // 3. Lakukan sesuatu dengan teks tersebut
            //    Untuk sekarang, kita tampilkan dalam sebuah alert.
            alert('Anda mencari: ' + searchTerm);

            // Di aplikasi nyata, Anda mungkin akan mengarahkan pengguna
            // ke halaman hasil pencarian, seperti ini:
            // window.location.href = '/search-results.html?q=' + searchTerm;
        }
    }
});
