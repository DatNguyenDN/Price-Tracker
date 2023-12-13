import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Textarea,
    Tooltip,
    VStack,
    useClipboard,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    const { hasCopied, onCopy } = useClipboard("datnguyenptg@gmail.com");

    return (
        <VStack >
            <Flex
                width={"100%"}
                direction={["column", "row"]}
                alignItems="center" // Align items in the center
                justifyContent="center" // Center the content 
                id="contact"
                p={2} 
                mt='50px'
               

            >
                <Box 
                
                borderRadius="lg" m={{ base: 5, md: 16, lg: 5 }} p={{ base: 5, lg: 8 }} h={"100%"}>
                    <Box>
                        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                            <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: "column", md: "row" }}>
                                <Stack align="center" justify="space-around" direction={{ base: "row", md: "column" }}>
                                    <Tooltip
                                        label={hasCopied ? "Email Copied!" : "Copy Email"}
                                        closeOnClick={false}
                                        hasArrow
                                    >
                                        <IconButton
                                            aria-label="email"
                                            variant="ghost"
                                            size="lg"
                                            fontSize="3xl"
                                            icon={<MdEmail />}
                                            _hover={{
                                                bg: "blue.500",
                                                color: useColorModeValue("white", "gray.700"),
                                            }}
                                            onClick={onCopy}
                                            isRound
                                        />
                                    </Tooltip>

                                    <Box as="a" href="https://github.com/DatNguyenDN">
                                        <IconButton
                                            aria-label="github"
                                            variant="ghost"
                                            size="lg"
                                            fontSize="3xl"
                                            icon={<BsGithub />}
                                            _hover={{
                                                bg: "blue.500",
                                                color: useColorModeValue("white", "gray.700"),
                                            }}
                                            isRound
                                        />
                                    </Box>

                                    <Box as="a" href="https://www.facebook.com/datnguyenptg/">
                                        <IconButton
                                            aria-label="twitter"
                                            variant="ghost"
                                            size="lg"
                                            icon={<FaFacebook size="28px" />}
                                            _hover={{
                                                bg: "blue.500",
                                                color: useColorModeValue("white", "gray.700"),
                                            }}
                                            isRound
                                        />
                                    </Box>

                                    <Box as="a" href="#">
                                        <IconButton
                                            aria-label="linkedin"
                                            variant="ghost"
                                            size="lg"
                                            icon={<BsLinkedin size="28px" />}
                                            _hover={{
                                                bg: "blue.500",
                                                color: useColorModeValue("white", "gray.700"),
                                            }}
                                            isRound
                                        />
                                    </Box>
                                </Stack>

                                <Box
                                    
                                    bg={useColorModeValue("white.100", "gray.700")}
                                    boxShadow={"2xl"}
                                    borderRadius="lg"
                                    p={12}
                                    color={useColorModeValue("gray.700", "whiteAlpha.900")}
                                    shadow="lg"
                                    
                                >
                                    <VStack spacing={5}>
                                        <FormControl isRequired>
                                            <FormLabel>Name</FormLabel>

                                            <InputGroup>
                                                <InputLeftElement>
                                                    <BsPerson />
                                                </InputLeftElement>
                                                <Input type="text" name="name" placeholder="Your Name" />
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel>Email</FormLabel>

                                            <InputGroup>
                                                <InputLeftElement>
                                                    <MdOutlineEmail />
                                                </InputLeftElement>
                                                <Input type="email" name="email" placeholder="Your Email" />
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel>Message</FormLabel>

                                            <Textarea
                                                name="message"
                                                placeholder="Your Message"
                                                rows={6}
                                                resize="none"
                                            />
                                        </FormControl>

                                        <Button
                                            colorScheme="blue"
                                            bg="blue.400"
                                            color="white"
                                            _hover={{
                                                bg: "blue.500",
                                            }}
                                            width="full"
                                        >
                                            Send Message
                                        </Button>
                                    </VStack>
                                </Box>
                            </Stack>
                        </VStack>
                    </Box>
                </Box>
            </Flex>
        </VStack>
    );
};

export default Contact;
