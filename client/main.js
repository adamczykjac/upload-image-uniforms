import PostForm from '../imports/components/ui/PostForm';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


Meteor.startup(() => {
  render(<PostForm />, document.getElementById('render-target'));
});
