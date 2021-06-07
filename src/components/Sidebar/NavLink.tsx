import {
  Text,
  Link,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}
export function NavLink({ icon, children, ...props }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...props}>
      <Icon as={icon} fontSize="20" />
      <Text marginLeft="4" fontSize="medium">
        {children}
      </Text>
    </Link>
  );
}
