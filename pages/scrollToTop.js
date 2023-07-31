import { Button, Tooltip } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function ScrollToTop() {
  const [topButton, setTopButtton] = useState(false);
  const [, setShow] = useState(false);
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
                right: "15px",
                border: "1px solid #478af1",
                borderRadius: "15px",
                background: "#478af1",
                boxShadow: "2px 3px 15px 0px grey",
              }}
              onClick={() => {
                setShow(false);
                scrollUp();
              }}
            >
              <KeyboardDoubleArrowUpIcon style={{ color: '#fff' }}/>
            </Button>
          </Tooltip>
        </>
      )}
    </div>
  );
}
