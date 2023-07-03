import About from "./About";
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
        </>
    );
};

export default Home;