import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

import React from "react";
import { FiHome } from "react-icons/fi";
import { FaBoxOpen } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function Sidenav(props) {
  const history = useHistory();

  return (
    <div className="sm:mr-10">
      <SideNav
        onSelect={(sel) => {
          console.log(sel);
          history.push("/dashboard/" + sel);
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <FiHome size="2rem" style={{ marginLeft: 12, marginTop: 10 }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="stocking">
            <NavIcon>
              <FaBoxOpen
                size="2rem"
                style={{ marginLeft: 12, marginTop: 10 }}
              />
            </NavIcon>
            <NavText>Stocking</NavText>
          </NavItem>
          <NavItem eventKey="billing">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Billing</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
