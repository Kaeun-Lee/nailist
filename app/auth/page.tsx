"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HeroSection } from "../../components/main/hero";
import { useAuth } from "../../contexts/AuthContext";

const BackIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
    </svg>
);

const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
        <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
        />
        <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
        />
        <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
        />
        <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
        />
    </svg>
);

export default function AuthPage() {
    const { user, signInWithGoogle, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            router.replace("/");
        }
    }, [user, loading, router]);

    const handleGoogleLogin = async () => {
        const { error } = await signInWithGoogle();
        if (error) {
            console.error("Error signing in with Google:", error.message);
        }
    };

    if (loading || user) return null;

    return (
        <main className="relative min-h-screen">
            <HeroSection>
                <div className="flex w-full min-h-screen items-stretch">
                    {/* Left - 3/5 */}
                    <div className="hidden md:flex md:w-3/5 relative">
                        <div className="absolute inset-0 bg-black/50" />

                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-10 lg:px-14 gap-14">
                            {/* YouTube Video */}
                            <div className="w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <iframe
                                    src="https://www.youtube.com/embed/QwHDiQpPGXk?autoplay=0&rel=0"
                                    title="Nailist Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>

                            {/* NAILIST Display Text */}
                            <h2 className="text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black text-white leading-none tracking-tighter uppercase">
                                NAILIST
                            </h2>
                        </div>
                    </div>

                    {/* Right - 2/5 */}
                    <div className="w-full md:w-2/5 relative flex items-center justify-center p-6">
                        <Link
                            href="/"
                            className="absolute top-5 left-5 z-50 flex items-center text-white/60 hover:text-white transition-colors text-sm bg-black/15 hover:bg-black/30 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md"
                        >
                            <BackIcon />
                            Home
                        </Link>
                        <div className="w-full max-w-xs lg:max-w-sm py-10 px-8 lg:py-12 lg:px-10 bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl text-center">
                            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                                Welcome back
                            </h1>
                            <p className="text-white/80 mb-8 leading-relaxed text-sm md:text-base">
                                Sign in to create amazing thumbnails
                            </p>
                            <button
                                onClick={handleGoogleLogin}
                                disabled={loading}
                                className="w-full flex items-center justify-center py-2.5 bg-neutral-200 text-black font-semibold rounded-xl hover:bg-neutral-300 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <GoogleIcon />
                                Continue with Google
                            </button>
                        </div>
                    </div>
                </div>
            </HeroSection>
        </main>
    );
}
