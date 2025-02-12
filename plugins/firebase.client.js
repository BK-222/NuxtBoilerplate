import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(() => {
  const firebaseConfig = useRuntimeConfig().public.firebase;
  const app = initializeApp(firebaseConfig);

  return {
    provide: {
      // auth: getAuth(app),
      // firestore: getFirestore(app)
    }
  }
});
