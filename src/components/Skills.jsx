import { useState } from "react";
import SectionTitle from "./sheared/SectionTitle";

const Skills = () => {
  const [active, setActive] = useState(true);

  return (
    <section className="my-container" id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="flex justify-start md:justify-center gap-5 md:gap-10 my-10 ">
        <button className={active ? "active-tab" : "inactive-tab"} onClick={() => setActive(true)}>
          Web Technologies
        </button>
        <button className={active ? "inactive-tab" : "active-tab"} onClick={() => setActive(false)}>
          Tools & Others
        </button>
      </div>

      {/* Web Technologies skill part */}
      <div className={active ? "" : "hidden"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">HTML</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">90%</p>
              </div>
            </div>

            <div className="w-full absolute bottom-0  bg-gray-300 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[90%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">CSS</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">90%</p>
              </div>
            </div>

            <div className="w-full absolute bottom-0 bg-gray-300 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[90%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Bootstrap</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">85%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[85%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Tailwind</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">85%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[85%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">JavaScript</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">75%</p>
              </div>
            </div>

            <div className="w-full absolute bottom-0  bg-gray-300 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[75%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">React JS</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">75%</p>
              </div>
            </div>

            <div className="w-full absolute bottom-0  bg-gray-300 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[75%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Redux</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">55%</p>
              </div>
            </div>

            <div className="w-full absolute bottom-0  bg-gray-300 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[55%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Node JS</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">55%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[55%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Express JS</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">55%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[55%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Next JS</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">30%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[30%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">MongoDB</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">50%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[50%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Material UI</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">60%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[60%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* toots & other skill part */}
      <div className={active ? "hidden" : ""}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Git & Github</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">80%</p>
              </div>
            </div>

            <div className="w-full absolute bottom-0  bg-gray-300 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[80%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Figma</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">75%</p>
              </div>
            </div>

            <div className="w-full absolute bottom-0 bg-gray-300 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[75%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Firebase</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">80%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[80%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Jira</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">70%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[70%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Netlify</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">85%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[85%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">VS Code</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">90%</p>
              </div>
            </div>

            <div className="w-full absolute bottom-0  bg-gray-300 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[90%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Vercel</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">75%</p>
              </div>
            </div>

            <div className="w-full absolute bottom-0  bg-gray-300 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[75%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Chrome Dev Tool</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">70%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[70%]"></div>
            </div>
          </div>
          <div className="bg-primary relative rounded-lg w-full secondary-color h-20 font-bold">
            <div className="flex justify-between p-5">
              <div className="flex gap-3">
                <p className="text-xl">Photoshop</p>
              </div>
              <div className="bg-secondary px-2 py-1 rounded-md">
                <p className="text-white">45%</p>
              </div>
            </div>

            <div className="w-full absolute bg-gray-300 bottom-0 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-[45%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
