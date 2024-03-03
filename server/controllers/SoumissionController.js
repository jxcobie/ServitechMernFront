import Soumission from '../models/soumissionSchema.js';


export const createSoumission = async (soumissionData) => {
    try {
        const newSoumission = new Soumission(soumissionData);
        const savedSoumission = await newSoumission.save();
        return savedSoumission;
    } catch (err) {
        throw err;
    }
};

export const getAllSoumissions = async () => {
    try {
        const soumissions = await Soumission.find();
        return soumissions;
    } catch (err) {
        throw err;
    }
};

export const getSoumissionById = async (soumissionId) => {
    try {
        const soumission = await Soumission.findById(soumissionId);
        return soumission;
    } catch (err) {
        throw err;
    }
};

export const updateSoumission = async (soumissionId, updateData) => {
    try {
        const updatedSoumission = await Soumission.findByIdAndUpdate(soumissionId, updateData, { new: true });
        return updatedSoumission;
    } catch (err) {
        throw err;
    }
};

export const deleteSoumission = async (soumissionId) => {
    try {
        const result = await Soumission.findByIdAndDelete(soumissionId);
        return result;
    } catch (err) {
        throw err;
    }
};