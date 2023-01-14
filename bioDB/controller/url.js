import Url from "../model/url.js";


export const getAllUrl = async (req, res) => {
  try {
    const url = await Url.find({});
    res.status(200).send({
      data: url,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createUrl = async (req, res) => {
  try {

    const url = await Url.create(req.body)
    res.status(200).send({
      success: true,
      data: url,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const url = await Url.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: url,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const findUrl = async (req, res) => {
  try {
    const { params } = req.params;
    const url = await Url.findOne({
      Shorturl: params,
    });
    res.status(200).send({
      success: true,
      data: url,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
