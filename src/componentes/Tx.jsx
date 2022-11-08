import {useMutation} from 'react-query';

export function Tx(){
    const {mutate, isLoading, isError} = useMutation (() => {
        console.log("he ejecutado la funcion");
    });
    return (
        <div>
            <button onClick={() => mutate()}>
                Llamar
                </button>
                </div>  
    );
}  
