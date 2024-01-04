const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be required'],
        trim: true,
        validate: {
            validator: function (val) {
                return /^[A-Za-z\s]*$/.test(val);
            },
            message: 'Name should contain only alphabets and spaces',
        },
    },
    email: {
        type: String,
        required: [true, 'Email must be required'],
        unique: true,
        trim: true,
        validate: [validator.isEmail, 'Enter a valid email'],
    },
    username: {
        type: String,
        required: [true, 'Username must be required'],
        unique: true,
        trim: true,
        validate: [validator.isAlphanumeric, 'Username should be alphanumeric'],
    },
    phone: {
        type: Number,
        required: [true, 'Phone number must be required'],
        validate: {
            validator: function (val) {
                return /^[0-9]{10}$/.test(val);
            },
            message: 'Enter a valid phone number',
        },
    },
    password: {
        type: String,
        required: [true, 'Password must be required'],
        // validate: {
        //   validator: function (val) {
        //     return /^.{8,20}$/.test(val);
        //   },
        //   message: "Password must be length of atleast 8 & atmost 20",
        // },
        // select: false,
    },
    avatar: String,
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    followings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    posts: [
        {
            post: {
                type: mongoose.Schema.Types.ObjectId,
                refPath: 'postModel',
            },
            postModel: {
                type: String,
                require: true,
                enum: ['post', 'music', 'album'],
            },
            _id: false,
        },
    ],
    saved: [
        {
            post: {
                type: mongoose.Schema.Types.ObjectId,
                refPath: 'postModel',
            },
            postModel: {
                type: String,
                require: true,
                enum: ['post', 'song', 'album'],
            },
            _id: false,
        },
    ],
    recentAlbums: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'album',
        }
    ],
    tokens: [
        {
            token: String,
        },
    ],
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password'))
        this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.passwordCompare = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.createJwt = async function () {
    const token = await jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY);
    this.tokens = this.tokens.concat({ token });
    // this.ignore('password');
    await this.save();
    // await this.tokens.push({token})
    return token;
};

module.exports = mongoose.model('user', userSchema);
