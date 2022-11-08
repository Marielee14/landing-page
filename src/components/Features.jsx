import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Flex py={12} px={200} justify={"center"} align={"center"}>
      <SimpleGrid rows={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"black"}
            fontWeight={600}
            fontSize={"xl"}
            bg={`#afe80c`}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
            
          >
            Our Mission
          </Text>
          <Heading>We empower gamers to select </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            This is responsive text
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={MdFactCheck} color={"white"} w={5} h={5} />}
              iconBg={"#8DA253"}
              text={"in-depth reviews from gaming experts"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Simple and intuitive dashboards to manage NFT assets"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Market Analysis"}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Flex>
  );
}
