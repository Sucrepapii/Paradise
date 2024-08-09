import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Paradise</h2>
          <p>
            At Paradise, our mission is to make travel planning
            stress-free and enjoyable by providing a user-friendly platform that
            offers a wide range of flight options and hotel accommodations. We
            are committed to delivering exceptional customer service,
            competitive pricing, and personalized travel solutions that cater to
            the unique needs of every traveler.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
