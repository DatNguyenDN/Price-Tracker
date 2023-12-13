import React from "react";
import { Flex, Box, Center, Heading, Text, Image, VStack } from "@chakra-ui/react";
const NewsLetter = () => {
    return (
        <Flex
            flexDirection={["column", "row"]} // Column layout on small screens, row layout on larger screens
            justifyContent="space-between"
            alignItems="center"
            padding={'40px'}
            // display={{ md: "flex" }}
        >
            <Box
                flex={["none", 1]} // Takes full width on small screens, flex 1 on larger screens
                maxW={["100%", "600px"]} // Full width on small screens, maximum width on larger screens
               
            >
                <VStack spacing={"40px"}>
                    <Heading fontSize={['4xl', '6xl']}>
                        Need to hire a helping hand? We got you.
                    </Heading>
                    <Text fontSize={['md', 'xl']} align={['left', 'center']}>
                        From a quick template design to full-service campaign management our global community of 850+
                        trusted experts does it all.
                    </Text>

                    <Text
                        alignSelf={"flex-start"}
                        p="10px"
                        bg="green.500"
                        rounded={"15px"}
                        _hover={{ background: "pink.400" }}
                        cursor={"pointer"}
                    >
                        Explore Mailchimp Experts
                    </Text>
                </VStack>
            </Box>

            <Box
flex={['none', 1]} // Takes full width on small screens, flex 1 on larger screens
maxW={['100%', '500px']} // Full width on small screens, maximum width on larger screens
m={2}
p={4}
bg="white"
borderRadius="md"
boxShadow="md"
            >
                <Image src="https://eep.io/images/yzco4xsimv0y/6f1tGjkrpQsYCJW5PhYxOj/19efcb31ca4f86b982f3aff025a12b10/mailchimp-experts.png?w=640&fm=webp&q=70" />
            </Box>
        </Flex>
    );
};

export default NewsLetter;
