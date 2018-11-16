import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Notes.css';

const URL = 'https://fe-notes.herokuapp.com/note';

export default class OneNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: [],
            title: 'Yo',
            textBody: 'Yo Yo Yo'
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // not sure if this id will be id or _id!
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
            .get(`${URL}/get/${id}`)
            .then(response => {
                this.setState(() => ({ note: response.data }));
            })
            .catch(error => {
                console.error(error);
            });
    };

    render() {
        return (
                <div className="menu-container">
                    <div className="link-container">
                        <Link to="/" className="link">
                            edit
                        </Link>
                        <Link to="/" className="link">
                            delete
                        </Link>
                    </div>
                    <div className="note-view">
                        <h2 className="your-notes">{this.state.title}</h2>
                        <p>{this.state.textBody}</p>
                    </div>
                </div>
        );
    }
};