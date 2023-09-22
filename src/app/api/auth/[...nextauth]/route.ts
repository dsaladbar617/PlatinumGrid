import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "6984088107-b74m2a42votop2kk4hrhfosri34r10d3.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});

export { handler as GET, handler as POST };

// import { clientPromise } from "@/db/db";
// import sheets from "@/db/schemas/sheets";
// import { Account, Profile, User } from "next-auth";
// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";

// if (!process.env.GOOGLE_CLIENT_ID) {
//   throw new Error("GOOGLE_CLIENT_ID is not defined");
// }
// if (!process.env.GOOGLE_CLIENT_SECRET) {
//   throw new Error("GOOGLE_CLIENT_SECRET is not defined");
// }

// const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   // callbacks: {
//   //   async signIn({ user, account }: { user: User; account: Account }) {
//   //     if (account.provider === "google") {
//   //       const { name, email } = user;
//   //       try {
//   //         await connection();
//   //         const userExists = await sheets.findOne({ email });

//   //         if (!userExists) {
//   //           const res = await fetch("http://localhost:3000/api/user", {
//   //             method: "POST",
//   //             headers: {
//   //               "Content-Type": "application/json",
//   //             },
//   //             body: JSON.stringify({
//   //               name,
//   //               email,
//   //             }),
//   //           });

//   //           if (res.ok) {
//   //             return user;
//   //           }
//   //         }
//   //       } catch (error) {
//   //         console.log(error);
//   //       }
//   //     }

//   //     return user;
//   //   },
//   // },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
