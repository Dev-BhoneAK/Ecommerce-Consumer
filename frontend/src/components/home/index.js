import MainSlider from './MainSlider';
import Banner from './Banner';
import ProductListings from '../common/ProductListings';
import TopCollection from './TopCollection';
import BlogSlider from './BlogSlider';
import BrandSlider from './BrandSlider';
const Home = () => {
    return (
        <>
            <MainSlider />
            <Banner />
            <ProductListings title={'Big Savings'} />
            <ProductListings title={'New Arrivals'} />
            <TopCollection />
            <ProductListings title={'Trending Offers'} />
            <BlogSlider />
            <BrandSlider />
        </>
    );
};
export default Home;
