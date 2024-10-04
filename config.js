//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "919064560840";
global.owner = process.env.OWNER_NUMBER || "919064560840";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT05tVVJRUVc5OTROc01iM1I4NVo2RjQwQzFpa2lIdUVwMHlyMmxJNlYyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTStqVmd2YTVHTHJLTkszTXlkMW9KZGdHeHlBdFJGYXZXVWVjbXpSU1pXcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRGMweW95Rml2cy84VnRHOUlMSWdNNERtYTBadXUrUDFSTkdIVnhCZkhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIydDJuYUhDaENZZ2dCTjF4SnptL2owYW1mdzRtbjk0dnpSdXRxQ3JyOGs4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNQTAwem9EazV2dS9yOWJpaWVWY1VtVHVLa2tTNisyeVZTeG5ERi8wV3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYxaXB3MGxiZnhmTktjOGUyTjNPMU5mWXMyUmREK0RxY2lOU2pETGk0bVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dLSTdjSW1GZyt2dUMrZEdBUXRTSkpMS3VlVVhoMktmR3R5VTJnNTlYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidERJV2FZTDZsVjJNbzVVUVVUbHV6c0hnc1Nzb3pvbHQ3aWxXa2xsUGJUOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQrdHJxb0c4N0Y5UUVlMksrMUtkVGdtd2xtMGVDaU1LMFF4Nnh2VVpMQlI2V3ZDN1JBU0N1UFJjckw3NkM4UUtPeTcrNzQreGlQblFWTVhQazJOdENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6ImNPMnZvSVdmY2QxNjVtNVBBYjFDRC9pV1R4K05TUVZEMmNxTXNKZ00vT2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5MDY0NTYwODQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjREMDRFNzI5NkZGREZERURDMUE2OEFFMDk3N0I5MkM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjgwNzUzNTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRlTUJ2NDBDUmVLOFpDSDVtSWhYY3ciLCJwaG9uZUlkIjoiOTAxODI0YWEtNjRhMC00ODE2LWFlODYtZGFhZjUwMjdmMThmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDNFNOUUhKRTF4MzBtSmJiTXNCcXR4MGVXZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4eXNKRS9DblcyWGpNQVlOUTZXZStNQ01yYlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUJDTUxIRkMiLCJtZSI6eyJpZCI6IjkxOTA2NDU2MDg0MDoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwkIyA04TqjY/guKPKnOKGpuKGpuKGpuKGpuKGpiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFRKaEtFRUVNYXNnYmdHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNkM2cEIvbFQxYVdrZk9yVVRFYi9OSlVkSUU1UG9LbWVQZjE5bWVMbTl4QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ3NFUjNzSGNuZkFIMWpsdTNnYkFmUlNDSkQ1VjI0QVRIbnhlbUFLNzdESzNPcmhOVFFnWGg2bjJURXhaWW1UV09CSUhUSXR5Y21KbVlQSXNVVGowQWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImwxWUNLK2VhUzliUTJQTjl6QUZOaFN5bHNIR2YyMHovb1Rqcm14WlR3S1FQMWtJTDgvUDRnWUhDRUlWRnJUbHlsaURWVmhHek04eFpsd2x5TW5UVkNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5MDY0NTYwODQwOjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVndXFRZjVVOVdscEh6cTFFeEcvelNWSFNCT1Q2Q3BuajM5ZlpuaTV2Y1EifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgwNzUzNDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXNyIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`A K A S H-V2™`",
  author: process.env.PACK_AUTHER || "A K A S H-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "A K A S H-V2",
  ownername: process.env.OWNER_NAME || "A K A S H",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
