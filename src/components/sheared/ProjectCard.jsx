const ProjectCard = ({ project }) => {
    const { name, image, desc, client, server, live, technologies } = project || {};
    console.log(technologies);
    return <></>;
};

export default ProjectCard;
