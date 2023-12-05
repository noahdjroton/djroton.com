import { ProjectListProps } from "@/types/components/ProjectListProps";
import ProjectCard from "@/components/ProjectCard";

function ProjectList({ projects }: ProjectListProps) {
    return (
        <ul>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </ul>
    );
}

export default ProjectList;
