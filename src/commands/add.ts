import { QueryType, Track, useMasterPlayer, useQueue } from "discord-player";
import { ApplicationCommandOptionType } from "discord.js";
import logger from "src/logger";

export const AddCommand: Command = {
  name: "add",
  description: "Descrever comando add",
  options: [
    {
      name: "query",
      description: "Busca a musica",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  run: async (interaction, { player }) => {
    const query = interaction.options.get("query", true).value as string;
    const queue = useQueue(interaction.guildId!)

    if (!queue) {
      interaction.followUp(`I'm sorry, but no found queue or player`);
      return;
    }

    const { tracks } = await player.search(query, {
      requestedBy: interaction.user,
      searchEngine: QueryType.AUTO
    })

    logger.info(tracks)

    if (tracks.length === 0) {
      interaction.followUp(`I'm sorry, but  found music`);
      return
    }

    const [track] = tracks
    logger.info(`Is Tracks: ${typeof tracks}`)
    logger.info(`Is Track: ${typeof track}`)

    // queue.insertTrack(track as Track)

    await interaction.followUp({
      ephemeral: true,
      content: '',
    });
  },
};

export default AddCommand;
