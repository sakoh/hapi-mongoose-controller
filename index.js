module.exports = function(object) {

  var name = object.model.modelName.toLowerCase();

  var emberize = object.emberize ? object.emberize : false;

  return {

    index: function(request, reply) {

      object.model
        .find()
        .exec(function(err, models){
          var response = {};

          if(err) reply(err);

          if(emberize)
            response[name + 's'] = models;
          else
            response = models;

          reply(response);

        });

    },

    show: function(request, reply) {
      object.model
        .find({_id: request.params.id})
        .exec(function(err, model){
          var response = {};

          if(err) reply(err);

          if(emberize)
            response[name] = model;
          else
            response = model;

          reply(response);
      });

    },

    create: function(request, reply) {

      var data = request.payload[name];

      object.model.create(data, function(err, model){
        var response = {};

        if(err) reply(err);

        if(emberize)
          response[name] = model;
        else
          response = model;

        reply(response);

      });
    },

    update: function(request, reply) {

      var data = request.payload[name];

      object.model
        .update({_id: request.params.id}, { $set: data })
        .exec(function(err, model){
          var response = {};

          if(err) reply(err);

          if(emberize)
            response[name] = model;
          else
            response = model;

          reply(response);

        });

    },

    destroy: function(request, reply) {
      object.model
        .remove({_id: request.params.id})
        .exec(function(err, model){

        if(err) reply(err);

        reply(name + " has been deleted");
      });
    }

  };


}
