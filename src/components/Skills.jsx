import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiPostman, SiVite } from "react-icons/si"

const Skills = () => {
  return (
    <div className=" bg-slate-100 px-40 py-20">

        <div className="flex justify-center">
                <h1 className=" text-4xl font-bold pb-6">Skills</h1>
        </div>

        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 ">
            <div className="flex flex-col justify-center text-3xl pb-4 ">
                <h3 className="pb-6">Linguagens e frameworks</h3>
                <div className="text-6xl flex justify-center">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <IoLogoJavascript />
                    <FaReact />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl pb-4 ">
                <h3 className="pb-6">Estilização</h3>
                <div className="text-6xl flex justify-center">
                    <RiTailwindCssFill />
                    <FaBootstrap />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl pb-4 ">
                <h3 className="pb-6">Ferramentas</h3>
                <div className="text-6xl flex justify-center">
                    <SiVite />
                    <SiPostman />       
                </div>
            </div>

           
        </div>

    </div>
  )
}

export default Skills