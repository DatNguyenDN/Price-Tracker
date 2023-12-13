import React from "react";
import FormFields from "../components/TrackPricePage/FormFields";
import { Flex,Box,Stack, HStack, useColorModeValue } from "@chakra-ui/react";

const TrackPrice = () => {
    return (
        <Flex
            // bg={useColorModeValue("gray.50", "gray.900")}
            // color={useColorModeValue("gray.700", "gray.200")}
            // h="100vh"
            // minH={"100vh"}
            width={"100%"}
            // margin={'auto'}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={'50px'}
        >
            <FormFields />
        </Flex>
    );
};

export default TrackPrice;
