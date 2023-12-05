import Header from "@/components/Header";
import Profile from "@/assets/profile-picture.png";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import {
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from "@radix-ui/react-icons";
import ProjectList from "@/components/ProjectList";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Djroton SOSSOU",
    description: "Djroton SOSSOU",
};

function Home() {
    return (
        <>
            <Header />
            <main className="container min-h-screen w-full mx-auto max-w-7xl">
                <section id="hero" className="h-auto pt-24 flex flex-col items-start min-h-screen p-0 mx-auto max-w-[900px] justify-center">
                    <div className="delay-100">
                        <h1 className="text-sm">{"Salut 👋🏽, je m'appelle"}</h1>
                    </div>
                    <div className="delay-200">
                        <h1 className="font-semibold lg:text-[4rem] text-4xl leading-relaxed">
                            {"Djroton SOSSOU"}
                        </h1>
                    </div>
                    <div className="delay-300">
                        <h1 className="font-semibold lg:text-[3rem] text-gray-600 text-xl ">
                            {"Je transforme des idées en logiciels!"}
                        </h1>
                    </div>
                    <div className="delay-400 text-sm text-gray-500 dark:text-gray-400">
                        <p className="mt-5 mb-0 ml-0 max-w-screen-sm leading-relaxed">
                            {"J'aime créer des outils numériques qui ajoutent de la valeur à la vie des utilisateurs.\n" +
                                "\n" +
                                "J'utilise mes compétences techniques et ma vision créative pour concevoir des logicielsqui répondent aux besoins des utilisateurs.\n" +
                                "\n" +
                                "Je travaille actuellement chez Foxtech, où je contribue au développement de produits et de services qui améliorent la vie des gens."}
                        </p>
                    </div>
                    <ul
                        className="ml-1 mt-10 flex items-center"
                        aria-label="Social media"
                    >
                        <li className="mr-4">
                            <a
                                className="block hover:text-slate-200"
                                href="https://github.com/noahdjroton"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GitHubLogoIcon className="h-6 w-6" />
                            </a>
                        </li>
                        <li className="mr-4">
                            <a
                                className="block hover:text-slate-200"
                                href="https://twitter.com/djroton"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TwitterLogoIcon className="h-6 w-6" />
                            </a>
                        </li>
                        <li className="mr-4">
                            <a
                                className="block hover:text-slate-200"
                                href="https://linkedin.com/in/djroton-noe-sossou"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInLogoIcon className="h-6 w-6" />
                            </a>
                        </li>
                        <li className="mr-4">
                            <a
                                className="block hover:text-slate-200"
                                href="mailto:djrotonsossou@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <EnvelopeClosedIcon className="h-6 w-6" />
                            </a>
                        </li>
                    </ul>
                </section>
                <section
                    id="about"
                    className="visible opacity-100 transform transition-all duration-500 ease-out delay-200 max-w-[900px] mx-auto py-24"
                >
                    <h2 className="font-semibold leading-[1.1] flex items-center relative m-2 mb-10 w-full whitespace-nowrap numbered-heading">
                        {"About Me"}
                    </h2>
                    <div className="grid lg:grid-cols-[3fr,2fr] gap-12">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            <div>
                                <p className="mb-4">
                                    {"Salut, je suis "}
                                    <span className="font-semibold">
                                        {"Djroton."}
                                    </span>
                                    {
                                        " Mon voyage dans le monde du code a commencé en 2018 en tant qu'autodidacte. Après une formation intensive à Epitech Bénin, où j'ai plongé dans les algorithmes et les structures de données, mon intérêt pour ces domaines a grandi."
                                    }
                                </p>
                                <p className="mb-4">
                                    {
                                        "Je suis passionné par le développement de projets qui impactent positivement la vie des utilisateurs. Cela m'incite à aller à la rencontre des porteurs de projets, discutant de sujets liés à leur métier plutôt qu'au seul code."
                                    }
                                </p>
                                <p className="mb-4">
                                    {
                                        "Au quotidien, je me plonge dans l'écosystème Next.js, React.js et Django Rest Framework pour construire des applications web robustes. Parallèlement, je m'initie au développement mobile iOS avec Swift. Une part importante de mon temps libre est aussi dédiée à Hugging Face, où je me forme sur les IA et les modèles de ML, explorant les dernières avancées dans ces domaines."
                                    }
                                </p>
                                <p className="mb-4">
                                    {
                                        "Voici quelques technologies avec lesquelles j'ai travaillé récemment :"
                                    }
                                </p>
                            </div>
                            <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] gap-x-2 gap-y-0 p-0 mt-5 overflow-hidden list-none">
                                <li className="relative mb-2">
                                    {"TypeScript"}
                                </li>
                                <li className="relative mb-2">{"Docker"}</li>
                                <li className="relative mb-2">
                                    {"React / Nextjs"}
                                </li>
                                <li className="relative mb-2">
                                    {"Python / Django"}
                                </li>
                                <li className="relative mb-2">{"Swift"}</li>
                                <li className="relative mb-2">
                                    {"React Native"}
                                </li>
                            </ul>
                        </div>
                        <div className="relative max-w-[300px]">
                            <div className="wrapper">
                                <Image
                                    className=""
                                    src={Profile}
                                    alt={"Photo de Djroton SOSSOU"}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="projects"
                    className="visible opacity-100 transform transition-all duration-500 ease-out delay-200 max-w-[900px] mx-auto py-24"
                >
                    <h2 className="font-semibold leading-[1.1] flex items-center relative m-2 mb-10 w-full whitespace-nowrap numbered-heading">
                        {"Projects"}
                    </h2>
                    <ProjectList projects={projects} />
                </section>
            </main>
            <Footer />
        </>
    );
}
export default Home;
