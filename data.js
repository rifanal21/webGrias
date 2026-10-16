/* =====================================================
   DATA.JS — EDIT ISI WEBSITE DI SINI
   Ubah teks di antara tanda kutip, simpan, lalu refresh browser.
   Jangan hapus tanda koma, kurung, atau kutip.
   ===================================================== */
const SITE = {
  nama: "GRIAS",
  namaAksen: "PROPERTY",           // bagian italic emas di logo
  menu: [["Tentang","#tentang"],["Layanan","#layanan"],["Proyek","#proyek"],["Proses","#proses"],["Kontak","#kontak"]],

  // Teks berjalan di pita emas di bawah hero
  berjalan: ["Arsitektur Tropis","Desain Minimalis","Hunian Modern","Interior","Konsultasi Properti"],

  hero: {
    baris: ["Merancang hunian", "yang menyatu dengan", "<em>alam tropis.</em>"],
    sub: "Grias Property adalah studio arsitektur dan properti yang berfokus pada hunian tropis modern — sederhana, hangat, dan bertahan lama.",
    tombol: "Mulai Konsultasi"
  },

  tentang: {
    label: "Tentang Kami",
    judul: "Ruang yang tenang, rancangan yang jujur.",
    paragraf: [
      "Kami percaya rumah yang baik tidak perlu berlebihan. Cahaya alami, sirkulasi udara, dan material yang jujur adalah dasar setiap rancangan kami.",
      "Dari studio kami di Bali, kami mendampingi klien dari gagasan pertama hingga kunci diserahkan."
    ],
    // Pasangan [angka, keterangan]. Item ke-2 juga tampil di kotak emas pada gambar.
    statistik: [["50+","Proyek Selesai"],["8","Tahun Pengalaman"],["30+","Klien Puas"],["1","Studio di Aceh "]]
  },

  layanan: {
    label: "Layanan", judul: "Apa yang kami kerjakan.",
    daftar: [
      ["Desain Arsitektur","Rancangan rumah tinggal dan villa bergaya tropis modern, lengkap dengan gambar kerja."],
      ["Desain Interior","Penataan ruang dalam yang selaras dengan arsitektur dan kebutuhan keseharian Anda."],
      ["Konsultasi Properti","Pendampingan memilih lahan, menghitung anggaran, dan merencanakan pembangunan."]
    ]
  },

  proyek: {
    label: "Proyek Pilihan", judul: "Karya terbaru kami.",
    daftar: [
      // gambar: isi link foto (https://...) atau nama file (foto/rumah1.jpg).
      // Kalau kosong, otomatis memakai ilustrasi rumah.
      {nama:"Rumah Teduh", info:"Hunian Tropis · Aceh · 2025", gambar:""},
      {nama:"Villa Senja", info:"Villa · Ubud · 2025", gambar:""},
      {nama:"Rumah Pelataran", info:"Hunian Keluarga · Aceh  · 2024", gambar:""},
      {nama:"Studio Langit", info:"Komersial · Aceh  · 2024", gambar:""}
    ]
  },

  proses: {
    label: "Proses Kerja", judul: "Dari ide menjadi rumah.",
    langkah: [
      ["Konsultasi","Kami mendengar kebutuhan, lahan, dan anggaran Anda."],
      ["Konsep","Sketsa awal dan denah untuk disepakati bersama."],
      ["Detail","Gambar kerja dan rincian material yang lengkap."],
      ["Bangun","Pengawasan agar hasil sesuai rancangan."]
    ]
  },

  testimoni: {
    label: "Kata Klien", judul: "Mereka yang sudah percaya.",
    daftar: [
      {teks:"Rumahnya terasa sejuk dan terang sepanjang hari. Prosesnya rapi dan komunikatifnya enak.", nama:"Contoh Klien A", peran:"Pemilik Rumah Teduh"},
      {teks:"Desainnya sederhana tapi berkelas. Banyak tamu yang bertanya siapa arsiteknya.", nama:"Contoh Klien B", peran:"Pemilik Villa Senja"},
      {teks:"Dari konsultasi sampai serah terima, semuanya sesuai rencana dan anggaran.", nama:"Contoh Klien C", peran:"Pemilik Rumah Pelataran"}
    ]
  },

  kontak: {
    label: "Kontak", judul: "Mari bicarakan rumah impian Anda.",
    teks: "Ceritakan rencana Anda, kami siap membantu dari tahap paling awal.",
    tombol: "Kirim Pesan WhatsApp",
    wa: "6285360620605",             // nomor WA tanpa tanda + dan spasi
    pesanWA: "Halo Grias Property, saya ingin berkonsultasi.",
    instagram: "https://www.instagram.com/griasproperty?psln=eG1rdHBlbXB1bHo5",
    info: [["Studio","Aceh, Indonesia"],["Email","halo@griasproperty.com"],["WhatsApp","+62 853-6062-0605"],["Instagram","@griasproperty"]]
  },

  footer: "© 2026 GRIAS PROPERTY. SEMUA HAK DILINDUNGI."
};