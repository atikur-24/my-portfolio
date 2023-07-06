import { FaDiscord, FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter  } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-primary py-8 lg:py-10 text-center secondary-color space-y-5">
            <h3 className="text-xl lg:text-3xl font-semibold tracking-widest text">Find With Me</h3>
            <div className="">
                <div className="flex items-center justify-center gap-5 primary-color text-xl lg:text-2xl">
                    <a className="social-btn" href="https://www.facebook.com/profile.php?id=100042385727893"><FaFacebookF /></a>
                    <a className="social-btn" href="https://twitter.com/AtikurRahman247"><FaTwitter /></a>
                    <a className="social-btn" href="https://discord.com/users/913041309802053662"><FaDiscord /></a>
                    <a className="social-btn" href="www.linkedin.com/in/atikur-rahman-7477bb27b"><FaLinkedinIn /></a>
                    <a className="social-btn" href="https://github.com/atikur-24"><FaGithub /></a>
                </div>
            </div>
            <p className="pt-3">© Copyright 2023 - All right reserved by Atikur Rahman</p>
        </div>
    );
};

export default Footer;