import { QueryType, QueueRepeatMode } from "discord-player";
import { ApplicationCommandOptionType, GuildMember } from "discord.js";
import logger from "src/logger";

export const PlayCommand: Command = {
  name: "play",
  description: "Descrever comando play",
  options: [
    {
      name: "query",
      description: "Busca a musica",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  run: async (interaction, { player, client }) => {
    try {
      const query = interaction.options.get("query", true).value as string;
      // const permissions = this.container.client.perms.voice(interaction, this.container.client);
      // if (permissions.member()) return interaction.reply({ content: permissions.member(), ephemeral: true });
      // if (permissions.client()) return interaction.reply({ content: permissions.client(), ephemeral: true });
  
      await client.channels.fetch(interaction.channelId);

      const resultSearch = await player.search(query, {
        requestedBy: interaction.user,
        searchEngine: QueryType.AUTO
      });

      if (!resultSearch.hasTracks()) {
        interaction.followUp(`I'm sorry, but  found music`);
        return
      }
  
      const { track, queue } = await player.play(interaction.channelId, resultSearch, {
        nodeOptions: {
          metadata: interaction,
          leaveOnEmptyCooldown: 300000,
          leaveOnEmpty: true,
          leaveOnEnd: false,
          bufferingTimeout: 0,
					volume: 10,
          defaultFFmpegFilters: ['lofi', 'bassboost', 'normalizer']
        },
      });

      queue.setRepeatMode(QueueRepeatMode.AUTOPLAY);

      interaction.followUp(`**${track.title}** (${track.duration}) enqueued!`);

      return;
    } catch (error) {
      interaction.followUp(`Something went wrong: ${error}`);
      return;
    }
  },
};

export default PlayCommand;
