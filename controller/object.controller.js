
exports.create = (req,res) => {
    const Object = require('../models/object.model.js');
    var a= JSON.parse(req.body);
    console.log(a);

    if(!a.url) {
        return res.status(400).send({
            message: "URL required"
        });
    }
    var query = {url:a.url},
    update = { $push: {time: a.time}},
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

    Object.findOneAndUpdate(query, update, options, function(error, result) {
    if (error) return;
        console.log("Inserted/Updated document: "+result);
    });

};