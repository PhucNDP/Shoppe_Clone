const btn_reg = document.querySelector(".js_btn-register")
const btn_log = document.querySelector(".js_btn-login")
const modal_reg = document.querySelector(".js-modal_register")
const modal_log = document.querySelector(".js-modal_login")
const btn_backs = document.querySelectorAll(".js-back");
const js_btn_logs=document.querySelectorAll(".js_btn_log")
const js_btn_regs = document.querySelectorAll(".js_btn_reg")
// Create function show modal reg và login
function show_reg(){
    modal_log.classList.remove('open')
    modal_reg.classList.add('open')
}
function show_log(){
    modal_reg.classList.remove('open')
    modal_log.classList.add('open')
}
// Create function hide modal reg và login
function Hiden_modal(){
    modal_log.classList.remove('open')
    modal_reg.classList.remove('open')
}
for( const btn_back of btn_backs){
    btn_back.addEventListener('click', Hiden_modal);
}
for( const js_btn_log of js_btn_logs){
    js_btn_log.addEventListener('click', show_log);
}
for( const js_btn_reg of js_btn_regs){
    js_btn_reg.addEventListener('click', show_reg);
}
btn_reg.addEventListener('click', show_reg)
btn_log.addEventListener('click', show_log)

