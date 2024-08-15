const express = require('express');
const router = express.Router();
const Employee = require('../model/employee');
const objectId = require('mongoose').Types.ObjectId;

router.get('/:id',(req,resp)=>{
    if(objectId.isValid(req.params.id)){
        Employee.findById(req.params.id,(err,data)=>{
            if(err){
                resp.status(400).send('error while fetching data')
            }
            else{
                resp.send(data);
            }
        })
    }
})
router.get('/',(req,resp)=>{
    Employee.find().then((result)=>{
        resp.send(result)
    }).catch(err=>{
        resp.send(err)
    })
})

router.post('/',(req,resp)=>{
    const emp = new Employee({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        mobile:req.body.mobile,
        salary:req.body.salary
    })
    emp.save((err,result)=>{
        if(err){

        }else{
            resp.send(result);
        }
    })
});

router.put('/:id',(req,resp)=>{
    
    if(objectId.isValid(req.params.id)){
        let emp ={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            mobile:req.body.mobile,
            salary:req.body.salary
        }
        Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,data)=>{
            if(err){
                resp.status(400).send('error while updating data')
            }
            else{
                resp.send("update successfull");
            }
        })
    }

})


router.delete('/:id',(req,resp)=>{
    if(objectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id,(err,data)=>{
            if(err){
                resp.status(400).send('error while deleting data')
            }
            else{
                resp.send(data);
            }
        })
    }
})
module.exports = router;