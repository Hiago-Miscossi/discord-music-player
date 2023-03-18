import {
  CommandInteraction,
  ChatInputApplicationCommandData,
  Client,
} from "discord.js";
import DiscordPlayer from "src/player";

declare global {
  type Options = {
    client: Client
    player: DiscordPlayer
  }

  interface Command extends ChatInputApplicationCommandData {
    run: (interaction: CommandInteraction, options: Options) => void;
  }
}
