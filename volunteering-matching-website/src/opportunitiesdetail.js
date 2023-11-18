import {db} from './firebase'
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const Opportunitydetail = [];
const collectionReference = collection(db, "Opportunitydetail"); 

(async () => {
    const querySnapshot = await getDocs(collectionReference);
    querySnapshot.docs.forEach((doc) => {
      const opportunityData = doc.data();
      const { id, Title, Country, Rating, Img } = opportunityData;
      const opportunity = { id, Title, Country, Rating, Img };
      Opportunitydetail.push(opportunity);
    });

    await Promise.all([Opportunitydetail]);
})();

export default Opportunitydetail;