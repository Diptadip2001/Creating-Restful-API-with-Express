const express=require('express');
const router=new express.Router();
const MensRanking=require("../models/mens");
router.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const savedRecord = await addingMensRecords.save(); // Await the save operation
        res.status(201).send(savedRecord); // Return success response
    } catch (e) {
        res.status(400).send(e); // Return error response
    }
});
router.get("/mens", async (req, res) => {
    try {
        const getMens=await MensRanking.find({}).sort({"ranking":1});
        res.send(getMens); // Return success response
    } catch (e) {
        res.status(400).send(e); // Return error response
    }
});

router.get("/mens/:id", async (req, res) => {
    try {
        const _id=req.params.id;
        const getMen=await MensRanking.findById(_id);
        res.send(getMen); // Return success response
    } catch (e) {
        res.status(400).send(e); // Return error response
    }
});
//patch method
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id=req.params.id;
        const getMen=await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(getMen); // Return success response
    } catch (e) {
        res.status(500).send(e); // Return error response
    }
});
//delete request
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id=req.params.id;
        const getMen=await MensRanking.findByIdAndDelete(_id);
        res.send(getMen); // Return success response
    } catch (e) {
        res.status(500).send(e); // Return error response
    }
})

module.exports=router;