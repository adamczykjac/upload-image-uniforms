import React        from 'react';
import classnames   from 'classnames';
import connectField from 'uniforms/connectField';
import Dropzone     from 'react-dropzone';
import Images       from '../../lib/Images'

class ImageField extends React.Component {
  onDrop(files, onFieldChangeHandler) {
    Images.insert({
      file: files[0],
      streams: 'dynamic',
      chunkSize: 'dynamic',
      onStart: function () {
        console.log("Uploading...");
      },
      onUploaded: function (error, file) {
        if (error) {
          console.log('Error during upload: ' + error);
        } else {
          onFieldChangeHandler(file._id);
          console.log('File "' + file.name + '" successfully uploaded');
        }
      }
    })
  }

  render() {
    let dropzoneRef;
    let capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
      <section>
        <div>{ capitalizeFirstLetter(this.props.name) }</div>
        <div>
          <Dropzone ref={(node) => { dropzoneRef = node; }}
            onDrop={ (files) => this.onDrop(files, this.props.onChange) }>
            <p>Drop picture or click here to choose it.</p>
          </Dropzone>
        </div>
      </section>
    )
  }
};

export default connectField(ImageField);
