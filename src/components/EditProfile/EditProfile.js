import React, { useState } from 'react';
import { Container, GridArea, ProfileBox } from "../StylesPages/PageLayout"
import axios from 'axios';

function EditProfile() {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lasrname: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`https://dull-blue-gorilla-shoe.cyclic.app/user`, formData)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const [selectedItem, setSelectedItem] = useState('');
  const options = [
    { value: 'Dog', label: 'Dog' },
    { value: 'Cat', label: 'Cat' },
    { value: 'Exotic', label: 'Exotic' },
  ];

  const handleChoose = (event) => {
    setSelectedItem(event.target.value);
  }

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setImage(imageFile);

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(imageFile);
  }

  const handleImageUpload = (event) => {
    event.preventDefault();
    // handle image upload here
    console.log('Image file:', image);
  }

  return (
    <Container>
      <GridArea>
        <ProfileBox>
          <div style={{margin: "10px"}}>
          <form onSubmit={handleSubmit} style={{lineHeight: "45px", color: "#2a9d8f"}}>
            <label>
              Username:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              First Name:
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
          </form>
          </div>
        </ProfileBox>

        <ProfileBox>
        <div style={{margin: "10px"}}>
          <label style={{color: "#2a9d8f"}}>Select an option:</label>
          <select style={{color: "#2a9d8f"}} value={selectedItem} onChange={handleChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          <form onSubmit={handleSubmit} style={{lineHeight: "45px", color: "#2a9d8f"}}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Species:
              <input
                type="text"
                name="species"
                value={formData.species}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>Select an image:
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
            <button type="submit">Upload</button>
          </form>
        </div>
        </ProfileBox>
      </GridArea>
      <div style={{display: "flex", justifyContent: "center"}}>
        <button className="updateBtn" type="submit">Update</button>
      </div>
    </Container>
  );
}

export default EditProfile;