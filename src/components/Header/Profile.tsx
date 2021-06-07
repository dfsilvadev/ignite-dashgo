import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box marginRight="4" textAlign="right">
        <Text>Daniel Silva</Text>
        <Text color="gray.300" fontSize="small">
          dfsilva.dxp@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Daniel Silva" background="pink.500" />
    </Flex>
  );
}
