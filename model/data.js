const mongoose = require('mongoose');

const dataSchema = mongoose.Schema(
    {
        "courses_count":"number",
        "path_status":"Boolean",
        "learning_goals":["string"],
        "path_hours":"number",
        "publishing_status":"Boolean",
        "_id":"String",
        "color_hex":"String",
        "level":"String",
        "description":"String",
        "requirements":["String"] ,
        "url_id":"string",
        "title":"string",
        "updated_at":"Date",
        "created_at":"Date"
      }
    ,{timestamps:true}
);
module.exports = mongoose.model('Data',dataSchema);