import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./navbarElements";
import './navStyle.css';
import {RiHome6Line} from 'react-icons/ri';
import {BsFillCloudUploadFill} from 'react-icons/bs';
import {BsFillRecordCircleFill} from 'react-icons/bs';


const Navbar = () => {
    return (
        <Nav>
            <NavMenu>
                <img src="/SLI_Project_Logo.png" alt="image" width='70' height='70'/>
                <NavLink to="/" activeStyle>
                    <button className="btn-gray">
                        Home 
                        &nbsp;
                        <RiHome6Line  size={20}/>
                    </button>
                </NavLink>
                <NavLink to="/upload" activeStyle>
                    <button className="btn-blue">
                        Upload
                        &nbsp;
                        <BsFillCloudUploadFill size={20}/>
                    </button>
                </NavLink>
                <NavLink to="/record" activeStyle>
                    <button className="btn-red">
                        Record
                        &nbsp;
                        <BsFillRecordCircleFill size={20}/>
                    </button>
                </NavLink>
            </NavMenu>
        </Nav>
    );
};
  
export default Navbar;