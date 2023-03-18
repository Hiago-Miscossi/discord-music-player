import DocsCommand from "./docs";
import GitCommand from "./git";
import PlayCommand from "./play";
import PauseCommand from "./pause";
import StopCommand from "./stop";
import ResumeCommand from "./resume";
import AddCommand from "./add";
import VolumeCommand from "./volume";
// COMPONENT IMPORTS

const commands: Command[] = [
  DocsCommand,
  GitCommand,
	PlayCommand,
	PauseCommand,
	StopCommand,
	ResumeCommand,
	AddCommand,
	VolumeCommand,
// COMPONENT EXPORTS
];

export default commands;
