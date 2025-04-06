import { headers } from "next/headers";
import { auth } from "@/lib/auth"; // path to your auth file

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <>
      {session ? (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1>Welcome {session.user.name}</h1>
          <p>{session.user.email}</p>
          <p>{session.user.image}</p>
        </div>
      ) : (
        <div>
          <h1>Welcome to the app</h1>
          <p>Please sign in</p>
          <a
            href="/signin"
            className="py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            Sign in
          </a>
        </div>
      )}
    </>
  );
}
