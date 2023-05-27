import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '53eb5935161ca73f679e7548aac6f807dbad930e', queries });
export default client;
  