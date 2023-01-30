// // import React, { useState } from 'react';
// // import { Container, GridArea, ProfileBox } from "../StylesPages/PageLayout"
// // import axios from 'axios';

// // function EditProfile() {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     firstname: '',
// //     lasrname: '',
// //     email: '',
// //     phone: '',
// //     address: '',
// //   });

// //   const handleChange = e => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = e => {
// //     e.preventDefault();
// //     axios
// //       .get(`https://dull-blue-gorilla-shoe.cyclic.app/user`, formData)
// //       .then(res => {
// //         console.log(res.data);
// //       })
// //       .catch(err => {
// //         console.error(err);
// //       });
// //   };

// //   const [selectedItem, setSelectedItem] = useState('');
// //   const options = [
// //     { value: 'Dog', label: 'Dog' },
// //     { value: 'Cat', label: 'Cat' },
// //     { value: 'Exotic', label: 'Exotic' },
// //   ];

// //   const handleChoose = (event) => {
// //     setSelectedItem(event.target.value);
// //   }

// //   const [image, setImage] = useState(null);
// //   const [imageUrl, setImageUrl] = useState('');

// //   const handleImageChange = (event) => {
// //     const imageFile = event.target.files[0];
// //     setImage(imageFile);

// //     const reader = new FileReader();
// //     reader.onload = () => {
// //       setImageUrl(reader.result);
// //     };
// //     reader.readAsDataURL(imageFile);
// //   }

// //   const handleImageUpload = (event) => {
// //     event.preventDefault();
// //     // handle image upload here
// //     console.log('Image file:', image);
// //   }

// //   return (
// //     <Container>
// //       <GridArea>
// //         <ProfileBox>
// //           <div style={{margin: "10px"}}>
// //           <form onSubmit={handleSubmit} style={{lineHeight: "45px", color: "#2a9d8f"}}>
// //             <label>
// //               Username:
// //               <input
// //                 type="text"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //               />
// //             </label>
// //             <br />
// //             <label>
// //               First Name:
// //               <input
// //                 type="text"
// //                 name="firstname"
// //                 value={formData.firstname}
// //                 onChange={handleChange}
// //               />
// //             </label>
// //             <br />
// //             <label>
// //               Last Name:
// //               <input
// //                 type="text"
// //                 name="lastname"
// //                 value={formData.lastname}
// //                 onChange={handleChange}
// //               />
// //             </label>
// //             <br />
// //             <label>
// //               Email:
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //               />
// //             </label>
// //             <br />
// //             <label>
// //               Phone:
// //               <input
// //                 type="text"
// //                 name="phone"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //               />
// //             </label>
// //             <br />
// //             <label>
// //               Address:
// //               <input
// //                 type="text"
// //                 name="address"
// //                 value={formData.address}
// //                 onChange={handleChange}
// //               />
// //             </label>
// //           </form>
// //           </div>
// //         </ProfileBox>

// //         <ProfileBox>
// //         <div style={{margin: "10px"}}>
// //           <label style={{color: "#2a9d8f"}}>Select an option:</label>
// //           <select style={{color: "#2a9d8f"}} value={selectedItem} onChange={handleChange}>
// //             {options.map(option => (
// //               <option key={option.value} value={option.value}>{option.label}</option>
// //             ))}
// //           </select>
          
// //           <form onSubmit={handleSubmit} style={{lineHeight: "45px", color: "#2a9d8f"}}>
// //             <label>
// //               Name:
// //               <input
// //                 type="text"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //               />
// //             </label>
// //             <br />
// //             <label>
// //               Species:
// //               <input
// //                 type="text"
// //                 name="species"
// //                 value={formData.species}
// //                 onChange={handleChange}
// //               />
// //             </label>
// //             <br />
// //             <label>Select an image:
// //               <input type="file" accept="image/*" onChange={handleImageChange} />
// //             </label>
// //             <button type="submit">Upload</button>
// //           </form>
// //         </div>
// //         </ProfileBox>
// //       </GridArea>
// //       <div style={{display: "flex", justifyContent: "center"}}>
// //         <button className="updateBtn" type="submit">Update</button>
// //       </div>
// //     </Container>
// //   );
// // }

// // export default EditProfile;

// import React, {useEffect, useState} from 'react';
// import { Container, GridArea, ProfileBox } from "../StylesPages/PageLayout"
// import axios from 'axios';

// function EditProfile() {
//   // const [formData, setFormData] = useState({
//   //   username: '',
//   //   firstname: '',
//   //   lasrname: '',
//   //   email: '',
//   //   phone: '',
//   //   address: '',
//   //   pet:{
//   //     name:"",
//   //     species: "",
//   //   }
//   // });

//   const [user, setUser] = useState({})
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [firstname, setFirstname] = useState("")
//   const [lastname, setLastname] = useState("")
//   const [phone, setPhone] = useState("")
//   const [address, setAddress] = useState("")
//   const [email, setEmail] = useState("")
//   const [petPackage, setPetPackage] = useState("")
//   const [pet, setPet] = useState({})
//   const [petName, setPetName] = usestate("")
//   const [petSpecies, setPetSpecies] = usestate("")

