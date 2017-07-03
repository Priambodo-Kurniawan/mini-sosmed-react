import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCSOBoUpMzeiCaqKs8c6Q0CoQJi1MEnSUE",
  authDomain: "fir-auth-ecb1a.firebaseapp.com",
  databaseURL: "https://fir-auth-ecb1a.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
