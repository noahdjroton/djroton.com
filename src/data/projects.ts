import { ProjectProps } from "@/types/components/ProjectProps";

export const projects: ProjectProps[] = [
    {
        title: "I-Bizz RH",
        description:
            "Application web spécialisée dans les services d'immigration et de recrutement international",
        imageUrl: "/images/rh-i-bizz.png",
        links: {
            main: "https://rh.i-bizz.com/",
        },
        technologies: ["Nextjs", "Django Rest Framework"],
    },
    {
        title: "MASTER CLASS MC INTERNATIONAL",
        description:
            "Application web de coaching en ligne avec système de streaming vidéo intégré.",
        imageUrl: "/images/masterclass-mci.png",
        links: {
            main: "https://masterclassmcinter.com/",
        },
        technologies: [
            "Nextjs",
            "Django Rest Framework",
            "Github Actions",
            "Docker",
        ],
    },
    {
        title: "Zocolis",
        description:
            "Application web d'enlèvement et de livraison de colis avec système de gestion des agents, des véhicules, ...",
        imageUrl: "/images/zocolis.png",
        links: {
            main: "https://zocolis.fr/",
        },
        technologies: [
            "Nextjs",
            "Django Rest Framework",
            "Github Actions",
            "Docker",
        ],
    },
];
