import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const historyStack: string[] = [];

const restrictedPaths = ["/about", "/contact"];

export function useNavigationHistory() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    // Avoid pushing duplicates
    if (historyStack.length === 0 || historyStack[historyStack.length - 1] !== currentPath) {
      historyStack.push(currentPath);
    }
  }, [location]);

  const getPreviousAllowedPath = (): string | null => {
    // Remove the current page
    historyStack.pop();

    // Go backwards and remove restricted pages
    while (historyStack.length > 0) {
      const prev = historyStack.pop()!;
      if (!restrictedPaths.includes(prev)) {
        return prev;
      }
    }

    return null; // No valid path left
  };

  return { getPreviousAllowedPath };
}
