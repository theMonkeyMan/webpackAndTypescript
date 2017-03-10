import * as React from 'react';

const {Link, IndexLink } = require('react-router');

import { rootPath } from '../common';

import '../../css/navigator.scss';

interface NavigatorInterface {

}

export default class Navigator extends React.Component<{}, {}>{

    NavItemArray: Array<any>;

    constructor(props) {
        super(props);

        this.NavItemArray = [
            {
                name: "首页",
                href: "/portal",
                subMenu: [],
            },
            {
                name: "我的家",
                href: "/myHome",
                subMenu: [
                    {
                        name: "家庭日常管理",
                        href: "/myHome/dayliManager",
                    },
                    {
                        name: "家庭库存管理",
                        href: "/myHome/reserveManager",
                    },
                    {
                        name: "家庭账本管理",
                        href: "/myHome/booksManager",
                    },
                ],
            },
            {
                name: "关于我们",
                href: "/about",
                subMenu: [
                    {
                        name: "企业文化",
                        href: "/about/companyCulture",
                    }
                ],
            }
        ]
    }

    mapNavItem() {
        return (
            this.NavItemArray.map((item, index) => {
                return (
                    <div key={`${item.name}` + index}>
                        <li
                            className={"position_relative float_left width_percent_33 text_align_center nav_li"}
                            >
                            {item.name}
                            <ul className={"position_absolute sub_nav_ul width_percent_100"}>
                                {
                                    item.subMenu.map((subItem, subIndex) => {
                                        return (
                                            <div key={`${subItem.name}` + subIndex}>
                                                <Link to={`${rootPath}${subItem.href}`}>
                                                    <li className={"width_percent_100 text_align_center sub_nav_li"}>{subItem.name}</li>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }

                            </ul>
                        </li>
                    </div>)
            })
        )
    }

    handleSelect() {

    }

    render() {
        return (
            <div>
                <div className={'div_height'}>
                    <ul className={'position_absolute nav_ul width_percent_100'}>
                        {this.mapNavItem()}

                    </ul> 
                </div>
                <div>{this.props.children}</div>
            </div>
        );
    }

}

// const style={
//     nav_li:{
//         borderColor: 'rgba(1,2,3,0.1)',
//         borderWidth: '0.1px',
//         borderStyle: 'solid',
//         borderRadius: '0.2rem',
//         height: '2.5rem',
//         lineHeight: '2.5rem',
//     },
//     li_bgcolor:{
//         backgroundColor:'red',
//     }
// };