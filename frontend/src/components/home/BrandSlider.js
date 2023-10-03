import React from 'react';
import Slider from 'react-slick';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1367,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};
const BrandSlider = () => {
    return (
        <section className="section-b-space bg-light brand-logos">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="slide-6 no-arrow">
                            <Slider {...settings}>
                                <div>
                                    <div className="logo-block">
                                        <a href="#">
                                            <img
                                                src="/assets/images/brands/apple.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#">
                                            <img
                                                src="/assets/images/brands/aukey.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#">
                                            <img
                                                src="/assets/images/brands/logitech.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#">
                                            <img
                                                src="/assets/images/brands/casestudi.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#">
                                            <img
                                                src="/assets/images/brands/elegant.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#">
                                            <img
                                                src="/assets/images/brands/jbl.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#">
                                            <img
                                                src="/assets/images/brands/katespade.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#">
                                            <img
                                                src="/assets/images/brands/premium.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                {/*<div>*/}
                                {/*    <div className="logo-block">*/}
                                {/*        <a href="#"><img src="/assets/images/brands/switcheasy.png" alt=""/></a>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div>
                                    <div className="logo-block">
                                        <a href="#">
                                            <img
                                                src="/assets/images/brands/viewsonic.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BrandSlider;
