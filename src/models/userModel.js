const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required:true,
        unique: true
    },
    phone: {
        type: String,
        required:true,
        min: 13,
        max: 13
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type:String,
        default: '/src/public/img/icon-256x256.png'
    },
    bio: {
        type:String,
        min: 20,
        max:50
    },
    followers: {
        type: [
                {
                    userId : Schema.Types.ObjectId
                }
        ]
    },
    following: {
        type: [
                {
                    userId : Schema.Types.ObjectId
                }
        ]
    },
    isConfirmed: {
        type: Boolean,
        default: false,
        required: true
    }
},{
    timestamps: true
})
module.exports = model('users', userSchema)