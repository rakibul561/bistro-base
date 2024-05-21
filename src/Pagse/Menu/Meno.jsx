import { Helmet } from 'react-helmet-async';

import menuImg from '../../assets/menu/banner3.jpg';
import useMenu from '../../Hooks/UseMenu';
import MenuCategory from './MenuCategory';
import desertsImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import Cover from '../Shaerd/Cover/Cover';
import SectionTitle from '../../component/SectionTitle';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"
            ></SectionTitle>
            {/* offered menu */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory
                items={dessert} title="desserts" img={desertsImg} ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;
