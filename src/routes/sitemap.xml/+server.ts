import { toolsRegistry } from '$lib/utils/tools-registry';
import { PUBLIC_ORIGIN } from '$env/static/public';

export async function GET() {
	const toolPaths = toolsRegistry.map((tool) => tool.path);

	// Static pages with their priorities
	const staticPages = [
		{ path: '', priority: '1.0', changefreq: 'daily' },
		{ path: '/semua-alat', priority: '0.9', changefreq: 'weekly' },
		{ path: '/artikel', priority: '0.9', changefreq: 'daily' },
		{ path: '/tentang', priority: '0.5', changefreq: 'monthly' },
		{ path: '/hubungi-kami', priority: '0.5', changefreq: 'monthly' },
		{ path: '/kebijakan-privasi', priority: '0.3', changefreq: 'yearly' },
		{ path: '/syarat-ketentuan', priority: '0.3', changefreq: 'yearly' }
	];

	// Tool pages
	const toolPages = toolPaths.map((path) => ({
		path,
		priority: '0.8',
		changefreq: 'weekly' as const
	}));

	// Dynamic articles
	const articlePaths = import.meta.glob('/src/lib/articles/*.{md,svx}', { eager: true });
	const articlePages = Object.keys(articlePaths).map((path) => {
		const slug = path.split('/').pop()?.split('.')[0];
		return {
			path: `/artikel/${slug}`,
			priority: '0.7',
			changefreq: 'monthly' as const
		};
	});

	const allPages = [...staticPages, ...toolPages, ...articlePages];
	const today = new Date().toISOString().split('T')[0];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
>
  ${allPages
		.map(
			(page) => `
  <url>
    <loc>${PUBLIC_ORIGIN}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
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
