import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaDiscord, FaCheckCircle } from "react-icons/fa";
import { GiPointySword } from "react-icons/gi";
import { RiSwitchFill } from "react-icons/ri";
import { forwardRef } from "react";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      boxShadow="lg"
      borderWidth="3px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={"gray.500"}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

const Pricing = forwardRef((props, ref) => {
  return (
    <Box py={12} ref={ref}>
      <VStack spacing={2} textAlign="center">
        <Heading
          as="h1"
          fontSize="6xl"
          textShadow={"0 0 0.15em #1da9cc"}
          filter={"blur(0.007em)"}
          whiteSpace={"nowrap"}
        >
          Play, Trade and Connect
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={"#AFE80C"}
                px={5}
                py={2}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Games
              </Text>
            </Box>
            <Box py={4} px={12}>
              {/* <Text fontWeight="500" fontSize="2xl">
                NFT Assets
              </Text> */}
              <Icon as={RiSwitchFill} mt={22} color={"#AFE80C"} w={20} h={20} />
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack py={4} borderBottomRadius={"xl"}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" color="gray.500">
                  Check-out NFT List
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={"#AFE80C"}
                px={5}
                py={2}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                NFT Assets
              </Text>
            </Box>
            <Box py={4} px={12}>
              {/* <Text fontWeight="500" fontSize="2xl">
                NFT Assets
              </Text> */}
              <Icon
                as={GiPointySword}
                mt={22}
                color={"#AFE80C"}
                w={20}
                h={20}
              />
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack py={4} borderBottomRadius={"xl"}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" color="gray.500">
                  Check-out NFT List
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={"#AFE80C"}
                px={5}
                py={2}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Community
              </Text>
            </Box>
            <Box py={4} px={12}>
              {/* <Text fontWeight="500" fontSize="2xl">
                NFT Assets
              </Text> */}
              <Icon as={FaDiscord} mt={22} color={"#AFE80C"} w={20} h={20} />
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack py={4} borderBottomRadius={"xl"}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" color="gray.500">
                  Check-out NFT List
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
      </Stack>
    </Box>
  );
});

export default Pricing;
