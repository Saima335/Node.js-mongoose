var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/comsats',function(err){
    if (err) throw err;
    console.log("Database Connected Successfully");
});
var TeamSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    }
});
var Team=mongoose.model('Team',TeamSchema);
//find{} find all
// Team.find({name:"DevOps"}.exec(function(err,data){
//     if(err) throw err;
//     console.log(data);
// }));
var team =new Team({
    name:"DevOps"
});
team.save(function(err,result){
    if (err) throw err;
    console.log("Data inserted"+ result);
});