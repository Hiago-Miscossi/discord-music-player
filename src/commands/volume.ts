import { useQueue } from "discord-player";
import { ApplicationCommandOptionType } from "discord.js";

export const VolumeCommand: Command = {
  name: "volume",
  description: "Descrever comando volume",
  options: [
    {
      name: "volume",
      description: "Defina o volume",
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
  ],
  run: async (interaction) => {
    const volume = interaction.options.get("volume", true).value as number;

    const queue = useQueue(interaction.guildId!)

    if (!queue) {
      interaction.followUp(`I'm sorry, but no found queue`);
      return;
    }

    queue.node.setVolume(volume)

    await interaction.followUp({
      ephemeral: true,
      content: `Seu volume foi alterado para ${volume}`,
    });
  },
};

export default VolumeCommand;
