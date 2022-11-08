import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function StatsCard(props) {
  const { title, stat, icon } = props; //구조분해 사용
  return (
    <Stat

      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"3px solid"}
      borderColor={"black"}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Flex
      direction={"column"}
      px={{ base: 2, sm: 12, md: 17 }}
      justify={"center"}
      align={"center"}
      h={"100vh"}
      pos={"relative"}
    >
      <Box
        w={"25%"}
        h={"25%"}
        bgGradient={"linear(to-r,#AFE80C, #324203)"}
        pos={"absolute"}
        zIndex={-3}
        filter={"blur(100px)"}
      >
      </Box>
      <chakra.h1
        textAlign={"center"}
        fontSize={"6xl"}
        py={10}
        fontWeight={"bold"}
      >
        Our company is expanding, your earning too.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Users"}
          stat={"5,000"}
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"Servers"}
          stat={"1,000"}
          icon={<FiServer size={"3em"} />}
        />
        <StatsCard
          title={"Datacenters"}
          stat={"7"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
    </Flex>
  );
}
