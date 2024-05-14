const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	async execute(interaction) {
        console.log()

        let statusRole = interaction.guild.roles.cache.find(role => role.name === "------------> | Status | <------------");
        let difficultyRole = interaction.guild.roles.cache.find(role => role.name === "-----------> | Difficulty| <-----------");

        let role = interaction.guild.roles.cache.find(role => role.name === "Newbie")

        let member = interaction.guild.members.cache.get(interaction.user.id);

        await member.roles.add(statusRole);
        await member.roles.add(difficultyRole);
        await member.roles.add(role);
	},
};
