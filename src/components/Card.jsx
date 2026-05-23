import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div
          div
          className="
h-50
w-55
overflow-hidden
bg-slate-900/50
backdrop-blur-md
border
border-cyan-400/20
shadow-lg
shadow-cyan-500/10
rounded-xl
transition-all
duration-300
hover:scale-105
hover:border-cyan-300/40
hover:shadow-cyan-400/20
hover:shadow-2xl
"
        >
          <img
            className="
h-50
w-full
object-cover
cursor-pointer
transition-transform
duration-300
hover:scale-115
"
            src={props.elem.download_url}
            alt={props.elem.author}
          />
        </div>
        <h2
          className="
font-semibold
text-lg
text-center
mt-3
text-cyan-100
tracking-wide
transition-all
duration-300
cursor-default
hover:text-cyan-200
hover:tracking-wider
hover:drop-shadow-[0_0_10px_rgba(103,232,249,0.7)]
hover:scale-105
"
        >
          {props.elem.author}
        </h2>
      </a>
    </div>
  );
};

export default Card;
