import express from "express";
import {
    createSoumission,
    getAllSoumissions,
    getSoumissionById,
    updateSoumission,
    deleteSoumission
} from '../controllers/soumissionController.js';

const router = express.Router();

// 1. Create a new soumission
router.post('/', async (req, res) => {
    try {
        const createdSoumission = await createSoumission(req.body);
        res.status(201).json(createdSoumission);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Get all soumissions
router.get('/', async (req, res) => {
    try {
        const soumissions = await getAllSoumissions();
        res.status(200).json(soumissions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 3. Get a single soumission by ID
router.get('/:soumissionId', async (req, res) => {
    try {
        const soumission = await getSoumissionById(req.params.soumissionId);
        if (!soumission) {
            return res.status(404).json({ message: 'Soumission not found' });
        }
        res.status(200).json(soumission);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 4. Update a soumission
router.put('/:soumissionId', async (req, res) => {
    try {
        const updatedSoumission = await updateSoumission(req.params.soumissionId, req.body);
        if (!updatedSoumission) {
            return res.status(404).json({ message: 'Soumission not found' });
        }
        res.status(200).json(updatedSoumission);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 5. Delete a soumission
router.delete('/:soumissionId', async (req, res) => {
    try {
        const result = await deleteSoumission(req.params.soumissionId);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Soumission not found' });
        }
        res.status(200).json({ message: 'Soumission deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
