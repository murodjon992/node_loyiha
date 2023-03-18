const {Schema, model} = require('mongoose');

const sessionSchema = new Schema({
    userId: {
        type: Schema.Types.objectId,
        required: true
    },
    userAgent: {
        type: String,
        required: true
    },
    ipAdress: {
        type: String,
        required: true
    }
},{
    timestamps: true
})
module.exports = model('sessions', sessionSchema)