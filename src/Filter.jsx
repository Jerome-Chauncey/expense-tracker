import React from "react";

function Filter({ onSearchChange, search }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={search}
        onChange={onSearchChange}
        style={{ width: "300px" }} 
      />
    </div>
  );
}
export default Filter;
