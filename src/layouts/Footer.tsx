import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import AccountDetails from "../components/AccountDetails";
import SettingsDetails from "../components/SettingsDetails";
import FooterHome from "../components/FooterHome";
import PersonalDetails from "../components/PersonalDetails";
import Theme from "../components/Theme";
import FooterStudy from "../components/FooterStudy";
import FooterDetect from "../components/FooterDetect";

const Footer = () => {
  const location = useLocation();
  const { footerComponent, setFooterComponent } = useContext(AppContext)!;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const section = searchParams.get("section");

    console.log("Pathname:", location.pathname);
    console.log("Section:", section);
    console.log("Current footerComponent:", footerComponent);

    if (location.pathname === "/profiledetails") {
      if (section === "theme") {
        setFooterComponent("Theme");
      } else if (section === "settings") {
        setFooterComponent("SettingsDetails");
      } else if (section === "personal") {
        setFooterComponent("PersonalDetails");
      } else if (section === "account" || !section) {
        setFooterComponent("AccountDetails"); // Mặc định cho /profiledetails hoặc section=account
      }
    } else if (location.pathname === "/") {
      setFooterComponent("FooterHome");
    } else if (location.pathname === "/study") {
      setFooterComponent("FooterStudy");
    } else if (location.pathname === "/detect") {
      setFooterComponent("FooterDetect");
    } else {
      setFooterComponent(null);
    }

    console.log("Updated footerComponent:", footerComponent);
  }, [location.pathname, location.search, footerComponent, setFooterComponent]);

  return (
    <footer className="fixed right-0 top-0 w-[28%] h-screen bg-primary text-color py-4 px-6 flex flex-col justify-between items-center shadow-lg">
      <div className="w-full">
        {footerComponent === "AccountDetails" && <AccountDetails />}
        {footerComponent === "SettingsDetails" && <SettingsDetails />}
        {footerComponent === "FooterHome" && location.pathname === "/" && <FooterHome />}
        {footerComponent === "FooterStudy" && location.pathname === "/study" && <FooterStudy/>}
        {footerComponent === "FooterDetect" && location.pathname === "/detect" && <FooterDetect />}
        {footerComponent === "PersonalDetails" && <PersonalDetails />}
        {footerComponent === "Theme" && <Theme />}
      </div>
    </footer>
  );
};

export default Footer;