/* declaramos una vista llamada Player con la funcionalidad de una vista de Backbone */

Sfotipy.Views.Player = Backbone.View.extend({

  /* decimos que la variable el va hacer igual al div donde vamos agregar todos los albumnes */
  el: $('.reprod'),

  /* compilamos el template handlebars */
  template: Handlebars.compile($('#player-template').html()),

  /* le decimos que al iniciar la vista esté pendiente si cambia algo en un album "change"
    y lo rederee para que se visualice en el navegador */
  initialize: function(){
  	this.listenTo(this.model, "change", this.render);
  },

  /* la funcion render cada vez que se llama cambia el player en el navegador */
  render: function(){
  	var song = this.model.toJSON();
  	this.$el.html(this.template(song));
  }
});