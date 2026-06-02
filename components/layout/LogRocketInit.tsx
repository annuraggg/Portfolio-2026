"use client";

import { useEffect } from "react";
import LogRocket from "logrocket";

export default function LogRocketInit() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_LOGROCKET_ID;

    if (!appId) return;

    LogRocket.init(appId);
    LogRocket.identify(
      Math.random().toString(36).substring(2) + Date.now().toString(36)
    );
  }, []);

  return null;
}
