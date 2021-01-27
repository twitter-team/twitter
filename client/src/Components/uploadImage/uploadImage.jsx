import React, { useState } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import "./uploadImage.css"
const CloudImage = () => {

  const [loading, setLoading] = useState(false)
  // console.log('profileImage', profileImage)

  const uploadImage = (e) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'pqcz20rh')

    const requestOptions = {
      method: 'POST',
      body: formData
    };
    fetch('	https://api.cloudinary.com/v1_1/dzjchtsxn/image/upload', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("imaaaaaaaaaaage",data.secure_url)
      });

  }

//   const updateImage = (obj) => {
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(obj)
//     };
//     if (role === 'patient') {
//       fetch('http://127.0.0.1:8000/patient/upload', requestOptions)
//         .then(response => response.json())
//         .then(data => console.log(data));
//     }
//     if (role === 'doctor') {
//       fetch('http://127.0.0.1:8000/doctor/update', requestOptions)
//         .then(response => response.json())
//         .then(data => console.log(data));
//     }

//   }



  return (
        <div className="user_upload">
          <input
            type="file"
            id="file"
            name="file"
            className='user_inputfile'
            onChange={uploadImage}
            accept="image/*"
          />
          <label for="file" style={{cursor:"pointer"}}>
          <ImageIcon  color="primary"/>
          </label>
        </div>
  )

}



export default CloudImage;
