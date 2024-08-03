
import SectionTitle from "../../component/SectionTitle";
import MenuItem from "../Shaerd/MenuItem/MenuItem";
import useMenu from "../../Hooks/UseMenu";

const PopolarMenu = () => {
   
     const [menu ] = useMenu();
     console.log(menu);
     const popular = menu.filter(item => item.category === 'popular')
     console.log(popular);
 
    return (
        <section className="mb-12">
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Popular Items"}
            ></SectionTitle>
            <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 gap-10 ">
                {
                    popular.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="items-center justify-center mt-4">
            <button className="btn btn-outline  btn-accent uppercase  border-0 border-b-4">view full menu</button>
            </div>
        </section>
    );
};

export default PopolarMenu;
