import { useEffect, useState } from "react";
import projectData from "../../public/projectData.json";
import ProjectCard from "./sheared/ProjectCard";
import SectionTitle from "./sheared/SectionTitle";

const Project = () => {
    const [projects, setProjects] = useState(projectData);
    const [isShowAll, setIsShowAll] = useState(false);

    useEffect(() => {
        setProjects(projectData);
    }, []);

    const handleShowAll = () => {
        setIsShowAll((prevIsShowAll) => !prevIsShowAll);
    };

    return (
        <section className="my-container" id="projects">
            <SectionTitle>Latest Project</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {projects?.slice(0, isShowAll ? projects.length : 6)?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            {!isShowAll && (
                <div className="flex justify-center mt-5 lg:mt-10">
                    <button onClick={handleShowAll} className="my-btn !px-3 !py-2 !text-base !font-medium !rounded">
                        See More
                    </button>
                </div>
            )}
        </section>
    );
};

export default Project;
