import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  // Wide tables scroll inside their own box instead of the whole page.
  table: (props) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
  // Internal links use client-side navigation; external ones open normally.
  a: ({ href = "", children, ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} {...props}>
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
