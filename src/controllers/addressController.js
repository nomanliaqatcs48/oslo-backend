import { Address } from "../models/address";

// Create Address
export const create = async (req, res, next) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(200).json({
      code: 200,
      status: "Success",
      message: "Data created successfully!",
      address,
    });
  } catch (error) {
    next(error);
    res.status(500).json({ code: 500, status: "Error", error });
  }
};

// Address List
export const addressList = async (req, res, next) => {
  try {
    const addresses = await Address.find({ user_address: req.params.address });
      res.status(200).json({
        code: 200,
        status: "Success",
        message: "Addresses list fetched successfully!",
        addresses
      });
  } catch (error) {
    next(error);
    res.status(500).json({ code: 500, status: "Error", error });
  }
};

// Get Address By Key
export const getAddress = async (req, res, next) => {
  try {
    const address = await Address.findOne({ key: req.params.key });
    if (!address) {
      res.status(404).json({
        code: 404,
        status: "Error",
        message: "Record not found!",
      });
    } else {
      res.status(200).json({
        code: 200,
        status: "Success",
        message: "address fetched successfully!",
        address,
      });
    }
  } catch (error) {
    next(error);
    res.status(500).json({ code: 500, status: "Error", error });
  }
};

export const deleteAddress = async (req, res, next) => {
  try {
    console.log("Delete", req.params.id )
    const address = await Address.findByIdAndDelete({ _id: req.params.id });
    if (!address) {
      res.status(404).json({
        code: 404,
        status: "Error",
        message: "Record not found!",
      });
    } else {
      res.status(200).json({
        code: 200,
        status: "Success",
        message: "Address deleted successfully!",
        address,
      });
    }
  } catch (error) {
    next(error);
    res.status(500).json({ code: 500, status: "Error", error });
  }
};


// Update Address
export const updateAddress = async (req, res, next) => {
  try {
    const {address, name, id} = req.body;
    const updateAddress = await Address.findOneAndUpdate({ _id: id },  {address, name});
    if (!updateAddress) {
      res.status(404).json({
        code: 404,
        status: "Error",
        message: "Record not found!",
      });
    } else {
      // const saveData = req.body;
      // address.address = saveData.address;
      // address.name = saveData.name;

      // address.save()
      res.status(200).json({
        code: 200,
        status: "Success",
        message: "Address updated successfully!",
        address: updateAddress,
      });
    }
  } catch (error) {
    next(error);
    res.status(500).json({ code: 500, status: "Error", error });
  }
};