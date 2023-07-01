import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CustomButton from "../components/CustomButton";



export default function Profile() {
  const { user } = useAuth();

  const repeatX =1;
  const repeatY = 1;

  return (
    <>
      <div className="text-6xl font-bold text-slate-600">User Profile</div>
      <hr className="bg-slate-400 h-1 w-full my-4" />
      <div className="block p-10 bg-white border border-gray-200 shadow-xl rounded-lg shadowdark:border-gray-700">
        <h5 className="my-2 text-2xl font-bold tracking-tight">
          Name: {user.name}
        </h5>
        <p className="font-normal text-gray-700">Email: {user.email}</p>
        <p className="font-normal text-gray-700">
          Created At: {user.created_at}
        </p>
        
          <p  className="flex justify-center items-center p-2">
		  <NavLink
            to="/app"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                : "block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white"
            }
          >
           <CustomButton 
                type="filled"
                title="Try now"
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
          </NavLink>		
		  </p>
       
      </div>
     

    </>
  );
}
