import React from "react";

import IMGHOME from '../assets/home-banner-image.png'

import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
    return (
        <section className="flex justify-center">
            <div className="py-14 px-10 w-full max-w-7xl flex justify-between items-center gap-7 max-lg:flex-col">

                <div className="flex flex-col items-start gap-10">
                    <h1 className="text-5xl text-gray-700 font-bold max-lg:text-4xl">Sua Comida Favorita Entregue Quente e Fresca</h1>

                    <p className="text-lg text-gray-500 font-semibold max-lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, porro quibusdam. Accusantium, veritatis nulla.</p>

                    <button className="bg-orange-500 text-white text-lg font-bold px-6 py-4 rounded-full flex items-center gap-2 max-lg:text-base">Peça Agora <FaArrowRight /></button>
                </div>

                <img className="max-w-md max-md:w-4/5" src={IMGHOME} alt="Banner home" />
            </div>
        </section>
    )
}