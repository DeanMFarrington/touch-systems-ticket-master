import React, { Component } from 'react';
import {Dialog} from '@material-ui/core';

import style from './results.scss';
import GridItem from '../../atom/GridItem';
import GridItemDialogue from '../../atom/GridItemDialogue';

interface IProps {
    events: [];
    openDialogue(i: number): any;
    closeDialogue(): any;
    dialogueOpen: boolean;
    dialogueIndex: number;
}

class Results extends Component<IProps, {}> {
    constructor(props: any) {
        super(props);
    }

    findPhoto(element: any, index: any, array: any) { 
        return (element.ratio == "4_3"); 
     }

    render() {
        return (
            <>
            <div className={style.grid}>
                {this.props.events.map((item, i) => 
                    <GridItem key={i} index={i} openDialogue={this.props.openDialogue} name={item.name} 
                    imageUrl={item.images.filter(this.findPhoto)[0].url} date={item.dates.start.localDate}/>
                    )
                }
            </div>
            <Dialog fullWidth open={this.props.dialogueOpen} onClose={() => this.props.closeDialogue()}>
                <GridItemDialogue {...this.props.events[this.props.dialogueIndex]}
                imageUrl={this.props.events[this.props.dialogueIndex].images.filter(this.findPhoto)[0].url}
                startDateTime={this.props.events[this.props.dialogueIndex].sales.public.startDateTime}
                endDateTime={this.props.events[this.props.dialogueIndex].sales.public.endDateTime}
                />
            </Dialog>
            </>
        );
    }
}

export default Results;