import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
    return (
        <section class="section-b-space blog-page ratio2_3">
            <div class="container">
                <div class="row">
                    <Link to="/blogs/1">
                        <div class="col-12 col-lg-6 blog-media">
                            <div class="row">
                                <img
                                    src="assets/images/blogs/1.jpg"
                                    class="blog-image lazyload bg-img"
                                    alt="Blog"
                                />
                                <div class="blog-content">
                                    <div>
                                        <h6>25 January 2018</h6>{' '}
                                        <h4>
                                            you how all this mistaken idea of
                                            denouncing pleasure and praising
                                            pain was born.
                                        </h4>
                                        <ul class="post-social">
                                            <li>Posted By : Admin Admin</li>
                                            <li>
                                                <i class="fa fa-heart"></i> 5
                                                Hits
                                            </li>
                                            <li>
                                                <i class="fa fa-comments"></i>{' '}
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
                        </div>
                    </Link>
                    <div class="col-12 col-lg-6 blog-media">
                        <div class="row">
                            <img
                                src="assets/images/blogs/3.jpg"
                                class="blog-image lazyload bg-img"
                                alt="Blog"
                            />
                            <div class="blog-content">
                                <div>
                                    <h6>25 January 2018</h6>{' '}
                                    <h4>
                                        you how all this mistaken idea of
                                        denouncing pleasure and praising pain
                                        was born.
                                    </h4>
                                    <ul class="post-social">
                                        <li>Posted By : Admin Admin</li>
                                        <li>
                                            <i class="fa fa-heart"></i> 5 Hits
                                        </li>
                                        <li>
                                            <i class="fa fa-comments"></i> 10
                                            Comment
                                        </li>
                                    </ul>
                                    <p>
                                        Consequences that are extremely painful.
                                        Nor again is there anyone who loves or
                                        pursues or desires to obtain pain of
                                        itself, because it is pain, but because
                                        occasionally circumstances occur in
                                        which toil and pain can procure him some
                                        great pleasure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 blog-media">
                        <div class="row">
                            <img
                                src="assets/images/blogs/3.jpg"
                                class="blog-image lazyload bg-img"
                                alt="Blog"
                            />
                            <div class="blog-content">
                                <div>
                                    <h6>25 January 2018</h6>{' '}
                                    <h4>
                                        you how all this mistaken idea of
                                        denouncing pleasure and praising pain
                                        was born.
                                    </h4>
                                    <ul class="post-social">
                                        <li>Posted By : Admin Admin</li>
                                        <li>
                                            <i class="fa fa-heart"></i> 5 Hits
                                        </li>
                                        <li>
                                            <i class="fa fa-comments"></i> 10
                                            Comment
                                        </li>
                                    </ul>
                                    <p>
                                        Consequences that are extremely painful.
                                        Nor again is there anyone who loves or
                                        pursues or desires to obtain pain of
                                        itself, because it is pain, but because
                                        occasionally circumstances occur in
                                        which toil and pain can procure him some
                                        great pleasure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default List;
