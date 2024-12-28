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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "07067655274";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_03_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICAxOCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OSxcbiAgICAgICAgODksXG4gICAgICAgIDU2LFxuICAgICAgICAyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNixcbiAgICAgICAgODEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM5LFxuICAgICAgICA1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSkRWS0VoSnU2TGw4K0FhWkRrL3YxTjU0TldodDhwblhacTlLaW5nTWNaST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDY3NjU1Mjc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NEIwNjU1RTFDMEIwOEVDQzIxNUVDRjBCRURBOTZBQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUzNTEzOTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVWxTZ3ctZ2FRQjJSMjRzOVRoM2I4Z1wiLFxuICBcInBob25lSWRcIjogXCI1ZTBlZDZhOS0xNGY1LTRiYjktODIyOS0xNWY3YTZmYjMwNDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMjUsXG4gICAgICA3NSxcbiAgICAgIDAsXG4gICAgICAxNjcsXG4gICAgICAxOTksXG4gICAgICA4LFxuICAgICAgMjksXG4gICAgICAxMTAsXG4gICAgICAxNzIsXG4gICAgICAyMzEsXG4gICAgICAxNDEsXG4gICAgICAxMjEsXG4gICAgICA5MSxcbiAgICAgIDIyMyxcbiAgICAgIDEyMSxcbiAgICAgIDI0NSxcbiAgICAgIDMsXG4gICAgICAxNDYsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgNjcsXG4gICAgICA5MyxcbiAgICAgIDUwLFxuICAgICAgMTUwLFxuICAgICAgMTA2LFxuICAgICAgNjcsXG4gICAgICA2NSxcbiAgICAgIDEyNCxcbiAgICAgIDE0MCxcbiAgICAgIDE2MSxcbiAgICAgIDE3OCxcbiAgICAgIDExOCxcbiAgICAgIDEwLFxuICAgICAgMjM5LFxuICAgICAgMTUyLFxuICAgICAgMjksXG4gICAgICA4MSxcbiAgICAgIDg5LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1M0R0g2UU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjc2NTUyNzQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJhbmF6ZGF0YSAyNDdhcGlcIixcbiAgICBcImxpZFwiOiBcIjE2Njc3Mzc0NzkyNTIxMjo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w3cGxxTURFTnE0dmJzR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU01Eczd0YWpsR0REVTlmczd2ZGU0TGk3b2hxWnVmRW5wUkdmczhoaGlRQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoZ05jR1ZPczVzaEptYXN3ODQrS1hpNndXRks0clhCVlNvR1BGZFdYeHc5b21QN0U0Ny9acXNLZFloNlBwYlczdHQvdDVIOU5TUEJYSFNjbTJzbGNDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0MG9ZRTRFYmswTTZuTDBUQW1PUy9VMS9RN0FJczdVY2o3Y3RmVUo1QWgvSGhRVzEweGt5cWNQeUVpT1BqNyt0eFF1K2paSzVGcnAvdnFQN3hTeWFodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY3NjU1Mjc0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTM1MTM5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFMUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUxSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN3ZHa2F2Mnh1bnBtd2IyVGpYckp5dDdINlZ5NUFueUFjL3VKSEg5M1dwcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzkwODA2MzgsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMTczNTE5ODY4MjkzOFwifSIKfQ=="  // PUT your SESSION_ID 


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
