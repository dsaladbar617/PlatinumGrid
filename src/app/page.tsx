import Login from "@/components/Login";
import { clientPromise } from "@/db/db";

export default async function Home() {
  let isConnected = false;
  // let db = await clientPromise;

  try {
    await clientPromise;
    isConnected = true;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex flex-col">
      <h1>Login Website</h1>
      <Login />
      {isConnected ? "database is connected" : "database is not connected"}
    </div>
  );
}
