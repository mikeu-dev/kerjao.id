<script lang="ts">
	import type { NDAData } from '$lib/utils/nda';

	let { data }: { data: NDAData } = $props();

	const formatDate = (dateStr: string) => {
		if (!dateStr) return '.................';
		const date = new Date(dateStr);
		return date.toLocaleDateString('id-ID', {
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
			Perjanjian Kerahasiaan
		</h1>
		<p class="mt-4 text-sm font-medium">(Non-Disclosure Agreement)</p>
	</div>

	<!-- Intro -->
	<div class="mb-8 text-justify text-xs leading-relaxed sm:text-sm">
		<p>
			Perjanjian Kerahasiaan ini ("Perjanjian") dibuat dan ditandatangani pada tanggal
			{formatDate(data.tanggal)}, di {data.lokasi || '.................'}, oleh dan antara:
		</p>
	</div>

	<!-- Para Pihak -->
	<div class="mb-8 space-y-4 text-xs sm:text-sm">
		<div class="flex gap-4">
			<span class="w-8 font-bold">1.</span>
			<div class="flex-1">
				<p class="font-bold uppercase">{data.pihak1.perusahaan || '(Nama Perusahaan/Pemberi)'}</p>
				<p class="mt-1">
					Beralamat di {data.pihak1.alamat || '.................'}, dalam hal ini diwakili oleh
					{data.pihak1.nama || '.................'}. Selanjutnya disebut sebagai
					<strong>"Pihak Pertama"</strong> atau <strong>"Pihak Pengungkap"</strong>.
				</p>
			</div>
		</div>

		<div class="flex gap-4">
			<span class="w-8 font-bold">2.</span>
			<div class="flex-1">
				<p class="font-bold uppercase">{data.pihak2.perusahaan || '(Nama Perusahaan/Penerima)'}</p>
				<p class="mt-1">
					Beralamat di {data.pihak2.alamat || '.................'}, dalam hal ini diwakili oleh
					{data.pihak2.nama || '.................'}. Selanjutnya disebut sebagai
					<strong>"Pihak Kedua"</strong> atau <strong>"Pihak Penerima"</strong>.
				</p>
			</div>
		</div>
	</div>

	<!-- Konten Hukum -->
	<div class="space-y-6 text-justify text-xs leading-relaxed sm:text-sm">
		<p>
			Bahwa, sehubungan dengan <strong>{data.tujuan || '.................'}</strong>, Pihak Pertama bermaksud untuk mengungkapkan Informasi Rahasia kepada Pihak Kedua. Para Pihak sepakat untuk tunduk pada ketentuan berikut:
		</p>

		<div>
			<h3 class="font-bold underline uppercase mb-2">Pasal 1: Definisi Informasi Rahasia</h3>
			<p>
				Informasi Rahasia mencakup, namun tidak terbatas pada, data teknis, rahasia dagang, rencana bisnis, informasi keuangan, strategi pemasaran, desain produk, daftar pelanggan, dan informasi lain yang dinyatakan sebagai rahasia atau yang secara wajar harus dianggap sebagai rahasia oleh Pihak Penerima.
			</p>
		</div>

		<div>
			<h3 class="font-bold underline uppercase mb-2">Pasal 2: Kewajiban Kerahasiaan</h3>
			<p>
				Pihak Penerima setuju untuk: (a) menjaga kerahasiaan Informasi Rahasia dengan tingkat kehati-hatian yang sama tingginya dengan saat menjaga informasi rahasianya sendiri; (b) menggunakan Informasi Rahasia semata-mata untuk tujuan yang disebutkan dalam Perjanjian ini; (c) tidak mengungkapkan Informasi Rahasia kepada pihak ketiga tanpa persetujuan tertulis sebelumnya dari Pihak Pengungkap.
			</p>
		</div>

		<div>
			<h3 class="font-bold underline uppercase mb-2">Pasal 3: Masa Berlaku</h3>
			<p>
				Kewajiban kerahasiaan ini akan berlaku efektif sejak tanggal penandatanganan perjanjian ini dan tetap berlaku selama <strong>{data.jangkaWaktu || '.................'}</strong> setelah pengakhiran diskusi atau kerjasama antara Para Pihak.
			</p>
		</div>

		<div>
			<h3 class="font-bold underline uppercase mb-2">Pasal 4: Pengembalian Informasi</h3>
			<p>
				Atas permintaan Pihak Pengungkap, Pihak Penerima wajib segera mengembalikan atau menghancurkan seluruh dokumen, catatan, atau media lain yang mengandung Informasi Rahasia beserta salinannya.
			</p>
		</div>

		<div>
			<h3 class="font-bold underline uppercase mb-2">Pasal 5: Hukum yang Berlaku</h3>
			<p>
				Perjanjian ini tunduk pada dan ditafsirkan sesuai dengan hukum Negara Republik Indonesia. Segala perselisihan yang timbul akan diselesaikan melalui musyawarah mufakat, dan jika tidak tercapai, akan diselesaikan di Pengadilan Negeri {data.lokasi || '.................'}.
			</p>
		</div>
	</div>

	<!-- Signatures -->
	<div class="mt-16 grid grid-cols-2 gap-12 text-center text-xs sm:text-sm">
		<div class="space-y-20">
			<p class="font-bold">PIHAK PERTAMA</p>
			<div class="space-y-1">
				<p class="font-bold underline uppercase">{data.pihak1.nama || '.................'}</p>
				<p class="text-[10px] text-slate-500">{data.pihak1.perusahaan || 'Pihak Pengungkap'}</p>
			</div>
		</div>
		<div class="space-y-20">
			<p class="font-bold">PIHAK KEDUA</p>
			<div class="space-y-1">
				<p class="font-bold underline uppercase">{data.pihak2.nama || '.................'}</p>
				<p class="text-[10px] text-slate-500">{data.pihak2.perusahaan || 'Pihak Penerima'}</p>
			</div>
		</div>
	</div>
</div>
