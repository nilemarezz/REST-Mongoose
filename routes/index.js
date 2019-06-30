const express = require('express');
const router = express.Router();
const employee = require('../models/employee');

// GET ALL EMPLOYEE
router.get('/',async (req,res)=>{
    let employees;
    try{
         employees = await employee.find({});
    }catch(err){
        console.log(err);
    }
    res.render('show',{employee:employees})

})

// Add Employee
router.get('/add',(req,res)=> res.render('addEmployee'));
router.post('/add',async(req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    let branch = req.body.branch;
    try{
        await employee.create({name:name,age:age,branch:branch})
    }catch(err){
        console.log(err);
    }

    res.redirect('/');
})

router.get('/edit/:id',async(req,res)=>{
    let employees;
    try{
        employees = await employee.findById(req.params.id); 
    }catch(err){
        console.log(err);
    }

    res.render('editEmployee',{employee:employees});
})

router.put('/edit/:id',async(req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    let branch = req.body.branch;
    try{
        await employee.findOneAndUpdate(req.params.id,{name:name,age:age,branch:branch});
    }catch(error){
        console.log(error);
    }

    res.redirect('/');
})

router.delete('/delete/:id',async(req,res)=>{
   
    try{
        await employee.findOneAndDelete(req.params.id);
    }catch(error){
        console.log(error);
    }

    res.redirect('/');
})


module.exports = router;