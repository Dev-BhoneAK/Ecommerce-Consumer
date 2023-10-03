import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const BlogSlider = ({ sectionTitle }) => {
    return (
        <section className="blog ratio2_3 gym-blog section-b-space overflow-hidden">
            <div className="container">
                <div className="row">
                    {sectionTitle}
                    <div className="col-md-12">
                        <div className="slide-3 no-arrow slick-default-margin">
                            <Slider {...settings}>
                                <Link to="/blogs/1">
                                    <div className="col-md-12">
                                        <div className="classic-effect">
                                            <div>
                                                <img
                                                    alt=""
                                                    src="/assets/images/blogs/1.jpg"
                                                    className="img-fluid lazyload bg-img"
                                                />
                                            </div>
                                        </div>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <p>
                                                Lorem ipsum dolor sit
                                                consectetur adipiscing elit,
                                            </p>
                                            <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/blogs/2">
                                    <div className="col-md-12">
                                        <div className="classic-effect">
                                            <div>
                                                <img
                                                    alt=""
                                                    src="../assets/images/blogs/2.jpg"
                                                    className="img-fluid lazyload bg-img"
                                                />
                                            </div>
                                        </div>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <p>
                                                Lorem ipsum dolor sit
                                                consectetur adipiscing elit,
                                            </p>
                                            <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/blogs/3">
                                    <div className="col-md-12">
                                        <div className="classic-effect">
                                            <div>
                                                <img
                                                    alt=""
                                                    src="../assets/images/blogs/3.jpg"
                                                    className="img-fluid lazyload bg-img"
                                                />
                                            </div>
                                        </div>
                                        <div className="blog-details">
                                            <h4>25 January 2018</h4>
                                            <p>
                                                Lorem ipsum dolor sit
                                                consectetur adipiscing elit,
                                            </p>
                                            <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                </Link>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BlogSlider;
