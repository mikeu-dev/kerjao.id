export interface ResignData {
	nama: string;
	posisi: string;
	perusahaan: string;
	tanggal: string;
	alasan: string;
	alasanCustom: string;
	tone: 'formal' | 'profesional' | 'santai';
}

export function generateLetter(data: ResignData): string {
	const nama = data.nama.trim() || '[Nama Anda]';
	const posisi = data.posisi.trim() || '[Posisi/Jabatan]';
	const perusahaan = data.perusahaan.trim() || '[Nama Perusahaan]';

	let tanggalStr = '[Tanggal]';
	if (data.tanggal) {
		try {
			const date = new Date(data.tanggal);
			tanggalStr = new Intl.DateTimeFormat('id-ID', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			}).format(date);
		} catch {
			tanggalStr = data.tanggal;
		}
	} else {
		// Default to today if empty, but visually empty fallback
		tanggalStr = '[Tanggal]';
	}

	const alasanBase = data.alasan === 'Lainnya' ? data.alasanCustom.trim() : data.alasan;
	const alasanText = alasanBase ? alasanBase.toLowerCase() : '[alasan Anda]';

	if (data.tone === 'santai') {
		return `${tanggalStr}

Kepada Yth.
HRD / Manajemen
${perusahaan}

Dengan hormat,

Melalui surat ini, saya ${nama} selaku ${posisi} bermaksud menyampaikan pengunduran diri dari ${perusahaan}. Keputusan ini saya ambil karena ${alasanText}.

Saya sangat berterima kasih atas kesempatan dan pengalaman berharga selama bekerja di sini. Suasana kerja yang menyenangkan dan teman-teman yang mendukung membuat perjalanan karir saya di ${perusahaan} sangat berarti.

Saya mohon maaf jika ada kesalahan selama saya bekerja. Saya berharap ${perusahaan} semakin sukses dan berkembang ke depannya.

Salam hangat,

${nama}`;
	}

	if (data.tone === 'profesional') {
		return `${tanggalStr}

Kepada Yth.
HRD / Manajemen
${perusahaan}

Dengan hormat,

Bersama surat ini, saya ${nama}, yang menjabat sebagai ${posisi}, bermaksud untuk mengajukan pengunduran diri dari ${perusahaan}. Adapun alasan pengunduran diri saya adalah karena ${alasanText}.

Saya ingin mengucapkan terima kasih yang sebesar-besarnya atas kesempatan yang telah diberikan kepada saya untuk belajar dan berkembang di ${perusahaan}. Banyak pengalaman berharga yang saya dapatkan selama bekerja bersama tim yang luar biasa.

Saya berkomitmen untuk membantu proses transisi tugas dan tanggung jawab saya hingga hari terakhir saya bekerja, agar semuanya berjalan lancar.

Apabila ada hal-hal yang kurang berkenan selama saya bekerja, saya memohon maaf yang sebesar-besarnya. Semoga ${perusahaan} terus maju dan meraih pencapaian yang lebih besar di masa mendatang.

Hormat saya,

${nama}`;
	}

	// Default to formal
	return `${tanggalStr}

Yth. HRD / Pimpinan Perusahaan
${perusahaan}
Di Tempat

Dengan hormat,

Melalui surat ini, saya yang bertanda tangan di bawah ini:

Nama: ${nama}
Jabatan: ${posisi}

Bermaksud secara resmi mengajukan permohonan pengunduran diri dari jabatan ${posisi} di ${perusahaan}. Keputusan ini saya ambil dengan mempertimbangkan hal terkait ${alasanText}.

Saya mengucapkan terima kasih yang sebesar-besarnya atas kesempatan yang telah diberikan kepada saya selama bekerja di ${perusahaan}. Merupakan suatu kehormatan bagi saya dapat menjadi bagian dari perusahaan ini.

Saya juga bersedia untuk membantu proses serah terima pekerjaan agar perpindahan tugas dapat berjalan dengan baik dan tidak mengganggu operasional perusahaan.

Demikian surat pengunduran diri ini saya buat dengan kesadaran penuh dan tanpa paksaan dari pihak mana pun. Saya memohon maaf apabila terdapat kesalahan selama saya menjadi bagian dari ${perusahaan}. Semoga perusahaan semakin sukses dan berkembang.

Hormat saya,

${nama}`;
}
