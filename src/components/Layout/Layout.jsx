import React from 'react';
import PropTypes from 'prop-types';

import HeaderBar from '../HeaderBar';
import Footer from '../Footer';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <HeaderBar />
        </div>
        <div className="appContent">{children}</div>
        <div>
            <Footer />
        </div>
    </div>
);

Layout.defaultProps = {
    children: null
};

export default Layout;
