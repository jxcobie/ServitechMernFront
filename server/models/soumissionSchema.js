import mongoose from 'mongoose';


const SoumissionItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    qty: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    total: { type: Number, required: true }
});

const SoumissionSchema = new mongoose.Schema({
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
    items: [SoumissionItemSchema],
    subtotal: { type: Number, required: true },
    taxRate: { type: Number, required: true },
    total: { type: Number, required: true }
});

const Soumission = mongoose.model('Soumission', SoumissionSchema);

export default Soumission;