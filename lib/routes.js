Router.configure({
    
    layoutTemplate : 'layoutBase'
});

Router.route('/',function(){
       
   this.render('miTemplate'); 
});