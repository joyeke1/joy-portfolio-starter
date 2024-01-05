// icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from 'react-icons/hi';

// nav data
export const navData = [
   { name: 'home', path: '/', icon: <HiHome /> },
   { name: 'about', path: '/about', icon: <HiUser />},
   { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
   { name: 'portfolio', path: '/portfolio', icon: <HiViewColumns /> },
   { 
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />
   },
   {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />
   }
];

const Nav = () => {
    return <nav>nav</nav>;
};

export default Nav;