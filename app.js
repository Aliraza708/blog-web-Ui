import {onAuthStateChanged,auth,getDoc,doc,db,signOut,getDocs,collection,updateDoc,arrayRemove,arrayUnion} from "./untily.js";
const loginBtn = document.getElementById("loginBtn")
const userImage = document.getElementById("userImage")
const Logoutbtn = document.getElementById("Logoutbtn")
const popupdiv = document.getElementById("popupdiv")
const username_email = document.getElementById("username_email")
const blogshow = document.getElementById("blogshow")
