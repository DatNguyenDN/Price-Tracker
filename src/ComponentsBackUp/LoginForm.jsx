import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
    chakra,
    Text,
    VStack,
    HStack,
    flexbox,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { LoginContext } from "../components/Context/LoginContext";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginForm = () => {
    const { dataArray, formData, successfulMessage, errorMessage, handleInputChange, handleLogin } = useContext(LoginContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);

    return (
        <Stack>
            <Flex flexDirection="column" width="100wh" minH="80vh" justifyContent="center" alignItems="center" gap="10px" marginTop={"50px"}>
                <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
                    <Avatar bg="green.500" />
                    <Heading color={"green.500"}>Welcome</Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form>
                            <Stack spacing={10} p="1rem" boxShadow="md">
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaUserAlt color="gray.300" />} />
                                        <Input
                                            rounded={"15px"}
                                            type="email"
                                            id="email"
                                            placeholder="Email address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl>
                                    <InputGroup>
                                        {/* <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                            children={<CFaLock color="gray.300" />}
                                            
                                        /> */}
                                        <Input
                                            rounded={"15px"}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <Flex mt="10" direction={{ base: "column", sm: "row" }} display={"flex"} justify={"space-between"} alignItems={"center"}>
                                        <Checkbox>Remember me?</Checkbox>
                                        <NavLink to="/forgotpasswword">Forgot password?</NavLink>
                                    </Flex>
                                </FormControl>
                                <Button rounded={"20px"} type="submit" variant="solid" colorScheme="whatsapp" width="full" onClick={handleLogin}>
                                    Login
                                </Button>
                            </Stack>
                        </form>
                        {errorMessage && <div>{errorMessage}</div>}

                        {successfulMessage && <div>{successfulMessage}</div>}
                    </Box>
                </Stack>
                <Box className="flex">
                    New to us?&nbsp;&nbsp;&nbsp;
                    <NavLink to="/signup">
                        <p className="text-[#38a169]"> Sign Up</p>
                    </NavLink>
                </Box>
            </Flex>
        </Stack>
    );
};

export default LoginForm;
