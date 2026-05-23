import React from "react";

const GalleryLayout = ({ printUserData, index, setIndex, setUserdata }) => {
  return (
    <div
      className="
relative
min-h-screen
overflow-hidden
p-6
text-white
flex
flex-col
bg-[linear-gradient(135deg,#020617_0%,#081426_30%,#0b1f3a_60%,#05111f_100%)]
"
    >
      {/* top glow */}
      <div
        className="
absolute
top-[-120px]
left-[-80px]
w-[500px]
h-[500px]
bg-cyan-400/20
rounded-full
blur-[120px]
pointer-events-none
"
      ></div>

      {/* right glow */}
      <div
        className="
absolute
top-20
right-[-100px]
w-[450px]
h-[450px]
bg-blue-500/20
rounded-full
blur-[130px]
pointer-events-none
"
      ></div>

      {/* bottom glow */}
      <div
        className="
absolute
bottom-[-150px]
left-1/2
-translate-x-1/2
w-[600px]
h-[400px]
bg-cyan-300/10
rounded-full
blur-[150px]
pointer-events-none
"
      ></div>

      {/* stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-32 w-1 h-1 bg-cyan-300 rounded-full"></div>

        <div className="absolute top-40 right-52 w-1.5 h-1.5 bg-cyan-200 rounded-full"></div>

        <div className="absolute top-80 left-1/4 w-1 bg-white rounded-full"></div>

        <div className="absolute bottom-52 right-1/3 w-1 h-1 bg-cyan-300 rounded-full"></div>

        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-cyan-200 rounded-full"></div>
      </div>

      <div className="relative z-10 text-center mb-8">
        <h1
          className="
text-5xl
font-bold
tracking-[6px]
text-cyan-100
transition-all
duration-500
cursor-default
hover:text-cyan-200
hover:scale-105
hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]
"
        >
          Gallery App
        </h1>

        <p
          className="
text-cyan-200/80
mt-3
uppercase
tracking-widest
text-sm
transition-all
duration-500
cursor-default
hover:text-cyan-100
hover:tracking-[5px]
hover:drop-shadow-[0_0_12px_rgba(103,232,249,0.9)]
"
        >
          Explore Beautiful Images
        </p>
      </div>

      <div
        className="
flex
flex-wrap
justify-center
gap-5
p-4
flex-1
relative
z-10
"
      >
        {printUserData}
      </div>

      <div
        className="
sticky
bottom-0
backdrop-blur-xl
bg-slate-900/40
border
border-cyan-400/20
rounded-2xl
p-5
flex
justify-center
items-center
gap-6
relative
z-10
"
      >
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          className="
bg-gradient-to-r
from-cyan-400
to-blue-500
text-white
font-semibold
px-6
py-3
rounded-xl
shadow-lg
shadow-cyan-500/20
hover:shadow-cyan-400/40
hover:scale-105
transition-all
duration-300
active:scale-95
cursor-pointer
"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserdata([]);
            }
          }}
        >
          Prev
        </button>

        <h4 className="text-cyan-200 font-semibold tracking-widest text-lg">
          Page {index}
        </h4>

        <button
          className="
bg-gradient-to-r
from-cyan-400
to-blue-500
text-white
font-semibold
px-6
py-3
rounded-xl
shadow-lg
shadow-cyan-500/20
hover:shadow-cyan-400/40
hover:scale-105
transition-all
duration-300
active:scale-95
cursor-pointer
"
          onClick={() => {
            setUserdata([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GalleryLayout;
