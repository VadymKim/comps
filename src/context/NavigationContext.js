import { createContext, useState, useEffect } from "react";


const NavigationContext = createContext();

function NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const handler = () => {
        setCurrentPath(window.location.pathname);
    };

    useEffect(() => {
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    const navigation = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigation }}>
            {children}
         </NavigationContext.Provider>    
    );                                                          
}



export { NavigationProvider };
export default NavigationContext;