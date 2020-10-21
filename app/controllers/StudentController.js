const express=require('express')
const router=express.Router()
const {Student}=require('../models/Student')


router.post('/add',(req,res)=>{
    const body=req.body
    const student=new Student(body)
    student.save()
    .then(student=>res.send(student))
    .catch(err=>res.send(err))
})
module.exports={
    studentRouter:router
}