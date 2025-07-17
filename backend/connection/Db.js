const { db } = require("../config/Fconfig.js");

async function testFirestore() {
  try {
    await db.collection("test").add({ message: "Hello Firestore!" });
    console.log("Data added successfully!");
  } catch (error) {
    console.error("Error adding data:", error);
  }
}

testFirestore();
