"use client";

import React, { useState, useEffect } from "react";
import { AnimeCursor } from "./components/AnimeCursor";
import Particle from "./components/Particle";
import { Spinner } from "./components/Spinner";
import { HomePage } from "./components/HomePage";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        < Spinner />;
      </div>

    )
  }

  return (
    <main>
      <HomePage />
    </main>
  );
}
