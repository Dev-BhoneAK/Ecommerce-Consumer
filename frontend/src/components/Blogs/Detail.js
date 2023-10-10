import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { BLOGS_URL } from 'config/API';
import SocialIconsContainer from 'components/common/SocialIconsContainer';

const BlogDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery(['blogs', id], () =>
        axios.get(BLOGS_URL + `/${id}`)
    );

    if (isLoading) return 'Loading...';

    return (
        <section className="blog-detail-page section-b-space ratio2_3">
            <div className="container">
                <Blog blogData={data?.data} />
                <div className="row section-b-space blog-advance"></div>
            </div>
        </section>
    );
};

const Blog = ({ blogData }) => (
    <div className="row">
        <div className="col-sm-12 blog-detail">
            <img
                src={`/assets${blogData.image}`}
                className="blog-image lazyload"
                alt={blogData.title}
            />
            <h3>{blogData.title}</h3>
            <ul className="post-social">
                <li>25 January 2018</li>
                <li>Posted By : Admin</li>
                <li>
                    <SocialIconsContainer />
                </li>
            </ul>
            <p>{blogData.description}</p>
        </div>
    </div>
);

export default BlogDetail;
