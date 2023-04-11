const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pfp: {
      type: String,
      default:
        "https://nextluxury.com/wp-content/uploads/funny-profile-pictures-4.jpg",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcryptjs.genSalt(15);
  this.password = await bcryptjs.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
