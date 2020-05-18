import React, { Component } from 'react';

import style from './header.scss';

class Header extends Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
        <h1 className={style.header}>
            Ticket Master Music
        </h1>
        );
    }
}

export default Header;