import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { BRANDS_URL } from 'config/API';

const BrandList = () => {
    console.log('brands url ', BRANDS_URL);
    const { data, isLoading, error } = useQuery(['brands'], () =>
        axios.get(BRANDS_URL)
    );

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error;

    return (
        <section className="brand-section brand-padding grid-brand ratio2_3">
            <div className="container">
                <div className="row zoom-gallery">
                    {data?.data.map((brand) => (
                        <BrandCard brandData={brand} key={brand._id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const BrandCard = ({ brandData }) => (
    <div className="isotopeSelector filter fashion col-lg-3 col-sm-6">
        <div className="overlay">
            <div className="border-brand">
                {/* <a href="../assets/images/portfolio/grid/1.jpg"> */}
                <div className="overlay-background"></div>
                <img
                    src={`assets${brandData.logo}`}
                    className="img-fluid lazyload bg-img"
                    alt={brandData.name}
                />
                {/* </a> */}
            </div>
        </div>
    </div>
);

export default BrandList;
