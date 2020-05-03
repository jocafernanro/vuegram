import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: `${process.env.VUE_APP_API_KEY}`,
  authDomain: `${process.env.VUE_APP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.VUE_APP_DATABASE_URL}`,
  projectId: `${process.env.VUE_APP_PROJECT_ID}`,
  storageBucket: `${process.env.VUE_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.VUE_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.VUE_APP_APP_ID}`,
  measurementId: `${process.env.VUE_APP_MEASUREMENT_ID}`
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {}

db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
