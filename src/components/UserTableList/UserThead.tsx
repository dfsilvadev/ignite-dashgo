import { Checkbox, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";

export function UserThead() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Thead>
      <Tr>
        <Th p={["2", "2", "6"]} color="gray.300" width="8">
          <Checkbox colorScheme="pink" />
        </Th>
        <Th>Usuário</Th>
        {isWideVersion && (
          <>
            <Th>Endereço</Th>
            <Th>Celular</Th>
          </>
        )}
        <Th>Menu</Th>
      </Tr>
    </Thead>
  );
}
