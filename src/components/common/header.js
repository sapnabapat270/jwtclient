import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';

const Header = () => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Dashboard</IndexLink>
      {" | "}
      <Link to="/register" activeClassName="active">Register</Link>
    </nav>
  );
};

export default Header;
