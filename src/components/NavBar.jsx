import React from "react";

import Logo from '../assets/Logo.svg'

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function NavBar() {

    const AbrirFechar = ()=>{
        const menu = document.getElementById("menu")
        const abrir = document.getElementById("abrir")
        const fechar = document.getElementById("fechar")

        menu.classList.toggle("max-lg:hidden")
        abrir.classList.toggle("hidden")
        fechar.classList.toggle("hidden")
    }

    return (
        <header className="flex justify-center relative">
            <div className="py-14 px-10 w-full max-w-7xl flex justify-between">
                <img className="w-36" src={Logo} alt="Logo" />

                <nav>
                    <ul id="menu" className="text-lg text-gray-800 font-bold flex justify-between items-center gap-10 max-lg:absolute max-lg:flex-col max-lg:right-0 max-lg:top-28 max-lg:bg-white max-lg:shadow-md max-lg:p-5 max-lg:hidden">
                        <a href="#home" onClick={()=>AbrirFechar()}><li>Home</li></a>
                        <a href="#sobre" onClick={()=>AbrirFechar()}><li>Sobre</li></a>
                        <a href="#depoimentos" onClick={()=>AbrirFechar()}><li>Depoimentos</li></a>
                        <a href="#contato" onClick={()=>AbrirFechar()}><li>Contato</li></a>
                        <button className="bg-white max-lg:bg-[#FE9E0D] max-lg:text-white px-4 py-3 rounded-full" onClick={()=>AbrirFechar()}>Reserve Agora</button>
                    </ul>

                    <div id="abrir" className="text-3xl text-gray-800 lg:hidden" onClick={()=>AbrirFechar()}><IoMenu /></div>
                    <div id="fechar" className="text-3xl text-gray-800 lg:hidden hidden" onClick={()=>AbrirFechar()}><IoClose /></div>
                </nav>
            </div>
        </header>
    )
}