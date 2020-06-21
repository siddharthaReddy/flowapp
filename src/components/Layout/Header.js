import React from 'react';
import './Header.css';

const HeaderLayout = (props) => {
    return <div className="button-layout">{props.children}</div>
}

export default HeaderLayout;