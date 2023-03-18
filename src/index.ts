import { Client } from "discord.js";

import config from "./config";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
import logger from "./logger";
import DiscordPlayer from "./player";

logger.info("Bot is starting...");

const client = new Client({
  intents: ['GuildVoiceStates'],
});
const discordPlayer = new DiscordPlayer(client);

ready(client);
interactionCreate(client, discordPlayer);

client.login(config.TOKEN);
