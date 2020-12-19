import React from "react";
import image from "../ggs.jpg";

export default function Home(){
    return (
        <main>
            <img src={image} alt="aloha" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center main-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-gray-300 font-bold cursive leading-none lg:leading-snug home-name"> Hi. I'm Tiago! </h1>
            </section>
        </main>
    )
}