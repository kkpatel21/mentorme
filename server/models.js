const mongoose = require('mongoose')

const connect = process.env.MONGODB_URI

mongoose.connect(connect);

const Schema = mongoose.Schema;

const userSchema = Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  menteeTags: Array,
  mentorTags: Array,
  rating: Number,
  bio: String,
  mentees: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  mentors: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  chatId: Number
})

const chatSchema = Schema({
  from: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  to: {
    type: Schema.Types.objectId,
    ref: 'User'
  },
  notepad: String,
  privateNotes: String,
  whiteboard: String
})
