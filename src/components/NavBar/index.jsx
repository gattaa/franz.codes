import React, {useState, useEffect} from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import { AiFillNotification, AiFillInstagram } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import io from '../../assets/images/io.jpg'

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  let scrollclass = scroll ? "shadow-lg bg-minto" : ""
  return (
    <div className={`sidebar justify-center transition-all duration-500 ${scrollclass}`}  role="navigation">          
      <AnchorLink to="/#page-top" className='sidebar-icon'>
        <img src={ io } alt="io" className='sidebar-icon' />
      </AnchorLink> 
      <Divider />
      <SideBarIcon icon={<AiFillNotification size="20" />} text="blog" link="/#blog"/>
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="projects" link="/#projects"/>
      <SideBarIcon icon={<FaUserCircle size="22" />} text="contact" link="/#contact"/>
      <Divider />
      <SideBarLink icon={<AiFillInstagram size="26"/>} text="insta" link="https://instagram.com/franzegatta"/>
    </div>
  );
};

const SideBarIcon = ({ icon, text, link }) => (
  <AnchorLink to={ link } className="sidebar-icon group"  >
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </AnchorLink>
);

const SideBarLink = ({ icon, text, link }) => (
  <a href={ link } className="sidebar-icon group"  target={"_blank"} rel="noreferrer">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </a>
);

const Divider = () => <span className="sidebar-hr" />;

export default NavBar;
