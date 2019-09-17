module.exports = (app) => {
    const objects = require('../controller/object.controller.js');
    const Object = require('../models/object.model.js');
    // Create a new Note
    app.post('/object', objects.create);
        // console.log("Create API end point");
        // var a = JSON.parse(req.body);
        // console.log(a);
        // objects.create(a);
    

    // // Retrieve all Notes
    // app.get('/notes', object.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', object.findOne);

    // // Update a Note with noteId
    // app.put('/notes/:noteId', objects.update);

    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', o.delete);
}