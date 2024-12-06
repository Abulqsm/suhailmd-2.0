const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349124079683";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_54_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICA4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDMsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk0LFxuICAgICAgICA2MixcbiAgICAgICAgODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICA5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjExLFxuICAgICAgICA1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCbzZUdmhQUzBuR2NLZmxBd1QyQUlTbGhUVGJJL3JZVVltS21YdnlZZGUwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvanBsNnExTFFvUzVKUzd1MDZib2xBXCIsXG4gIFwicGhvbmVJZFwiOiBcImYwMDg0Njg3LWE3N2UtNDhiMC05MmI4LTY2NjlkNzIxODgzY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAxMjYsXG4gICAgICA5MSxcbiAgICAgIDIzOSxcbiAgICAgIDc3LFxuICAgICAgMjMwLFxuICAgICAgMTI5LFxuICAgICAgMTkwLFxuICAgICAgMjEyLFxuICAgICAgMjMsXG4gICAgICAxODAsXG4gICAgICAxMTAsXG4gICAgICA2MCxcbiAgICAgIDEwNixcbiAgICAgIDkwLFxuICAgICAgMjUyLFxuICAgICAgMTUsXG4gICAgICA1NCxcbiAgICAgIDExNixcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDYsXG4gICAgICA5NyxcbiAgICAgIDI1MSxcbiAgICAgIDI0OSxcbiAgICAgIDE0LFxuICAgICAgMzksXG4gICAgICAxNjIsXG4gICAgICAxNzAsXG4gICAgICAxMTcsXG4gICAgICAxMDEsXG4gICAgICAxMzQsXG4gICAgICAxMDIsXG4gICAgICAxMjgsXG4gICAgICAxOTIsXG4gICAgICAxMTAsXG4gICAgICAyMDgsXG4gICAgICAyNTQsXG4gICAgICAzNSxcbiAgICAgIDE2MSxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDRlRZSkU1OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyNDA3OTY4Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWJ1bHFhc2ltIGRpZ2l0YWwgbWFya2V0ZXJcIixcbiAgICBcImxpZFwiOiBcIjkwODgyMDk1MjA2NDc4OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUx2MXNzRkVNUDN5cm9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwcFpsYXB6NUNMV1orT1lnejhLd1RDZDBiQkFNb3E0czhGMGVKU3JScVI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVKTU5GMzhDeVpSUmFDZzBDWmFldGVGazNiR2xEU21xYTlzbDhnVUxQaEtBTXRNOFZHUk5LWGVKUk9XRXdnMWZENTBqb1FRcEloU0UwMUZsemd0OUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInp2THVJRy9BSzRwdFo5ZlIzYnlSbVhTWjBxOEtTMEFlZzl1WERaV2I1UGFRZC9HQnRoWUtGR3QrdWMwM3NhemNaQ0pvejZ5Vzh5L21kR0czZVVYcWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjQwNzk2ODM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDc1MjcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjR1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGNHUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzV204T3dqaHQycTFLYW5jaVRCQjFqVkN3dzdoMXhOR29tUCtUcENIZVQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDA4ODY5MTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
