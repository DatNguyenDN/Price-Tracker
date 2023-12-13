import { VStack } from "@chakra-ui/react";
import React from "react";
import { AppProvider } from "../components/Context/AppContext";
import FormCheck from "../components/MyTrackingPage/FormCheck";
import TableCheck from "../components/MyTrackingPage/TableCheck";
import { APIProvider } from "../components/Context/AppContext";

const MyTracking = () => {
    return (
        <VStack height={"100%"} alignItems="center" spacing={"90px"}>
            <APIProvider>
                <FormCheck />
                <TableCheck />
            </APIProvider>
        </VStack>
    );
};

export default MyTracking;
