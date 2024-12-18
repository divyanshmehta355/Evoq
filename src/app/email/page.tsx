"use client";
import { useState, useEffect } from "react";
import { account, databases } from "@/lib/appwrite";

interface AppwriteUser {
  $id: string;
  name: string;
  email: string;
}

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState<AppwriteUser | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [contactData, setContactData] = useState<ContactData[]>([]);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await account.get<AppwriteUser>();
        setLoggedInUser(user);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching contact data:", error.message);
        } else {
          console.error("Error fetching contact data:", error);
        }
      }
    };
    checkSession();
  }, []);

  useEffect(() => {
    const fetchContactData = async () => {
      if (loggedInUser) {
        try {
          const response = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID!
          );

          const contacts = response.documents.map((doc) => ({
            name: doc.name,
            email: doc.email,
            phone: doc.phone,
            message: doc.message,
          })) as ContactData[];

          setContactData(contacts);
        } catch (error) {
          console.error("Error fetching contact data:", error);
        }
      }
    };
    fetchContactData();
  }, [loggedInUser]);

  const login = async () => {
    try {
      if (!loggedInUser) {
        await account.createEmailPasswordSession(email, password);
        const user = await account.get<AppwriteUser>();
        setLoggedInUser(user);
        setError(null);
      } else {
        console.log("User already logged in");
      }
    } catch (error) {
      setError("Login failed");
      console.error("Login error:", error);
    }
  };

  // TODO: Delete automatically cookies/sessions when the state of page is Idle(Inactive).
  const logout = async () => {
    try {
      await account.deleteSession("current");
      setLoggedInUser(null);
      setContactData([]);
      setError(null);
    } catch (error) {
      setError("Logout failed");
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {loggedInUser ? (
        <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Contact Data</h1>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={logout}
            >
              Logout
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2">Name</th>
                  <th className="py-2 px-4 border-b-2">Email</th>
                  <th className="py-2 px-4 border-b-2">Phone</th>
                  <th className="py-2 px-4 border-b-2">Message</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((contact, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-2 px-4 border-b">{contact.name}</td>
                    <td className="py-2 px-4 border-b">{contact.email}</td>
                    <td className="py-2 px-4 border-b">{contact.phone}</td>
                    <td className="py-2 px-4 border-b">{contact.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={login}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default LoginPage;
