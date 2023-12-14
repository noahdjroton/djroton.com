interface LinkProps {
    main: string;
    secondary?: string;
}

export interface ProjectProps {
    title: string;
    description: string;
    imageUrl: string;
    links: LinkProps;
    technologies: string[];
}
