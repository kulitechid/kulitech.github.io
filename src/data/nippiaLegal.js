export const NIPPIA_META = {
  appName: "Nippia – Latihan Soal CPNS & CAT",
  shortName: "Nippia",
  navTitle: "NIPPIA • CPNS & CAT",
  packageName: "id.my.kulitech.nippia",
  developer: "KuliTech (Kulitech)",
  publisher: "KuliTech",
  effectiveDate: "14 November 2026",
  version: "1.0",
  compliance:
    "Sesuai Undang-Undang Republik Indonesia No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) serta Kebijakan Data Safety, Ads, dan Google Play Billing.",
  category: "Pendidikan & Persiapan Ujian (Education)",
  jurisdiction: "Republik Indonesia",
  emails: ["support@kulitech.my.id"],
  productUrl: "/nippia",
  privacyPolicyUrl: "/nippia/privacy-policy",
  termsOfUseUrl: "/nippia/terms",
  termsLabel: "Terms & Conditions",
};

export const NIPPIA_PRIVACY_POLICY_DATA = {
  id: "privacy-policy",
  badge: "PRIVACY POLICY • NIPPIA",
  title: "Kebijakan Privasi Aplikasi Nippia – Latihan Soal CPNS & CAT",
  subtitle:
    "Dokumen Resmi Kebijakan Pelindungan Data Pribadi (Privacy Policy) untuk Aplikasi Android Nippia (id.my.kulitech.nippia).",
  companionLink: {
    label: "Lihat Syarat & Ketentuan (Terms)",
    href: "/nippia/terms",
  },
  intro: [
    [
      "Kebijakan Privasi ini menjelaskan bagaimana ",
      { bold: "Kulitech" },
      " (\"Kami\", \"Pengembang\") mengumpulkan, menggunakan, menyimpan, memproses, dan melindungi data pribadi Anda saat Anda menggunakan aplikasi Android ",
      { bold: "Nippia – Latihan Soal CPNS & CAT" },
      " (",
      { code: "id.my.kulitech.nippia" },
      ") beserta layanan backend terkait di domain ",
      { code: "kulitech.my.id" },
      ".",
    ],
    [
      "Dengan menggunakan Aplikasi Nippia, Anda menyatakan telah membaca dan memahami Kebijakan Privasi ini serta menyetujui pemrosesan data sebagaimana dijelaskan di bawah ini sesuai dengan ketentuan ",
      { bold: "Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)" },
      " dan kebijakan Google Play Console.",
    ],
  ],
  sections: [
    {
      id: "disclaimer-independen",
      number: "1",
      title: "Disclaimer Status Independen & Sumber Materi",
      blocks: [
        {
          type: "warning",
          title:
            "NIPPIA ADALAH PLATFORM EDUKASI INDEPENDEN — TIDAK BERAFILIASI DENGAN BKN MAUPUN INSTANSI PEMERINTAH MANA PUN.",
          paragraphs: [
            [
              { bold: "Nippia" },
              " adalah platform edukasi independen yang dikembangkan oleh ",
              { bold: "Kulitech" },
              ". Aplikasi ini ",
              {
                bold: "tidak berafiliasi, tidak disponsori, tidak disahkan, dan tidak mewakili Badan Kepegawaian Negara (BKN) maupun instansi pemerintah Republik Indonesia mana pun.",
              },
            ],
            [
              "Seluruh materi pembelajaran, latihan soal (TWK, TIU, TKP), dan simulasi Computer Assisted Test (CAT) di dalam aplikasi ",
              {
                bold: "disusun berdasarkan kisi-kisi peraturan publik yang berlaku",
              },
              " secara umum untuk tujuan latihan mandiri dan persiapan ujian.",
            ],
          ],
        },
      ],
    },
    {
      id: "data-yang-dikumpulkan",
      number: "2",
      title: "Data yang Kami Kumpulkan dan Proses",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Kami hanya mengumpulkan data yang relevan dan diperlukan untuk menjalankan fitur pembelajaran mikro, gamifikasi, simulasi CAT, sinkronisasi lintas perangkat, langganan, dan keandalan aplikasi:",
          ],
        },
        {
          type: "table",
          minWidthClass: "min-w-[640px]",
          headers: ["Kategori Data", "Rincian Data", "Tujuan Pemrosesan"],
          rows: [
            [
              ["Akun & Autentikasi"],
              [
                "Alamat email, ",
                { code: "google_id" },
                ", nama tampilan dari Google Sign-In; atau pengenal sesi lokal jika memilih ",
                { italic: "Guest Mode" },
                ".",
              ],
              [
                "Mengautentikasi pengguna, menyimpan progres belajar ke cloud, dan menautkan progres Guest Mode ke akun Google Anda.",
              ],
            ],
            [
              ["Progres Belajar & Gamifikasi"],
              [
                "Unit selesai, skor kuis & tryout CAT (TWK, TIU, TKP), antrean ",
                { italic: "Mistake Bank" },
                ", target XP harian, total XP, ",
                { italic: "gems" },
                ", ",
                { italic: "daily streak" },
                ", ",
                { italic: "streak freeze" },
                ", ",
                { italic: "hearts" },
                ", serta peringkat liga mingguan.",
              ],
              [
                "Menjalankan peta materi dinamis, fitur Radar Kelemahan, sistem nyawa/streak, dan papan peringkat mingguan (",
                { italic: "Weekly Leaderboard" },
                ").",
              ],
            ],
            [
              ["Transaksi & Langganan"],
              [
                "ID produk (",
                { code: "product_id" },
                "), ",
                { code: "purchase_token" },
                ", status langganan (",
                { code: "ACTIVE" },
                ", ",
                { code: "EXPIRED" },
                ", ",
                { code: "GRACE_PERIOD" },
                ", ",
                { code: "CANCELED" },
                "), dan waktu kedaluwarsa.",
              ],
              [
                "Memvalidasi hak akses langganan ",
                { bold: "Nippia Pro" },
                " secara aman di server melalui Google Play Developer API & webhook RTDN. Kami tidak menyimpan nomor kartu kredit atau detail rekening pembayaran Anda.",
              ],
            ],
            [
              ["Diagnostik, Perangkat & Notifikasi"],
              [
                "Log kerusakan (",
                { italic: "crash logs" },
                "), metrik performa, model perangkat, versi OS Android, versi aplikasi, token notifikasi (FCM), dan sinyal integritas perangkat.",
              ],
              [
                "Memperbaiki bug, menjaga stabilitas 60–120 FPS, mengirimkan pengingat belajar harian, dan mencegah kecurangan/manipulasi pada simulasi CAT.",
              ],
            ],
          ],
        },
      ],
    },
    {
      id: "pengungkapan-sdk-pihak-ketiga",
      number: "3",
      title: "Pengungkapan Penggunaan SDK & Layanan Pihak Ketiga",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Aplikasi Nippia mengintegrasikan beberapa Software Development Kit (SDK) pihak ketiga tepercaya untuk mendukung monetisasi, pembayaran, analitik, stabilitas, dan notifikasi. Masing-masing penyedia SDK memproses data sesuai kebijakan privasi mereka:",
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "Google AdMob (Google Mobile Ads SDK): " },
                "Digunakan untuk menayangkan iklan bagi pengguna non-langganan (",
                { italic: "Rewarded Ads" },
                " untuk isi ulang Hearts/Mini Tryout/Streak Freeze, ",
                { italic: "Interstitial Ads" },
                " setelah unit selesai, serta ",
                { italic: "Banner/Native Ads" },
                " pada halaman statis di luar layar kuis/CAT). SDK Google AdMob dapat mengumpulkan ",
                { italic: "Advertising ID" },
                " (AAID), alamat IP (perkiraan lokasi), informasi perangkat, dan data interaksi iklan untuk penayangan, pembatasan frekuensi (",
                { italic: "frequency capping" },
                "), pencegahan penipuan iklan, serta pengukuran performa iklan.",
              ],
            },
            {
              content: [
                { bold: "Google Play Billing (Google Play Billing Library): " },
                "Digunakan untuk memproses pembelian dalam aplikasi dan langganan ",
                { bold: "Nippia Pro" },
                " (paket 1 bulan, 3 bulan, 6 bulan, serta uji coba gratis). Seluruh transaksi pembayaran ditangani langsung oleh sistem Google Play; Kami hanya menerima token pembelian dan status langganan untuk verifikasi akses.",
              ],
            },
            {
              content: [
                { bold: "Firebase (Google Firebase SDK): " },
                "Nippia menggunakan rangkaian layanan Firebase berikut:",
              ],
              subList: {
                ordered: false,
                items: [
                  {
                    content: [
                      { bold: "Firebase Crashlytics: " },
                      "Mengumpulkan laporan kerusakan aplikasi (",
                      { italic: "stack trace" },
                      ", kondisi perangkat saat error) untuk membantu kami memperbaiki bug dengan cepat.",
                    ],
                  },
                  {
                    content: [
                      { bold: "Firebase Analytics: " },
                      "Mengumpulkan data penggunaan fitur secara agregat dan pseudonim (misalnya tingkat penyelesaian unit dan performa sesi) untuk pengembangan kualitas produk.",
                    ],
                  },
                  {
                    content: [
                      { bold: "Firebase Cloud Messaging (FCM): " },
                      "Menggunakan token perangkat untuk mengirimkan notifikasi pengingat latihan harian (",
                      { italic: "daily streak" },
                      ") dan informasi pembaruan bank soal.",
                    ],
                  },
                ],
              },
            },
            {
              content: [
                { bold: "Google Sign-In & Play Integrity API: " },
                "Digunakan untuk autentikasi akun Google secara aman serta memastikan integritas aplikasi dan pencegahan akses tidak sah pada layanan simulasi CAT.",
              ],
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            "Anda dapat mengatur ulang atau menonaktifkan personalisasi iklan kapan saja melalui menu ",
            { bold: "Pengaturan > Google > Iklan" },
            " (atau ",
            { italic: "Ads" },
            ") pada perangkat Android Anda.",
          ],
        },
      ],
    },
    {
      id: "penyimpanan-lokal-dan-sinkronisasi",
      number: "4",
      title: "Penyimpanan Lokal, Mode Offline, & Keamanan Data",
      blocks: [
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                { bold: "Penyimpanan Lokal (Offline-First): " },
                "Nippia menyimpan salinan bank soal hasil ",
                { italic: "delta sync" },
                " di ",
                { code: "Room Database" },
                " serta token sesi dan preferensi di ",
                { code: "Jetpack DataStore" },
                " pada perangkat Anda agar Anda tetap dapat berlatih tanpa koneksi internet.",
              ],
            },
            {
              content: [
                { bold: "Keamanan Transmisi & Server: " },
                "Seluruh komunikasi antara aplikasi Android dan server API Nippia (",
                { code: "api.nippia.kulitech.my.id" },
                ") dilindungi dengan enkripsi HTTPS/TLS, autentikasi JWT, validasi skema ketat, serta kontrol akses berbasis peran.",
              ],
            },
            {
              content: [
                { bold: "Pencegahan Penggandaan & Kecurangan: " },
                "Durasi ujian simulasi CAT divalidasi berdasarkan waktu server, dan klaim XP menerapkan mekanisme ",
                { italic: "Idempotency-Key" },
                " untuk menjaga keakuratan data.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "retensi-dan-hak-pengguna",
      number: "5",
      title: "Retensi Data & Hak Pengguna (UU PDP)",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Kami menyimpan data akun dan progres belajar Anda selama akun Anda aktif atau sepanjang diperlukan untuk menyediakan layanan. Jika Anda menggunakan ",
            { italic: "Guest Mode" },
            " tanpa menautkan akun Google, data progres tersimpan secara lokal pada perangkat Anda dan akan terhapus apabila Anda menghapus data aplikasi atau mencopot pemasangan aplikasi.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Sesuai dengan UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak untuk:",
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                "Meminta akses atau salinan atas data pribadi yang kami simpan terkait akun Anda.",
              ],
            },
            {
              content: [
                "Meminta perbaikan atau pembaruan data yang tidak akurat.",
              ],
            },
            {
              content: [
                "Meminta penghapusan akun dan seluruh data pribadi terkait secara permanen dengan menghubungi kami melalui email ",
                { mailto: "support@kulitech.my.id" },
                " dengan subjek ",
                { code: "[Hapus Akun Nippia]" },
                ". Permintaan penghapusan akan kami proses maksimal dalam 14 hari kerja.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "privasi-anak-dan-perubahan",
      number: "6",
      title: "Privasi Anak & Perubahan Kebijakan",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Nippia ditujukan bagi pelajar, mahasiswa, lulusan baru, dan pelamar kerja berusia 17 tahun ke atas yang mempersiapkan diri menghadapi seleksi CPNS. Kami tidak secara sengaja mengumpulkan data pribadi dari anak di bawah usia 13 tahun.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu apabila terdapat penambahan fitur atau penyesuaian regulasi. Tanggal berlaku terbaru akan selalu ditampilkan pada bagian atas halaman ini.",
          ],
        },
      ],
    },
    {
      id: "kontak-resmi",
      number: "7",
      title: "Informasi Kontak Pengembang",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Apabila Anda memiliki pertanyaan, keluhan, atau permintaan terkait privasi dan pelindungan data pribadi pada aplikasi Nippia, silakan hubungi kami melalui:",
          ],
        },
        {
          type: "contactCard",
        },
      ],
    },
  ],
  closing:
    "Dokumen Kebijakan Privasi ini berlaku efektif sejak 14 November 2026 untuk aplikasi Android Nippia – Latihan Soal CPNS & CAT (id.my.kulitech.nippia) yang dikembangkan oleh Kulitech.",
};

