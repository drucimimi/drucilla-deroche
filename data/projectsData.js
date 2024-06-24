import { v4 as uuidv4 } from 'uuid';
export const projectsData = [
	{
		id: 1,
		title: 'Recipes App',
		url: 'https://recipes-app.webapps24.eu',
		category: 'FullStack Application',
		img: '/images/web-project-2.png',
		ProjectHeader: {
			title: 'Recipes App',
			publishDate: '12 juin 2023',
			tags: 'FullStack Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Recipes App',
				img: '/images/web-project-2.png',
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
						'Next.js',
						'TailwindCSS',
						'Bun',
						'VSCode',
						'Flutter',
						'Dart',
						'Android Studio',
						'Spring Boot',
						'API REST',
						'IntelliJ IDEA CE',
						'Git/GitHub',
					],
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
				title: 'RAS YLANG',
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
						'Git/GitHub'
					],
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
				title: 'Jeu du Serpent',
				img: '/images/web-project-1.png',
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
		},
	},
	{
		id: 4,
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
				img: '/images/ui-project.png',
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
		},
	},
];
