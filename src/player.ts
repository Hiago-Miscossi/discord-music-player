import { Player } from "discord-player";
import { Client } from "discord.js";

export default class DiscordPlayer extends Player {
  static init(client: Client) {
    return new DiscordPlayer(client)
  }
}