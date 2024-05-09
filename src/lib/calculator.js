// In the calculateHTH function in the calculator module
export const calculateHTH = (diameter, depth) => {
  console.log("Input diameter:", diameter);
  console.log("Input depth:", depth);
  const d = diameter * 0.0254; // Convert inches to meters
  const h = depth;
  const volume = (3.142 * d * d * h) / 4;
  const volumeLiters = volume * 1000; // Convert cubic meters to liters
  const hthRequired = volumeLiters / 20;
  console.log("HTH Required:", hthRequired);
  return hthRequired;
};
