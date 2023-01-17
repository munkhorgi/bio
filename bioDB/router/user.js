import User from "../model/User.js";


export const getAllUser = async (req, res) => {
  try {
    const username = await Username.find({});
    res.status(200).send({
      data: username,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createUsername = async (req, res) => {
  try {

    const username = await Username.create(req.body)
    res.status(200).send({
      success: true,
      data: username,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deleteUsername = async (req, res) => {
  try {
    const { id } = req.params;
    const username = await Username.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: username,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const findUsername = async (req, res) => {
  try {
    const id = req.params.id
   const username = await Username.findOne({shortusername : id})

    res.status(200).send({
      success: true,
      data: username,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
