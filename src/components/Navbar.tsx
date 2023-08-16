import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button/button-variants";

const Navbar = () => {
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          <h1>Sage</h1>
        </Link>
        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
