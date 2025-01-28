import { Button } from "@/components/ui/button";
import Link from "next/link";
import classes from "./not-found.module.css";
import image from "@/assets/not-found/not-found.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={classes["not-found"]}>
      <h1>404 такой вещи тут нету иди в другом месте ищи</h1>
      <Image src={image} alt="not-found" />
      <p>
        <Link href="/">
          <Button>Go back to the main page</Button>
        </Link>
      </p>
    </div>
  );
}
