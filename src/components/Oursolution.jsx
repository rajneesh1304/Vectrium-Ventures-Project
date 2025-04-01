import React, { useState, useEffect, useRef } from "react";
import solution from "../assets/solutions-min.png";

const Oursolution = () => {
  const [animate, setAnimate] = useState(false);
  const solutionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
      }
    }, { threshold: 0.5 });

    if (solutionRef.current) {
      observer.observe(solutionRef.current);
    }

    return () => {
      if (solutionRef.current) {
        observer.unobserve(solutionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={solutionRef}
      className="text-white flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl shadow-lg"
    >
      <style>
        {`
          @keyframes enlargeOnLoad {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }
        `}
      </style>

      <div
        className={`left w-full md:w-1/2 p-5 flex justify-center ${
          animate ? "animate-enlargeOnLoad" : ""
        }`}
      >
        <img
          src={solution}
          className="rounded-xl w-full max-w-md transform transition-transform duration-500 hover:scale-105"
          style={{
            animation: animate ? "enlargeOnLoad 0.8s ease-out forwards 0.5s" : "none",
          }}
          alt="Our Solution"
        />
      </div>

      <div
        className={`right w-full md:w-1/2 text-center md:text-left ${
          animate ? "animate-enlargeOnLoad" : ""
        }`}
      >
        <h1 className="text-4xl font-extrabold text-blue-400">Our Solutions</h1>
        <p className="w-[80%] text-lg mt-4 leading-relaxed text-gray-300">
          Vectrium Ventures is a leading IT solution service provider based in
          Indore. Our company specializes in a range of services including
          website development, graphic designing, UI/UX web designing, brand
          building, social media handling, business consultation, SEO and
          content writing, and digital marketing.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all duration-300 shadow-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Oursolution;
