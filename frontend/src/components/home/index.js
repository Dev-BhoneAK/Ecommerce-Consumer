import SectionTitle from './SectionTitle';
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
            <ProductListings
                sectionTitle={<SectionTitle title={'Big Savings'} />}
            />
            <ProductListings
                sectionTitle={<SectionTitle title={'New Arrivals'} />}
            />
            <TopCollection />
            <ProductListings
                sectionTitle={<SectionTitle title={'Trending Offers'} />}
            />
            <BlogSlider sectionTitle={<SectionTitle title={'Blogs'} />} />
            <BrandSlider />
        </>
    );
};
export default Home;
