// Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
    </nav>
    {children}
  </>
);

export default Layout;