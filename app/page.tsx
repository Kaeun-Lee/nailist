"use client";

import { useRouter } from "next/navigation";
import { HeroSection } from "../components/main/hero";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <HeroSection
        title="Create Stunning YouTube Thumbnails"
        highlightText="with AI"
        description="Nailist generates eye-catching, high-converting thumbnails in seconds. Boost your views and grow your channel effortlessly."
        buttonText="Get Started"
        onButtonClick={() => router.push("/auth")}
      />
    </main>
  );
}