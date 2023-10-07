import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { BLOGS_URL } from 'config/API';

const BlogDetail = () => {
    const { id } = useParams();
    useQuery([`blogs/${id}`], () => axios.get(`BLOGS_URL/${id}`));
    return (
        <section className="blog-detail-page section-b-space ratio2_3">
            <div className="container">
                <Blog />
                <div className="row section-b-space blog-advance"></div>
            </div>
        </section>
    );
};

const Blog = ({ blogData }) => (
    <div className="row">
        <div className="col-sm-12 blog-detail">
            <img
                src="../assets/images/blogs/2.jpg"
                className="blog-image lazyload"
                alt="Blog Detail"
            />
            <h3>
                Also the leap into electronic typesetting, remaining essentially
                unchanged.
            </h3>
            <ul className="post-social">
                <li>25 January 2018</li>
                <li>Posted By : Admin Admin</li>
                <li>
                    <ul className="social-icons">
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-x-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-vk" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-link" />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                Fusce scelerisque augue a viverra semper. Etiam nisi nibh,
                vestibulum quis augue id, imperdiet fringilla dolor. Nulla sed
                nisl vel nisi cursus finibus. Vivamus ut augue nec justo viverra
                laoreet. Nunc efficitur, arcu ac cursus gravida, lorem elit
                commodo urna, id viverra libero tellus non ipsum. Fusce molestie
                ultrices nibh feugiat pretium. Donec pulvinar arcu metus, et
                dapibus odio condimentum id. Quisque malesuada mauris sit amet
                dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus nec
                molestie condimentum, tellus arcu dignissim quam, a gravida nunc
                nulla vel magna. Sed pulvinar tortor et euismod blandit. Proin
                accumsan orci ac nunc fermentum vehicula.
            </p>
            <p>
                Cras quis neque urna. Pellentesque mollis, dui nec elementum
                elementum, ipsum quam suscipit ligula, sit amet lobortis dolor
                sem sed neque. Vivamus consequat est non sodales efficitur.
                Aliquam sodales eleifend sodales. Aliquam auctor ipsum quis nisl
                facilisis, at convallis mauris iaculis. Duis eleifend, magna ac
                convallis blandit, dui dui auctor leo, sed tincidunt nisi mauris
                ut nulla. Praesent porttitor dui ac turpis commodo porttitor.
                Integer ligula nisi, bibendum non sem at, porta condimentum dui.
            </p>
            <p>
                Proin id eleifend diam, euismod dictum nibh. Ut ullamcorper in
                purus at tempor. Nullam mattis risus nec velit semper lobortis.
                Donec accumsan ligula fermentum, ultricies massa eget, cursus
                leo. Suspendisse placerat elit et lacus aliquam, ut elementum
                leo aliquet. Integer ornare, ipsum eu lacinia viverra, lectus
                ipsum scelerisque nisl, nec iaculis leo elit id arcu. Aliquam id
                ante elit. Donec commodo purus eget lacus pharetra, et egestas
                metus blandit. Quisque pellentesque porta urna, sed dictum enim
                viverra a.
            </p>
        </div>
    </div>
);

export default BlogDetail;
