"use client";

import Link from "next/link";

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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema, TFormRegisterValues } from "../schema";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to sign up");
      }

      router.push("/auth/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Sign up</CardTitle>
            <CardDescription>
              Choose your preferred sign up method
              <div className="flex flex-col items-center space-y-4 mt-5">
                {/* Auth Buttons */}
                <div className="flex w-full space-x-4">
                  <Button className="flex items-center justify-center w-1/2 border bg-transparent text-white font-semibold hover:text-black ">
                    <FaGoogle /> Google
                  </Button>
                  <Button className="flex items-center justify-center w-1/2 border bg-transparent text-white font-semibold hover:text-black ">
                    <FaGithub /> Github
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
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="fullname">Name</Label>
                  <Input
                    id="fullname"
                    {...register("fullName")}
                    placeholder="Enter your fullname"
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    {...register("email")}
                    placeholder="example@gmail.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    {...register("password")}
                    type="password"
                    placeholder="**********"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    {...register("confirmPassword")}
                    type="password"
                    placeholder="**********"
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
              </div>
              <Button className="w-full mb-5 mt-8" type="submit">
                Continue
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col ">
            <div className="w-full flex justify-between text-sm">
              <div className="flex space-x-2">
                <span>Already have an account?</span>
                <Link className="font-semibold" href="/auth/signin">
                  Sign in
                </Link>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://skateshop.sadmn.com/images/auth-layout.webp')`,
          }}
        ></div>

        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))`,
          }}
        ></div>
      </div>
    </div>
  );
}
