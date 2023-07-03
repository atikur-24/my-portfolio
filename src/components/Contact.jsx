import SectionTitle from "./sheared/SectionTitle";

const Contact = () => {
    return (
        <div id='contact' className='my-container'>
            <SectionTitle>Contact Me</SectionTitle>
        <div className='lg:flex gap-7 items-center mt-10'>
            <div className='w-full lg:w-[40%]'>
                <div className='mb-6'>
                    <h1 className='text-[#00cf5d] border-[#00cf5d] font-bold text-2xl hidden lg:block border-b-4 pb-1 w-2/3 '>Contact Information</h1>
                    <p className='text-white mt-3'>I am interested in working with any company that <br /> thinks my skill will be helpful for them. If you are <br /> looking for someone like me, please message me.</p>
                </div>
                <div className='bg-[#1d293a] rounded-tl-lg rounded-br-lg flex gap-5 py-5 px-5'>
                    {/* <img className='w-12' src={phone} alt="" /> */}
                    <div className=' space-y-1'>
                        <h3 className='font-bold text-white text-xl'>Phone</h3>
                        <p className='text-gray-500'>+8801963496651</p>
                    </div>
                </div>
                <div className='bg-[#1d293a] my-4 rounded-tl-lg rounded-br-lg flex gap-5 py-5 px-5'>
                    {/* <img className='w-12' src={email} alt="" /> */}
                    <div className='space-y-1'>
                        <h3 className='font-bold text-white text-xl'>Email</h3>
                        <p className='text-gray-500'>oliullah915@gmail.com</p>
                    </div>
                </div>
                <div className='bg-[#1d293a] rounded-tl-lg rounded-br-lg flex gap-3 lg:gap-5 py-5 p-5 w-full'>
                    {/* <img className=' w-10 lg:w-12' src={=} alt="" /> */}
                    <div className='space-y-1'>
                        <h3 className='font-bold text-white text-xl'>Location</h3>
                        <p className='text-gray-500'>BancharamPur,BrahmanBaria,Bangladesh</p>
                    </div>
                </div>
            </div>

            <form className='bg-[#1d293a] mt-10 lg:mt-0 w-full lg:w-[650px] rounded-tl-xl rounded-br-xl px-3 lg:px-10 py-8' >
                <div className="">
                    <label className="label">
                        <span className="font-semibold text-md text-white">Name</span>
                    </label>
                    <input name="user_name" type="text" placeholder="Name" className=" border placeholder:text-lg text-white placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full bg-[#1d293a]" />
                </div>
                <div className="my-2">
                    <label className="label">
                        <span className="font-semibold text-md text-white">Message</span>
                    </label>
                    <input type="email" name="user_email" placeholder="Email" className=" border placeholder:text-lg text-white placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full bg-[#1d293a]" />
                </div>
                <div className="mb-3">
                    <label className="label">
                        <span className="font-semibold text-md text-white">Email</span>
                    </label>
                    <textarea name="message" placeholder="Write Your Message" className="textarea border text-white placeholder:text-lg placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full bg-[#1d293a] textarea-lg" ></textarea>
                </div>
                <input className='my-btn' type="submit" value="Send Me" />
            </form>
            
        </div>
    </div>
    );
};

export default Contact;