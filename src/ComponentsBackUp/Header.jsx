import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Stack,
    useColorMode,
    useColorModeValue,
    useMediaQuery,
    Text
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/Image/logo.png";

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();

    const [isLargerThan771] = useMediaQuery("(min-width: 771px)"); //set display value for Menu btn

    return (
        <>
            <Box 
                bg={useColorModeValue("gray.50", "gray.900")} 
                color={useColorModeValue("gray.700", "gray.200")}
                px={4}
                position={'fixed'}
                w='100%'
                zIndex={999}               
            >
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}
                >
                    <Box>
                        <Image width={"100%"} h={"100%"} color={"#48BB78"} objectFit={"cover"} src={logo}></Image>
                    </Box>
                    <HStack as={"nav"} spacing={12} display={{ base: "none", md: "flex" }}>
                        <NavLink to="/">
                            <Text _hover={{color:'green.500',fontWeight: 'semibold' }}
                            >
                                Home
                            </Text>
                        </NavLink>
                        <NavLink to="/trackprice">
                            <Text _hover={{color:'green.500',fontWeight: 'semibold' }}
                            >
                                Price Tracker
                            </Text>
                        </NavLink>
                        <NavLink to="/mytracking">
                            <Text _hover={{color:'green.500',fontWeight: 'semibold' }}
                            >
                                My Tracking
                                </Text>
                        </NavLink>
                        <NavLink to="/about">
                            <Text _hover={{color:'green.500',fontWeight: 'semibold' }}
                            >
                                About
                            </Text>
                        </NavLink>
                        <NavLink to="/contact">
                            <Text _hover={{color:'green.500',fontWeight: 'semibold' }}
                            >
                                Contact 
                            </Text>
                        </NavLink>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <IconButton onClick={toggleColorMode} isRound="true">
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </IconButton>
                            <Button
                                as={NavLink}
                                to='/login'
                                colorScheme="whatsapp"
                                aria-label='Search database'
                                
                            >
                            Login

                            </Button>

                            <Menu>
                                <MenuButton
                                    className="menu-btn"
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <HamburgerIcon display={isLargerThan771 ? "none" : "display"} />
                                </MenuButton>
                                <MenuList justifyContent={"center"} alignItems={"center"} width="100vh" height="32vh">
                                    <MenuItem justifyContent={"center"}>
                                        <NavLink to="/">Home</NavLink>
                                    </MenuItem>
                                    <MenuDivider />
                                    <MenuItem justifyContent={"center"}>
                                        <NavLink to="/trackprice">Track Price</NavLink>
                                    </MenuItem>
                                    <MenuDivider />
                                    <MenuItem justifyContent={"center"}>
                                        <NavLink to="/mytracking">My Tracking</NavLink>
                                    </MenuItem>
                                    <MenuDivider />
                                    <MenuItem justifyContent={"center"}>
                                        <NavLink to="/about">About</NavLink>
                                    </MenuItem>
                                    <MenuDivider />
                                    <MenuItem justifyContent={"center"}>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                        <Stack></Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
