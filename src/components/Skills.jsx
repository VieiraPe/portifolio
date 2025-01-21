import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaNode, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb, SiPostman, SiVite } from "react-icons/si"

const Skills = () => {
  return (
    <div className=" bg-slate-100 px-5 md:px-40 py-20">

        <div className="flex justify-center">
                <h1 className=" text-4xl font-bold pb-10">Skills</h1>
        </div>

        <div className="grid lg:grid-cols-2  md:grid-cols-1 grid-cols-1 ">
            <div className="flex flex-col justify-center items-center text-3xl pb-20 ">
                <h3 className="pb-6">Linguagens e frameworks</h3>
                <div className="text-6xl flex justify-center gap-4">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <IoLogoJavascript />
                    <FaReact />
                    <FaNode />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl pb-20 ">
                <h3 className="pb-6">Estilização e Ferramentas</h3>
                <div className="text-6xl flex justify-center gap-4">
                    <RiTailwindCssFill />
                    <FaBootstrap />
                    <SiPostman />
                    <SiVite />
                    <FaGitAlt />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl pb-20">
                <h3 className="pb-6">Banco de dados</h3>
                <div className="text-6xl flex justify-center">
                    <SiMongodb />
                </div>
            </div>
           
        </div>

    </div>
  )
}

export default Skills