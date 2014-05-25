/* declaramos una vista llamada Album con la funcionalidad de una vista de Backbone */

Sfotipy.Views.Album = Backbone.View.extend({

 /* le decimos que tipo de elemento va hacer y que clases va terner */
  tagName: 'article',
  className: 'cancion',

 /* le declaramos un evento, en este caso click y llamara a una función navigate */
  events: {
    'click': 'navigate'
  },

  /* compilamos el template handlebars */
  template: Handlebars.compile($("#album-template").html()),

 /* le decimos que al iniciar la vista esté pendiente de cualquier cambio "change"
    y lo rederee para que se visualice en el navegador */
  initialize: function () {
    this.listenTo(this.model, "change", this.render, this);
  },

  /* en la función render le pasamos el template para que lo pinte en el navegador */
  render: function () {
    var album = this.model.toJSON(),
        html = this.template(album);
    this.$el.html(html);
    return this;
  },
  
  /* en la funcion navigate depende del archivo Router.js para cambiar la información
  según la url,  con trigger:true le estamos dicendo de rederee la vista y estuviera el false
  solo cambiaria la url pero no pintaria nada en el navegador */  
  navigate: function () {
    Sfotipy.app.navigate("album/" + this.model.get("name"), { trigger: true });
  }

});

