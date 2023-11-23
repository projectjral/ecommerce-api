import exppress from "express";
import { createCouponCtrl, getAllCouponsCtrl, getSingleCouponCtrl, updateCouponCtrl, deleteCouponCtrl } from "../controllers/couponsCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import isAdmin from "../middlewares/isAdmin.js";


const couponsRouter = exppress.Router();

couponsRouter.post('/', isLoggedIn, isAdmin, createCouponCtrl);
couponsRouter.get('/', getAllCouponsCtrl);
couponsRouter.get('/:id', getSingleCouponCtrl);
couponsRouter.put('/update/:id', isLoggedIn, isAdmin, updateCouponCtrl);
couponsRouter.delete('/delete/:id', isLoggedIn, isAdmin, deleteCouponCtrl);

export default couponsRouter; 