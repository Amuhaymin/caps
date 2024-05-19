'use client';
import axios from "axios";
import UploadIcon from "./UploadIcon";
export default function UploadForm(){
  async function upload(ev){
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length>0){
      const file =  files[0];
     const res = await axios.post('/api/upload', {
        file,
      })
      console.log(res.data);
  }
}
  return(
    <label className="bg-blue-100 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-blue-900/50 cursor-pointer">
    <UploadIcon />
     <span>Choose file</span>
     <input onChange= {upload} type="file" className="hidden"/>
   </label>
  );
}