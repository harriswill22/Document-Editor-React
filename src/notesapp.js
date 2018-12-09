import React, {Component} from 'react';
import EditorWindow from './Editorwindow'
import NotesList from './noteslist';
import SearchBar from './searchbar'

class NotesApp extends Component {
    constructor(props){
        super(props)
        this.state = { 
        currentNoteId: 1003,
        searchTerm: '',
        notes: [
            {id:1001,
            title:'the note',
            content:'how was your day'},

            {id:1002,
            title:'the note',
            content:'how was your day'},
            
            {id:1003,
            title:'the note',
            content:'how was your day'}

            ]

        }
    }


    render() { 
        return ( <div>
            <SearchBar
            searchTerm={this.state.searchTerm}
            handleInput={this._setSearchTerm}
            />
            <NotesList
            
            />
            <EditorWindow/>
            </div> );
    }

    _setSearchTerm = (term) =>{
        this.setState({
            searchTerm: term
        });
    }










}






export default NotesApp;