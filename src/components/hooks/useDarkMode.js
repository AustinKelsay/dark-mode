import React, {useState, useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [storedValue, setValue] = useLocalStorage("dark", initialValue);

    useEffect(() => {
        const body = document.querySelector("body")
        if(initialValue === true){
            body.classList.add("dark-mode")
            setValue(initialValue);
        }
        else {setValue(false)
            body.classList.remove("dark-mode")
        }
    });

    return [storedValue, setValue]
}

export default useDarkMode;