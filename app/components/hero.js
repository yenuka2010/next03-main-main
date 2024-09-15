
import React from "react";

export default function Hero() {
    return (
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://previews.123rf.com/images/klagyi/klagyi0805/klagyi080500005/3104259-railway-track-in-the-forest.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
      <h2 className="text-3xl font-bold sm:text-4xl p-4">Information About Trees</h2>


        <h5>Introduction:<b> Enrich the introduction with more details about the role trees and plants play in various ecosystems. Mention topics like climate change mitigation, cultural significance, and tree-related folklore. "Did you know? Trees absorb nearly 22 kilograms of carbon dioxide annually and produce enough oxygen for four people!"</b></h5>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Scroll Down For Details!
        </a>
      </div>
    </div>
  </div>
</section>

    )
}