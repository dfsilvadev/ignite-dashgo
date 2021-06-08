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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório."),
  email: yup.string().required("E-mail obrigatório.").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(6, "A senha deve conter 6 ou mais caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas devem ser iguais."),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;
  console.log(errors);

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    console.log(values);
  };

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
            as="form"
            flex="1"
            borderRadius={8}
            background="gray.800"
            padding={["4", "8"]}
            onSubmit={handleSubmit(handleCreateUser)}
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
                  error={errors.name}
                  {...register("name")}
                />
                <Input
                  name="email"
                  label="E-mail"
                  type="email"
                  size="lg"
                  error={errors.email}
                  {...register("email")}
                />
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
                  error={errors.password}
                  {...register("password")}
                />
                <Input
                  name="password_confirmation"
                  label="Confirme a senha"
                  type="password"
                  size="lg"
                  error={errors.password_confirmation}
                  {...register("password_confirmation")}
                />
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button
                  type="submit"
                  colorScheme="pink"
                  isLoading={formState.isSubmitting}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
