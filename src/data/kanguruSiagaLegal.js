export const KANGURU_SIAGA_META = {
  appName: "Kanguru Siaga",
  developer: "KuliTech (Tim Pengembang Kanguru Siaga)",
  publisher: "KuliTech",
  effectiveDate: "11 November 2026",
  version: "1.1",
  compliance:
    "Sesuai Undang-Undang Republik Indonesia No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), Standar Etika Medis Perinatologi, serta Kebijakan Data Safety, Health Apps, dan Alarm Google Play Console.",
  category: "Kesehatan & Kebugaran Maternal & Neonatal (Maternal & Infant Health)",
  jurisdiction: "Republik Indonesia",
  emails: ["support@kulitech.my.id"],
  privacyPolicyUrl: "/kanguru-siaga/privacy-policy",
  termsOfUseUrl: "/kanguru-siaga/term-of-use",
};

export const TERMS_OF_USE_DATA = {
  id: "term-of-use",
  badge: "TERMS OF USE • BAGIAN I",
  title: "Ketentuan Penggunaan Aplikasi Kanguru Siaga",
  subtitle:
    "Dokumen Resmi Ketentuan Layanan (Terms of Use) untuk Aplikasi Mobile Kanguru Siaga.",
  companionLink: {
    label: "Lihat Kebijakan Privasi (Privacy Policy)",
    href: "/kanguru-siaga/privacy-policy",
  },
  intro: [
    [
      "Selamat datang di ",
      { bold: "Kanguru Siaga" },
      ". Dengan mengunduh, memasang (",
      { italic: "install" },
      "), mengakses, atau menggunakan aplikasi mobile Kanguru Siaga (\"Aplikasi\"), Anda menyatakan bahwa Anda telah membaca, memahami, menyetujui, dan mengikatkan diri secara hukum pada seluruh syarat dan ketentuan yang tercantum dalam Ketentuan Penggunaan ini.",
    ],
    [
      "Jika Anda tidak menyetujui sebagian atau seluruh ketentuan ini, mohon untuk tidak menggunakan Aplikasi ini.",
    ],
  ],
  sections: [
    {
      id: "penerimaan-ketentuan",
      number: "1",
      title: "Penerimaan Ketentuan",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Ketentuan Penggunaan ini merupakan perjanjian hukum yang mengikat antara Anda selaku pengguna (\"Pengguna\", \"Anda\") dan ",
            { bold: "KuliTech" },
            " selaku tim pengembang resmi Aplikasi Kanguru Siaga (\"Pengembang\", \"Kami\"). Penggunaan Aplikasi juga tunduk pada ",
            {
              link: {
                label: "Kebijakan Privasi",
                href: "/kanguru-siaga/privacy-policy",
              },
            },
            " yang merupakan satu kesatuan yang tidak terpisahkan dari dokumen ini.",
          ],
        },
      ],
    },
    {
      id: "penyangkalan-medis-penting",
      number: "2",
      title: "Penyangkalan Medis Penting (Medical Disclaimer)",
      blocks: [
        {
          type: "warning",
          title:
            "APLIKASI KANGURU SIAGA BUKAN PERANGKAT MEDIS (MEDICAL DEVICE) DAN BUKAN PENGGANTI DOKTER.",
          paragraphs: [
            [
              "Seluruh konten, kalkulasi, pengingat, kurva grafik, dan materi edukasi yang disajikan dalam Aplikasi disediakan ",
              {
                bold: "semata-mata untuk tujuan informasi umum, pemantauan mandiri di rumah (home monitoring), dan alat bantu edukatif.",
              },
            ],
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "Bukan Pengganti Nasihat Klinis: " },
                "Informasi dalam Aplikasi tidak boleh digunakan untuk mendiagnosis penyakit, menentukan resep obat, atau mengubah rencana terapi medis tanpa persetujuan dokter spesialis anak atau tenaga medis profesional Anda.",
              ],
            },
            {
              content: [
                { bold: "Kondisi Kegawatan & Tanggap Darurat: " },
                "Jika si kecil menunjukkan tanda-tanda kegawatan klinis BBLR seperti:",
              ],
              subList: {
                ordered: false,
                items: [
                  {
                    content: [
                      "Henti napas (",
                      { italic: "apnea" },
                      ") lebih dari 20 detik atau napas megap-megap;",
                    ],
                  },
                  {
                    content: [
                      "Tubuh, bibir, atau lidah membiru/pucat (",
                      { italic: "sianosis" },
                      ");",
                    ],
                  },
                  {
                    content: [
                      "Tubuh teraba sangat dingin (suhu aksila < 36,0°C) atau demam tinggi (> 37,5°C);",
                    ],
                  },
                  {
                    content: [
                      "Kejang, tubuh kaku, atau lunglai lemas (",
                      { italic: "letargis" },
                      ");",
                    ],
                  },
                  {
                    content: ["Malas menyusu atau memuntahkan semua asupan;"],
                  },
                ],
              },
              afterText: [
                {
                  bold: "SEGERA BAWA BAYI KE UNIT GAWAT DARURAT (UGD) ATAU FASILITAS KESEHATAN TERDEKAT. ",
                },
                "Jangan menunda pertolongan medis darurat karena mengandalkan Aplikasi.",
              ],
            },
            {
              content: [
                { bold: "Kepatuhan Protokol Rumah Sakit: " },
                "Jika terdapat perbedaan antara panduan di dalam Aplikasi dengan instruksi tertulis yang diberikan oleh dokter/fasilitas kesehatan tempat si kecil dirawat, ",
                { bold: "instruksi dokter Anda yang wajib diprioritaskan." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "tujuan-hakikat-aplikasi",
      number: "3",
      title: "Tujuan & Hakikat Aplikasi",
      blocks: [
        {
          type: "paragraph",
          content: ["Kanguru Siaga dikembangkan untuk:"],
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                "Mendukung orang tua dan keluarga dalam menerapkan ",
                { bold: "Perawatan Metode Kanguru (PMK / " },
                { bold: "Kangaroo Mother Care", italic: true },
                { bold: ")" },
                " secara konsisten dan terarah di rumah.",
              ],
            },
            {
              content: [
                "Memfasilitasi pencatatan durasi kontak kulit-ke-kulit (",
                { italic: "skin-to-skin contact" },
                ") harian guna mencapai target medis (minimal 8 jam/hari hingga 24 jam kontinu).",
              ],
            },
            {
              content: [
                "Membantu memvisualisasikan tren ",
                { italic: "catch-up growth" },
                " bayi prematur menggunakan kurva ",
                { bold: "Fenton Preterm Growth Chart (2013/2025)" },
                " dan rujukan ",
                { bold: "Buku KIA Khusus Bayi Kecil (Kemenkes RI, 2021)" },
                ".",
              ],
            },
            {
              content: [
                "Meningkatkan literasi keluarga mengenai teknik pemberian nutrisi (ASI/OGT/NGT), higiene, skrining lanjutan bayi prematur, serta pencegahan komplikasi hipotermia.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "kelayakan-pengguna",
      number: "4",
      title: "Kelayakan Pengguna",
      blocks: [
        {
          type: "paragraph",
          content: ["Aplikasi ini ditujukan bagi:"],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                "Orang tua kandung, wali sah, keluarga, atau pengasuh yang merawat bayi prematur atau Bayi Berat Lahir Rendah (BBLR).",
              ],
            },
            {
              content: [
                "Tenaga kesehatan (dokter spesialis anak, dokter umum, bidan, perawat perinatologi/NICU) yang mendampingi edukasi keluarga pasca-rawat inap.",
              ],
            },
            {
              content: [
                "Pengguna wajib berusia minimal 18 tahun atau telah cakap hukum menurut peraturan perundang-undangan di Republik Indonesia.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "fitur-utama-panduan",
      number: "5",
      title: "Fitur Utama & Panduan Penggunaan yang Sah",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Pengguna berhak menggunakan fitur-fitur berikut sesuai dengan peruntukannya:",
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "Pencatatan Identitas & Profil Bayi: " },
                "Pengisian data biologis kelahiran bayi (nama, tanggal lahir, usia gestasi, berat, panjang, lingkar kepala, dan foto opsional) untuk personalisasi kurva dan usia kronologis/koreksi.",
              ],
            },
            {
              content: [
                { bold: "Timer & Pencatatan Sesi PMK: " },
                "Penggunaan pengatur waktu (",
                { italic: "timer" },
                ") kontinu/intermiten dan input sesi manual untuk menghitung akumulasi jam dekapan harian beserta rekapitulasi mingguan.",
              ],
            },
            {
              content: [
                { bold: "Grafik Pertumbuhan Fenton: " },
                "Plotting data antropometri ke dalam grafik standar internasional berbasis Usia Pascamenstruasi (PMA 22–50 minggu), baik melalui data referensi lokal maupun sinkronisasi grafik/Z-score resmi FentonGrowth.ca.",
              ],
            },
            {
              content: [
                { bold: "Jadwal & Alarm Pemberian ASI: " },
                "Pengingat audio-getar interval nutrisi rutin setiap 2–3 jam (termasuk bagi bayi dengan selang OGT/NGT).",
              ],
            },
            {
              content: [
                { bold: "Katalog Video & Modul Edukasi: " },
                "Pembelajaran teknik memandikan, posisi dekapan kanguru yang aman, tanda kegawatan, menyusui, dan pengukuran antropometri.",
              ],
            },
            {
              content: [
                { bold: "Penapisan & Lembar Hasil Skrining Prematur: " },
                "Pencatatan jadwal pengingat alarm untuk 4 skrining wajib IDAI/Kemenkes (USG Kepala, Retinopati Prematuritas/ROP, Pendengaran OAE/BERA, dan Fungsi Tiroid) maupun skrining spesialis tambahan kustom, lengkap dengan catatan temuan medis dan lampiran berkas di penyimpanan lokal perangkat.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "kewajiban-tanggung-jawab-data",
      number: "6",
      title: "Kewajiban & Tanggung Jawab Pengguna atas Data",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "Keakuratan Input Data: " },
                "Pengguna bertanggung jawab penuh atas kebenaran, keakuratan, dan validitas data yang dimasukkan ke dalam Aplikasi (seperti tanggal lahir, berat badan, panjang badan, lingkar kepala, dan usia kehamilan). Kesalahan input dapat menyebabkan kurva pertumbuhan dan kalkulasi usia menjadi tidak akurat.",
              ],
            },
            {
              content: [
                { bold: "Keamanan Perangkat Fisik: " },
                "Karena data riwayat operasional, foto profil bayi, dan lampiran hasil medis tersimpan secara lokal di memori ponsel pintar Anda, Anda bertanggung jawab menjaga keamanan fisik perangkat dan akses kunci layar (",
                { italic: "PIN/Kata Sandi/Biometrik" },
                ") agar tidak diakses pihak yang tidak berhak.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "hak-kekayaan-intelektual",
      number: "7",
      title: "Hak Kekayaan Intelektual",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                "Seluruh kode sumber, arsitektur perangkat lunak, antarmuka visual (UI), pengalaman pengguna (UX), merek \"Kanguru Siaga\", maskot ilustrasi, teks materi edukasi, serta video panduan adalah kekayaan intelektual milik ",
                { bold: "KuliTech (Tim Pengembang Kanguru Siaga)" },
                " atau pemegang lisensi resminya dan dilindungi oleh Undang-Undang Hak Cipta Republik Indonesia.",
              ],
            },
            {
              content: [
                "Kurva dan metodologi pertumbuhan mengacu pada ",
                { italic: "Fenton Preterm Growth Chart" },
                " (Hak Cipta © Dr. Tanis Fenton / University of Calgary) dan Buku KIA Khusus Bayi Kecil (Hak Cipta © Kementerian Kesehatan Republik Indonesia). Penggunaan standar ini dalam Aplikasi semata-mata bersifat akademis, edukatif klinis, dan non-komersial untuk keselamatan bayi.",
              ],
            },
            {
              content: [
                "Pengguna dilarang menyalin, memodifikasi, merekayasa balik (",
                { italic: "reverse engineering" },
                "), mendekompilasi, mendistribusikan ulang, atau mengeksploitasi materi dalam Aplikasi untuk tujuan komersial tanpa izin tertulis dari Kami.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "larangan-penggunaan",
      number: "8",
      title: "Larangan Penggunaan (Prohibited Conduct)",
      blocks: [
        {
          type: "paragraph",
          content: ["Dalam menggunakan Aplikasi, Pengguna dilarang:"],
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                "Memasukkan data palsu, identitas yang bukan merupakan anak dalam pengasuhan sah Anda, atau muatan berbahaya secara sengaja.",
              ],
            },
            {
              content: [
                "Mengganggu, meretas, melumpuhkan, atau mencoba membobol integritas server, database Cloud Firestore, API eksternal, atau infrastruktur Aplikasi.",
              ],
            },
            {
              content: [
                "Menggunakan alat otomatis (",
                { italic: "bots, scrapers, crawlers" },
                ") untuk mengambil data atau konten dari Aplikasi tanpa izin tertulis.",
              ],
            },
            {
              content: [
                "Menggunakan Aplikasi untuk tindakan melanggar hukum di wilayah Republik Indonesia.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "batasan-tanggung-jawab",
      number: "9",
      title: "Batasan Tanggung Jawab (Limitation of Liability)",
      blocks: [
        {
          type: "paragraph",
          content: ["Sejauh diizinkan oleh hukum yang berlaku:"],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "KuliTech" },
                " tidak bertanggung jawab atas kerugian fisik, cedera, komplikasi kesehatan, kematian, atau kerugian material/immaterial yang timbul akibat:",
              ],
              subList: {
                ordered: false,
                items: [
                  {
                    content: [
                      "Keterlambatan mencari bantuan medis profesional atau anggapan keliru bahwa aplikasi merupakan alat pemantau tanda-tanda vital otomatis;",
                    ],
                  },
                  {
                    content: [
                      "Kesalahan penafsiran mandiri terhadap grafik pertumbuhan, persentil, Z-score, atau materi edukasi;",
                    ],
                  },
                  {
                    content: [
                      "Kegagalan fungsi atau tidak berbunyinya alarm pengingat akibat perangkat mati, pencabutan izin sistem oleh pengguna, atau pembatasan latar belakang ekstrem oleh produsen perangkat;",
                    ],
                  },
                  {
                    content: [
                      "Kehilangan data lokal yang disebabkan oleh kerusakan perangkat, ",
                      { italic: "factory reset" },
                      ", atau penghapusan aplikasi (",
                      { italic: "uninstall" },
                      ") oleh Pengguna.",
                    ],
                  },
                ],
              },
            },
            {
              content: [
                "Aplikasi disediakan atas dasar ",
                { bold: "\"SEBAGAIMANA ADANYA\" (" },
                { bold: "AS IS", italic: true },
                { bold: ")" },
                " dan ",
                { bold: "\"SEBAGAIMANA TERSEDIA\" (" },
                { bold: "AS AVAILABLE", italic: true },
                { bold: ")" },
                " tanpa jaminan tersurat maupun tersirat apa pun.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "pembaruan-modifikasi-layanan",
      number: "10",
      title: "Pembaruan & Modifikasi Layanan",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Kami berhak untuk sewaktu-waktu memperbarui, menambah fitur, memperbaiki celah (",
            { italic: "bug" },
            "), atau mengubah Ketentuan Penggunaan ini demi penyelarasan pedoman klinis terbaru dan peningkatan mutu teknis. Pembaruan ketentuan akan diinformasikan melalui pembaruan Aplikasi pada Google Play Store serta pembaruan dokumen di dalam menu ",
            { bold: "Pengaturan > Legalitas & Privasi > Ketentuan Penggunaan" },
            ".",
          ],
        },
      ],
    },
    {
      id: "hukum-yurisdiksi",
      number: "11",
      title: "Hukum yang Mengatur & Yurisdiksi",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Ketentuan Penggunaan ini diatur dan ditafsirkan sesuai dengan hukum Negara Republik Indonesia. Segala perselisihan yang timbul akan diupayakan penyelesaiannya melalui musyawarah untuk mufakat dalam jangka waktu 30 (tiga puluh) hari kalender, dan apabila tidak tercapai kesepakatan, diselesaikan melalui yurisdiksi pengadilan negeri yang berwenang di Republik Indonesia.",
          ],
        },
      ],
    },
    {
      id: "kontak-layanan-pengaduan",
      number: "12",
      title: "Kontak & Layanan Pengaduan",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Apabila Anda memiliki pertanyaan, keberatan, permohonan akses/penghapusan data pribadi, atau masukan terkait Ketentuan Penggunaan dan Kebijakan Privasi ini, silakan hubungi pengembang melalui saluran resmi berikut:",
          ],
        },
        {
          type: "contactCard",
        },
      ],
    },
  ],
  closing:
    "Dengan melanjutkan dan menggunakan Aplikasi Kanguru Siaga, Anda mengakui bahwa Anda telah membaca, memahami, serta menyetujui Ketentuan Penggunaan dan Kebijakan Privasi ini secara sukarela dan sadar hukum.",
};

