"use client";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const DeleteButton = ({ c }) => {

  const handleDelete = () => {
    console.log(c);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coursifyserverapi.vercel.app/course/${c?._id}`,{
            method:"DELETE"
        }).then(res=>res.json()).then(data=>{
            // console.log(data);
            if(data.deletedCount){
                  Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        // console.log('yes');
        window.location.reload()
          
            }
            
        })
      
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      data-tip="delete"
      className="tooltip btn  btn-error rounded-full text-white"
    >
      <MdDeleteForever className="text-2xl" />
    </button>
  );
};

export default DeleteButton;
