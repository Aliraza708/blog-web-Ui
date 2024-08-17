import { auth,uploadBytes,createUserWithEmailAndPassword,setDoc,db,doc,getDownloadURL,ref,storage } from "../../untily.js"
const Sign_form = document.getElementById("Sign_form");
const submit_btn = document.getElementById("submit_btn");

Sign_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    submit_btn.innerHTML = "Upload wait.."
    submit_btn.disabled = true
    // console.log("run")
    // console.log("e===>",e)
    const userName = e.target[0].value
    const userEmail = e.target[1].value
    const userPassword = e.target[2].value
    const userImage = e.target[3].files[0]
   
    const userProfile = {
        userName,
        userEmail,
        userPassword,
        userImage
    }

})
