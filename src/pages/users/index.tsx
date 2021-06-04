import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Stack,
} from "@chakra-ui/react";
import {
  RiAddLine,
  RiDeleteBin5Line,
  RiEdit2Line,
  RiMore2Fill,
} from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />
        <Box flex="1" borderRadius={8} background="gray.800" padding="8">
          <Flex marginBottom="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Th>
                <Th>Usuário</Th>
                <Th>Endereço</Th>
                <Th>Celular</Th>
                <Th>Menu</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Daniel Silva</Text>
                    <Text fontSize="smal" color="gray.300">
                      dfsilva.dxp@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    <Text fontSize="smal" color="gray.300">
                      Rua Renato Alpino Dela Lata, 100
                    </Text>
                  </Box>
                </Td>
                <Td>11 95199-1612</Td>
                <Td>
                  <Popover>
                    <PopoverTrigger>
                      <Button size="sm" colorScheme="gray.800">
                        <Icon as={RiMore2Fill} />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      color="gray.50"
                      bg="gray.600"
                      maxWidth="100px"
                      borderColor="gray.600"
                    >
                      <PopoverArrow bg="gray.600" borderColor="gray.600" />
                      <PopoverBody>
                        <Stack spacing="2">
                          <Box fontSize="sm">
                            <Icon as={RiEdit2Line} marginRight="2" />
                            Editar
                          </Box>
                          <Box fontSize="sm">
                            <Icon as={RiDeleteBin5Line} marginRight="2" />
                            Deletar
                          </Box>
                        </Stack>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
