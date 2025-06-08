import React from "react";

function Card({ username, btntext = "Read More" }) {
  // console.log(username);
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black border">
        <img
          src="https://images.pexels.com/photos/10957355/pexels-photo-10957355.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          tempora ipsum soluta amet
        </p>
        <button>{btntext}</button>
      </div>
    </div>
  );
}

export default Card;
