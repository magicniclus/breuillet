import React from "react";

const Galerie = () => {
  return (
    <section className="mt-14 w-full mx-auto max-w-7xl flex flex-col bg-blue-200 justify-between items-center z-10 overflow-hidden">
      <div className="w-full flex flex-wrap justify-between mb-10 lg:px-0 px-5">
        <img
          src="/images/background/exterieur.png"
          alt="maison"
          className="lg:max-w-[48%] w-full object-cover"
        />
        <img
          src="/images/background/exterieur2.png"
          alt="maison"
          className="lg:max-w-[48%] lg:mt-0 mt-10 w-full object-cover"
        />
      </div>
      <div className="w-full flex flex-wrap justify-between lg:px-0 px-5">
        <img
          src="/images/background/exterieur3.png"
          alt="maison"
          className="lg:max-w-[48%] w-full object-cover"
        />
        <img
          src="/images/background/exterieur4.png"
          alt="maison"
          className="lg:max-w-[48%] lg:mt-0 mt-10 w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Galerie;
