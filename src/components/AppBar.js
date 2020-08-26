/** @jsx jsx */
import { Fragment, useState, useEffect } from "react";
import { jsx } from "theme-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Button, Close, MenuButton, Badge } from "theme-ui";
import { FaStore, FaListAlt, FaShoppingCart } from "react-icons/fa";

import styled from "@emotion/styled";
import theme from "../../theme";

const NavBar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 140px;
  min-height: 140px;
  width: 100%;
  max-width: 1200px;
  border: 1px solid #eee;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  @media screen and (max-width: 650px) {
    justify-content: space-between;
    height: fit-content;
    min-height: fit-content;
  }
`;

const BigLogo = styled.img`
  height: 130%;
  position: absolute;
  top: 0;
  left: 20px;
  border: 2px solid #eee;
  @media screen and (max-width: 650px) {
    height: 75px;
    position: relative;
    align-self: flex-start;
    margin-left: 10px;
  }
`;

const NavActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% - 230px);
  background: transparent;

  @media screen and (max-width: 650px) {
    width: 210px;
    flex-direction: column;
    align-items: flex-end;
    align-self: flex-start;
    margin: 10px;
  }
`;

const NavLink = styled.a`
  font-size: 1.25em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: scale 1s ease-in;
  margin: 15px 15px;
  cursor: pointer;
  @media screen and (max-width: 650px) {
    margin: 5px;
  }
`;

export default function ProminentAppBar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const router = useRouter();

  return (
    <NavBar>
      <BigLogo sx={{ marginLeft: "40px" }} src="/pandicaLogo1.jpg"></BigLogo>

      <NavActions>
        {menuOpened ? (
          <Close
            onClick={() => setMenuOpened(!menuOpened)}
            sx={{
              border: "2px solid",
              borderColor: (theme) => theme.colors.gray,
              "@media screen and (min-width: 651px)": { display: "none" },
            }}
          />
        ) : (
          <MenuButton
            onClick={() => setMenuOpened(!menuOpened)}
            sx={{
              border: "2px solid",
              borderColor: (theme) => theme.colors.gray,
              "@media screen and (min-width: 651px)": { display: "none" },
            }}
          />
        )}
        {menuOpened && (
          <Fragment>
            <Link href="/">
              <NavLink
                sx={{
                  ":hover": { color: (theme) => theme.colors.secondary },
                  borderBottom: router.pathname === "/" ? `2px solid ${theme.colors.primary}` : "",
                  color: router.pathname === "/" ? theme.colors.primary : "",
                  "@media screen and (min-width: 651px)": {
                    display: "none",
                  },
                }}
              >
                <FaStore sx={{ marginRight: "5px", color: (theme) => theme.colors.gray }} />
                POČETNA
              </NavLink>
            </Link>
            <Link href="/menu">
              <NavLink
                sx={{
                  ":hover": { color: (theme) => theme.colors.secondary },
                  borderBottom:
                    router.pathname === "/menu" ? `2px solid ${theme.colors.primary}` : "",
                  color: router.pathname === "/menu" ? theme.colors.primary : "",
                  "@media screen and (min-width: 651px)": {
                    display: "none",
                  },
                }}
              >
                <FaListAlt sx={{ marginRight: "5px", color: (theme) => theme.colors.gray }} />
                MENI
              </NavLink>
            </Link>
            <Link href="/cart">
              <NavLink
                sx={{
                  ":hover": { color: (theme) => theme.colors.secondary },
                  borderBottom:
                    router.pathname === "/cart" ? `2px solid ${theme.colors.primary}` : "",
                  color: router.pathname === "/cart" ? theme.colors.primary : "",
                  "@media screen and (min-width: 651px)": {
                    display: "none",
                  },
                }}
              >
                <Badge
                  ml={-3}
                  mt={-3}
                  sx={{
                    marginRight: 1,
                    border: "2px solid",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    display: cart.length ? "inline-block" : "none",
                    "@media screen and (min-width: 651px)": {
                      display: "none",
                    },
                  }}
                >
                  {cart.length}
                </Badge>
                <FaShoppingCart sx={{ marginRight: "5px", color: (theme) => theme.colors.gray }} />
                KORPA
              </NavLink>
            </Link>

            <Link href="/cart">
              <NavLink
                sx={{
                  "@media screen and (min-width: 651px)": {
                    display: "none",
                  },
                }}
              >
                <Button
                  sx={{
                    cursor: "pointer",
                    fontFamily: theme.fonts.cursive,
                    textTransform: "uppercase",
                    ":hover": {
                      backgroundColor: (theme) => theme.colors.secondary,
                    },
                  }}
                >
                  Naručite odmah
                </Button>
              </NavLink>
            </Link>
          </Fragment>
        )}
        <Fragment>
          <Link href="/">
            <NavLink
              sx={{
                ":hover": { color: (theme) => theme.colors.secondary },
                borderBottom: router.pathname === "/" ? `2px solid ${theme.colors.primary}` : "",
                color: router.pathname === "/" ? theme.colors.primary : "",
                "@media screen and (max-width: 650px)": {
                  display: "none",
                },
              }}
            >
              <FaStore
                sx={{
                  marginRight: "5px",
                  color: (theme) => theme.colors.gray,
                }}
              />
              POČETNA
            </NavLink>
          </Link>
          <Link href="/menu">
            <NavLink
              sx={{
                ":hover": { color: (theme) => theme.colors.secondary },
                borderBottom:
                  router.pathname === "/menu" ? `2px solid ${theme.colors.primary}` : "",
                color: router.pathname === "/menu" ? theme.colors.primary : "",
                "@media screen and (max-width: 650px)": {
                  display: "none",
                },
              }}
            >
              <FaListAlt sx={{ marginRight: "5px", color: (theme) => theme.colors.gray }} />
              MENI
            </NavLink>
          </Link>
          <Link href="/cart">
            <NavLink
              sx={{
                ":hover": { color: (theme) => theme.colors.secondary },
                borderBottom:
                  router.pathname === "/cart" ? `2px solid ${theme.colors.primary}` : "",
                color: router.pathname === "/cart" ? theme.colors.primary : "",
                "@media screen and (max-width: 650px)": {
                  display: "none",
                },
              }}
            >
              <FaShoppingCart sx={{ marginRight: "5px", color: (theme) => theme.colors.gray }} />
              KORPA
            </NavLink>
          </Link>
          <Badge
            ml={-3}
            mt={-3}
            sx={{
              marginRight: 1,
              border: "2px solid",
              fontWeight: "bold",
              borderRadius: "5px",
              display: cart.length ? "inline-block" : "none",
              "@media screen and (max-width: 650px)": {
                display: "none",
              },
            }}
          >
            {cart.length}
          </Badge>

          <Link href="/cart">
            <NavLink>
              <Button
                sx={{
                  cursor: "pointer",
                  fontFamily: theme.fonts.cursive,
                  textTransform: "uppercase",
                  ":hover": {
                    backgroundColor: (theme) => theme.colors.secondary,
                  },
                  "@media screen and (max-width: 650px)": {
                    display: "none",
                  },
                }}
              >
                Naručite odmah
              </Button>
            </NavLink>
          </Link>
        </Fragment>
      </NavActions>
    </NavBar>
  );
}
