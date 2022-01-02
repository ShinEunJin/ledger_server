import {Router} from 'express';

import routes from './routes';
import {createLedger, getLedger} from '../controllers/ledgerController';

const router = Router();

router.get('/', getLedger);
router.post('/', createLedger);

export default router;
