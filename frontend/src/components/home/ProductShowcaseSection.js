import SectionTitle from './SectionTitle';
import TopCollection from './TopCollection';
import ProductListings from '../common/ProductListings';

function ProductShowcaseSection() {
    return (
        <>
            <ProductListings
                sectionTitle={<SectionTitle title={'Big Savings'} />}
            />
            <TopCollection />
            <ProductListings
                sectionTitle={<SectionTitle title={'New Arrivals'} />}
            />
            <ProductListings
                sectionTitle={<SectionTitle title={'Trending Offers'} />}
            />
        </>
    );
}

export default ProductShowcaseSection;
