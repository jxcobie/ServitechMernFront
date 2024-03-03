import mongoose from "mongoose";


const invoiceItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    qty: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    total: { type: Number, required: true }
});

const invoiceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    number: { type: Number, required: true, unique: true },
    sender: {
        businessName: { type: String, required: true },
        telephone: { type: String }, // Or Number if needed
        address: { type: String },
        email: { type: String }
    },
    receiver: {
        businessName: { type: String, required: true },
        telephone: { type: String },
        address: { type: String },
        email: { type: String }
    },
    invoiceDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
    items: [invoiceItemSchema],
    subtotal: { type: Number, required: true },
    taxRate: { type: Number, required: true }, // Percentage
    reductionRate: { type: Number },
    reductionType: { type: String, enum: ['percentage', 'flat'] },
    total: { type: Number, required: true }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);


export default Invoice;