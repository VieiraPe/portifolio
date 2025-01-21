import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const content = (
        <>
        <div className=' xl:hidden block absolute top-20 w-full left-0 right-0 bg-slate-100 transition z-10 opacity-70'>
            <ul className='text-center text-lg p-20'>
                <li className='uppercase my-4 px-1 py-2 border-b border-slate-800 hover:bg-slate-100 hover:rounded active:border-slate-600'>
                    Sobre mim
                </li>
                <li className='uppercase my-4 px-1 py-2 border-b border-slate-800 hover:bg-slate-100 hover:rounded active:border-slate-600'>
                    Experiências
                </li>
                <li className='uppercase my-4 px-1 py-2 border-b border-slate-800 hover:bg-slate-100 hover:rounded active:border-slate-600'>
                    Projects
                </li>             
                <li className='uppercase my-4 px-1 py-2 border-b border-slate-800 hover:bg-slate-100 hover:rounded active:border-slate-600'>
                    Contatos
                </li>                  
            </ul>
        </div>
        </>
    );


  return (
    <nav>
        <div className='h-[10vh] flex justify-between top-20 z-50 md:px-20 p-5'>
            <div className='flex items-center flex-1'>
                <h3>VIEIRA PEDRO</h3>
            </div>
            <div className='xl:flex lg:flex xl:flex-1 bg-center justify-end font-normal hidden'>
                <div className='flex items-center'>
                    <ul className='flex gap-8 mr-16 text-md'>
                        <li className='uppercase my-4 px-1 py-2 border-b border-slate-800 hover:bg-slate-100 hover:rounded active:border-slate-600 texte-slate-100 cursor-pointer'>
                            Sobre mim
                        </li>
                        <li className='uppercase my-4 px-1 py-2 border-b border-slate-800 hover:bg-slate-100 hover:rounded active:border-slate-600 texte-slate-100 cursor-pointer'>
                            Experiências
                        </li>
                        <li className='uppercase my-4 px-1 py-2 border-b border-slate-800 hover:bg-slate-100 hover:rounded active:border-slate-600 texte-slate-100 cursor-pointer'>
                            Projects
                        </li>             
                        <li className='uppercase my-4 px-1 py-2 border-b border-slate-800 hover:bg-slate-100 hover:rounded active:border-slate-600 texte-slate-100 cursor-pointer'>
                            Contatos
                        </li>                   
                    </ul>
                </div>
            </div>
            <div>{click && content}</div>

            <button className='block lg:hidden transition' onClick={handleClick}>
                {click ? <FaTimes /> : <CiMenuFries />} </button>
        </div>
    </nav>
  )
}

export default Nav