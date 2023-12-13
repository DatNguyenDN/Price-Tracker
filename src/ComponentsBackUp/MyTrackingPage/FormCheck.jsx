import { CheckIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Button, FormControl, FormHelperText, FormLabel, Grid, Heading, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { APIContext } from "../Context/AppContext";

const FormCheck = () => {
    const { makeAPIRequest, responseData } = useContext(APIContext);
    const [param, setParam] = useState("");
    const [isCheckClicked, setIsCheckClicked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        makeAPIRequest(param);
        setIsCheckClicked(true);
    };

    return (
        <Box>
            <Grid marginTop="100px" justifyContent={"center"} gap={5}>
                <Box>
                    <Heading letterSpacing={"5px"}>Check Tracking</Heading>
                </Box>
                <Box>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>

                        <Input rounded={"15px"} type="text" name="email" value={param} onChange={(e) => setParam(e.target.value)} />

                        <FormHelperText>Enter the email you'd like to check.</FormHelperText>
                    </FormControl>
                </Box>
                <Box justifyContent={"center"} display={"flex"}>
                    <Button
                        maxW="full"
                        loadingText="Submitting"
                        colorScheme="whatsapp"
                        size={"lg"}
                        rounded={"20px"}
                        w={"40%"}
                        fontSize={"25px"}
                        onClick={handleSubmit}
                    >
                        Check
                    </Button>
                </Box>
            </Grid>

            {isCheckClicked && responseData?.length === 0 ? (
                <Box alignItems={'center'} color="#F6AD55" display={'flex'}  w={'100%'} gap={'10px'} p={'30px'}> 
                    <WarningTwoIcon/>
                    <Text    >
                        The email you entered doesn't seem to be tracking any products yet. Would you like to start tracking, please visit our Price Tracker page
                    </Text>
                </Box>
            ) : isCheckClicked && responseData ? (
               <Box  alignItems={'center'} color={'#38A169'} display={'flex'} w={'100%'} gap={'10px'} p={'30px'} >
                      <CheckIcon  />
                    <Text fontSize={"25px"} pr={'20px'} >
                      
                        Please see below details
                    </Text>
               </Box>
            ) : (
                ""
            )}

        </Box>
    );
};

export default FormCheck;
