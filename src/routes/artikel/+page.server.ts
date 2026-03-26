import type { PageServerLoad } from './$types';

export interface ArticleMeta {
	title: string;
	description: string;
	date: string;
	image?: string;
	slug: string;
}

export const load: PageServerLoad = async () => {
	// Import all markdown/svx files inside src/lib/articles/
	const paths = import.meta.glob('/src/lib/articles/*.{md,svx}', { eager: true });

	const articles: ArticleMeta[] = [];

	for (const path in paths) {
		const file = paths[path] as { metadata: Omit<ArticleMeta, 'slug'> };
		// Extract filename as slug, e.g., '/src/lib/articles/my-post.md' -> 'my-post'
		const slug = path.split('/').pop()?.split('.')[0];

		if (file && file.metadata && slug) {
			articles.push({
				...file.metadata,
				slug
			} as ArticleMeta);
		}
	}

	// Sort articles by date descending
	articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		articles
	};
};
