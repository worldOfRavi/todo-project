const Item = require('../models/Item');
const User = require('../models/User');

exports.createItem = async (req, res) => {
  try {
    const newItem = new Item({ ...req.body });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.log("Create item error",error);
    res.status(500).json({ message: 'Error creating item', error });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    if(!items){
      return res.status(400).json({error:"cannot fetch the todo items"})
    }
    res.status(201).json({items})
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving items', error });
  }
};

exports.getItemById = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      const item = await Item.findOne({ _id: id });
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(201).json({item});
    } catch (error) {
      res.status(500).json({ message: 'Error fetching item', error });
    }
  };

exports.updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findOneAndUpdate(
      {_id:id },
      req.body,
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error updating item', error });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findByIdAndDelete({_id:id});
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
};
