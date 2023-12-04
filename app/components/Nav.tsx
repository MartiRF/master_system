'use client'
import { useState } from "react"
import Image from 'next/image';


export default function Nav() {
  const [isOpenMenu,setIsOpenMenu] = useState(true);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image
            src="/logo.png"
            width={1000}
            height={760}
            className='h-12 w-auto rounded'
            alt="Logo Master System"
        />
        <span className="pl-4 font-semibold text-xl tracking-tight">Master System</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpenMenu(!isOpenMenu)} className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpenMenu ? "hidden" : "block"}` }>
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
            Instalaciones
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
            Sucursales
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
            Soporte
          </a>
        </div>

      </div>
    </nav>
  )
}