import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Daniel Silva</Text>
          <Text color="gray.300" fontSize="small">
            dfsilva.dxp@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Daniel Silva" background="pink.500" />
    </Flex>
  );
}
