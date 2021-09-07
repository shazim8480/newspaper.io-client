import React from "react";
import AdminForm from "../AdminForm/AdminForm";
import Sidebar from "../Sidebar/Sidebar";

const MakeAdmin = () => {
  return (
    <section className="flex justify-between">
      <Sidebar />
      <AdminForm />
    </section>
  );
};

export default MakeAdmin;
