import React from "react";
import { Center, Heading, SimpleGrid, GridItem, VStack, Text } from "@chakra-ui/react";
import { Flex } from "antd";
const Stepper = () => {
    return (
        <>
            <Center flexDirection={{ base: "column", md: "row" }} p={4} gap={5}>
                <Heading lineHeight="tall">Getting started in</Heading>

                <Text
                    fontSize={{ base: "3xl", md: "5xl" }}
                    // fontSize={"5xl"}
                    px={2}
                    py={1}
                    as={"em"}
                    color="green.400"
                >
                    3 easy steps
                </Text>
            </Center>

            <SimpleGrid
                autoRows
                columns={{ md: 1, base: 3 }}
                p="50px"
                spacing={10}
                minChildWidth={{ base: "250px", md: "300px" }}
            >
                <GridItem h={{ base: "auto", md: "250px" }}>
                    <VStack spacing={5}>
                        <Text as="mark" bg="green.400" p={"12px"} rounded={"10px"}>
                            01
                        </Text>
                        <Text as="b">Lock your product's link</Text>
                        <Text as="em">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, exercitationem quae aperiam
                            ex molestias dolorem, eligendi suscipit, dolores deleniti tempora voluptatem laudantium
                            ducimus autem dignissimos asperiores iste earum adipisci eveniet?
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem h={{ base: "auto", md: "250px" }}>
                    <VStack spacing={5}>
                        <Text as="mark" bg="green.400" p={"12px"} rounded={"10px"}>
                            02
                        </Text>
                        <Text as="b">Paste the link</Text>
                        <Text as="em">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum aliquid blanditiis esse ut
                            nostrum illo a delectus nihil. Ut rerum, ullam eveniet fugiat dolor possimus recusandae
                            omnis voluptatem at consectetur.
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem h={{ base: "auto", md: "250px" }}>
                    <VStack spacing={5}>
                        <Text as="mark" bg="green.400" p={"12px"} rounded={"10px"}>
                            03
                        </Text>
                        <Text as="b">Enjoy your free time</Text>
                        <Text as="em">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel esse cumque reprehenderit
                            facere, repellendus est, provident dolore amet quidem distinctio fugit repellat, alias
                            nobis. Nisi tenetur asperiores dolorum et ipsum.
                        </Text>
                    </VStack>
                </GridItem>
            </SimpleGrid>
        </>
    );
};

export default Stepper;
