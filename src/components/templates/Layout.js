import React from 'react';

const Layout = ({ sidebar, content }) => (
    <div>
        <aside id="sidebar">{sidebar}</aside>
        <main id="main">{content}</main>
    </div>
)

export default Layout;