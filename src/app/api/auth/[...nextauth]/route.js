
import dbConnect, { collectionsName } from "@/lib/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      try {
        const usersCollection = await dbConnect(collectionsName.usersCollection);
        const isExist = await usersCollection.findOne({ email: user.email });

        if (!isExist) {
          await usersCollection.insertOne({
            name: user.name,
            email: user.email,
            image: user.image,
            role: "user", 
            createdAt: new Date(),
          });
        }
        return true;
      } catch (error) {
        console.error("Error saving user to DB:", error);
        return false;
      }
    },

    async session({ session }) {
      try {
        const usersCollection = await dbConnect(collectionsName.usersCollection);
        const dbUser = await usersCollection.findOne({ email: session.user.email });
        
        if (dbUser) {
          session.user.role = dbUser.role || "user";
        } else {
          session.user.role = "user";
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        session.user.role = "user";
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };