import React from 'react'
import { Link } from "react-router-dom";
const MobileNav = ({navMenu, setNavMenu}) => {
    return (
      <>
        {navMenu && (
          <div className=" bg-black/80 flex flex-col  items-center justify-center gap-y-5 text-3xl capitalize w-full scroll-none h-screen font-bold text-stone-100 transition-all fixed inset-3 duration-500 overflow-hidden ">
            <Link
              to="/contact"
              onClick={() => setNavMenu(!navMenu)}
              className=" hover:text-amber-700   transition-opacity duration-500"
            >
              {" "}
              contact{" "}
            </Link>
            <Link onClick={() => setNavMenu(!navMenu)} to="/" className=" ">
              {" "}
              discover{" "}
            </Link>
            <Link onClick={() => setNavMenu(!navMenu)} to="/" className=" ">
              {" "}
              bookings{" "}
            </Link>
            <Link onClick={() => setNavMenu(!navMenu)} to="/" className=" ">
              {" "}
              products{" "}
            </Link>
          </div>
        )}
      </>
    );
};

export default MobileNav