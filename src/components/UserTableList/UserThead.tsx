import { Checkbox, Th, Thead, Tr } from "@chakra-ui/react";

export function UserThead() {
  return (
    <Thead>
      <Tr>
        <Th paddingX="6" color="gray.300" width="8">
          <Checkbox colorScheme="pink" />
        </Th>
        <Th>Usuário</Th>
        <Th>Endereço</Th>
        <Th>Celular</Th>
        <Th>Menu</Th>
      </Tr>
    </Thead>
  );
}
