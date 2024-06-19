import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <div className="relative w-60 h-72 rounded-[30px] bg-zinc-950 text-white px-8 py-10 overflow-hidden">
      <FaFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, totam.
      </p>
      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex items-center justify-between px-5 py-3">
          <h5>.4mb</h5>
          <span className="w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center">
            <LuDownload size="1em"  color="#fff"/>
          </span>
        </div>
        <div className="tag w-full py-5 bg-indigo-300 flex items-center justify-center">
            <h3 className="text-sm font-semibold">Download Now</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
