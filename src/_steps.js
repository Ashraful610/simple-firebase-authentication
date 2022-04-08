/* 
  * Steps to use firebase
    1 . Create a project on console.firebase.google.com 
    2 . npm install firebase 
    3 . Register web app in firebase
    4 . copy firebase init with config from  firebase  project settings into a file firebase.init.js
    5 . export defult app form firebase.init.js
    6 . import app firebase init.js into your app.js
    7 . import getAuth from firebase/auth and create const auth = getAuth (app) in app.js
    8 . turn on google authentication (firebase > authentication  > enable google sign in )
    9 . create google provider
    10 . use singInWithPopup and pass auth and provider
    11 . handle .then (if successful) and catch error (ir error) 




*/