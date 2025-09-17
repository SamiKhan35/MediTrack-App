import Doctor from "../models/Doctor.js";
import AllDoctor from "../models/AllDoctor.js";

// GET all doctors
export const getAllDoctor = async (req, res) => {
  try {
    const { specialization } = req.query;
    const query = specialization ? { specialization } : {};

    // ✅ Fetch ALL fields (no projection)
    const doctors = await Doctor.find(query);

    // Convert image filenames to URLs
    const doctorsWithURL = doctors.map((doc) => ({
      ...doc._doc,
      image: doc.image
        ? `http://localhost:5000/images/${doc.image}`
        : null,
    }));

    res.status(200).json(doctorsWithURL);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
// POST add doctor
// export const createDoctor = async (req, res) => {
//   const { name, specialization, image, fee } = req.body;

//   if (!name || !specialization || !fee || !image) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const newDoctor = new Doctor({ name, specialization, image, fee });
//     await newDoctor.save();
//     res.status(201).json(newDoctor);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

export const createDoctor = async (req, res) => {
  try {
    const { name, specialization, image, fee, email, description } = req.body;

    // Required fields validation
    if (!name || !specialization || !fee) {
      return res.status(400).json({ message: "Name, specialization, and fee are required" });
    }
    const newDoctor = new Doctor({
      name,
      specialization,
      image,
      fee,
      email,
      description,
    });

    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE doctor by ID
export const deleteDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    await Doctor.findByIdAndDelete(id);

    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const getAllDoctors = async (req, res) => {
  try {
    // Fetch all doctors and select all relevant fields
    const doctors = await AllDoctor.find(
      {},
      "_id name specialization images fee rating country days availableToday"
    );

    // Convert image filenames to full URLs
    const doctorsWithURL = doctors.map((doc) => ({
      ...doc._doc,
      images:
        doc.images && doc.images.length > 0
          ? doc.images.map((img) => `http://localhost:5000/images/${img}`)
          : [],
    }));

    res.status(200).json(doctorsWithURL);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
// GET doctors by specialization (optional)
export const getDoctorsBySpecialization = async (req, res) => {
  try {
    const { specialization } = req.params;

    if (!specialization) {
      return res.status(400).json({ message: "Specialization is required" });
    }

    const doctors = await AllDoctor.find(
      { specialization },
      "_id name specialization images fee rating country days availableToday"
    );

    const doctorsWithURL = doctors.map((doc) => ({
      ...doc._doc,
      images:
        doc.images && doc.images.length > 0
          ? doc.images.map((img) => `http://localhost:5000/images/${img}`)
          : [],
    }));

    res.status(200).json(doctorsWithURL);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


// POST - Add a new doctor
export const createAllDoctor = async (req, res) => {
  try {
    const { name, specialization, images, fee, rating, country, days, availableToday } = req.body;

    // Validation
    if (!name || !specialization || !fee) {
      return res.status(400).json({ message: "Name, specialization, and fee are required" });
    }

    if (images && images.length > 4) {
      return res.status(400).json({ message: "You can upload up to 4 images only" });
    }

    // Create new doctor document
    const newDoctor = new AllDoctor({
      name,
      specialization,
      images: images || [],
      fee,
      rating: rating || 0,
      country: country || "",
      days: days || [],
      availableToday: availableToday || false,
    });

    await newDoctor.save();

    res.status(201).json(newDoctor);
  } catch (error) {
    console.error("Error creating doctor:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
// Get doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await AllDoctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Convert image filenames to URLs
    const doctorWithURL = {
      ...doctor._doc,
      images: doctor.images?.map(
        (img) => `http://localhost:5000/images/${img}`
      ),
    };

    res.status(200).json(doctorWithURL);
  } catch (error) {
    console.error("Error fetching doctor by ID:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
