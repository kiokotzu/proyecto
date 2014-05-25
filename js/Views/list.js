/* declaramos una vista llamada List con la funcionalidad de una vista de Backbone */

Sfotipy.Views.List = Backbone.View.extend({

	/* decimos que la variable el va hacer igual al div donde vamos agregar todos los albumnes */
	el: $('.canciones > ul'),


     /* le decimos que al iniciar la vista esté pendiente si se agrega un nuevo album "add"
        y lo rederee para que se visualice en el navegador y que si se realiza u reset rendere el elemento 
        de ese momento*/
	initialize: function(){
		this.listenTo(this.collection, "add", this.addOne, this);
		this.listenTo(this.collection, "reset", this.render, this);
	},

	render: function(){
		this.$el.empty();
		this.addAll();
	},

	addOne: function(song){
		var songView = new Sfotipy.Views.Song({model: song});
		this.$el.append(songView.render().el);
	},

	addAll: function(){
		this.collection.forEach(this.addOne, this);
	}
});