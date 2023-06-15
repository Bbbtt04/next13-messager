"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import {useCallback, useState, forwardRef, useEffect} from "react";
import {FieldValue, FieldValues, SubmitHandler, useForm} from "react-hook-form";

import axios from "axios";
import {signIn, useSession} from 'next-auth/react'
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if(session?.status === 'unauthenticated') {
            router.push("/users");
        }
    },[session?.status,router])

    const toggleVariant = useCallback(() => {
        setVariant((variant) => {
            return variant === "LOGIN" ? "REGISTER" : "LOGIN";
        })
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        setIsLoading(true);

        if (variant === "REGISTER") {
            axios.post("/api/register", data)
                .then((cb: any) => {
                    if (cb?.status === 200) {
                        toast.success("注册成功！")
                        router.push("/users")
                    } else if(cb?.ok) {
                        toast.error("注册失败！")
                    }
                }).catch((err) => {
                    toast.error('Something went wrong!')
                })
                .finally(() => setIsLoading(false))
        }

        if (variant === "LOGIN") {
            signIn('credentials', {
                ...data,
                redirect: false,
            })
                .then((cb) => {
                    console.log(cb)
                    if (cb?.error) {
                        toast.error("登录失败！邮箱或密码错误！");
                    } else if (cb?.ok) {
                        toast.success("登录成功！")
                        router.push("/users")
                    }
                })
                .finally(() => setIsLoading(false))
        }
    }

    return (
        <div
            className="
        mt-8
        sm:mx-auto sm:w-full sm:max-w-md
      "
        >
            <div
                className="
          bg-white
          py-8
          px-4
          shadow
          rounded-lg
          sm:px-10
        "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    {variant === "REGISTER" && (
                        <Input
                            id="name"
                            type="text"
                            label="用户名"
                            required
                            errors={errors}
                            register={register}
                            disabled={isLoading}
                        />
                    )}
                    <Input
                        id="email"
                        type="email"
                        label="邮箱"
                        required
                        errors={errors}
                        register={register}
                        disabled={isLoading}
                    />
                    <Input
                        id="password"
                        type="password"
                        label="密码"
                        required
                        errors={errors}
                        register={register}
                        disabled={isLoading}
                    />
                    <div className="mt-3">
                        <Button
                            type="submit"
                            fullWidth
                            disabled={isLoading}
                        >
                            {variant === "LOGIN" ? "登录" : "注册"}
                        </Button>
                    </div>
                </form>

                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0">
                            <div className="w-full border-t border-gray-300"/>
                        </div>
                    </div>
                    <div
                        className="
              relative
              flex
              justify-center
            "
                    >
            <span className="
              bg-white
              px-4
              text-gary-500
              absolute
              top-[calc(-0.5rem-1px)]
            ">
              <button onClick={toggleVariant}>
                {variant === "LOGIN" ? "没有账号？注册" : "已有账号？登录"}
              </button>
            </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm;
