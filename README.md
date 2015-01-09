##USAGE

A reusable controller module for CRUD operations between Hapi.js and Ember Data

For example:

```javascript
var controller = require('hapi-ember-mongoose-controller');

var PostController = controller({
  model: Post
});

```

Instead of:

```javascript
PostController = {

  index: function(request, reply) {
    ....
  },

  show: function(request, reply) {
    .....
  },

  create: function(request, reply) {
    .....
  },  
  
  update: function(request, reply) {
    .....
  }, 
  
  delete: function(request, reply) {
    .....
  },  
}

```

###Use with Ember Data

For use with Ember Data, you will have to set the `emberize` to `true`, which by default is false. The reason why is to fit with Ember REST API conventions, which are more strictly defined than Angular.js for example.

With `emberize` being `false`, the JSON passed is:

```javascript
[
  {
    "_id": "5483d244f673f76109b94e9b",
    "title": "Hello Everyone",
    "body": "How's everyone doing now that the thing is changed.",
    "__v": 0
  },  
  {
    "_id": "548bb1c80b3cf5dd02427434",
    "title": "Testing the new payload",
    "body": "tell me what you think.",
    "__v": 0
  }
]

```

With `emberize` set to `true`:

```javascript

{
  posts: [
    {
      "_id": "5483d244f673f76109b94e9b",
      "title": "Hello Everyone",
      "body": "How's everyone doing now that the thing is changed.",
      "__v": 0
    },  
    {
      "_id": "548bb1c80b3cf5dd02427434",
      "title": "Testing the new payload",
      "body": "tell me what you think.",
      "__v": 0
    }
  ]
}

```
