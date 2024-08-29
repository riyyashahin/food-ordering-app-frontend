import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">
                RiyyaEats.com
            </Link>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block">
                <MainNav />
            </div>
        </div>
    </div>
  )
}

export default Header;
//border-b-2 a border to our bottom for our div border-b-orange-500 makes border and orange colour 
//py-6 which will add some padding to the top and bottom of the content
// 2nd div to align content of the header with the content on the page
// mx-auto which is the same stuff we wrap the page content in 
// flex justify-between items-center - this will use flex box to position the direct children of this div so we don't have any children 
//justify-between will add space between all the children and item-center is going to make sure that things align vertically
// Link - text-3xl this is going to add the logo link.so will make it a larger text
//tracking-tight just moves the letters bit closer together so it looks like a nice logo
//MobileNav is used to hide this component for the larger screen size
//md:hidden - medium or more screen size, this will get hidden and small screen it will be displayed
//hidden md-block small screen it will be hidden. medium or more screen it will be visible

