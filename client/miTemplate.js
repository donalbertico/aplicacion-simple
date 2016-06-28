Template.miTemplate.helpers({
    
    hola : function(){
        
        return "hola mundo";
    },
    
    usuarios : function(){
        
        return Meteor.users.find();
    }
    
});