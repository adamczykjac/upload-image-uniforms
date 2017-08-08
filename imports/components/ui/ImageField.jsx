import React        from 'react';
import classnames   from 'classnames';
import connectField from 'uniforms/connectField';
import Dropzone     from 'react-dropzone';
import Images       from '../../lib/Images'

class ImageField extends React.Component {
  onDropHandler(files) {
    console.log(files);
    Images.insert({
      file: files[0],
      fileName: "pic.jpg",
      streams: 'dynamic',
      chunkSize: 'dynamic',
      onStart: function () {
        console.log("Uploading");
      },
      onUploaded: function (error, fileObj) {
        if (error) {
          console.log('Error during upload: ' + error);
        } else {
          console.log('File "' + fileObj.name + '" successfully uploaded');
        }
      },
    })
    // window.URL.revokeObjectURL(file.preview);
  }

  render() {
    let dropzoneRef;

    return (
      <div>
        <Dropzone ref={(node) => { dropzoneRef = node; }} onDrop={ (files) => this.onDropHandler(files) }>
          <p>Drop files here.</p>
        </Dropzone>
        <button type="button" onClick={() => { dropzoneRef.open() }}>
          Open File Dialog
        </button>
      </div>
    )
  }
};

export default ImageField;
