import { useEffect, useState } from "react";
import projectData from "../../public/projectData.json";
import ProjectCard from "./sheared/ProjectCard";
import SectionTitle from "./sheared/SectionTitle";

const Project = () => {
    const [projects, setProjects] = useState(projectData);

    useEffect(() => {
        setProjects(projectData);
    }, []);

    return (
        <section className="my-container" id="projects">
            <SectionTitle>Latest Projects</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {projects?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Project;
