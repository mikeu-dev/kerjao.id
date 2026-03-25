<script lang="ts">
	import type { LamaranData } from '$lib/utils/lamaran';

	let { data }: { data: LamaranData } = $props();

	function niceDate(d: string): string {
		if (!d) return '...';
		return new Date(d).toLocaleDateString('id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	// Function to get active lampiran array
	let lampiranList = $derived(() => {
		let list: string[] = [];
		if (data.lampiranCV) list.push('Curriculum Vitae (CV)');
		if (data.lampiranKTP) list.push('Fotokopi KTP');
		if (data.lampiranIjazah) list.push('Fotokopi Ijazah / Transkrip Nilai');
		if (data.lampiranFoto) list.push('Pas Foto Terbaru');
		if (data.lampiranPortofolio) list.push('Portofolio');
		return list;
	});
</script>

<div
	class="relative mx-auto min-h-[1122px] w-full bg-white p-8 font-serif text-[14px] leading-relaxed text-slate-900 shadow-2xl sm:p-12 print:m-0 print:p-0 print:text-black print:shadow-none"
>
	<!-- Tempat & Tanggal -->
	<div class="mb-8 text-right">
		<p>{data.city || 'Kota'}, {niceDate(data.date)}</p>
	</div>

	<!-- Kepada Yth -->
	<div class="mb-8 leading-snug">
		<p>Hal: <span class="font-bold">Lamaran Pekerjaan</span></p>
		<p class="mt-4">Yth.</p>
		<p class="font-bold">{data.recipientName || 'Bapak/Ibu HRD'}</p>
		<p class="font-bold">{data.companyName || 'Nama Perusahaan'}</p>
		<p class="whitespace-pre-wrap">{data.companyAddress || 'Alamat Perusahaan\nKota'}</p>
	</div>

	<!-- Salam Pembuka -->
	<div class="mb-4">
		<p>Dengan hormat,</p>
	</div>

	<!-- Paragraf Pembuka -->
	<div class="mb-4 text-justify indent-8">
		<p>
			{#if data.infoSource}
				Berdasarkan informasi lowongan pekerjaan yang saya peroleh dari <span class="font-medium"
					>{data.infoSource}</span
				>, dengan ini saya menyampaikan ketertarikan untuk melamar posisi
				<span class="font-bold">{data.positionApplied || '................'}</span> di perusahaan yang
				Bapak/Ibu pimpin.
			{:else}
				Melalui surat lamaran ini, saya bermaksud untuk melamar pekerjaan pada posisi <span
					class="font-bold">{data.positionApplied || '................'}</span
				> di perusahaan yang Bapak/Ibu pimpin.
			{/if}
		</p>
	</div>

	<!-- Data Diri -->
	<div class="mb-4 text-justify">
		<p class="mb-2">Berikut adalah biodata singkat saya:</p>
		<table class="mb-4 ml-8 w-full">
			<tbody>
				<tr>
					<td class="w-40 py-1 font-medium">Nama</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1 font-bold">{data.applicantName || '................'}</td>
				</tr>
				<tr>
					<td class="w-40 py-1 font-medium">Tempat, Tgl Lahir</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1"
						>{data.applicantPlaceBirth || '................'}, {niceDate(
							data.applicantDateBirth
						)}</td
					>
				</tr>
				<tr>
					<td class="w-40 py-1 font-medium">Pendidikan Terakhir</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1">{data.applicantEducation || '................'}</td>
				</tr>
				<tr>
					<td class="w-40 py-1 align-top font-medium">Alamat</td>
					<td class="w-4 py-1 align-top">:</td>
					<td class="flex-1 py-1 whitespace-pre-wrap"
						>{data.applicantAddress || '................'}</td
					>
				</tr>
				<tr>
					<td class="w-40 py-1 font-medium">Nomor Telepon/WA</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1">{data.applicantPhone || '................'}</td>
				</tr>
				<tr>
					<td class="w-40 py-1 font-medium">Email</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1">{data.applicantEmail || '................'}</td>
				</tr>
			</tbody>
		</table>
	</div>

	<!-- Paragraf Skill -->
	<div class="mb-4 text-justify indent-8">
		<p>
			Saya memiliki kondisi kesehatan yang sangat baik, pekerja keras, dan mampu bekerja baik secara
			tim maupun individu.
			{#if data.additionalSkills}
				Sebagai nilai tambah, <span class="font-medium text-slate-800">{data.additionalSkills}</span
				>.
			{/if}
			Saya sangat berharap kualifikasi serta pengalaman yang saya paparkan di atas dapat memberikan kontribusi
			positif bagi perusahaan Bapak/Ibu.
		</p>
	</div>

	<!-- Lampiran -->
	<div class="mb-6 text-justify">
		<p class="mb-2">
			Sebagai bahan pertimbangan, turut saya lampirkan kelengkapan administratif berikut:
		</p>
		<ol class="list-decimal space-y-1 pl-8">
			{#if lampiranList().length === 0}
				<li class="text-slate-400 italic">Curriculum Vitae (CV)</li>
			{:else}
				{#each lampiranList() as lampiran (lampiran)}
					<li>{lampiran}</li>
				{/each}
			{/if}
		</ol>
	</div>

	<!-- Paragraf Penutup -->
	<div class="mb-12 text-justify indent-8">
		<p>
			Demikian surat lamaran kerja ini saya buat dengan sebenar-benarnya. Besar harapan saya agar
			Bapak/Ibu bersedia meluangkan waktu untuk memberikan kesempatan wawancara sehingga saya dapat
			menjelaskan lebih detail mengenai kualifikasi saya. Atas perhatian dan kesempatan yang
			diberikan, saya sampaikan terima kasih.
		</p>
	</div>

	<!-- Tanda Tangan -->
	<div class="flex flex-col items-end">
		<div class="w-64 text-center">
			<p class="mb-2">Hormat saya,</p>
			<!-- Ruang Tanda Tangan -->
			<div class="h-24 w-full"></div>
			<p class="font-bold uppercase underline">{data.applicantName || 'NAMA PELAMAR'}</p>
		</div>
	</div>
</div>
