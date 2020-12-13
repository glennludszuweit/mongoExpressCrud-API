import User from '../models/userModel.js';

export const addUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    job: req.body.job,
    email: req.body.email,
    subscription: req.body.subscription,
  });

  try {
    const data = await user.save();
    res.json(data);
    res.send('user added.');
  } catch (error) {
    res.send(error.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    res.send('users fetched.');
  } catch (error) {
    res.send(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
    res.send('user fetched.');
  } catch (error) {
    res.send(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
      (error, result) => {
        error ? console.log(error) : result;
      }
    );
    res.json(user);
    res.send('user updated.');
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id, (error, result) => {
      error ? console.log(error) : result;
    });
    res.send('user deleted.');
  } catch (error) {
    res.send(error.message);
  }
};
