import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import { AiFillNotification } from 'react-icons/ai';
import { FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import io from '../../assets/images/io.jpg';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const SideBar = () => { 
  return (
    <div className="sidebar" role="navigation">          
      <SideBarIcon icon={<img src={ io } alt={"io"} className="sidebar-icon" />} text="me" link="/#page-top"/>
      <Divider />
      <SideBarIcon icon={<AiFillNotification size="20" />} text="blog" link="/#blog"/>
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="projects" link="/#projects"/>
      <SideBarIcon icon={<FaUserCircle size="22" />} text="contact" link="/#contact"/>
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

const Divider = () => <span className="sidebar-hr" />;

export default SideBar;
