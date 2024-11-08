import React, { useState } from 'react';
import { FaHome, FaUser, FaFolder, FaTicketAlt, FaQuestion, FaCog, FaChevronDown, FaRegFile } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { PiArticle } from 'react-icons/pi';
import { CiFileOn } from 'react-icons/ci';
import { BsTicketPerforated } from 'react-icons/bs';
import { MdOutlineQuestionMark } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import styles from './styles.module.css';
import classNames from 'classnames';
import { TbUserQuestion } from 'react-icons/tb';



function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [menu]: !prevOpenMenus[menu],
    }));
  };

  return (
    <div className={styles.sidebar}>
     
      <nav className={styles.sidebar_nav}>
        <a href="#dashboard" className={styles.sidebar_link}>
          <RiBarChartBoxLine className={styles.sidebar_link_icon} />
          Dashboard
        </a>
        <a href="#admin" className={styles.sidebar_link}>
          <LuUsers className={styles.sidebar_link_icon} />
          Admin
        </a>
        <div>
          <button
            onClick={() => toggleMenu('article')}
            className={styles.sidebar_button}
          >
            <PiArticle className={styles.sidebar_button_icon} />
            <span>Article</span>
            <FaChevronDown className={classNames(styles.sidebar_button_chevron, openMenus['article'] ? 'rotate-180' : '')} />
          </button>
          {openMenus['article'] && (
            <div className={styles.sidebar_submenu}>
              <a href="#blog" className={styles.sidebar_submenu_link}>
                Blog
              </a>
              <a href="#tag" className={styles.sidebar_submenu_link}>
                Tag
              </a>
              <a href="#category" className={styles.sidebar_submenu_link}>
                Category
              </a>
            </div>
          )}
        </div>
        <a href="#file-manager" className={styles.sidebar_link}>
          <FaRegFile className={styles.sidebar_link_icon} />
          File Manager
        </a>
        <a href="#ticket" className={styles.sidebar_link}>
          <BsTicketPerforated className={styles.sidebar_link_icon} />
          Ticket
        </a>
        <div>
          <button
            onClick={() => toggleMenu('faq')}
            className={styles.sidebar_button}
          >
            <MdOutlineQuestionMark className={styles.sidebar_button_icon} />
            <span>FAQ</span>
            <FaChevronDown className={classNames(styles.sidebar_button_chevron, openMenus['faq'] ? 'rotate-180' : '')} />
          </button>
          {openMenus['faq'] && (
            <div className={styles.sidebar_submenu}>
              <a href="#faq-submenu" className={styles.sidebar_submenu_link}>
                FAQ Submenu
              </a>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => toggleMenu('request')}
            className={styles.sidebar_button}
          >
            <TbUserQuestion className={styles.sidebar_button_icon}/>
            <span>Request</span>
            <FaChevronDown className={classNames(styles.sidebar_button_chevron, openMenus['request'] ? 'rotate-180' : '')} />
          </button>
          {openMenus['request'] && (
            <div className={styles.sidebar_submenu}>
              <a href="#request_submenu" className={styles.sidebar_submenu_link}>
                Request Submenu
              </a>
            </div>
          )}
        </div>
        <a href="#setting" className={styles.sidebar_link}>
          <FiSettings className={styles.sidebar_link_icon}/>
          Setting
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
