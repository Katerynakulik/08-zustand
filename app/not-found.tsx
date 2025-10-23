"use client";

import css from "./Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "Page not found. Return to NoteHub and keep your notes organized.",
  openGraph: {
    title: "Page not found",
    description:
      "Page not found. Return to NoteHub and keep your notes organized.",
    url: "https://08-zustand-nine-eta.vercel.app/404",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub image",
      },
    ],
  },
};

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
