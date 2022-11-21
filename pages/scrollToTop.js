import { Button, Tooltip } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function ScrollToTop() {
  const [topButton, setTopButtton] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setTopButtton(true);
      } else {
        setTopButtton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {topButton && (
        <>
          <Tooltip title="Scroll to top" placement="top">
            <Button
              ref={target}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              style={{
                position: "fixed",
                bottom: "100px",
                height: "50px",
                right: "50px",
                border: "1px solid black",
                background: "oldlace",  
                boxShadow: "2px 3px 35px 6px grey",
              }}
              onClick={() => {
                setShow(false);
                scrollUp();
              }}
            >
              <KeyboardDoubleArrowUpIcon />
            </Button>
          </Tooltip>
        </>
      )}
    </div>
  );
}
