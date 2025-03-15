'use client';

import React from 'react';
import { buttonVariants } from '../ui/button';

export default function AnimatedCards(): JSX.Element {
  return (
    <>

        {/* Updated to prepend base URL */}
        <link rel="stylesheet" href="/css/main.css" />
        <script src="/js/animate.js"></script>
        <script src="/js/jquery364.js"></script>

      <div className="landing-main-images-wrapper container">
        <img
          alt="Twitter"
          src="https://e.pn/assets/epn_animate/img/animate/twitter.png"
          className="landing-main-image-twitter img-pos-left"
        />
        <img
          alt="Google"
          src="https://e.pn/assets/epn_animate/img/animate/google.png"
          className="landing-main-image-google img-pos-left"
        />
        <img
          alt="Facebook"
          src="https://e.pn/assets/epn_animate/img/animate/facebook.png"
          className="landing-main-image-facebook img-pos-left"
        />
        <img
          alt="Instagram"
          src="https://e.pn/assets/epn_animate/img/animate/instagram.png"
          className="landing-main-image-instagram img-pos-left"
        />
        <img
          alt="Taboor"
          src="https://e.pn/assets/epn_animate/img/animate/taboor.png"
          className="landing-main-image-taboor img-pos-left"
        />
        <img
          alt="TikTok"
          src="https://e.pn/assets/epn_animate/img/animate/tiktok.png"
          className="landing-main-image-tiktok img-pos-left"
        />
        <img
          alt="Snapchat"
          src="https://e.pn/assets/epn_animate/img/animate/snapchat.png"
          className="landing-main-image-snapchat img-pos-left"
        />
        <img
          alt="Pinterest"
          src="https://e.pn/assets/epn_animate/img/animate/pinterest.png"
          className="landing-main-image-pinterest img-pos-left"
        />
        <img
          alt="Facebook Small"
          src="https://e.pn/assets/epn_animate/img/animate/facebook_sm.png"
          className="landing-main-image-facebook_sm img-pos-left"
        />
        <img
          alt="Cards Bottom 3"
          src="https://e.pn/assets/epn_animate/img/animate/cards_bottom_3.png"
          className="landing-main-image-cards_bottom_3 img-pos-right"
        />
        <img
          alt="Cards Bottom 1"
          src="https://e.pn/assets/epn_animate/img/animate/cards_bottom_1.png"
          className="landing-main-image-cards_bottom_1 img-pos-right"
        />
        <img
          alt="Cards Bottom 2"
          src="https://e.pn/assets/epn_animate/img/animate/cards_bottom_2.png"
          className="landing-main-image-cards_bottom_2 img-pos-right"
        />
        <img
          alt="Cards Bottom 4"
          src="https://e.pn/assets/epn_animate/img/animate/cards_bottom_4.png"
          className="landing-main-image-cards_bottom_4 img-pos-right"
        />
        <img
          alt="Card Center"
          src="https://e.pn/assets/epn_animate/img/animate/card_center.png"
          className="landing-main-image-card_center img-pos-right"
        />
        <img
          alt="Cards Large"
          src="https://e.pn/assets/epn_animate/img/animate/cards_lg.png"
          className="landing-main-image-cards_lg img-pos-right"
        />
        <img
          alt="Card Duo"
          src="https://e.pn/assets/epn_animate/img/animate/card_duo.png"
          className="landing-main-image-card_duo img-pos-right"
        />
        <img
          alt="Cards Perpendicular"
          src="https://e.pn/assets/epn_animate/img/animate/cards_perpendicular.png"
          className="landing-main-image-cards_perpendicular img-pos-right"
        />
        <img
          alt="Cards Top"
          src="https://e.pn/assets/epn_animate/img/animate/cards_top.png"
          className="landing-main-image-cards_top img-pos-right"
        />
      </div>

      <section className="landing-main-container container">
        <div className="landing-main-container">
          <div className="landing-main-container-inner">
            <div className="landing-main-title-container">
              <h2 className="text-3xl lg:text-6xl font-semibold mt-6">Most reliable Virtual AI Agents for SMBs</h2>
              <p className="main-description">
                
              </p>
            <button
                rel="noopener noreferrer"
                className={`rounded-md px-4 py-2 md:flex ${buttonVariants({ size: 'sm' })}`}
                onClick={() => {
                window.location.href = '';
                }}
            >
                GET YOURS HERE
            </button>
            </div>
            <div className="donut-wrapper">
              <div className="donut-video-is-back">
                <video className="donut-vid" autoPlay muted loop playsInline>
                  <source src="https://e.pn/assets/epn_animate/img/animate/Donut_V5-hevc-safari_c0zzqo.mp4" type="video/mp4; codecs=&quot;hvc1&quot;" />
                  <source src="https://e.pn/assets/epn_animate/img/animate/Donut_V5-vp9-chrome_yq79bl.webm" type="video/webm" />
                </video>
              </div>
              <div className="donut-video-is-front">
                <video className="donut-vid" autoPlay muted loop playsInline>
                  <source src="https://e.pn/assets/epn_animate/img/animate/Donut_V5-hevc-safari_c0zzqo.mp4" type="video/mp4; codecs=&quot;hvc1&quot;" />
                  <source src="https://e.pn/assets/epn_animate/img/animate/Donut_V5-vp9-chrome_yq79bl.webm" type="video/webm" />
                </video>
              </div>
              <div className="donut-position-point-top"></div>
            </div>
            <div className="landing-main-block-hiding"></div>

            <div className="landing-advertising-posts-wrapper-top">
              <div className="landing-advertising-posts-container-top">
                <div className="landing-advertising-post-facebook-top">
                  <img
                    alt="Facebook Ad"
                    className="landing-advertising-post-image"
                    src="https://e.pn/assets/epn_animate/img/animate/facebook_adv.png"
                  />
                  <div className="landing-advertising-post-facebook-top-skeleton">
                    <div className="landing-advertising-post-facebook-top-skeleton-content">
                      <div className="landing-advertising-post-facebook-top-skeleton-row">
                        <img alt="Facebook Icon" src="https://e.pn/assets/epn_animate/img/animate/facebook_icon.svg" />
                        <span></span>
                      </div>
                      <div className="landing-advertising-post-facebook-top-skeleton-card"></div>
                    </div>
                  </div>
                </div>
                <div className="landing-advertising-post-google-top">
                  <img
                    alt="Google Ad"
                    className="landing-advertising-post-image"
                    src="https://e.pn/assets/epn_animate/img/animate/google_adv.png"
                  />
                  <div className="landing-advertising-post-google-top-skeleton">
                    <div className="landing-advertising-post-google-top-skeleton-content">
                      <div className="landing-advertising-post-google-top-skeleton-row">
                        <img alt="Google Icon" src="https://e.pn/assets/epn_animate/img/animate/google_icon.svg" />
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="landing-advertising-post-instagram-top">
                  <img
                    alt="Instagram Ad"
                    className="landing-advertising-post-image"
                    src="https://e.pn/assets/epn_animate/img/animate/instagram_adv.png"
                  />
                  <div className="landing-advertising-post-instagram-top-skeleton">
                    <div className="landing-advertising-post-instagram-top-skeleton-content">
                      <div className="landing-advertising-post-instagram-top-skeleton-row">
                        <img
                          alt="Instagram Icon Small"
                          src="https://e.pn/assets/epn_animate/img/animate/instagram_icon_sm.png"
                        />
                        <span></span>
                      </div>
                      <div className="landing-advertising-post-instagram-top-skeleton-card"></div>
                    </div>
                  </div>
                </div>
                <div className="landing-advertising-post-twitter-top">
                  <img
                    alt="Twitter Ad"
                    className="landing-advertising-post-image"
                    src="https://e.pn/assets/epn_animate/img/animate/twitter_adv.png"
                  />
                  <div className="landing-advertising-post-twitter-top-skeleton">
                    <div className="landing-advertising-post-twitter-top-skeleton-content">
                      <div className="landing-advertising-post-twitter-top-skeleton-row">
                        <img alt="Twitter Icon" src="https://e.pn/assets/epn_animate/img/animate/twitter_icon.svg" />
                        <span></span>
                      </div>
                      <div className="landing-advertising-post-twitter-top-skeleton-card"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="landing-advertising-posts-wrapper-bottom">
              <div className="landing-advertising-posts-container-bottom">
                <div className="landing-advertising-post-facebook-bottom">
                  <img
                    alt="Facebook Ad Bottom"
                    className="landing-advertising-post-image"
                    src="https://e.pn/assets/epn_animate/img/animate/facebook_adv.png"
                  />
                  <div className="landing-advertising-post-facebook-bottom-skeleton">
                    <div className="landing-advertising-post-facebook-bottom-skeleton-content">
                      <div className="landing-advertising-post-facebook-bottom-skeleton-row">
                        <img alt="Facebook Icon Bottom" src="https://e.pn/assets/epn_animate/img/animate/facebook_icon.svg" />
                        <span></span>
                      </div>
                      <div className="landing-advertising-post-facebook-bottom-skeleton-card"></div>
                    </div>
                  </div>
                </div>
                <div className="landing-advertising-post-google-bottom">
                  <img
                    alt="Google Ad Bottom"
                    className="landing-advertising-post-image"
                    src="https://e.pn/assets/epn_animate/img/animate/google_adv.png"
                  />
                  <div className="landing-advertising-post-google-bottom-skeleton">
                    <div className="landing-advertising-post-google-bottom-skeleton-content">
                      <div className="landing-advertising-post-google-bottom-skeleton-row">
                        <img alt="Google Icon Bottom" src="https://e.pn/assets/epn_animate/img/animate/google_icon.svg" />
                        <span></span>
                      </div>
                      <div className="landing-advertising-post-google-bottom-skeleton-card"></div>
                    </div>
                  </div>
                </div>
                <div className="landing-advertising-post-instagram-bottom">
                  <img
                    alt="Instagram Ad Bottom"
                    className="landing-advertising-post-image"
                    src="https://e.pn/assets/epn_animate/img/animate/instagram_adv.png"
                  />
                  <div className="landing-advertising-post-instagram-bottom-skeleton">
                    <div className="landing-advertising-post-instagram-bottom-skeleton-content">
                      <div className="landing-advertising-post-instagram-bottom-skeleton-row">
                        <img alt="Instagram Icon Bottom" src="https://e.pn/assets/epn_animate/img/animate/instagram_icon.svg" />
                        <span></span>
                      </div>
                      <div className="landing-advertising-post-instagram-bottom-skeleton-card"></div>
                    </div>
                  </div>
                </div>
                <div className="landing-advertising-post-twitter-bottom">
                  <img
                    alt="Twitter Ad Bottom"
                    className="landing-advertising-post-image"
                    src="https://e.pn/assets/epn_animate/img/animate/twitter_adv.png"
                  />
                  <div className="landing-advertising-post-twitter-bottom-skeleton">
                    <div className="landing-advertising-post-twitter-bottom-skeleton-content">
                      <div className="landing-advertising-post-twitter-bottom-skeleton-row">
                        <img alt="Twitter Icon Bottom" src="https://e.pn/assets/epn_animate/img/animate/twitter_icon.svg" />
                        <span></span>
                      </div>
                      <div className="landing-advertising-post-twitter-bottom-skeleton-card"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
