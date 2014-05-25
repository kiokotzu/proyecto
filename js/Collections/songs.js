/* declaramos una colección llamada Songs con la funcionalidad de una colleccion de Backbone 
   y le asignamos en modelo Song declarado anteriormente*/

Sfotipy.Collections.Songs = Backbone.Collection.extend({
  model: Sfotipy.Models.Song
});