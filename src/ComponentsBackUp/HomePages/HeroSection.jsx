import React from "react";
import { Container, Stack, Heading, Text, Button, Box, Icon, useColorModeValue } from "@chakra-ui/react";
import { Arrow } from "../../Assets/ArrowImg/Arrow";
import {Link} from 'react-router-dom'
const HeroSection = () => {
    const textStyles = {
        fontSize: "20px",
    };
    return (
        <Box
            //    bg={useColorModeValue('gray.50', 'gray.900')}
            //     color={useColorModeValue("gray.700", "gray.200")}
            width={"100%"}
            // minH={'100vh'}
        >
            <Container maxW={"3xl"}>
                <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
                    <Heading
                        as="i"
                        fontWeight={600}
                        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                        lineHeight={"110%"}
                    >
                        Never miss out any <br />
                        <Text as={"span"} color={"green.400"}>
                            {/* limited-time deals! */}
                        </Text>
                    </Heading>
                    <Text size="lg" sx={textStyles}>
                        {/* Everyone enjoys getting a good discount on the products they are interested. However, life is
                        becoming too busy nowadays, people can't often keep track of the products they are interested? */}
                        <br /> Don't worry, We'll be Watching for you!
                    </Text>
                    <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"}>
                        <Button
                            colorScheme={"green"}
                            bg={"green.400"}
                            rounded={"full"}
                            px={6}
                            _hover={{
                                bg: "green.500",
                            }}
                        >
                            <Link to="/trackprice">Get Started</Link>
                        </Button>
                        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
                            Learn more
                        </Button>
                        <Box>
                            <Icon
                                as={Arrow}
                                color={useColorModeValue("gray.800", "gray.300")}
                                w={71}
                                position={"absolute"}
                                right={-71}
                                top={"10px"}
                            />
                            <Text
                                fontSize={"lg"}
                                fontFamily={"Caveat"}
                                position={"absolute"}
                                right={"-125px"}
                                top={"-15px"}
                                transform={"rotate(10deg)"}
                            >
                                It's all free
                            </Text>
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>
        
    );
};

export default HeroSection;
