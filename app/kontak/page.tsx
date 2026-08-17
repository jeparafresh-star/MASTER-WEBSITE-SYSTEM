export default async function KontakPage() {
  let site = {
    email: "hello@example.com",
    phone: "+62 000 0000 0000",
  };

  try {
    const response = await fetch(
      "http://localhost:3001/api/public/website",
      {
        cache: "no-store",
      }
    );

    if (response.ok) {
      const data = await response.json();

      if (data.site) {
        site = {
          email: data.site.email || site.email,
          phone: data.site.phone || site.phone,
        };
      }
    }
  } catch {
    // API tidak tersedia.
    // Gunakan data fallback agar halaman tetap berjalan.
  }

  return (
    <main className="page">
      <div className="container narrow">
        <p className="eyebrow">KONTAK</p>

        <h1>Hubungi Kami</h1>

        <p className="lead">
          Halaman kontak ini merupakan bagian dari Master Website
          dan dapat dikendalikan melalui Master Admin.
        </p>

        <div className="contact-card">
          <strong>Email</strong>
          <span>{site.email}</span>

          <strong>Telepon</strong>
          <span>{site.phone}</span>
        </div>
      </div>
    </main>
  );
}