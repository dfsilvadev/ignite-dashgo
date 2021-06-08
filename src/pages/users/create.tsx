import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <>
      <Head>
        <title>Create a new user | dashgo.</title>
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
            <Heading size="lg" fontWeight="normal">
              Criar usuário
            </Heading>

            <Divider my="6" borderColor="gray.700" />

            <VStack spacing={["4", "8"]}>
              <SimpleGrid
                minChildWidth="240px"
                spacing={["4", "8"]}
                width="100%"
              >
                <Input
                  name="name"
                  label="Nome Completo"
                  type="text"
                  size="lg"
                />
                <Input name="email" label="E-mail" type="email" size="lg" />
              </SimpleGrid>
              <SimpleGrid
                minChildWidth="240px"
                spacing={["4", "8"]}
                width="100%"
              >
                <Input
                  name="password"
                  label="Senha"
                  type="password"
                  size="lg"
                />
                <Input
                  name="password_confirmation"
                  label="Confirme a senha"
                  type="password"
                  size="lg"
                />
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha"> Cancelar</Button>
                </Link>
                <Button colorScheme="pink"> Salvar</Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
