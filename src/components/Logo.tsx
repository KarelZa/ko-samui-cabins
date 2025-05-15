import Link from "next/link";
import { FC } from "react";

export const Logo: FC = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img src="/logo.png" height="60" width="60" alt="Ko-Samui Cabins" />
      <span className="text-xl font-semibold text-primary-100">
        Ko-Samui Cabins
      </span>
    </Link>
  );
};
