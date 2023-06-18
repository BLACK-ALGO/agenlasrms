import React, {useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SideBarData} from './SideBarData'
import SubMenu from './SubMenu';
// import { IconContext } from "react-icons/lib";

const Nav = styled.div `
        background: #aa55ff;
        height: 100px;
        display: flex;
        font-size: 3rem;
        justify-content: space-between;
        align-items: center;

`;
const NavIcons =styled(Link)`
        margin-left: 2rem;
        font-size: 2rem;
        font-color: white;
        height: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: center;


`;
const SideBarNav =styled.nav`
    background: #aacbff;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({sidebar}) => (sidebar? '0': '-100%')};
    transition: 350ms;
    z-index: 10;
    font-size: 2rem;

`
const SideBarWrap =styled.div`
    width: 100%;
`
const SideBar = ({onRouteChange, isSingIn}) => {
    
        const [sidebar, setSidebar] = useState(false);
        const showSibar = () => setSidebar(!sidebar);
    
  return (
    <div className='bg-black'>
    
      <Nav >  
        <NavIcons to="#">
            <FaIcons.FaBars onClick={showSibar}/>
        </NavIcons>
        <div>
          <p className='mr3 f3 white underline pointer dim link ' onClick={()=>onRouteChange('home')}>Log Out</p>
        </div>
      </Nav>
      
      <SideBarNav sidebar={sidebar}>
            <SideBarWrap>
                <NavIcons to="#">
                    <AiIcons.AiOutlineClose onClick={showSibar}/>
                </NavIcons>
                {SideBarData.map((item, index) => {
                    return <SubMenu item={item} key={index} />
                })}
            </SideBarWrap>
      </SideBarNav>
      
    </div>
  );
}

export default SideBar
