module.exports = function(object) {

  return {

    index: function(request, reply) {

      object.model
        .find()
        .exec(function(err, models){
          var response = {};

          if(err) reply(err);

          response[object.name + 's'] = models

          reply(response);

        });

    },

    show: function(request, reply) {
      object.model
        .find({_id: request.params.id})
        .exec(function(err, model){
          var response = {};

          if(err) reply(err);

          response[object.name] = model;

          reply(response);
      });

    },

    create: function(request, reply) {

      var data = request.payload[object.name];

      object.model.create(data, function(err, model){
        var response = {};

        if(err) reply(err);

        response[object.name] = model;

        reply(response);

      });
    },

    update: function(request, reply) {

      var data = request.payload[object.name];

      object.model
        .update({_id: request.params.id}, { $set: data })
        .exec(function(err, model){
          var response = {};

          if(err) reply(err);

          response[object.name] = model;

          reply(response);

        });

    },

    destroy: function(request, reply) {
      object.model
        .remove({_id: request.params.id})
        .exec(function(err, model){

        if(err) reply(err);

        reply(object.name + " has been deleted");
      });
    }

  };


}
