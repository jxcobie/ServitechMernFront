import express from 'express';
import { createInspection,getAllInspections, getInspectionById, updateInspection, deleteInspection   } from "../controllers/inspectionController.js";
// Create a new inspection
const router = express.Router();

router.post('/',createInspection);

// Get all inspections
router.get('/',getAllInspections);

// Get a single inspection by ID
router.get('/:inspectionId',getInspectionById);

// Update an inspection
router.put('/:inspectionId',updateInspection);

// Delete an inspection
router.delete('/:inspectionId',deleteInspection);

export default router;
