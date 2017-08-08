[MeteorJS](http://meteor.com) project aiming to integrate `ostrio:files` package
 with `vazco:uniforms` form builder.

## Running the project
Assuming you have MeteorJS already installed:
```
$ git clone https://github.com/adamczykjac/upload-image-uniforms.git
$ cd upload-image-uniforms
$ meteor npm install
$ meteor
```

## What it does?

React Component from `imports/components/ui/ImageField.jsx` is assigned as the one to be rendered, when a `picture` field occurs in the `imports/lib/Schema.js`:

```
import SimpleSchema2 from 'simpl-schema';
import ImageField from '../components/ui/ImageField'

export default sampleSchema = new SimpleSchema2({
    picture: {
        type: String,
        defaultValue: 1,
        uniforms: ImageField
    }
})
```

Component is handling then a basic server upload:
```
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
    }
  })
}
```

The whole thing is wrapped within another simple React Component `imports/components/ui/PictureForm.jsx`, which handles the data put into the form:
```
export default class PictureForm extends React.Component {
  handleForm(data) {
    console.log(data);
  }

  render() {
    return (
      <AutoForm schema={ PostSchema } onSubmit={ (data) => this.handleForm(data) } />
    )
  }
};
```
