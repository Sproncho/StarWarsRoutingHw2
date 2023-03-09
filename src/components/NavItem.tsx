import React from 'react';
import {NavigationItem} from "../utils/types";
import {Link} from "react-router-dom";

interface Props {
    item: NavigationItem
}
const NavItem = ({item}: Props) => {
    return (
        <li>
            <Link className="nav-item btn btn-danger mx-1" to={item.route}>{item.title}</Link>
        </li>
    );
};

export default NavItem;