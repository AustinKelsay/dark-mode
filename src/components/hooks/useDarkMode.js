import React, {useState, useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [storedValue, setValue] = useLocalStorage("dark", initialValue);

    useEffect(() => {
        const body = document.querySelector("body")
        if(storedValue === true){
            body.classList.add("dark-mode")
        }
        else {
            body.classList.remove("dark-mode")
        }
    },[storedValue]);

    return [storedValue, setValue]
}

export default useDarkMode;