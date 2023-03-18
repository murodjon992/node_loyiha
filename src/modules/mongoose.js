const mongoose = require('mongoose');
const {MONGO_URL} = require('../../config')


module.exports = () => {
  mongoose.connect(MONGO_URL, (error) => {
        if (error) {
            console.log('xato mongoosda', err);
        } else {
            console.log('mongo ulandi');
        }
    })
}