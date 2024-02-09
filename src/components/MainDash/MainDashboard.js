import React from "react";
import "../MainDash/MainDashboard.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

export default function MainDashboard() {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />

      <Table />
    </div>
  );
}
