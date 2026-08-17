export default async function KontakPage() {
  let site = {
    email: "nusaaistudio@gmail.com",
    phone: "0852 8088 7510",
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/site`,
      {
        cache: "no-store",
      }
    );

    if (response.ok) {
      const data = await response.json();

      site = {
        email: data?.email || site.email,
        phone: data?.phone || site.phone,
      };
    }
  } catch {
    // Gunakan data fallback jika API tidak tersedia.
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