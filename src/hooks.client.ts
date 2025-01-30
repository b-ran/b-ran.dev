import { handleErrorWithSentry, replayIntegration } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';
import { dev } from '$app/environment';

Sentry.init({
	dsn: 'https://99ce1b827f98f76adba262497e2e344c@o4508702069030912.ingest.de.sentry.io/4508702071390288',
	tracesSampleRate: 1.0,
	enabled: !dev,
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
