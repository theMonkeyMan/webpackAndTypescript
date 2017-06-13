import * as React from 'react';

const {Link, IndexLink } = require('react-router');

import { rootPath } from '../common';

const navigator=require('../../css/navigator.scss');

const styles=require('../../css/styles.scss');

console.info(styles);

interface NavigatorPropsInterface {
    state?: any;
}

interface NavigatorStateInterface {
    state?: any;
    rootPath: string;
}

export default class Navigator extends React.Component<NavigatorPropsInterface, NavigatorStateInterface>{

    NavItemArray: Array<any>;

    constructor(props) {
        super(props);

        this.state = {
            rootPath: rootPath,
        };

        this.NavItemArray = [
            {
                name: "首页",
                href: "",
                subMenu: [],
            },
            {
                name: "我的家",
                href: "/myHome/dayliManager",
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
                        <Link to={`${this.state.rootPath}${item.href}`}>
                            <li
                                className={[styles.position_relative,styles.float_left,styles.width_percent_33,styles.text_align_center,navigator.nav_li].join(' ')}
                                >
                                {item.name}
                                <ul className={[styles.position_absolute,styles.width_percent_100,navigator.sub_nav_ul].join(' ')}>
                                    {
                                        item.subMenu.map((subItem, subIndex) => {
                                            return (
                                                <div key={`${subItem.name}` + subIndex}>
                                                    <Link to={`${this.state.rootPath}${subItem.href}`}>
                                                        <li className={[styles.width_percent_100,styles.text_align_center,navigator.sub_nav_li].join(' ')}>{subItem.name}</li>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }

                                </ul>
                            </li>
                        </Link>
                    </div>)
            })
        )
    }

    handleSelect() {

    }

    render() {
        return (
            <div className={navigator.bg_img}>
                <div className={navigator.div_height}>
                    <ul className={[styles.position_absolute,styles.width_percent_100,navigator.nav_ul].join(' ')}>
                        {this.mapNavItem()}

                    </ul>
                </div>
                <div>{this.props.children}</div>
            </div>
        );
    }

}