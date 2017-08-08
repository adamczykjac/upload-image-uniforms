import React        from 'react';
import classnames   from 'classnames';
import connectField from 'uniforms/connectField';
import Dropzone     from 'react-dropzone';
import Images       from '../../lib/Images'

class ImageField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadStatus: 'idle',
      picturePath: null
    }
  }

  getImageLink() {
    return Images.findOne().link();
  }

  onDrop(files, fieldContext) {
    Images.insert({
      file: files[0],
      streams: 'dynamic',
      chunkSize: 'dynamic',
      onStart: function () {
        console.log("Uploading...");
        fieldContext.setState({
          uploadStatus: 'uploading',
        });
      },
      onUploaded: function (error, file) {
        if (error) {
          console.log('Error during upload: ' + error);
          fieldContext.setState({
            uploadStatus: 'failed',
          });
        } else {
          console.log(file);
          fieldContext.props.onChange(file._id);
          console.log('File "' + file.name + '" successfully uploaded');
          fieldContext.setState({
            uploadStatus: 'uploaded',
            picturePath: file.path
          });
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
            onDrop={ (files) => this.onDrop(files, this) }>
            { this.state.uploadStatus == 'idle' &&
              <p>Drop picture or click here to choose it.</p>
            }
            { this.state.uploadStatus == 'uploading' &&
              <p>Uploading...</p>
            }
            { this.state.uploadStatus == 'uploaded' &&
              <img src={ this.getImageLink() } />
            }
          </Dropzone>
        </div>
      </section>
    );
  }
};

export default connectField(ImageField);
