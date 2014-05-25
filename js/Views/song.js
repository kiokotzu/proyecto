/* declaramos una vista llamada Song con la funcionalidad de una vista de Backbone */

Sfotipy.Views.Song = Backbone.View.extend({

	/* le decimos que tipo de elemento va hacer y que clases va terner */
  tagName: 'li',
  className:'item border-bottom',


  /* le declaramos un evento, en este caso click y llamara a una función select */
  events:{
  	'click .action.icon-add': 'select'
  },


  /* compilamos el template handlebars */
  template: Handlebars.compile($('#song-template').html()),


  /* le decimos que al iniciar la vista esté pendiente de cualquier cambio "change"
    y lo rederee para que se visualice en el navegador */
  initialize: function(){
  	this.listenTo(this.model, "change", this.render, this);
  },

  /* en la función render le pasamos el template para que lo pinte en el navegador */
  render: function(){
  	var song = this.model.toJSON(),
  	    html = this.template(song);
  	this.$el.html(html);
  	return this;
  },

  
	select: function(){
		Sfotipy.app.player.model.set(this.model.toJSON());
		return false;
	}

});