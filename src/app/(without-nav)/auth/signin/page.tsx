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
import { useSession, signIn } from "next-auth/react";

import { FaGithub, FaGoogle } from "react-icons/fa";

import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, TFormLoginValues } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session, 99999);

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
        form.setError("root", { message: "Invalid user data" });
      }
    } catch (error) {
      console.error(error);

      form.setError("root", { message: "Something wrong" });
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
                  Sign in
                </CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                  <div>...</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="example@gmail.com"
                      {...form.register("email")}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="********"
                      {...form.register("password")}
                    />
                  </div>
                </div>
                <CardDescription>
                  Choose your preferred sign in method
                  <div className="flex flex-col items-center space-y-4 mt-5">
                    <div className="flex w-full space-x-4">
                      <Button className="flex items-center justify-center w-1/2 border bg-transparent text-white font-semibold hover:text-black ">
                        <FaGoogle /> Google
                      </Button>
                      <Button
                        onClick={() =>
                          signIn("github", {
                            callbackUrl: "/",
                            redirect: true,
                          })
                        }
                        className="flex items-center justify-center w-1/2 border bg-transparent text-white font-semibold hover:text-black "
                      >
                        <FaGithub /> GitHub
                      </Button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center w-full">
                      <hr className="flex-1 border-gray-600" />
                      <span className="mx-4 text-xs text-gray-400">
                        OR CONTINUE WITH
                      </span>
                      <hr className="flex-1 border-gray-600" />
                    </div>
                  </div>
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button className="w-full" type="submit">
                  Sign in
                </Button>
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
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to top, rbga(0,0,0,1.2),  rbga(0,0,0,0.8),  rbga(0,0,0,0.4))`,
          }}
        ></div>
      </div>
    </div>
  );
}
