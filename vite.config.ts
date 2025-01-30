import { sentrySvelteKit } from "@sentry/sveltekit";
import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "personal-36u",
            project: "javascript-sveltekit"
        }
    }), sveltekit()],

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});