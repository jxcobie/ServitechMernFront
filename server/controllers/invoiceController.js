import Invoice from "../models/invoiceSchema.js";


export const createInvoice = async (invoiceData) => {
    try {
        const newInvoice = new Invoice(invoiceData);
        const savedInvoice = await newInvoice.save();
        return savedInvoice;
    } catch (err) {
        throw err; // Allow the route handler to manage error responses
    }
};

export const getAllInvoices = async () => {
    try {
        const invoices = await Invoice.find();
        return invoices;
    } catch (err) {
        throw err;
    }
};

export const getInvoiceById = async (invoiceId) => {
    try {
        const invoice = await Invoice.findById(invoiceId);
        return invoice;
    } catch (err) {
        throw err;
    }
};

export const updateInvoice = async (invoiceId, updateData) => {
    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(invoiceId, updateData, { new: true });
        return updatedInvoice;
    } catch (err) {
        throw err;
    }
};

export const deleteInvoice = async (invoiceId) => {
    try {
        const result = await Invoice.findByIdAndDelete(invoiceId);
        return result;
    } catch (err) {
        throw err;
    }
};
