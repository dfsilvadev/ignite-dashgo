import { Flex, Button, Stack, Icon } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import Head from "next/head";

import { Input } from "../components/Form/Input";

import styles from "../styles/signIn.module.scss";

type SignInFormData = {
  email: string;
  password: string;
};

export default function Home() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    console.log(values);
  };

  return (
    <>
      <Head>
        <title>dashgo.</title>
      </Head>
      <Flex width="100vw" height="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxWidth="390px"
          background="gray.800"
          padding={6}
          borderRadius={4}
          flexDir="column"
          className={styles.form}
          onSubmit={handleSubmit(handleSignIn)}
        >
          <strong className={styles.title}>Sign in</strong>
          <Stack spacing={4}>
            <Input
              name="email"
              type="email"
              label="E-mail"
              size="lg"
              {...register("email")}
            />
            <Input
              name="password"
              type="password"
              label="Password"
              size="lg"
              {...register("password")}
            />

            <Button
              type="submit"
              colorScheme="pink"
              size="lg"
              isLoading={formState.isSubmitting}
            >
              Enter
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
