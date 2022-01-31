   
import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";

  import Weather from "./Weather";
  import History from "./History";
  import { useNavigate } from "react-router-dom" 

  function Dashboard(props) {
    // function handleEvent() {
    //     <Weather/>
    //   }
  
    return (
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            <h1>Welcome user</h1>
          </Text>
        </Box>
        <Box  bg="skyblue" w="100%" p={4} borderRadius="lg" borderWidth="3px" justifyContent="center" d="flex"
        >
          <Tabs isFitted variant="soft-rounded" align="center" >
            <TabList mb="5em">
            <Tab width='50%'>Weather info</Tab>
              <Tab width='50%'> History</Tab>
              
            </TabList>
            <TabPanels>
              <TabPanel>
                <Weather></Weather>
              </TabPanel>
              <TabPanel>
                <History></History>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    );
  }
  
  export default Dashboard;