import React, { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="sm:w-full h-8 flex flex-row justify-between items-center">
        <div
          id="one"
          className=" h-14  flex items-center cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <img className="w-28" src="assets/images/logo1.png" alt="" />
          <img className="w-10" src="assets/svg/svg1.svg" alt="" />
        </div>
        {toggle && (
          <div
            id="second"
            className="h-14 w-36 bg-[#1c2b33] rounded-md text-stone-50 font-bold text-lg"
          >
            <ul className="pl-5">
              <li>Following</li>
              <li>Favorites</li>
            </ul>
          </div>
        )}
        <div className="sm:w-1/2  flex justify-center">
          <img className="w-8" src="assets/svg/svg2.svg" alt="svg1" />
          <img className="w-8" src="assets/svg/svg3.svg" alt="svg2" />
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4" />
    </>
  );
}

export default Navbar;
