'use server';

// import the appwrite.config file variables
import { users } from "../appwrite.config";
// import functions from the node-appwrite SDK.
import { ID, Query } from "node-appwrite";
// Import the JSON parse stringify function from utils.ts
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParam) => {
  // We will try to create the user using the appwrite SDK.
  try {
    // We will try to create the user using the appwrite SDK.
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log("patient actions newUser", newUser);
    // Parse the newUser object and return the user.
    return parseStringify(newUser);

  } catch (error: any) {
    // Console log the error.
    console.log("lib/actions/patient.actions.ts: Error creating user", error);
    // If there is an error, we will check if the error code is 409.
    // If the error code is 409, we will check if the user already exists.
    if (error && error?.code === 409) {
      // We will list the users using the email address.
      // Query function is being imported from "node-appwrite".
      const documents = await user.list([Query.equal("email", [user.email])]);

      // Return the user document if the user already exists.
      return documents?.users[0];
    }
  }
};
