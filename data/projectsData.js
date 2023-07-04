import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Recipes App',
		url: 'https://recipes-app.webapps24.eu',
		category: 'FullStack JS',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'Recipes App',
			publishDate: '12 juin 2023',
			tags: 'FullStack Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/ui-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-2.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-3.png',
			},
		],
		ProjectInfo: {
			ProjectDetailsHeading: 'A propos du projet',
			ObjectivesHeading: 'Objectif',
			ObjectivesDetails:
				'Permettre à tout type de personne de découvrir et/ou créer et partager ses recettes de cuisine',
			Technologies: [
				{
					title: 'Outils & Languages',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Express.js',
						'Objection.js',
						'knex',
						'TailwindCSS',
						'PHPStorm',
						'Git/GitHub',
					],
				},
			],
			SocialSharingHeading: 'Partager le projet',
			SocialSharing: [
			 	{
			 		id: uuidv4(),
			 		name: 'Twitter',
			 		icon: <FiTwitter />,
			 		url: 'https://twitter.com/',
			 	},
			 	{
			 		id: uuidv4(),
			 		name: 'Instagram',
			 		icon: <FiInstagram />,
			 		url: 'https://instagram.com/',
			 	},
			 	{
			 		id: uuidv4(),
			 		name: 'Facebook',
			 		icon: <FiFacebook />,
			 		url: 'https://facebook.com/',
			 	},
			 	{
			 		id: uuidv4(),
			 		name: 'LinkedIn',
			 		icon: <FiLinkedin />,
			 		url: 'https://linkedin.com/',
			 	},
			 ],
		},
	},
	{
		id: 2,
		title: 'RAS YLANG',
		url: 'https://rasylang.com',
		category: 'FullStack PHP',
		img: '/images/web-project-3.png',
		ProjectHeader: {
			title: 'RAS YLANG',
			publishDate: '10 juin 2022',
			tags: 'FullStack Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/ui-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-2.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-3.png',
			},
		],
		ProjectInfo: {
			ProjectDetailsHeading: 'A propos du projet',
			ObjectivesHeading: 'Objectif',
			ObjectivesDetails:
				'Permettre à tout type de personne d\'acheter, d\'écouter en ligne et/ou de télécharger les albums de l\'artiste RAS YLANG' ,
			Technologies: [
				{
					title: 'Outils & Languages',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'PHP',
						'SQL',
						'Sass',
						'PHPStorm',
						'Git'
					],
				},
			],
			SocialSharingHeading: 'Partager le projet',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: uuidv4(),
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: uuidv4(),
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
			],
		},
	},
	{
		id: 3,
		title: 'Jeu du Serpent',
		url: 'https://jeu-serpent-2.netlify.app',
		category: 'FrontEnd JS',
		img: '/images/web-project-1.png',
		ProjectHeader: {
			title: 'Jeu du Serpent',
			publishDate: '19 Nov 2022',
			tags: 'Frontend Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/ui-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-2.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-3.png',
			},
		],
		ProjectInfo: {
			ProjectDetailsHeading: 'A propos du projet',
			ObjectivesHeading: 'Objectif',
			ObjectivesDetails:
				'Jouer presque comme à l\'époque au jeu du serpent',
			Technologies: [
				{
					title: 'Outils & Languages',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Svelte.js',
						'PHPStorm',
						'Git/GitHub',
					],
				},
			],
			SocialSharingHeading: 'Partager le projet',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: uuidv4(),
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: uuidv4(),
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
			],
		},
	},
	{
		id: 4,
		title: 'Site vitrine d\'un fast food',
		url: 'https://burger-code.42web.io',
		category: 'FullStack PHP',
		img: '/images/web-project-3.png',
		ProjectHeader: {
			title: 'Site vitrine d\'un fast food',
			publishDate: '16 février 2022',
			tags: 'FullStack Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/ui-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-2.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-3.png',
			},
		],
		ProjectInfo: {
			ProjectDetailsHeading: 'A propos du projet',
			ObjectivesHeading: 'Objectif',
			ObjectivesDetails:
				'Améliorer la visibilité du restaurant en faisant la promotion de son site vitrine',
			Technologies: [
				{
					title: 'Outils & Languages',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'jQuery',
						'PHP',
						'SQL',
						'Bootstrap',
						'Atom',
						'Git/GitHub',
					],
				},
			],
			SocialSharingHeading: 'Partager le projet',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: uuidv4(),
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: uuidv4(),
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
			],
		},
	},
	{
		id: 5,
		title: 'Top 5 des meilleures actrices de télénovelas',
		url: 'https://drucimimi.github.io/top-actrices',
		category: 'FrontEnd JS',
		img: '/images/web-project-1.png',
		ProjectHeader: {
			title: 'Top 5 des meilleures actrices de télénovelas',
			publishDate: '5 Fév 2021',
			tags: 'Frontend Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/ui-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-2.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-3.png',
			},
		],
		ProjectInfo: {
			ProjectDetailsHeading: 'A propos du projet',
			ObjectivesHeading: 'Objectif',
			ObjectivesDetails:
				'Donner mon avis sur le top 5 des actrices de télénovelas en précisant les meilleures séries',
			Technologies: [
				{
					title: 'Outils & Languages',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'jQuery',
						'Bootstrap',
						'Atom',
					],
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: uuidv4(),
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: uuidv4(),
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
			],
		},
	},
	{
		id: 6,
		title: 'Site vitrine d\'une agence de voyages',
		url: 'https://drucimimi.github.io/voyage',
		category: 'FrontEnd',
		img: '/images/ui-project.png',
		ProjectHeader: {
			title: 'Site vitrine d\'une agence de voyages',
			publishDate: '16 juin 2021',
			tags: 'Frontend UI',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/ui-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-1.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-2.png',
			},
			{
				id: uuidv4(),
				title: 'Site vitrine d\'une agence de voyages',
				img: '/images/web-project-3.png',
			},
		],
		ProjectInfo: {
			ProjectDetailsHeading: 'A propos du projet',
			ObjectivesHeading: 'Objectif',
			ObjectivesDetails:
				'Améliorer la visibilité de l\'agence de voyages en faisant la promotion de son site vitrine',
			Technologies: [
				{
					title: 'Outils & Languages',
					techs: [
						'HTML',
						'CSS',
						'Atom',
					],
				},
			],
			SocialSharingHeading: 'Partager le projet',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/',
				},
				{
					id: uuidv4(),
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/',
				},
				{
					id: uuidv4(),
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
			],
		},
	},
];
