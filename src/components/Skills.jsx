import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaNode, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb, SiPostman, SiVite } from "react-icons/si"

const Skills = () => {
  return (
    <div className=" bg-slate-100 ">
        <div className="container py-20">
            <div className="flex justify-center">
                    <h1 className=" text-4xl font-bold pb-10">Software Skills</h1>
            </div>
                <div className="grid lg:grid-cols-2  md:grid-cols-1 grid-cols-1 ">
                    <div className=" flex flex-col justify-center items-center text-center  text-3xl mx-4 py-10 mb-10 rounded bg-slate-300 shadow">
                        <h3 className="pb-6 font-semibold w-3/4">Linguagens e frameworks</h3>
                        <div className="text-6xl flex justify-center gap-4 w-3/4">
                            <FaHtml5 />
                            <FaCss3Alt />
                            <IoLogoJavascript />
                            <FaReact />
                            <FaNode />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center text-3xl mx-4 py-10 mb-10 rounded bg-slate-300 shadow">

                        <h3 className="pb-6 font-semibold w-3/4">Estilização e Ferramentas</h3>
                        <div className="text-6xl flex justify-center gap-4 w-3/4">
                            <RiTailwindCssFill />
                            <FaBootstrap />
                            <SiPostman />
                            <SiVite />
                            <FaGitAlt />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center  text-3xl mx-4 py-10 mb-10 rounded bg-slate-300 shadow">
                        <h3 className="pb-6 font-semibold w-3/4">Banco de dados</h3>
                        <div className="text-6xl flex justify-center w-3/4">
                            <SiMongodb />
                        </div>
                </div>           
            </div>
        </div>
    </div>
  )
}

export default Skills