export const NIPPIA_TERMS_DATA = {
  id: "terms",
  badge: "TERMS & CONDITIONS • NIPPIA",
  title: "Syarat & Ketentuan Penggunaan Aplikasi Nippia",
  subtitle:
    "Dokumen Resmi Ketentuan Layanan (Terms of Service) untuk Aplikasi Android Nippia – Latihan Soal CPNS & CAT (id.my.kulitech.nippia).",
  companionLink: {
    label: "Lihat Kebijakan Privasi (Privacy Policy)",
    href: "/nippia/privacy-policy",
  },
  intro: [
    [
      "Selamat datang di ",
      { bold: "Nippia – Latihan Soal CPNS & CAT" },
      ". Dengan mengunduh, memasang, mendaftar, atau menggunakan aplikasi Android Nippia (",
      { code: "id.my.kulitech.nippia" },
      "), Anda menyetujui untuk terikat oleh Syarat & Ketentuan ini beserta ",
      {
        link: {
          label: "Kebijakan Privasi",
          href: "/nippia/privacy-policy",
        },
      },
      " yang menjadi satu kesatuan yang tidak terpisahkan.",
    ],
  ],
  sections: [
    {
      id: "status-independen-dan-disclaimer",
      number: "1",
      title: "Status Platform Independen & Penyangkalan (Disclaimer)",
      blocks: [
        {
          type: "warning",
          title:
            "BUKAN APLIKASI RESMI PEMERINTAH / BKN.",
          paragraphs: [
            [
              { bold: "Nippia" },
              " adalah platform edukasi independen yang dikembangkan oleh ",
              { bold: "Kulitech" },
              ". Nippia ",
              {
                bold: "tidak berafiliasi dengan Badan Kepegawaian Negara (BKN) maupun instansi pemerintah mana pun.",
              },
            ],
            [
              "Seluruh soal TWK, TIU, TKP, buku panduan, serta simulasi CAT disusun berdasarkan ",
              { bold: "kisi-kisi peraturan publik yang berlaku" },
              ". Nilai latihan, evaluasi ",
              { italic: "passing grade" },
              ", dan analisis Radar Kelemahan bersifat edukatif dan ",
              {
                bold: "tidak menjamin kelulusan",
              },
              " pada seleksi CPNS atau Sekolah Kedinasan yang diselenggarakan pemerintah.",
            ],
          ],
        },
      ],
    },
    {
      id: "akun-dan-aturan-penggunaan",
      number: "2",
      title: "Akun Pengguna, Mode Tamu, & Etika Penggunaan",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "Akses Akun: " },
                "Anda dapat masuk menggunakan Google Sign-In atau menggunakan ",
                { italic: "Guest Mode" },
                ". Anda bertanggung jawab menjaga keamanan akun Google dan perangkat Anda sendiri.",
              ],
            },
            {
              content: [
                { bold: "Larangan Kecurangan & Penyalahgunaan: " },
                "Pengguna dilarang melakukan rekayasa balik (",
                { italic: "reverse engineering" },
                "), memanipulasi jam perangkat untuk mengakali timer CAT, mengeksploitasi endpoint API untuk menggandakan XP, menggunakan bot/skrip otomatis pada ",
                { italic: "Weekly Leaderboard" },
                ", atau menyebarluaskan bank soal secara komersial tanpa izin tertulis dari Kulitech.",
              ],
            },
            {
              content: [
                { bold: "Sanksi Pelanggaran: " },
                "Kulitech berhak menangguhkan atau menghapus akses akun yang terbukti melakukan pelanggaran teknis atau kecurangan pada sistem papan peringkat maupun simulasi.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "langganan-nippia-pro-dan-iklan",
      number: "3",
      title: "Langganan Nippia Pro (Google Play Billing) & Iklan (Google AdMob)",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "Akses Gratis & Iklan: " },
                "Pengguna gratis memperoleh akses latihan dengan sistem ",
                { italic: "5 Hearts" },
                " dan dukungan iklan dari ",
                { bold: "Google AdMob" },
                " (",
                { italic: "Rewarded Ads, Interstitial Ads, dan Banner/Native Ads" },
                " di luar layar kuis/CAT aktif).",
              ],
            },
            {
              content: [
                { bold: "Langganan Nippia Pro: " },
                "Nippia menawarkan paket langganan berbayar (1 Bulan, 3 Bulan, dan 6 Bulan, serta opsi uji coba gratis bila memenuhi syarat) melalui ",
                { bold: "Google Play Billing" },
                ". Manfaat Pro mencakup pengalaman bebas iklan, ",
                { italic: "Unlimited Hearts" },
                ", akses penuh Tryout Akbar CAT, Smart Review tanpa batas, dan Mode Offline Penuh.",
              ],
            },
            {
              content: [
                { bold: "Perpanjangan & Pembatalan: " },
                "Langganan akan diperpanjang secara otomatis oleh Google Play kecuali Anda membatalkannya minimal 24 jam sebelum periode berjalan berakhir melalui menu ",
                { bold: "Google Play Store > Pembayaran & Langganan" },
                ". Pengajuan pengembalian dana (",
                { italic: "refund" },
                ") mengikuti kebijakan resmi Google Play.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "hak-kekayaan-intelektual",
      number: "4",
      title: "Hak Kekayaan Intelektual",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Seluruh kode sumber, desain antarmuka, animasi Rive, maskot, bank soal, pembahasan mikro, serta materi ringkasan dalam Aplikasi Nippia merupakan aset kekayaan intelektual milik ",
            { bold: "Kulitech" },
            " dan dilindungi oleh hukum hak cipta yang berlaku di Republik Indonesia.",
          ],
        },
      ],
    },
    {
      id: "batasan-tanggung-jawab",
      number: "5",
      title: "Batasan Tanggung Jawab & Perubahan Layanan",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Aplikasi disediakan sebagaimana adanya (",
            { italic: "as is" },
            "). Meskipun kami berupaya menjaga ketersediaan server, akurasi pembahasan, dan sinkronisasi konten (",
            { italic: "Over-The-Air Content Sync" },
            "), Kulitech tidak bertanggung jawab atas kerugian tidak langsung akibat gangguan jaringan internet pengguna, kegagalan perangkat, atau perubahan kebijakan seleksi resmi dari penyelenggara ujian negara.",
          ],
        },
      ],
    },
    {
      id: "hukum-dan-kontak",
      number: "6",
      title: "Hukum yang Berlaku & Kontak Resmi",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Syarat & Ketentuan ini diatur dan ditafsirkan berdasarkan hukum Negara Kesatuan Republik Indonesia. Pertanyaan lebih lanjut dapat dikirimkan ke kontak resmi di bawah ini:",
          ],
        },
        {
          type: "contactCard",
        },
      ],
    },
  ],
  closing:
    "Dengan menggunakan aplikasi Nippia – Latihan Soal CPNS & CAT, Anda menyetujui seluruh Syarat & Ketentuan yang ditetapkan oleh Kulitech.",
};
