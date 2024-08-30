import{r as p,u as U,a as x,o as i,c,b as r,d as e,ab as R,f as w,b$ as C,E as F}from"./index-BsydMoQO.js";import{_ as N,v as $}from"./PageContainer-CUCuX1qU.js";import{a as h,E as q}from"./el-col-CxKru97q.js";import{E as B,a as I}from"./el-form-item-D9kt29y6.js";import{E as O}from"./_plugin-vue_export-helper-CQ3yVNTX.js";import{E as P}from"./el-input-BlQl8ALK.js";import"./el-message-_eICEl_x.js";const K={__name:"UserPassword",setup(T){const n=p(),f=U(),_=x(),u=p(!1),l=p({old_pwd:"",new_pwd:"",re_pwd:""}),g={old_pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码长度必须是6-15位的非空字符串",trigger:"blur"}],new_pwd:[{required:!0,message:"请输入新密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码长度必须是6-15位的非空字符串",trigger:"blur"},{validator:(d,o,t)=>{o===l.value.old_pwd?t(new Error("原密码和新密码不同")):t()},trigger:"blur"}],re_pwd:[{required:!0,message:"请再次确认新密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码长度必须是6-15位的非空字符串",trigger:"blur"},{validator:(d,o,t)=>{o!==l.value.new_pwd?t(new Error("新密码和确认再次输入的新密码不同")):t()},trigger:"blur"}]},v=async()=>{await n.value.validate()&&(u.value=!0,await C(l.value),u.value=!1,F({type:"success",message:"更换密码成功"}),_.setToken(""),_.setUser({}),f.push("/login"))},b=()=>{n.value.resetFields()};return(d,o)=>{const t=P,s=B,m=O,E=I,S=h,V=q,k=N,y=$;return i(),c(k,{title:"重置密码"},{default:r(()=>[e(V,null,{default:r(()=>[e(S,{span:12},{default:r(()=>[R((i(),c(E,{model:l.value,rules:g,ref_key:"formRef",ref:n,"label-width":"100px",size:"large"},{default:r(()=>[e(s,{label:"原密码",prop:"old_pwd"},{default:r(()=>[e(t,{modelValue:l.value.old_pwd,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value.old_pwd=a),type:"password"},null,8,["modelValue"])]),_:1}),e(s,{label:"新密码",prop:"new_pwd"},{default:r(()=>[e(t,{modelValue:l.value.new_pwd,"onUpdate:modelValue":o[1]||(o[1]=a=>l.value.new_pwd=a),type:"password"},null,8,["modelValue"])]),_:1}),e(s,{label:"确认新密码",prop:"re_pwd"},{default:r(()=>[e(t,{modelValue:l.value.re_pwd,"onUpdate:modelValue":o[2]||(o[2]=a=>l.value.re_pwd=a),type:"password"},null,8,["modelValue"])]),_:1}),e(s,null,{default:r(()=>[e(m,{onClick:v,type:"primary"},{default:r(()=>[w("修改密码")]),_:1}),e(m,{onClick:b},{default:r(()=>[w("重置")]),_:1})]),_:1})]),_:1},8,["model"])),[[y,u.value]])]),_:1})]),_:1})]),_:1})}}};export{K as default};
