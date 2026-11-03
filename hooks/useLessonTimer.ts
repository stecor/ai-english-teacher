"use client";

import { useRef, useCallback } from "react";

export function useLessonTimer() {
  const lessonStartRef = useRef<number | null>(null);

  const startLessonTimer = useCallback(() => {
    if (lessonStartRef.current !== null) return;

    lessonStartRef.current = Date.now();

    console.log("Timer started:", lessonStartRef.current);
  }, []);

  const stopLessonTimer = useCallback(() => {
    if (lessonStartRef.current === null) {
      return 0;
    }

    const seconds = Math.floor(
      (Date.now() - lessonStartRef.current) / 1000
    );

    lessonStartRef.current = null;

    console.log("Total seconds:", seconds);

    return seconds;
  }, []);

  return { startLessonTimer, stopLessonTimer };
}