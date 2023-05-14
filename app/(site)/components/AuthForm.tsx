"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useCallback, useState } from "react";
import { FieldValue, FieldValues, SubmitHandler, set, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const toggleVariant = () => {
  //   if (variant === "LOGIN") {
  //     setVariant("REGISTER");
  //   } else {
  //     setVariant("LOGIN");
  //   }
  // }
  // 优化: useCallback 会缓存函数，避免每次渲染都创建新的函数
  const toggleVariant = useCallback(() => {
    setVariant((variant) => {
      return variant === "LOGIN" ? "REGISTER" : "LOGIN";
    })
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      password: ""
    }
  });
  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    setIsLoading(true);
    console.log(errors);
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
          <div className="mt-1">
            {variant === "REGISTER" && (
              <Input
                id="username"
                type="text"
                label="用户名"
                required
                errors={errors}
                register={register}
                disabled={isLoading}
                {...register("username", {
                  required: "请输入用户名",
                })}
              />
            )}
            <Input
              id="email"
              type="text"
              label="邮箱"
              required
              errors={errors}
              register={register}
              disabled={isLoading}
              {...register("email", {
                required: "请输入邮箱",
              })}
            />
            <Input
              id="password"
              type="password"
              label="密码"
              required
              errors={errors}
              register={register}
              disabled={isLoading}
              {...register("password", {
                required: "请输入密码",
              })}
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
          </div>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0">
              <div className="w-full border-t border-gray-300" />
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
              <button onClick={toggleVariant}>Or Register</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm;
