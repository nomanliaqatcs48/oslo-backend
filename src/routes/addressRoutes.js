import express from "express";
import {
  create,
  addressList,
  getAddress,
  deleteAddress,
  updateAddress
} from "../controllers/addressController";

const addressRouter = express.Router();

addressRouter.post("/create", create);
addressRouter.get("/:address", addressList);
addressRouter.put("/update", updateAddress);
addressRouter.delete('/:id', deleteAddress)

export default addressRouter;
