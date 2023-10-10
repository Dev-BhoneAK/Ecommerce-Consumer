import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { BLOGS_URL } from 'config/API';

const BlogList = () => {
    const { data, isLoading } = useQuery(['blogs'], () => axios.get(BLOGS_URL));

    if (isLoading) return <LoadingSkeleton />;
    return (
        <section className="section-b-space blog-page ratio2_3">
            <div className="container">
                <div className="row">
                    {data?.data.map((blog) => (
                        <BlogItem blogData={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const BlogItem = ({ blogData }) => (
    <div className="col-12 col-lg-6 blog-media">
        <Link to={`/blogs/${blogData._id}`}>
            <div className="row">
                <img
                    src={`assets${blogData.image}`}
                    className="blog-image lazyload bg-img"
                    alt={blogData.title}
                />
                <div className="blog-content">
                    <div>
                        <h6>25 January 2018</h6> <h4>{blogData.title}</h4>
                        <ul className="post-social">
                            <li>Posted By : Admin Admin</li>
                        </ul>
                        <p>
                            {blogData.description.slice(0, 100)}
                            ...
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
);

const LoadingSkeleton = () => (
    // <div className="loader_skeleton">
    <section className="section-b-space blog-page ratio2_3">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 order-sec">
                    <div className="product-box">
                        <div className="media">
                            <div className="img-wrapper"></div>
                            <div className="media-body align-self-center">
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-box">
                        <div className="media">
                            <div className="img-wrapper"></div>
                            <div className="media-body align-self-center">
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-box">
                        <div className="media">
                            <div className="img-wrapper"></div>
                            <div className="media-body align-self-center">
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-box">
                        <div className="media">
                            <div className="img-wrapper"></div>
                            <div className="media-body align-self-center">
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    // </div>
);

export default BlogList;
