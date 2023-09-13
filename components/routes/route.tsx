import {FC} from 'react';
import Home from '../../app/page';
import Contact from '../../app/contact/page';
import Illustrations from '../../app/resources/page';
import Works from '../../app/maps/page';
import About from '../../app/about/page';


interface Route {
    id: number,
    title: string,
    path: string,
    component?: FC<{}>,
    enable: boolean,
}
  

export const routes : Array<Route> = [
    {
        id: 1,
        title: "Home", 
        path: "/",
        component: Home,
        enable: true,
    },
    
    {
        id: 2,
        title: "Maps", 
        path: "/works",
        component: Works,
        enable: true,
    },
    {
        id: 3,
        title: "Resources", 
        path: "/illustration",
        component: Illustrations,
        enable: true,
    },
    {
        id: 4,
        title: "About", 
        path: "/about",
        component: About,
        enable: true,

    },
    {
        id: 5,
        title: "Contact", 
        path: "/contact",
        component: Contact,
        enable: true,
    },
];
