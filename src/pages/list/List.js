import React from "react";
import DataTable from "../../components/datatable/DataTable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./List.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
