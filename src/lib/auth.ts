import NextAuth from "next-auth/next";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/db/db";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  ...
})