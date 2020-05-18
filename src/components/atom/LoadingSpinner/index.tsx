import React, { Component } from 'react';

import style from './loadingSpinner.scss';

class LoadingSpinner extends Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={style.spinner}></div>
        );
    }
}

export default LoadingSpinner;