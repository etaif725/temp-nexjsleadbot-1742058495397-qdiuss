import React from 'react';
import Wrapper from '../global/Wrapper';
import Container from '../global/Container';

const IntegrationsHero: React.FC = () => {
    const newLocal = "tile";
  return (
    <>
    <Wrapper>
        <Container>
            <div className="container relative">
                <div className="main-hero-integrations">
                    <div className="hero-text-section">
                        <h1 className="home-h1 anim-slidefade-speed-1">Integrations</h1>
                        <div className="hero-subtitle">
                            <p className="text-2xl mb-0 sub-hero anim-slidefade-speed-2">Enhance Arcade with the tools your team trusts.</p>
                        </div>
                        <div className="button-row anim-slidefade-speed-3">
                            <a href="https://app.arcade.software/auth" target="_blank" className="button w-inline-block">
                                <div>Get started for free</div>
                            </a>
                        </div>
                    </div>
                    <div className="tile-wrapper">
                            <div id="w-node-_8cd0fb23-93e1-f649-ac56-486dcc43b9a7-c6678575" className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className="tile"></div>
                            <div className={newLocal}></div>
                    </div>
                    <div className="hero-gradient-background solo anim-slidefade-speed-1 main-integrations w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1042" height="635" fill="none">
                            <defs>
                                <linearGradient id="arcade-cycle" x1="0%" y1="50%" x2="100%" y2="50%" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stop-color="#2142E7">
                                        <animate attributeName="stop-color" values="#EA12AD;#EA12AD;#EA12AD;#FDBC15;#2142E7;#2142E7;#2142E7;#2142E7;#2142E7;#2142E7;#FDBC15;#EA12AD;#EA12AD;#EA12AD;" type="rotate" dur="8s" repeatCount="indefinite"></animate>
                                    </stop>
                                    <stop offset="100%" stop-color="#03B5ED">
                                        <animate attributeName="stop-color" values="#FDBC15;#FDBC15;#FDBC15;#EA12AD;#03B5ED;#03B5ED;#03B5ED;#03B5ED;#03B5ED;#03B5ED;#EA12AD;#FDBC15;#FDBC15;#FDBC15;" type="rotate" dur="8s" repeatCount="indefinite"></animate>
                                    </stop>
                                    <animateTransform attributeName="gradientTransform" type="rotate" dur="20s" repeatCount="indefinite"></animateTransform>
                                </linearGradient>
                            </defs>
                            <path d="M1041.04 122.355C1036.08 -155.193 824.825 126.214 537.407 131.345C249.988 136.476 -4.75243 -136.614 0.202023 140.934C5.15647 418.483 242.172 639.321 529.59 634.19C817.008 629.059 1045.99 399.903 1041.04 122.355Z" fill="url(#arcade-cycle)"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </Container>
    </Wrapper>
    </>
  );
};

export default IntegrationsHero;
