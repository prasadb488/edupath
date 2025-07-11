import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

const getUser = async (uid: string) => {
  //   console.log(uid, "UID in getUser function");

  const collectionRef = collection(db, "users");
  const userdoc = doc(collectionRef, uid);
  const user = await getDoc(userdoc);
  if (user.exists()) {
    // console.log("User data:", user.data());
    return user.data();
  }
  console.log("No such user!");
  return null;
};
export default getUser;
