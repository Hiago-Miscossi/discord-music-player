import { useQueue } from "discord-player";

export const ResumeCommand: Command = {
  name: "resume",
  description: "Descrever comando resume",
  run: async (interaction) => {
    const queue = useQueue(interaction.guildId!)

    if (!queue) {
      interaction.followUp(`I'm sorry, but no found queue`);
      return;
    }

    queue.node.resume()

    await interaction.followUp({
      ephemeral: true,
      content: 'Musica retornada!',
    });
  },
};

export default ResumeCommand;
