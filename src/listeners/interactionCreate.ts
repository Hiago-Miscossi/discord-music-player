import { CommandInteraction, Client, Interaction } from "discord.js";
import commands from "src/commands";
import DiscordPlayer from "src/player";

export default (client: Client, player: DiscordPlayer): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, player, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  player: DiscordPlayer,
  interaction: CommandInteraction
): Promise<void> => {
  const slashCommand = commands.find(
    (command) => command.name === interaction.commandName
  );

  if (!slashCommand) {
    interaction.followUp({ content: "An error has occurred" });
    return;
  }

  await interaction.deferReply();

  slashCommand.run(interaction, { client, player });
};
