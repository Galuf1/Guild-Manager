import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css'
import { useState , useEffect} from 'react';
import axios from 'axios';

function SideBar ({user, guild}) {
    

    return (
        <ProSidebar>
            <Menu iconShape='square'>
                <MenuItem >
                My character
                <Link to='/char'/>
                </MenuItem>               
                <MenuItem>
                {guild.name ? 'My guild' : 'Create guild'}
                <Link to='/guild' />
                </MenuItem>
                <MenuItem>
                PvP
                <Link to='/api' />
                </MenuItem>
            </Menu>
        </ProSidebar>
    )
}

export default SideBar