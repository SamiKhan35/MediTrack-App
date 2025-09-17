import fs from "fs";
import path from "path";

// Function to convert image to Base64
export const imageToBase64 = (imagePath) => {
  try {
    const fullPath = path.resolve(imagePath);
    const data = fs.readFileSync(fullPath, { encoding: "base64" });
    return `data:image/jpeg;base64,${data}`;
  } catch (err) {
    console.error("Error converting image to Base64:", err);
    return null;
  }
};
