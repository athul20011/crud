const db =require('../services/db')

//display all 
const getAllcontacts = ()=>{
    return db.contact.find().then((result)=>{//result - details of 
        if(result){
            return{
                statusCode:200,
                Contacts:result
            }
        }
        else{ 
            return{
                statusCode:404,
                message:'cant find contact'
            }
        }
    })
}
//add items
const addcontacts=(id,name,email,phone)=>{
    return db.contact.findOne({id}).then((result)=>{
        if(result){
            
            return{
                statusCode:404,
                message:"contact already exists"
            }
        } 
        else{//this id is not in the database then it save to database
            const newcontact = new db.contact({id,name,email,phone})
            //to save to the database
            newcontact.save()
            return{
                statusCode:200,
                message:"contact add successfully"
            }
        }
    })
}
//viewdata
const viewdata=(id)=>{
    return db.contact.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                Contacts:result
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find contact'
            }
          

        }
    })
}
//delete
const deletedata=(id)=>{
    return db.contact.deleteOne({id}).then((result)=>{
            return{
                statusCode:200,
                message:"delete successfully"
            }
    })
    .catch((error)=>{
        return{
            statusCode:401,
            message:"failed to delete "
        }
    })
  }
  //update
  const updatecontact=(id,name,email,phone)=>{//updated data
    return db.contact.findOne({id}).then((result)=>{//result - details of
        if(result){
            //assiging updated information to the database values
            result.id = id;
            result.name = name;
            result.email = email;
            result.phone = phone;

            //save updated details into db
            result.save()
            
                return {//send to frontend
                    statusCode:200,
                    message:"contact data updated successfully"
                }
        }
        else{
                return {
                    statusCode:404,
                    message:'cant find contact'
                }
        }
    })
}
module.exports={
    getAllcontacts,
    addcontacts,
    viewdata,
    deletedata,
    updatecontact
}