import express from 'express';
import routes from '../routes';
import {sendingMail} from '../app/mailApp';

import { home, about, plan, contact, service,mail } from '../controllers/globalController';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.about, about);

globalRouter.get(routes.service, service);

globalRouter.get(routes.plan, plan);

globalRouter.get(routes.contact, contact);

globalRouter.post(routes.mail, function(req,res){
    const title = req.body.title;
    const userName = req.body.userName;
    const email = req.body.email;
    const pets = req.body.pets;
    const text = req.body.text;
    sendingMail(title, userName,email,pets,text);
});

export default globalRouter;
