import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { BsFillHouseFill, BsFillVinylFill } from "react-icons/bs";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Router, { useRouter } from "next/router";

interface Props {
  setShow: any;
  show: any;
}

function Sidebar(Props: Props) {
  const router = useRouter();
  const homeHandler = () => {
    router.push("/");
  };
  return (
    <SideNav style={{ backgroundColor: "#000" }}>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home" onClick={homeHandler}>
          <NavIcon>
            <BsFillHouseFill size={20} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default Sidebar;
