import { FaGithub,  FaLinkedin } from "react-icons/fa"

const Main = () => {
  return (
    <main className="bg-slate-100 px-40 py-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
            <div className="">
                <h1 className="text-3xl font-extrabold mb-4">Olá, eu sou Pedro Vieira.</h1>
                <p className="mb-4 text-xl">Desenvolvedor Front End</p>
                <div>
                <div className="flex gap-5 text-xl px-2 mb-16">
                    
                </div>             
                <button className="py-2 px-16 font-bold bg-slate-200 rounded hover:bg-slate-300 mb-4 cursor-pointer transition">
                    Contate-me
                </button>
                                   
                   
                </div>
                <div className="flex gap-5 text-2xl px-2">
                    <div className="cursor-pointer">
                    <FaGithub />
                    </div>
                    <div className="cursor-pointer">
                    <FaLinkedin />
                    </div>
                </div>
                
            </div>
            <div className="flex self-center justify-center my-20">
                
                <h1>FOTO</h1>
            </div>
        </div>
        
    </main>
)
}

export default Main