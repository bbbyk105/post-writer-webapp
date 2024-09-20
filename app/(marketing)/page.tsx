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
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutersの技術を使用
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <path d="M21.7 12c0-1.4-1.3-2.7-3.4-3.5V8c.3-2.1-.2-3.6-1.3-4.2c-1.3-.7-3-.2-4.8 1.2c-1.8-1.4-3.5-2-4.7-1.2C6.4 4.4 5.9 5.9 6 8v.5c-2 .8-3.4 2-3.4 3.5c0 1.4 1.4 2.7 3.5 3.5L6 16c-.2 2.1.3 3.6 1.4 4.2c.3.2.8.3 1.2.3a6 6 0 0 0 3.5-1.5a6 6 0 0 0 3.5 1.5c.5 0 .9 0 1.3-.3c1-.6 1.6-2.1 1.3-4.2v-.5c2-.8 3.4-2 3.4-3.5Zm-6-7.5l.8.1c.7.5 1 1.6.9 3.3l-.1.3c-.8-.3-1.7-.4-2.6-.5c-.5-.7-1-1.4-1.7-2c.7-.7 1.7-1.1 2.7-1.2m-8 8.7l.6 1l.6 1c-.5 0-1-.2-1.6-.4l.5-1.6Zm-.4-4L9 8.8l-.6 1l-.5 1l-.5-1.6Zm1 2.8a19.3 19.3 0 0 1 2-3.4a19.9 19.9 0 0 1 3.9 0a19.6 19.6 0 0 1 2 3.4a19.3 19.3 0 0 1-2 3.4a20 20 0 0 1-4 0A20.2 20.2 0 0 1 8.4 12Zm7.8 2.3l.5-1l.5 1.5l-1.6.4l.6-1Zm.5-3.5l-.5-1l-.6-1c.6 0 1 .2 1.6.4zm-4.4-4.5l1.1 1.2a20.9 20.9 0 0 0-2.2 0zM8 4.6c.2 0 .5-.2.7-.1c1 0 2 .5 2.8 1.2c-.7.6-1.3 1.3-1.8 2a8 8 0 0 0-2.6.5v-.3c-.2-1.7.1-2.8.9-3.3M3.7 12c0-.9 1-1.8 2.7-2.5l.8 2.5l-.8 2.5C4.7 13.8 3.7 13 3.7 12M8 19.4c-.8-.5-1-1.6-1-3.3l.1-.3c.9.3 1.7.4 2.6.5c.5.7 1.1 1.4 1.8 2c-1.5 1.1-2.8 1.5-3.5 1Zm3-3a20.3 20.3 0 0 0 2.4 0l-1.2 1.3l-1.1-1.2Zm5.5 3c-.8.4-2.1 0-3.5-1l1.7-2c.9-.2 1.8-.3 2.6-.6v.3c.2 1.7-.1 2.8-.8 3.3m1.6-4.9c-.2-.9-.5-1.7-.9-2.5c.4-.8.7-1.6.9-2.5c1.6.7 2.6 1.6 2.6 2.5c0 .9-1 1.8-2.6 2.5" />
                  <path d="M12.2 13.8a1.8 1.8 0 1 0-1.8-1.8a1.8 1.8 0 0 0 1.8 1.8" />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold ">React</h3>
                <p className="text-sm text-muted-foreground">
                  コンポーネントを利用したウェブサイト作成
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold ">Tailwindcss</h3>
                <p className="text-sm text-muted-foreground">
                  柔軟なレスポンシブ対応のできるtailwindcssを使用
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold ">Supabase</h3>
                <p className="text-sm text-muted-foreground">
                  データベースとしてsupabaseを利用
                </p>
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
                viewBox="0 0 50 50"
              >
                <path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold ">Typescript</h3>
                <p className="text-sm text-muted-foreground">
                  TypeScriptを用いた開発でバグの無いウェブサイトへ
                </p>
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
                viewBox="0 0 32 32"
              >
                <path d="M 16.515625 4 C 10.735625 4 7 7.1135938 7 11.933594 C 7 16.706594 11.288953 18.129313 14.126953 19.070312 C 15.402953 19.493313 16.989 20.018109 17 20.537109 C 16.992 20.938109 16.042562 21 15.476562 21 C 13.590563 21 10.698359 20.220516 8.4433594 19.103516 L 7 18.388672 L 7 26.185547 L 7.6113281 26.441406 C 9.9583281 27.427406 12.707297 27.995 15.154297 28 C 21.319297 28 25 25.158391 25 20.400391 C 25 15.208391 20.591781 13.797281 17.675781 12.863281 C 16.609781 12.521281 15 12.005219 15 11.574219 C 15 11.345219 15.000469 11 16.230469 11 C 18.079469 11 20.652281 11.765375 22.488281 12.859375 L 24 13.761719 L 24 5.546875 L 23.363281 5.2988281 C 21.207281 4.4608281 18.776625 4 16.515625 4 z M 16.515625 6 C 18.314625 6 20.237 6.3276875 22 6.9296875 L 22 10.361328 C 20.114 9.5223281 17.953469 9 16.230469 9 C 13.315469 9 13 10.800219 13 11.574219 C 13 13.465219 14.975406 14.098578 17.066406 14.767578 C 20.541406 15.880578 23 16.934391 23 20.400391 C 23 25.453391 17.51325 26 15.15625 26 C 13.17525 25.996 10.967 25.576797 9 24.841797 L 9 21.537109 C 10.993 22.334109 13.465563 23 15.476562 23 C 18.530563 23 18.997 21.465969 19 20.542969 L 19 20.537109 L 19 20.53125 C 18.992 18.57525 16.934859 17.893875 14.755859 17.171875 C 11.385859 16.053875 9 15.024594 9 11.933594 C 9 8.2725937 11.879625 6 16.515625 6 z"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold ">Stripe</h3>
                <p className="text-sm text-muted-foreground">
                  決済方法としてStripeを導入
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
