const mongoose = require("mongoose")


const coursSchema = mongoose.Schema(
  {
    courses_count: number,
    path_status: Boolean,
    learning_goals: ["string"],
    path_hours: number,
    publishing_status: Boolean,
    _id: mongoose.ObjectId,
    color_hex: String,
    level: String,
    description: String,
    requirements: ["String"],
    url_id: string,
    title: string,
    updated_at: Date,
    created_at: Date,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Course", coursSchema)

// Course.save().then(() => res.json({ msg: "Course Created" }))
