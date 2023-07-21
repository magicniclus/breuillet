import React from "react";

const VideoBanner = () => {
  return (
    <div className="bg-[url('/images/background/background_house.png')] bg-left bg-contain bg-no-repeat mt-7 w-full mx-auto max-w-7xl flex lg:flex-row flex-col justify-end bg-blue-200 min-h-[200px] lg:items-end items-center">
      <div className="lg:w-11/12 w-full flex justify-end p-10">
        <img
          src="/images/background/video_image.png"
          alt="cambium"
          className="w-5/6"
          style={{ border: "20px solid white" }}
        />
      </div>
    </div>
  );
};

export default VideoBanner;
