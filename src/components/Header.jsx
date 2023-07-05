import banner from '/public/code-dark.json';
import Lottie from "lottie-react";
import React from 'react';
import Typed from 'typed.js';

const Header = () => {
    const title = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(title.current, {
            strings: ['Front-End Developer', 'MERN Stack Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="md:flex items-center">
                <div className='space-y-3 md:space-y-5'>
                    <p className='text-xl md:text-2xl font-medium primary-color'>Hello! this is</p>
                    <p className='text-3xl md:text-6xl font-bold tracking-wide'>Atikur Rahman</p>
                    <p className='text-2xl md:text-4xl primary-color font-bold'><span className='text-white'>I&apos;m a</span> <span ref={title} className='primary-color'  /></p>
                    <p className='text-sm md:text-[16px] md:leading-6 text-justify'>Highly passionate web developer with a strong foundation in front-end development and a passion for creating dynamic, user-friendly web application</p>
                    <div className="flex gap-5 lg:gap-8">
                        <a className="my-btn uppercase" href='#contact'>Hire Me</a>
                        <a className="my-btn-outline uppercase" href='#about'>About Me</a>
                    </div>
                </div>
                <div className=''>
                    <Lottie animationData={banner} />
                </div>
            </div>
        </section>
    );
};

export default Header;