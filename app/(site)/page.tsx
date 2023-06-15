import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
    return (
        <div
            className="
        flex
        min-h-full
        flex-col
        items-center
        justify-center
        bg-gray-200
        py-12
        sm:px-6
        lg:px-8
      "
        >
            <div>
                <Image
                    src="/next.svg"
                    height="96"
                    width="96"
                    alt="Next.js Logo"
                    className="mx-auto w-auto"
                ></Image>
                <h2
                    className="
            mt-6
            text-center
            text-3xl
            font-bold
            tracking-widest
            text-gray-900
          "
                >
                    登录你的账号
                </h2>
            </div>
            <AuthForm></AuthForm>
        </div>
    )
}
