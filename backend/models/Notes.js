const mongoose = require('mongoose');
const {Schema} = mongoose;
const notesSchema = new Schema ({
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tags:{
        type: String,
    },
    date:
    {
        type: Date,
        default: Date.now
    }
})
notesSchema.path('user').ref('user');
module.exports = mongoose.model('notes', notesSchema);