import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, type, ...props },
  ref
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="name">{label}</FormLabel>}

      <ChakraInput
        type={type}
        name={name}
        id={name}
        {...props}
        background="gray.900"
        variant="filled"
        focusBorderColor="pink.500"
        _hover={{ bgColor: "gray.900" }}
        ref={ref}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
