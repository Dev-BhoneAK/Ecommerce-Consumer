import { Route, Routes } from 'react-router-dom';

import Home from 'components/Home';
import ProductDetail from 'components/ProductDetail';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Brands from 'components/Brands/List';
import Blogs from 'components/Blogs/List';
import BlogDetail from 'components/Blogs/Detail';
import PageNotFound from 'components/common/PageNotFound';
import LoadingSkeleton from 'components/ProductDetail/LoadingSkeleton';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<BlogDetail />} />
                <Route path="*" element={<PageNotFound />} />
                {/*<Route path="/product/:id" element={<LoadingSkeleton />} />*/}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
