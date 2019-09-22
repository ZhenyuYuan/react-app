import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';

class CKEditorDemo extends Component {
    render() {
        return (
            <div className="CKEditorDemo">
                <h2>Using CKEditor 4 in React</h2>
                <CKEditor
                    data="<p>Hello from CKEditor 4!</p>"
                />
            </div>
        );
    }
}

export default CKEditorDemo;