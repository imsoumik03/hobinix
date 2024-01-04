const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: String,
    track: String,
    url: String,
    thumbnail: String,
    thumbUrl: String,
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    saves: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    created: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = new mongoose.model('song', songSchema);
