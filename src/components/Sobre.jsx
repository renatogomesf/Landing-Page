import React from "react";

import IMGSOBRE from '../assets/about-background-image.png'

export default function Sobre() {
    return (

        <section id="sobre" className="flex justify-center">
            <div className="py-14 px-10 w-full max-w-7xl flex justify-between items-center gap-7 max-lg:flex-col-reverse">

                <img className="max-w-md max-md:w-11/12" src={IMGSOBRE} alt="Banner sobre" />

                <div className="flex flex-col items-start gap-8">
                    <p className="text-[#F4980D] text-xl font-bold">Sobre</p>

                    <h1 className="text-5xl text-gray-700 font-bold max-lg:text-4xl">O Alimento é Uma Parte Importante de Uma Vida Equilibrada</h1>

                    <p className="text-lg text-gray-500 font-semibold max-lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi possimus at esse? Quia voluptates consequuntur tenetur quidem aperiam. Corrupti excepturi necessitatibus reprehenderit.</p>

                    <p className="text-lg text-gray-500 font-semibold max-lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, porro quibusdam. Accusantium, veritatis nulla.</p>

                    <button className="bg-[#FE9E0D] text-white text-lg font-bold px-6 py-4 rounded-full flex items-center gap-2 max-lg:text-base">Saiba Mais</button>
                </div>
            </div>
        </section>

    )
}