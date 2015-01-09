var Hapi = require('hapi'),
	resource = require('hapi-resource'),
	mongoose = require('mongoose'),
	controller = require('..');


mongoose.connect('mongodb://localhost/test');

var postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true }
});

var Post = mongoose.model('Post', postSchema);

var PostController = controller({
  model: Post,
  emberize: true
});

var server = new Hapi.Server();


server.connection({ port: 3000 });

server.route(
	resource({
		name: 'post',
		controller: PostController
	})
);

server.start(function () {
	console.log('app listening on port 3000');
});
