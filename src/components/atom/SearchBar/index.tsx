import React, { Component } from 'react';
import {TextField, Button} from '@material-ui/core';

import style from './searchBar.scss';

interface IProps {
    search(search: string): any;
}

interface IState {
    searchField: string;
}

class SearchBar extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            searchField: ''
        }

        this.onSearchFieldChanged = this.onSearchFieldChanged.bind(this);
        this.formSubmission = this.formSubmission.bind(this);
    }

    onSearchFieldChanged (e: any) {
        if(e.target != null && e.target.value != null) {
            this.setState({searchField: e.target.value});
        }
    }

    formSubmission(e: any) {
        e.preventDefault();
        this.props.search(this.state.searchField);
    }

    render() {
        return (
            <form className={style.searchBar} noValidate autoComplete="off" onSubmit={this.formSubmission}>
                <TextField className={style.input} id="standard-basic" onChange={this.onSearchFieldChanged}
                label="Search by City"aria-describedby="my-helper-text"/>
                <Button className={style.searchButton} variant="contained" color="primary"
                onClick={() => this.props.search(this.state.searchField)}>
                    Search
                </Button>
            </form>
        );
    }
}

export default SearchBar;