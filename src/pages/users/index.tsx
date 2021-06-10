import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";
import { useQuery } from "react-query";
import { RiDeleteBin5Line, RiEdit2Line, RiMore2Fill } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const { data, isLoading, error } = useQuery("users", async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();

    const users = data.users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      };
    });

    return users;
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Users | dashgo.</title>
      </Head>
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
          <Box
            flex="1"
            borderRadius={8}
            background="gray.800"
            padding={["4", "8"]}
          >
            <Flex marginBottom="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
              </Heading>
              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>
            {isLoading ? (
              <Flex justify="center" align="center" height="50%">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex>
                <Text>Erro ao carregar usuários</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th p={["2", "2", "6"]} color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && (
                        <>
                          <Th>Data de cadastro</Th>
                        </>
                      )}
                      <Th>Menu</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {data.map((user) => {
                      return (
                        <Tr key={user.id}>
                          <Td p={["2", "2", "6"]}>
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="smal" color="gray.300">
                                {user.email}
                              </Text>
                            </Box>
                          </Td>
                          {isWideVersion && (
                            <Td>
                              <Box>
                                <Text fontSize="smal" color="gray.300">
                                  {user.createdAt}
                                </Text>
                              </Box>
                            </Td>
                          )}

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
                                <PopoverArrow
                                  bg="gray.600"
                                  borderColor="gray.600"
                                />
                                <PopoverBody>
                                  <Stack spacing="2">
                                    <Box fontSize="sm">
                                      <Icon as={RiEdit2Line} marginRight="2" />
                                      Editar
                                    </Box>
                                    <Box fontSize="sm">
                                      <Icon
                                        as={RiDeleteBin5Line}
                                        marginRight="2"
                                      />
                                      Deletar
                                    </Box>
                                  </Stack>
                                </PopoverBody>
                              </PopoverContent>
                            </Popover>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
                <Pagination />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
