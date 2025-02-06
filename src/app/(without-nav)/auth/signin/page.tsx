"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, TFormLoginValues } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignIn() {
  const router = useRouter();
  // const { data: session } = useSession();

  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (resp?.ok) {
        router.push("/");
      } else {
        form.setError("root", { message: "Invalid credentials" });
      }
    } catch (err) {
      console.error(err);

      form.setError("root", { message: "Something went wrong" });
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="w-[450px]">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Sign In
                </CardTitle>
                <CardDescription>
                  Choose your preferred sign in method
                  <div className="flex flex-col items-center space-y-4 mt-5">
                    <div className="flex w-full space-x-4">
                      <Button className="flex items-center justify-center w-1/2 border bg-transparent text-white font-semibold hover:text-black">
                        <FaGoogle /> Google
                      </Button>
                      <Button
                        onClick={() => signIn("github", { callbackUrl: "/" })}
                        className="flex items-center justify-center w-1/2 border bg-transparent text-white font-semibold hover:text-black"
                      >
                        <FaGithub /> GitHub
                      </Button>
                    </div>
                    <div className="flex items-center w-full">
                      <hr className="flex-1 border-gray-600" />
                      <span className="mx-4 text-xs text-gray-400">
                        OR CONTINUE WITH
                      </span>
                      <hr className="flex-1 border-gray-600" />
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      {...form.register("email")}
                      placeholder="example@gmail.com"
                    />
                    {form.formState.errors.email && (
                      <span className="text-red-500 text-sm">
                        {form.formState.errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      {...form.register("password")}
                      type="password"
                      placeholder="**********"
                    />
                    {form.formState.errors.password && (
                      <span className="text-red-500 text-sm">
                        {form.formState.errors.password.message}
                      </span>
                    )}
                  </div>
                  {form.formState.errors.root && (
                    <span className="text-red-500 text-sm">
                      {form.formState.errors.root.message}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button
                  className="w-full mb-5"
                  type="submit"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
                <div className="w-full flex justify-between text-sm">
                  <div className="flex space-x-2">
                    <span>Don&apos;t have an account? </span>
                    <Link className="font-semibold" href="/auth/signup">
                      Sign up
                    </Link>
                  </div>
                  <Link
                    href="/auth/reset-password"
                    className="text-sm font-semibold"
                  >
                    Reset Password
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </form>
        </FormProvider>
      </div>
      <div className="w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://skateshop.sadmn.com/images/auth-layout.webp')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))`,
          }}
        />
      </div>
    </div>
  );
}
