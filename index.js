module.exports = function(model) {

  return {

    index: function(request, reply) {

      model
        .find()
        .exec(function(err, models){
          var response = {};

          if(err) reply(err);

          response[model.modelName + 's'] = models

          reply(response);

        });

    },

    show: function(request, reply) {
      model
        .find({_id: request.params.id})
        .exec(function(err, model){
          var response = {};

          if(err) reply(err);

          response[model.modelName] = model;

          reply(response);
      });

    },

    create: function(request, reply) {

      var data = request.payload[model.modelName];

      model.create(data, function(err, model){
        var response = {};

        if(err) reply(err);

        response[model.modelName] = model;

        reply(response);

      });
    },

    update: function(request, reply) {

      var data = request.payload[model.modelName];

      model
        .update({_id: request.params.id}, { $set: data })
        .exec(function(err, model){
          var response = {};

          if(err) reply(err);

          response[model.modelName] = model;

          reply(response);

        });

    },

    destroy: function(request, reply) {
      model
        .remove({_id: request.params.id})
        .exec(function(err, model){

        if(err) reply(err);

        reply(model.modelName + " has been deleted");
      });
    }

  };


}
