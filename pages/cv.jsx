import {cvData} from "../data/cvData";
import {FiArrowDownCircle} from "react-icons/fi";
import {motion} from "framer-motion";
export default function CV() {
    return (
        <div>
            <div id="cv-page" className="container mx-auto mt-6">
                <header className="bg-blue-900 p-4 text-white w-full">
                    <div className="flex justify-center">
                        <h1 className="text-2xl my-3 font-bold">{cvData.aboutMe.title}</h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <img
                            src="/images/drucilla.jpg"
                            alt="Photo de Drucilla Deroche"
                            width={75}
                            height={100}
                            className="header__picture"
                        />
                        <p>
                            {cvData.aboutMe.description}
                        </p>
                    </div>
                </header>
                <main>
                    <section className="m-2">
                        <h2 className="text-xl underline underline-offset-2 mb-2">Compétences transversales</h2>
                        {cvData.softSkills.map((skill) => (
                            <p
                                className="text-sm mb-1"
                                key={skill.id}
                            >
                                {skill.title} : {skill.description}
                            </p>
                        ))}
                    </section>
                    <section className="m-2">
                        <h2 className="text-xl underline underline-offset-2 mb-2">Expériences professionnelles et compétences techniques</h2>
                        {cvData.workExperienceAndHardSkills.map((work) => (
                            <div
                                key={work.id}
                                className="m-3"
                            >
                                <h3 className="text-lg">
                                    {work.title}
                                    <br/>
                                    {work.enterprise} - {work.location} | {work.startDate}-{work.endDate}
                                </h3>
                                <h4 className="text-sm ml-2">Missions :</h4>
                                <ul className="list-disc text-sm ml-6 mb-1">
                                    {work.missions.map((mission) => (
                                        <li key={mission.id}>{mission.name}</li>
                                    ))}
                                </ul>
                                <h4 className="text-sm ml-2">Compétences techniques :</h4>
                                <p className="list-disc text-sm ml-6 mb-1">
                                    {work.skills}
                                </p>
                            </div>
                        ))}
                    </section>
                    <section className="m-2">
                        <h2 className="text-xl underline underline-offset-2 mb-2">Formations</h2>
                        {cvData.formations.map( (formation) => (
                            <p key={formation.id} className="text-sm m-1">
                                {formation.title}
                                <br/>
                                {formation.school} - {formation.location} | {formation.startDate}-{formation.endDate}
                            </p>
                        ))}
                    </section>
                    <section id="certifications" className="m-2">
                        <h2 className="text-xl underline underline-offset-2 mb-2">Certifications</h2>
                        {cvData.certifications.map( (certification) => (
                            <img
                                key={certification.id}
                                src={certification.title}
                                width={75}
                                height={75}
                                className="inline mx-2"
                            />
                        ))}
                    </section>
                </main>
                <footer className="bg-blue-800 mt-4 p-2 w-full flex flex-col items-center gap-2 text-white">
                    <h2 className="text-xl">Pour plus d'informations</h2>
                    <div className="flex flex-col items-center">
                        <a href="tel:+33 6 41 33 80 12">{cvData.contactMe.tel}</a>
                        <a href="drucilladeroche@protonmail.com">{cvData.contactMe.email}</a>
                        <p>{cvData.contactMe.location}</p>
                    </div>
                    <div id="social-links" className="flex justify-center gap-2">
                        <a href={cvData.contactMe.linkedin.url}>
                            <img src={cvData.contactMe.linkedin.title}
                                 width={24}
                                 height={24}
                                 className="invert"
                            />
                        </a>
                        <a href={cvData.contactMe.github.url}>
                            <img src={cvData.contactMe.github.title}
                                 width={24}
                                 height={24}
                                 className="invert"
                            />
                        </a>
                    </div>
                </footer>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.9,
                    delay: 0.3,
                }}
                className="flex justify-center"
            >
                <a
                    download="CV-Drucilla-DEROCHE.pdf"
                    href="/files/CV-Drucilla-DEROCHE.pdf"
                    className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                    aria-label="Télécharger CV"
                >
                    <FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                    <span className="text-sm sm:text-lg duration-100">
							Télécharger CV
						</span>
                </a>
            </motion.div>
        </div>
    )
}