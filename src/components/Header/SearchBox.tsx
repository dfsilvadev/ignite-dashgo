import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      paddingY="4"
      paddingX="8"
      marginLeft="6"
      maxWidth={400}
      background="gray.800"
      color="gray.200"
      position="relative"
      borderRadius="full"
      align="center"
    >
      <Input
        variant="unstyled"
        marginRight="4"
        paddingX="4"
        color="gray.50"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
