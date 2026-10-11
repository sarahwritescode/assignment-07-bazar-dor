import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.BETTER_AUTH_MONGODB_URI as string);
const db = client.db("bazardor"); // আপনার ডাটাবেসের নাম এখানে দিন

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },


  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    },
    github: {
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    }

  },
  database: mongodbAdapter(db, {
    client,
  }),
});