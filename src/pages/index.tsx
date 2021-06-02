import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { TiChevronRight } from "react-icons/ti";

export default function Home() {
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        background="gray.800"
        padding={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              type="text"
              name="email"
              id="email"
              size="lg"
              background="gray.900"
              variant="filled"
              focusBorderColor="pink.500"
              _hover={{ bgColor: "gray.900" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              type="password"
              name="password"
              id="password"
              size="lg"
              background="gray.900"
              variant="filled"
              focusBorderColor="pink.500"
              _hover={{ bgColor: "gray.900" }}
            />
          </FormControl>
          <Button
            type="submit"
            rightIcon={<TiChevronRight />}
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
