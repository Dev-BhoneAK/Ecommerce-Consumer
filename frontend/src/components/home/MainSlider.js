import React from 'react';
import Slider from 'react-slick';

const settings = {
    infinite: true,
    speed: 800,
    lazyLoad: 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
};

const MainSlider = () => {
    return (
        <div className="container">
            <section className="small-section pb-0 pt-res-0 small-slider">
                <div className="slider-animate home-slider">
                    <Slider {...settings}>
                        <div>
                            <div
                                className="height-apply"
                                style={{
                                    position: 'relative',
                                    // backgroundSize: 'cover',
                                    // backgroundRepeat: 'no-repeat',
                                    // backgroundPosition: 'center',
                                    // height: '75vh',
                                }}
                            >
                                <picture>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="/assets/images/home_slider/lenovo-mobile.png"
                                    />
                                    {/* <source
                                        media="(max-width: 1200px)"
                                        srcSet="/assets/images/home_slider/lenovox1200.png"
                                    /> */}
                                    <img
                                        src="/assets/images/home_slider/lenovo.png"
                                        alt=""
                                        className="bg-img lazyload"
                                        style={{ width: '100%' }}
                                    />
                                </picture>
                                {/* <div
                                    className="container"
                                    style={{
                                        position: 'absolute',
                                        top: '20px',
                                        left: '100px',
                                    }}
                                >
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain px-padding height-apply">
                                                <div>
                                                    <h4
                                                        className="animated"
                                                        data-animation-in="fadeInUp"
                                                    >
                                                        save 30%
                                                    </h4>
                                                    <h1
                                                        className="animated"
                                                        data-animation-in="fadeInUp"
                                                        data-delay-in="0.3"
                                                    >
                                                        phones
                                                    </h1>
                                                    <a
                                                        href="#"
                                                        className="btn btn-solid animated"
                                                        data-animation-in="fadeInUp"
                                                        data-delay-in="0.5"
                                                    >
                                                        shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* <div>
                            <div
                                className="home height-apply"
                                style={{ position: 'relative' }}
                            >
                                <img
                                    src="/assets/images/home_slider/iphone.png"
                                    alt=""
                                    className="bg-img lazyload"
                                />
                                <div
                                    className="container"
                                    style={{
                                        position: 'absolute',
                                        top: '20px',
                                        left: '16px',
                                    }}
                                >
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain px-padding height-apply">
                                                <div>
                                                    <h4
                                                        className="animated"
                                                        data-animation-in="fadeInUp"
                                                    >
                                                        save 30%
                                                    </h4>
                                                    <h1
                                                        className="animated"
                                                        data-animation-in="fadeInUp"
                                                        data-delay-in="0.3"
                                                    >
                                                        fashion
                                                    </h1>
                                                    <a
                                                        href="#"
                                                        className="btn btn-solid animated"
                                                        data-animation-in="fadeInUp"
                                                        data-delay-in="0.5"
                                                    >
                                                        shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </Slider>
                </div>
            </section>
        </div>
    );
};
export default MainSlider;
