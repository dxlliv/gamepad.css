import{d as o,e as n,f as s,g as l,n as i,t as w,o as p}from"./vue.esm-bundler-iYPIRsgr.js";const g={nintendo:{name:"Nintendo",buttons:["a","b","x","y","arrow-up","arrow-down","arrow-left","arrow-right","zl","zr","l","r","select","start"],consoles:{switch:{name:"Switch",buttons:{list:["a","b","x","y","arrow-up","arrow-down","arrow-left","arrow-right","zl","zr","l","r"],preview:["a","b","x","y","arrow-up","arrow-down","arrow-left","arrow-right","zl","zr","l","r"]}},gbc:{name:"Game Boy Color",buttons:{list:["x","y","arrow-up","arrow-down","arrow-left","arrow-right","select","start"],preview:["x","y","arrow-up","arrow-down","arrow-left","arrow-right","select","start"]}}}},playstation:{name:"PlayStation",buttons:["cross","circle","square","triangle","arrow-up","arrow-down","arrow-left","arrow-right","l1","r1","l2","r2","l3","r3","select","start","ps"],consoles:{ps1:{name:"PS1",buttons:{list:["cross","circle","square","triangle","arrow-up","arrow-down","arrow-left","arrow-right","l1","r1","l2","r2","l3","r3","select","start","ps"],preview:["cross","circle","square","triangle","arrow-up","arrow-down","arrow-left","arrow-right","l1","r1","l2","r2"]}}}},xbox:{name:"Xbox",buttons:["a","b","x","y","arrow-up","arrow-down","arrow-left","arrow-right","lb","rb","lt","rt","l3","r3"],consoles:{360:{name:"360",buttons:{list:["a","b","x","y","arrow-up","arrow-down","arrow-left","arrow-right","lb","rb","lt","rt","l3","r3"],preview:["a","b","x","y","arrow-up","arrow-down","arrow-left","arrow-right","lb","rb","lt","rt"]}},one:{name:"One",buttons:{list:["a","b","x","y","arrow-up","arrow-down","arrow-left","arrow-right","lb","rb","lt","rt","l3","r3"],preview:["a","b","x","y","arrow-up","arrow-down","arrow-left","arrow-right","lb","rb","lt","rt"]}}}}},u={class:"gamepad-button-wrapper"},m=["textContent"],b=o({__name:"GamepadButton",props:{platform:{},button:{},variant:{},size:{},debug:{type:Boolean}},setup(a){const r=a,e=n(()=>{const t=["gamepad-button",`gamepad-button-${r.platform}`];return r.button.startsWith("arrow")?t.push(`gamepad-button--${r.button}`):t.push(`gamepad-button-${r.platform}--${r.button}`),r.variant&&t.push(`gamepad-button-${r.platform}--variant-${r.variant}`),r.size&&t.push(`gamepad-button--size-${r.size}`),r.debug&&t.push("gamepad-button--debug"),t});return(t,c)=>(p(),s("div",u,[l("i",{class:i(e.value),textContent:w(t.button.toUpperCase())},null,10,m)]))}});b.__docgenInfo={exportName:"default",displayName:"GamepadButton",description:"",tags:{},props:[{name:"platform",required:!0,type:{name:"string"}},{name:"button",required:!0,type:{name:"string"}},{name:"variant",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"string"}},{name:"debug",required:!1,type:{name:"boolean"}}],sourceFiles:["/home/dxlliv/Development/Projects/Gamepad.css/src/components/GamepadButton.vue"]};export{b as _,g as c};
