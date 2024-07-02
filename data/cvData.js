import {aboutMeData} from "./aboutMeData";
import { v4 as uuidv4 } from 'uuid';
import {FiGithub, FiLinkedin} from "react-icons/fi";

export const cvData = {
    aboutMe: {
       title: "Développeuse Full Stack",
       description: `${aboutMeData[0].bio}`
    },
    softSkills: [
        {
            id: uuidv4(),
            title: "Curiosité",
            description: "Quand je ne sais pas faire une tâche, je n'hésite pas à chercher l'information dont j'ai besoin pour la réaliser."
        },
        {
            id: uuidv4(),
            title: "Sens du collectif",
            description: "J'aime bien travailler en équipe car on peut s'entraider et avancer plus vite sur un projet."
        },
        {
            id: uuidv4(),
            title:"Audace",
            description:"Quand j'identifie un besoin, je peux proposer une solution qui permettra de faciliter la réalisation du projet."
        }
    ],
    workExperienceAndHardSkills: [
        {
            id: uuidv4(),
            title: "Développeuse Full Stack",
            enterprise: "Accenture",
            location: "Nantes",
            startDate: "mai 2022",
            endDate: "en cours",
            missions: [
                {
                    id: uuidv4(),
                    name: "Monter en compétences sur Salesforce"
                },
                {
                    id: uuidv4(),
                    name: "DCI Group - Intégrer les données entre Salesforce et Workday"
                },
                {
                    id: uuidv4(),
                    name: "Enedis - Développer l'interface utilisateur d'une application interne."
                }
            ],
            skills: "Object Manager, Lightning App Builder/Manager, Flow, SOQL/SOSL, SFDX, VisualForce, Aura Components, LWC, Apex, Omnistudio"
        },
        {
            id: uuidv4(),
            title: "Assistante informatique / Développeuse Web",
            enterprise: "Le Chaudron",
            location: "Nantes",
            startDate: "avril 2021",
            endDate: "juillet 2021",
            missions: [
                {
                    id: uuidv4(),
                    name: "Proposer une application pour faciliter l'inventaire"
                },
                {
                    id: uuidv4(),
                    name: "Proposer d'automatiser les tâches"
                },
                {
                    id: uuidv4(),
                    name: "Trier et exporter une liste d'utilisateurs de tous les ateliers"
                }
            ],
            skills: "Git, Gitlab, MySQL, Symfony, Trello, JavaScript ES6, VS Code"
        },
        {
            id: uuidv4(),
            title: "Développeuse Web en période d'immersion",
            enterprise: "UmanIT",
            location: "Nantes",
            startDate: "janvier 2021",
            endDate: "janvier 2021",
            missions: [
                {
                    id: uuidv4(),
                    name: "Apprendre à utiliser Flexbox CSS"
                },
                {
                    id: uuidv4(),
                    name: "Participer à un webinaire sur l'accessibilité numérique"
                }
            ],
            skills: "Sass, Bootstrap, Symfony, Figma, Flexbox CSS, VS Code, Git"
        }
    ],
    formations: [
        {
            id: uuidv4(),
            title: "POEI Développeur Salesforce",
            school: "WebForce3",
            location: "Nantes",
            startDate: "mars 2022",
            endDate: "mai 2022"
        },
        {
            id: uuidv4(),
            title: "Développement web via des MOOCS",
            school: "OpenClassrooms / Udemy",
            location: "",
            startDate: "mars 2020",
            endDate: "mars 2022"
        },
        {
            id: uuidv4(),
            title: "TP Administrateur.trice système réseau (Niv BAC+4)",
            school: "ENI Ecole Informatique",
            location: "Nantes",
            startDate: "décembre 2018",
            endDate: "novembre 2019"
        },
        {
            id: uuidv4(),
            title: "BTS SIO (Informatique) option réseau",
            school: "LGT Baimbridge",
            location: "Guadeloupe",
            startDate: "septembre 2016",
            endDate: "juin 2018"
        }
    ],
    contactMe: {
        tel: "+33 6 41 33 80 12",
        email: "drucilladeroche@protonmail.com",
        location: "Région nantaise",
        linkedin: {
            title: "/images/linkedin.svg",
            url: "https://linkedin/com/in/drucilla-deroche"
        },
        github: {
            title: "/images/github.svg",
            url: "https://github.com/drucimimi"
        }
    }
}
