import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  sholdMathExactHref?: boolean;
}

export function ActiveLink({
  children,
  sholdMathExactHref = false,
  ...props
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (sholdMathExactHref && (asPath === props.href || asPath === props.as)) {
    isActive = true;
  }

  if (
    !sholdMathExactHref &&
    (asPath.startsWith(String(props.href)) ||
      asPath.startsWith(String(props.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...props}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
