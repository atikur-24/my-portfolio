import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;