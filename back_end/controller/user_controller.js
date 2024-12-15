const user_model = require('../models/user_model');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/sign_in',async(req,res)=>{
    

    // if()
    // const user = await user_model.findOne({email:req.body.email})

    res.status(200).json({
        message:"req succeasfuly hits sgin",
        success:true
    })
})

router.post('/login',async(req,res)=>{
    res.status(200).json({
        message:"req succeasfuly hits login",
        success:true
    })
})

module.exports = router

