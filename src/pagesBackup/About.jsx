import { Avatar,Grid, Box, Button, Flex, Heading, Image, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";


function About() {
    return (
       
            < VStack>
                <Flex
                    // bg={useColorModeValue("gray.50", "gray.900")}
                    // color={useColorModeValue("gray.700", "gray.200")}
                    h="100vh"
                    width={"100%"}
                    // minH={"100vh"}
                    direction={["column", "row"]} // Responsive direction
                    alignItems="center" // Align items in the center
                    justifyContent="center" // Center the content horizontally
                    p={2} // Padding around the Flex container
                    // marginTop={'50px'}
                >
                    <Box
                        maxW={"300px"}
                        w={"full"}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        color={useColorModeValue("gray.700", "gray.200")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        overflow={"hidden"}
                        p={4}
                        m={10} // Margin between boxes
                    >
                        <Image
                            h={"120px"}
                            w={"full"}
                            src={
                                "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                            }
                            objectFit="cover"
                            alt="#"
                        />
                        <Flex justify={"center"} mt={-12}>
                            <Avatar
                                size={"xl"}
                                src={
                                    "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/313127960_2563509337125105_1743630119541912110_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHgtXY0lABr05KE_YmZObns2S18LBCTDWvZLXwsEJMNa-2Az4NhSO_WZT9RExxmbKhIOrrVPFtM6j8EjPIsDIwo&_nc_ohc=aMVoRUWY6koAX8FQ3YL&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCmd9i9RJmRORX2Wrm_5dYP_enmcQJcG47Dz4gUISuSFg&oe=6567FD22"
                                }
                                css={{
                                    border: "2px solid white",
                                }}
                            />
                        </Flex>
    
                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Dat Nguyen
                                </Heading>
                                <Text color={"gray.500"}>Frontend Developer</Text>
                            </Stack>
    
                            <Stack direction={"row"} justify={"center"} spacing={6}>
                                <Stack spacing={0} align={"center"}>
                                    <Text fontWeight={600}>19k</Text>
                                    <Text fontSize={"sm"} color={"gray.500"}>
                                        Followers
                                    </Text>
                                </Stack>
                                <Stack spacing={0} align={"center"}>
                                    <Text fontWeight={600}>15k</Text>
                                    <Text fontSize={"sm"} color={"gray.500"}>
                                        Followers
                                    </Text>
                                </Stack>
                            </Stack>
    
                            <Button
                                w={"full"}
                                mt={8}
                                bg={useColorModeValue("#151f21", "gray.900")}
                                color={"white"}
                                rounded={"md"}
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                                onClick={() => (window.location.href = "https://www.facebook.com/datnguyenptg/")}
                            >
                                Follow
                            </Button>
                        </Box>
                    </Box>
    
                    <Box
                        maxW={"300px"}
                        w={"full"}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        color={useColorModeValue("gray.700", "gray.200")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        overflow={"hidden"}
                        p={4}
                        m={10} // Margin between boxes
                    >
                        <Image
                            h={"120px"}
                            w={"full"}
                            src={
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uxxPvYY8Rv59YsdLzGBveIy37gPrieboPw&usqp=CAU"
                            }
                            objectFit="cover"
                            alt="#"
                        />
                        <Flex justify={"center"} mt={-12}>
                            <Avatar
                                size={"xl"}
                                src={
                                    "https://scontent.fdad3-6.fna.fbcdn.net/v/t31.18172-8/1402256_679109722107810_1091231947_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=b9145c&_nc_eui2=AeG_WL4HmsdseZFglS-6bHTToVivmqW5WDyhWK-apblYPHoxH6ys7zNik9F0YgXEUm6Mm6vqL9jWqTn5gABQe67m&_nc_ohc=cMdVrJA75rMAX-FMzda&_nc_ht=scontent.fdad3-6.fna&oh=00_AfChiHFKGNZFY3ivXeE12ovMH1uAJcei7nIl8rZ73mYNDQ&oe=6588E58A"
                                }
                                css={{
                                    border: "2px solid white",
                                }}
                            />
                        </Flex>
    
                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    Thanh Nguyen
                                </Heading>
                                <Text color={"gray.500"}>Backend Developer</Text>
                            </Stack>
    
                            <Stack direction={"row"} justify={"center"} spacing={6}>
                                <Stack spacing={0} align={"center"}>
                                    <Text fontWeight={600}>18k</Text>
                                    <Text fontSize={"sm"} color={"gray.500"}>
                                        Followers
                                    </Text>
                                </Stack>
                                <Stack spacing={0} align={"center"}>
                                    <Text fontWeight={600}>13k</Text>
                                    <Text fontSize={"sm"} color={"gray.500"}>
                                        Followers
                                    </Text>
                                </Stack>
                            </Stack>
    
                            <Button
                                w={"full"}
                                mt={8}
                                bg={useColorModeValue("#151f21", "gray.900")}
                                color={"white"}
                                rounded={"md"}
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                                onClick={() => (window.location.href = "https://www.facebook.com/ncthanh1986/")}
                            >
                                <a>Follow</a>
                            </Button>
                        </Box>
                    </Box>
                </Flex>
            </VStack>
            
    
    );
}

export default About;
