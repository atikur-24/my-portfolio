import projects from "../../public/experiacne";
import SectionTitle from "./sheared/SectionTitle";

const Experience = () => {
  return (
    <section className="my-container py-12">
      {/* Experience Header */}
      <SectionTitle>Experience</SectionTitle>
      <div className="flex items-center justify-between font-medium mt-5">
        <p className="text-lg font-semibold">DevsGiant</p>
        <p className="text-sm ">May 2024 - Present</p>
      </div>
      <p className="mt-2 text-gray-200">Role: Frontend Developer</p>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project) => (
          <div key={project.id} className="relative group rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            {/* Project Image */}
            <img src={project.landing_page_img} alt={project.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Project Info */}
            <div className="absolute bottom-0 p-4 text-white z-10">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-white text-black font-semibold py-1 px-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
