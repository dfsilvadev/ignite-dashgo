import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputPros extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, type, ...props }: InputPros) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="name">{label}</FormLabel>}

      <ChakraInput type={type} name={name} id={name} {...props} />
    </FormControl>
  );
}