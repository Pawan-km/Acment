const mongoose = require('mongoose');
const Schema = mongoose.Schema
const mentorSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    // unique:[true, "Email is already present"],
  },
  password: {
    type: String
  },
  exam: {
    type: String
  },
  subject: {
    type: String
  },
  
  avator:{
    type: String
  } ,
  studyMaterial: [{
    topic: {
        type: String
    },
    link: {
        type: String
    },
    document: {
        type: String
    }
  }],
  videoData: [{
    video: {
        type: String
    },
    topic: {
        type: String
    },
    desc: {
        type: String
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: "Mentor"
    }
  }, { timestamps: true }],
  follower: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'student',
  }],
  unfollow: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "student"
  }],
      
    isMentor: { type: Boolean, default: true },

  // followers: { Object },
});
module.exports = mongoose.model('mentors', mentorSchema);
