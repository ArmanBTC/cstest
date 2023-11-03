import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TransletionResourcesConfig } from "../../i18n/i18n";
import Translate from "../../i18n/Translate";

const Navbar = () => {
  const { i18n } = useTranslation(TransletionResourcesConfig.ns);

  function onChangeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    const languahe = e.target.value;
    console.log(languahe);
    i18n.changeLanguage(languahe);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          BILMOTO
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={"#"}></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"#"}>
                <Translate contentKey="navbar.nav.home">Home</Translate>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"#"}>
                <Translate contentKey="navbar.nav.contacts">Contacts</Translate>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"#"}>
                <Translate contentKey="navbar.nav.signin">Sign In</Translate>
              </Link>
            </li>
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
                <option value={"ru"}>Russian</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
