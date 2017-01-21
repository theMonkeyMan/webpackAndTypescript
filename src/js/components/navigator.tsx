import * as React from 'react';

import { Nav, NavItem } from 'react-bootstrap';

interface NavigatorInterface {

}

export default class Navigator extends React.Component<{}, {}>{

    NavItemArray: Array<any>;

    constructor(props) {
        super(props);

        this.NavItemArray = [
            {
                name: "首页",
                href: "/portal"
            },
            {
                name: "我的家",
                href: "/myHome"
            },
            {
                name: "关于我们",
                href: "/about"
            }
        ]
    }

    mapNavItem() {
        return (
            this.NavItemArray.map((item, index) => {
                return (<NavItem
                    className={"width_150"}
                    key={index}
                    eventKey={index}
                    href={item.href}
                    >
                    {item.name}
                </NavItem>)
            })
        )
    }

    handleSelect() {

    }

    render() {
        return (
            <Nav bsStyle="pills" activeKey={0} onSelect={this.handleSelect}>
                {this.mapNavItem()}
            </Nav>
        );
    }

}