import { Link } from 'react-router-dom';

const MainLogo = () => {
    return (
        <div className="menu-left">
            <div className="brand-logo">
                <Link to="/">
                    <img
                        src="/company-logo.png"
                        className="img-fluid lazyload"
                        alt="Company Logo"
                    />
                </Link>
            </div>
        </div>
    );
};

export default MainLogo;
