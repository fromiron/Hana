import express from 'express';
import routes from '../routes';
import { home, about, plan, contact } from '../controllers/globalController';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.about, about);

globalRouter.get(routes.plan, plan);

globalRouter.get(routes.contact, contact);

export default globalRouter;
