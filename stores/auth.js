import { defineStore } from 'pinia';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    signin(payload) {
      return this.auth({ ...payload, method: 'login' });
    },
    signup(payload) {
      return this.auth({ ...payload, method: 'signup' });
    },
    auth: async function(auth, email, password, mode) {
      try {
        const userCredential = mode === 'login' 
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);

        this.user = userCredential.user;

      } catch (error) {
        console.error("Auth error:", error);
        throw error;
      }
    },
    signout: async function() {
      try {
        this.user = null;
      } catch (error) {
        console.error("Signout error:", error);
        throw error;
      }
    }
  }
});