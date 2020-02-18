import {
    Router
} from 'express';
import WhatsappBot from '../controllers/whatsappbot';

const botRouter = Router();

botRouter.post('/incoming', WhatsappBot.googleSearch);

export default botRouter;
