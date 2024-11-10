const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923121961473";




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

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_59_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTAwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQxLFxuICAgICAgICA1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgOTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICA3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI3LFxuICAgICAgICA5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM4LFxuICAgICAgICA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgwLFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICA4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOQUdaTDJEVDVVMDlHYXM5MmVmZ20xMGtBUDhGbk9ST3BjN3I3RmhZTGFVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnRjl6UmFvOVFhYTE1bU9VcVl0YTBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUzNGU3NTQ0LTk5ODktNDg5NS05NjVkLTM1YjA5YzA4NDU5NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxMTQsXG4gICAgICA5NSxcbiAgICAgIDUwLFxuICAgICAgNTUsXG4gICAgICA1MSxcbiAgICAgIDIwMSxcbiAgICAgIDc3LFxuICAgICAgNDUsXG4gICAgICAxNTksXG4gICAgICAyNTMsXG4gICAgICAxOSxcbiAgICAgIDE5NyxcbiAgICAgIDE4LFxuICAgICAgMTQ5LFxuICAgICAgMTAyLFxuICAgICAgNTQsXG4gICAgICA3OSxcbiAgICAgIDEzNCxcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgNTgsXG4gICAgICAyMDgsXG4gICAgICA4LFxuICAgICAgNTIsXG4gICAgICA1LFxuICAgICAgMzksXG4gICAgICAxMjAsXG4gICAgICA1OSxcbiAgICAgIDEyMCxcbiAgICAgIDE3LFxuICAgICAgMCxcbiAgICAgIDEwMCxcbiAgICAgIDI3LFxuICAgICAgMTcsXG4gICAgICA4NyxcbiAgICAgIDAsXG4gICAgICAyOSxcbiAgICAgIDM2LFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQUHhnOVFGRUpxRnhMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlM4b1VlUjNsS1MvZFlMWDBMS0NTdmQwK2V6TkNZV1l5cXFydjltejhNakE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSFZ0bWYxWnlZL1hSOWpxbHpNYk9JbGJES0RkY2FGT1FVUWt3T0thT25mNnpzSEtrNEIvbVdtYjBINmpiTlNzUHhqNGJoRkRWNng4L2s0UmIvWVF0RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU2g4Nkd5aEUrdms2dXFNZjMvbDZuMXpkUkptR05QaGZINDJIWXpmemt6cktuZ05IOTRSN2dBVm9oRkRKKzdtSGhGNS8xQmh3V29VSjRIS0lWbnRDaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMjE5NjE0NzM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU1OTIwNDkxNzQ5NTc5OjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMjE5NjE0NzM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEyNjUxODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCTHlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJMMC5qc29uIjogIntcImtleURhdGFcIjpcIkxwbnBqdE5Gam9GK0RRV3J0UkRKVWMyZURCaE9IVE5CcW1IVW8yL1UxSUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUxODQwMTc3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTI2NTE2NDYzMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJMdy5qc29uIjogIntcImtleURhdGFcIjpcIks1ZU5PczlGWElyd1FNTDB5SlYxejIzM0xVekRjakdNSmZ6VE5zeTFVSG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUxODQwMTc3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkx4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTU5HY2krYjVaeVhRSXlSbjQ4RmRLMFYrVU1WUmhXZXI3REJWU1hZUkdpRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTE4NDAxNzc3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCTHkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJby9BMTdYQURwTVlwSWVnQVBpUFpnS0svZjZjbUovbmw5dEZtSjJYNDFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MTg0MDE3NzcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEyMjg0NDM4MjdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCTHouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0RFlESTlBc2VoMythWkpDZlRhWXYvc3loeXhSczQzb3E4WFA5YkJCVlNRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MTg0MDE3NzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
