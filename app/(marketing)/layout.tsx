import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="container z-40 bg-background">
        <div className="h-20 py-6">
          <nav>
            <Link 
              href={"/login"}
              className={cn(buttonVariants({variant: "secondary", size: "sm" }),
              "py-4"
            )}
              >ログイン</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
