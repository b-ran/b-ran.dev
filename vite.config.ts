import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';
import { sentrySvelteKit } from '@sentry/sveltekit';

export default defineConfig({
    plugins: [
      tailwindcss(),
      sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "personal-36u",
            project: "javascript-sveltekit"
        }
    }), sveltekit()],

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});