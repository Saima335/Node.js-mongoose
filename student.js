var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/comsats',function(err){
    if (err) throw err;
    console.log("Database Connected Successfully");
});
var StudentSchema=new mongoose.Schema({
    name:{
        type:String,required: true
    },
    rollNo:{
        type:String,required: true
    }
});
var Student=mongoose.model('Student',StudentSchema);
var student =new Student({
    name:"Saima",rollNo:"FA19-BCS-070"
});
student.save(function(err,result){
    if (err) throw err;
    console.log("Data inserted"+ result);
});