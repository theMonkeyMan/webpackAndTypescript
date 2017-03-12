import ButtonComponent from './buttonComponent';

import TextComponent from './textComponent';

import Navigator from './navigator';

import InputComponent from './inputCompnent';


/*
 * Component没有直接访问redux的store的权限,需要依赖Container.
 * 所以可以由Container来分配各自组件对store的访问权限.
 */
export {
    ButtonComponent,
    TextComponent,
    Navigator,
    InputComponent,
}