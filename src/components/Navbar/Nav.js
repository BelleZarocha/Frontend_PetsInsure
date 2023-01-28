import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './Nav.css'
import {
  NavBar,
  NavLogo,
  NavMenu,
  NavList,
  NavLink,
  Bars,
  ImgLogo,
} from "../StylesPages/NavBarStyles";

function Nav(props) {
  const navigate = useNavigate();
  const [showToggle, setShowToggle] = useState(false);
  const handleLogOut = (e) => {
    localStorage.removeItem("jwt");
    props.setLogin(false)
  };

  useEffect(()=>{},[props.login])

  return (
      <>
      {props.login&&(
            <>
              {/* Use components from NavBar-Style */}
              <NavBar showToggle={showToggle}>
                <Bars onClick={() => setShowToggle(!showToggle)} />

                <NavLogo to="/">
                  <ImgLogo
                      style={{ height: "70px" }}
                      src="https://drive.google.com/uc?id=1n3CYOfDPe8ghx_sexTDTsUtI8AfpfR8R&authuser=0"
                  />
                  <h1>Smile</h1>
                </NavLogo>
                <NavMenu showToggle={showToggle}>
                  <NavList>
                    <NavLink to="/profile">Profile</NavLink>
                  </NavList>
                  <NavList>
                    <NavLink to="/" onClick={handleLogOut}>
                      Log Out
                    </NavLink>
                  </NavList>
                </NavMenu>
              </NavBar>
            </>
        )}
        {!props.login&&(
            <NavBar showToggle={showToggle}>
              <Bars onClick={() => setShowToggle(!showToggle)} />
              <NavLogo to="/">
                <img
                    style={{ height: "70px", cursor:"pointer"}}
                    src="https://drive.google.com/uc?id=1n3CYOfDPe8ghx_sexTDTsUtI8AfpfR8R&authuser=0"
                />
                <h1>Smile</h1>
              </NavLogo>
              <NavMenu showToggle={showToggle}>
                <NavList>
                  <NavLink to="/register">Register</NavLink>
                </NavList>
                <NavList>
                  <NavLink to="/login">Login</NavLink>
                </NavList>
              </NavMenu>
            </NavBar>
        )
        }
      {/* Use components from NavBar-Style */}

      </>
  );
}

export default Nav;