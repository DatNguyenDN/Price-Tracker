import Axios from "axios";
import { createContext, useState } from "react";

export const APIContext = createContext();


export const APIProvider = ({ children }) => {

    const [responseData, setResponseData] = useState(null);

    const makeAPIRequest = async(param) => {
        try{
            const apiUrl ='https://pricetrackerengine-fnapp.azurewebsites.net/api/tracker/v1/get-trackers';

            const headers = {
                        'Content-Type': 'application/json',
                        'x-functions-key':'-qbcoDfFKIiluGvzxTqKe6BZ61KdQKTFZhs0IOEjAOFkAzFuOD8RvQ==',
                      };

        
            const response = await Axios.get(apiUrl,{
                headers: headers,
                params: { email : param }

            })
            
            
            setResponseData(response.data);   

        } catch(error) {
            console.error("Error:", error)
        }
    }
 
    return (
    <APIContext.Provider value={{ responseData ,setResponseData, makeAPIRequest}}>
        {children}
    </APIContext.Provider>
    )
};
