import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('usuarios',function(){
    
    return Meteor.users.find();
});