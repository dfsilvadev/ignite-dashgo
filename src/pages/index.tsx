import { Flex, Button, Stack, Icon } from "@chakra-ui/react";
import { TiChevronRight } from "react-icons/ti";

import { Input } from "../components/Form/Input";

import styles from "../styles/signIn.module.scss";

export default function Home() {
  return (
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
      >
        <strong className={styles.title}>Sign in</strong>
        <Stack spacing={4}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            size="lg"
            background="gray.900"
            variant="filled"
            focusBorderColor="pink.500"
            _hover={{ bgColor: "gray.900" }}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            size="lg"
            background="gray.900"
            variant="filled"
            focusBorderColor="pink.500"
            _hover={{ bgColor: "gray.900" }}
          />

          <Button
            type="submit"
            rightIcon={<Icon as={TiChevronRight} />}
            colorScheme="pink"
            size="lg"
          >
            Enter
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
