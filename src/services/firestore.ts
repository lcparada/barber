import { initializeApp, FirebaseApp } from "firebase/app";

import {
  Firestore,
  getFirestore,
  doc,
  setDoc,
  getDoc,
  arrayRemove,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

import { firebaseConfig } from "../config/firebaseconfig";

import {
  Auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

export class FireStoreService {
  private firestore: Firestore;
  private auth: Auth;
  private app: FirebaseApp;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.firestore = getFirestore(this.app);
    this.auth = getAuth();
  }

  async createUser(id: string, name: string, email: string) {
    await setDoc(doc(this.firestore, "users", id), {
      favoritesBarbers: [],
      name: name,
      email: email,
      cep: "",
      avatar:
        "https://media.istockphoto.com/id/1288129985/pt/vetorial/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=s5zCSbijk_vGP5gYvnOb1XnnGnYDKfiz05BQLKoW6L8=",
    });
  }

  async register(email: string, password: string): Promise<string> {
    try {
      const { user } = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user.uid;
    } catch (error) {
      throw error;
    }
  }

  async signIn(email: string, password: string): Promise<string> {
    try {
      const { user } = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user.uid;
    } catch (error) {
      throw error;
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw error;
    }
  }

  getUserLogged(): string | undefined {
    const user = this.auth.currentUser;
    return user?.uid;
  }

  async getInformationUser(id: any): Promise<any | null> {
    const docRef = doc(this.firestore, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        name: docSnap.get("name"),
        email: docSnap.get("email"),
        cep: docSnap.get("cep"),
        avatar: docSnap.get("avatar"),
        favoritesBarbers: docSnap.get("favoritesBarbers"),
        schedule: docSnap.get("schedule"),
      };
    } else {
      console.log("No such document!");
      return null;
    }
  }

  async updateFavoritesBarbers(id: string, data: any) {
    const favoritesBarbersRef = doc(this.firestore, "users", id);

    await updateDoc(favoritesBarbersRef, {
      favoritesBarbers: arrayUnion(data),
    });
  }

  async removeFavoritesBarbers(id: string, data: any) {
    const favoritesBarbersRef = doc(this.firestore, "users", id);

    await updateDoc(favoritesBarbersRef, {
      favoritesBarbers: arrayRemove(data),
    });
  }

  async updateChanges(name: string, cep: string, avatar: string, id: string) {
    const users = doc(this.firestore, "users", id);

    await updateDoc(users, {
      name: name,
      cep: cep,
      avatar: avatar,
    });
  }

  async addSchedule(userLoggedId: string, data: any) {
    const scheduleRef = doc(this.firestore, "users", userLoggedId);

    await updateDoc(scheduleRef, {
      schedule: arrayUnion(data),
    });
  }

  async removeSchedule(userLoggedId: string, data: any) {
    const scheduleRef = doc(this.firestore, "users", userLoggedId);

    await updateDoc(scheduleRef, {
      schedule: arrayRemove(data),
    });
  }
}
