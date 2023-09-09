import {FC} from 'react';
import Home from '../../app/page';
import Contact from '../../app/contact/page';
import Illustrations from '../../app/resources/page';
import Works from '../../app/maps/page';
import About from '../../app/about/page';


interface Route {
    key: string,
    title: string,
    path: string,
    component?: FC<{}>,
    enable: boolean,
}
  

export const routes : Array<Route> = [
    {
        key: "home-route",
        title: "Home", 
        path: "/",
        component: Home,
        enable: true,
    },
    
    {
        key: "works-route",
        title: "Maps", 
        path: "/works",
        component: Works,
        enable: true,
    },
    {
        key: "illustrations-route",
        title: "Resources", 
        path: "/illustration",
        component: Illustrations,
        enable: true,
    },
    {
        key: "about-route",
        title: "About", 
        path: "/about",
        component: About,
        enable: true,

    },
    {
        key: "contact-route",
        title: "Contact", 
        path: "/contact",
        component: Contact,
        enable: true,
    },
];
