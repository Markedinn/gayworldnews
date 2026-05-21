const fs = require("fs");

console.log("Reading the massive map file...");
const rawData = fs.readFileSync("world.geojson.txt", "utf8");
const geo = JSON.parse(rawData);

// These are the ONLY keys your i_map.js actually looks for
const keysToKeep = ["name", "ADMIN", "NAME", "admin", "name_long", "NAME_1", "province", "ISO_A3", "ADM0_A3"];

// Function to round coordinates to 4 decimal places to save massive space
function roundCoords(coords) {
  if (typeof coords[0] === "number") {
    return [Number(coords[0].toFixed(4)), Number(coords[1].toFixed(4))];
  }
  return coords.map(roundCoords);
}

console.log("Stripping bloat and shrinking coordinates...");
geo.features.forEach((feature) => {
  // 1. Keep only the essential properties
  const cleanProps = {};
  keysToKeep.forEach((key) => {
    if (feature.properties[key] !== undefined) {
      cleanProps[key] = feature.properties[key];
    }
  });
  feature.properties = cleanProps;

  // 2. Shrink the geometry coordinates
  if (feature.geometry && feature.geometry.coordinates) {
    feature.geometry.coordinates = roundCoords(feature.geometry.coordinates);
  }
});

console.log("Saving the new lightweight file...");
fs.writeFileSync("slim_world.geojson.txt", JSON.stringify(geo));
console.log("Done! Check your desktop for 'slim_world.geojson.txt'");
