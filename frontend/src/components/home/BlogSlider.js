import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { BLOGS_URL } from 'config/API';

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
    const { data, isLoading } = useQuery(['blogs'], () => axios.get(BLOGS_URL));

    if (isLoading) return 'Loading...';

    return (
        <section className="blog ratio2_3 overflow-hidden">
            <div className="container">
                <div className="row">
                    {sectionTitle}
                    <div className="col-md-12">
                        <div className="slide-3 no-arrow slick-default-margin">
                            <Slider {...settings}>
                                {data?.data.map((blog) => (
                                    <Blog blogData={blog} key={blog._id} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Blog = ({ blogData }) => (
    <Link to={`/blogs/${blogData._id}`}>
        <div className="col-md-12">
            <div className="classic-effect">
                <div>
                    <img
                        alt={blogData.title}
                        src={`/assets/${blogData.image}`}
                        className="img-fluid lazyload bg-img"
                    />
                </div>
            </div>
            <div className="blog-details">
                <h4>25 January 2018</h4>
                <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                <h6>by: John Dio , 2 Comment</h6>
            </div>
        </div>
    </Link>
);
export default BlogSlider;
