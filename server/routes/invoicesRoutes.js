import express from 'express';

import { createInvoice,getAllInvoices, getInvoiceById, updateInvoice, deleteInvoice   } from "../controllers/invoiceController.js";

const router = express.Router();
// 1. Create a new invoice

router.get('/',getAllInvoices);
router.post('/',createInvoice);
router.get('/:invoiceId',getInvoiceById);
router.put('/:invoiceId',updateInvoice);
router.delete('/:invoiceId',deleteInvoice);


export default router;