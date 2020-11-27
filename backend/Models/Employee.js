const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    companyId : {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    gender: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
        min: 2,
        max: 120
    },
    picture : {
        type: String,
        default: "https://www.w3schools.com/howto/img_avatar.png"
    },
    payment : {
        type: Array,
        default: []
    },
    joiningDate: {
        type: Date,
        required: true
    }
    

},{
    versionKey: false
});

module.exports = mongoose.model('Employee', employeeSchema)