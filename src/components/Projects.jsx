import { FaGithub, FaLink } from "react-icons/fa";
import SectionTitle from "./sheared/SectionTitle";

const Projects = () => {
    return (
        <section className="my-container">
            <SectionTitle>Latest Projects</SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            <div className="card w-full bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects project-1 rounded-t-lg'>

                </div>
                <div className="p-5 space-y-3">
                    <h2 className=" font-bold text-2xl text-white">Daily fit</h2>
                    <p className='text-white'>Articio is a Educational single page web application.On this website dashboard and user different types roles are provided.Stripe payment method is used to enroll the class.</p>
                    <div className='text-gray-300 pt-2 flex gap-2'>
                        <p>React</p>
                        <p>Axios</p>
                        <p>Stripe</p>
                        <p>JWT</p>
                        <p>Firebase</p>
                        <p>MongoDB</p>
                    </div>
                    <div className='text-white gap-2 my-3 flex pt-1 justify-between'>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/summer-camp-school">Client <FaGithub></FaGithub> </a>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/summer-camp-school-server">server <FaGithub></FaGithub></a>
                        <a className='sm-btn flex gap-2 items-center' href="https://summer-camp-school-b4eed.web.app/">live link <FaLink></FaLink> </a>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects project-2 rounded-t-lg'>

                </div>
                <div className="p-5 space-y-2">
                    <h2 className="font-bold text-2xl text-white">Toys House</h2>
                    <p className='text-white'>Toys House is a dynamic full-stack E-commerce website.The website offers a user-friendly interface for customers to create account, browse, upload, search, see toy details etc.</p>
                    <div className='text-gray-300 flex gap-2'>
                        <p>React</p>
                        <p>Tailwind</p>
                        <p>Express</p>
                        <p>Firebase</p>
                        <p>MongoDB</p>
                    </div>


                    <div className='text-white gap-2 my-3 flex justify-between'>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/toy-marketplace">Client <FaGithub></FaGithub> </a>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/toy-marketplace-server">server <FaGithub></FaGithub></a>
                        <a className='sm-btn flex gap-2 items-center' href="https://toy-market-5e8cb.web.app/">live link <FaLink></FaLink> </a>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects project-3 rounded-t-lg'>

                </div>
                <div className="p-5 space-y-3">
                <h2 className=" font-bold text-2xl text-white">Thai kitchen</h2>
                    <p className='text-white'>FoodHub is a Restaurant website.User can find qualified chefs and see their recipes. User can save the recipe they like and order food through this website.</p>
                    <div className='text-gray-300 pt-1 flex gap-3'>
                        <p>React js</p>
                        <p>Tailwind CSS</p>
                        <p>Firebase</p>
                        <p>MongoDB</p>
                    </div>
                    <div className='text-white gap-2 pt-2 my-3 flex justify-between'>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/chef-recipe-hunter">Client <FaGithub></FaGithub> </a>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/chef-recipe-hunter-server">server <FaGithub></FaGithub></a>
                        <a className='sm-btn flex gap-2 items-center' href="https://silver-mooncake-9b2713.netlify.app/">live link <FaLink></FaLink> </a>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Projects;