import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';

class CKEditorDemo extends Component {
    editorChange(){
        // var CHtml= CKEDITOR.instances.WORK_INTRODUCTION.getData();
        // console.log(CHtml);
    }
    render() {
        return (
            <div className="CKEditorDemo">
                {/* <h2>Using CKEditor 4 in React</h2> */}
                <CKEditor
                    data="<p>Hello from CKEditor 4!</p>"
                    onChange={this.editorChange}
                    // readOnly={true}
                    config={{
                        imageUploadUrl:"http://www.baidu.com",
                        indentClasses: ['Indent1', 'Indent2', 'Indent3']
                    }}
                />
            </div>
        );
    }
}

export default CKEditorDemo;