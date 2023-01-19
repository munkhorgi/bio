import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {

    const user = await User.create(req.body)
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};


export const getUserByObject = async (req, res) => {
    try {
      const { email, pass } = req.body;
      const token = jwt.sign(
        {
          username: req.body.username,
          email: req.body.email,
          pass: req.body.pass,
        },
        "secret",
        {
          expiresIn: "1d",
        }
      );
      const user = await User.findOne({
        email,
      });
  
      if (user) {
        if (user.pass !== pass) {
          throw new Error("Email or password wrong");
        }
        res.status(200).send({
          data: user,
          token: token,
        });
      } else {
        res.status(404).send({
          data: "tiim user bhq bn",
        });
      }
    } catch (error) {
      res.status(400).send({
        success: false,
        error: error.message,
      });
    }
  };
  
  export const getUserById = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById({ _id: id });
      res.status(200).send({
        data: user,
      });
    } catch (error) {
      res.status(400).send({
        data: error.message,
      });
    }
  };
  
  export const deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.deleteOne({ _id: id });
      res.send({
        data: user,
      });
    } catch (error) {
      res.send({
        data: error.message,
      });
    }
  };