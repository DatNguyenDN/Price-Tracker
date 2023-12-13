import {
    Box,
    Button,
    Divider,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Grid,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text
} from "@chakra-ui/react";
import Axios from "axios";
import { useState } from "react";

const FormFields = () => {
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [response, setResponse] = useState({});

    const simulateApiResponse = () => {
        // Simulate a response with "success": true and a store name
        setTimeout(() => {
            setResponse({ success: true });
        }, 1000);
    };

    const handleClose = () => {
        setIsModalOpen(false);
        setEmail("");
        setUrl("");
        // window.location.reload();
    };

    const isError = setEmail === "";

    const handleClick = async () => {
        
        try {
            const apiUrl = "https://pricetrackerengine-fnapp.azurewebsites.net/api/tracker/v1/create-tracker"; // Replace with your API endpoint

            const headers = {
                "Content-Type": "text/json", // Set the Content-Type header
                "x-functions-key": "-qbcoDfFKIiluGvzxTqKe6BZ61KdQKTFZhs0IOEjAOFkAzFuOD8RvQ==",
                // Add any other headers as needed
            };

            const data = {
                email: email, // Your payload data
                url: url,
            };

            const axiosConfig = {
                headers,
                // withCredentials: true,
            };

            const response = await Axios.post(apiUrl, data, axiosConfig);
            setResponse(response.data);

            if (response.data.success) {
                setIsModalOpen(true);
                console.log(response.data);
            } else {
                // Handle the case when the request is not successful
                console.error('Request was not successful:');
              }
            } catch (error) {
              // Handle any errors that occur during the API request
              console.error('Error:', error.message);
            }
          };
    return (
        <Grid marginTop={"70px"} gap={7} padding={"70px"} border={"2px"} borderRadius={"30px"}>
            <Box>
                <Heading>Tracking Form Fields</Heading>
            </Box>
            <Box>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input rounded={"15px"} name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {!isError ? (
                        <FormHelperText>Enter the email you'd like to receive the offer.</FormHelperText>
                    ) : (
                        <FormErrorMessage>Email address is required!</FormErrorMessage>
                    )}
                </FormControl>
            </Box>

            <Box>
                <FormControl>
                    <FormLabel>Product's url</FormLabel>
                    <Input rounded={"15px"} type="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                    {!isError ? (
                        <FormHelperText>Enter product's link </FormHelperText>
                    ) : (
                        <FormErrorMessage>Url is required</FormErrorMessage>
                    )}
                </FormControl>
            </Box>
            {/* <Divider  /> */}
            <Box justifyContent={"center"} display={"flex"} marginTop={"30px"}>
                <Button
                    loadingText="Submitting"
                    colorScheme="whatsapp"
                    size={"lg"}
                    rounded={"20px"}
                    w={"50%"}
                    fontSize={"25px"}
                    onClick={handleClick}
                >
                    Submit
                </Button>
            </Box>

            <Modal size="xl" isCentered isOpen={isModalOpen}>
                <ModalOverlay />
                <ModalContent alignItems={"center"}>
                    <ModalHeader>
                        <Text color="tomato" fontSize={"25px"}>
                            {response.store}
                        </Text>
                    </ModalHeader>

                    <ModalBody>
                        <Stack spacing={3}>
                            <Text size={"2xl"}>
                                <Text as="b"> Game Title: </Text>
                                {response.title}
                            </Text>

                            <Text>
                                <Text as="b"> Price: </Text>
                                {response.priceString}
                            </Text>

                            <Text>
                                <Text as="b"> Is on sale: </Text> {response.isOnSale ? "Yes" : "No"}
                            </Text>

                            <Text> {response.message}</Text>

                            <Divider />
                            <Text as="samp">We will track and notify you when the price drops</Text>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button size="lg" colorScheme="blue" onClick={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Grid>
    );
};

export default FormFields;
