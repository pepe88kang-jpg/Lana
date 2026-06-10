import { supabase } from '../../app/lib/supabaseClient';

async function getSouvenirRequests() {
  if (!supabase) {
    return { data: null, error: { message: 'Supabase environment variables belum diset.' } };
  }

  const { data, error } = await supabase.from('souvenir_requests').select('*').limit(50);
  return { data, error };
}

export default async function AdminPage() {
  const { data, error } = await getSouvenirRequests();

  return (
    <main className="container">
      <section className="hero">
        <h1>Admin Dashboard</h1>
        <p>Kelola undangan digital dan souvenir dengan akses penuh.</p>
      </section>

      <section className="info-card">
        <h2>Kontak Admin</h2>
        <p>WhatsApp admin: <a href="https://wa.me/6281234567890">+62 812-3456-7890</a></p>
        <p>Gunakan halaman ini untuk melihat dan mengelola permintaan souvenir setelah Anda membuat table Supabase.</p>
      </section>

      <section className="info-card">
        <h2>Data Souvenir</h2>
        {error ? (
          <p className="error">{error.message}</p>
        ) : data && data.length > 0 ? (
          <ul>
            {data.map((item: any) => (
              <li key={item.id}>
                {item.name} — {item.whatsapp} — {item.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>Tidak ada data souvenir atau table `souvenir_requests` belum dibuat.</p>
        )}
      </section>
    </main>
  );
}
