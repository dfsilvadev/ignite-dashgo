import { Box, Table } from "@chakra-ui/react";

import { UserTbody } from "./UserTbody";
import { UserThead } from "./UserThead";

export function UserTableList() {
  return (
    <Table colorScheme="whiteAlpha">
      <UserThead />
      <UserTbody />
    </Table>
  );
}
