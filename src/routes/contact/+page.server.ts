// Svelte
import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

// Libraries
import sgMail from '@sendgrid/mail';
import * as Sentry from '@sentry/node';
import status from 'http-status-codes';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		if (!name || !email || !message) {
			return { success: false, message: 'Please fill in all fields' };
		}

		sgMail.setApiKey(env.SENDGRID_API_KEY);
		const msg = {
			to: env.SENDGRID_EMAIL,
			from: env.SENDGRID_EMAIL,
			subject: 'New Message from Contact Form',
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
		};

		return sgMail.send(msg).then(() => {
			return {
				message: 'Thank you for your message!',
			};
		}).catch((error) => {
			Sentry.captureException(error);
			return fail(status.INTERNAL_SERVER_ERROR, {
				message: 'An error occurred while sending the email',
			});
		});
	}
};