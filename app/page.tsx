"use client";

import { useRouter } from "next/navigation";
import { HeroSection } from "../components/main/hero";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const router = useRouter();
  const { user, signOut } = useAuth();

  return (
    <main>
      <HeroSection
        title="Create Stunning YouTube Thumbnails"
        highlightText="with AI"
        description="Nailist generates eye-catching, high-converting thumbnails in seconds. Boost your views and grow your channel effortlessly."
        buttonText={user ? "Sign Out" : "Get Started"}
        onButtonClick={user ? () => signOut() : () => router.push("/auth")}
      />
    </main>
  );
}