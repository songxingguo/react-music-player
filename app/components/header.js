import React from 'react';
import './header.less';

// import { logo } from './logo.png';

let Header = React.createClass({
    render() {
        return (
            <div className="components-header row">
                <img src="./logo.png" width="40" alt="23" className="-col-auto" />
                <h1 className="caption">React Music Player</h1>
            </div>
        );
    }
});

export default Header;
