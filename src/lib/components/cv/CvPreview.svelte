<script lang="ts">
	import type { CvData } from '$lib/utils/cv-maker';

	let { data }: { data: CvData } = $props();

	// Function to split raw text into array of lines for bullet points
	function splitBullets(text: string): string[] {
		if (!text) return [];
		return text
			.split('\n')
			.map((s) => s.trim())
			.filter((s) => s.length > 0)
			.map((s) => s.replace(/^[-•*]\s*/, '')); // Remove manual bullets if user typed them
	}

	function getFontClass(font: string) {
		switch (font) {
			case 'Garamond':
				return 'font-serif [font-family:"EB_Garamond",Garamond,serif]';
			case 'Arial':
				return 'font-sans [font-family:Arial,sans-serif]';
			case 'Helvetica':
				return 'font-sans [font-family:Helvetica,sans-serif]';
			default:
				return 'font-serif [font-family:"Times_New_Roman",Times,serif]';
		}
	}
</script>

<!-- The Printable A4 Container -->
<div
	class="cv-document mx-auto bg-white p-[10mm] text-black shadow-[0_0_15px_rgba(0,0,0,0.1)] print:p-0 print:shadow-none {getFontClass(
		data.font || 'Times New Roman'
	)}"
	style="width: 210mm; min-height: 297mm; letter-spacing: -0.01em;"
>
	<!-- HEADER: Personal Info -->
	<div class="mb-4 text-center">
		<!-- Name -->
		<h1 class="mb-1 text-2xl font-bold tracking-wide uppercase">
			{data.fullName || 'NAMA LENGKAP PENGGUNA'}
		</h1>

		<!-- Contacts -->
		<div class="flex flex-wrap items-center justify-center gap-x-2 text-[10.5pt] leading-tight">
			{#if data.location}<span>{data.location}</span>{/if}
			{#if data.location && data.phone}<span>•</span>{/if}
			{#if data.phone}<span>{data.phone}</span>{/if}
			{#if data.phone && data.email}<span>•</span>{/if}
			{#if data.email}<span>{data.email}</span>{/if}
		</div>

		<!-- Links -->
		<div class="flex flex-wrap items-center justify-center gap-x-2 text-[10.5pt] leading-tight">
			{#if data.linkedin}
				<span>{data.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
			{/if}
			{#if data.linkedin && data.website}<span>•</span>{/if}
			{#if data.website}
				<span>{data.website.replace(/^https?:\/\/(www\.)?/, '')}</span>
			{/if}
		</div>
	</div>

	<!-- SUMMARY -->
	{#if data.summary}
		<div class="mb-4 text-[11pt] leading-snug">
			<h2 class="mb-1 border-b border-black pb-0.5 text-sm font-bold tracking-wider uppercase">
				Professional Summary
			</h2>
			<div class="text-justify">
				{data.summary}
			</div>
		</div>
	{/if}

	<!-- EXPERIENCE -->
	{#if data.experiences && data.experiences.length > 0}
		<div class="mb-4 text-[11pt] leading-snug">
			<h2 class="mb-1 border-b border-black pb-0.5 text-sm font-bold tracking-wider uppercase">
				Experience
			</h2>

			<div class="space-y-3">
				{#each data.experiences as exp (exp.id)}
					<div>
						<!-- Line 1: Company & Location -->
						<div class="flex items-baseline justify-between">
							<span class="font-bold">{exp.company || 'Company Name'}</span>
							<span>{exp.location || 'City, Country'}</span>
						</div>
						<!-- Line 2: Position & Dates -->
						<div class="flex items-baseline justify-between italic">
							<span>{exp.position || 'Job Title'}</span>
							<span>
								{exp.startDate
									? new Date(exp.startDate).toLocaleDateString('en-US', {
											month: 'short',
											year: 'numeric'
										})
									: 'Month Year'}
								–
								{#if exp.current}
									Present
								{:else}
									{exp.endDate
										? new Date(exp.endDate).toLocaleDateString('en-US', {
												month: 'short',
												year: 'numeric'
											})
										: 'Month Year'}
								{/if}
							</span>
						</div>
						<!-- Description Bullets -->
						{#if exp.description}
							<ul class="mt-1 ml-4 list-disc space-y-0.5 text-justify">
								{#each splitBullets(exp.description) as bullet, i (i)}
									<li class="pl-1">{bullet}</li>
								{/each}
							</ul>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- EDUCATION -->
	{#if data.education && data.education.length > 0}
		<div class="mb-4 text-[11pt] leading-snug">
			<h2 class="mb-1 border-b border-black pb-0.5 text-sm font-bold tracking-wider uppercase">
				Education
			</h2>

			<div class="space-y-3">
				{#each data.education as edu (edu.id)}
					<div>
						<!-- Line 1: Institution & Location -->
						<div class="flex items-baseline justify-between">
							<span class="font-bold">{edu.institution || 'University Name'}</span>
							<span>{edu.location || 'City, Country'}</span>
						</div>
						<!-- Line 2: Degree & Dates -->
						<div class="flex items-baseline justify-between italic">
							<span>
								{edu.degree || 'Degree'}
								{edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}
								{#if edu.gpa}
									<span class="ml-1 text-[10pt] font-semibold not-italic">(GPA: {edu.gpa})</span>
								{/if}
							</span>
							<span>
								{edu.startDate
									? new Date(edu.startDate).toLocaleDateString('en-US', {
											month: 'short',
											year: 'numeric'
										})
									: 'Month Year'}
								–
								{#if edu.current}
									Present
								{:else}
									{edu.endDate
										? new Date(edu.endDate).toLocaleDateString('en-US', {
												month: 'short',
												year: 'numeric'
											})
										: 'Month Year'}
								{/if}
							</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- ADDITIONAL / SKILLS -->
	{#if data.skills || data.languages || data.certifications}
		<div class="mb-4 text-[11pt] leading-snug">
			<h2 class="mb-1 border-b border-black pb-0.5 text-sm font-bold tracking-wider uppercase">
				Skills & Additional Information
			</h2>

			<div class="space-y-1">
				{#if data.skills}
					<div>
						<span class="font-bold">Technical / Soft Skills:</span>
						<span>{data.skills}</span>
					</div>
				{/if}
				{#if data.languages}
					<div>
						<span class="font-bold">Languages:</span>
						<span>{data.languages}</span>
					</div>
				{/if}
				{#if data.certifications}
					<div>
						<span class="font-bold">Certifications:</span>
						<span>{data.certifications}</span>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	/* Make sure A4 physical constraints are tight */
	.cv-document {
		box-sizing: border-box;
		line-height: 1.35; /* Standard single spacing for resumes */
		color: black !important;
	}

	@media print {
		.cv-document {
			width: 100% !important;
			margin: 0 !important;
			padding: 0 !important;
			box-shadow: none !important;
		}
	}
</style>
