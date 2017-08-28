/* imports */
import config from './config';
import * as firebase from "firebase";

const view = document.getElementById('view');

/* init firebase with apikey... */
firebase.initializeApp(config);

/* get ref to database */
var ref = firebase.database().ref();

/* print error */
function onError(errot){
  console.log(error);
}

/* show data on init */
ref.on('value', snap => set(snap.val()),onError);

/* show data if change something */
ref.on('child_changed', snap => set(snap.val()),onError);

/* show data */
function set(s){
  view.innerHTML = s;
}
