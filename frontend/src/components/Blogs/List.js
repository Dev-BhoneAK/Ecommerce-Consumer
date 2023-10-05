import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { BLOGS_URL } from 'config/API';

const List = () => {
    const { data, isLoading } = useQuery(['blogs'], () =>
        axios.get(BLOGS_URL)
    );

    if (isLoading) return <LoadingSkeleton />;
    return (
        <section className="section-b-space blog-page ratio2_3">
            <div className="container">
                <div className="row">
                    {data?.data.map((blog) => (
                        <div className="col-12 col-lg-6 blog-media">
                            <Link to={`/blogs/${blog.id}`}>
                                <div className="row">
                                    <img
                                        src={`assets${blog.image}`}
                                        className="blog-image lazyload bg-img"
                                        alt="Blog"
                                    />
                                    <div className="blog-content">
                                        <div>
                                            <h6>25 January 2018</h6>{' '}
                                            <h4>
                                                you how all this mistaken idea
                                                of denouncing pleasure and
                                                praising pain was born.
                                            </h4>
                                            <ul className="post-social">
                                                <li>Posted By : Admin Admin</li>
                                                <li>
                                                    <i className="fa fa-heart"></i>{' '}
                                                    5 Hits
                                                </li>
                                                <li>
                                                    <i className="fa fa-comments"></i>{' '}
                                                    10 Comment
                                                </li>
                                            </ul>
                                            <p>
                                                Consequences that are extremely
                                                painful. Nor again is there
                                                anyone who loves or pursues or
                                                desires to obtain pain of
                                                itself, because it is pain, but
                                                because occasionally
                                                circumstances occur in which
                                                toil and pain can procure him
                                                some great pleasure.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    {/* <div className="col-12 col-lg-6 blog-media">
                        <Link to="/blogs/1">
                            <div className="row">
                                <img
                                    src="assets/images/blogs/1.jpg"
                                    className="blog-image lazyload bg-img"
                                    alt="Blog"
                                />
                                <div className="blog-content">
                                    <div>
                                        <h6>25 January 2018</h6>{' '}
                                        <h4>
                                            you how all this mistaken idea of
                                            denouncing pleasure and praising
                                            pain was born.
                                        </h4>
                                        <ul className="post-social">
                                            <li>Posted By : Admin Admin</li>
                                            <li>
                                                <i className="fa fa-heart"></i>{' '}
                                                5 Hits
                                            </li>
                                            <li>
                                                <i className="fa fa-comments"></i>{' '}
                                                10 Comment
                                            </li>
                                        </ul>
                                        <p>
                                            Consequences that are extremely
                                            painful. Nor again is there anyone
                                            who loves or pursues or desires to
                                            obtain pain of itself, because it is
                                            pain, but because occasionally
                                            circumstances occur in which toil
                                            and pain can procure him some great
                                            pleasure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-6 blog-media">
                        <Link to="/blogs/2">
                            <div className="row">
                                <img
                                    src="assets/images/blogs/3.jpg"
                                    className="blog-image lazyload bg-img"
                                    alt="Blog"
                                />
                                <div className="blog-content">
                                    <div>
                                        <h6>25 January 2018</h6>{' '}
                                        <h4>
                                            you how all this mistaken idea of
                                            denouncing pleasure and praising
                                            pain was born.
                                        </h4>
                                        <ul className="post-social">
                                            <li>Posted By : Admin Admin</li>
                                            <li>
                                                <i className="fa fa-heart"></i>{' '}
                                                5 Hits
                                            </li>
                                            <li>
                                                <i className="fa fa-comments"></i>{' '}
                                                10 Comment
                                            </li>
                                        </ul>
                                        <p>
                                            Consequences that are extremely
                                            painful. Nor again is there anyone
                                            who loves or pursues or desires to
                                            obtain pain of itself, because it is
                                            pain, but because occasionally
                                            circumstances occur in which toil
                                            and pain can procure him some great
                                            pleasure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-6 blog-media">
                        <Link to="/blogs/3">
                            <div className="row">
                                <img
                                    src="assets/images/blogs/3.jpg"
                                    className="blog-image lazyload bg-img"
                                    alt="Blog"
                                />
                                <div className="blog-content">
                                    <div>
                                        <h6>25 January 2018</h6>{' '}
                                        <h4>
                                            you how all this mistaken idea of
                                            denouncing pleasure and praising
                                            pain was born.
                                        </h4>
                                        <ul className="post-social">
                                            <li>Posted By : Admin Admin</li>
                                            <li>
                                                <i className="fa fa-heart"></i>{' '}
                                                5 Hits
                                            </li>
                                            <li>
                                                <i className="fa fa-comments"></i>{' '}
                                                10 Comment
                                            </li>
                                        </ul>
                                        <p>
                                            Consequences that are extremely
                                            painful. Nor again is there anyone
                                            who loves or pursues or desires to
                                            obtain pain of itself, because it is
                                            pain, but because occasionally
                                            circumstances occur in which toil
                                            and pain can procure him some great
                                            pleasure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

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

export default List;
