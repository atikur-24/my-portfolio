import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { name, image, desc, client, server, live, technologies } = project || {};
  return (
    <div className="w-full bg-primary shadow-xl rounded-lg relative h-[700px] sm:h-[630px] lg:h-[600px]">
      <div className={`portfolio-projects rounded-t-lg ${image}`}></div>
      <div className="p-5 space-y-8 md:space-y-3">
        <h2 className="font-bold text-2xl tracking-wide">{name}</h2>
        <p className="secondary-color text-justify">{desc}</p>
        {/* bottom title part */}
        <div className="absolute bottom-5 space-y-3">
          <div className="flex justify-between items-center gap-2">
            <a className="resume-btn" href={client}>
              <FaGithub /> Client
            </a>
            <a className="resume-btn" href={server}>
              <FaGithub /> Server
            </a>
            <a className="resume-btn" href={live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live Site
            </a>
          </div>
          <hr />
          <p className="flex justify-between items-center text-xs md:text-sm secondary-color">
            {technologies?.map((technology, idx) => (
              <span key={idx}>{technology}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
