const mongoose =require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/contact1');

const contact =mongoose.model('contact',{
id:String,
name:String,
email:String,
phone:String
})
module.exports={
contact
}