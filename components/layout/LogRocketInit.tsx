"use client";

import { useEffect } from "react";

const runWhenIdle = (callback: () => void) => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => callback(), { timeout: 3000 });
    return;
  }

  setTimeout(callback, 1500);
};

export default function LogRocketInit() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_LOGROCKET_ID;

    if (!appId) return;

    runWhenIdle(() => {
      import("logrocket").then(({ default: LogRocket }) => {
        LogRocket.init(appId);
        LogRocket.identify(
          Math.random().toString(36).substring(2) + Date.now().toString(36)
        );
      });
    });
  }, []);

  return null;
}