//   useEffect(()=>{
//     console.log("test");
//     axios
//         .get(`https://dull-blue-gorilla-shoe.cyclic.app/user/getprofile`,
//     {
//       headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`},
//     }
//         )
//         .then(res => {
//           console.log(res);
//           // setFormData(res.data)
//         })
//         .catch(err => {
//           console.error(err);
//         });

//   },[])
//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const edit = (e) => {

//     axios
//         .put(
//             `https://dull-blue-gorilla-shoe.cyclic.app/user/edit`,
//             {
//               username: formData.username,
//               password: formData.password,
//               firstname: formData.firstname,
//               lastname: formData.lastname,
//               address: formData.address,
//               email: formData.email,
//               phone: formData.phone,
//             },
//             {
//               headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`},
//             }
//         )
//         .then((res) => {
//           console.log(res);

//         });
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     axios
//       .get(`https://dull-blue-gorilla-shoe.cyclic.app/user`, formData)
//       .then(res => {
//         console.log(res.data);
//         setFormData(res.data)
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   };

//   const [selectedItem, setSelectedItem] = useState('');
//   const options = [
//     { value: 'Dog', label: 'Dog' },
//     { value: 'Cat', label: 'Cat' },
//     { value: 'Exotic', label: 'Exotic' },
//   ];

//   const handleChoose = (event) => {
//     setSelectedItem(event.target.value);
//   }

//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState('');

//   const handleImageChange = (event) => {
//     const imageFile = event.target.files[0];
//     setImage(imageFile);

//     const reader = new FileReader();
//     reader.onload = () => {
//       setImageUrl(reader.result);
//     };
//     reader.readAsDataURL(imageFile);
//   }

//   const handleImageUpload = (event) => {
//     event.preventDefault();
//     // handle image upload here
//     console.log('Image file:', image);
//   }

//   return (
//     <Container>
//       <GridArea>
//         <ProfileBox>
//           <div style={{margin: "10px"}}>
//           <form onSubmit={handleSubmit} style={{lineHeight: "45px", color: "#2a9d8f"}}>
//             <label>
//               Username:
//               <input
//                 type="text"
//                 name="username"
//                 value={user.username}
//                 onChange={(e) => { setUsername(e.target.value) }}
//                 defaultValue={res.data.username}
//               />
//             </label>
//             <br />
//             <label>
//               First Name:
//               <input
//                 type="text"
//                 name="firstname"
//                 value={user.firstname}
//                 onChange={(e) => { setFirstname(e.target.value) }}
//                 defaultValue={res.data.firstname}
//               />
//             </label>
//             <br />
//             <label>
//               Last Name:
//               <input
//                 type="text"
//                 name="lastname"
//                 value={user.lastname}
//                 onChange={(e) => { setLastname(e.target.value) }}
//                 defaultValue={res.data.lastname}
//               />
//             </label>
//             <br />
//             <label>
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 value={user.email}
//                 onChange={(e) => { setEmail(e.target.value) }}
//                 defaultValue={res.data.email}
//               />
//             </label>
//             <br />
//             <label>
//               Phone:
//               <input
//                 type="text"
//                 name="phone"
//                 value={user.phone}
//                 onChange={(e) => { setPhone(e.target.value) }}
//                 defaultValue={res.data.phone}
//               />
//             </label>
//             <br />
//             <label>
//               Address:
//               <input
//                 type="text"
//                 name="address"
//                 value={user.address}
//                 onChange={(e) => { setAddress(e.target.value) }}
//                 defaultValue={res.data.address}
//               />
//             </label>
//           </form>
//           </div>
//         </ProfileBox>

//         <ProfileBox>
//         <div style={{margin: "10px"}}>
//           <label style={{color: "#2a9d8f"}}>Select an option:</label>
//           <select style={{color: "#2a9d8f"}} value={selectedItem} onChange={handleChange}>
//             {options.map(option => (
//               <option key={option.value} value={option.value}>{option.label}</option>
//             ))}
//           </select>
          
//           <form onSubmit={handleSubmit} style={{lineHeight: "45px", color: "#2a9d8f"}}>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={pet.name}
//                 onChange={(e) => { setPetName(e.target.value) }}
//                 defaultValue={res.data.petName}
//               />
//             </label>
//             <br />
//             <label>
//               Species:
//               <input
//                 type="text"
//                 name="species"
//                 value={formData.pet.species}
//                 onChange={(e) => { setPetSpecies(e.target.value) }}
//                 defaultValue={res.data.petSpecies}
//               />
//             </label>
//             <br />
//             <label>Select an image:
//               <input type="file" accept="image/*" onChange={handleImageChange} />
//               <button type="submit">Upload</button>
//             </label>
//             <br />
//             Pets Insurance:
//               <label
//                 type="text"
//                 name="insurancePackage"
//                 value={pet.petPackage}
//                 onChange={(e) => { setPetPackage(e.target.value) }}
//                 defaultValue={res.data.petPackage}
//               />
//           </form>
//         </div>
//         </ProfileBox>
//       </GridArea>
//       <div style={{display: "flex", justifyContent: "center"}}>
//         <button className="updateBtn" type="submit">Update</button>
//       </div>
//     </Container>
//   );
// }

