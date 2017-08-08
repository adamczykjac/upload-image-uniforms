import PictureForm from '../imports/components/ui/PictureForm';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


Meteor.startup(() => {
  render(<PictureForm />, document.getElementById('render-target'));
});
