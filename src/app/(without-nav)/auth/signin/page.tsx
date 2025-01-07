"use client";
// import * as React from "react"

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

export default function SignIn() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Sign in</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
              <div>...</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input id="name" placeholder="example@gmail.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Password</Label>
                  <Input id="name" type="password" placeholder="********" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-full">Sign in</Button>
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
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to top, rbga(0,0,0,1.2),  rbga(0,0,0,0.8),  rbga(0,0,0,0.4))`,
          }}
        ></div>
      </div>
    </div>
  );
}
