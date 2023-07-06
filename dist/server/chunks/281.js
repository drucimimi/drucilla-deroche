"use strict";
exports.id = 281;
exports.ids = [281];
exports.modules = {

/***/ 8281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ sharingOptions),
/* harmony export */   "n": () => (/* binding */ projectsData)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const projectsData = [
    {
        id: 1,
        title: "Recipes App",
        url: "https://recipes-app.webapps24.eu",
        category: "FullStack JS",
        img: "/images/web-project-2.png",
        ProjectHeader: {
            title: "Recipes App",
            publishDate: "12 juin 2023",
            tags: "FullStack Application"
        },
        ProjectImages: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
                title: "Recipes App",
                img: "/images/web-project-2.png"
            }
        ],
        ProjectInfo: {
            ProjectDetailsHeading: "A propos du projet",
            ObjectivesHeading: "Objectif",
            ObjectivesDetails: "Permettre \xe0 tout type de personne de d\xe9couvrir et/ou cr\xe9er et partager ses recettes de cuisine",
            Technologies: [
                {
                    title: "Outils & Languages",
                    techs: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Express.js",
                        "Objection.js",
                        "knex",
                        "TailwindCSS",
                        "PHPStorm",
                        "Git/GitHub"
                    ]
                }
            ]
        }
    },
    {
        id: 2,
        title: "RAS YLANG",
        url: "https://rasylang.com",
        category: "FullStack PHP",
        img: "/images/web-project-3.png",
        ProjectHeader: {
            title: "RAS YLANG",
            publishDate: "10 juin 2022",
            tags: "FullStack Application"
        },
        ProjectImages: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
                title: "RAS YLANG",
                img: "/images/web-project-3.png"
            }
        ],
        ProjectInfo: {
            ProjectDetailsHeading: "A propos du projet",
            ObjectivesHeading: "Objectif",
            ObjectivesDetails: "Permettre \xe0 tout type de personne d'acheter, d'\xe9couter en ligne et/ou de t\xe9l\xe9charger les albums de l'artiste RAS YLANG",
            Technologies: [
                {
                    title: "Outils & Languages",
                    techs: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "PHP",
                        "SQL",
                        "Sass",
                        "PHPStorm",
                        "Git"
                    ]
                }
            ]
        }
    },
    {
        id: 3,
        title: "Jeu du Serpent",
        url: "https://jeu-serpent-2.netlify.app",
        category: "FrontEnd JS",
        img: "/images/web-project-1.png",
        ProjectHeader: {
            title: "Jeu du Serpent",
            publishDate: "19 Nov 2022",
            tags: "Frontend Application"
        },
        ProjectImages: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
                title: "Jeu du Serpent",
                img: "/images/web-project-1.png"
            }
        ],
        ProjectInfo: {
            ProjectDetailsHeading: "A propos du projet",
            ObjectivesHeading: "Objectif",
            ObjectivesDetails: "Jouer presque comme \xe0 l'\xe9poque au jeu du serpent",
            Technologies: [
                {
                    title: "Outils & Languages",
                    techs: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Svelte.js",
                        "PHPStorm",
                        "Git/GitHub"
                    ]
                }
            ]
        }
    },
    {
        id: 4,
        title: "Site vitrine d'un fast food",
        url: "https://burger-code.42web.io",
        category: "FullStack PHP",
        img: "/images/web-project-3.png",
        ProjectHeader: {
            title: "Site vitrine d'un fast food",
            publishDate: "16 f\xe9vrier 2022",
            tags: "FullStack Application"
        },
        ProjectImages: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
                title: "Site vitrine d'un fast-food",
                img: "/images/web-project-3.png"
            }
        ],
        ProjectInfo: {
            ProjectDetailsHeading: "A propos du projet",
            ObjectivesHeading: "Objectif",
            ObjectivesDetails: "Am\xe9liorer la visibilit\xe9 du restaurant en faisant la promotion de son site vitrine",
            Technologies: [
                {
                    title: "Outils & Languages",
                    techs: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "jQuery",
                        "PHP",
                        "SQL",
                        "Bootstrap",
                        "Atom",
                        "Git/GitHub"
                    ]
                }
            ]
        }
    },
    {
        id: 5,
        title: "Top 5 des meilleures actrices de t\xe9l\xe9novelas",
        url: "https://drucimimi.github.io/top-actrices",
        category: "FrontEnd JS",
        img: "/images/web-project-1.png",
        ProjectHeader: {
            title: "Top 5 des meilleures actrices de t\xe9l\xe9novelas",
            publishDate: "5 F\xe9v 2021",
            tags: "Frontend Application"
        },
        ProjectImages: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
                title: "Top 5 des meilleures actrices de t\xe9l\xe9novelas",
                img: "/images/web-project-1.png"
            }
        ],
        ProjectInfo: {
            ProjectDetailsHeading: "A propos du projet",
            ObjectivesHeading: "Objectif",
            ObjectivesDetails: "Donner mon avis sur le top 5 des actrices de t\xe9l\xe9novelas en pr\xe9cisant les meilleures s\xe9ries",
            Technologies: [
                {
                    title: "Outils & Languages",
                    techs: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "jQuery",
                        "Bootstrap",
                        "Atom"
                    ]
                }
            ]
        }
    },
    {
        id: 6,
        title: "Site vitrine d'une agence de voyages",
        url: "https://drucimimi.github.io/voyage",
        category: "FrontEnd",
        img: "/images/ui-project.png",
        ProjectHeader: {
            title: "Site vitrine d'une agence de voyages",
            publishDate: "16 juin 2021",
            tags: "Frontend UI"
        },
        ProjectImages: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
                title: "Site vitrine d'une agence de voyages",
                img: "/images/ui-project.png"
            }
        ],
        ProjectInfo: {
            ProjectDetailsHeading: "A propos du projet",
            ObjectivesHeading: "Objectif",
            ObjectivesDetails: "Am\xe9liorer la visibilit\xe9 de l'agence de voyages en faisant la promotion de son site vitrine",
            Technologies: [
                {
                    title: "Outils & Languages",
                    techs: [
                        "HTML",
                        "CSS",
                        "Atom"
                    ]
                }
            ]
        }
    }
];
const sharingOptions = {
    SocialSharingHeading: "Partager le projet",
    SocialSharing: [
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
            name: "Twitter",
            icon: "/images/BiTwitter.svg",
            url: "https://twitter.com/"
        },
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
            name: "Instagram",
            icon: "/images/BiInstagram.svg",
            url: "https://instagram.com/"
        },
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
            name: "Facebook",
            icon: "/images/BiFacebook.svg",
            url: "https://facebook.com/"
        },
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
            name: "LinkedIn",
            icon: "/images/BiLinkedin.svg",
            url: "https://linkedin.com/"
        }
    ]
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;