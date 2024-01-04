const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "923184474176"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Johannesburg,South Africa"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-g1y0.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg;
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/050f0df670be2112fe325.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,27767494368";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27767494368,27725693138,27684119963";

module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Daddy Ave",


  sessionName:process.env.SESSION_ID|| "SESSION_04_21_01_03_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FWbkFwVXphMXNNYzQ1cmhqeS94b1k0WjJ0Y1BHYzA2bjhEMFJDUTAzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazVGcENRZ2s4TkRRaGFwRXAxOW9TdmRFZFQ0SEZwaDlzUEt5aHlaai9WUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RkVGcTdQN0JFTkFoYWdNclZJU3N2NTZ3MnNXa3dDQkF2K0tjcmNZWDB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMeGU1a0xySXJhSkVsOEtEdy9HUkNpbXgvYVZ1Yy8vN3RxbndqamJ1R1EwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDS3kyMFFpL2FnWDN0VlpnRURqeXJLZWsydmlCRmxjQzhMVTQ5Tk9pMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InI5VVU0ZzVCa25PL2d2WGVFZlBXOFE4WndLZTF2OUFYM2JKaUJDS1hTWGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VhbzhyOFg4K2R1SXAvQ1RRTlFZY1hpUWJmc1c2UWg0a1dIUlFrL0NGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmZ1VFFrTFNibWtqdFR4dklqOG9laXpGSGYrZE1TOTBuY1JqcTRidWR5QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV0ZkZFR2dseWVwK1NxMFl1M25RaUZMOWFXSUMrOXBDMW1VWXVkT2E3OVZRTklKazU1cGw4N3h2UmlHU2M0M2JQcld3N1F0REEvMXdWWlVFTVdISGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJ0UVc2U1R2QUVuOHdTZDhNR0ZLRklKUlk1TUxPN0pyTFRROUZQK01IWFBVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjY1NTcyODg2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM3REMyQjQ0NjA3QzQ2NjZBRDUzQzg1Nzc1QUM4M0Y4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDQyNTU2NzF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjY1NTcyODg2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE4QkJCQzc0MUJDMkJCNjE4MTkwRTlGNTZFRjIxNURBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDQyNTU2NzJ9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjY3TlJvMjV4U3dxY0hwTUxnc1phbFEiLCJwaG9uZUlkIjoiZDRhZGY0MDMtZmQxMi00NmMxLTkwOWMtNjRhYzkxYmU4MGE2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDVnJBeUJoMWxuZ3ZPbHBJQjhmd3RCL2dxcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVGVJUWR1SHNVL0dWR3ZlUk1GVHI2SlVRQ2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkxCUkxTUjUiLCJtZSI6eyJpZCI6IjI3NjY1NTcyODg2OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQXZlJ3NCb3QifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t5ZnNhWURFTERCMDZ3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikt6ckFROUNJVVRSY0xWSHhSbFlwdE45UGRwTVlpQ2lidGRRbnZaQU9zbEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBzSDRlTE1keDVNU1Q4bDUyNDZyVnBRWXU0MVNld1RodlR6ODZNSUlJcE1ETGdwUGRoSTZJL1B1Nmd5MEp5NEFUNmY0MUFiU214VERiaDRoRjNSOEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLVFYyMFQ5YUhWYzNFUmY5YzZiTkFJQU95Y2k4dnJSTjZFcjJLd1BOUTNZZjRYQTcxN2tZWU04aHFnRVZrMVRKOTBDWGpzeW9kelIyRG1UY1Y0bEFoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjY1NTcyODg2OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3M2d0VQUWlGRTBYQzFSOFVaV0tiVGZUM2FUR0lnb203WFVKNzJRRHJKUiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNDI1NTY2NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHNnUifQ==",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "true",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "true",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "GOJO",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
