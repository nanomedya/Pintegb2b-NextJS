"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const token = typeof window !== "undefined" && localStorage.getItem("token");
        const protectedPaths = [
            "/auth",
            "/auth/login",
            "/auth/register",
            "/auth/forgot-password",
        ];

        if (token) {
            router.push("/pages/home");
        } else {
            const currentPath = window.location.pathname;
            if (!protectedPaths.includes(currentPath)) {
                router.push("/");
            }
        }
    }, [router]);

    return children;
};

export default ProtectedRoute;
