import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Text,
  Tfoot,
  Th,
  Tr,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/users/useUsers";
import { UserTheadList } from "../../components/UserList/userTheadList";
import { UserTbodyList } from "../../components/UserList/userTbodyList";
import { useState } from "react";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);

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
                {!isLoading && isFetching && (
                  <Spinner color="pink.500" size="sm" ml="4" />
                )}
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
              <Flex justify="center" align="center" marginTop="6">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex>
                <Text>Erro ao carregar usuários</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <UserTheadList />
                  {data ? (
                    <UserTbodyList users={data.users} />
                  ) : (
                    <Tfoot>
                      <Tr>
                        <Th></Th>
                        <Th>Nenhum resultado</Th>
                      </Tr>
                    </Tfoot>
                  )}
                </Table>
                <Pagination
                  totalCountOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
