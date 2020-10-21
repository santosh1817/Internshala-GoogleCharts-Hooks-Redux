const express=require('express')
const router=express.Router()
const {College}=require('../models/College')

router.post('/add',(req,res)=>{
    const body=req.body
    const college=new College(body)
    college.save()
    .then(college=>res.send(college))
    .catch(err=>res.send(err))
})
router.get('/allcollege',(req,res)=>{
    College.find()
    .then((all=>{
        res.send(all)
    }))
    .catch(err=>{

        res.send(err)
    })
})

module.exports={
    collegeRouter:router
}