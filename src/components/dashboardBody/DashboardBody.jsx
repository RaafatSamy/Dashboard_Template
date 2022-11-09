import React from "react";
import "./DashboardBody.css";
import Cards from "../cards/Cards";
import Table from "../table/Table";

function DashboardBody() {
  return (
    <div className="dashboardBody">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
}

export default DashboardBody;
