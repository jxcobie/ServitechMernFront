import Inspection from '../models/inspectionsSchema.js';
// Create a new inspection
export const createInspection = async (req, res) => {
    const newInspection = new Inspection(req.body);
    console.log(newInspection)

    try {
        const createdInspection = await newInspection.save();
        res.status(201).json(createdInspection);
    } catch (err) {
        res.status(500).json({ message:"hne l mochkla" + err, newInspection});
    }
};

// Get all inspections
export const getAllInspections = async (req, res) => {
    try {
        const inspections = await Inspection.find();
        res.status(200).json(inspections);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single inspection by ID
export const getInspectionById = async (req, res) => {
    try {
        const inspection = await Inspection.findById(req.params.inspectionId);
        if (!inspection) {
            return res.status(404).json({ message: 'Inspection not found' });
        }
        res.status(200).json(inspection);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an inspection
export const updateInspection = async (req, res) => {
    try {
        const updatedInspection = await Inspection.findByIdAndUpdate(req.params.inspectionId, req.body, { new: true });
        if (!updatedInspection) {
            return res.status(404).json({ message: 'Inspection not found' });
        }
        res.status(200).json(updatedInspection);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete an inspection
export const deleteInspection = async (req, res) => {
    try {
        const result = await Inspection.deleteOne({ _id: req.params.inspectionId });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Inspection not found' });
        }
        res.status(200).json({ message: 'Inspection deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
