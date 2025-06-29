

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1048110276576288798", ""], 
  mongodbUri : "mongodb+srv://nopi:nopi@discordbot.ly6shka.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Nopi",
      password: "nopi",
      host: "194.102.181.219",
      port:  2581,
      secure: false
    }
  ]
}
