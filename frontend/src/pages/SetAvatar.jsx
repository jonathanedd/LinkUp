// import React from "react";
// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// //logo
// // import loader from "../assets/loading.gif";
// // import { setAvatarRoute } from "../utils/APIRoutes";

// function SetAvatar() {
//   const navigate = useNavigate();
//   const api = "https://ui-avatars.com/api/?name=John+Doe";

//   const [avatars, setAvatars] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedAvatar, setSelectedAvatar] = useState(undefined);

//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 8000,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//   };

//   const getRandomAvatar = Math.round(Math.random() * 10);

//   //   const setProfilePicture = async () => {};
//   useEffect(() => {
//     const response = axios
//       .get(`${api}`)
//       .then(() => {
//         console.log(response.data);
//       })
//       .catch((err) => {
//         console.log("Error al llamar a la API", err);
//       });
//   }, []);

//   return (
//     <>
//       <Container>
//         <div className="title-container">
//           <h1>Select your Avatar</h1>
//         </div>
//         <div className="avatars">{}</div>
//       </Container>
//       <ToastContainer />
//     </>
//   );
// }

// const Container = styled.div``;

// export default SetAvatar;
