import { useEffect, useState } from "react";
import { account } from "../lib/appwrite";

type User = {
  name: string;
  email: string;
  photo?: string;
};

export const useUser = (): { user: User | null } => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const session = await account.getSession("current");
        if (!session) return;

        const userData = await account.get();
        const name = userData.name || "Usuario";
        const email = userData.email || "correo@example.com";
        const labels = userData.labels || [];
        let avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`;

        if (userData.prefs?.picture) {
          avatar = userData.prefs.picture;
        } else if (labels.some((l: string) => l.toLowerCase().includes("github"))) {
          avatar = `https://unavatar.io/github/${email.split("@")[0]}`;
        } else if (labels.some((l: string) => l.toLowerCase().includes("google"))) {
          avatar = `https://unavatar.io/google/${email}`;
        }

        setUser({ name, email, photo: avatar });
      } catch {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return { user };
};
