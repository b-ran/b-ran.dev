// Svelte
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const createThemeStore = () => {
	const { subscribe, set } = writable(browser && (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) ? 'dark' : 'light');

	const setTheme = (theme: string) => {
		if (!browser) return;
		localStorage.theme = theme;
		set(theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
	};

	return {
		subscribe,
		setTheme,
		toggle: () => browser && setTheme(localStorage.theme === 'light' ? 'dark' : 'light')
	};
};

export const theme = createThemeStore();