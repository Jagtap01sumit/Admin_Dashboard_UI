import React from "react";
import Update from "../Updates/Update";
import "./RightSide.css";
import CustomerReview from "../CustomerReview/CustomerReview";
export default function RightSide() {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Update />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
}
