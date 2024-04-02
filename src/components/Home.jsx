import React from "react";

import IMGHOME from '../assets/home-banner-image.png'

import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
    return (
        <>
            <div className="px-40 flex justify-between items-center gap-7">
                <div className="flex flex-col items-start gap-10">
                    <h1 className="text-5xl text-gray-700 font-bold">Sua Comida Favorita Entregue Quente e Fresca</h1>

                    <p className="text-lg text-gray-500 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, porro quibusdam. Accusantium, veritatis nulla.</p>

                    <button className="bg-orange-500 text-white text-lg font-bold px-6 py-4 rounded-full flex items-center gap-2">Peça Agora <FaArrowRight /></button>
                </div>

                <img className="w-1/2" src={IMGHOME} alt="Banner home" />
            </div>
        </>
    )
}