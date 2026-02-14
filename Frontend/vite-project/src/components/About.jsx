import React from "react";

const About = () => {;
           
    
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-[#02010a] px-4 py-12">
    
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050015] to-black" />
      <div className="absolute -z-10 w-72 h-72 rounded-full bg-pink-500/40 blur-3xl top-10 left-5" />
      <div className="absolute -z-10 w-80 h-80 rounded-full bg-fuchsia-500/40 blur-3xl bottom-0 right-5" />

      
      <div className="relative max-w-3xl w-full">
        
        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 blur-md opacity-80 animate-pulse" />
        <div className="relative rounded-3xl bg-black/70 border border-pink-500/40 backdrop-blur-xl px-6 py-10 sm:px-10 sm:py-12 shadow-[0_0_40px_rgba(236,72,153,0.5)]">
     
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-1">
            <span className="h-2 w-2 rounded-full bg-pink-400 animate-ping" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-pink-200">
              Welcome to Readnexa
            </span>
          </div>

          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-pink-100 mb-4">
            Readnexa <span className="text-pink-400">Bookstore</span>
          </h1>

      
          <p className="text-pink-200/90 text-sm sm:text-base font-medium tracking-wider uppercase mb-6">
            Where stories meet neon dreams
          </p>

          <p className="text-sm sm:text-[15px] md:text-base leading-relaxed text-gray-200 mb-4">
            Readnexa Bookstore is a space built for readers who love discovering
            new stories and timeless classics. It is designed to feel like a
            late-night digital bookshelf, glowing with possibilities on every
            visit.
          </p>
          <p className="text-sm sm:text-[15px] md:text-base leading-relaxed text-gray-200">
            Created and developed by{" "}
            <span className="text-pink-300 font-semibold">Ganesh Pansare</span>,
            Readnexa brings together books, community, and technology to make
            reading more accessible and enjoyable for everyone who loves to get
            lost in a good story.
          </p>

        
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button href ="/"className="relative overflow-hidden rounded-full border border-pink-400/70 bg-pink-500/20 px-6 py-2 text-sm font-semibold text-pink-100 shadow-[0_0_20px_rgba(236,72,153,0.7)] transition hover:bg-pink-500/40 hover:shadow-[0_0_35px_rgba(236,72,153,1)]">
              Start Exploring
            </button>
            <span className="text-xs sm:text-sm text-gray-400">
              Built as a first MERN project • Always evolving
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
