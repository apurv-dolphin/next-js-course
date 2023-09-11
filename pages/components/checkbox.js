/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function Checkboxs(props) {
  let { handleChange, categoryItems } = props;
  const [open, setOpen] = useState(false);

  const MAX_ITEMS = 6;

  const checkValues = () => {
    if (open) {
      return categoryItems || []; // Return an empty array if categoryItems is undefined
    }
    return categoryItems?.slice(0, MAX_ITEMS) || [];
  };

  const toggle = () => setOpen(!open);

  return (
    <>
      <div>
        <h1>Filter</h1>
        <hr />
        {checkValues()?.map((item, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <input
                style={{ cursor: "pointer" }}
                type="checkbox"
                value={item}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <p className="checkpara">{item}</p>
            </div>
          );
        })}
        <button style={{ cursor: "pointer" }} onClick={toggle}>
          {open ? "show less" : "show more"}
        </button>
      </div>
    </>
  );
}
