import SectionTitle from "./sheared/SectionTitle";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();

    const handleSendEmail = event => {
        event.preventDefault();

        emailjs.sendForm('service_yex7ven', 'template_5r6ct1m', form.current, 'XwuvY8jZ3zDbL2s2i')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div id='contact' className='my-container'>
            <SectionTitle>Contact Me</SectionTitle>
        <div className='lg:flex justify-between gap-10 mt-10'>
            {/* connect with me info */}
            <div className='bg-primary p-5 md:p-10 rounded-xl lg:w-2/5 space-y-5'>
                <h3 className="primary-color font-semibold text-xl tracking-wide md:text-2xl border-b-2 pb-2 text-center">Connect With Me</h3>
                <p className="secondary-color text-justify">If you&apos;re interested in collaborating, discussing a project, or simply want to say hello, I&apos;d love to hear from you. Feel free to reach out using any of the methods below:</p>
                <div className="space-y-3 pt-5 md:pt-10">
                    <p className="flex items-center gap-5"> <FaEnvelope className="primary-color" /> atikurrahman7223@gmail.com</p>
                    <p className="flex items-center gap-5"> <FaPhoneAlt className="primary-color" /> +8801726291170</p>
                    <p className="flex items-center gap-5"> <FaMapMarkerAlt className="primary-color" /> Rajshahi, Bangladesh</p>
                </div>
            </div>
            {/* form */}
            <form ref={form} onSubmit={handleSendEmail} className='bg-primary mt-10 lg:mt-0 rounded-xl lg:w-3/5 p-5 md:p-10 secondary-color' >
                <div className="mb-5">
                    <label>
                        <span className="font-semibold lg:text-lg">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Your Name" className="bg-[#111a28] border placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full" required />
                </div>
                <div className="mb-5">
                    <label>
                        <span className="font-semibold lg:text-lg">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="Your Email" className="bg-[#111a28] border placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full" required />
                </div>
                <div className="mb-5">
                    <label>
                        <span className="font-semibold lg:text-lg">Message</span>
                    </label>
                    <textarea name="message" type="text" placeholder="Your Name" className="bg-[#111a28] border placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full h-28 resize-none" />
                </div>
                <button className='my-btn inline-flex items-center gap-3 uppercase' type="submit"><FaPaperPlane /> Send</button>
            </form>         
        </div>
    </div>
    );
};

export default Contact;