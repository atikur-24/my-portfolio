import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionTitle from "./sheared/SectionTitle";

const Projects = () => {
    return (
        <section className="my-container" id="projects">
            <SectionTitle>Latest Projects</SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {/* project 1 */}
                <div className="w-full bg-primary shadow-xl rounded-lg relative h-[600px]">
                    <div className='portfolio-projects project-1 rounded-t-lg'>
                    </div>
                    <div className="p-5 space-y-3">
                        <h2 className="font-bold text-2xl tracking-wide">Daily fit</h2>
                        <p className="secondary-color text-justify">The website is a gym training center that caters to three main roles: students, trainers, and admins. students can see their selected classes. Include payment system for each selected class. after payment has successfully then the student enrolled this class.</p>
                        <div className="absolute bottom-5 space-y-3">
                            <div className='flex justify-between items-center gap-2'>
                                <a className="resume-btn" href="https://github.com/atikur-24/daily-fit-client"> <FaGithub /> Client</a>
                                <a className="resume-btn" href="https://github.com/atikur-24/daily-fit-server"><FaGithub /> Server</a>
                                <a className="resume-btn" href="https://daily-fit-d36ee.web.app/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Site</a>
                            </div>
                            <hr className="" />
                            <p className="flex justify-between items-center text-xs md:text-sm secondary-color">
                                <span>React</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Stripe</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* project 2 */}
                <div className="w-full bg-primary shadow-xl rounded-lg relative h-[600px]">
                    <div className='portfolio-projects project-2 rounded-t-lg'>
                    </div>
                    <div className="p-5 space-y-3">
                        <h2 className="font-bold text-2xl tracking-wide">Edu Toy Emporium</h2>
                        <p className="secondary-color text-justify">A Education toy store for kids. The seller adds a toy for the customer and also updates his toy details, the seller only his toy removes and updates it.Visit new user toy cards then click the details button to redirect to the login page, after login then show all toy details.</p>
                        <div className="absolute bottom-5 space-y-3">
                            <div className='flex justify-between items-center gap-2'>
                                <a className="resume-btn" href="https://github.com/atikur-24/education-toy-store-client"> <FaGithub /> Client</a>
                                <a className="resume-btn" href="https://github.com/atikur-24/education-toy-store-server"><FaGithub /> Server</a>
                                <a className="resume-btn" href="https://edu-toy-emporium.web.app/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Site</a>
                            </div>
                            <hr className="" />
                            <p className="flex justify-between items-center text-xs md:text-sm secondary-color">
                                <span>React</span>
                                <span>Tailwind CSS</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* project 3 */}
                <div className="w-full bg-primary shadow-xl rounded-lg relative h-[600px]">
                    <div className='portfolio-projects project-3 rounded-t-lg'>
                    </div>
                    <div className="p-5 space-y-3">
                        <h2 className="font-bold text-2xl tracking-wide">Thai Kitchen Chronicles</h2>
                        <p className="secondary-color text-justify">It&apos;s basically a Thailand chef&apos;s information website, chef&apos;s recipes, and bio data. Users can explore the key components of Thai cuisine, and learn about the flavors. Users can like any recipe and gain knowledge about traditional cooking and Thai dishes.</p>
                        <div className="absolute bottom-5 space-y-3">
                            <div className='flex justify-between items-center gap-2'>
                                <a className="resume-btn" href="https://github.com/atikur-24/thai-chef-client"> <FaGithub /> Client</a>
                                <a className="resume-btn" href="https://github.com/atikur-24/thai-chef-server"><FaGithub /> Server</a>
                                <a className="resume-btn" href="https://thai-kitchen-chronicles.web.app/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Site</a>
                            </div>
                            <hr className="" />
                            <p className="flex justify-between items-center text-xs md:text-sm secondary-color">
                                <span>React</span>
                                <span>Bootstrap CSS</span>
                                <span>Express</span>
                                <span>Firebase</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;