// export default EditProfile;

import React, {useEffect, useState} from 'react';
import { Container, GridArea, ProfileBox } from "../StylesPages/PageLayout"
import axios from 'axios';

function EditProfile() {
const [user, setUser] = useState({})
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [firstname, setFirstname] = useState("")
const [lastname, setLastname] = useState("")
const [phone, setPhone] = useState("")
const [address, setAddress] = useState("")
const [email, setEmail] = useState("")
const [petPackage, setPetPackage] = useState("")
const [pet, setPet] = useState({})
const [petName, setPetName] = useState("")
const [petSpecies, setPetSpecies] = useState("")
useEffect(()=>{
  console.log("test");
  axios
      .get(`https://dull-blue-gorilla-shoe.cyclic.app/user/getprofile`,
          {
            headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`},
          }
      )
      .then(res => {
        console.log(res);

        // setFormData(res.data)
          setFirstname(res.data.firstname)
          setUsername(res.data.username)
          setLastname(res.data.lastname)
          setEmail(res.data.email)
        setPetSpecies(res.data.pet.species)
        setPetPackage(res.data.pet.package_id)
        setPetName(res.data.pet.name)

      })
      .catch(err => {
        console.error(err);
      });
},[])
// const handleChange = e => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// };
const edit = (e) => {
  axios
      .put(
          `https://dull-blue-gorilla-shoe.cyclic.app/user/edit`,
          {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            address: address,
            email: email,
            phone: phone,
          },
          {
            headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`},
          }
      )
      .then((res) => {
        console.log(res);
      });
};
const handleSubmit = e => {
  e.preventDefault();
  axios
      .get(`https://dull-blue-gorilla-shoe.cyclic.app/user`, {})
      .then(res => {
        console.log(res.data);
        // setFormData(res.data)
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
            <form onSubmit={handleSubmit} style={{lineHeight: "45px", color: "#2A9D8F"}}>
              <label>
                Username:
                <input
                    type="text"
                    name="username"
                    // value={user.username}
                    onChange={(e) => { setUsername(e.target.value) }}
                    defaultValue={username}
                />
              </label>
              <br />
              <label>
                First Name:
                <input
                    type="text"
                    name="firstname"
                    // value={firstname}
                    onChange={(e) => { setFirstname(e.target.value) }}
                    defaultValue={firstname}
                />
              </label>
              <br />
              <label>
                Last Name:
                <input
                    type="text"
                    name="lastname"
                    // value={user.lastname}
                    onChange={(e) => { setLastname(e.target.value) }}
                    defaultValue={lastname}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                    type="email"
                    name="email"
                    // value={user.email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    defaultValue={email}
                />
              </label>
              <br />
              <label>
                Phone:
                <input
                    type="text"
                    name="phone"
                    // value={user.phone}
                    onChange={(e) => { setPhone(e.target.value) }}
                    defaultValue={phone}
                />
              </label>
              <br />
              <label>
                Address:
                <input
                    type="text"
                    name="address"
                    // value={user.address}
                    onChange={(e) => { setAddress(e.target.value) }}
                    defaultValue={address}
                />
              </label>
            </form>
          </div>
        </ProfileBox>
        <ProfileBox>
          <div style={{margin: "10px"}}>
            <label style={{color: "#2A9D8F"}}>Select an option:</label>
            <select style={{color: "#2A9D8F"}} value={selectedItem} onChange={()=>{console.log("test")}}>
              {options.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <form onSubmit={handleSubmit} style={{lineHeight: "45px", color: "#2A9D8F"}}>
              <label>
                Name:
                <input
                    type="text"
                    name="name"
                    // value={pet.name}
                    onChange={(e) => { setPetName(e.target.value) }}
                    defaultValue={petName}
                />
              </label>
              <br />
              <label>
                Species:
                <input
                    type="text"
                    name="species"
                    // value={formData.pet.species}
                    onChange={(e) => { setPetSpecies(e.target.value) }}
                    defaultValue={petSpecies}
                />
              </label>
              <br />
              <label>Select an image:
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <button type="submit">Upload</button>
              </label>
              <br />
              Pets Insurance:
              <label
                  type="text"
                  name="insurancePackage"
                  // value={pet.petPackage}
                  // onChange={(e) => { setPetPackage(e.target.value) }}
                  defaultValue={petPackage}
              />
              <input
                  type="text"
                  name="package"
                  defaultValue={petPackage}
              />
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