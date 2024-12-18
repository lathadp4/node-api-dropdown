// db.js
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/location_selector_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
});

const connection = mongoose.connection;

// Connection success and error handling
connection.once("open", () => {
  console.log("MongoDB database connection established successfully.");
});

connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1); // Exit if connection fails
});

// Define the district schema
const districtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  population: { type: Number, required: true },
  areaSize: { type: Number, required: true },
  file_path: { type: String, required: true },
});

// Define the state schema
const stateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  districts: [districtSchema], // Array of districts
});

// Define the country schema
const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: Number, required: true },
  states: [stateSchema], // Array of states
});

// Create the models based on the schemas
const Country = mongoose.model('Country', countrySchema);
const State = mongoose.model('State', stateSchema);
const District = mongoose.model('District', districtSchema);

// Export the connection and models
module.exports = {
  connection,
  models: {
    Country,
    State,
    District,
  },
};
