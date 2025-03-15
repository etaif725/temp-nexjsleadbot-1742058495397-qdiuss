$(document).ready(function(){
    const twitter = $('.landing-main-image-twitter');
    const google = $('.landing-main-image-google');
    const facebook = $('.landing-main-image-facebook');
    const instagram = $('.landing-main-image-instagram');
    const tiktok = $('.landing-main-image-tiktok');
    const taboor = $('.landing-main-image-taboor');
    const snapchat = $('.landing-main-image-snapchat');
    const pinterest = $('.landing-main-image-pinterest');
    const facebookSm = $('.landing-main-image-facebook_sm');

    const cardsBottom3 = $('.landing-main-image-cards_bottom_3');
    const cardsBottom1 = $('.landing-main-image-cards_bottom_1');
    const cardsBottom2 = $('.landing-main-image-cards_bottom_2');
    const cardsBottom4 = $('.landing-main-image-cards_bottom_4');
    const cardCenter = $('.landing-main-image-card_center');
    const cardsLg = $('.landing-main-image-cards_lg');
    const cardDuo = $('.landing-main-image-card_duo');
    const cardsPerpendicular = $('.landing-main-image-cards_perpendicular');
    const cardsTop = $('.landing-main-image-cards_top');

    const imagesWrapper = $('.landing-main-images-wrapper');

    // ==================================================================
    const donutPointTop = $('.donut-position-point-top');
    const advPointBottom = $('.landing-advertising-posts-point-bottom');
    const advPointTop = $('.landing-advertising-posts-point-top');

    const facebookAdvTop = $('.landing-advertising-post-facebook-top');
    const googleAdvTop = $('.landing-advertising-post-google-top');
    const instagramAdvTop = $('.landing-advertising-post-instagram-top');
    const twitterAdvTop = $('.landing-advertising-post-twitter-top');

    const facebookAdvImg = $('.landing-advertising-post-facebook-top > .landing-advertising-post-image');
    const googleAdvTopImg = $('.landing-advertising-post-google-top > .landing-advertising-post-image');
    const instagramAdvTopImg = $('.landing-advertising-post-instagram-top > .landing-advertising-post-image');
    const twitterAdvTopImg = $('.landing-advertising-post-twitter-top > .landing-advertising-post-image');

    const facebookAdvBottom = $('.landing-advertising-post-facebook-bottom');
    const googleAdvBottom = $('.landing-advertising-post-google-bottom');
    const instagramAdvBottom = $('.landing-advertising-post-instagram-bottom');
    const twitterAdvBottom = $('.landing-advertising-post-twitter-bottom');

    const layerBlur = $('.landing-advertising-posts-layer-blur');

    $(window).scroll(function() {
        const offset = $(document).scrollTop();
        const width = $(document).width();
        const radius = Math.round(width / 2) > 690 ? 690 : Math.round(width / 2);

        const x = offset;
        const exp = Math.pow(radius, 2) - Math.pow(x, 1.5);
        const y = radius - Math.sqrt(exp);

        animateLeftImages(twitter, donutPointTop, x, y, radius - 60, { x: 30, y: 20 }, 100, 100, 0.8);
        animateLeftImages(google, donutPointTop, x, y, radius - 40, { x: 158, y: 156 }, 70, 50, 1.2);
        animateLeftImages(facebook, donutPointTop, x, y, radius - 80, { x: 3, y: 385 }, 20, 10, 1.3);
        animateLeftImages(instagram, donutPointTop, x, y, radius - 90, { x: 80, y: 140 }, 90, 50, 1.1);
        animateLeftImages(tiktok, donutPointTop, x, y, radius - 120, { x: 170, y: 305 }, 40, 50, 1.2);
        animateLeftImages(taboor, donutPointTop, x, y, radius - 180, { x: 221, y: 282 }, 20, 30, 1.3);
        animateLeftImages(snapchat, donutPointTop, x, y, radius - 160, { x: 20, y: 235 }, 80, 40, 1.05);
        animateLeftImages(pinterest, donutPointTop, x, y, radius - 200, { x: 240, y: 425 }, 0, 30, 1.4);
        animateLeftImages(facebookSm, donutPointTop, x, y, radius - 240, { x: 220, y: 40 }, 90, 90, 0.7);

        animateRightImages(cardsBottom3, donutPointTop, x, y, radius - 100, { x: -60, y: 450 }, 20, 10, 1.1);
        animateRightImages(cardsBottom1, donutPointTop, x, y, radius - 200, { x: -225, y: 345 }, 0, 40, 1.4);
        animateRightImages(cardsBottom2, donutPointTop, x, y, radius - 200, { x: -180, y: 390 }, 0, 40, 1.1);
        animateRightImages(cardsBottom4, donutPointTop, x, y, radius - 100, { x: -30, y: 335 }, 40, 0, 0.9);
        animateRightImages(cardCenter, donutPointTop, x, y, radius - 120, { x: -150, y: 270 }, 70, 30, 1.2);
        animateRightImages(cardsLg, donutPointTop, x, y, radius - 80, { x: 10, y: 90 }, 100, 50, 0.9);
        animateRightImages(cardDuo, donutPointTop, x, y, radius - 160, { x: -190, y: 160 }, 90, 50, 1);
        animateRightImages(cardsPerpendicular, donutPointTop, x, y, radius - 180, { x: -210, y: 40 }, 130, 80, 1);
        animateRightImages(cardsTop, donutPointTop, x, y, radius - 120, { x: -125, y: 6 }, 150, 100, 0.9);

        delayImageWrapper(imagesWrapper, advPointTop);

        // ============================================================================================================
        animateGoogleAdv(googleAdvTop, googleAdvTopImg, googleAdvBottom, donutPointTop, advPointTop, advPointBottom);
        animateInstagramAdv(instagramAdvTop, instagramAdvTopImg, instagramAdvBottom, donutPointTop, advPointTop, advPointBottom);
        animateTwitterAdv(twitterAdvTop, twitterAdvTopImg, twitterAdvBottom, donutPointTop, advPointTop, advPointBottom);
        animateFacebookAdv(facebookAdvTop, facebookAdvImg, facebookAdvBottom, donutPointTop, advPointTop, advPointBottom);
        animateLayerBlur(layerBlur, advPointTop, advPointBottom);
    });

    function animateLeftImages(component, point, x, y, radius, init, delayX, finalTop, boost) {
        const top = component.offset().top;
        const pointPosition = point.offset().top;
        if (x > delayX) {
            x = x - delayX;
            let offsetX = x * boost;
            let offsetTop = 0;

            const offsetY = component
                .css('transform')
                .replace(/[^0-9\-.,]/g, '')
                .split(',')[5];

            if (offsetX >= radius) {
                offsetX = radius;
                y = offsetY;
                offsetTop = finalTop;
            }

            component.css({
                transform: `translate3d(${offsetX + init.x}px, ${y + init.y}px, 0)`,
                top: `${offsetTop}px`,
                opacity: top > pointPosition ? 0 : 1,
                visibility: top > pointPosition ? 'hidden'  : 'visible',
            });
        } else {
            component.css({
                transform: `translate3d(${init.x}px, ${init.y}px, 0)`,
            });
        }
    }

    function animateRightImages(component, point, x, y, radius, init, delayX, finalTop, boost) {
        const top = component.offset().top;
        const pointPosition = point.offset().top;
        if (x > delayX) {
            x = x - delayX;
            let offsetX = -x * boost;
            let offsetTop = 0;

            const offsetY = component
                .css('transform')
                .replace(/[^0-9\-.,]/g, '')
                .split(',')[5];

            if (offsetX <= -radius) {
                offsetX = -radius;
                y = offsetY;
                offsetTop = finalTop;
            }
            component.css({
                transform: `translate3d(${offsetX + init.x}px, ${y + init.y}px, 0)`,
                top: `${offsetTop}px`,
                opacity: top > pointPosition ? 0 : 1,
                visibility: top > pointPosition ? 'hidden'  : 'visible',
            });
        } else {
            component.css({
                transform: `translate3d(${init.x}px, ${init.y}px, 0)`,
            });
        }
    }

    function delayImageWrapper(wrapper, point) {
        const pointPosition = point.offset().top;

        if (pointPosition > 1800) {
            wrapper.css({
                display: 'none',
            });
        } else {
            wrapper.css({
                display: 'block',
            });
        }
    }

    // ================================================================================================================

    function animateLayerBlur(layerBlur, advPointT, advPointB) {
        const advPointTPosition = advPointT.offset().top;
        const advPointBPosition = advPointB.offset().top;
        const stopPosition = advPointBPosition - advPointTPosition;

        if (Math.abs(stopPosition) < 5) {
            layerBlur.css({
                opacity: 1,
            })
        } else {
            layerBlur.css({
                opacity: 0,
            })
        }
    }

    function animateFacebookAdv(component, componentImg, componentFinal, donutPoint, advPointT, advPointB) {
        const componentOffsetTop = component.offset().top;
        const componentHeight = component.outerHeight();
        const componentOffsetBottom = componentOffsetTop + componentHeight;

        const componentFinalHeight = componentFinal.outerHeight();
        const componentFinalWidth = componentFinal.outerWidth();

        const donutPointPosition = donutPoint.offset().top;
        const advPointTPosition = advPointT.offset().top;
        const advPointBPosition = advPointB.offset().top;

        const stopPosition = advPointBPosition - advPointTPosition;
        const yPathLength = advPointBPosition - donutPointPosition;
        const yPathTrack = componentOffsetBottom - advPointBPosition;
        const yPath = yPathTrack + yPathLength - 200;

        if (componentOffsetTop > donutPointPosition) {
            component.css({
                opacity: 1,
            });
        } else {
            component.css({
                opacity: 0,
            });
        }

        if (yPath > 0) {
            let h = (yPath / 1.72038) + 100;
            let w = (yPath / 2.55634) + 200;

            let left = (yPath / (-15.5)) + 30;
            let rotate = 5 - (yPath / 72.6);
            let boxShadow;

            if (Math.abs(stopPosition) < 100) {
                h = componentFinalHeight;
                w = componentFinalWidth;
                rotate = 0;
            }

            if (Math.abs(stopPosition) < 5) {
                left = 0;
                boxShadow = `none`;
                componentImg.css({
                    opacity: 1,
                });
            } else {
                boxShadow = `0 0 4px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.1)`;
                componentImg.css({
                    opacity: 0,
                });
            }
            component.css({
                height: `${h}px`,
                width: `${w}px`,
                left: `${left}px`,
                transform: `rotateZ(${rotate}deg)`,
                boxShadow: boxShadow,
            });
        } else {
            component.css({
                height: '100px',
                width: '200px',
                left: '30px',
                transform: 'rotateZ(5deg)',
            });
        }
    }

    function animateGoogleAdv(component, componentImg, componentFinal, donutPoint, advPointT, advPointB) {
        const componentOffsetTop = component.offset().top;
        const componentHeight = component.outerHeight();
        const componentOffsetBottom = componentOffsetTop + componentHeight;

        const componentFinalHeight = componentFinal.outerHeight();
        const componentFinalWidth = componentFinal.outerWidth();

        const donutPointPosition = donutPoint.offset().top;
        const advPointTPosition = advPointT.offset().top;
        const advPointBPosition = advPointB.offset().top;

        const stopPosition = advPointBPosition - advPointTPosition;
        const yPathLength = advPointBPosition - donutPointPosition;
        const yPathTrack = componentOffsetBottom - advPointBPosition;
        const yPath = yPathTrack + yPathLength - 200;

        if (componentOffsetTop > donutPointPosition) {
            component.css({
                opacity: 1,
            });
        } else {
            component.css({
                opacity: 0,
            });
        }

        if (yPath > 0) {
            let h = (yPath / 1.72038) + 100;
            let w = (yPath / 2.55634) + 200;
            let right = (yPath / (-15.5)) + 30;
            let boxShadow;

            if (Math.abs(stopPosition) < 100) {
                h = componentFinalHeight;
                w = componentFinalWidth;
            }

            if (Math.abs(stopPosition) < 5) {
                right = 0;
                boxShadow = `none`;
                componentImg.css({
                    opacity: 1,
                });
            } else {
                boxShadow = `0 0 4px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.1)`;
                componentImg.css({
                    opacity: 0,
                });
            }
            component.css({
                height: `${h}px`,
                width: `${w}px`,
                boxShadow: boxShadow,
                right: `${right}px`,
            });
        } else {
            component.css({
                height: '100px',
                width: '200px',
                right: '30px',
            });
        }
    }

    function animateInstagramAdv(component, componentImg, componentFinal, donutPoint, advPointT, advPointB) {
        const componentOffsetTop = component.offset().top;
        const componentHeight = component.outerHeight();
        const componentOffsetBottom = componentOffsetTop + componentHeight;

        const componentFinalHeight = componentFinal.outerHeight();
        const componentFinalWidth = componentFinal.outerWidth();

        const donutPointPosition = donutPoint.offset().top;
        const advPointTPosition = advPointT.offset().top;
        const advPointBPosition = advPointB.offset().top;

        const stopPosition = advPointBPosition - advPointTPosition;
        const yPathLength = advPointBPosition - donutPointPosition;
        const yPathTrack = componentOffsetBottom - advPointBPosition;
        const yPath = yPathTrack + yPathLength - 200;

        if (componentOffsetTop > donutPointPosition) {
            component.css({
                opacity: 1,
            });
        } else {
            component.css({
                opacity: 0,
            });
        }

        if (yPath > 0) {
            let h = (yPath / 9.26) + 100;
            let w = (yPath / 4.38732) + 200;
            let left = (yPath / (-12.46)) + 50;
            let borderRadius;
            let boxShadow;

            if (Math.abs(stopPosition) < 5) {
                h = componentFinalHeight;
                w = componentFinalWidth;
                left = 0;
                borderRadius = `12px 12px 0 0`;
                boxShadow = `none`;
                componentImg.css({
                    opacity: 1,
                });
            } else {
                borderRadius = `12px`;
                boxShadow = `0 0 4px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.1)`;
                componentImg.css({
                    opacity: 0,
                });
            }
            component.css({
                height: `${h}px`,
                width: `${w}px`,
                left: `${left}px`,
                borderRadius: borderRadius,
                boxShadow: boxShadow,
            });
        } else {
            component.css({
                height: '100px',
                width: '200px',
                left: '50px',
            });
        }
    }

    function animateTwitterAdv(component, componentImg, componentFinal, donutPoint, advPointT, advPointB) {
        const componentOffsetTop = component.offset().top;
        const componentHeight = component.outerHeight();
        const componentOffsetBottom = componentOffsetTop + componentHeight;

        const componentFinalHeight = componentFinal.outerHeight();
        const componentFinalWidth = componentFinal.outerWidth();

        const donutPointPosition = donutPoint.offset().top;
        const advPointTPosition = advPointT.offset().top;
        const advPointBPosition = advPointB.offset().top;

        const stopPosition = advPointBPosition - advPointTPosition;
        const yPathLength = advPointBPosition - donutPointPosition;
        const yPathTrack = componentOffsetBottom - advPointBPosition;
        const yPath = yPathTrack + yPathLength - 200;

        if (componentOffsetTop > donutPointPosition) {
            component.css({
                opacity: 1,
            });
        } else {
            component.css({
                opacity: 0,
            });
        }

        if (yPath > 0) {
            let h = (yPath / 9.26) + 100;
            let w = (yPath / 4.38732) + 200;
            let right = (yPath / (-12.46)) + 50;
            let bottom = (yPath / (-62.3)) + 10;
            let rotate = 5 - (yPath / 124.6);
            let borderRadius;
            let boxShadow;

            if (Math.abs(stopPosition) < 5) {
                h = componentFinalHeight;
                w = componentFinalWidth;
                right = 0;
                bottom = 0;
                rotate = 0;
                borderRadius = `12px 12px 0 0`;
                boxShadow = `none`;
                componentImg.css({
                    opacity: 1,
                });
            } else {
                borderRadius = `12px`;
                boxShadow = `0 0 4px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.1)`;
                componentImg.css({
                    opacity: 0,
                });
            }
            component.css({
                height: `${h}px`,
                width: `${w}px`,
                right: `${right}px`,
                bottom: `${bottom}px`,
                transform: `rotateZ(-${rotate}deg)`,
                borderRadius: borderRadius,
                boxShadow: boxShadow,
            });
        } else {
            component.css({
                height: '100px',
                width: '200px',
                right: '50px',
                bottom: '10px',
            });
        }
    }
});