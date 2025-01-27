import React from "react";
import { Button } from "reactstrap";
import TopNav from "../topNav/TopNav";
import CustomForm from "../formComponent.js/CustomForm";

export default function MainFrame() {
  return (
    <div className="border-red overflow-auto vh-100 vw-100">
      <div style={{ position: "fixed" }}>
        <TopNav />
      </div>
      <div
        className=" d-flex justify-content-center p-2"
        style={{ marginTop: "5rem" }} // Adjust marginTop for TopNav height
      >
        <CustomForm
          showAllFields={true}
          headerText="Optimierung von einem Fahrzeug"
        />
        <div
          style={{
            width: 0,
            border: "1px solid black",
            marginInline: "3rem",
            minHeight: "100%",
          }}
        ></div>
        <CustomForm
          showAllFields={false}
          headerText="Start mit eScore-Report"
        />
      </div>
    </div>
  );
}
