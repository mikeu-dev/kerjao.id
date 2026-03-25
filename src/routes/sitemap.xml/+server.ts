export async function GET() {
	const staticPages = [
		'',
		'/cv-maker',
		'/surat-sewa',
		'/surat-perintah-kerja',
		'/artikel',
		'/kalkulator-gaji',
		'/invoice',
		'/paklaring',
		'/surat-lamaran',
		'/kwitansi',
		'/surat-perjanjian',
		'/surat-peringatan',
		'/surat-kuasa',
		'/surat-izin',
		'/slip-gaji',
		'/surat-hutang',
		'/surat-jalan',
		'/purchase-order',
		'/surat-penawaran',
		'/surat-resign'
	];

	// Fetch dynamic articles for sitemap
	const articlePaths = import.meta.glob('/src/lib/articles/*.{md,svx}', { eager: true });
	const dynamicPages = Object.keys(articlePaths).map((path) => {
		const slug = path.split('/').pop()?.split('.')[0];
		return `/artikel/${slug}`;
	});

	const pages = [...staticPages, ...dynamicPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>https://kerjao.id${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
		)
		.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
