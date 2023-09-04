import { socialIcons } from "../data";
import { logo } from "../images";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass={"nav-links"} itemClass={"nav-link"} />
        <ul className={"nav-links"}>
          {socialIcons.map((link) => {
            return (
              <SocialLink {...link} key={link.id} itemClass={"nav-link"} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
