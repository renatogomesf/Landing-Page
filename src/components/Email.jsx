import React from "react";

export default function Email() {
    return (
        <section className="mb-40 px-10 flex justify-center items-center">
            <div className="max-w-2xl text-center flex flex-col justify-center items-center gap-16">

                <h1 className="text-5xl text-gray-700 font-bold max-lg:text-4xl">Tem Alguma Dúvida? <br /> Deixe-nos Ajudá-lo</h1>

                <div className="bg-white flex w-full p-3 rounded-full">
                    <input className="px-3 py-2 w-full outline-none" type="email" name="email" id="email" placeholder="seuemail@gmail.com" required/>

                    <button className="bg-[#FE9E0D] text-white text-lg font-bold px-10 py-4 rounded-full flex items-center gap-2 max-lg:text-base">Enviar</button>
                </div>
            </div>
            
        </section>
    )
}