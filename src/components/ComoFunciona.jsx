import React from "react";

import REFEIÇOES from '../assets/pick-meals-image.png'
import ESCOLHA from '../assets/choose-image.png'
import ENTREGA from '../assets/delivery-image.png'

export default function ComoFunciona() {
    return (
        <section className="mb-40 px-10 flex flex-col justify-center items-center gap-32">
            <div className="max-w-2xl text-center flex flex-col justify-center items-center gap-8">
                <h1 className="text-5xl text-gray-700 font-bold max-lg:text-4xl">Como Funciona</h1>

                <p className="text-lg text-gray-500 font-semibold max-lg:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet suscipit incidunt dignissimos quibusdam? Alias laudantium aperiam quaerat voluptatum, expedita cupiditate veniam?</p>
            </div>

            <div className="flex gap-10 max-lg:flex-col">
                <div className="w-60 p-5 text-center flex flex-col justify-center items-center gap-4 bg-white rounded-2xl">
                    <img src={REFEIÇOES} alt="refeições" />

                    <h2 className="text-xl text-gray-700 font-bold max-lg:text-base">Escolha a Refeição</h2>

                    <p className="text-sm text-gray-500 font-semibold max-lg:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nesciunt incidunt tempora</p>
                </div>

                <div className="w-60 p-5 text-center flex flex-col justify-center items-center gap-4 bg-white rounded-2xl">
                    <img src={ESCOLHA} alt="refeições" />

                    <h2 className="text-xl text-gray-700 font-bold max-lg:text-base">Escolha Com que Frequência</h2>

                    <p className="text-sm text-gray-500 font-semibold max-lg:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="w-60 p-5 text-center flex flex-col justify-center items-center gap-4 bg-white rounded-2xl">
                    <img src={ENTREGA} alt="refeições" />

                    <h2 className="text-xl text-gray-700 font-bold max-lg:text-base">Entrega Rápida</h2>

                    <p className="text-sm text-gray-500 font-semibold max-lg:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit praesentium</p>
                </div>
            </div>
            
        </section>
    )
}