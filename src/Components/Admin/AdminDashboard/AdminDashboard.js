import React from "react";
import AddArticle from "../AddArticle/AddArticle";
import Sidebar from "../Sidebar/Sidebar";

const AdminDashboard = () => {
  return (
    <section className="flex justify-between">
      <Sidebar />
      <AddArticle />
    </section>
  );
};

export default AdminDashboard;
