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

module.exports = router;