export const PRIVACY_POLICY_DATA = {
  id: "privacy-policy",
  badge: "PRIVACY POLICY • BAGIAN II",
  title: "Kebijakan Privasi Aplikasi Kanguru Siaga",
  subtitle:
    "Dokumen Resmi Kebijakan Pelindungan Data Pribadi (Privacy Policy) untuk Aplikasi Mobile Kanguru Siaga.",
  companionLink: {
    label: "Lihat Ketentuan Penggunaan (Terms of Use)",
    href: "/kanguru-siaga/term-of-use",
  },
  intro: [
    [
      "Kami di ",
      { bold: "KuliTech" },
      " selaku pengembang aplikasi ",
      { bold: "Kanguru Siaga" },
      " menghargai dan menjunjung tinggi privasi Anda serta buah hati Anda. Kebijakan Privasi ini menjelaskan secara transparan bagaimana kami mengumpulkan, memproses, menyimpan, mengirimkan kepada sub-prosesor tepercaya, melindungi, dan menghapus data pribadi Anda saat menggunakan Aplikasi Kanguru Siaga, sesuai dengan ",
      {
        bold: "Undang-Undang Republik Indonesia No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)",
      },
      " dan standar transparansi Google Play Console.",
    ],
  ],
  sections: [
    {
      id: "komitmen-privasi-uu-pdp",
      number: "1",
      title: "Komitmen Privasi & Dasar Hukum Pemrosesan Data Spesifik (UU PDP)",
      blocks: [
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                { bold: "Kategori Data Pribadi Bersifat Spesifik: " },
                "Informasi kelahiran, kondisi prematuritas/BBLR, parameter pertumbuhan antropometri, catatan skrining medis, dan data anak tergolong sebagai ",
                { bold: "Data Pribadi yang Bersifat Spesifik" },
                " sebagaimana diatur dalam ",
                { bold: "Pasal 4 ayat (2) UU PDP" },
                ".",
              ],
            },
            {
              content: [
                { bold: "Dasar Hukum Pemrosesan (Persetujuan Eksplisit): " },
                "Seluruh pemrosesan data pribadi bersifat spesifik dalam Aplikasi ini didasarkan pada ",
                { bold: "persetujuan sah secara eksplisit (" },
                { bold: "explicit consent", italic: true },
                { bold: ")" },
                " yang diberikan oleh Anda selaku orang tua kandung atau wali hukum yang berwenang — termasuk melalui konfirmasi pada layar ",
                { bold: "Konfirmasi Data Bayi" },
                " saat onboarding (sebelum penyimpanan lokal maupun sinkronisasi ke Cloud Firestore dijalankan) serta konfirmasi interaktif sebelum akses grafik online ke ",
                { bold: "FentonGrowth.ca" },
                ".",
              ],
            },
            {
              content: [
                { bold: "Tidak Ada Penjualan Data: " },
                "Kami ",
                { bold: "TIDAK PERNAH" },
                " menjual, memperdagangkan, atau menyewakan data pribadi maupun data kesehatan bayi Anda kepada pihak ketiga, broker data, atau jaringan periklanan komersial mana pun.",
              ],
            },
            {
              content: [
                { bold: "Desentralisasi Data (" },
                { bold: "Offline-First & Privacy by Design", italic: true },
                { bold: "): " },
                "Sebagian besar catatan harian, media foto, dan dokumen medis disimpan secara privat di memori internal perangkat Anda dan dapat digunakan tanpa registrasi akun email maupun nomor telepon pribadi.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "informasi-data-dikumpulkan",
      number: "2",
      title: "Informasi & Data yang Kami Kumpulkan",
      blocks: [
        {
          type: "table",
          minWidthClass: "min-w-[760px]",
          headers: [
            "Kategori Data",
            "Rincian Jenis Data",
            "Tempat Penyimpanan / Pengiriman",
            "Tujuan Pemrosesan",
          ],
          rows: [
            [
              [{ bold: "Identitas Kelahiran & Profil Onboarding Bayi" }],
              [
                "Nama panggilan/lengkap bayi, tanggal lahir (epoch & terformat), usia kehamilan lahir (minggu), berat lahir (gram), berat saat onboarding (gram), panjang lahir & saat ini (cm), lingkar kepala lahir & saat ini (cm), jenis kelamin, versi aplikasi, dan ",
                { italic: "environment" },
                " build.",
              ],
              [
                "Disimpan lokal di Room SQLite ",
                { bold: "serta" },
                " disinkronkan satu kali saat onboarding (bila perangkat ",
                { italic: "online" },
                ") ke koleksi ",
                { code: "baby_onboarding_profiles" },
                " di Cloud Firestore.",
              ],
              [
                "Menghitung usia kronologis, PMA, dan usia koreksi; menentukan kurva Fenton; deteksi kategori BBLR; serta pencatatan agregat onboarding sistem.",
              ],
            ],
            [
              [{ bold: "Data Antropometri & Pertumbuhan Berkala" }],
              [
                "Catatan pengukuran berat, panjang, dan lingkar kepala berkala beserta tanggal pengukuran, kalkulasi persentil/Z-score, berkas CSV lokal (",
                { code: "fenton_zscore_*.csv" },
                "), dan cache gambar grafik.",
              ],
              [
                "Disimpan lokal di perangkat (Room SQLite & filesDir/cacheDir). Hanya dikirim ke ",
                { bold: "FentonGrowth.ca API" },
                " ketika pengguna mengonfirmasi fitur grafik/Z-score online.",
              ],
              [
                "Memantau kurva ",
                { italic: "catch-up growth" },
                " berbasis Fenton (2013/2025) dan memperoleh kalkulasi Z-score serta persentil resmi.",
              ],
            ],
            [
              [{ bold: "Data Aktivitas PMK, Nutrisi, & Pengingat" }],
              [
                "Waktu mulai/selesai kontak ",
                { italic: "skin-to-skin" },
                ", durasi sesi, target harian PMK, jadwal pengingat PMK, dan jadwal alarm minum ASI/OGT/NGT.",
              ],
              [
                { bold: "100% Lokal di perangkat" },
                " (Room SQLite & DataStore). Tidak dikirim ke Cloud Firestore.",
              ],
              [
                "Menghitung capaian target harian PMK, grafik mingguan, dan menjadwalkan alarm pengingat tepat waktu.",
              ],
            ],
            [
              [{ bold: "Data Skrining Medis & Lampiran Klinis" }],
              [
                "Jadwal 4 skrining wajib IDAI/Kemenkes & skrining kustom, catatan temuan/resume klinis dokter, serta ",
                { bold: "berkas lampiran medis" },
                " (foto cetak USG/retina atau file PDF resume lab, maks 10 MB per berkas).",
              ],
              [
                { bold: "100% Lokal di perangkat" },
                " (Room SQLite & direktori internal ",
                { code: "screening_attachments/" },
                "). ",
                { bold: "TIDAK PERNAH" },
                " diunggah ke Cloud Firestore atau server kami.",
              ],
              [
                "Mengarsipkan hasil evaluasi medis bayi di perangkat pengasuh dan mengingatkan jadwal tindak lanjut spesialis.",
              ],
            ],
            [
              [{ bold: "Media (Foto Profil Bayi)" }],
              [
                "Foto profil bayi yang diambil via kamera sistem atau dipilih lewat Android Photo Picker.",
              ],
              [
                { bold: "100% Lokal di perangkat" },
                " (direktori internal ",
                { code: "baby_photos/" },
                "). ",
                { bold: "TIDAK PERNAH" },
                " diunggah ke server cloud kami.",
              ],
              [
                "Personalisasi visual kartu identitas bayi di dalam Aplikasi pada perangkat pengguna.",
              ],
            ],
            [
              [{ bold: "Data Diagnostik & Log Error (Firebase Crashlytics)" }],
              [
                "Model perangkat, versi OS, versi aplikasi, ",
                { italic: "stack trace" },
                " crash/error non-fatal, ID dokumen Firestore hasil sinkronisasi, serta log breadcrumb lokal saat terjadi peristiwa sinkronisasi/error.",
              ],
              [
                "Dikirim ke ",
                { bold: "Google Firebase Crashlytics" },
                " saat terjadi error atau peristiwa sinkronisasi terkait crash.",
              ],
              [
                "Penelusuran kesalahan teknis dan peningkatan keandalan Aplikasi tanpa mencatat nama bayi pada log breadcrumb.",
              ],
            ],
          ],
        },
      ],
    },
    {
      id: "arsitektur-penyimpanan-data",
      number: "3",
      title: "Arsitektur Penyimpanan Data: Lokal & Cloud Firestore",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Arsitektur data Kanguru Siaga memisahkan penyimpanan privat di perangkat dan sinkronisasi cloud terbatas secara jelas:",
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "Penyimpanan Lokal Perangkat (" },
                { bold: "Local Device Storage — Offline-First", italic: true },
                { bold: "):" },
              ],
              subList: {
                ordered: false,
                items: [
                  {
                    content: [
                      "Menggunakan database ",
                      { bold: "Room (SQLite)" },
                      ", ",
                      { bold: "DataStore Preferences" },
                      ", serta direktori penyimpanan internal privat ",
                      { bold: "Android Application Sandbox" },
                      " (",
                      { code: "filesDir" },
                      " dan ",
                      { code: "cacheDir" },
                      ").",
                    ],
                  },
                  {
                    content: [
                      "Data yang ",
                      { bold: "100% hanya tersimpan secara lokal" },
                      " di perangkat Anda meliputi:",
                    ],
                    subList: {
                      ordered: false,
                      items: [
                        {
                          content: [
                            "Seluruh log sesi harian PMK, statistik, dan pengaturan alarm PMK maupun nutrisi ASI/OGT/NGT;",
                          ],
                        },
                        {
                          content: [
                            "Seluruh entri pengukuran antropometri berkala lanjutan, hasil parser Z-score CSV lokal (",
                            { code: "fenton_zscore_*.csv" },
                            "), dan gambar cache grafik;",
                          ],
                        },
                        {
                          content: [
                            "Seluruh jadwal skrining lanjutan, catatan temuan/resume medis dokter, serta ",
                            { bold: "seluruh berkas lampiran dokumen medis" },
                            " (foto hasil atau PDF hingga 10 MB di folder ",
                            { code: "screening_attachments/" },
                            " via ",
                            { code: "ScreeningAttachmentManager" },
                            ");",
                          ],
                        },
                        {
                          content: [
                            { bold: "Foto profil bayi" },
                            " (di folder ",
                            { code: "baby_photos/" },
                            " via ",
                            { code: "PhotoStorageManager" },
                            ");",
                          ],
                        },
                        {
                          content: [
                            "Preferensi tampilan (tema, skala ukuran teks, status izin notifikasi).",
                          ],
                        },
                      ],
                    },
                  },
                  {
                    content: [
                      "Seluruh fitur inti pemantauan harian tetap berjalan penuh dalam mode ",
                      { italic: "offline" },
                      " (tanpa internet).",
                    ],
                  },
                ],
              },
            },
            {
              content: [
                { bold: "Sinkronisasi Cloud Terbatas (" },
                { bold: "Google Cloud Firestore", italic: true },
                { bold: "):" },
              ],
              subList: {
                ordered: false,
                items: [
                  {
                    content: [
                      "Hanya pada saat pendaftaran profil bayi awal (",
                      { bold: "onboarding" },
                      ") setelah pengguna mengonfirmasi data pada layar ",
                      { italic: "Konfirmasi Data Bayi" },
                      " ",
                      { bold: "dan" },
                      " apabila perangkat sedang terhubung ke internet (",
                      { italic: "online" },
                      "), Aplikasi melakukan pengiriman satu kali secara latar belakang (",
                      { italic: "non-blocking" },
                      ") ke koleksi ",
                      { code: "baby_onboarding_profiles" },
                      " menggunakan ID dokumen yang dibuat otomatis (",
                      { italic: "auto-generated Document ID" },
                      ").",
                    ],
                  },
                  {
                    content: [
                      "Daftar lengkap ",
                      { bold: "15 field" },
                      " yang dikirim ke Cloud Firestore (sesuai skema DTO & ",
                      { code: "firestore.rules" },
                      "): ",
                      { code: "babyName" },
                      ", ",
                      { code: "birthDateEpochMillis" },
                      ", ",
                      { code: "birthDateFormatted" },
                      ", ",
                      { code: "gestationalAgeWeeks" },
                      ", ",
                      { code: "birthWeightGram" },
                      ", ",
                      { code: "currentWeightGram" },
                      ", ",
                      { code: "birthLengthCm" },
                      ", ",
                      { code: "currentLengthCm" },
                      ", ",
                      { code: "birthHeadCircumferenceCm" },
                      ", ",
                      { code: "currentHeadCircumferenceCm" },
                      ", ",
                      { code: "gender" },
                      ", ",
                      { code: "environment" },
                      ", ",
                      { code: "appVersion" },
                      ", ",
                      { code: "syncedAtEpochMillis" },
                      ", dan ",
                      { code: "createdAtServer" },
                      ".",
                    ],
                  },
                  {
                    content: [
                      { bold: "Pembatasan Keamanan Firestore (" },
                      { code: "firestore.rules" },
                      { bold: "): " },
                      "Aturan keamanan diterapkan secara ketat (",
                      { italic: "create-only" },
                      " dari klien onboarding) dengan validasi tipe data dan batas klinis ",
                      { italic: "Common Expression Language" },
                      " (CEL). Akses pembacaan (",
                      { code: "read" },
                      "), pembaruan (",
                      { code: "update" },
                      "), dan penghapusan (",
                      { code: "delete" },
                      ") ",
                      { bold: "ditutup seutuhnya bagi publik maupun aplikasi klien" },
                      ", serta hanya dapat diakses oleh administrator resmi yang terautentikasi dengan klaim admin (",
                      { code: "admin == true" },
                      ").",
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "tujuan-pengolahan-data",
      number: "4",
      title: "Tujuan Pengolahan & Penggunaan Data",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Data yang dikumpulkan diproses atas dasar persetujuan eksplisit pengguna khusus untuk:",
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "Fungsionalitas Klinis & Pemantauan Harian: " },
                "Menghitung usia kronologis/koreksi/PMA, memetakan grafik pertumbuhan Kurva Fenton (2013/2025), menjadwalkan alarm pengingat ASI/OGT/NGT serta PMK, dan mengarsipkan lembar hasil skrining BBLR secara lokal.",
              ],
            },
            {
              content: [
                { bold: "Kustomisasi Pengalaman Pengguna: " },
                "Menyimpan preferensi tema (",
                { italic: "Warm Light" },
                " / ",
                { italic: "Dark Nursing Mode" },
                ") dan ukuran skala teks agar ramah dibaca di ruang NICU maupun rumah.",
              ],
            },
            {
              content: [
                { bold: "Keandalan Sistem & Pemecahan Masalah: " },
                "Memantau rasio crash serta diagnosa kegagalan sinkronisasi atau kesalahan teknis (",
                { italic: "Firebase Crashlytics" },
                ").",
              ],
            },
            {
              content: [
                { bold: "Evaluasi Program & Riset Kesehatan Anonim: " },
                "Data onboarding dan pertumbuhan dapat diagregasikan serta dianonimkan (dengan menghapus nama bayi dan identitas langsung) untuk evaluasi klinis program perawatan BBLR dan publikasi ilmiah pencegahan komplikasi prematuritas.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "bebas-penjualan-data-pihak-ketiga",
      number: "5",
      title: "Kebijakan Bebas Penjualan Data, Non-Pelacakan Iklan, & Pihak Ketiga",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "Tidak Ada Penayangan Iklan & Pelacakan Komersial: " },
                "Aplikasi Kanguru Siaga bebas dari jaringan iklan pihak ketiga (",
                { italic: "ad networks" },
                "), tidak melakukan pelacakan untuk periklanan tertarget, dan tidak pernah menjual atau memperdagangkan data pengguna maupun data anak kepada pengiklan atau broker data.",
              ],
            },
            {
              content: [
                { bold: "Layanan Sub-prosesor & API Pihak Ketiga yang Digunakan Aplikasi:" },
              ],
              subList: {
                ordered: false,
                items: [
                  {
                    content: [
                      { bold: "Google Firebase — Cloud Firestore: " },
                      "Penyimpanan profil onboarding bayi saat pendaftaran awal online, didukung infrastruktur Google Cloud berstandar keamanan global (ISO 27001 / SOC 2).",
                    ],
                  },
                  {
                    content: [
                      { bold: "Google Firebase — Firebase Crashlytics: " },
                      "Pelaporan error aplikasi dan crash diagnostik otomatis, termasuk log konteks teknis (",
                      { italic: "breadcrumb" },
                      ") sebagaimana dijelaskan pada Pasal 2.",
                    ],
                  },
                  {
                    content: [
                      { bold: "FentonGrowth.ca API (" },
                      { code: "https://fentongrowth.ca" },
                      { bold: "): " },
                      "Layanan web kalkulator pertumbuhan prematur ilmiah resmi milik University of Calgary / Dr. Tanis Fenton yang dipanggil ",
                      {
                        bold: "hanya ketika pengguna memberikan konfirmasi melalui dialog persetujuan akses internet (",
                      },
                      { code: "FentonInternetConfirmationDialog" },
                      { bold: ")" },
                      " untuk merender grafik dan menghitung persentil/Z-score resmi. Payload CSV terstruktur yang dikirim ke ",
                      { code: "fentongrowth.ca" },
                      " berisi:",
                    ],
                    subList: {
                      ordered: false,
                      items: [
                        {
                          content: [
                            { code: "Title" },
                            ": nama profil tampilan bayi (bila terisi);",
                          ],
                        },
                        {
                          content: [
                            { code: "Number" },
                            ": ID numerik internal baris database lokal;",
                          ],
                        },
                        {
                          content: [
                            { code: "Sex" },
                            ": kode jenis kelamin (",
                            { code: "M" },
                            " / ",
                            { code: "F" },
                            ");",
                          ],
                        },
                        {
                          content: [
                            { code: "Date of birth" },
                            ": tanggal lahir bayi (",
                            { code: "dd-MMM-yyyy" },
                            ");",
                          ],
                        },
                        {
                          content: [
                            { code: "GA at birth" },
                            ": usia gestasi saat lahir dalam minggu;",
                          ],
                        },
                        {
                          content: [
                            "Rangkaian baris pengukuran pertumbuhan: usia pascamenstruasi (",
                            { code: "GA (weeks)" },
                            "), berat (",
                            { code: "Weight (g)" },
                            "), lingkar kepala (",
                            { code: "Head (cm)" },
                            "), dan panjang badan (",
                            { code: "Length (cm)" },
                            ").",
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "izin-akses-perangkat",
      number: "6",
      title: "Izin Akses Perangkat (Device Permissions)",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Aplikasi hanya mendeklarasikan izin yang benar-benar dibutuhkan dan selaras persis dengan file ",
            { code: "AndroidManifest.xml" },
            ":",
          ],
        },
        {
          type: "table",
          minWidthClass: "min-w-[700px]",
          headers: [
            "Izin Sistem (AndroidManifest.xml)",
            "Mengapa Dibutuhkan?",
            "Sifat & Kebijakan",
          ],
          rows: [
            [
              [{ code: "INTERNET" }],
              [
                "Menghubungkan Aplikasi ke Google Firebase (Cloud Firestore & Crashlytics) serta memanggil ",
                { bold: "FentonGrowth.ca API" },
                " saat memuat grafik/Z-score online.",
              ],
              [
                "Wajib untuk fitur sinkronisasi & grafik online (fitur harian tetap jalan ",
                { italic: "offline" },
                ")",
              ],
            ],
            [
              [{ code: "ACCESS_NETWORK_STATE" }],
              [
                "Mengecek ketersediaan koneksi internet sebelum memicu sinkronisasi cloud atau unduhan grafik agar tidak gagal secara diam-diam.",
              ],
              ["Otomatis oleh sistem"],
            ],
            [
              [{ code: "POST_NOTIFICATIONS" }],
              [
                "Menampilkan notifikasi timer sesi PMK yang sedang berjalan, pengingat jadwal minum ASI, serta pengingat jadwal skrining prematur.",
              ],
              ["Opsional / Dapat dimatikan di Pengaturan"],
            ],
            [
              [{ code: "SCHEDULE_EXACT_ALARM" }],
              [
                "Menjadwalkan alarm pengingat pemberian nutrisi enteral (ASI/OGT/NGT berinterval 2–3 jam), target sesi PMK, dan jadwal skrining kritis secara tepat waktu apabila izin ",
                { italic: "Alarms & reminders" },
                " diaktifkan oleh pengguna (pada Android 14+ otomatis beralih ke penjadwalan standar hemat daya jika tidak diaktifkan).",
              ],
              ["Opsional / Esensial untuk ketepatan jadwal perawatan"],
            ],
            [
              [{ code: "RECEIVE_BOOT_COMPLETED" }],
              [
                "Memulihkan dan menjadwalkan ulang seluruh alarm PMK, alarm ASI, dan alarm skrining secara otomatis setelah perangkat dinyalakan ulang (",
                { italic: "reboot" },
                "), aplikasi diperbarui, atau izin alarm presisi diaktifkan.",
              ],
              ["Otomatis oleh sistem demi keandalan alarm"],
            ],
            [
              [{ code: "VIBRATE" }],
              [
                "Memberikan umpan balik getaran lembut saat notifikasi pengingat berbunyi sehingga pengasuh tetap sadar meski perangkat dalam mode senyap di ruang perawatan/NICU.",
              ],
              ["Otomatis saat alarm/notifikasi aktif"],
            ],
            [
              [
                { code: "WRITE_EXTERNAL_STORAGE" },
                " ",
                { italic: "(Dibatasi " },
                { code: 'maxSdkVersion="28"' },
                { italic: " / Android ≤ 9)" },
              ],
              [
                "Menyimpan ekspor gambar Grafik Pertumbuhan Fenton ke Galeri perangkat pada ponsel Android versi 9 ke bawah. Pada Android 10 (API 29) ke atas, Aplikasi memakai API ",
                { code: "MediaStore" },
                " modern tanpa izin penyimpanan ",
                { italic: "legacy" },
                ".",
              ],
              [
                "Opsional (Hanya diminta pada Android ≤ 9 saat pengguna mengekspor grafik)",
              ],
            ],
          ],
        },
        {
          type: "subheading",
          title:
            "Akses Kamera, Foto Galeri, & Dokumen Tanpa Izin Penyimpanan Penuh (Privacy-Preserving Pickers)",
        },
        {
          type: "paragraph",
          content: [
            "Aplikasi ",
            { bold: "tidak" },
            " mendeklarasikan izin ",
            { code: "CAMERA" },
            ", ",
            { code: "READ_MEDIA_IMAGES" },
            ", maupun ",
            { code: "READ_EXTERNAL_STORAGE" },
            " di dalam ",
            { code: "AndroidManifest.xml" },
            ":",
          ],
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                { bold: "Kamera Sistem (" },
                { code: "TakePicture" },
                { bold: " via " },
                { code: "FileProvider" },
                { bold: "): " },
                "Ketika pengguna memilih mengambil foto profil bayi atau foto dokumen skrining medis, Aplikasi mendelegasikan pemotretan ke aplikasi kamera bawaan sistem Android melalui URI sementara ",
                { code: "FileProvider" },
                " yang terisolasi.",
              ],
            },
            {
              content: [
                { bold: "Android Photo Picker (" },
                { code: "PickVisualMedia" },
                { bold: "): " },
                "Pemilihan foto dari galeri memakai sistem Android Photo Picker sehingga Aplikasi ",
                { bold: "tidak dapat" },
                " memindai seluruh pustaka foto pengguna dan hanya diberi akses sementara ke satu gambar yang dipilih oleh pengguna.",
              ],
            },
            {
              content: [
                { bold: "System Document Picker / SAF (" },
                { code: "OpenDocument" },
                { bold: "): " },
                "Unggahan dokumen PDF atau gambar lampiran skrining medis memanfaatkan ",
                { italic: "Storage Access Framework" },
                " (SAF) resmi Android untuk mengakses secara eksklusif satu berkas yang dipilih pengguna, kemudian menyalinnya ke ruang privat aplikasi (",
                { code: "screening_attachments/" },
                ").",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "keamanan-enkripsi-data",
      number: "7",
      title: "Langkah-Langkah Keamanan & Enkripsi Data",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Kami menerapkan perlindungan teknis dan organisasi untuk menjaga keamanan data:",
          ],
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                { bold: "Enkripsi dalam Transit: " },
                "Seluruh lalu lintas data antara Aplikasi, layanan Google Firebase, dan server ",
                { code: "FentonGrowth.ca" },
                " menggunakan protokol terenkripsi ",
                { bold: "HTTPS / TLS" },
                ".",
              ],
            },
            {
              content: [
                { bold: "Isolasi " },
                { bold: "Application Sandbox", italic: true },
                { bold: " & " },
                { code: "FileProvider" },
                { bold: ": " },
                "Database Room, DataStore, foto profil bayi, Z-score CSV, dan lampiran PDF/foto medis berada dalam ruang penyimpanan internal privat Aplikasi yang tidak dapat dibaca oleh aplikasi lain pada perangkat; pembukaan berkas lampiran hanya melalui ",
                { code: "FileProvider" },
                " berizin baca sementara.",
              ],
            },
            {
              content: [
                { bold: "Penegakan Aturan Database Granular (CEL): " },
                "Koleksi Cloud Firestore dilindungi validasi skema dan batas nilai klinis yang ketat, akses tulis terbatas (",
                { italic: "create-only" },
                "), serta larangan pembacaan/modifikasi publik (",
                { code: "read/update/delete" },
                " hanya administrator).",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "hak-hak-pengguna-uu-pdp",
      number: "8",
      title: "Hak-Hak Pengguna atas Data Pribadi (UU PDP)",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda memiliki hak penuh atas data Anda:",
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "Hak Akses & Pembaruan: " },
                "Anda dapat melihat dan mengubah data profil bayi beserta riwayat pertumbuhan kapan pun melalui menu ",
                { bold: "Pengaturan > Profil Bayi" },
                ".",
              ],
            },
            {
              content: [
                { bold: "Hak Penghapusan Data Lokal (" },
                { bold: "Right to Erasure", italic: true },
                { bold: "):" },
              ],
              subList: {
                ordered: false,
                items: [
                  {
                    content: [
                      "Hapus catatan log aktivitas & jadwal lama melalui menu ",
                      { bold: "Pengaturan > Hapus Riwayat Aktivitas" },
                      ";",
                    ],
                  },
                  {
                    content: [
                      "Reset seluruh basis data dan preferensi ke pengaturan awal melalui menu ",
                      { bold: "Pengaturan > Reset Data Aplikasi" },
                      ";",
                    ],
                  },
                  {
                    content: [
                      "Menghapus pemasangan (",
                      { italic: "uninstall" },
                      ") Aplikasi dari perangkat akan menghapus seluruh basis data SQLite Room, berkas foto profil, Z-score CSV, dan lampiran dokumen skrining secara permanen dari perangkat.",
                    ],
                  },
                ],
              },
            },
            {
              content: [
                { bold: "Hak Penghapusan Data Cloud: " },
                "Anda berhak meminta penghapusan data onboarding bayi di Cloud Firestore melalui prosedur pada ",
                { bold: "Pasal 10" },
                ".",
              ],
            },
            {
              content: [
                { bold: "Hak Menarik Persetujuan: " },
                "Anda dapat mencabut izin notifikasi atau alarm kapan saja melalui Setelan Aplikasi Android, atau berhenti menggunakan Aplikasi serta menghapus data sesuai ketentuan Pasal 10.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "privasi-anak-bayi",
      number: "9",
      title: "Privasi Anak & Bayi (Children's Privacy)",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Subjek data dalam Aplikasi ini mencakup data bayi baru lahir dan anak-anak:",
          ],
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                "Aplikasi tidak ditujukan untuk dioperasikan secara mandiri oleh anak-anak di bawah umur dan hanya boleh digunakan oleh orang tua kandung, wali hukum yang sah, atau tenaga kesehatan pendamping dewasa.",
              ],
            },
            {
              content: [
                "Seluruh data bayi diinput atas sepengetahuan dan otorisasi penuh orang tua/wali yang sah.",
              ],
            },
            {
              content: [
                "Aplikasi tidak pernah mengumpulkan informasi kontak pribadi langsung dari anak (seperti alamat email atau nomor telepon anak).",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "retensi-penghapusan-data",
      number: "10",
      title: "Retensi & Mekanisme Penghapusan Data (Data Deletion Policy)",
      blocks: [
        {
          type: "subheading",
          title: "A. Masa Retensi Data Terukur",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                { bold: "Data Lokal Perangkat: " },
                "Tersimpan selama Aplikasi terpasang pada perangkat Anda, atau hingga Anda menggunakan fitur ",
                { italic: "Hapus Riwayat Aktivitas" },
                ", ",
                { italic: "Reset Data Aplikasi" },
                ", atau melakukan ",
                { italic: "uninstall" },
                ".",
              ],
            },
            {
              content: [
                { bold: "Data Profil Onboarding Cloud (" },
                { code: "baby_onboarding_profiles" },
                { bold: " di Cloud Firestore): " },
                "Disimpan untuk kebutuhan integritas evaluasi sistem dan pemantauan awal maksimal ",
                { bold: "24 (dua puluh empat) bulan" },
                " sejak tanggal pencatatan (",
                { code: "createdAtServer" },
                "), atau segera dihapus lebih awal apabila pengguna mengajukan permohonan penghapusan. Setelah jangka waktu retensi berakhir, dokumen akan dihapus permanen atau dianonimkan seutuhnya dengan menghapus pengenal nama dan tanggal lahir.",
              ],
            },
            {
              content: [
                { bold: "Data Diagnostik Firebase Crashlytics: " },
                "Log error dan laporan crash pada ",
                { bold: "Firebase Crashlytics" },
                " tersimpan mengikuti siklus retensi standar ",
                { bold: "90 hari" },
                " sebelum kedaluwarsa otomatis.",
              ],
            },
          ],
        },
        {
          type: "subheading",
          title:
            "B. Mekanisme Permohonan Penghapusan Data Cloud (Data Deletion Request)",
        },
        {
          type: "paragraph",
          content: [
            "Karena Aplikasi dapat digunakan tanpa akun/login dan dokumen pada koleksi ",
            { code: "baby_onboarding_profiles" },
            " di Cloud Firestore memakai ID dokumen acak otomatis (",
            { italic: "auto-generated Document ID" },
            ") tanpa menyimpan ",
            { italic: "User ID" },
            " atau pengenal akun tetap di perangkat pengguna, permohonan penghapusan data cloud dilakukan dengan langkah berikut:",
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                "Kirimkan email ke ",
                { mailto: "support@kulitech.my.id" },
                " dengan subjek: ",
                { code: "Permohonan Penghapusan Data Cloud - Kanguru Siaga" },
                ".",
              ],
            },
            {
              content: [
                "Sertakan informasi pencocokan berikut agar tim administrator ",
                { bold: "KuliTech" },
                " dapat mengidentifikasi dokumen yang tepat di Cloud Firestore:",
              ],
              subList: {
                ordered: false,
                items: [
                  {
                    content: [
                      { bold: "Nama bayi" },
                      " sesuai yang didaftarkan saat onboarding (",
                      { code: "babyName" },
                      ");",
                    ],
                  },
                  {
                    content: [
                      { bold: "Tanggal lahir bayi" },
                      " (",
                      { code: "birthDateFormatted" },
                      ");",
                    ],
                  },
                  {
                    content: [
                      { bold: "Perkiraan tanggal & waktu" },
                      " saat pendaftaran onboarding pertama kali diselesaikan;",
                    ],
                  },
                  {
                    content: [
                      { bold: "Data verifikasi tambahan:" },
                      " usia gestasi saat lahir (minggu), berat badan lahir (gram), dan jenis kelamin.",
                    ],
                  },
                ],
              },
            },
            {
              content: [
                "Tim administrator kami akan melakukan verifikasi kecocokan data dan mengeksekusi penghapusan permanen dokumen terkait di Cloud Firestore selambat-lambatnya dalam ",
                { bold: "14 (empat belas) hari kerja" },
                " sejak permintaan lengkap diterima, disertai email konfirmasi penyelesaian kepada Anda.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "perubahan-kebijakan-privasi",
      number: "11",
      title: "Perubahan Kebijakan Privasi",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk menyesuaikan perubahan fitur aplikasi, sub-prosesor teknis, pedoman keamanan Google Play Console, maupun ketentuan peraturan perundang-undangan yang berlaku:",
          ],
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                "Setiap pembaruan akan mencantumkan ",
                { bold: "Tanggal Berlaku" },
                " dan ",
                { bold: "Versi Dokumen" },
                " terbaru di bagian atas dokumen ini serta pada halaman dalam aplikasi (",
                { bold: "Pengaturan > Legalitas & Privasi > Kebijakan Privasi" },
                ").",
              ],
            },
            {
              content: [
                "Untuk perubahan yang bersifat material terhadap pemrosesan ",
                { bold: "Data Pribadi yang Bersifat Spesifik" },
                " atau berbagi data kepada pihak ketiga baru, Kami akan memberikan pemberitahuan melalui pembaruan rilis di Google Play Store dan/atau pemberitahuan di dalam Aplikasi sebelum ketentuan baru berlaku efektif.",
              ],
            },
            {
              content: [
                "Dengan terus menggunakan Aplikasi setelah tanggal berlaku perubahan tersebut, Anda dianggap telah memahami dan menyetujui Kebijakan Privasi yang diperbarui. Apabila Anda tidak menyetujuinya, Anda berhak menghentikan penggunaan Aplikasi, menghapus data lokal, dan mengajukan penghapusan data cloud sesuai Pasal 10.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "kontak-layanan-pengaduan",
      number: "12",
      title: "Kontak & Layanan Pengaduan",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Apabila Anda memiliki pertanyaan, keberatan, permohonan akses/penghapusan data pribadi, atau masukan terkait Ketentuan Penggunaan dan Kebijakan Privasi ini, silakan hubungi pengembang melalui saluran resmi berikut:",
          ],
        },
        {
          type: "contactCard",
        },
      ],
    },
  ],
  closing:
    "Dengan melanjutkan dan menggunakan Aplikasi Kanguru Siaga, Anda mengakui bahwa Anda telah membaca, memahami, serta menyetujui Ketentuan Penggunaan dan Kebijakan Privasi ini secara sukarela dan sadar hukum.",
};
