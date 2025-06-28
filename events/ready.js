const config = require("../config.js");
const { ActivityType } = require("discord.js");

module.exports = async (client) => {
    const { REST } = require("@discordjs/rest");
    const { Routes } = require("discord-api-types/v10");
    const rest = new REST({ version: "10" }).setToken(config.TOKEN || process.env.TOKEN);

    (async () => {
        try {
            await rest.put(Routes.applicationCommands(client.user.id), {
                body: await client.commands,
            });
            console.log("✅ Lệnh đã được tải thành công");
        } catch (err) {
            console.error("❌ Không tải được lệnh:", err.message);
        }
    })();

    const defaultActivity = {
        name: config.activityName,
        type: ActivityType[config.activityType.toUpperCase()]
    };

    async function updateStatus() {
 
        const activePlayers = Array.from(client.riffy.players.values()).filter(player => player.playing);

        if (!activePlayers.length) {
            //console.log("⏹️ Hiện không có bài hát nào đang phát. Đang thiết lập trạng thái mặc định.");
            client.user.setActivity(defaultActivity);
            return;
        }

        const player = activePlayers[0];

        if (!player.current || !player.current.info || !player.current.info.title) {
            //console.log("⚠️ Thông tin về bản nhạc hiện tại bị thiếu. Giữ nguyên trạng thái mặc định.");
            return;
        }

        const trackName = player.current.info.title;
        //console.log(`🎵 Now Playing: ${trackName}`);

        client.user.setActivity({
            name: `🎸 ${trackName}`,
            type: ActivityType.Playing
        });
    }

    setInterval(updateStatus, 5000);

    client.errorLog = config.errorLog;
};
