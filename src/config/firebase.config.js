import admin from "firebase-admin"
import dotenv from "dotenv"
dotenv.config()
import serviceAccount from  "./serviceAccountKey.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket:"projectmusicapp-43124.appspot.com",
});
const storage = admin.storage();

export default admin;