import { useState } from "react";

function useLocalStorage(clave, valor_inicial) {
    
    const [valorAlmacenado, setValorAlmacenado] = useState(()=>{

        try {
            const item = window.localStorage.getItem(clave);
            return item ? JSON.parse(item) : valor_inicial;


        } catch (error) {

            console.log(error);
            return valor_inicial;

        }

    });

    const setValue = (value) => {

        try {
            window.localStorage.setItem(clave, JSON.stringify(value));
            setValorAlmacenado(value);

        } catch (error) {
            console.log(error);
        }

    }

    return [valorAlmacenado, setValue]


}

export default useLocalStorage;
