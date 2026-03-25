<script lang="ts">
	import type { NDAData } from '$lib/utils/nda';
	import { translations } from '$lib/utils/translations';

	let { data }: { data: NDAData } = $props();

	const t = $derived(translations.nda[data.lang || 'id']);

	const formatDate = (dateStr: string) => {
		if (!dateStr) return '.................';
		const date = new Date(dateStr);
		return date.toLocaleDateString(data.lang === 'en' ? 'en-US' : 'id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	};
</script>

<div class="mx-auto max-w-[800px] bg-white p-12 text-slate-900 shadow-sm print:p-0 print:shadow-none sm:p-16">
	<!-- Header -->
	<div class="mb-12 text-center">
		<h1 class="text-xl font-bold uppercase tracking-widest underline decoration-2 underline-offset-8">
			{t.header}
		</h1>
		<p class="mt-4 text-xs font-medium text-slate-400">({data.lang === 'en' ? 'Non-Disclosure Agreement' : 'Dokumen Kerahasiaan'})</p>
	</div>

	<!-- Intro -->
	<div class="mb-8 text-justify text-xs leading-relaxed sm:text-sm">
		<p>
			{data.lang === 'en'
				? `This Non-Disclosure Agreement ("Agreement") is made and signed on ${formatDate(data.tanggal)}, in ${data.lokasi || '.................'}, by and between:`
				: `Perjanjian Kerahasiaan ini ("Perjanjian") dibuat dan ditandatangani pada tanggal ${formatDate(data.tanggal)}, di ${data.lokasi || '.................'}, oleh dan antara:`}
		</p>
	</div>

	<!-- Para Pihak -->
	<div class="mb-8 space-y-4 text-xs sm:text-sm">
		<div class="flex gap-4">
			<span class="w-8 font-bold">1.</span>
			<div class="flex-1">
				<p class="font-bold uppercase">{data.pihak1.perusahaan || '(First Party Name)'}</p>
				<p class="mt-1">
					{data.lang === 'en' ? 'Located at' : 'Beralamat di'} {data.pihak1.alamat || '.................'}, {data.lang === 'en' ? 'represented by' : 'dalam hal ini diwakili oleh'}
					{data.pihak1.nama || '.................'}. {data.lang === 'en' ? 'Hereinafter referred to as' : 'Selanjutnya disebut sebagai'}
					<strong>"{t.p1}"</strong>.
				</p>
			</div>
		</div>

		<div class="flex gap-4">
			<span class="w-8 font-bold">2.</span>
			<div class="flex-1">
				<p class="font-bold uppercase">{data.pihak2.perusahaan || '(Second Party Name)'}</p>
				<p class="mt-1">
					{data.lang === 'en' ? 'Located at' : 'Beralamat di'} {data.pihak2.alamat || '.................'}, {data.lang === 'en' ? 'represented by' : 'dalam hal ini diwakili oleh'}
					{data.pihak2.nama || '.................'}. {data.lang === 'en' ? 'Hereinafter referred to as' : 'Selanjutnya disebut sebagai'}
					<strong>"{t.p2}"</strong>.
				</p>
			</div>
		</div>
	</div>

	<!-- Konten Hukum -->
	<div class="space-y-6 text-justify text-[10px] leading-relaxed sm:text-xs">
		<p>
			{data.lang === 'en'
				? `Whereas, in connection with **${data.tujuan || '.................'}**, the First Party intends to disclose Confidential Information to the Second Party. The Parties agree to be bound by the following provisions:`
				: `Bahwa, sehubungan dengan **${data.tujuan || '.................'}**, Pihak Pertama bermaksud untuk mengungkapkan Informasi Rahasia kepada Pihak Kedua. Para Pihak sepakat untuk tunduk pada ketentuan berikut:`}
		</p>

		<div>
			<h3 class="font-bold border-b mb-2 pb-1 uppercase">{t.pasal1}</h3>
			<p>
				{data.lang === 'en'
					? 'Confidential Information includes, but is not limited to, technical data, trade secrets, business plans, financial information, marketing strategies, product designs, customer lists, and other information declared as secret or which should reasonably be considered secret by the Receiving Party.'
					: 'Informasi Rahasia mencakup, namun tidak terbatas pada, data teknis, rahasia dagang, rencana bisnis, informasi keuangan, strategi pemasaran, desain produk, daftar pelanggan, dan informasi lain yang dinyatakan sebagai rahasia atau yang secara wajar harus dianggap sebagai rahasia oleh Pihak Penerima.'}
			</p>
		</div>

		<div>
			<h3 class="font-bold border-b mb-2 pb-1 uppercase">{t.pasal2}</h3>
			<p>
				{data.lang === 'en'
					? 'The Receiving Party agrees to: (a) maintain the confidentiality of Confidential Information with the same high level of care as when maintaining its own confidential information; (b) use Confidential Information solely for the purposes stated in this Agreement; (c) not disclose Confidential Information to third parties without the prior written consent of the Disclosing Party.'
					: 'Pihak Penerima setuju untuk: (a) menjaga kerahasiaan Informasi Rahasia dengan tingkat kehati-hatian yang sama tingginya dengan saat menjaga informasi rahasianya sendiri; (b) menggunakan Informasi Rahasia semata-mata untuk tujuan yang disebutkan dalam Perjanjian ini; (c) tidak mengungkapkan Informasi Rahasia kepada pihak ketiga tanpa persetujuan tertulis sebelumnya dari Pihak Pengungkap.'}
			</p>
		</div>

		<div>
			<h3 class="font-bold border-b mb-2 pb-1 uppercase">{t.pasal4}</h3>
			<p>
				{data.lang === 'en'
					? `These confidentiality obligations will be effective from the date of signing this agreement and remain in force for **${data.jangkaWaktu || '.................'}** after the termination of discussions or cooperation between the Parties.`
					: `Kewajiban kerahasiaan ini akan berlaku efektif sejak tanggal penandatanganan perjanjian ini dan tetap berlaku selama **${data.jangkaWaktu || '.................'}** setelah pengakhiran diskusi atau kerjasama antara Para Pihak.`}
			</p>
		</div>

		<div class="rounded-lg bg-slate-50 p-4 border-l-4 border-slate-900">
			<p class="font-bold mb-1 italic">{data.lang === 'en' ? 'Legal Disclaimer:' : 'Disclaimer Hukum:'}</p>
			<p class="text-[9px] text-slate-500 italic">
				{data.lang === 'en' 
					? 'This document is generated automatically by Kerjao.id for informational purposes. The Parties are advised to consult with legal counsel to ensure compliance with relevant jurisdictions.'
					: 'Dokumen ini dihasilkan secara otomatis oleh Kerjao.id untuk tujuan informasi. Para Pihak disarankan untuk berkonsultasi dengan ahli hukum guna memastikan kepatuhan terhadap yurisdiksi terkait.'}
			</p>
		</div>
	</div>

	<!-- Signatures -->
	<div class="mt-16 grid grid-cols-2 gap-12 text-center text-xs sm:text-sm">
		<div class="space-y-4">
			<p class="font-bold">{t.p1}</p>
			{#if data.ttdPihak1}
				<img src={data.ttdPihak1} alt="TTD Pihak 1" class="mx-auto block h-16 w-32 object-contain grayscale" />
			{:else}
				<div class="h-16 w-32"></div>
			{/if}
			<div class="space-y-1">
				<p class="font-bold underline uppercase">{data.pihak1.nama || '.................'}</p>
				<p class="text-[10px] text-slate-500">{data.pihak1.perusahaan || 'Disclosing Party'}</p>
			</div>
		</div>
		<div class="space-y-4">
			<p class="font-bold">{t.p2}</p>
			{#if data.ttdPihak2}
				<img src={data.ttdPihak2} alt="TTD Pihak 2" class="mx-auto block h-16 w-32 object-contain grayscale" />
			{:else}
				<div class="h-16 w-32"></div>
			{/if}
			<div class="space-y-1">
				<p class="font-bold underline uppercase">{data.pihak2.nama || '.................'}</p>
				<p class="text-[10px] text-slate-500">{data.pihak2.perusahaan || 'Receiving Party'}</p>
			</div>
		</div>
	</div>
</div>
