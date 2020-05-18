import React, { Component } from 'react';
import Moment from 'moment';
import {
    Button,
} from '@material-ui/core';

import style from './gridItemDialogue.scss';
import { currencyFormat } from '../../../shared/helper';

interface IProps {
    name: string;
    imageUrl: string;
    url: string;
    date: string;
    info: string;
    startDateTime: string;
    endDateTime: string;
    pleaseNote: string;
    priceRanges: [];
}

class GridItemDialogue extends Component<IProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={style.gridItem}>
                <div className={style.itemHeader}>{this.props.name}</div>
                <div className={style.popUp}>
                    <div className={style.left}>
                        <img className={style.itemPhoto} src={this.props.imageUrl}/>
                        <div className={style.itemParagraph}>{this.props.info}</div>
                    </div>
                    <div className={style.right}>
                        <Button variant="contained" color="primary" href={this.props.url}>
                            Visit website
                        </Button>
                        <div className={`${style.box} ${style.ticketSales}`}>
                            <div className={style.ticketSale}>
                                <span className={style.header}>Ticket Sales Start</span>
                                {Moment(this.props.startDateTime).format('Do MMM yyyy')}
                            </div>
                            <div className={style.ticketSale}>
                                <span className={style.header}>Ticket Sales Ends</span>
                                {Moment(this.props.endDateTime).format('Do MMM yyyy')}
                            </div>
                        </div>
                        <div className={style.box}>{this.props.pleaseNote}</div>
                        <div className={`${style.box} ${style.prices}`}>
                            <div className={style.header}>Ticket Prices</div>
                            <div className={style.priceList}>
                                {this.props.priceRanges && (
                                    <div className={`${style.box} ${style.priceRange}`}>{this.props.priceRanges.map((price, i) => 
                                    <div key={i}>{currencyFormat.format(price.min)} to {currencyFormat.format(price.max)}</div>)}</div>
                                )}
                                {!this.props.priceRanges && (
                                    <div>To be announced</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridItemDialogue;