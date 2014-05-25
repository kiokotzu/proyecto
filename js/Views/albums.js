/* declaramos una vista llamada Albums con la funcionalidad de una vista de Backbone */

Sfotipy.Views.Albums = Backbone.View.extend({

  /* decimos que la variable el va hacer igual al div donde vamos agregar todos los albumnes */
  el : $('.albumnes'),

  /* compilamos el template handlebars */
  template: Handlebars.compile($('#album-template').html()),

 /* le decimos que al iniciar la vista esté pendiente si se agrega un nuevo album "add"
    y lo rederee para que se visualice en el navegador */
  initialize: function(){
  	this.listenTo(this.collection,"add", this.addOne, this);
  },

  /* en la función render le decimos que haga un ciclo por cada album que encuentre
  y ejecute la función addOne() */
  render: function(){
  	this.collection.forEach(this.addOne, this);
  },

  /* la función addOne lo que hace es declara una nueva variable y la extienda con la funcionalidades
  de la vista Album declarada anteriormente y como modelo le pasamos es que este en ese momento
  y por utlimo le decimos que haga un append() en el elemento "el" y lo renderee para que se visualice
  en el navegador */
  addOne: function(album){
  	var albumView = new Sfotipy.Views.Album({model:album});
  	this.$el.append(albumView.render().el);
  }

});