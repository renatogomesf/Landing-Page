import React from "react";

import IMGDEPOIMENTO from '../assets/john-doe-image.png'

import { IoMdStar } from "react-icons/io";

export default function Depoimentos() {
    return (
        <section id="depoimentos" className="mb-40 px-10 flex flex-col justify-center items-center gap-10">
            <div className="max-w-2xl text-center flex flex-col justify-center items-center gap-8">
                <p className="text-[#F4980D] text-xl font-bold">Depoimentos</p>

                <h1 className="text-5xl text-gray-700 font-bold max-lg:text-4xl">O Que Eles Estão Dizendo</h1>

                <p className="text-lg text-gray-500 font-semibold max-lg:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet suscipit incidunt dignissimos quibusdam? Alias laudantium aperiam quaerat voluptatum, expedita cupiditate veniam?</p>
            </div>

            <div className="flex gap-10 max-lg:flex-col">
                <div className="max-w-2xl p-5 text-center flex flex-col justify-center items-center gap-4 bg-white rounded-2xl">
                    <img src={IMGDEPOIMENTO} alt="refeições" />

                    <p className="text-sm text-gray-500 font-semibold max-lg:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti suscipit quos quidem atque omnis? Accusamus labore est officia voluptatem sit, quod possimus totam minima libero voluptate. Accusantium, eligendi aperiam.</p>

                    <span className="flex text-[#FE9E0D] text-3xl"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span>

                    <h2 className="text-xl text-gray-700 font-bold max-lg:text-base">John Doe</h2>
                    
                </div>
            </div>
            
        </section>
    )
}