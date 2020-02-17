import React from 'react';
import 'editor.md/editormd.min.js';
import 'editor.md/css/editormd.min.css';


var editor;


class EditorMD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {
        editor = editormd("editormd", {
            height: '300px',
            syncScrolling: "single",
        });
    }

    render() {
        return (
            <div id="editor">
                <textarea>### Hello Editor.md !</textarea>
            </div>
        );
    }
}

export default EditorMD;