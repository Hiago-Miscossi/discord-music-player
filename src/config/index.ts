import * as dotenv from "dotenv";
import * as z from "zod";

const envSchema = z.object({
  TOKEN: z.string().nonempty(),
  CLIENT_ID: z.string().nonempty(),
  GUILD_ID: z.string().nonempty(),
});

export default envSchema.parse(dotenv.config().parsed);
