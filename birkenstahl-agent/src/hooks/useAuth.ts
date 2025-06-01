import { useEffect, useState } from "react";
import { account } from "../lib/appwrite";

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    account.get()
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false))
      .finally(() => setLoading(false));
  }, []);

  return { loading, authenticated };
}
