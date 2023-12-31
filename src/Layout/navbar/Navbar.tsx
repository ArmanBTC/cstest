import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TransletionResourcesConfig } from "../../i18n/i18n";
import Translate from "../../i18n/Translate";
import Theme from "../../theme/Theme";
import { useAppDispatch, useAppSelector } from "../../appRedux/store";
//import { SignOutAsync } from "../../appRedux/appSlises/userSlice/ActionCreateorUser";

const Navbar = () => {
  const { i18n } = useTranslation(TransletionResourcesConfig.ns);

  function onChangeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    const languahe = e.target.value;
    i18n.changeLanguage(languahe);
  }
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  console.log("NavBar");
  console.log(user);

  function SignOut() {
    if (localStorage.getItem("token") !== null) {
      localStorage.removeItem("token");
      dispatch({ type: "signout" });
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand navLinkTextColor gradient-text" to="/">
          OMETO
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className="nav-item"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Theme />
            </li>
            <li className="nav-item">
              <Link className="nav-link navLinkTextColor" to={"/"}>
                <Translate contentKey="navbar.nav.home">Home</Translate>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navLinkTextColor" to={"#"}>
                <Translate contentKey="navbar.nav.contacts">Contacts</Translate>
              </Link>
            </li>
            {user.user !== undefined && user?.isAuthorized ? (
              <li className="nav-item">
                <Link
                  className="nav-link navLinkTextColor"
                  style={{ color: "green" }}
                  to={""}
                >
                  {user?.user?.fullName}
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link navLinkTextColor" to={"/signin"}>
                  <Translate contentKey="navbar.nav.signin">Sign In</Translate>
                </Link>
              </li>
            )}

            {user.user !== undefined && user?.isAuthorized ? (
              <li className="nav-item">
                <Link
                  onClick={SignOut}
                  className="nav-link navLinkTextColor"
                  to={""}
                >
                  <Translate contentKey="navbar.nav.signout">
                    Sign Out
                  </Translate>
                </Link>
              </li>
            ) : (
              <></>
            )}

            <li
              className="nav-item"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <select onChange={onChangeLanguage}>
                <option value={"en"}>English</option>
                <option value={"pl"}>Polski</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
