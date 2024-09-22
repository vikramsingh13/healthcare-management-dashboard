import * as sdk from 'node-appwrite';


// Dangerously exposing environment variables to the client
// TODO: Rewrite to remove all appwrite related code and replace with a different backend

export const {
  PROJECT_ID, API_KEY, DATABASE_ID, PATIENT_COLLECTION_ID, DOCTOR_COLLECTION_ID, APPOINTMENT_COLLECTION_ID, 
  HEALTHCARE_BUCKET_ID: BUCKET_ID,
  HEALTHCARE_PUBLIC_ENDPOINT: ENDPOINT
} = process.env;

// Initialize the AppWrite SDK client.
const clietn = new sdk.Client();

// Set the AppWrite endpoint.
client
  .setEndpoint(ENDPOINT!)
  .setProject(PROJECT_ID!)
  .setKey(API_KEY!);

// Export the DB, Storage, messaging, users.
export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);