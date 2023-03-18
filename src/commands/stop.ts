import { useQueue } from "discord-player";

export const StopCommand: Command = {
  name: "stop",
  description: "Descrever comando stop",
  run: async (interaction) => {
    const queue = useQueue(interaction.guildId!)

    if (!queue) {
      interaction.followUp(`I'm sorry, but no found queue`);
      return;
    }

    queue.delete();

    await interaction.followUp({
      ephemeral: true,
      content: 'Obrigado por nos escolher ❤️❤️❤️',
    });
  },
};

export default StopCommand;
