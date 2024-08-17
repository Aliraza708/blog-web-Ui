import { uploadBytes,ref,getDownloadURL,collection,db,auth,storage,setDoc,doc,addDoc } from "../../untily.js"
const add_form = document.getElementById("add_form")
const Submit_btn = document.getElementById("Submit_btn")

add_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    Submit_btn.innerHTML = "Upload wait.."
    Submit_btn.disabled = true
    console.log("e==>",e)
    const title = e.target[0].value
    const content = e.target[1].value
    const image = e.target[2].files[0]
    const date = e.target[3].value
  const blogadd = {
    title,
    content,
    image,
    date,
    createdBy: auth.currentUser.uid,
    createdByEmail: auth.currentUser.email,
    likes: [],
  }

})