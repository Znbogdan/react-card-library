import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

import ColorPicker from './colorpicker.jsx';

import './noteEditor.less';

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            title: '',
            text: '',
            color: '#FFFFFF',
            link: ''
        };
    },

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    },

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    },
    handleColorChange(color) {
        this.setState({ color });
    },
    handleLinkChange(event) {
        this.setState({ link: event.target.value });
    },
    handleChange: function(e){
        console.log(e.target.value)
    },
    _openFileDialog: function(){
        var fileUploadDom = React.findDOMNode(this.refs.fileUpload);
        fileUploadDom.click();
    },
    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color,
            link: this.state.link
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '', title: '', color: '#FFFFFF', link: '' });
    },
    /*    <p style={{"text-align" : "center"}}> OR</p>
     <FlatButton label="Choose file" labelPosition="before" onClick={this._openFileDialog}/>
     <input ref="fileUpload" type="file" style={{"display" : "none"}} onchange={this._handleChange} /> */
    render() {
        return (
            <div className='NoteEditor'>
                <TextField
                placeholder='Enter title'
                fullWidth={true}
                value={this.state.title}
                onChange={this.handleTitleChange}
            />
                <TextField
                    placeholder='Enter link'
                    fullWidth={true}
                    value={this.state.link}
                    onChange={this.handleLinkChange}
                />

                <TextField
                    placeholder='Enter note text'
                    rows={5}
                    fullWidth={true}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className='NoteEditor__footer'>
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
                    <RaisedButton
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd}
                        label="Add"
                    />
                </div>
            </div>
        );
    }
});

export default NoteEditor;