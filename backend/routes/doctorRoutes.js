import express from "express";
import { 
  getAllDoctor, 
  createDoctor, 
  deleteDoctor, 
  getDoctorsBySpecialization, 
  getAllDoctors, 
  createAllDoctor,
  getDoctorById 
} from "../controllers/doctorController.js";

const router = express.Router();

// CRUD for default Doctor
router.get("/", getAllDoctor);
router.post("/", createDoctor);
router.delete("/:id", deleteDoctor);

// Get doctors by specialization
router.get("/specialization/:type", getDoctorsBySpecialization);

// CRUD for AllDoctors
router.get("/alldoctors", getAllDoctors);   // GET all AllDoctors
router.post("/alldoctors", createAllDoctor); // POST new AllDoctor
router.get("/alldoctors/:id", getDoctorById);
export default router;
