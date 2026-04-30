<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { localizeHref } from '$lib/paraglide/runtime';

	let {
		onConsentChange
	}: {
		onConsentChange?: (consent: { analytics: boolean; advertising: boolean }) => void;
	} = $props();

	let isVisible = $state(false);
	let showDetails = $state(false);
	let preferences = $state({
		analytics: true,
		advertising: true
	});

	const CONSENT_KEY = 'kerjao_cookie_consent';

	onMount(() => {
		if (!browser) return;

		const stored = localStorage.getItem(CONSENT_KEY);
		if (stored) {
			try {
				const parsed = JSON.parse(stored);
				preferences = parsed;
				onConsentChange?.(parsed);
			} catch {
				isVisible = true;
			}
		} else {
			// Show banner after small delay for better UX
			setTimeout(() => {
				isVisible = true;
			}, 1500);
		}
	});

	function acceptAll() {
		preferences = { analytics: true, advertising: true };
		saveAndClose();
	}

	function rejectAll() {
		preferences = { analytics: false, advertising: false };
		saveAndClose();
	}

	function savePreferences() {
		saveAndClose();
	}

	function saveAndClose() {
		if (browser) {
			localStorage.setItem(CONSENT_KEY, JSON.stringify(preferences));
		}
		onConsentChange?.(preferences);
		isVisible = false;
	}
</script>

{#if isVisible}
	<!-- Backdrop -->
	<div class="fixed inset-0 z-9998 bg-slate-900/30 backdrop-blur-sm print:hidden"></div>

	<!-- Banner -->
	<div
		class="fixed inset-x-0 bottom-0 z-9999 p-4 sm:p-6 print:hidden"
		role="dialog"
		aria-label="Persetujuan Cookie"
	>
		<div
			class="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200/60 bg-white/95 shadow-2xl backdrop-blur-xl sm:rounded-3xl dark:border-slate-700/60 dark:bg-slate-900/95"
		>
			<div class="p-6 sm:p-8">
				<!-- Header -->
				<div class="mb-4 flex items-start gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-lg dark:bg-indigo-900/30"
					>
						🍪
					</div>
					<div>
						<h3 class="text-lg font-bold text-slate-900 dark:text-white">Persetujuan Cookie</h3>
						<p class="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
							Kami menggunakan cookies untuk analitik dan iklan demi meningkatkan layanan. Data yang
							Anda masukkan ke perkakas kami tetap <strong>100% diproses di browser</strong>
							dan tidak pernah dikirim ke server.
							<a
								href={localizeHref('/kebijakan-privasi')}
								class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
								>Pelajari selengkapnya</a
							>.
						</p>
					</div>
				</div>

				<!-- Details Toggle -->
				{#if showDetails}
					<div
						class="mb-6 space-y-4 rounded-xl border border-slate-100 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/50"
					>
						<!-- Essential (always on) -->
						<div class="flex items-center justify-between">
							<div>
								<p class="text-sm font-semibold text-slate-900 dark:text-white">Cookies Esensial</p>
								<p class="text-xs text-slate-500">
									Diperlukan untuk fungsi dasar (tema, preferensi)
								</p>
							</div>
							<span
								class="rounded-lg bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
								>Selalu Aktif</span
							>
						</div>

						<div class="border-t border-slate-200 dark:border-slate-700"></div>

						<!-- Analytics -->
						<label class="flex cursor-pointer items-center justify-between">
							<div>
								<p class="text-sm font-semibold text-slate-900 dark:text-white">Cookies Analitik</p>
								<p class="text-xs text-slate-500">Google Analytics — mengukur performa website</p>
							</div>
							<div class="relative">
								<input type="checkbox" bind:checked={preferences.analytics} class="peer sr-only" />
								<div
									class="h-6 w-11 rounded-full bg-slate-300 transition-colors peer-checked:bg-indigo-600 dark:bg-slate-600"
								></div>
								<div
									class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5"
								></div>
							</div>
						</label>

						<div class="border-t border-slate-200 dark:border-slate-700"></div>

						<!-- Advertising -->
						<label class="flex cursor-pointer items-center justify-between">
							<div>
								<p class="text-sm font-semibold text-slate-900 dark:text-white">Cookies Iklan</p>
								<p class="text-xs text-slate-500">
									Google AdSense — menampilkan iklan yang relevan
								</p>
							</div>
							<div class="relative">
								<input
									type="checkbox"
									bind:checked={preferences.advertising}
									class="peer sr-only"
								/>
								<div
									class="h-6 w-11 rounded-full bg-slate-300 transition-colors peer-checked:bg-indigo-600 dark:bg-slate-600"
								></div>
								<div
									class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5"
								></div>
							</div>
						</label>
					</div>
				{/if}

				<!-- Actions -->
				<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<button
						onclick={() => (showDetails = !showDetails)}
						class="text-sm font-medium text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
					>
						{showDetails ? 'Sembunyikan Detail' : 'Kelola Preferensi'}
					</button>

					<div class="flex gap-3">
						{#if showDetails}
							<button
								onclick={rejectAll}
								class="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
							>
								Tolak Semua
							</button>
							<button
								onclick={savePreferences}
								class="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700"
							>
								Simpan Preferensi
							</button>
						{:else}
							<button
								onclick={rejectAll}
								class="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
							>
								Tolak
							</button>
							<button
								onclick={acceptAll}
								class="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700"
							>
								Terima Semua
							</button>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
