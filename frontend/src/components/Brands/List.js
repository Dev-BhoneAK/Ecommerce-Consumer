import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { BRANDS_URL } from 'config/API';

const List = () => {
    console.log('brands url ', BRANDS_URL);
    const { data, isLoading, error } = useQuery(['brands'], () =>
        axios.get(BRANDS_URL)
    );
    // const { isLoading, error, data } = useQuery(['repoData'], () =>
    //     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
    //         (res) => res.json()
    //     )
    // );

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <section class="brand-section brand-padding grid-brand ratio2_3">
            <div class="container">
                <div class="row zoom-gallery">
                    {data?.data.map((brand) => (
                        <div class="isotopeSelector filter fashion col-lg-3 col-sm-6">
                            <div class="overlay">
                                <div class="border-brand">
                                    {/* <a href="../assets/images/portfolio/grid/1.jpg"> */}
                                    <div class="overlay-background"></div>
                                    <img
                                        src={`assets${brand.logo}`}
                                        class="img-fluid lazyload bg-img"
                                        alt="apple"
                                    />
                                    {/* </a> */}
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div class="isotopeSelector filter fashion col-lg-3 col-sm-6">
                        <div class="overlay">
                            <div class="border-brand">
                                <a href="../assets/images/portfolio/grid/1.jpg">
                                    <div class="overlay-background"></div>
                                    <img
                                        src="assets/images/brands/jbl.png"
                                        class="img-fluid lazyload bg-img"
                                        alt="apple"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="isotopeSelector filter fashion col-lg-3 col-sm-6">
                        <div class="overlay">
                            <div class="border-brand">
                                <a href="../assets/images/portfolio/grid/1.jpg">
                                    <div class="overlay-background"></div>
                                    <img
                                        src="assets/images/brands/casestudi.png"
                                        class="img-fluid lazyload bg-img"
                                        alt="apple"
                                    />
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default List;
