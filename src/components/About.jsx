import SectionTitle from "./sheared/SectionTitle";
import profile from '../../public/profile.jpg'

const About = () => {
    return (
        <section className="my-container">
            <SectionTitle>About Me</SectionTitle>
            <div className="md:flex">
                <div></div>
                <div>
                    <img className="rounded" src={profile} alt="Atikur" />
                </div>
            </div>
        </section>
    );
};

export default About;