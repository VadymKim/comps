import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

function UseNavigation() {

    return useContext(NavigationContext);
}

export default UseNavigation;