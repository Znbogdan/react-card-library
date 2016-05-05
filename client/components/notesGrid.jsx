import React from 'react';
import Note from './note.jsx';

import Masonry from 'react-masonry-component';

import './notesGrid.less';

const NotesGrid = React.createClass({
    render() {
        const onNoteDelete = this.props.onNoteDelete;

        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true,
            transitionDuration: '1.2s',
            perPage: 10
        };

        return (
            <Masonry
                className='NotesGrid'
                options={masonryOptions}
            >
                {
                    this.props.notes.map(note =>
                    <Note
                        disableImagesLoaded={false}
                        key={note.id}
                        title={note.title}
                        onDelete={this.props.onNoteDelete.bind(null, note)}
                        color={note.color}
                    >
                        <img className="imageNotes" src={"" + note.link}/>
                        <p
                            className="description">
                            {note.text}
                        </p>
                    </Note>
                        )
                    }
            </Masonry>
        );
    }
});

export default NotesGrid;
