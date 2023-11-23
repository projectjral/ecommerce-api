import asyncHandler from "express-async-handler";
import Coupon from "../model/Coupon.js";
import Order from "../model/Order.js";

// @desc Create new Coupon
// @route POST /api/v1/coupons
// @access Private/
export const createCouponCtrl = asyncHandler(async (req, res) => {
    const { code, startDate, endDate, discount } = req.body;
    // check if admin
    // check if coupon already exists
    const couponsExists = await Coupon.findOne({
        code,
    });

    if (couponsExists) {
        throw new Error("Coupon already exists");
    }

    //check if discount is a number
    if (isNaN(discount)) {
        throw new Error("Discount value must be a number");
    }

    // create coupon
    const coupon = await Coupon.create({
        code: code?.toUpperCase(),
        startDate,
        endDate,
        discount,
        user: req.userAuthId,
    });

    console.log("TEST");
    // send the response
    res.status(201).json({
        status: "success",
        message: "Coupon created successfully",
        coupon,
    });
});

// @desc Get all coupons
// @route GET /api/v1/coupons
// @access Private/Admin

export const getAllCouponsCtrl = asyncHandler(async (req, res) => {
    const coupons = await Coupon.find();
    res.status(200).json({
        status: "success",
        message: "All coupons",
        coupons,
    });
});

// @desc Get single coupon
// @route GET /api/v1/coupons/:id
// @access Private/Admin
export const getSingleCouponCtrl = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const coupon = await Coupon.findById(id);
    res.status(200).json({
        success: true,
        message: "fetched single coupon",
        coupon,
    })
});

// @desc Update single coupon
// @route Update /api/v1/coupons/:id
// @access Private/Admin
export const updateCouponCtrl = asyncHandler(async (req, res) => {
    const { code, startDate, endDate, discount } = req.body;
    const id = req.params.id;
    const coupon = await Coupon.findByIdAndUpdate(id, {
        code: code?.toUpperCase(),
        discount,
        startDate,
        endDate,
    }, {
        new: true,
    });
    res.status(200).json({
        status: "success",
        message: "Coupon updated successfully",
        coupon,
    });
});

// @desc delete single coupon
// @route Del /api/v1/coupons/:id
// @access Private/Admin
export const deleteCouponCtrl = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const coupon = await Coupon.findByIdAndDelete(id);
    res.status(200).json({
        status: "success",
        message: "Coupon deleted successfully",
        coupon,
    });
});