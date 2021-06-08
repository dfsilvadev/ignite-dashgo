import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { UserTableList } from "../../components/UserTableList";

export default function UserList() {
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
            <UserTableList />
            <Pagination />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
