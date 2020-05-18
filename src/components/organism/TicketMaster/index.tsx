import React from 'react';
import axios from 'axios'

import style from './ticketMaster.scss';
import { ticketMasterAPIKey, segmentTypeMusic, developmentMode } from '../../../shared/variables';
import { dataSet } from '../../../shared/exampleData';
import Header from '../../atom/Header';
import LoadingSpinner from '../../atom/LoadingSpinner';
import SearchBar from '../../atom/SearchBar';
import Results from '../../molecule/Results';

interface IState {
    items: any;
    loaded: boolean;
    dialogueOpen: boolean;
    dialogueIndex: number;
    errorMessage: string;
}

class TicketMaster extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            items: [],
            loaded: false,
            dialogueOpen: false,
            dialogueIndex: 0,
            errorMessage: ''
        }

        this.openDialogue = this.openDialogue.bind(this);
        this.closeDialogue = this.closeDialogue.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        this.getTicketMasterData();
    }

    getTicketMasterData() {
        if(developmentMode) {
            this.setState({items: dataSet, loaded: true});
        }
        else {
            this.search('Birmingham');
        }
    }

     openDialogue(index: number) {
         this.setState({dialogueOpen: true, dialogueIndex: index});
     }

     closeDialogue() {
         this.setState({dialogueOpen: false});
     }

     search(searchField: string) {
        this.setState({loaded: false});
        axios.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${ticketMasterAPIKey}&locale=*&city=${searchField}&countryCode=GB&segmentId=${segmentTypeMusic}`)
        .then(res => {
            const items = res.data;
            if(items.page.totalElements > 0) {
                this.setState({ items, loaded: true, errorMessage: ''});
            }
            else {
                this.setState({errorMessage: "Failed to retrieve new data.", loaded: true})
            }
        })
     }
     
    render() {
        var {loaded, items, errorMessage} = this.state;

        return (
            <div>
                <Header/>
                <SearchBar search={this.search} />

                {errorMessage && (
                    <div className={style.error}>{errorMessage}</div>
                )}

                {!loaded && (
                    <LoadingSpinner/>
                )}

                {loaded && (
                    <Results {...this.state} events={items._embedded.events}
                    openDialogue={this.openDialogue} closeDialogue={this.closeDialogue} />
                )}
            </div>
        );
    }
}

export default TicketMaster;