import {
  Box,
  Button,
  Checkbox,
  Icon,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Tbody,
  Td,
  Text,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiDeleteBin5Line, RiEdit2Line, RiMore2Fill } from "react-icons/ri";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

interface UserTbodyListProps {
  users: User[];
}

export function UserTbodyList({ users }: UserTbodyListProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ["user", userId],
      async () => {
        const response = await api.get(`users/${userId}`);

        return response.data;
      },
      { staleTime: 1000 * 60 * 60 * 24 /* 24 hours */ }
    );
  }

  return (
    <Tbody>
      {users.map((user) => {
        return (
          <Tr key={user.id}>
            <Td p={["2", "2", "6"]}>
              <Checkbox colorScheme="pink" />
            </Td>
            <Td>
              <Box>
                <Link onMouseEnter={() => handlePrefetchUser(user.id)}>
                  <Text fontWeight="bold">{user.name}</Text>
                </Link>
                <Text fontSize="smal" color="gray.300">
                  {user.email}
                </Text>
              </Box>
            </Td>
            {isWideVersion && (
              <Td>
                <Box>
                  <Text fontSize="smal" color="gray.300">
                    {user.createdAt}
                  </Text>
                </Box>
              </Td>
            )}

            <Td>
              <Popover>
                <PopoverTrigger>
                  <Button size="sm" colorScheme="gray.800">
                    <Icon as={RiMore2Fill} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  color="gray.50"
                  bg="gray.600"
                  maxWidth="100px"
                  borderColor="gray.600"
                >
                  <PopoverArrow bg="gray.600" borderColor="gray.600" />
                  <PopoverBody>
                    <Stack spacing="2">
                      <Box fontSize="sm">
                        <Icon as={RiEdit2Line} marginRight="2" />
                        Editar
                      </Box>
                      <Box fontSize="sm">
                        <Icon as={RiDeleteBin5Line} marginRight="2" />
                        Deletar
                      </Box>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
}
