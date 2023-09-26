import React from 'react';

const List = () => {
    return (
        <section class="brand-section brand-padding grid-brand ratio2_3">
            <div class="container">
                <div class="row zoom-gallery">
                    <div class="isotopeSelector filter fashion col-lg-3 col-sm-6">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default List;
