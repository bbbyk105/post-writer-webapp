import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="text-center">
          <div className="container mx-auto flex flex-col items-center gap-4 max-w-[64rem]">
            <Link
              href={siteConfig.links.x}
              className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Xをフォローする
            </Link>
            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Post Writer
            </h1>
            <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
              このアプリケーションはNext.js
              AppRouterで作成されたものです。ユーザーは自由にポストを作成することができます。
            </p>
            <div className="space-x-4">
              <Link
                href={"/login"}
                className={cn(buttonVariants({ size: "lg" }))}
              >
                はじめる
              </Link>
              <Link
                href={siteConfig.links.github}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" })
                )}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container mx-auto py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
      >
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンな技術スタックを用いて作られたWebアプリケーションです。Next.jsやAppRouterを利用してマークダウン形式でブログ投稿ができます。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-[64rem]">
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#212121"
                  d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold ">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutersの技術を使用</p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#212121"
                  d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold ">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutersの技術を使用</p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#212121"
                  d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold ">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutersの技術を使用</p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#212121"
                  d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold ">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutersの技術を使用</p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#212121"
                  d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold ">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutersの技術を使用</p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#212121"
                  d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
                ></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold ">Next.js</h3>
                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutersの技術を使用</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
