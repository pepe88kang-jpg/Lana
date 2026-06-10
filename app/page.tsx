const bride = {
  fullName: 'KARUNIA RISKI APRI HESI',
  nickname: 'NIA',
  city: 'TANGGERANG',
  address: 'KP.JATI',
  rtRw: '002/003',
  village: 'JATIUWUNG',
  district: 'CIBODAS',
  parent: 'SUHERMAN',
  bankAccount: '2079015536',
};

const groom = {
  fullName: 'Ega Lana Wibowo',
  nickname: 'Ega',
  city: 'INDRAMAYU',
  address: 'JL.NYIRESIK BLOK ASKAL',
  rtRw: '022/001',
  village: 'SINDANG',
  district: 'SINDANG',
  parent:
    'PRAMUJI',
  bankAccount: '2079015536',
};

export default async function Home() {
  return (
    <main className="container">
      <section className="hero">
        <p className="date">20 Juni 2026</p>
        <h1>Undangan Digital Pernikahan</h1>
        <p className="subtitle">Ega & Nia</p>
      </section>

      <section className="info-card">
        <h2>Detail Mempelai Pria</h2>
        <dl>
          <dt>Nama</dt>
          <dd>{groom.fullName}</dd>
          <dt>Panggilan</dt>
          <dd>{groom.nickname}</dd>
          <dt>Kota</dt>
          <dd>{groom.city}</dd>
          <dt>Alamat</dt>
          <dd>{groom.address}</dd>
          <dt>RT/RW</dt>
          <dd>{groom.rtRw}</dd>
          <dt>Desa/Kelurahan</dt>
          <dd>{groom.village}</dd>
          <dt>Kecamatan</dt>
          <dd>{groom.district}</dd>
          <dt>Orang Tua</dt>
          <dd>{groom.parent}</dd>
          <dt>Rekening</dt>
          <dd>{groom.bankAccount}</dd>
        </dl>
      </section>

      <section className="info-card">
        <h2>Detail Mempelai Wanita</h2>
        <dl>
          <dt>Nama</dt>
          <dd>{bride.fullName}</dd>
          <dt>Panggilan</dt>
          <dd>{bride.nickname}</dd>
          <dt>Kota</dt>
          <dd>{bride.city}</dd>
          <dt>Alamat</dt>
          <dd>{bride.address}</dd>
          <dt>RT/RW</dt>
          <dd>{bride.rtRw}</dd>
          <dt>Desa/Kelurahan</dt>
          <dd>{bride.village}</dd>
          <dt>Kecamatan</dt>
          <dd>{bride.district}</dd>
          <dt>Orang Tua</dt>
          <dd>{bride.parent}</dd>
          <dt>Rekening</dt>
          <dd>{bride.bankAccount}</dd>
        </dl>
      </section>

      <section className="cta-card">
        <h2>Souvenir & Undangan</h2>
        <p>Cara menggunakan:</p>
        <ol>
          <li>Hubungi whatsapp admin untuk undangan digital.</li>
          <li>Transfer ke rekening di atas untuk konfirmasi souvenir.</li>
          <li>Admin akan mengatur pengiriman souvenir dan undangan digital.</li>
        </ol>
        <p>
          Whatsapp Admin: <a href="https://wa.me/6281234567890">+62 812-3456-7890</a>
        </p>
      </section>

      <section className="footer">
        <p>Terima kasih atas kehadiran dan doa restunya.</p>
      </section>
    </main>
  );
}
