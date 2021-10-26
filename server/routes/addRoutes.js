const express = require('express')
const router = express.Router()
const Client = require('../models/client')


router.post('/addAll', async(req,res)=>{
  
    try {
        const {localid} = req.body
               
        if( !localid){          
           const Clients = await Client.create({})
            res.status(200).json( {Clients})
        }else if(localid){
          const Clients = await Client.findById(localid)
            res.status(200).json({ Clients})
        }
    
  
    } catch (error) {
      res.status(404).json({ succes: false, msg: error.message });
  
    }
})


router.put('/addMale', async(req,res)=>{
  try {
    const {male, id} = req.body
    const Clients = await Client.findById(id)
    Clients.male = male
    await Clients.save()
    res.status(200).json({sucses:true, Clients})
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
})

router.put('/addCity', async(req,res)=>{
    try {
      const {city, id} = req.body
      
      const Clients = await Client.findById(id)
      Clients.city = city
      await Clients.save()
      res.status(200).json({sucses:true, Clients})
    } catch (error) {
      res.status(404).json({ succes: false, msg: error.message });
    }
})
router.put('/addForm', async(req,res)=>{
    try {
      const {email,text,id} = req.body
      const Clients = await Client.findById(id)
      Clients.mail = email
      Clients.text = text
      await Clients.save()
      res.status(200).json({sucses:true, Clients})
    } catch (error) {
      res.status(404).json({ succes: false, msg: error.message });
    }
})
  
router.get('/addAll', async(req,res)=>{
  try {
    const Clients = await Client.find()
    res.status(200).json( {Clients})

  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });

  }
})



module.exports=router
