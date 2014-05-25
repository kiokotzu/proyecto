/* declaramos una colección llamada Albums con la funcionalidad de una colleccion de Backbone 
   y le asignamos en modelo Album declarado anteriormente*/

Sfotipy.Collections.Albums = Backbone.Collection.extend({
	model: Sfotipy.Models.Album
})