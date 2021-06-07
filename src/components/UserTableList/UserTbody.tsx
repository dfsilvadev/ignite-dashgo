import {
  Box,
  Button,
  Checkbox,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Tbody,
  Td,
  Text,
  Tr,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiDeleteBin5Line, RiEdit2Line, RiMore2Fill } from "react-icons/ri";

export function UserTbody() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Tbody>
      <Tr>
        <Td p={["2", "2", "6"]}>
          <Checkbox colorScheme="pink" />
        </Td>
        <Td>
          <Box>
            <Text fontWeight="bold">Daniel Silva</Text>
            <Text fontSize="smal" color="gray.300">
              dfsilva.dxp@gmail.com
            </Text>
          </Box>
        </Td>
        {isWideVersion && (
          <Td>
            <Box>
              <Text fontSize="smal" color="gray.300">
                Rua Renato Alpino Dela Lata, 100
              </Text>
            </Box>
          </Td>
        )}

        {isWideVersion && <Td>11 95199-1612</Td>}

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
    </Tbody>
  );
}
