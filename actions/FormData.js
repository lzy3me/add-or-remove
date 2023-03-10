import { useState, useEffect } from "react";
// import {
//   getAllUsers,
//   deleteUser,
//   createNewUser,
//   updateUser,
// } from "../api/FormUserData";

const staticDataset = {
  username: "",
  email: "",
  zipcode: "",
};

const FormData = () => {
  const [dataset, updateDataset] = useState([]);

  useEffect(async () => {
    updateDataset(JSON.parse(localStorage.getItem("list_item")));
		
    // use when have working backend
    // await getAllUsers().then(val => {
    //     updateDataset(val.data)
    // })
  }, []);

  const onAppend = () => {
    updateDataset((prev) => [...prev, staticDataset]);
  };

  const onUpdateDataset = (index, datas) => {
    let newArr = [...dataset];
    newArr[index] = datas;
    updateDataset(newArr) 
  };

  const onRemove = (target, id) => {
    updateDataset((prev) => {
      const newArr = [...prev];
      newArr.splice(target, 1);
			localStorage.setItem("list_item", JSON.stringify(newArr));

      return [...newArr];
    });
    console.log('removed', {id: target, data: dataset})
  };

  const onSubmit = () => {
		localStorage.setItem("list_item", JSON.stringify(dataset));

		// Submit data logic with API using MongoDB
    // dataset.map((val) => {
    //   console.log(val);
    //   if (val._id)
    //     updateUser(val._id, {
    //       username: val.username,
    //       email: val.email,
    //       zipcode: val.zipcode,
    //     });
    //   else
    //     createNewUser({
    //       username: val.username,
    //       email: val.email,
    //       zipcode: val.zipcode,
    //     });
    // });
  };

  return [dataset, onAppend, onUpdateDataset, onRemove, onSubmit];
};

export default FormData;
