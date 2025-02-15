import { initializeApp, cert } from 'firebase-admin/app'

export default defineNitroPlugin(() => {

  const firebaseAdminConfig = useRuntimeConfig().firebaseAdmin;

  initializeApp({
    credential: cert({
      // projectId: firebaseAdminConfig.projectId,
      // clientEmail: firebaseAdminConfig.clientEmail,
      // privateKey: firebaseAdminConfig.privateKey
    })
  })
})