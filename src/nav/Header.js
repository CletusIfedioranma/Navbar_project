import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import {Signupcontext} from "../helper/Context"

// const [isAuth, setisAuth] = useState(false);

function Header() {
  const [extended, setextended] = useState(true);
  const [isAuth, setisAuth] = useState(true);
  const [state, setstate] = useState("");
  const [truce, settruce] = useState({ opacity: "" });

  const [toggle, settoggle] = useState(false);
  const [arrow5, setarrow5] = useState(false);
  const [arrow6, setarrow6] = useState(false);
  const [arrow1, setarrow1] = useState(false);
  const [arrow2, setarrow2] = useState(false);
  const [arrow3, setarrow3] = useState(false);
  const [arrow4, setarrow4] = useState(false);
  const [toggles, settoggles] = useState(false);
  const [shiftin, setshiftin] = useState(false);

  function toggleon() {
    settoggle(true);
    settoggles(false);
    if (toggle) settoggle(false);
  }

  function toggleons() {
    settoggles(true);
    settoggle(false);

    if (toggles) settoggles(false);
  }

  return (
 
    <div>
         {/* <Signupcontext.Provider
         value={{shiftin,setshiftin}}> */}
    
      <nav>
        <header className="minheader">
          {extended && (
            <MenuIcon
              fontSize="medium"
              className="open"
              onClick={() => {
                setextended(false);
                document.body.style.overflowY = "hidden";
                settruce((prevs) => {
                  return { ...prevs, opacity: "0.6" };
                });
              }}
            />
          )}
          {!extended && (
            <CloseIcon
              fontSize="medium"
              className="closed"
              onClick={() => {
                setextended((curr) => !curr);
                document.body.style.overflowY = "visible";
                settruce((prevs) => {
                  return { ...prevs, opacity: "" };
                });
              }}
            />
          )}
        </header>
        <header className="maxheader">
          {" "}
          <div style={{ marginLeft: "100px" }} onClick={toggleon}>
            <p className="d_1">
              Dropdown 1
              {toggle ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </p>
            {toggle && (
              <div className="r-h">
                <>
                  <div className="li">
                    <Link to={"/"}>
                      <a
                    href="/"
                        onMouseEnter={() => {
                          setarrow1(true);
                          
                        }}
                        onMouseLeave={() => {
                          setarrow1(true);
                        }}
                      >
                        link 1{" "}
                        {arrow1 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="li">
                    <Link to={"/linked2"}>
                      <a

                         href="/linked2"
                         
                        onMouseEnter={() => {
                          setarrow2(true);
                        }}
                        onMouseLeave={() => {
                          setarrow2(false);
                        }}
                      >
                        link 2{" "}
                        {arrow2 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="li">
                    <Link to={"/linked3"}>
                      <a
                      href="/linked3"
                        onMouseEnter={() => {
                          setarrow3(true);
                        }}
                        onMouseLeave={() => {
                          setarrow3(false);
                        }}
                      >
                        link 3{" "}
                        {arrow3 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}
                      </a>
                    </Link>
                  </div>
                  <div className="li">
                    <Link to={"/linked4"}>
                      <a
                      href="/linked4"
                        onMouseEnter={() => {
                          setarrow4(true);
                        }}
                        onMouseLeave={() => {
                          setarrow4(false);
                        }}
                      >
                        link 4{" "}
                        {arrow4 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}
                      </a>
                    </Link>
                  </div>
                  <div className="li">
                    <Link to={"/linked5"}>
                      <a
                      href="/linked5"
                        onMouseEnter={() => {
                          setarrow5(true);
                        }}
                        onMouseLeave={() => {
                          setarrow5(false);
                        }}
                      >
                        link 5{" "}
                        {arrow5 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}
                      </a>
                    </Link>
                  </div>
                  <div className="li">
                    <Link to={"/linked6"}>
                      <a

                      href="/linked6"

                        onMouseEnter={() => {
                          setarrow6(true);
                        }}
                        onMouseLeave={() => {
                          setarrow6(false);
                        }}
                      >
                        link 6{" "}
                        {arrow6 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}
                      </a>
                    </Link>
                  </div>
                </>
              </div>
            )}
          </div>
          <div style={{ marginLeft: "100px" }} onClick={toggleons}>
            <p className="d_2">
              Dropdown 2
              {toggles ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </p>
            {toggles && (
              <div className="r-hs">
                <>
                  <div className="li">
                    <Link to={"/"}>
                      <a

                        href="/"

                        onMouseEnter={() => {
                          setarrow1(true);
                        }}
                        onMouseLeave={() => {
                          setarrow1(false);
                        }}
                      >
                        link 1{" "}
                        {arrow1 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="li">
                    <Link to={"/linked2"}>
                      <a

                      href="/linked2"

                        onMouseEnter={() => {
                          setarrow2(true);
                        }}
                        onMouseLeave={() => {
                          setarrow2(false);
                        }}
                      >
                        link 2{" "}
                        {arrow2 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="li">
                    <Link to={"/linked3"}>
                      <a

                          href="/linked3"

                        onMouseEnter={() => {
                          setarrow3(true);
                        }}
                        onMouseLeave={() => {
                          setarrow3(false);
                        }}
                      >
                        link 3{" "}
                        {arrow3 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}
                      </a>
                    </Link>
                  </div>
                  <div className="li">
                    <Link to={"/linked4"}>
                      <a

                      href="/linked4"

                        onMouseEnter={() => {
                          setarrow4(true);
                        }}
                        onMouseLeave={() => {
                          setarrow4(false);
                        }}
                      >
                        link 4{" "}
                        {arrow4 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}
                      </a>
                    </Link>
                  </div>
                  <div className="li">
                    <Link to={"/linked5"}>
                      <a

                       href="/linked5"

                        onMouseEnter={() => {
                          setarrow5(true);
                        }}
                        onMouseLeave={() => {
                          setarrow5(false);
                        }}
                      >
                        link 5{" "}
                        {arrow5 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}
                      </a>
                    </Link>
                  </div>
                  <div className="li">
                    <Link to={"/linked6"}>
                      <a

                      href="/linked6"

                        onMouseEnter={() => {
                          setarrow6(true);
                        }}
                        onMouseLeave={() => {
                          setarrow6(false);
                        }}
                      >
                        link 6{" "}
                        {arrow6 && (
                          <div className="cr_1">
                            {" "}
                            <ArrowRightAltIcon fontSize="small" />
                          </div>
                        )}
                      </a>
                    </Link>
                  </div>
                </>
              </div>
            )}
          </div>
        </header>
        {!extended && (
          <div className="extended">
            {" "}
            <div
              className="de_2"
              onClick={() => {
                settoggle(true);
                if (toggle) {
                  settoggle(false);
                }
              }}
            >
              <p className="d1">Dropdown 1</p>
              {toggle ? (
                <div className="kad_1">
                  <KeyboardArrowDownIcon fontSize="small" />
                </div>
              ) : (
                <div className="cri_1">
                  {" "}
                  <ChevronRightIcon fontSize="small" />
                </div>
              )}
            </div>{" "}
            {toggle && (
              <div className="e_m1">
                {" "}
                <div className="li">
                  <Link to={"/"}>
                    <a

                    href="/"

                      onClick={() => {
                        setextended(true);
                      }}
                    >
                      link 1{" "}
                    </a>
                  </Link>
                </div>
                <div className="li">
                  <Link to={"/linked2"}>
                    <a

                      href="/linked2"

                      onClick={() => {
                        setextended(true);
                      }}
                    >
                      link 2{" "}
                    </a>
                  </Link>
                </div>
                <div className="li">
                  <Link to={"/linked3"}>
                    <a
                    href="/linked3"
                      onClick={() => {
                        setextended(true);
                      }}
                    >
                      link 3{" "}
                    </a>
                  </Link>
                </div>
                <div className="li">
                  <Link to={"/linked4"}>
                    <a

                    href="/linked4"

                      onClick={() => {
                        setextended(true);
                      }}
                    >
                      link 4{" "}
                    </a>
                  </Link>
                </div>
                <div className="li">
                  <Link to={"/linked5"}>
                    <a

                    href="/linked5"

                      onClick={() => {
                        setextended(true);
                      }}
                    >
                      link 5{" "}
                    </a>
                  </Link>
                </div>
              </div>
            )}{" "}
            <div
              className="de_2"
              onClick={() => {
                settoggles(true);
                if (toggles) {
                  settoggles(false);
                }
              }}
            >
              <p className="d2">Dropdown 2</p>
              {toggles ? (
                <div className="kad_2">
                  <KeyboardArrowDownIcon fontSize="small" />
                </div>
              ) : (
                <div className="cri_2">
                  <ChevronRightIcon fontSize="small" />
                </div>
              )}
            </div>{" "}
            {toggles && (
              <div className="e_m2">
                {" "}
                <div className="li">
                  <Link to={"/"}>
                    <a

                    href="/"

                      onClick={() => {
                        setextended(true);
                      }}
                    >
                      link 1{" "}
                    </a>
                  </Link>
                </div>
                <div className="li">
                  <Link to={"/linked2"}>
                    <a
                    
                    href="/linked2"

                      onClick={() => {
                        setextended(true);
                      }}
                    >
                      link 2{" "}
                    </a>
                  </Link>
                </div>
                <div className="li">
                  <Link to={"/linked3"}>
                    <a
                    
                    href="/linked3"

                      onClick={() => {
                        setextended(true);
                      }}
                    >
                      link 3{" "}
                    </a>
                  </Link>
                </div>
              </div>
            )}{" "}
          </div>
        )}
      </nav>
      {/* </Signupcontext.Provider> */}
    </div>
  );
}

export default Header;
