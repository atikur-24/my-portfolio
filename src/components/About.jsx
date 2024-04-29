import CountUp from "react-countup";
import SectionTitle from "./sheared/SectionTitle";
import profile from "/img/logo/profile.jpg";

const About = () => {
  return (
    <section className="my-container" id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="md:flex justify-between gap-10 mt-10">
        <div className="md:w-1/3">
          <img className="rounded" src={profile} alt="Atikur" />
        </div>
        <div className="md:w-2/3 pt-8 md:pt-0 flex flex-col justify-between">
          <p className="md:leading-7 text-justify">
            Hello! I&apos;m Atikur Rahman, a passionate and driven front-end developer specializing in crafting captivating and user-centric web experiences. With 1 years of work experience. Dedicated
            to delivering high-quality code and optimizing website performance, I aim to contribute to a dynamic team and help drive innovative projects in a fast-paced environment. I pride myself on
            doing quality work and maintain excellent communication. I work with JavaScript, ReactJS, NextJS, NodeJS, MongoDB and also enjoy Javascript ecosystem
          </p>
          <div className="flex uppercase flex-col md:flex-row md:justify-between md:items-center gap-5 pt-8 md:pt-0">
            <div className="text-center bg-primary rounded-md px-4 py-3 md:px-8 md:py-6 text-xl font-semibold shadow-lg border-b-4 text-[#28e98c]">
              <p className="font-bold pb-3 tracking-wide text-2xl md:text-3xl">
                <CountUp enableScrollSpy start={50} end={70} delay={0} duration={2.75} />+
              </p>
              <p>Repositories</p>
            </div>
            <div className="text-center bg-primary rounded-md px-4 py-3 md:px-8 md:py-6 text-xl font-semibold shadow-lg border-b-4 text-[#28e98c]">
              <p className="font-bold pb-3 tracking-wide text-2xl md:text-3xl">
                <CountUp enableScrollSpy start={5} end={10} delay={0} duration={2.75} />+
              </p>
              <p>Projects</p>
            </div>
            <div className="text-center bg-primary rounded-md px-4 py-3 md:px-8 md:py-6 text-xl font-semibold shadow-md border-b-4 text-[#28e98c]">
              <p className="font-bold pb-3 tracking-wide text-2xl md:text-3xl">
                <CountUp enableScrollSpy start={0} end={1} delay={0} duration={2.75} />+
              </p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
