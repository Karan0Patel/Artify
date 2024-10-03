import React from 'react'
import '../utils/Assets/CSS/EditProfile.css'
import Header from '../Reusables/Header';
import Footer from '../Reusables/Footer'

const EditProfile = () => {
    return (
     
      <div className="edit-profile-container">
        <Header/>
        <div className="background-image">
          {/* Mountains PixaBay https://cdn.pixabay.com/photo/2022/10/10/07/58/mountain-7511116_1280.jpg */}
          <img class="banner" src="https://cdn.pixabay.com/photo/2022/10/10/07/58/mountain-7511116_1280.jpg" alt="Background" />
          <div className="profile-photo">
            {/* BobCat istockPhoto https://cdn.pixabay.com/photo/2022/10/10/07/58/mountain-7511116_1280.jpg */}
            <img src="https://media.istockphoto.com/id/1835504092/photo/the-bobcat-also-known-as-the-red-lynx-is-a-medium-sized-cat-native-to-north-america-it-ranges.jpg?s=2048x2048&w=is&k=20&c=I9vLSFG7fqt9V_07air8WacQ12evZZYaq1IYVGCifrE=" alt="Profile" />
          </div>
          <button className="upload-photo-btn">Upload Profile Photo</button>
          <div className="camera-icon">
            <i className="fa fa-camera"></i>
          </div>
        </div>
        <div className="form-section">
          <h2 className="heading">Information</h2>
          <div className="nameUserName">
            <div className="input-container">
              <label className="labelData">Full Name *</label>
              <input className="inputClass" placeholder="John Doe" />
            </div>
            <div className="input-container">
              <label className="labelData">Username *</label>
              <input className="inputClass" placeholder="Space Monk" />
            </div>
          </div>
  
          <div className="input-container">
            <label className="labelData">Password *</label>
            <input type="password" className="inputClass" placeholder="Password" />
          </div>
  
          <div className="input-container">
            <label className="labelData">Email *</label>
            <input type="email" className="inputClass" placeholder="Email" />
          </div>
  
          <div className="input-container">
            <label className="labelData">Bio</label>
            <textarea
              className="textareaClass"
              placeholder="Write something about yourself so people know more about you"
            ></textarea>
          </div>
  
          <button className="submit">Update Profile</button>
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default EditProfile;