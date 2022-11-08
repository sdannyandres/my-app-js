import {useQuery} from 'react-query'
export function Lista(){

   const {data, isLoading, isError} = useQuery(["query1"],()=>{
        return ["juan", "pedro"]
    })
     if (isError) 
     {
          return         <div>Error....</div>
     }

          if (isLoading) {
            return <div>Cargando</div>}
          
          return <p>
            <ul>
                {
                  data && data.map((item, index) =>
                     <li key={index}>{item}</li>
                  )

                    
                }
            </ul>
          </p>
}