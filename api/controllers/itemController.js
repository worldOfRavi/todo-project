const Item = require('../models/Item');
const User = require('../models/User');

exports.createItem = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const newItem = new Item({ ...req.body, user: user._id });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.log("Create item error",error);
    res.status(500).json({ message: 'Error creating item', error });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({ user: req.user.id });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving items', error });
  }
};

exports.getItemById = async (req, res) => {
    try {
      const item = await Item.findOne({ _id: req.params.id, user: req.user.id });
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching item', error });
    }
  };

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
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
    const item = await Item.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
};
