import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import { AiFillNotification } from 'react-icons/ai';
import { FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">          
      <SideBarIcon icon={<StaticImage src='../../images/io.jpg' alt={"io"} className="sidebar-icon"/>} text="me" linko="/"/>
      <Divider />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="work" linko="/work"/>
      <SideBarIcon icon={<AiFillNotification size="20" />} text="blog" linko="/blog"/>
      <SideBarIcon icon={<FaUserCircle size="22" />} text="contact" linko="/contact"/>
      <Divider />
      <ThemeIcon />
    </div>
  );
};

const SideBarIcon = ({ icon, text, linko }) => (
  <Link to={ linko } className="sidebar-icon group" activeClassName="sidebar-icon-active group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </Link>
);

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <div className="sidebar-icon group">
          <FaSun size='20'/>
          <span className="sidebar-tooltip group-hover:scale-100">
            light mode
          </span>
        </div>
      ) : (
        <div className="sidebar-icon group">
          <FaMoon size='20'/>
          <span className="sidebar-tooltip group-hover:scale-100">
            dark mode
          </span>
        </div>
      )}
    </span>
  );
};


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
