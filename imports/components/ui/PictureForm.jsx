import AutoForm from 'uniforms-unstyled/AutoForm';
import ImageField from './ImageField';
import PostSchema from '../../lib/Schema';
import React from 'react';

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
