"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/solid";

const VideoBanner = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHover, setIsHover] = useState(false);

  const handlePlay = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    videoRef.current.addEventListener("loadeddata", playVideo);

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", playVideo);
      }
    };
  }, []);

  return (
    <div className="lg:bg-[url('/images/background/background_house.png')] lg:bg-left lg:bg-contain lg:bg-no-repeat mt-7 w-full mx-auto max-w-7xl flex lg:flex-row flex-col justify-end bg-blue-200 min-h-[200px] lg:items-end items-center">
      <div className="lg:w-11/12 w-full flex justify-end lg:p-10 relative">
        <video
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          src="/video/video.mp4"
          alt="cambium"
          onClick={() => {
            if (videoRef.current.paused) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }}
          className="lg:w-5/6 6/6"
          style={{ border: "20px solid white" }}
          ref={videoRef}
          autoPlay
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          muted
        ></video>
        {isPlaying ? (
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => {
              setIsHover(false);
            }}
            className={
              "p-3 bg-gray-300 absolute top-1/2 left-1/2 transform lg:translate-x-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-opacity-30 transition-opacity ease-in duration-300 " +
              (isHover ? "" : "hidden")
            }
          >
            <PauseIcon className="h-20 w-20 text-white" onClick={handlePlay} />
          </div>
        ) : (
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => {
              setIsHover(false);
            }}
            className={
              "p-3 bg-gray-300 absolute top-1/2 left-1/2 transform lg:translate-x-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-opacity-30 transition-opacity ease-in duration-300 lg:" +
              (isHover ? "" : "hidden ") +
              (isHover ? "opacity-0" : "opacity-100")
            }
          >
            <PlayIcon className="h-20 w-20 text-white" onClick={handlePlay} />
          </div>
        )}
        {isMuted ? (
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => {
              setIsHover(false);
            }}
            className={
              "p-1 bg-gray-300 absolute top-10 lg:top-20 right-10 lg:right-20 rounded-full bg-opacity-30 transition ease-in duration-100 " +
              (isHover ? "" : "opacity-0")
            }
          >
            <SpeakerXMarkIcon
              className="h-5 w-5 text-white"
              onClick={() => {
                videoRef.current.muted = false;
                setIsMuted(false);
              }}
            />
          </div>
        ) : (
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => {
              setIsHover(false);
            }}
            className={
              "p-1 bg-gray-300 absolute top-10 lg:top-20 right-10 lg:right-20 rounded-full bg-opacity-30 transition ease-in duration-100 " +
              (isHover ? "" : "opacity-0")
            }
          >
            <SpeakerWaveIcon
              className="h-5 w-5 text-white"
              onClick={() => {
                videoRef.current.muted = true;
                setIsMuted(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoBanner;
