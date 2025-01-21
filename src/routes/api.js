const express = require("express");
const router = express.Router();

let items = [];

router.get("/items" , (req ,res) => {
    res.json(items);
});

router.post("/items" , (req , res) => {
    const newItem = req.body;

    if(!newItem.name){
        res.status(400).json({message : "Name is required"});
    }

    items.push(newItem);
    res.status(201).json(items);
});

router.put("/items/:id" , (req , res) => {
    const id = parseInt(req.params.id , 10);

    const item = items.find((d) => d.id == id);

    if(!item){
        res.status(404).json({message : "Item not found"});
    }

    Object.assign(item , req.body);
    res.status(201).json(items);
});

router.delete("/items/:id" , (req,res) => {
    const id = parseInt(req.params.id , 10);

    items = items.filter((d) => d.id !== id);
    res.status(204).send();
});

module.exports = router;