"use client";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation"; // Usage: App router
// Either
// import { useRouter } from 'next/router'
const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="btn btn-link text-2xl font-semibold mt-4"
        type="button"
        onClick={() => router.back()}
      >
        <IoIosArrowBack />
        Go Back
      </button>
    </div>
  );
};

export default BackButton;
