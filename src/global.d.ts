/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
	interface Window {
		dataLayer: any[];
		gtag: (...args: any[]) => void;
	}
}

export {};
