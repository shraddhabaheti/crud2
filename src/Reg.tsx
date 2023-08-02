import React from 'react'
import { useState } from 'react';
const Reg = () => {
  const[seletedImage,setSelectedImage]=useState<any>([])
    //function
    const renderPhotos = (source:any) => {
        console.log('source: ', source);
        return source.map((photo:any) => {
            return <img style={{width:'200px', height:'200px' , margin:'10px'}}src={photo} alt="" key={photo} />;
        });
    };
    const imageHandleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("filess",e.target.files)
        if(e.target.files){
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            console.log("file array",filesArray)
            setSelectedImage((prevImages:any) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file:any) => URL.revokeObjectURL(file)
            )
        }
    }
   
  return (
    <div className="app">
    <div className="heading">React Multiple Images Preview</div>
    <div>
        <input type="file" name='filee' id="file" multiple onChange={imageHandleChange} />
        <div className="label-holder">
            <label htmlFor="file" className="label">
                <i className="material-icons">AddAPhotoIcon</i>
            </label>
        </div>
        <div style={{width:'90px', height:'150px' ,display:'flex',margin:'5px'}}>{renderPhotos(seletedImage)}</div>
    </div>
</div>
  )
}











   
  

export default Reg;
