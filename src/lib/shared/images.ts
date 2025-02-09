import cc from '$lib/assets/projects/cc.png';
import cvGen from '$lib/assets/projects/cv-gen.png';
import dotPortal from '$lib/assets/projects/dot-portal.png';
import nix from '$lib/assets/projects/nix.png';
import theSauce from '$lib/assets/projects/the-sauce.png';

export interface Image {
	src: string;
	alt: string;
}

export const IMAGES = {
	'CC': {
		src: cc,
		alt: 'Project screenshot of Community Compass'
	},
	'CV_GEN': {
		src: cvGen,
		alt: 'Project screenshot of a CV PDF Generator'
	},
	'DOT_PORTAL': {
		src: dotPortal,
		alt: 'Project screenshot of DOT Portal'
	},
	'NIX': {
		src: nix,
		alt: 'Project screenshot of a NixOS Desktop'
	},
	'THE_SAUCE': {
		src: theSauce,
		alt: 'Project screenshot of The Sauce'
	},
} as const;