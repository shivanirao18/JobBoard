// const admin = require("firebase-admin");
// const serviceAccount = require("../service.json"); // Path to your JSON key

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://job-board-61873.firebaseio.com", // Replace with your actual project ID
// });

// const db = admin.firestore();

// module.exports = { admin, db };
const admin = require("firebase-admin");
const serviceAccount = require("../service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://job-board-61873.firebaseio.com", 
});

const db = admin.firestore();

/**
 * Generate a custom token for a user
 * @param {string} uid - The UID of the Firebase user
 */
const generateToken = async (uid) => {
  try {
    const token = await admin.auth().createCustomToken(uid);
    console.log("Generated Token:", token);
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
  }
};

// Example usage: Replace 'USER_UID' with an actual Firebase user UID
const USER_UID = "your-user-uid-here"; // Replace with an actual Firebase UID
generateToken(USER_UID);

module.exports = { admin, db, generateToken };
