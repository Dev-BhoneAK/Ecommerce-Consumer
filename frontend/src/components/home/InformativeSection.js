import BlogSlider from './BlogSlider';
import BrandSlider from './BrandSlider';
import SectionTitle from './SectionTitle';

function InformativeSection() {
    return (
        <>
            <BlogSlider sectionTitle={<SectionTitle title={'Blogs'} />} />
            <BrandSlider />
        </>
    );
}

export default InformativeSection;
