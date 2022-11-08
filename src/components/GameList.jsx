import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

//TODO: table contents
export default function GameList() {
  return (
    <>
      <TableContainer mx={20}>
        <Table variant="simple" size="lg" px={3} py={5}>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead bgcolor={"#afe80c"}>
            <Tr>
              <Th>Games</Th>
              <Th>Platform</Th>
              <Th isNumeric>multiply by</Th>
              <Th isNumeric>multiply by</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td isNumeric>25.4</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
              <Td isNumeric>30.48</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
              <Td isNumeric>0.91444</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
              <Th isNumeric>multiply by</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

