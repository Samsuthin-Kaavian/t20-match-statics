const  mongoose = require ('mongoose');

const personal_info_schema = new mongoose.Schema ({
    'Picture' : {
        'type' : String ,
        'require' : [ true , 'Why no pfp ..?' ]
    } ,
    'name' : {
        'type' : String ,
        'require' : [ true , 'why no name ..?' ] ,
        'match' : '/^[A-Z]+(([A-Z ])?[a-zA-Z]*)*$/' ,
        'minLength' : 5 ,
        'maxLength' : 20
    } ,
    'age' : {
        'type' : Number ,
        'require' : [ true , 'why no age ..?' ] ,
        'min' : 19
    }
} , { 'collection' : 'personal_info' });

const personal_info = new mongoose.model ('personal_info' , personal_info_schema);

module.exports = {
    personal_info
};