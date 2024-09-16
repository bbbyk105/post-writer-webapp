import Link from "next/link";

export default function IndexPage() {
  return (
    <>
    <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 ">
          <Link href={"/"}>Xをフォローする</Link>
          <h1>Post Writer</h1>
          <p>
            このアプリケーションはNext.js
            AppRouterで作成されたものです。ユーザーは自由にポストを作成することができます。
          </p>
        </div>
    </section>
    </>
  );
}
