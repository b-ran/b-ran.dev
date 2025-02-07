import theSauce from '$lib/assets/projects/the-sauce.png';
import cc from '$lib/assets/projects/cc.png';
import cvGen from '$lib/assets/projects/cv-gen.png';
import dotPortal from '$lib/assets/projects/dot-portal.png';
import nix from '$lib/assets/projects/nix.png';

const projects = [
	{
		title: 'The Sauce',
		description: 'A business insights and visualization web platform for ANZ Business Customers. Built in collaboration between DOT Loves Data and ANZ.',
		image: theSauce,
		href: 'https://sauce.anz.co.nz',
		tags: ['SvelteKit', 'Typescript', 'TailwindCSS', 'Supabase', 'AWS', 'Docker'],
		highlight: true
	},
	{
		title: 'Community Compass',
		description: 'Web application that collates and visualizes data from across New Zealand to help community organizations make data-driven decisions.',
		image: cc,
		href: 'https://app.communitycompass.co.nz',
		tags: ['SvelteKit', 'Typescript', 'Python', 'FastAPI', 'TailwindCSS', 'AWS', 'Kubernetes', 'Docker'],
		highlight: true
	},
	{
		title: 'DOT Portal',
		description: 'Django application that serves as a central hub for all DOT Loves Data products and services.',
		image: dotPortal,
		href: 'https://products.dotlovesdata.com',
		tags: ['Django', 'Python', 'FastAPI', 'AWS', 'Kubernetes', 'Docker'],
		highlight: false
	},
	{
		title: 'CV PDF Generator',
		description: 'A simple NodeJS application that generates my CV in PDF format.',
		image: cvGen,
		href: 'https://github.com/b-ran/cv-gen',
		tags: ['Node' , 'Typescript', 'Javascript', 'PDFMake'],
		highlight: false
	},
	{
		title: 'NixOS Desktop',
		description: 'My personal linux desktop configuration managed with NixOS and Home-Manager.',
		image: nix,
		href: 'https://github.com/b-ran/dots',
		tags: ['Nix', 'NixOS', 'Home-Manager'],
		highlight: false
	},
];

export default projects;