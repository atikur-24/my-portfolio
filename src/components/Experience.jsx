import SectionTitle from "./sheared/SectionTitle";

const projects = [
  {
    id: 1,
    title: "NonAcademy",
    live_link: "https://nonacademy.net/",
    landing_page_img: "/img/experience/nonAcademy.jpg",
  },
  {
    id: 2,
    title: "VTH",
    live_link: "https://www.bauvth.com/",
    landing_page_img: "/img/experience/vth.jpg",
  },
  {
    id: 3,
    title: "DevsGiant",
    live_link: "https://www.devsgiant.com/",
    landing_page_img: "/img/experience/devsGiant.jpg",
  },
];

const Experience = () => {
  return (
    <section className="my-container py-12">
      {/* Experience Header */}
      <SectionTitle>Experience</SectionTitle>
      <div className="flex items-center justify-between font-medium mt-5">
        <p className="text-lg font-semibold">Company: DevsGiant (child company of NonAcademy)</p>
        <p className="text-sm italic">May 2024 - Present</p>
      </div>
      <p className="mt-2 text-gray-200 font-semibold">Role: MERN Stack Developer</p>
      <p className="mt-2 text-gray-200 font-medium">Responsibility: </p>
      <ul className="mt-2 list-disc list-inside text-gray-200 space-y-1.5">
        <li>Develop and maintain full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN).</li>
        <li>Build server-side rendered (SSR) and static applications with Next.js to enhance SEO and performance.</li>
        <li>Design RESTful APIs and integrate them with front-end applications to ensure seamless user experience.</li>
        <li>Collaborate with cross-functional teams to implement new features, optimize performance, and resolve issues.</li>
        <li>Ensure responsive and accessible UI components and responsive design principles.</li>
        <li>Manage application state and optimize performance using Redux and other state management libraries.</li>
        <li>Implement user authentication and authorization workflows using JWT and cookies.</li>
        <li>Optimize database queries, indexes, and schema design for scalable performance.</li>
        <li>Debug and troubleshoot production issues while providing timely fixes and updates.</li>
      </ul>
      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects?.map((project) => (
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
                className="inline-block mt-2 bg-gray-200 text-black font-semibold py-1 px-3 rounded-lg hover:bg-gray-300 transition-colors"
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
