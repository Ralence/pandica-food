/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { Button } from "theme-ui";
import { FaStore, FaListAlt, FaShoppingCart } from "react-icons/fa";

import styled from "@emotion/styled";
import theme from "../../theme";

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 140px;
  width: 100%;
  max-width: 1200px;
  border: 1px solid #eee;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const BigLogo = styled.img`
  height: 100%;
`;

const NavActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  background: transparent;
`;

const NavLink = styled.a`
  font-size: 1.25em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 15px 15px;
  cursor: pointer;

  :hover {
    transform: scale(1.02);
  }

  :last-child {
    :hover {
      transform: none;
      b
    }
  }
`;

export default function ProminentAppBar() {
  return (
    <NavBar>
      <BigLogo sx={{ marginLeft: "40px" }} src="/pandicaLogo1.jpg"></BigLogo>
      <NavActions>
        <Link href="/">
          <NavLink>
            <FaStore sx={{ marginRight: "5px", color: (theme) => theme.colors.gray }} />
            POČETNA
          </NavLink>
        </Link>
        <Link href="/menu">
          <NavLink>
            <FaListAlt sx={{ marginRight: "5px", color: (theme) => theme.colors.gray }} />
            MENI
          </NavLink>
        </Link>
        <Link href="/cart">
          <NavLink>
            <FaShoppingCart sx={{ marginRight: "5px", color: (theme) => theme.colors.gray }} />
            KORPA
          </NavLink>
        </Link>
        <Link href="#">
          <NavLink>
            <Button sx={{ cursor: "pointer" }}>Naručite odmah</Button>
          </NavLink>
        </Link>
      </NavActions>
    </NavBar>
  );
}
