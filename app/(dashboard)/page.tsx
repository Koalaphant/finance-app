import { Button } from "@/components/ui/button";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SignOutButton redirectUrl="/"></SignOutButton>
    </div>
  );
}
