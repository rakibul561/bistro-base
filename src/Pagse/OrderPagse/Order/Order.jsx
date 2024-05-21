/* eslint-disable no-unused-vars */
import { useState } from 'react';
import coverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shaerd/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../../component/FoodCard/FoodCard';
import useMenu from '../../../Hooks/UseMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

0
const Order = () => {

    const categoris = ['salad','pizza', 'soup', 'dessert', 'drink' ];
    const {category} = useParams();

    const initialIndex = categoris.indexOf(category)


    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | order Food</title>
            </Helmet>
            <Cover img={coverImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab> Pizza</Tab>
                    <Tab> Soup</Tab>
                    <Tab> Deserts</Tab>
                    <Tab> Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>

                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
               
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;