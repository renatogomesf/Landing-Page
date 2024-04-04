import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer id="contato" className="mb-20 text-gray-700 flex justify-center px-10">
            <div className="flex justify-around items-start gap-20 font-medium max-lg:flex max-lg:flex-wrap">
                <div>
                    <h1 className="mb-5 text-3xl">FOODIE</h1>
                    <div className="flex text-xl gap-3">
                        <FaXTwitter />
                        <FaLinkedin />
                        <FaYoutube />
                        <FaFacebookF />
                        <FaInstagram />
                    </div>
                </div>

                <div className="space-y-3 flex flex-col">
                    <a href="">Qualidade</a>
                    <a href="">Ajuda</a>
                    <a href="">Compartilhar</a>
                    <a href="">Depoimentos</a>
                    <a href="">Saiba Mais</a>
                    <a href="">Funcionamento</a>
                </div>

                <div className="space-y-3">
                    <p>(00) 0 0000-0000</p>
                    <p>expmlo01@food.com</p>
                    <p>expmlo02@food.com</p>
                    <p>expmlo03@food.com</p>
                </div>

                <div className="space-y-3 flex flex-col">
                    <a href="">Termos e Condições</a>
                    <a href="">Política de Privacidade</a>
                </div>
            </div>
        </footer>
    )
}