import { PUBLIC_ORIGIN } from '$env/static/public';

export async function GET() {
	return new Response(
		`User-agent: *
Allow: /
Sitemap: ${PUBLIC_ORIGIN}/sitemap.xml
`,
		{
			headers: {
				'Content-Type': 'text/plain',
				'Cache-Control': 'max-age=0, s-maxage=3600'
			}
		}
	);
}
