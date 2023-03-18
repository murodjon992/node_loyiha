const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    type: {
        type: String,  //image or video
        required: true
    },
    src: {
        type: String,
        required: true
    },
    description: String,
    likes: {
            type: [
                {
                userId : Schema.Types.ObjectId
            }
        ]
    },
    comments: {
        type: [
            {
                userId : Schema.Types.ObjectId
            }
        ]
    },
    ipAdress:{
        type:String,
        required:true
    }
},{
    timestamps: true
})
module.exports = model('posts', postSchema)