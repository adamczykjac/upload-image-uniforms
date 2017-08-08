import AutoField from 'uniforms-unstyled/AutoField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import ImageField from './ImageField';
import Images from '../../lib/Images';
import PostSchema from '../../lib/Schema';
import React from 'react';
import SubmitField from 'uniforms-unstyled/SubmitField';

export default class PostForm extends React.Component {
  handleForm(data) {
    console.log(data);
  }

  render() {
    return (
      <div>
        <AutoForm schema={ PostSchema } onSubmit={ (data) => this.handleForm(data) } />
      </div>
    )
  }
};
