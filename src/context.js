// useContext is used to create acommon data that can be accessed 
// throughout the component hierarichaly without passing the props 
// manually to each other.

import React, { useContext, useState } from 'react'

const Appcontext = React.createContext();
                    //We will wrap the whole application in appprovider and we have created
                    //the children as a prop so that we can pass it in the appprovider.


const AppProvider = ({children}) => {  
 
    const [issidebaropen, setissidebaropen] = useState(false);
    const [ismodalopen, setismodalopen] = useState(false);

    const opensidebar = () => {
    setissidebaropen(true);
}

const closesidebar = () => {
    setissidebaropen(false);
}

const openmodal = () => {
    setismodalopen(true);
}

const closemodal = () => {
    setismodalopen(false);
}

        return <Appcontext.Provider value={{
            ismodalopen, 
            issidebaropen, 
            openmodal, 
            opensidebar,
            closemodal, 
            closesidebar}}>{children}</Appcontext.Provider>
}

//custom hook
export const useGlobally = () => {
    return useContext(Appcontext)
}

export {Appcontext,AppProvider};