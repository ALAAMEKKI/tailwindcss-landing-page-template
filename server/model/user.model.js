const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

userSchema.statics.findUser = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    return;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch); 
  if (!isMatch) {
    return;
  } else {
    return user;
  }
};

userSchema.pre("save", async function (next) {
  const user = this; //User
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("Userinfo ", userSchema);

module.exports = User;
