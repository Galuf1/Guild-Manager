import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css'

function SideBar () {

    return (
        <ProSidebar>
            <Menu iconShape='square'>
                <MenuItem >
                My character
                <Link to='/char'/>
                </MenuItem>
                <MenuItem>
                Create Guild
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