import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication status (e.g., by checking a token in localStorage or calling an API)
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);

    if (!token) {
      router.push("/auth/login");
    }
  }, [router]);

  return { isAuthenticated };
};

export default useAuth;
