'use client'

import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaStop, FaPlay, FaForward, FaBackward } from 'react-icons/fa';  

export default function InteractiveAudio() {
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentFile, setCurrentFile] = useState<number>(0); // Type is number

    // Array of audio files
    const audioFiles = [
      { title: 'Finance', url: '/audio/finance_ai_agent.mp3' },
      { title: 'Realtor', url: '/audio/real_estate_ai_agent.mp3' },
      { title: 'Moving', url: '/audio/moving_ai_agent.mp3' },
      { title: 'Solar', url: '/audio/solar_ai_agent.mp3' }
    ];

    useEffect(() => {
        if (waveformRef.current) {
            // Create new WaveSurfer instance
            const ws = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: 'rgba(255, 255, 255, 0.8)', // white/80
                progressColor: 'rgba(29, 78, 216, 1)', // blue-700  
                url: audioFiles[currentFile].url, // Use the current file's URL
                barGap: 1,
                height: 80,
                renderFunction: (channels, ctx) => {
                    const { width, height } = ctx.canvas;
                    const scale = channels[0].length / width;
                    const step = 10;

                    ctx.translate(0, height / 2);
                    ctx.strokeStyle = ctx.fillStyle;
                    ctx.beginPath();

                    for (let i = 0; i < width; i += step * 2) {
                        const index = Math.floor(i * scale);
                        const value = Math.abs(channels[0][index]);
                        let x = i;
                        let y = value * height;

                        ctx.moveTo(x, 0);
                        ctx.lineTo(x, y);
                        ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, true);
                        ctx.lineTo(x + step, 0);

                        x = x + step;
                        y = -y;
                        ctx.moveTo(x, 0);
                        ctx.lineTo(x, y);
                        ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, false);
                        ctx.lineTo(x + step, 0);
                    }

                    ctx.stroke();
                    ctx.closePath();
                },
            });

            setWavesurfer(ws);

            ws.on('interaction', () => {
                ws.play();
                setIsPlaying(true);
            });

            ws.on('finish', () => {
                console.log('Audio finished playing');
                setIsPlaying(false);
            });

            // Cleanup function to stop and destroy the WaveSurfer instance
            return () => {
                if (wavesurfer) {
                    wavesurfer.stop(); // Stop playback if it's playing
                    wavesurfer.destroy(); // Destroy the WaveSurfer instance
                }
            };
        }
    }, [currentFile]); // Re-run effect if the currentFile changes

    const handlePlayPause = () => {
        if (wavesurfer) {
            wavesurfer.playPause();
            setIsPlaying(!isPlaying);
        }
    };

    const handleStop = () => {
        if (wavesurfer) {
            wavesurfer.stop();
            setIsPlaying(false);
        }
    };

    const handleSkipForward = () => {
        if (wavesurfer) {
            wavesurfer.skip(2); // Skip forward by 2 seconds
        }
    };

    const handleSkipBack = () => {
        if (wavesurfer) {
            wavesurfer.skip(-2); // Skip backward by 2 seconds
        }
    };

    const handleChangeAudioFile = (index: number) => {
        if (wavesurfer) {
            wavesurfer.stop(); // Stop playback before changing file
            wavesurfer.destroy(); // Destroy current instance
        }
        setCurrentFile(index); // Update the current file index
        setIsPlaying(false); // Reset play state
    };

    return (
        <div className="video-container my-auto rounded-md lg:rounded-xl shadow-2xl">
            <div className="video-sub-container rounded-md lg:rounded-xl bg-black shadow-2xl py-4 my-auto ring-2 ring-border" ref={waveformRef}>
                {/* Audio file selection */}
                <div className="flex flex-row sm:flex-row md:flex-row items-center justify-center space-y-0 space-x-4">
                    {audioFiles.map((file, index) => (
                        <button
                            key={index}
                            onClick={() => handleChangeAudioFile(index)}
                            className={`p-2 text-white ${
                                currentFile === index ? 'bg-blue-700' : 'bg-gray-950'
                            } rounded-lg transition-colors duration-200 hover:bg-blue-700 rounded-full`}
                        >
                            {file.title}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-center mx-auto wavesurfer-controls max-w-md pb-8">
                    <div className="items-center justify-center flex flex-row space-x-4 pt-12">
                        {/* Audio controls */}
                        <button onClick={handleSkipBack}>
                            <FaBackward />
                        </button>
                        <button onClick={handlePlayPause}>
                            {isPlaying ? <FaStop /> : <FaPlay />}
                        </button>
                        <button onClick={handleSkipForward}>
                            <FaForward />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
