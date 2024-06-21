const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({_id:newUser._id, username:newUser.username} );
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate an authentication token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '15d',
    });

    res.json({ id:user._id });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

exports.getOneUser = async(req, res)=>{
  try {
    const id = req.params.id;
    const  user = User.findOne({_id:id});
    if(!user){
      res.status(404).json({message:"User not found"})
    }
    res.status(201).json({id:user.Id});
    
  } catch (error) {
    console.log(("Error in getOneUser controller", error.message));
    res.status(500).json({error:"Internal server error"})
  }
}