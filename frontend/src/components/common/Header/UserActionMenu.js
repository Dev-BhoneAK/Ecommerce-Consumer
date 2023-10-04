import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ToggleNavContext } from 'context/toggleNavContext';

const UserActionMenu = () => {
    const { setIsNavOpen } = useContext(ToggleNavContext);

    return (
        <div className="menu-right pull-right">
            <nav className="text-start">
                <div
                    className="toggle-nav"
                    onClick={() => {
                        setIsNavOpen(true);
                    }}
                >
                    <i className="fa fa-bars sidebar-bar" />
                </div>
            </nav>
            <div className="top-header d-block">
                <ul className="header-dropdown">
                    <li className="mobile-wishlist">
                        <Link to="/wish-list">
                            <i className="fa-solid fa-heart" />
                        </Link>
                    </li>
                    <li className="mobile-account">
                        <Link to="/consumer-profile">
                            <i className="fa-solid fa-user" />
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className="icon-nav d-sm-block">
                    {' '}
                    {/* remove d-none currently */}
                    <ul>
                        <li className="onhover-div d-xl-none d-inline-block mobile-search">
                            <div>
                                <i className="fa-solid fa-magnifying-glass" />
                            </div>
                        </li>
                        <li className="onhover-div mobile-setting">
                            <div>
                                <i className="fa-solid fa-gear" />
                            </div>
                        </li>
                        <li className="onhover-div mobile-cart">
                            <div>
                                <i className="fa-solid fa-cart-shopping" />
                            </div>
                            <span className="cart_qty_cls">2</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default UserActionMenu;
