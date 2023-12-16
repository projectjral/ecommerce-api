import exppress from 'express';
import { createEventCtrl, getAllEventsCtrl, getSingleEventCtrl, updateEventCtrl, deleteEventCtrl } from '../controllers/eventsCtrl.js';
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import isAdmin from '../middlewares/isAdmin.js';


const eventsRouter = exppress.Router();

eventsRouter.post('/', isLoggedIn, isAdmin, createEventCtrl);
eventsRouter.get('/', getAllEventsCtrl);
eventsRouter.get('/:id', getSingleEventCtrl);
eventsRouter.put('/:id', isLoggedIn, isAdmin, updateEventCtrl);
eventsRouter.delete('/:id', isLoggedIn, isAdmin, deleteEventCtrl);

export default eventsRouter;

