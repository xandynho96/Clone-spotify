"use client";

import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export function PlaylistMusics() {
  return (
    <div>
      <h1 className="font-semibold text-3xl mt-4">Good Afternoon</h1>

      <div className="grid md:grid-cols-4 gap-4 mt-4 sm:grid-cols-2">
        <a
          href="#"
          className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image src="/album.jpg" width={100} height={100} alt="album" />
          <strong>Wasting Light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image src="/album.jpg" width={100} height={100} alt="album" />
          <strong>Wasting Light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image src="/album.jpg" width={100} height={100} alt="album" />
          <strong>Wasting Light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image src="/album.jpg" width={100} height={100} alt="album" />
          <strong>Wasting Light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image src="/album.jpg" width={100} height={100} alt="album" />
          <strong>Wasting Light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image src="/album.jpg" width={100} height={100} alt="album" />
          <strong>Wasting Light</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>
    </div>
  );
}
