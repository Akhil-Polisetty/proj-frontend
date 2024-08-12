import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Signin from "./Signin";
import Signup from "./Signup";
// import { Flex, Spacer } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
const Home = () => {
  return (
    <div>
      <Container maxW="xl" centerContent>
        <Box
          w="100%"
          d="flex"
          justifyContent="center"
          m="50px 0px 15px 0px"
          border="2px solid grey"
          h="100px"
          borderRadius="lg"
        >
          <Text align="center" m="30px" fontSize="x-large">
            Talk To Me
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="1g" borderWidth="1px">
          <Tabs variant="soft-rounded">
            <TabList>
              <Tab>Sign Up</Tab>
              <Tab>Sign In</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Signup/>
              </TabPanel>
              <TabPanel>
                <Signin/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
