import { ProjectProps } from "@/types/components/ProjectProps";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

function ProjectCard({
    title,
    description,
    imageUrl,
    links,
    technologies,
}: ProjectProps) {
    return (
        <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                        <a
                            className="inline-flex items-baseline font-medium leading-tight hover:text-gray-500 group/link text-base"
                            href={links.main}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={title}
                        >
                            {title}
                        </a>
                    </h3>
                    <p className="my-2 text-sm text-gray-500 dark:text-gray-400 leading-normal">
                        {description}
                    </p>
                    {links?.secondary && (
                        <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium"
                            href={links?.secondary}
                        >
                            <GitHubLogoIcon className="h-4 w-4 mr-1" /> Github
                        </a>
                    )}
                    <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used:"
                    >
                        {technologies.map(tech => (
                            <li className="mr-1.5 mt-2" key={tech}>
                                <div className="flex items-center rounded-full bg-gray-900/10 dark:bg-gray-600 px-3 py-1 text-xs font-medium leading-5">
                                    {tech}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <a
                    href={links.main}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={title}
                >
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={200}
                        height={48}
                        decoding={"async"}
                        className="rounded border-2 transition hover:border-black sm:order-1 sm:col-span-2 sm:translate-y-1"
                    />
                </a>
            </div>
        </li>
    );
}

export default ProjectCard;
