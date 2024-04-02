import React from "react";

import Logo from '../assets/Logo.svg'

export default function NavBar() {
    return (
        <>
            <div className="py-14 px-40 flex justify-between">
                <img src={Logo} alt="Logo" />

                <nav>
                    <ul className="text-lg text-gray-800 font-bold flex justify-between items-center gap-10">
                        <a href=""><li>Home</li></a>
                        <a href=""><li>Sobre</li></a>
                        <a href=""><li>Depoimentos</li></a>
                        <a href=""><li>Contato</li></a>
                        <button className="bg-white px-4 py-3 rounded-full">Reserve Agora</button>
                    </ul>
                </nav>
            </div>
        </>
    )
}