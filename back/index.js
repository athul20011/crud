const express =require('express')
const cors =require('cors')
const logic =require('./services/logic')

const conServer =express()

conServer.use(cors({
    origin:'http://localhost:3000'
}))

conServer.use(express.json())

conServer.listen(5000,()=>{
    console.log('contact server listening on port 5000' );
})
//disply
conServer.get('/get-all-contacts',(req,res)=>{
    logic.getAllcontacts().then((response)=>{ //response - all the details
      res.status(response.statusCode).json(response);
    })
  })
  //add
  conServer.post('/add-an-contact',(req,res)=>{
    logic.addcontacts(req.body.id,req.body.name,req.body.email,req.body.phone).then((response)=>{
      res.status(response.statusCode).json
    })
  })
  //view
  conServer.get('/view-an-contact/:id',(req,res)=>{
    logic.viewdata(req.params.id).then((response)=>{
      res.status(response.statusCode).json(response);
    })
  })
  //delete
  conServer.delete('/delete-an-contact/:id',(req,res)=>{
    logic.deletedata(req.params.id).then((response)=>{
      res.status(response.statusCode).json(response);
    })
  })
  //edit
  conServer.post('/update-an-contact/:id',(req,res)=>{
    logic.updatecontact(req.params.id,req.body.name,req.body.email,req.body.phone).then((response)=>{//response -
        res.status(response.statusCode).json(response);
    })
  })
  