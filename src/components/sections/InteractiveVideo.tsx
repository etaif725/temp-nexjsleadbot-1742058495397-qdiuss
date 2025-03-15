"use client";

import React, { useEffect, useRef } from 'react';
import { BorderBeam } from '../ui/border-beam';

const InteractiveVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Function to detect mobile devices
  const isMobileDevice = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

  // Set the poster attribute only on mobile devices
  useEffect(() => {
    if (isMobileDevice() && videoRef.current) {
      videoRef.current.setAttribute('poster', '');
    }
  }, []);

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      if (overlayRef.current) overlayRef.current.style.display = 'none';
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play();
        if (overlayRef.current) overlayRef.current.style.display = 'none';
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;

    const handleVideoEnded = () => {
      if (overlay) {
        overlay.style.display = 'flex';
      }
    };

    if (video) {
      video.addEventListener('ended', handleVideoEnded);
      video.addEventListener('click', togglePlayPause);

      return () => {
        video.removeEventListener('ended', handleVideoEnded);
        video.removeEventListener('click', togglePlayPause);
      };
    }
  }, []);

  return (
    <div className="video-container rounded-md lg:rounded-xl bg-black shadow-2xl pt-24 ring-1 ring-border">
      <video
        id="myVideo"
        ref={videoRef}
        preload="metadata"
        playsInline
      >
        <source src="https://storage.googleapis.com/msgsndr/kcBmJGm9ROJzA9nkFh5j/media/657bf159a08dc56ac0f86432.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className="play-overlay" ref={overlayRef} onClick={startVideo}>
        <div className="play-button-img md:mt-12"></div>
        <div className="play-text hidden md:flex">Click Here to Play</div>
      </div>
      <style jsx>{`
        .video-container {
          position: relative;
          border: 1px solid #000; /* Adjusted border style */
          border-radius: 25px;
          max-width: 640px; /* Maximum width */
          width: 100%; /* Responsive width */
          cursor: pointer;
          margin: auto; /* Center the container */
          background-color: #000; /* Blue-500 equivalent */
        }
        .video-container video {
          border: 1px solid #000; /* Adjusted border style */
          border-radius: 25px;
          max-width: 640px; /* Maximum width */
          width: 100%; /* Responsive width */
          height: auto; /* Maintain aspect ratio */
          background: black; /* Video background color */
        }
        .play-overlay {
          display: flex; /* Initially show the overlay */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .play-button-img {
          background: url('https://i0.wp.com/astral.com.mt/wp-content/uploads/2021/01/play-button-overlay-png.png') no-repeat center center;
          background-size: contain;
          width: 50%; /* Adjust as needed */
          height: 100px; /* Adjust as needed */
          cursor: pointer;
        }
        .play-text {
          color: white; /* Text color */
          font-family: 'Melvin Pro Bold', sans-serif;
          font-size: 20px; /* Adjust as needed */
          text-align: center;
          margin-top: 5px;
          margin-bottom: 50px; /* Space between the button and text */
          cursor: pointer;
        }
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .play-button-img {
            width: 80px; /* Smaller play button image */
            height: 80px; /* Smaller play button image */
          }
          .play-text {
            font-size: 16px; /* Smaller text */
            margin-top: 3px;
            margin-bottom: 30px; /* Smaller space */
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveVideo;
