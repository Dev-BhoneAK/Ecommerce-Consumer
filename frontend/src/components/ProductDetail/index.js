import React from 'react';
import Summary from './Summary';
import AdditionalInformation from './AdditionalInformation';
import ProductListings from '../common/ProductListings';
const ProductDetail = () => {
    return (
        <section className="section-b-space">
            <Summary />
            <AdditionalInformation />
            <ProductListings title={'Related Products'} />
        </section>
    );
};
export default ProductDetail;
