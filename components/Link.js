import * as React from "react";
import Link from "next/link";

export default React.forwardRef(
  ({ to, prefetch = false, ...props }, ref) => {
    if (typeof to === "string") {
      return (
        <Link href={to} prefetch={prefetch}>
          <a {...props} ref={ref} />
        </Link>
      );
    }

    return (
      <Link href={to.href} as={to.as} prefetch={prefetch}>
        <a {...props} ref={ref} />
      </Link>
    );
  }
);
