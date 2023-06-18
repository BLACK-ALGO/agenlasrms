import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const SidebarLink = styled(Link)`
    display: flex;
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    text-decoration: none;
    font-size: 20px;
    
    &:hover{
        background: #5F02D8;
        border-left: 6px solid #a82fa5;
        cursor: pointer;
        transition: 0.5s;
        
    }
`

const SidebarLabel = styled.span`
    margin-left: 16px;
`; 
const DropdownLink = styled(Link)`
                background: #D802D8;
                height: 60px;
                padding-left: 3rem;
                display: flex;
                align-items: center;
                text-decoration: none;
                color: #f5f5f5;
                font-size: 18px;
                // justify-content: space-between;
            &:hover{
                background: #252831;
                border-left: 4px solid #632ce4;
                cursor: pointer;
                transition: 0.5s;
            }
`;
const SubMenu = ({item} ) => {

    const [subNav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subNav)

  return (
    <div>
        
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
        {item.icon}
        <SidebarLabel >{item.title}</SidebarLabel>
        </div>
            <div>
                {item.subNav && subNav 
                ?item.iconOpen
                :item.subNav
                ?item.iconClose
                :null}
            </div>
      </SidebarLink>
      {subNav && item.subNav.map((item, index) => {
        return(
            <DropdownLink to={item.path}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
        )
      })}
    </div>
  )
}

export default SubMenu
