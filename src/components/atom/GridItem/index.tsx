import React, { Component } from 'react';
import Moment from 'moment';

import style from './gridItem.scss';

interface IProps {
    index: number;
    openDialogue(i: number): any;
    name: string;
    imageUrl: string;
    date: string;
}

class GridItem extends Component<IProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={`${style.gridItem} ${style.clickable}`} onClick={() => this.props.openDialogue(this.props.index)}>
                <div className={style.itemHeader}>{this.props.name}</div>
                <img className={style.itemPhoto} src={this.props.imageUrl}/>
                <div className={style.itemParagraph}>{Moment(this.props.date).format('Do MMM yyyy') }</div>
            </div>
        );
    }
}

export default GridItem;