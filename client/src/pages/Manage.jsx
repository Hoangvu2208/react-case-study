import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "../axios";

export default function Manage() {
  const { user, setUser } = useAuth();

  const [userList, setUserList] = useState([]);

  // check if user is logged in or not from server
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("/users");
        //console.log(resp);
        if (resp.status === 200) {
          setUserList(resp.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(userList);

  return (
    <>
      <div className="text-6xl font-bold text-slate-600">Manage page</div>
      <hr className="bg-slate-400 h-1 w-full my-4" />
      {user.isAdmin ? (
        <p className="font-normal text-gray-700">Hello Admin</p>
      ) : (
        ""
      )}
      <div className="block p-10 bg-white border border-gray-200 shadow-xl rounded-lg shadowdark:border-gray-700">
        <table className="table-auto border-collapse border border-slate-500 p-2 hover:table-fixed">
          <thead>
            <tr className="p-2">
              <th className="border border-slate-600">Name</th>
              <th className="border border-slate-600">Email</th>
              <th className="border border-slate-600">Created At</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((users,i) => (
              <tr key={i}
               className="p-2">
                <td className="border border-slate-700">{users.name}</td>
                <td className="border border-slate-700">{users.email}</td>
                <td className="border border-slate-700">{user.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
