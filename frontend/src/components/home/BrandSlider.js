import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { BRANDS_URL } from 'config/API';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1367,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};

const BrandSlider = () => {
    const { data, isLoading } = useQuery(['brands'], () =>
        axios.get(BRANDS_URL)
    );

    if (isLoading) return 'Loading...';
    return (
        <section className="section-b-space bg-light brand-logos">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="slide-6 no-arrow">
                            <Slider {...settings}>
                                {data?.data.map((brand) => (
                                    <Brand brandData={brand} key={brand._id} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Brand = ({ brandData }) => (
    <div>
        <div className="logo-block">
            <Link to="">
                <img src={`assets/${brandData.logo}`} alt={brandData.name} />
            </Link>
        </div>
    </div>
);
export default BrandSlider;
