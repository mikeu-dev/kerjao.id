export async function GET() {
	return new Response(
		`User-agent: *
Allow: /
Sitemap: https://kerjao.id/sitemap.xml
`,
		{
			headers: {
				'Content-Type': 'text/plain',
				'Cache-Control': 'max-age=0, s-maxage=3600'
			}
		}
	);
}
