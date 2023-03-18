import { useMasterPlayer, useQueue } from "discord-player";
import logger from "src/logger";

export const PauseCommand: Command = {
  name: "pause",
  description: "Descrever comando pause",
  run: async (interaction) => {
    const queue = useQueue(interaction.guildId!)

    if (!queue) {
      interaction.followUp(`I'm sorry, but no found queue`);
      return;
    }

    queue.node.setPaused(!queue.node.isPaused())

    await interaction.followUp({
      ephemeral: true,
      content: 'Sua musica foi pausada!',
    });
  },
};

export default PauseCommand;
