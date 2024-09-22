import * as sdk from 'node-appwrite';


// Dangerously exposing environment variables to the client
// TODO: Rewrite to remove all appwrite related code and replace with a different backend

// environment variables are not working.
// TODO: rewrite the code to avoid using environment variables as this
// code is being exposed to the client.
export const PROJECT_ID="66f0546a001b08ce08cd";
export const API_KEY="standard_6115c7812b06a909cda17c39555e8635f0f2e945235597bd874fbcd57592d5a9726a55526894db820611f6baf74bdacb1df25dc0e6be6ffa1fd7180ae044b81bffcf38ba12a5152f09a575fbf08b929fa10d2cf7d723fc30192f737659d72238063bc0acef1cda05a712c144c7caf44df5c4bd95daa101f868c07ecbc68a7aae";
export const DATABASE_ID="66f055050029b0d2d12a";
export const PATIENT_COLLECTION_ID="66f0552f00104dac6fe0";
export const DOCTOR_COLLECTION_ID="66f0554e001066c04d15";
export const APPOINTMENT_COLLECTION_ID="66f055750016bf06cd9c";
export const HEALTHCARE_BUCKET_ID="66f0559a000d9665eff1";
export const HEALTHCARE_PUBLIC_ENDPOINT="https://cloud.appwrite.io/v1";

// Initialize the AppWrite SDK client.
const client = new sdk.Client();

// Set the AppWrite endpoint.
client
  .setEndpoint(HEALTHCARE_PUBLIC_ENDPOINT!)
  .setProject(PROJECT_ID!)
  .setKey(API_KEY!);

// Export the DB, Storage, messaging, users.
export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);