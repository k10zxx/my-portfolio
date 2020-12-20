import React from "react";
import image from "../1wtr8q.jpg";

export default function Home(){
    return (
        <main>
            <img src={image} alt="aloha" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center main-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-9xl text-gray-300 font-bold cursive leading-none lg:leading-snug ml-96"> Hi. I'm Tiago! </h1>
            </section>
        </main>
    )
}