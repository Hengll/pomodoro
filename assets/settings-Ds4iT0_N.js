import{a3 as r}from"./index-8Ip3YrpQ.js";const i=r("settings",{state:()=>({alarms:[{id:1,name:"鬧鐘",file:new URL(""+new URL("alarm-BgEXsNyQ.mp3",import.meta.url).href,import.meta.url).href},{id:2,name:"yay",file:new URL(""+new URL("yay-BvpvSbeL.mp3",import.meta.url).href,import.meta.url).href}],selected:1}),getters:{selectedFile(){const e=this.alarms.findIndex(t=>t.id===this.selected);return this.alarms[e].file}},persist:{key:"pomodoro-settings",pick:["selected"]}});export{i as u};
