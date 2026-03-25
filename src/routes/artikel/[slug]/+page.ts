import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		// MDsveX parses this into a Svelte component under .default
		// and JSON variables under .metadata
		const post = await import(`../../../lib/articles/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		// If file doesn't exist, throw 404
		error(404, `Artikel dengan judul "${params.slug}" tidak ditemukan.`);
	}
};
