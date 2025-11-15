// ==UserScript==
// @name         爱问答助手
// @namespace    aiask/askHelper
// @version      2.4.2
// @author       aiask
// @description  全平台问答助手，一键获取整个页面的试题答案，目前支持【超星学习通、知到智慧树、国家开放大学、广东开放大学、江苏开放大学、上海开放大学、云南开放大学、芯位教育、云慕学苑、职教云、川农在线、安徽继续教育平台、青书学堂、睿学在线、成教云、京人平台、绎通继教云、学起Plus、云上河开、河南继续教育、四川开放大学、良师在线、继教云、日照专业技术人员继续教育、麦能网、21tb、168网校、云班课、电大中专、learnin、西财在线、春风雨】，更多平台开发中...
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAHVQTFRFR3BMgICBQD8/QUVHQ0ZIRUhKX2FiQD8/Tk1NP0VJPzs7Pz8/QD4+UE9QQD8/PVlnQD8/M6vj////n5+fN5C60NDQSl9qOXWSZL/qTFNXzOr4QWl8yMjItLS02traOIOnNZzN6OfnlJeZ9/f3PYGgpdrzmdXxgSBJqQAAABB0Uk5TAP5E6vys+7/Q0RhsfPFV/OwFarYAAAEESURBVHjapdHrboMgGIBhUHBaD/sAlTE8VOt2/5c4GlBMRZOl7w8j+kQQ0FaVwbG48IDq+piMPcgkO1bD/8DXvhD4/fb9ePDuGiqa2krV7pO1AxSLYIl2ABoeTLSvYMBi4N0sphOAlVaqg1aTPggmZYYaFvNMBYGQz6G6m2vbhEBvF81MxALFTDpbQQd3ZhvBgxqiFfBEO/CJ7ZxkNPcUbWBwn5DJw4KSsJHcHPCTLLDuQxpLkiMLbAIWJs1wBRVkyAFXT7Sa+AYQjTywNfOD74DNA18I9Ifjpg7Es/3Jj5eKyIEcBgNwhk5L8XMPonMQQcfNhBfRpIfbFbiRskCX5enFyz/07TSN9vGxKwAAAABJRU5ErkJggg==
// @match        *://*.chaoxing.com/*
// @match        *://*.hlju.edu.cn/*
// @match        *://*.ecust.edu.cn/*
// @match        *://lms.ouchn.cn/*
// @match        *://*.ouchn.cn/*
// @match        *://xczxzdbf.moodle.qwbx.ouchn.cn/*
// @match        *://study.ouchn.cn/*
// @match        *://moodle.syxy.ouchn.cn/*
// @match        *://moodle.qwbx.ouchn.cn/*
// @match        *://*.tongyi.com/*
// @match        *://chatglm.cn/*
// @match        *://xinghuo.xfyun.cn/*
// @match        *://chat.deepseek.com/*
// @match        *://*.zhihuishu.com/*
// @match        *://course.ougd.cn/*
// @match        *://elearning.bjou.edu.cn/*
// @match        *://whkpc.hnqtyq.cn:5678/*
// @match        *://www.51xinwei.com/*
// @match        *://*.w-ling.cn/*
// @match        *://*.edu-edu.com/*
// @match        *://xuexi.jsou.cn/*
// @match        *://*.icve.com.cn/*
// @match        *://zice.cnzx.info/*
// @match        *://any.cnzx.info:81/*
// @match        *://www.icourse163.org/*
// @match        *://*.shou.org.cn/*
// @match        *://*.ahjxjy.cn/*
// @match        *://*.chinaedu.net/*
// @match        *://*.qingshuxuetang.com/*
// @match        *://cce.org.uooconline.com/*
// @match        *://*.courshare.cn/*
// @match        *://*.cep.webtrn.cn/*
// @match        *://*.webtrn.cn/*
// @match        *://*.cj-edu.com/*
// @match        *://*.ytccr.com/*
// @match        *://*.exam-cloud.cn/*
// @match        *://gdrtvu.exam-cloud.cn/*
// @match        *://*.open.ha.cn/*
// @match        *://lhycjy.cloudwis.tech/*
// @match        *://*.sclecb.cn/*
// @match        *://*.web2.superchutou.com/*
// @match        *://*.ls365.net/*
// @match        *://*.jijiaox.com/*
// @match        *://*.wencaischool.net/*
// @match        *://sdrz.gxk.yxlearning.com/*
// @match        *://*.crjxjy.net/*
// @match        *://*.cjnep.net/*
// @match        *://*.91huayi.com/*
// @match        *://teach.ynou.edu.cn/*
// @match        *://*.edu-edu.com.cn/*
// @match        *://*.21tb.com/*
// @match        *://*.168wangxiao.com/*
// @match        *://*.mynep.com/*
// @match        *://www.mosoteach.cn/*
// @match        *://*.aufe.edu.cn/*
// @match        *://*.learnin.com.cn/*
// @match        *://*.ouchn.edu.cn/*
// @match        *://*.swufe-online.com/*
// @match        *://ks.cqsdx.cn/*
// @match        *://*.qau.edu.cn/*
// @match        *://*.gdufemooc.cn/*
// @match        *://*.telfri-edu.com/*
// @match        *://www.beeline-ai.com/*
// @match        *://*.wxic.edu.cn/*
// @match        *://*.yxbyun.com/*
// @match        *://*.wdjycj.com/*
// @match        *://*.hbcjpt.com/*
// @match        *://*.csmu.edu.cn/*
// @match        *://*.ketangx.net/*
// @match        *://*.cnzx.info/*
// @match        *://www.asklib.com/*
// @match        *://*.xust.edu.cn/*
// @match        *://*.whut.edu.cn/*
// @match        *://*.wwwwsoft.com/*
// @match        *://*.dufe.edu.cn/*
// @match        *://*.lygtc.edu.cn/*
// @match        *://*.iwdjy.com/*
// @match        *://*.jijiaool.com/*
// @match        *://lms.cjzx.hblll.com/*
// @match        *://*.ouc-online.com.cn/*
// @require      https://lib.baomitu.com/vue/3.4.27/vue.global.min.js
// @require      https://lib.baomitu.com/vue-demi/0.14.6/index.iife.js
// @require      data:application/javascript,%3Bwindow.Vue%3DVue%3B
// @require      https://lib.baomitu.com/element-plus/2.8.2/index.full.min.js
// @require      https://lib.baomitu.com/jquery/3.6.0/jquery.min.js
// @require      https://lib.baomitu.com/dompurify/3.1.6/purify.min.js
// @require      https://lib.baomitu.com/crypto-js/4.2.0/crypto-js.min.js
// @resource     ElementPlus  https://lib.baomitu.com/element-plus/2.8.2/index.min.css
// @connect      127.0.0.1
// @connect      icodef.com
// @connect      muketool.com
// @connect      wk66.top
// @connect      82.157.105.20
// @connect      zhihuishu.com
// @connect      greasyfork.org
// @connect      chaoxing.com
// @connect      shou.org.cn
// @connect      jsdelivr.net
// @connect      jsdmirror.cn
// @connect      gitee.com
// @connect      vxo.im
// @connect      zeroai.chat
// @connect      forestpolice.org
// @connect      scriptcat.org
// @connect      aiask.site
// @connect      *
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// @downloadURL https://update.greasyfork.org/scripts/492563/%E7%88%B1%E9%97%AE%E7%AD%94%E5%8A%A9%E6%89%8B.user.js
// @updateURL https://update.greasyfork.org/scripts/492563/%E7%88%B1%E9%97%AE%E7%AD%94%E5%8A%A9%E6%89%8B.meta.js
// ==/UserScript==
// hello

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const d=document.createElement("style");d.textContent=e,document.head.append(d)})(" .base-container[data-v-05def6d1]{padding:0}.tips-card[data-v-05def6d1],.config-card[data-v-05def6d1]{margin-bottom:20px}.card-header[data-v-05def6d1]{display:flex;align-items:center;justify-content:space-between}.card-title[data-v-05def6d1]{font-size:16px;font-weight:600;color:#1f2937}.config-list[data-v-05def6d1]{display:flex;flex-direction:column;gap:20px}.config-item[data-v-05def6d1]{padding:16px;background:#fff;border-radius:12px;transition:all .3s;border:1px solid #e5e7eb}.config-item[data-v-05def6d1]:hover{background:#fafbfc;box-shadow:0 2px 8px #0000000d}.config-item-content[data-v-05def6d1]{display:flex;justify-content:space-between;align-items:center;gap:20px}.config-label[data-v-05def6d1]{display:flex;align-items:center;gap:8px;flex:1;min-width:0}.label-text[data-v-05def6d1]{font-size:15px;font-weight:500;color:#374151}.info-icon[data-v-05def6d1]{color:#9ca3af;cursor:help;font-size:16px}.info-icon[data-v-05def6d1]:hover{color:#667eea}.config-control[data-v-05def6d1]{display:flex;align-items:center;flex-shrink:0}.checkbox-group[data-v-05def6d1]{display:flex;flex-wrap:wrap;gap:12px}.hotkey-input-wrapper[data-v-05def6d1]{position:relative}.hotkey-input-wrapper[data-v-05def6d1] .el-input.recording{border-color:#f56c6c;animation:pulse-05def6d1 1.5s infinite}.hotkey-input-wrapper[data-v-05def6d1] .el-input.recording input{background-color:#fef0f0;cursor:pointer}.hotkey-input-wrapper[data-v-05def6d1] .el-input input{cursor:pointer}@keyframes pulse-05def6d1{0%,to{box-shadow:0 0 #f56c6c66}50%{box-shadow:0 0 0 6px #f56c6c00}}@media (max-width: 768px){.config-item-content[data-v-05def6d1]{flex-direction:column;align-items:flex-start}.config-control[data-v-05def6d1]{width:100%}.config-control .el-input[data-v-05def6d1],.config-control .el-select[data-v-05def6d1]{width:100%;max-width:100%!important}} ");

(function (vue, D, N, J, Q) {
    'use strict';

    var e = Object.defineProperty, __publicField = (t, n, a) => ((t, n, a) => n in t ? e(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : t[n] = a)(t, "symbol" != typeof n ? n + "" : n, a);

    var W = vue.defineComponent({
        name: "ArrowLeft",
        __name: "arrow-left",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
        }) ]))
    }), K = vue.defineComponent({
        name: "ArrowRight",
        __name: "arrow-right",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
        }) ]))
    }), Y = vue.defineComponent({
        name: "ChatDotRound",
        __name: "chat-dot-round",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
        }), vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4"
        }) ]))
    }), X = vue.defineComponent({
        name: "Coin",
        __name: "coin",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
        }), vue.createElementVNode("path", {
            fill: "currentColor",
            d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
        }), vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224m0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160"
        }) ]))
    }), Z = vue.defineComponent({
        name: "CollectionTag",
        __name: "collection-tag",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32"
        }) ]))
    }), ee = vue.defineComponent({
        name: "DataAnalysis",
        __name: "data-analysis",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32zM832 192H192v512h640zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32m160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32m160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32"
        }) ]))
    }), te = vue.defineComponent({
        name: "Delete",
        __name: "delete",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
        }) ]))
    }), ne = vue.defineComponent({
        name: "Document",
        __name: "document",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"
        }) ]))
    }), ae = vue.defineComponent({
        name: "Download",
        __name: "download",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"
        }) ]))
    }), se = vue.defineComponent({
        name: "EditPen",
        __name: "edit-pen",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336zm384 254.272v-64h448v64h-448z"
        }) ]))
    }), oe = vue.defineComponent({
        name: "Edit",
        __name: "edit",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
        }), vue.createElementVNode("path", {
            fill: "currentColor",
            d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
        }) ]))
    }), ie = vue.defineComponent({
        name: "FolderOpened",
        __name: "folder-opened",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896"
        }) ]))
    }), re = vue.defineComponent({
        name: "Folder",
        __name: "folder",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32"
        }) ]))
    }), le = vue.defineComponent({
        name: "House",
        __name: "house",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
        }) ]))
    }), ce = vue.defineComponent({
        name: "Lock",
        __name: "lock",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
        }), vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
        }) ]))
    }), pe = vue.defineComponent({
        name: "Minus",
        __name: "minus",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
        }) ]))
    }), ue = vue.defineComponent({
        name: "Notebook",
        __name: "notebook",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M192 128v768h640V128zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32"
        }), vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32m0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32m0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32m0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32"
        }) ]))
    }), de = vue.defineComponent({
        name: "Plus",
        __name: "plus",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
        }) ]))
    }), he = vue.defineComponent({
        name: "QuestionFilled",
        __name: "question-filled",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
        }) ]))
    }), me = vue.defineComponent({
        name: "Search",
        __name: "search",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
        }) ]))
    }), fe = vue.defineComponent({
        name: "Setting",
        __name: "setting",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256"
        }) ]))
    }), ge = vue.defineComponent({
        name: "TrophyBase",
        __name: "trophy-base",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xml:space": "preserve",
            style: {
                "enable-background": "new 0 0 1024 1024"
            },
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M918.4 201.6c-6.4-6.4-12.8-9.6-22.4-9.6H768V96c0-9.6-3.2-16-9.6-22.4C752 67.2 745.6 64 736 64H288c-9.6 0-16 3.2-22.4 9.6C259.2 80 256 86.4 256 96v96H128c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 16-9.6 22.4 3.2 108.8 25.6 185.6 64 224 34.4 34.4 77.56 55.65 127.65 61.99 10.91 20.44 24.78 39.25 41.95 56.41 40.86 40.86 91 65.47 150.4 71.9V768h-96c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h256c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6h-96V637.26c59.4-7.71 109.54-30.01 150.4-70.86 17.2-17.2 31.51-36.06 42.81-56.55 48.93-6.51 90.02-27.7 126.79-61.85 38.4-38.4 60.8-112 64-224 0-6.4-3.2-16-9.6-22.4zM256 438.4c-19.2-6.4-35.2-19.2-51.2-35.2-22.4-22.4-35.2-70.4-41.6-147.2H256zm390.4 80C608 553.6 566.4 576 512 576s-99.2-19.2-134.4-57.6C342.4 480 320 438.4 320 384V128h384v256c0 54.4-19.2 99.2-57.6 134.4m172.8-115.2c-16 16-32 25.6-51.2 35.2V256h92.8c-6.4 76.8-19.2 124.8-41.6 147.2zM768 896H256c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h512c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6"
        }) ]))
    }), ye = vue.defineComponent({
        name: "Upload",
        __name: "upload",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z"
        }) ]))
    }), we = vue.defineComponent({
        name: "User",
        __name: "user",
        setup: e => (e, t) => (vue.openBlock(), vue.createElementBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
        }, [ vue.createElementVNode("path", {
            fill: "currentColor",
            d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
        }) ]))
    });

    let ve;

    const setActivePinia = e => ve = e, be = Symbol();

    function isPlainObject(e) {
        return e && "object" == typeof e && "[object Object]" === Object.prototype.toString.call(e) && "function" != typeof e.toJSON;
    }

    var xe, _e;

    (_e = xe || (xe = {})).direct = "direct", _e.patchObject = "patch object", _e.patchFunction = "patch function";

    const noop = () => {};

    function addSubscription(e, t, n, a = noop) {
        e.push(t);
        const removeSubscription = () => {
            const n = e.indexOf(t);
            n > -1 && (e.splice(n, 1), a());
        };
        return !n && vue.getCurrentScope() && vue.onScopeDispose(removeSubscription), removeSubscription;
    }

    function triggerSubscriptions(e, ...t) {
        e.slice().forEach((e => {
            e(...t);
        }));
    }

    const fallbackRunWithContext = e => e(), ke = Symbol(), qe = Symbol();

    function mergeReactiveObjects(e, t) {
        e instanceof Map && t instanceof Map ? t.forEach(((t, n) => e.set(n, t))) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
        for (const n in t) {
            if (!t.hasOwnProperty(n)) continue;
            const a = t[n], s = e[n];
            isPlainObject(s) && isPlainObject(a) && e.hasOwnProperty(n) && !vue.isRef(a) && !vue.isReactive(a) ? e[n] = mergeReactiveObjects(s, a) : e[n] = a;
        }
        return e;
    }

    const Ce = Symbol();

    const {assign: Te} = Object;

    function createSetupStore(e, t, n = {}, a, s, r) {
        let l;
        const c = Te({
            actions: {}
        }, n), f = {
            deep: !0
        };
        let g, w, v, b = [], x = [];
        const _ = a.state.value[e];
        let k;
        function $patch(t) {
            let n;
            g = w = !1, "function" == typeof t ? (t(a.state.value[e]), n = {
                type: xe.patchFunction,
                storeId: e,
                events: v
            }) : (mergeReactiveObjects(a.state.value[e], t), n = {
                type: xe.patchObject,
                payload: t,
                storeId: e,
                events: v
            });
            const s = k = Symbol();
            vue.nextTick().then((() => {
                k === s && (g = !0);
            })), w = !0, triggerSubscriptions(b, n, a.state.value[e]);
        }
        r || _ || (a.state.value[e] = {}), vue.ref({});
        const q = r ? function() {
            const {state: e} = n, t = e ? e() : {};
            this.$patch((e => {
                Te(e, t);
            }));
        } : noop;
        const action = (t, n = "") => {
            if (ke in t) return t[qe] = n, t;
            const wrappedAction = function() {
                setActivePinia(a);
                const n = Array.from(arguments), s = [], o = [];
                let i;
                triggerSubscriptions(x, {
                    args: n,
                    name: wrappedAction[qe],
                    store: T,
                    after: function(e) {
                        s.push(e);
                    },
                    onError: function(e) {
                        o.push(e);
                    }
                });
                try {
                    i = t.apply(this && this.$id === e ? this : T, n);
                } catch (r) {
                    throw triggerSubscriptions(o, r), r;
                }
                return i instanceof Promise ? i.then((e => (triggerSubscriptions(s, e), e))).catch((e => (triggerSubscriptions(o, e), 
                Promise.reject(e)))) : (triggerSubscriptions(s, i), i);
            };
            return wrappedAction[ke] = !0, wrappedAction[qe] = n, wrappedAction;
        }, C = {
            _p: a,
            $id: e,
            $onAction: addSubscription.bind(null, x),
            $patch: $patch,
            $reset: q,
            $subscribe(t, n = {}) {
                const s = addSubscription(b, t, n.detached, (() => o())), o = l.run((() => vue.watch((() => a.state.value[e]), (a => {
                    ("sync" === n.flush ? w : g) && t({
                        storeId: e,
                        type: xe.direct,
                        events: v
                    }, a);
                }), Te({}, f, n))));
                return s;
            },
            $dispose: function() {
                l.stop(), b = [], x = [], a._s.delete(e);
            }
        }, T = vue.reactive(C);
        a._s.set(e, T);
        const A = (a._a && a._a.runWithContext || fallbackRunWithContext)((() => a._e.run((() => (l = vue.effectScope()).run((() => t({
            action: action
        })))))));
        for (const o in A) {
            const t = A[o];
            if (vue.isRef(t) && (!vue.isRef(U = t) || !U.effect) || vue.isReactive(t)) r || (!_ || isPlainObject(S = t) && S.hasOwnProperty(Ce) || (vue.isRef(t) ? t.value = _[o] : mergeReactiveObjects(t, _[o])), 
            a.state.value[e][o] = t); else if ("function" == typeof t) {
                const e = action(t, o);
                A[o] = e, c.actions[o] = t;
            }
        }
        var S, U;
        return Te(T, A), Te(vue.toRaw(T), A), Object.defineProperty(T, "$state", {
            get: () => a.state.value[e],
            set: e => {
                $patch((t => {
                    Te(t, e);
                }));
            }
        }), a._p.forEach((e => {
            Te(T, l.run((() => e({
                store: T,
                app: a._a,
                pinia: a,
                options: c
            }))));
        })), _ && r && n.hydrate && n.hydrate(T.$state, _), g = !0, w = !0, T;
    }

    function defineStore(e, t, n) {
        let a, s;
        const o = "function" == typeof t;
        function useStore(e, n) {
            const i = vue.hasInjectionContext();
            (e = e || (i ? vue.inject(be, null) : null)) && setActivePinia(e), (e = ve)._s.has(a) || (o ? createSetupStore(a, t, s, e) : function(e, t, n) {
                const {state: a, actions: s, getters: o} = t, i = n.state.value[e];
                createSetupStore(e, (function() {
                    i || (n.state.value[e] = a ? a() : {});
                    const t = vue.toRefs(n.state.value[e]);
                    return Te(t, s, Object.keys(o || {}).reduce(((t, a) => (t[a] = vue.markRaw(vue.computed((() => {
                        setActivePinia(n);
                        const t = n._s.get(e);
                        return o[a].call(t, t);
                    }))), t)), {}));
                }), t, n, 0, !0);
            }(a, s, e));
            return e._s.get(a);
        }
        return "string" == typeof e ? (a = e, s = o ? n : t) : (s = e, a = e.id), useStore.$id = a, 
        useStore;
    }

    var Ae = (() => "undefined" != typeof GM_deleteValue ? GM_deleteValue : void 0)(), Se = (() => "undefined" != typeof GM_getResourceText ? GM_getResourceText : void 0)(), Ue = (() => "undefined" != typeof GM_getValue ? GM_getValue : void 0)(), He = (() => "undefined" != typeof GM_info ? GM_info : void 0)(), Ee = (() => "undefined" != typeof GM_listValues ? GM_listValues : void 0)(), $e = (() => "undefined" != typeof GM_setValue ? GM_setValue : void 0)(), Ie = (() => "undefined" != typeof GM_xmlhttpRequest ? GM_xmlhttpRequest : void 0)(), je = (() => "undefined" != typeof unsafeWindow ? unsafeWindow : void 0)();

    const ze = "AiAsk_";

    class Cache {
        static set(e, t, n = 0) {
            e = ze + e;
            const a = {
                value: t,
                expire: n > 0 ? Date.now() + 1e3 * n : 0
            };
            return $e(e, a), Ue(e);
        }
        static get(e, t = null) {
            const n = Ue(e = ze + e);
            return n && n.expire && n.expire < Date.now() ? (Ae(e), t) : n ? n.value : t;
        }
        static match(e) {
            return e = ze + e, Ee().filter((t => t.startsWith(e)));
        }
        static matchGet(e) {
            const t = ze + e;
            let n = Ee().filter((e => e.startsWith(t))).map((e => {
                const t = Ue(e, {
                    value: null,
                    expire: 0
                }).value;
                return t && (t.key = e.replace(ze, "")), t;
            })).filter((e => null !== e));
            return n.sort(((e, t) => (t.createTime || 0) - (e.createTime || 0))), n;
        }
        static remove(e) {
            Ae(ze + e);
        }
        static clear() {
            Ee().filter((e => e.startsWith(ze))).forEach(Ae);
        }
        static matchRemove(e) {
            e = ze + e, Ee().filter((t => t.startsWith(e))).forEach(Ae);
        }
    }

    function getDefaultExportFromCjs(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }

    var Oe, Fe, Le = {
        exports: {}
    }, Pe = {
        exports: {}
    };

    Oe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fe = {
        rotl: function(e, t) {
            return e << t | e >>> 32 - t;
        },
        rotr: function(e, t) {
            return e << 32 - t | e >>> t;
        },
        endian: function(e) {
            if (e.constructor == Number) return 16711935 & Fe.rotl(e, 8) | 4278255360 & Fe.rotl(e, 24);
            for (var t = 0; t < e.length; t++) e[t] = Fe.endian(e[t]);
            return e;
        },
        randomBytes: function(e) {
            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
            return t;
        },
        bytesToWords: function(e) {
            for (var t = [], n = 0, a = 0; n < e.length; n++, a += 8) t[a >>> 5] |= e[n] << 24 - a % 32;
            return t;
        },
        wordsToBytes: function(e) {
            for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
            return t;
        },
        bytesToHex: function(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
            return t.join("");
        },
        hexToBytes: function(e) {
            for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
            return t;
        },
        bytesToBase64: function(e) {
            for (var t = [], n = 0; n < e.length; n += 3) for (var a = e[n] << 16 | e[n + 1] << 8 | e[n + 2], s = 0; s < 4; s++) 8 * n + 6 * s <= 8 * e.length ? t.push(Oe.charAt(a >>> 6 * (3 - s) & 63)) : t.push("=");
            return t.join("");
        },
        base64ToBytes: function(e) {
            e = e.replace(/[^A-Z0-9+\/]/gi, "");
            for (var t = [], n = 0, a = 0; n < e.length; a = ++n % 4) 0 != a && t.push((Oe.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * a + 8) - 1) << 2 * a | Oe.indexOf(e.charAt(n)) >>> 6 - 2 * a);
            return t;
        }
    }, Pe.exports = Fe;

    var Me, Ve, De, Ne, Be, Ge = Pe.exports, Re = {
        utf8: {
            stringToBytes: function(e) {
                return Re.bin.stringToBytes(unescape(encodeURIComponent(e)));
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(Re.bin.bytesToString(e)));
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                return t;
            },
            bytesToString: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                return t.join("");
            }
        }
    }, Je = Re, isBuffer_1 = function(e) {
        return null != e && (isBuffer(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && isBuffer(e.slice(0, 0));
        }(e) || !!e._isBuffer);
    };

    function isBuffer(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    }

    Me = Ge, Ve = Je.utf8, De = isBuffer_1, Ne = Je.bin, (Be = function(e, t) {
        e.constructor == String ? e = t && "binary" === t.encoding ? Ne.stringToBytes(e) : Ve.stringToBytes(e) : De(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
        for (var n = Me.bytesToWords(e), a = 8 * e.length, s = 1732584193, o = -271733879, i = -1732584194, r = 271733878, l = 0; l < n.length; l++) n[l] = 16711935 & (n[l] << 8 | n[l] >>> 24) | 4278255360 & (n[l] << 24 | n[l] >>> 8);
        n[a >>> 5] |= 128 << a % 32, n[14 + (a + 64 >>> 9 << 4)] = a;
        var c = Be._ff, p = Be._gg, u = Be._hh, d = Be._ii;
        for (l = 0; l < n.length; l += 16) {
            var h = s, m = o, f = i, g = r;
            s = c(s, o, i, r, n[l + 0], 7, -680876936), r = c(r, s, o, i, n[l + 1], 12, -389564586), 
            i = c(i, r, s, o, n[l + 2], 17, 606105819), o = c(o, i, r, s, n[l + 3], 22, -1044525330), 
            s = c(s, o, i, r, n[l + 4], 7, -176418897), r = c(r, s, o, i, n[l + 5], 12, 1200080426), 
            i = c(i, r, s, o, n[l + 6], 17, -1473231341), o = c(o, i, r, s, n[l + 7], 22, -45705983), 
            s = c(s, o, i, r, n[l + 8], 7, 1770035416), r = c(r, s, o, i, n[l + 9], 12, -1958414417), 
            i = c(i, r, s, o, n[l + 10], 17, -42063), o = c(o, i, r, s, n[l + 11], 22, -1990404162), 
            s = c(s, o, i, r, n[l + 12], 7, 1804603682), r = c(r, s, o, i, n[l + 13], 12, -40341101), 
            i = c(i, r, s, o, n[l + 14], 17, -1502002290), s = p(s, o = c(o, i, r, s, n[l + 15], 22, 1236535329), i, r, n[l + 1], 5, -165796510), 
            r = p(r, s, o, i, n[l + 6], 9, -1069501632), i = p(i, r, s, o, n[l + 11], 14, 643717713), 
            o = p(o, i, r, s, n[l + 0], 20, -373897302), s = p(s, o, i, r, n[l + 5], 5, -701558691), 
            r = p(r, s, o, i, n[l + 10], 9, 38016083), i = p(i, r, s, o, n[l + 15], 14, -660478335), 
            o = p(o, i, r, s, n[l + 4], 20, -405537848), s = p(s, o, i, r, n[l + 9], 5, 568446438), 
            r = p(r, s, o, i, n[l + 14], 9, -1019803690), i = p(i, r, s, o, n[l + 3], 14, -187363961), 
            o = p(o, i, r, s, n[l + 8], 20, 1163531501), s = p(s, o, i, r, n[l + 13], 5, -1444681467), 
            r = p(r, s, o, i, n[l + 2], 9, -51403784), i = p(i, r, s, o, n[l + 7], 14, 1735328473), 
            s = u(s, o = p(o, i, r, s, n[l + 12], 20, -1926607734), i, r, n[l + 5], 4, -378558), 
            r = u(r, s, o, i, n[l + 8], 11, -2022574463), i = u(i, r, s, o, n[l + 11], 16, 1839030562), 
            o = u(o, i, r, s, n[l + 14], 23, -35309556), s = u(s, o, i, r, n[l + 1], 4, -1530992060), 
            r = u(r, s, o, i, n[l + 4], 11, 1272893353), i = u(i, r, s, o, n[l + 7], 16, -155497632), 
            o = u(o, i, r, s, n[l + 10], 23, -1094730640), s = u(s, o, i, r, n[l + 13], 4, 681279174), 
            r = u(r, s, o, i, n[l + 0], 11, -358537222), i = u(i, r, s, o, n[l + 3], 16, -722521979), 
            o = u(o, i, r, s, n[l + 6], 23, 76029189), s = u(s, o, i, r, n[l + 9], 4, -640364487), 
            r = u(r, s, o, i, n[l + 12], 11, -421815835), i = u(i, r, s, o, n[l + 15], 16, 530742520), 
            s = d(s, o = u(o, i, r, s, n[l + 2], 23, -995338651), i, r, n[l + 0], 6, -198630844), 
            r = d(r, s, o, i, n[l + 7], 10, 1126891415), i = d(i, r, s, o, n[l + 14], 15, -1416354905), 
            o = d(o, i, r, s, n[l + 5], 21, -57434055), s = d(s, o, i, r, n[l + 12], 6, 1700485571), 
            r = d(r, s, o, i, n[l + 3], 10, -1894986606), i = d(i, r, s, o, n[l + 10], 15, -1051523), 
            o = d(o, i, r, s, n[l + 1], 21, -2054922799), s = d(s, o, i, r, n[l + 8], 6, 1873313359), 
            r = d(r, s, o, i, n[l + 15], 10, -30611744), i = d(i, r, s, o, n[l + 6], 15, -1560198380), 
            o = d(o, i, r, s, n[l + 13], 21, 1309151649), s = d(s, o, i, r, n[l + 4], 6, -145523070), 
            r = d(r, s, o, i, n[l + 11], 10, -1120210379), i = d(i, r, s, o, n[l + 2], 15, 718787259), 
            o = d(o, i, r, s, n[l + 9], 21, -343485551), s = s + h >>> 0, o = o + m >>> 0, i = i + f >>> 0, 
            r = r + g >>> 0;
        }
        return Me.endian([ s, o, i, r ]);
    })._ff = function(e, t, n, a, s, o, i) {
        var r = e + (t & n | ~t & a) + (s >>> 0) + i;
        return (r << o | r >>> 32 - o) + t;
    }, Be._gg = function(e, t, n, a, s, o, i) {
        var r = e + (t & a | n & ~a) + (s >>> 0) + i;
        return (r << o | r >>> 32 - o) + t;
    }, Be._hh = function(e, t, n, a, s, o, i) {
        var r = e + (t ^ n ^ a) + (s >>> 0) + i;
        return (r << o | r >>> 32 - o) + t;
    }, Be._ii = function(e, t, n, a, s, o, i) {
        var r = e + (n ^ (t | ~a)) + (s >>> 0) + i;
        return (r << o | r >>> 32 - o) + t;
    }, Be._blocksize = 16, Be._digestsize = 16, Le.exports = function(e, t) {
        if (null == e) throw new Error("Illegal argument " + e);
        var n = Me.wordsToBytes(Be(e, t));
        return t && t.asBytes ? n : t && t.asString ? Ne.bytesToString(n) : Me.bytesToHex(n);
    };

    const Qe = getDefaultExportFromCjs(Le.exports), We = [ {
        type: "hook",
        name: "\u4e91\u5e55\u5b66\u82d1hook",
        match: location.host.includes("w-ling.cn"),
        main: e => {
            je.mainClass = J("#app")[0].__vue__.$route.path;
            let t = new MutationObserver((async e => {
                je.mainClass !== J("#app")[0].__vue__.$route.path && (je.mainClass = J("#app")[0].__vue__.$route.path, 
                "homework-detail-container" === je.mainClass && await waitUntil((function() {
                    return 0 !== J(".selectDan").length;
                })), vuePageChange$1(), t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "save",
        name: "\u4e91\u5e55\u5b66\u82d1\u6536\u5f55",
        match: () => location.host.includes("w-ling.cn") && location.href.includes("practiceRecord"),
        question: {
            html: ".selectDan >div >div",
            question: ".title",
            options: ".selectItem label .tagbq",
            type: ".question-box .tag",
            workType: "yunmuxueyuan",
            pageType: "yunmuxueyuan"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".selectDan >div >div");
            }));
        },
        answerHook: e => {
            const t = J(e.html).parent().find("h3").text().split("\u3001")[1];
            e.question = e.question.replace(/^\d+\u3001/, ""), e.question = e.question.replace(/\(\d+\u5206\)$/, "");
            let n = J(e.html).find(".anaylize > span:eq(0)").text().replace("\u4f5c\u7b54\u6b63\u786e\uff1a", "");
            switch ("" === n && (n = J(e.html).find(".falsanaly > span:eq(1)").text().replace("\u6b63\u786e\u7b54\u6848\uff1a", "")), 
            t) {
              case "\u5355\u9009\u9898":
              case "\u591a\u9009\u9898":
                let t = n.split("");
                if (e.answer = t.map((t => e.options[t.charCodeAt(0) - 65])), 0 === e.answer.length) return;
                e.answer.length > 1 ? e.type = "1" : e.type = "0";
                break;

              case "\u5224\u65ad\u9898":
                e.type = "3", "T" == n && (e.answer = [ "\u6b63\u786e" ]), "F" == n && (e.answer = [ "\u9519\u8bef" ]);
                break;

              case "\u586b\u7a7a\u9898":
                e.answer = J(e.html).find(".riganswer > span").first().nextAll("span").map(((e, t) => removeHtml(J(t).text()))).get(), 
                e.type = "2";
            }
            return e;
        }
    }, {
        type: "ask",
        name: "\u4e91\u5e55\u5b66\u82d1",
        tips: "",
        match: () => location.host.includes("w-ling.cn") && (location.href.includes("practicePaper") || location.href.includes("examIndex")),
        types: [ "0", "1", "3" ],
        question: {
            html: ".selectDan >div >div",
            question: ".title",
            options: ".selectItem label .tagbq",
            type: ".question-box .tag",
            workType: "yunmuxueyuan",
            pageType: "yunmuxueyuan"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".selectDan >div >div").length;
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => {
            e.question = e.question.replace(/^\d+\u3001/, ""), e.question = e.question.replace(/\(\d+\u5206\)$/, "");
            switch (J(e.html).parent().find("h4").text().split("\u3001")[1]) {
              case "\u5355\u9009\u9898":
                e.type = "0";
                break;

              case "\u591a\u9009\u9898":
                e.type = "1";
                break;

              case "\u5224\u65ad\u9898":
                e.type = "3", e.$options = J(e.html).find(".selectItem label"), e.options = e.$options.map(((e, t) => removeHtml(J(t).text()))).get(), 
                e.$options;
                break;

              case "\u586b\u7a7a\u9898":
                e.type = "2";
            }
            return e;
        },
        setAnswer: e => {
            switch (e.type) {
              case "3":
                break;

              case "2":
                return J(e.html).find(".tiankong input").each(((t, n) => {
                    let a = J(n).parent()[0].__vue__;
                    J(n).val(e.answer[t]);
                    const s = new Event("input");
                    n.dispatchEvent(s), a.$emit("change", e.answer[t]);
                })), !1;
            }
            return !0;
        },
        finish: e => {}
    } ];

    class Answer {
        constructor() {}
        static score(e, t) {
            let n = Cache.get("api_" + e, {
                score: 0
            });
            n.score += t, Cache.set("api_" + e, n, 600);
        }
        static async getAllAnswers(e) {
            const t = [ this.getAnswer1(e) ];
            return Promise.all(t);
        }
        static async getAnswersFree(e) {
            const t = [ this.getMainAnswer(e), this.getAnswer1(e) ];
            return Promise.all(t);
        }
        static async getAnswer1(e) {
            let t = function() {
                let e = Array.from({
                    length: 4
                }, (() => Math.floor(255 * Math.random()))).join(".");
                return {
                    "X-Forwarded-For": e,
                    "X-Real-IP": e
                };
            }();
            return new Promise((n => {
                request("http://cx.icodef.com/wyn-nb?v=4", "POST", {
                    question: e.question
                }, t).then((e => {
                    let t = e[1];
                    try {
                        e = JSON.parse(e[0].responseText);
                    } catch (s) {
                        n({
                            form: "\u4e00\u4e4b\u9898\u5e93",
                            answer: null,
                            error: s,
                            duration: t
                        });
                    }
                    let a = "";
                    if (1 === e.code) {
                        let t = e.data.replace(/javascript:void\(0\);/g, "").trim().replace(/\n/g, "");
                        [ "\u53db\u9006", "\u516c\u4f17\u53f7", "\u674e\u6052\u96c5", "\u4e00\u4e4b" ].every((e => !t.includes(e))) && (a = t.split("#"));
                    }
                    n({
                        form: "\u4e00\u4e4b\u9898\u5e93",
                        answer: a,
                        duration: t
                    });
                })).catch((e => {
                    "timeout" === e && this.score("icodef", -1), n({
                        form: "\u4e00\u4e4b\u9898\u5e93",
                        answer: "",
                        msg: e,
                        duration: 5e3
                    });
                }));
            }));
        }
        static async getAnswer2(e) {
            return new Promise((t => {
                [ 0, 1, 2 ].includes(parseInt(e.type)) ? request("https://api.muketool.com/cx/v2/query", "POST", {
                    question: e.question,
                    type: parseInt(e.type)
                }, {}).then((e => {
                    let n = e[1];
                    e = JSON.parse(e[0].responseText), t({
                        form: "muketool",
                        answer: 1 === e.code ? e.data.split("#") : "",
                        duration: n
                    });
                })).catch((e => {
                    "timeout" === e && this.score("muketool", -1), t({
                        form: "muketool",
                        answer: ""
                    });
                })) : t({
                    form: "muketool",
                    answer: "",
                    duration: "\u4e0d\u652f\u6301\u7684\u9898\u578b"
                });
            }));
        }
        static getTimestamp() {
            return Math.floor((new Date).getTime() / 1e3);
        }
        static cacheAnswer(e) {
            const t = {
                type: e.type,
                question: e.question,
                options: e.options,
                answer: e.answer
            }, n = questionHash(t.type, t.question, t.options);
            t.createTime = this.getTimestamp(), Cache.set("ques1_" + n, t);
        }
        static async getCacheAnswer(e) {
            const t = questionHash(e.type, e.question, e.options);
            e.type, e.question, e.options;
            let n = Cache.get("ques1_" + t);
            return n ? {
                form: "\u672c\u5730\u7f13\u5b58",
                answer: n.answer,
                duration: 10
            } : {
                form: "\u672c\u5730\u7f13\u5b58",
                answer: "",
                duration: 10,
                msg: "\u672a\u627e\u5230\u7f13\u5b58"
            };
        }
        static getMainAnswer(e) {
            const t = {
                type: e.type,
                question: e.question,
                options: e.options.map((e => e)),
                workType: e.workType,
                pageType: e.pageType
            };
            return new Promise((e => {
                requestApi("https://www.aiask.site/v1/question/search", "POST", t, {}).then((t => {
                    let n = t[1];
                    200 === (t = JSON.parse(t[0].responseText)).code && t.data.answer ? e({
                        form: "\u7231\u95ee\u7b54\u9898\u5e93",
                        answer: t.data.answer,
                        duration: n,
                        msg: t.msg
                    }) : e({
                        form: "\u7231\u95ee\u7b54\u9898\u5e93",
                        answer: "",
                        duration: n,
                        msg: t.msg
                    });
                })).catch((t => {
                    e({
                        form: "\u7231\u95ee\u7b54\u9898\u5e93",
                        answer: "",
                        error: t,
                        duration: 10,
                        msg: "\u8bf7\u6c42\u5931\u8d25"
                    });
                }));
            }));
        }
        static async syncQuestionList(e) {
            return new Promise((t => {
                requestApi("https://www.aiask.site/v1/question/sync", "POST", e, {}).then((e => {
                    e[0].responseText, t(e[0].responseText);
                })).catch((e => {
                    t(e);
                }));
            }));
        }
        static async syncPaper(e) {
            return new Promise((t => {
                requestApi("https://www.aiask.site/v1/question/courseSync", "POST", e, {}).then((e => {
                    e[0].responseText, t(e[0].responseText);
                })).catch((e => {
                    t(e);
                }));
            }));
        }
    }

    const defaultSetAnswer = async (e, t, n, a) => {
        var s;
        switch (e) {
          case "xx":
            for (let s = 0; s < n.$options.length; s++) if (t.includes(s)) {
                if (a.ischecked && a.ischecked(n.$options.eq(s))) continue;
                n.$options.eq(s).click(), await sleep(Math.floor(300 * Math.random() + 200));
            } else a.ischecked && a.ischecked(n.$options.eq(s)) && (n.$options.eq(s).click(), 
            await sleep(Math.floor(300 * Math.random() + 200)));
            break;

          case "pd":
            let e = t;
            0 == n.options.length ? n.$options.each(((t, n) => {
                isTrue(e) && isTrue(removeHtml(J(n).html())) && J(n).click(), isFalse(e) && isFalse(removeHtml(J(n).html())) && J(n).click();
            })) : n.$options.each(((t, a) => {
                isTrue(e) && isTrue(n.options[t]) && J(a).click(), isFalse(e) && isFalse(n.options[t]) && J(a).click();
            }));
            break;

          case "jd":
            J(n.html).find("textarea").each((function(e) {
                je.UE.getEditor(J(this).attr("name")).ready((function() {
                    this.setContent(t[e].replace(/\u7b2c.\u7a7a:/g, ""));
                }));
            })), null == (s = J(n.html).find(".savebtndiv>a")) || s.click();
        }
    }, ApiAnswerMatch = (e, t, n = !1) => {
        const a = getAskStore();
        let s, o = 0, i = !0, r = t.type, l = t.html, c = [], p = [ "", c, t, a.rule ];
        switch (t.$options && "function" == typeof t.$options && (t.$options = t.$options()), 
        r) {
          case "0":
          case "1":
            for (let s = 0; s < e.length; s++) {
                let a = e[s].answer;
                "" == a && (a = []), n && (Array.isArray(a) ? a = a.map((e => {
                    let n = e.charCodeAt() - 65;
                    return t.options[n];
                })) : (a = a.replace(/[^a-zA-Z]/g, ""), a = a.split("").map((e => {
                    let n = e.charCodeAt() - 65;
                    return t.options[n];
                }))));
                let o = matchAnswer(a, t.options);
                e[s].match = o;
            }
            if (c = e.filter((e => e.match.length > 0)), 0 === c.length) return {
                res: e,
                haveAnswer: !1
            };
            if (c.length > 1) {
                if (!c.every((e => e.match.length === c[0].match.length))) {
                    let e = c[0];
                    for (let t = 1; t < c.length; t++) c[t].match.length > e.match.length && (e = c[t]);
                    c = [ e ];
                }
            }
            let a = c[0].match;
            p[0] = "xx", p[1] = a;
            break;

          case "3":
            if (c = e.map((e => {
                let t = e.answer;
                return "object" == typeof t && (t = t[0]), isTrue(t) ? e.answer = "\u6b63\u786e" : isFalse(t) ? e.answer = "\u9519\u8bef" : e.answer = "", 
                e;
            })), c = e.filter((e => "" !== e.answer)), 0 === c.length) return {
                res: e,
                haveAnswer: !1
            };
            p[0] = "pd", p[1] = c[0].answer;
            break;

          case "2":
          case "9":
          case "4":
          case "5":
          case "6":
          case "7":
            if (o = J(l).find("textarea").length, 0 === o && (o = t.$options.length), c = e.filter((e => e.answer.length > 0)), 
            0 === c.length) return {
                res: e,
                haveAnswer: !1
            };
            if (s = c[0].answer, "string" == typeof s && (s = [ s ]), 0 !== o && (c = c.filter((e => ("string" == typeof e.answer ? 1 : e.answer.length) === o)), 
            0 === c.length)) return {
                res: e,
                haveAnswer: !1
            };
            p[0] = "jd", p[1] = s;
            break;

          case "14":
            if (o = t.$options.length, c = e.filter((e => e.answer.length > 0 && e.answer.length === o)), 
            0 === c.length) return {
                res: e,
                haveAnswer: !1
            };
            if (s = c[0].answer, c = c.filter((e => ("string" == typeof e.answer ? 1 : e.answer.length) === o)), 
            0 === c.length) return {
                res: e,
                haveAnswer: !1
            };
            p[0] = "wxtk", p[1] = s;
            break;

          case "11":
            if (c = e.filter((e => "object" == typeof e.answer)), 0 === c.length) return {
                res: e,
                haveAnswer: !1
            };
            s = c[0].answer, p[0] = "lx", p[1] = s;
            break;

          default:
            return {
                res: e,
                haveAnswer: !1
            };
        }
        return a.rule.setAnswerHook && "function" == typeof a.rule.setAnswerHook && a.rule.setAnswerHook({
            type: r,
            answer: p[1],
            html: t.html,
            ques: t
        }), a.rule.setAnswer && "function" == typeof a.rule.setAnswer && (i = a.rule.setAnswer({
            type: r,
            answer: p[1],
            html: l,
            ques: t,
            rule: a.rule
        })), i && defaultSetAnswer(p[0], p[1], t, a.rule), {
            res: e,
            form: c ? c[0] : [],
            haveAnswer: !0
        };
    }, Ke = class _Paper {
        static getPaper(e) {
            return Cache.get(`${_Paper.prefix}_${e}`);
        }
        static setPaper(e, t) {
            if (!e || !t) return;
            const n = _Paper.getPaper(e) || {
                chapter: []
            };
            t.chapter && t.chapter.forEach((e => {
                const t = n.chapter.find((t => t.hash === e.hash));
                t ? (e.question.forEach((e => {
                    const n = t.question.findIndex((t => t.hash === e.hash));
                    -1 !== n ? t.question[n] = e : t.question.push(e);
                })), Object.keys(e).forEach((n => {
                    "question" !== n && (t[n] = e[n]);
                }))) : n.chapter.push(e);
            })), Object.keys(t).forEach((e => {
                "chapter" !== e && (n[e] = t[e]);
            })), Cache.set(`${_Paper.prefix}_${e}`, n), Answer.syncPaper(n);
        }
        static hasChapter(e, t) {
            const n = _Paper.getPaper(e);
            return !(!n || !n.chapter) && n.chapter.some((e => e.hash === t));
        }
        static getAllPapers() {
            return Cache.matchGet(`${_Paper.prefix}_`);
        }
    };

    __publicField(Ke, "prefix", "paper_");

    let Ye = Ke;

    var Xe = {
        parse: function(e) {
            var t = Xe._bin, n = new Uint8Array(e), a = 0;
            t.readFixed(n, a), a += 4;
            var s = t.readUshort(n, a);
            a += 2, t.readUshort(n, a), a += 2, t.readUshort(n, a), a += 2, t.readUshort(n, a), 
            a += 2;
            for (var o = [ "cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GPOS", "GSUB", "SVG " ], i = {
                _data: n
            }, r = {}, l = 0; l < s; l++) {
                var c = t.readASCII(n, a, 4);
                a += 4, t.readUint(n, a), a += 4;
                var p = t.readUint(n, a);
                a += 4;
                var u = t.readUint(n, a);
                a += 4, r[c] = {
                    offset: p,
                    length: u
                };
            }
            for (l = 0; l < o.length; l++) {
                var d = o[l];
                r[d] && (i[d.trim()] = Xe[d.trim()].parse(n, r[d].offset, r[d].length, i));
            }
            return i;
        },
        _tabOffset: function(e, t) {
            for (var n = Xe._bin, a = n.readUshort(e, 4), s = 12, o = 0; o < a; o++) {
                var i = n.readASCII(e, s, 4);
                s += 4, n.readUint(e, s), s += 4;
                var r = n.readUint(e, s);
                if (s += 4, n.readUint(e, s), s += 4, i == t) return r;
            }
            return 0;
        }
    };

    Xe._bin = {
        readFixed: function(e, t) {
            return (e[t] << 8 | e[t + 1]) + (e[t + 2] << 8 | e[t + 3]) / 65540;
        },
        readF2dot14: function(e, t) {
            return Xe._bin.readShort(e, t) / 16384;
        },
        readInt: function(e, t) {
            var n = Xe._bin.t.uint8;
            return n[0] = e[t + 3], n[1] = e[t + 2], n[2] = e[t + 1], n[3] = e[t], Xe._bin.t.int32[0];
        },
        readInt8: function(e, t) {
            return Xe._bin.t.uint8[0] = e[t], Xe._bin.t.int8[0];
        },
        readShort: function(e, t) {
            var n = Xe._bin.t.uint8;
            return n[1] = e[t], n[0] = e[t + 1], Xe._bin.t.int16[0];
        },
        readUshort: function(e, t) {
            return e[t] << 8 | e[t + 1];
        },
        readUshorts: function(e, t, n) {
            for (var a = [], s = 0; s < n; s++) a.push(Xe._bin.readUshort(e, t + 2 * s));
            return a;
        },
        readUint: function(e, t) {
            var n = Xe._bin.t.uint8;
            return n[3] = e[t], n[2] = e[t + 1], n[1] = e[t + 2], n[0] = e[t + 3], Xe._bin.t.uint32[0];
        },
        readUint64: function(e, t) {
            return 4294967296 * Xe._bin.readUint(e, t) + Xe._bin.readUint(e, t + 4);
        },
        readASCII: function(e, t, n) {
            for (var a = "", s = 0; s < n; s++) a += String.fromCharCode(e[t + s]);
            return a;
        },
        readUnicode: function(e, t, n) {
            for (var a = "", s = 0; s < n; s++) {
                var o = e[t++] << 8 | e[t++];
                a += String.fromCharCode(o);
            }
            return a;
        },
        _tdec: window.TextDecoder ? new window.TextDecoder : null,
        readUTF8: function(e, t, n) {
            var a = Xe._bin._tdec;
            return a && 0 == t && n == e.length ? a.decode(e) : Xe._bin.readASCII(e, t, n);
        },
        readBytes: function(e, t, n) {
            for (var a = [], s = 0; s < n; s++) a.push(e[t + s]);
            return a;
        },
        readASCIIArray: function(e, t, n) {
            for (var a = [], s = 0; s < n; s++) a.push(String.fromCharCode(e[t + s]));
            return a;
        }
    }, Xe._bin.t = {
        buff: new ArrayBuffer(8)
    }, Xe._bin.t.int8 = new Int8Array(Xe._bin.t.buff), Xe._bin.t.uint8 = new Uint8Array(Xe._bin.t.buff), 
    Xe._bin.t.int16 = new Int16Array(Xe._bin.t.buff), Xe._bin.t.uint16 = new Uint16Array(Xe._bin.t.buff), 
    Xe._bin.t.int32 = new Int32Array(Xe._bin.t.buff), Xe._bin.t.uint32 = new Uint32Array(Xe._bin.t.buff), 
    Xe._lctf = {}, Xe._lctf.parse = function(e, t, n, a, s) {
        var o = Xe._bin, i = {}, r = t;
        o.readFixed(e, t), t += 4;
        var l = o.readUshort(e, t);
        t += 2;
        var c = o.readUshort(e, t);
        t += 2;
        var p = o.readUshort(e, t);
        return t += 2, i.scriptList = Xe._lctf.readScriptList(e, r + l), i.featureList = Xe._lctf.readFeatureList(e, r + c), 
        i.lookupList = Xe._lctf.readLookupList(e, r + p, s), i;
    }, Xe._lctf.readLookupList = function(e, t, n) {
        var a = Xe._bin, s = t, o = [], i = a.readUshort(e, t);
        t += 2;
        for (var r = 0; r < i; r++) {
            var l = a.readUshort(e, t);
            t += 2;
            var c = Xe._lctf.readLookupTable(e, s + l, n);
            o.push(c);
        }
        return o;
    }, Xe._lctf.readLookupTable = function(e, t, n) {
        var a = Xe._bin, s = t, o = {
            tabs: []
        };
        o.ltype = a.readUshort(e, t), t += 2, o.flag = a.readUshort(e, t), t += 2;
        var i = a.readUshort(e, t);
        t += 2;
        for (var r = 0; r < i; r++) {
            var l = a.readUshort(e, t);
            t += 2;
            var c = n(e, o.ltype, s + l);
            o.tabs.push(c);
        }
        return o;
    }, Xe._lctf.numOfOnes = function(e) {
        for (var t = 0, n = 0; n < 32; n++) e >>> n & 1 && t++;
        return t;
    }, Xe._lctf.readClassDef = function(e, t) {
        var n = Xe._bin, a = [], s = n.readUshort(e, t);
        if (t += 2, 1 == s) {
            var o = n.readUshort(e, t);
            t += 2;
            var i = n.readUshort(e, t);
            t += 2;
            for (var r = 0; r < i; r++) a.push(o + r), a.push(o + r), a.push(n.readUshort(e, t)), 
            t += 2;
        }
        if (2 == s) {
            var l = n.readUshort(e, t);
            t += 2;
            for (r = 0; r < l; r++) a.push(n.readUshort(e, t)), t += 2, a.push(n.readUshort(e, t)), 
            t += 2, a.push(n.readUshort(e, t)), t += 2;
        }
        return a;
    }, Xe._lctf.getInterval = function(e, t) {
        for (var n = 0; n < e.length; n += 3) {
            var a = e[n], s = e[n + 1];
            if (e[n + 2], a <= t && t <= s) return n;
        }
        return -1;
    }, Xe._lctf.readValueRecord = function(e, t, n) {
        var a = Xe._bin, s = [];
        return s.push(1 & n ? a.readShort(e, t) : 0), t += 1 & n ? 2 : 0, s.push(2 & n ? a.readShort(e, t) : 0), 
        t += 2 & n ? 2 : 0, s.push(4 & n ? a.readShort(e, t) : 0), t += 4 & n ? 2 : 0, s.push(8 & n ? a.readShort(e, t) : 0), 
        t += 8 & n ? 2 : 0, s;
    }, Xe._lctf.readCoverage = function(e, t) {
        var n = Xe._bin, a = {};
        a.fmt = n.readUshort(e, t), t += 2;
        var s = n.readUshort(e, t);
        return t += 2, 1 == a.fmt && (a.tab = n.readUshorts(e, t, s)), 2 == a.fmt && (a.tab = n.readUshorts(e, t, 3 * s)), 
        a;
    }, Xe._lctf.coverageIndex = function(e, t) {
        var n = e.tab;
        if (1 == e.fmt) return n.indexOf(t);
        if (2 == e.fmt) {
            var a = Xe._lctf.getInterval(n, t);
            if (-1 != a) return n[a + 2] + (t - n[a]);
        }
        return -1;
    }, Xe._lctf.readFeatureList = function(e, t) {
        var n = Xe._bin, a = t, s = [], o = n.readUshort(e, t);
        t += 2;
        for (var i = 0; i < o; i++) {
            var r = n.readASCII(e, t, 4);
            t += 4;
            var l = n.readUshort(e, t);
            t += 2, s.push({
                tag: r.trim(),
                tab: Xe._lctf.readFeatureTable(e, a + l)
            });
        }
        return s;
    }, Xe._lctf.readFeatureTable = function(e, t) {
        var n = Xe._bin;
        n.readUshort(e, t), t += 2;
        var a = n.readUshort(e, t);
        t += 2;
        for (var s = [], o = 0; o < a; o++) s.push(n.readUshort(e, t + 2 * o));
        return s;
    }, Xe._lctf.readScriptList = function(e, t) {
        var n = Xe._bin, a = t, s = {}, o = n.readUshort(e, t);
        t += 2;
        for (var i = 0; i < o; i++) {
            var r = n.readASCII(e, t, 4);
            t += 4;
            var l = n.readUshort(e, t);
            t += 2, s[r.trim()] = Xe._lctf.readScriptTable(e, a + l);
        }
        return s;
    }, Xe._lctf.readScriptTable = function(e, t) {
        var n = Xe._bin, a = t, s = {}, o = n.readUshort(e, t);
        t += 2, s.default = Xe._lctf.readLangSysTable(e, a + o);
        var i = n.readUshort(e, t);
        t += 2;
        for (var r = 0; r < i; r++) {
            var l = n.readASCII(e, t, 4);
            t += 4;
            var c = n.readUshort(e, t);
            t += 2, s[l.trim()] = Xe._lctf.readLangSysTable(e, a + c);
        }
        return s;
    }, Xe._lctf.readLangSysTable = function(e, t) {
        var n = Xe._bin, a = {};
        n.readUshort(e, t), t += 2, a.reqFeature = n.readUshort(e, t), t += 2;
        var s = n.readUshort(e, t);
        return t += 2, a.features = n.readUshorts(e, t, s), a;
    }, Xe.CFF = {}, Xe.CFF.parse = function(e, t, n) {
        var a = Xe._bin;
        (e = new Uint8Array(e.buffer, t, n))[t = 0], e[++t], e[++t], e[++t], t++;
        var s = [];
        t = Xe.CFF.readIndex(e, t, s);
        for (var o = [], i = 0; i < s.length - 1; i++) o.push(a.readASCII(e, t + s[i], s[i + 1] - s[i]));
        t += s[s.length - 1];
        var r = [];
        t = Xe.CFF.readIndex(e, t, r);
        var l = [];
        for (i = 0; i < r.length - 1; i++) l.push(Xe.CFF.readDict(e, t + r[i], t + r[i + 1]));
        t += r[r.length - 1];
        var c = l[0], p = [];
        t = Xe.CFF.readIndex(e, t, p);
        var u = [];
        for (i = 0; i < p.length - 1; i++) u.push(a.readASCII(e, t + p[i], p[i + 1] - p[i]));
        if (t += p[p.length - 1], Xe.CFF.readSubrs(e, t, c), c.CharStrings) {
            t = c.CharStrings;
            p = [];
            t = Xe.CFF.readIndex(e, t, p);
            var d = [];
            for (i = 0; i < p.length - 1; i++) d.push(a.readBytes(e, t + p[i], p[i + 1] - p[i]));
            c.CharStrings = d;
        }
        c.Encoding && (c.Encoding = Xe.CFF.readEncoding(e, c.Encoding, c.CharStrings.length)), 
        c.charset && (c.charset = Xe.CFF.readCharset(e, c.charset, c.CharStrings.length)), 
        c.Private && (t = c.Private[1], c.Private = Xe.CFF.readDict(e, t, t + c.Private[0]), 
        c.Private.Subrs && Xe.CFF.readSubrs(e, t + c.Private.Subrs, c.Private));
        var h = {};
        for (var m in c) -1 != [ "FamilyName", "FullName", "Notice", "version", "Copyright" ].indexOf(m) ? h[m] = u[c[m] - 426 + 35] : h[m] = c[m];
        return h;
    }, Xe.CFF.readSubrs = function(e, t, n) {
        var a = Xe._bin, s = [];
        t = Xe.CFF.readIndex(e, t, s);
        var o, i = s.length;
        o = i < 1240 ? 107 : i < 33900 ? 1131 : 32768, n.Bias = o, n.Subrs = [];
        for (var r = 0; r < s.length - 1; r++) n.Subrs.push(a.readBytes(e, t + s[r], s[r + 1] - s[r]));
    }, Xe.CFF.tableSE = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0 ], 
    Xe.CFF.glyphByUnicode = function(e, t) {
        for (var n = 0; n < e.charset.length; n++) if (e.charset[n] == t) return n;
        return -1;
    }, Xe.CFF.glyphBySE = function(e, t) {
        return t < 0 || t > 255 ? -1 : Xe.CFF.glyphByUnicode(e, Xe.CFF.tableSE[t]);
    }, Xe.CFF.readEncoding = function(e, t, n) {
        Xe._bin;
        var a = [ ".notdef" ], s = e[t];
        if (t++, 0 != s) throw "error: unknown encoding format: " + s;
        var o = e[t];
        t++;
        for (var i = 0; i < o; i++) a.push(e[t + i]);
        return a;
    }, Xe.CFF.readCharset = function(e, t, n) {
        var a = Xe._bin, s = [ ".notdef" ], o = e[t];
        if (t++, 0 == o) for (var i = 0; i < n; i++) {
            var r = a.readUshort(e, t);
            t += 2, s.push(r);
        } else {
            if (1 != o && 2 != o) throw "error: format: " + o;
            for (;s.length < n; ) {
                r = a.readUshort(e, t);
                t += 2;
                var l = 0;
                1 == o ? (l = e[t], t++) : (l = a.readUshort(e, t), t += 2);
                for (i = 0; i <= l; i++) s.push(r), r++;
            }
        }
        return s;
    }, Xe.CFF.readIndex = function(e, t, n) {
        var a = Xe._bin, s = a.readUshort(e, t), o = e[t += 2];
        if (t++, 1 == o) for (var i = 0; i < s + 1; i++) n.push(e[t + i]); else if (2 == o) for (i = 0; i < s + 1; i++) n.push(a.readUshort(e, t + 2 * i)); else if (3 == o) for (i = 0; i < s + 1; i++) n.push(16777215 & a.readUint(e, t + 3 * i - 1)); else if (0 != s) throw "unsupported offset size: " + o + ", count: " + s;
        return (t += (s + 1) * o) - 1;
    }, Xe.CFF.getCharString = function(e, t, n) {
        var a = Xe._bin, s = e[t], o = e[t + 1];
        e[t + 2], e[t + 3], e[t + 4];
        var i = 1, r = null, l = null;
        s <= 20 && (r = s, i = 1), 12 == s && (r = 100 * s + o, i = 2), 21 <= s && s <= 27 && (r = s, 
        i = 1), 28 == s && (l = a.readShort(e, t + 1), i = 3), 29 <= s && s <= 31 && (r = s, 
        i = 1), 32 <= s && s <= 246 && (l = s - 139, i = 1), 247 <= s && s <= 250 && (l = 256 * (s - 247) + o + 108, 
        i = 2), 251 <= s && s <= 254 && (l = 256 * -(s - 251) - o - 108, i = 2), 255 == s && (l = a.readInt(e, t + 1) / 65535, 
        i = 5), n.val = null != l ? l : "o" + r, n.size = i;
    }, Xe.CFF.readCharString = function(e, t, n) {
        for (var a = t + n, s = Xe._bin, o = []; t < a; ) {
            var i = e[t], r = e[t + 1];
            e[t + 2], e[t + 3], e[t + 4];
            var l = 1, c = null, p = null;
            i <= 20 && (c = i, l = 1), 12 == i && (c = 100 * i + r, l = 2), 19 != i && 20 != i || (c = i, 
            l = 2), 21 <= i && i <= 27 && (c = i, l = 1), 28 == i && (p = s.readShort(e, t + 1), 
            l = 3), 29 <= i && i <= 31 && (c = i, l = 1), 32 <= i && i <= 246 && (p = i - 139, 
            l = 1), 247 <= i && i <= 250 && (p = 256 * (i - 247) + r + 108, l = 2), 251 <= i && i <= 254 && (p = 256 * -(i - 251) - r - 108, 
            l = 2), 255 == i && (p = s.readInt(e, t + 1) / 65535, l = 5), o.push(null != p ? p : "o" + c), 
            t += l;
        }
        return o;
    }, Xe.CFF.readDict = function(e, t, n) {
        for (var a = Xe._bin, s = {}, o = []; t < n; ) {
            var i = e[t], r = e[t + 1];
            e[t + 2], e[t + 3], e[t + 4];
            var l = 1, c = null, p = null;
            if (28 == i && (p = a.readShort(e, t + 1), l = 3), 29 == i && (p = a.readInt(e, t + 1), 
            l = 5), 32 <= i && i <= 246 && (p = i - 139, l = 1), 247 <= i && i <= 250 && (p = 256 * (i - 247) + r + 108, 
            l = 2), 251 <= i && i <= 254 && (p = 256 * -(i - 251) - r - 108, l = 2), 255 == i) throw p = a.readInt(e, t + 1) / 65535, 
            l = 5, "unknown number";
            if (30 == i) {
                var u = [];
                for (l = 1; ;) {
                    var d = e[t + l];
                    l++;
                    var h = d >> 4, m = 15 & d;
                    if (15 != h && u.push(h), 15 != m && u.push(m), 15 == m) break;
                }
                for (var f = "", g = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber" ], y = 0; y < u.length; y++) f += g[u[y]];
                p = parseFloat(f);
            }
            if (i <= 21) if (c = [ "version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX" ][i], 
            l = 1, 12 == i) c = [ "Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName" ][r], 
            l = 2;
            null != c ? (s[c] = 1 == o.length ? o[0] : o, o = []) : o.push(p), t += l;
        }
        return s;
    }, Xe.cmap = {}, Xe.cmap.parse = function(e, t, n) {
        e = new Uint8Array(e.buffer, t, n), t = 0;
        var a = Xe._bin, s = {};
        a.readUshort(e, t), t += 2;
        var o = a.readUshort(e, t);
        t += 2;
        var i = [];
        s.tables = [];
        for (var r = 0; r < o; r++) {
            var l = a.readUshort(e, t);
            t += 2;
            var c = a.readUshort(e, t);
            t += 2;
            var p = a.readUint(e, t);
            t += 4;
            var u = "p" + l + "e" + c, d = i.indexOf(p);
            if (-1 == d) {
                var h;
                d = s.tables.length, i.push(p);
                var m = a.readUshort(e, p);
                0 == m ? h = Xe.cmap.parse0(e, p) : 4 == m ? h = Xe.cmap.parse4(e, p) : 6 == m ? h = Xe.cmap.parse6(e, p) : 12 == m ? h = Xe.cmap.parse12(e, p) : console.log("unknown format: " + m, l, c, p), 
                s.tables.push(h);
            }
            if (null != s[u]) throw "multiple tables for one platform+encoding";
            s[u] = d;
        }
        return s;
    }, Xe.cmap.parse0 = function(e, t) {
        var n = Xe._bin, a = {};
        a.format = n.readUshort(e, t), t += 2;
        var s = n.readUshort(e, t);
        t += 2, n.readUshort(e, t), t += 2, a.map = [];
        for (var o = 0; o < s - 6; o++) a.map.push(e[t + o]);
        return a;
    }, Xe.cmap.parse4 = function(e, t) {
        var n = Xe._bin, a = t, s = {};
        s.format = n.readUshort(e, t), t += 2;
        var o = n.readUshort(e, t);
        t += 2, n.readUshort(e, t), t += 2;
        var i = n.readUshort(e, t);
        t += 2;
        var r = i / 2;
        s.searchRange = n.readUshort(e, t), t += 2, s.entrySelector = n.readUshort(e, t), 
        t += 2, s.rangeShift = n.readUshort(e, t), t += 2, s.endCount = n.readUshorts(e, t, r), 
        t += 2 * r, t += 2, s.startCount = n.readUshorts(e, t, r), t += 2 * r, s.idDelta = [];
        for (var l = 0; l < r; l++) s.idDelta.push(n.readShort(e, t)), t += 2;
        for (s.idRangeOffset = n.readUshorts(e, t, r), t += 2 * r, s.glyphIdArray = []; t < a + o; ) s.glyphIdArray.push(n.readUshort(e, t)), 
        t += 2;
        return s;
    }, Xe.cmap.parse6 = function(e, t) {
        var n = Xe._bin, a = {};
        a.format = n.readUshort(e, t), t += 2, n.readUshort(e, t), t += 2, n.readUshort(e, t), 
        t += 2, a.firstCode = n.readUshort(e, t), t += 2;
        var s = n.readUshort(e, t);
        t += 2, a.glyphIdArray = [];
        for (var o = 0; o < s; o++) a.glyphIdArray.push(n.readUshort(e, t)), t += 2;
        return a;
    }, Xe.cmap.parse12 = function(e, t) {
        var n = Xe._bin, a = {};
        a.format = n.readUshort(e, t), t += 2, t += 2, n.readUint(e, t), t += 4, n.readUint(e, t), 
        t += 4;
        var s = n.readUint(e, t);
        t += 4, a.groups = [];
        for (var o = 0; o < s; o++) {
            var i = t + 12 * o, r = n.readUint(e, i + 0), l = n.readUint(e, i + 4), c = n.readUint(e, i + 8);
            a.groups.push([ r, l, c ]);
        }
        return a;
    }, Xe.glyf = {}, Xe.glyf.parse = function(e, t, n, a) {
        for (var s = [], o = 0; o < a.maxp.numGlyphs; o++) s.push(null);
        return s;
    }, Xe.glyf._parseGlyf = function(e, t) {
        var n = Xe._bin, a = e._data, s = Xe._tabOffset(a, "glyf") + e.loca[t];
        if (e.loca[t] == e.loca[t + 1]) return null;
        var o = {};
        if (o.noc = n.readShort(a, s), s += 2, o.xMin = n.readShort(a, s), s += 2, o.yMin = n.readShort(a, s), 
        s += 2, o.xMax = n.readShort(a, s), s += 2, o.yMax = n.readShort(a, s), s += 2, 
        o.xMin >= o.xMax || o.yMin >= o.yMax) return null;
        if (o.noc > 0) {
            o.endPts = [];
            for (var i = 0; i < o.noc; i++) o.endPts.push(n.readUshort(a, s)), s += 2;
            var r = n.readUshort(a, s);
            if (s += 2, a.length - s < r) return null;
            o.instructions = n.readBytes(a, s, r), s += r;
            var l = o.endPts[o.noc - 1] + 1;
            o.flags = [];
            for (i = 0; i < l; i++) {
                var c = a[s];
                if (s++, o.flags.push(c), 8 & c) {
                    var p = a[s];
                    s++;
                    for (var u = 0; u < p; u++) o.flags.push(c), i++;
                }
            }
            o.xs = [];
            for (i = 0; i < l; i++) {
                var d = !!(2 & o.flags[i]), h = !!(16 & o.flags[i]);
                d ? (o.xs.push(h ? a[s] : -a[s]), s++) : h ? o.xs.push(0) : (o.xs.push(n.readShort(a, s)), 
                s += 2);
            }
            o.ys = [];
            for (i = 0; i < l; i++) {
                d = !!(4 & o.flags[i]), h = !!(32 & o.flags[i]);
                d ? (o.ys.push(h ? a[s] : -a[s]), s++) : h ? o.ys.push(0) : (o.ys.push(n.readShort(a, s)), 
                s += 2);
            }
            var m = 0, f = 0;
            for (i = 0; i < l; i++) m += o.xs[i], f += o.ys[i], o.xs[i] = m, o.ys[i] = f;
        } else {
            var g;
            o.parts = [];
            do {
                g = n.readUshort(a, s), s += 2;
                var y = {
                    m: {
                        a: 1,
                        b: 0,
                        c: 0,
                        d: 1,
                        tx: 0,
                        ty: 0
                    },
                    p1: -1,
                    p2: -1
                };
                if (o.parts.push(y), y.glyphIndex = n.readUshort(a, s), s += 2, 1 & g) {
                    var w = n.readShort(a, s);
                    s += 2;
                    var v = n.readShort(a, s);
                    s += 2;
                } else {
                    w = n.readInt8(a, s);
                    s++;
                    v = n.readInt8(a, s);
                    s++;
                }
                2 & g ? (y.m.tx = w, y.m.ty = v) : (y.p1 = w, y.p2 = v), 8 & g ? (y.m.a = y.m.d = n.readF2dot14(a, s), 
                s += 2) : 64 & g ? (y.m.a = n.readF2dot14(a, s), s += 2, y.m.d = n.readF2dot14(a, s), 
                s += 2) : 128 & g && (y.m.a = n.readF2dot14(a, s), s += 2, y.m.b = n.readF2dot14(a, s), 
                s += 2, y.m.c = n.readF2dot14(a, s), s += 2, y.m.d = n.readF2dot14(a, s), s += 2);
            } while (32 & g);
            if (256 & g) {
                var b = n.readUshort(a, s);
                s += 2, o.instr = [];
                for (i = 0; i < b; i++) o.instr.push(a[s]), s++;
            }
        }
        return o;
    }, Xe.GPOS = {}, Xe.GPOS.parse = function(e, t, n, a) {
        return Xe._lctf.parse(e, t, n, a, Xe.GPOS.subt);
    }, Xe.GPOS.subt = function(e, t, n) {
        if (2 != t) return null;
        var a = Xe._bin, s = n, o = {};
        o.format = a.readUshort(e, n), n += 2;
        var i = a.readUshort(e, n);
        n += 2, o.coverage = Xe._lctf.readCoverage(e, i + s), o.valFmt1 = a.readUshort(e, n), 
        n += 2, o.valFmt2 = a.readUshort(e, n), n += 2;
        var r = Xe._lctf.numOfOnes(o.valFmt1), l = Xe._lctf.numOfOnes(o.valFmt2);
        if (1 == o.format) {
            o.pairsets = [];
            var c = a.readUshort(e, n);
            n += 2;
            for (var p = 0; p < c; p++) {
                var u = a.readUshort(e, n);
                n += 2, u += s;
                var d = a.readUshort(e, u);
                u += 2;
                for (var h = [], m = 0; m < d; m++) {
                    var f = a.readUshort(e, u);
                    u += 2, 0 != o.valFmt1 && (x = Xe._lctf.readValueRecord(e, u, o.valFmt1), u += 2 * r), 
                    0 != o.valFmt2 && (_ = Xe._lctf.readValueRecord(e, u, o.valFmt2), u += 2 * l), h.push({
                        gid2: f,
                        val1: x,
                        val2: _
                    });
                }
                o.pairsets.push(h);
            }
        }
        if (2 == o.format) {
            var g = a.readUshort(e, n);
            n += 2;
            var y = a.readUshort(e, n);
            n += 2;
            var w = a.readUshort(e, n);
            n += 2;
            var v = a.readUshort(e, n);
            n += 2, o.classDef1 = Xe._lctf.readClassDef(e, s + g), o.classDef2 = Xe._lctf.readClassDef(e, s + y), 
            o.matrix = [];
            for (p = 0; p < w; p++) {
                var b = [];
                for (m = 0; m < v; m++) {
                    var x = null, _ = null;
                    0 != o.valFmt1 && (x = Xe._lctf.readValueRecord(e, n, o.valFmt1), n += 2 * r), 0 != o.valFmt2 && (_ = Xe._lctf.readValueRecord(e, n, o.valFmt2), 
                    n += 2 * l), b.push({
                        val1: x,
                        val2: _
                    });
                }
                o.matrix.push(b);
            }
        }
        return o;
    }, Xe.GSUB = {}, Xe.GSUB.parse = function(e, t, n, a) {
        return Xe._lctf.parse(e, t, n, a, Xe.GSUB.subt);
    }, Xe.GSUB.subt = function(e, t, n) {
        var a = Xe._bin, s = n, o = {};
        if (1 != t && 4 != t && 5 != t) return null;
        o.fmt = a.readUshort(e, n), n += 2;
        var i = a.readUshort(e, n);
        if (n += 2, o.coverage = Xe._lctf.readCoverage(e, i + s), 1 == t) {
            if (1 == o.fmt) o.delta = a.readShort(e, n), n += 2; else if (2 == o.fmt) {
                var r = a.readUshort(e, n);
                n += 2, o.newg = a.readUshorts(e, n, r), n += 2 * o.newg.length;
            }
        } else if (4 == t) {
            o.vals = [];
            r = a.readUshort(e, n);
            n += 2;
            for (var l = 0; l < r; l++) {
                var c = a.readUshort(e, n);
                n += 2, o.vals.push(Xe.GSUB.readLigatureSet(e, s + c));
            }
        } else if (5 == t) if (2 == o.fmt) {
            var p = a.readUshort(e, n);
            n += 2, o.cDef = Xe._lctf.readClassDef(e, s + p), o.scset = [];
            var u = a.readUshort(e, n);
            n += 2;
            for (l = 0; l < u; l++) {
                var d = a.readUshort(e, n);
                n += 2, o.scset.push(0 == d ? null : Xe.GSUB.readSubClassSet(e, s + d));
            }
        } else console.log("unknown table format", o.fmt);
        return o;
    }, Xe.GSUB.readSubClassSet = function(e, t) {
        var n = Xe._bin.readUshort, a = t, s = [], o = n(e, t);
        t += 2;
        for (var i = 0; i < o; i++) {
            var r = n(e, t);
            t += 2, s.push(Xe.GSUB.readSubClassRule(e, a + r));
        }
        return s;
    }, Xe.GSUB.readSubClassRule = function(e, t) {
        var n = Xe._bin.readUshort, a = {}, s = n(e, t), o = n(e, t += 2);
        t += 2, a.input = [];
        for (var i = 0; i < s - 1; i++) a.input.push(n(e, t)), t += 2;
        return a.substLookupRecords = Xe.GSUB.readSubstLookupRecords(e, t, o), a;
    }, Xe.GSUB.readSubstLookupRecords = function(e, t, n) {
        for (var a = Xe._bin.readUshort, s = [], o = 0; o < n; o++) s.push(a(e, t), a(e, t + 2)), 
        t += 4;
        return s;
    }, Xe.GSUB.readChainSubClassSet = function(e, t) {
        var n = Xe._bin, a = t, s = [], o = n.readUshort(e, t);
        t += 2;
        for (var i = 0; i < o; i++) {
            var r = n.readUshort(e, t);
            t += 2, s.push(Xe.GSUB.readChainSubClassRule(e, a + r));
        }
        return s;
    }, Xe.GSUB.readChainSubClassRule = function(e, t) {
        for (var n = Xe._bin, a = {}, s = [ "backtrack", "input", "lookahead" ], o = 0; o < s.length; o++) {
            var i = n.readUshort(e, t);
            t += 2, 1 == o && i--, a[s[o]] = n.readUshorts(e, t, i), t += 2 * a[s[o]].length;
        }
        i = n.readUshort(e, t);
        return t += 2, a.subst = n.readUshorts(e, t, 2 * i), t += 2 * a.subst.length, a;
    }, Xe.GSUB.readLigatureSet = function(e, t) {
        var n = Xe._bin, a = t, s = [], o = n.readUshort(e, t);
        t += 2;
        for (var i = 0; i < o; i++) {
            var r = n.readUshort(e, t);
            t += 2, s.push(Xe.GSUB.readLigature(e, a + r));
        }
        return s;
    }, Xe.GSUB.readLigature = function(e, t) {
        var n = Xe._bin, a = {
            chain: []
        };
        a.nglyph = n.readUshort(e, t), t += 2;
        var s = n.readUshort(e, t);
        t += 2;
        for (var o = 0; o < s - 1; o++) a.chain.push(n.readUshort(e, t)), t += 2;
        return a;
    }, Xe.head = {}, Xe.head.parse = function(e, t, n) {
        var a = Xe._bin, s = {};
        return a.readFixed(e, t), t += 4, s.fontRevision = a.readFixed(e, t), t += 4, a.readUint(e, t), 
        t += 4, a.readUint(e, t), t += 4, s.flags = a.readUshort(e, t), t += 2, s.unitsPerEm = a.readUshort(e, t), 
        t += 2, s.created = a.readUint64(e, t), t += 8, s.modified = a.readUint64(e, t), 
        t += 8, s.xMin = a.readShort(e, t), t += 2, s.yMin = a.readShort(e, t), t += 2, 
        s.xMax = a.readShort(e, t), t += 2, s.yMax = a.readShort(e, t), t += 2, s.macStyle = a.readUshort(e, t), 
        t += 2, s.lowestRecPPEM = a.readUshort(e, t), t += 2, s.fontDirectionHint = a.readShort(e, t), 
        t += 2, s.indexToLocFormat = a.readShort(e, t), t += 2, s.glyphDataFormat = a.readShort(e, t), 
        t += 2, s;
    }, Xe.hhea = {}, Xe.hhea.parse = function(e, t, n) {
        var a = Xe._bin, s = {};
        return a.readFixed(e, t), t += 4, s.ascender = a.readShort(e, t), t += 2, s.descender = a.readShort(e, t), 
        t += 2, s.lineGap = a.readShort(e, t), t += 2, s.advanceWidthMax = a.readUshort(e, t), 
        t += 2, s.minLeftSideBearing = a.readShort(e, t), t += 2, s.minRightSideBearing = a.readShort(e, t), 
        t += 2, s.xMaxExtent = a.readShort(e, t), t += 2, s.caretSlopeRise = a.readShort(e, t), 
        t += 2, s.caretSlopeRun = a.readShort(e, t), t += 2, s.caretOffset = a.readShort(e, t), 
        t += 2, t += 8, s.metricDataFormat = a.readShort(e, t), t += 2, s.numberOfHMetrics = a.readUshort(e, t), 
        t += 2, s;
    }, Xe.hmtx = {}, Xe.hmtx.parse = function(e, t, n, a) {
        for (var s = Xe._bin, o = {
            aWidth: [],
            lsBearing: []
        }, i = 0, r = 0, l = 0; l < a.maxp.numGlyphs; l++) l < a.hhea.numberOfHMetrics && (i = s.readUshort(e, t), 
        t += 2, r = s.readShort(e, t), t += 2), o.aWidth.push(i), o.lsBearing.push(r);
        return o;
    }, Xe.kern = {}, Xe.kern.parse = function(e, t, n, a) {
        var s = Xe._bin, o = s.readUshort(e, t);
        if (t += 2, 1 == o) return Xe.kern.parseV1(e, t - 2, n, a);
        var i = s.readUshort(e, t);
        t += 2;
        for (var r = {
            glyph1: [],
            rval: []
        }, l = 0; l < i; l++) {
            t += 2;
            n = s.readUshort(e, t);
            t += 2;
            var c = s.readUshort(e, t);
            t += 2;
            var p = c >>> 8;
            if (0 != (p &= 15)) throw "unknown kern table format: " + p;
            t = Xe.kern.readFormat0(e, t, r);
        }
        return r;
    }, Xe.kern.parseV1 = function(e, t, n, a) {
        var s = Xe._bin;
        s.readFixed(e, t), t += 4;
        var o = s.readUint(e, t);
        t += 4;
        for (var i = {
            glyph1: [],
            rval: []
        }, r = 0; r < o; r++) {
            s.readUint(e, t), t += 4;
            var l = s.readUshort(e, t);
            t += 2, s.readUshort(e, t), t += 2;
            var c = l >>> 8;
            if (0 != (c &= 15)) throw "unknown kern table format: " + c;
            t = Xe.kern.readFormat0(e, t, i);
        }
        return i;
    }, Xe.kern.readFormat0 = function(e, t, n) {
        var a = Xe._bin, s = -1, o = a.readUshort(e, t);
        t += 2, a.readUshort(e, t), t += 2, a.readUshort(e, t), t += 2, a.readUshort(e, t), 
        t += 2;
        for (var i = 0; i < o; i++) {
            var r = a.readUshort(e, t);
            t += 2;
            var l = a.readUshort(e, t);
            t += 2;
            var c = a.readShort(e, t);
            t += 2, r != s && (n.glyph1.push(r), n.rval.push({
                glyph2: [],
                vals: []
            }));
            var p = n.rval[n.rval.length - 1];
            p.glyph2.push(l), p.vals.push(c), s = r;
        }
        return t;
    }, Xe.loca = {}, Xe.loca.parse = function(e, t, n, a) {
        var s = Xe._bin, o = [], i = a.head.indexToLocFormat, r = a.maxp.numGlyphs + 1;
        if (0 == i) for (var l = 0; l < r; l++) o.push(s.readUshort(e, t + (l << 1)) << 1);
        if (1 == i) for (l = 0; l < r; l++) o.push(s.readUint(e, t + (l << 2)));
        return o;
    }, Xe.maxp = {}, Xe.maxp.parse = function(e, t, n) {
        var a = Xe._bin, s = {}, o = a.readUint(e, t);
        return t += 4, s.numGlyphs = a.readUshort(e, t), t += 2, 65536 == o && (s.maxPoints = a.readUshort(e, t), 
        t += 2, s.maxContours = a.readUshort(e, t), t += 2, s.maxCompositePoints = a.readUshort(e, t), 
        t += 2, s.maxCompositeContours = a.readUshort(e, t), t += 2, s.maxZones = a.readUshort(e, t), 
        t += 2, s.maxTwilightPoints = a.readUshort(e, t), t += 2, s.maxStorage = a.readUshort(e, t), 
        t += 2, s.maxFunctionDefs = a.readUshort(e, t), t += 2, s.maxInstructionDefs = a.readUshort(e, t), 
        t += 2, s.maxStackElements = a.readUshort(e, t), t += 2, s.maxSizeOfInstructions = a.readUshort(e, t), 
        t += 2, s.maxComponentElements = a.readUshort(e, t), t += 2, s.maxComponentDepth = a.readUshort(e, t), 
        t += 2), s;
    }, Xe.name = {}, Xe.name.parse = function(e, t, n) {
        var a = Xe._bin, s = {};
        a.readUshort(e, t), t += 2;
        var o = a.readUshort(e, t);
        t += 2, a.readUshort(e, t);
        for (var i, r = t += 2, l = 0; l < o; l++) {
            var c = a.readUshort(e, t);
            t += 2;
            var p = a.readUshort(e, t);
            t += 2;
            var u = a.readUshort(e, t);
            t += 2;
            var d = a.readUshort(e, t);
            t += 2;
            n = a.readUshort(e, t);
            t += 2;
            var h = a.readUshort(e, t);
            t += 2;
            var m = "p" + c;
            null == s[m] && (s[m] = {});
            var f, g = [ "copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette" ][d], y = r + 12 * o + h;
            if (0 == c) f = a.readUnicode(e, y, n / 2); else if (3 == c && 0 == p) f = a.readUnicode(e, y, n / 2); else if (0 == p) f = a.readASCII(e, y, n); else if (1 == p) f = a.readUnicode(e, y, n / 2); else if (3 == p) f = a.readUnicode(e, y, n / 2); else {
                if (1 != c) throw "unknown encoding " + p + ", platformID: " + c;
                f = a.readASCII(e, y, n), console.log("reading unknown MAC encoding " + p + " as ASCII");
            }
            s[m][g] = f, s[m]._lang = u;
        }
        for (var w in s) if (null != s[w].postScriptName && 1033 == s[w]._lang) return s[w];
        for (var w in s) if (null != s[w].postScriptName && 3084 == s[w]._lang) return s[w];
        for (var w in s) if (null != s[w].postScriptName) return s[w];
        for (var w in s) {
            i = w;
            break;
        }
        return console.log("returning name table with languageID " + s[i]._lang), s[i];
    }, Xe["OS/2"] = {}, Xe["OS/2"].parse = function(e, t, n) {
        var a = Xe._bin.readUshort(e, t);
        t += 2;
        var s = {};
        if (0 == a) Xe["OS/2"].version0(e, t, s); else if (1 == a) Xe["OS/2"].version1(e, t, s); else if (2 == a || 3 == a || 4 == a) Xe["OS/2"].version2(e, t, s); else {
            if (5 != a) throw "unknown OS/2 table version: " + a;
            Xe["OS/2"].version5(e, t, s);
        }
        return s;
    }, Xe["OS/2"].version0 = function(e, t, n) {
        var a = Xe._bin;
        return n.xAvgCharWidth = a.readShort(e, t), t += 2, n.usWeightClass = a.readUshort(e, t), 
        t += 2, n.usWidthClass = a.readUshort(e, t), t += 2, n.fsType = a.readUshort(e, t), 
        t += 2, n.ySubscriptXSize = a.readShort(e, t), t += 2, n.ySubscriptYSize = a.readShort(e, t), 
        t += 2, n.ySubscriptXOffset = a.readShort(e, t), t += 2, n.ySubscriptYOffset = a.readShort(e, t), 
        t += 2, n.ySuperscriptXSize = a.readShort(e, t), t += 2, n.ySuperscriptYSize = a.readShort(e, t), 
        t += 2, n.ySuperscriptXOffset = a.readShort(e, t), t += 2, n.ySuperscriptYOffset = a.readShort(e, t), 
        t += 2, n.yStrikeoutSize = a.readShort(e, t), t += 2, n.yStrikeoutPosition = a.readShort(e, t), 
        t += 2, n.sFamilyClass = a.readShort(e, t), t += 2, n.panose = a.readBytes(e, t, 10), 
        t += 10, n.ulUnicodeRange1 = a.readUint(e, t), t += 4, n.ulUnicodeRange2 = a.readUint(e, t), 
        t += 4, n.ulUnicodeRange3 = a.readUint(e, t), t += 4, n.ulUnicodeRange4 = a.readUint(e, t), 
        t += 4, n.achVendID = [ a.readInt8(e, t), a.readInt8(e, t + 1), a.readInt8(e, t + 2), a.readInt8(e, t + 3) ], 
        t += 4, n.fsSelection = a.readUshort(e, t), t += 2, n.usFirstCharIndex = a.readUshort(e, t), 
        t += 2, n.usLastCharIndex = a.readUshort(e, t), t += 2, n.sTypoAscender = a.readShort(e, t), 
        t += 2, n.sTypoDescender = a.readShort(e, t), t += 2, n.sTypoLineGap = a.readShort(e, t), 
        t += 2, n.usWinAscent = a.readUshort(e, t), t += 2, n.usWinDescent = a.readUshort(e, t), 
        t += 2;
    }, Xe["OS/2"].version1 = function(e, t, n) {
        var a = Xe._bin;
        return t = Xe["OS/2"].version0(e, t, n), n.ulCodePageRange1 = a.readUint(e, t), 
        t += 4, n.ulCodePageRange2 = a.readUint(e, t), t += 4;
    }, Xe["OS/2"].version2 = function(e, t, n) {
        var a = Xe._bin;
        return t = Xe["OS/2"].version1(e, t, n), n.sxHeight = a.readShort(e, t), t += 2, 
        n.sCapHeight = a.readShort(e, t), t += 2, n.usDefault = a.readUshort(e, t), t += 2, 
        n.usBreak = a.readUshort(e, t), t += 2, n.usMaxContext = a.readUshort(e, t), t += 2;
    }, Xe["OS/2"].version5 = function(e, t, n) {
        var a = Xe._bin;
        return t = Xe["OS/2"].version2(e, t, n), n.usLowerOpticalPointSize = a.readUshort(e, t), 
        t += 2, n.usUpperOpticalPointSize = a.readUshort(e, t), t += 2;
    }, Xe.post = {}, Xe.post.parse = function(e, t, n) {
        var a = Xe._bin, s = {};
        return s.version = a.readFixed(e, t), t += 4, s.italicAngle = a.readFixed(e, t), 
        t += 4, s.underlinePosition = a.readShort(e, t), t += 2, s.underlineThickness = a.readShort(e, t), 
        t += 2, s;
    }, Xe.SVG = {}, Xe.SVG.parse = function(e, t, n) {
        var a = Xe._bin, s = {
            entries: []
        }, o = t;
        a.readUshort(e, t), t += 2;
        var i = a.readUint(e, t);
        t += 4, a.readUint(e, t), t += 4, t = i + o;
        var r = a.readUshort(e, t);
        t += 2;
        for (var l = 0; l < r; l++) {
            var c = a.readUshort(e, t);
            t += 2;
            var p = a.readUshort(e, t);
            t += 2;
            var u = a.readUint(e, t);
            t += 4;
            var d = a.readUint(e, t);
            t += 4;
            for (var h = new Uint8Array(e.buffer, o + u + i, d), m = a.readUTF8(h, 0, h.length), f = c; f <= p; f++) s.entries[f] = m;
        }
        return s;
    }, Xe.SVG.toPath = function(e) {
        var t = {
            cmds: [],
            crds: []
        };
        if (null == e) return t;
        for (var n = (new DOMParser).parseFromString(e, "image/svg+xml").firstChild; "svg" != n.tagName; ) n = n.nextSibling;
        var a = n.getAttribute("viewBox");
        a = a ? a.trim().split(" ").map(parseFloat) : [ 0, 0, 1e3, 1e3 ], Xe.SVG._toPath(n.children, t);
        for (var s = 0; s < t.crds.length; s += 2) {
            var o = t.crds[s], i = t.crds[s + 1];
            o -= a[0], i = -(i -= a[1]), t.crds[s] = o, t.crds[s + 1] = i;
        }
        return t;
    }, Xe.SVG._toPath = function(e, t, n) {
        for (var a = 0; a < e.length; a++) {
            var s = e[a], o = s.tagName, i = s.getAttribute("fill");
            if (null == i && (i = n), "g" == o) Xe.SVG._toPath(s.children, t, i); else if ("path" == o) {
                t.cmds.push(i || "#000000");
                var r = s.getAttribute("d"), l = Xe.SVG._tokens(r);
                Xe.SVG._toksToPath(l, t), t.cmds.push("X");
            } else "defs" == o || console.log(o, s);
        }
    }, Xe.SVG._tokens = function(e) {
        for (var t = [], n = 0, a = !1, s = ""; n < e.length; ) {
            var o = e.charCodeAt(n), i = e.charAt(n);
            n++;
            var r = 48 <= o && o <= 57 || "." == i || "-" == i;
            a ? "-" == i ? (t.push(parseFloat(s)), s = i) : r ? s += i : (t.push(parseFloat(s)), 
            "," != i && " " != i && t.push(i), a = !1) : r ? (s = i, a = !0) : "," != i && " " != i && t.push(i);
        }
        return a && t.push(parseFloat(s)), t;
    }, Xe.SVG._toksToPath = function(e, t) {
        for (var n = 0, a = 0, s = 0, o = 0, i = 0, r = {
            M: 2,
            L: 2,
            H: 1,
            V: 1,
            S: 4,
            C: 6
        }, l = t.cmds, c = t.crds; n < e.length; ) {
            var p = e[n];
            if (n++, "z" == p) l.push("Z"), a = o, s = i; else for (var u = p.toUpperCase(), d = r[u], h = Xe.SVG._reps(e, n, d), m = 0; m < h; m++) {
                var f = 0, g = 0;
                if (p != u && (f = a, g = s), "M" == u) a = f + e[n++], s = g + e[n++], l.push("M"), 
                c.push(a, s), o = a, i = s; else if ("L" == u) a = f + e[n++], s = g + e[n++], l.push("L"), 
                c.push(a, s); else if ("H" == u) a = f + e[n++], l.push("L"), c.push(a, s); else if ("V" == u) s = g + e[n++], 
                l.push("L"), c.push(a, s); else if ("C" == u) {
                    var y = f + e[n++], w = g + e[n++], v = f + e[n++], b = g + e[n++], x = f + e[n++], _ = g + e[n++];
                    l.push("C"), c.push(y, w, v, b, x, _), a = x, s = _;
                } else if ("S" == u) {
                    var k = Math.max(c.length - 4, 0);
                    y = a + a - c[k], w = s + s - c[k + 1], v = f + e[n++], b = g + e[n++], x = f + e[n++], 
                    _ = g + e[n++];
                    l.push("C"), c.push(y, w, v, b, x, _), a = x, s = _;
                } else console.log("Unknown SVG command " + p);
            }
        }
    }, Xe.SVG._reps = function(e, t, n) {
        for (var a = t; a < e.length && "string" != typeof e[a]; ) a += n;
        return (a - t) / n;
    }, null == Xe && (Xe = {}), null == Xe.U && (Xe.U = {}), Xe.U.codeToGlyph = function(e, t) {
        var n = e.cmap, a = -1;
        if (null != n.p0e4 ? a = n.p0e4 : null != n.p3e1 ? a = n.p3e1 : null != n.p1e0 && (a = n.p1e0), 
        -1 == a) throw "no familiar platform and encoding!";
        var s = n.tables[a];
        if (0 == s.format) return t >= s.map.length ? 0 : s.map[t];
        if (4 == s.format) {
            for (var o = -1, i = 0; i < s.endCount.length; i++) if (t <= s.endCount[i]) {
                o = i;
                break;
            }
            if (-1 == o) return 0;
            if (s.startCount[o] > t) return 0;
            return 65535 & (0 != s.idRangeOffset[o] ? s.glyphIdArray[t - s.startCount[o] + (s.idRangeOffset[o] >> 1) - (s.idRangeOffset.length - o)] : t + s.idDelta[o]);
        }
        if (12 == s.format) {
            if (t > s.groups[s.groups.length - 1][1]) return 0;
            for (i = 0; i < s.groups.length; i++) {
                var r = s.groups[i];
                if (r[0] <= t && t <= r[1]) return r[2] + (t - r[0]);
            }
            return 0;
        }
        throw "unknown cmap table format " + s.format;
    }, Xe.U.glyphToPath = function(e, t) {
        var n = {
            cmds: [],
            crds: []
        };
        if (e.SVG && e.SVG.entries[t]) {
            var a = e.SVG.entries[t];
            return null == a ? n : ("string" == typeof a && (a = Xe.SVG.toPath(a), e.SVG.entries[t] = a), 
            a);
        }
        if (e.CFF) {
            var s = {
                x: 0,
                y: 0,
                stack: [],
                nStems: 0,
                haveWidth: !1,
                width: e.CFF.Private ? e.CFF.Private.defaultWidthX : 0,
                open: !1
            };
            Xe.U._drawCFF(e.CFF.CharStrings[t], s, e.CFF, n);
        } else e.glyf && Xe.U._drawGlyf(t, e, n);
        return n;
    }, Xe.U._drawGlyf = function(e, t, n) {
        var a = t.glyf[e];
        null == a && (a = t.glyf[e] = Xe.glyf._parseGlyf(t, e)), null != a && (a.noc > -1 ? Xe.U._simpleGlyph(a, n) : Xe.U._compoGlyph(a, t, n));
    }, Xe.U._simpleGlyph = function(e, t) {
        for (var n = 0; n < e.noc; n++) {
            for (var a = 0 == n ? 0 : e.endPts[n - 1] + 1, s = e.endPts[n], o = a; o <= s; o++) {
                var i = o == a ? s : o - 1, r = o == s ? a : o + 1, l = 1 & e.flags[o], c = 1 & e.flags[i], p = 1 & e.flags[r], u = e.xs[o], d = e.ys[o];
                if (o == a) if (l) {
                    if (!c) {
                        Xe.U.P.moveTo(t, u, d);
                        continue;
                    }
                    Xe.U.P.moveTo(t, e.xs[i], e.ys[i]);
                } else c ? Xe.U.P.moveTo(t, e.xs[i], e.ys[i]) : Xe.U.P.moveTo(t, (e.xs[i] + u) / 2, (e.ys[i] + d) / 2);
                l ? c && Xe.U.P.lineTo(t, u, d) : p ? Xe.U.P.qcurveTo(t, u, d, e.xs[r], e.ys[r]) : Xe.U.P.qcurveTo(t, u, d, (u + e.xs[r]) / 2, (d + e.ys[r]) / 2);
            }
            Xe.U.P.closePath(t);
        }
    }, Xe.U._compoGlyph = function(e, t, n) {
        for (var a = 0; a < e.parts.length; a++) {
            var s = {
                cmds: [],
                crds: []
            }, o = e.parts[a];
            Xe.U._drawGlyf(o.glyphIndex, t, s);
            for (var i = o.m, r = 0; r < s.crds.length; r += 2) {
                var l = s.crds[r], c = s.crds[r + 1];
                n.crds.push(l * i.a + c * i.b + i.tx), n.crds.push(l * i.c + c * i.d + i.ty);
            }
            for (r = 0; r < s.cmds.length; r++) n.cmds.push(s.cmds[r]);
        }
    }, Xe.U._getGlyphClass = function(e, t) {
        var n = Xe._lctf.getInterval(t, e);
        return -1 == n ? 0 : t[n + 2];
    }, Xe.U.getPairAdjustment = function(e, t, n) {
        if (e.GPOS) {
            for (var a = null, s = 0; s < e.GPOS.featureList.length; s++) {
                var o = e.GPOS.featureList[s];
                if ("kern" == o.tag) for (var i = 0; i < o.tab.length; i++) 2 == e.GPOS.lookupList[o.tab[i]].ltype && (a = e.GPOS.lookupList[o.tab[i]]);
            }
            if (a) for (s = 0; s < a.tabs.length; s++) {
                var r = a.tabs[s], l = Xe._lctf.coverageIndex(r.coverage, t);
                if (-1 != l) {
                    if (1 == r.format) {
                        var c = r.pairsets[l];
                        for (i = 0; i < c.length; i++) c[i].gid2 == n && (d = c[i]);
                        if (null == d) continue;
                    } else if (2 == r.format) var p = Xe.U._getGlyphClass(t, r.classDef1), u = Xe.U._getGlyphClass(n, r.classDef2), d = r.matrix[p][u];
                    return d.val1[2];
                }
            }
        }
        if (e.kern) {
            var h = e.kern.glyph1.indexOf(t);
            if (-1 != h) {
                var m = e.kern.rval[h].glyph2.indexOf(n);
                if (-1 != m) return e.kern.rval[h].vals[m];
            }
        }
        return 0;
    }, Xe.U.stringToGlyphs = function(e, t) {
        for (var n = [], a = 0; a < t.length; a++) {
            var s = t.codePointAt(a);
            s > 65535 && a++, n.push(Xe.U.codeToGlyph(e, s));
        }
        var o = e.GSUB;
        if (null == o) return n;
        for (var i = o.lookupList, r = o.featureList, l = '\n\t" ,.:;!?()  \u060c', c = "\u0622\u0623\u0624\u0625\u0627\u0629\u062f\u0630\u0631\u0632\u0648\u0671\u0672\u0673\u0675\u0676\u0677\u0688\u0689\u068a\u068b\u068c\u068d\u068e\u068f\u0690\u0691\u0692\u0693\u0694\u0695\u0696\u0697\u0698\u0699\u06c0\u06c3\u06c4\u06c5\u06c6\u06c7\u06c8\u06c9\u06ca\u06cb\u06cd\u06cf\u06d2\u06d3\u06d5\u06ee\u06ef\u0710\u0715\u0716\u0717\u0718\u0719\u071e\u0728\u072a\u072c\u072f\u074d\u0759\u075a\u075b\u076b\u076c\u0771\u0773\u0774\u0778\u0779\u0840\u0846\u0847\u0849\u0854\u0867\u0869\u086a\u08aa\u08ab\u08ac\u08ae\u08b1\u08b2\u08b9\u0ac5\u0ac7\u0ac9\u0aca\u0ace\u0acf\u0ad0\u0ad1\u0ad2\u0add\u0ae1\u0ae4\u0aef\u0b81\u0b83\u0b84\u0b85\u0b89\u0b8c\u0b8e\u0b8f\u0b91\u0ba9\u0baa\u0bab\u0bac", p = 0; p < n.length; p++) {
            var u = n[p], d = 0 == p || -1 != l.indexOf(t[p - 1]), h = p == n.length - 1 || -1 != l.indexOf(t[p + 1]);
            d || -1 == c.indexOf(t[p - 1]) || (d = !0), h || -1 == c.indexOf(t[p]) || (h = !0), 
            h || -1 == "\ua872\u0acd\u0ad7".indexOf(t[p + 1]) || (h = !0), d || -1 == "\ua872\u0acd\u0ad7".indexOf(t[p]) || (d = !0);
            var m = null;
            m = d ? h ? "isol" : "init" : h ? "fina" : "medi";
            for (var f = 0; f < r.length; f++) if (r[f].tag == m) for (var g = 0; g < r[f].tab.length; g++) {
                1 == (b = i[r[f].tab[g]]).ltype && Xe.U._applyType1(n, p, b);
            }
        }
        var y = [ "rlig", "liga", "mset" ];
        for (p = 0; p < n.length; p++) {
            u = n[p];
            var w = Math.min(3, n.length - p - 1);
            for (f = 0; f < r.length; f++) {
                var v = r[f];
                if (-1 != y.indexOf(v.tag)) for (g = 0; g < v.tab.length; g++) for (var b = i[v.tab[g]], x = 0; x < b.tabs.length; x++) if (null != b.tabs[x]) {
                    var _ = Xe._lctf.coverageIndex(b.tabs[x].coverage, u);
                    if (-1 != _) if (4 == b.ltype) for (var k = b.tabs[x].vals[_], q = 0; q < k.length; q++) {
                        var C = k[q], T = C.chain.length;
                        if (!(T > w)) {
                            for (var A = !0, S = 0; S < T; S++) C.chain[S] != n[p + (1 + S)] && (A = !1);
                            if (A) {
                                n[p] = C.nglyph;
                                for (S = 0; S < T; S++) n[p + S + 1] = -1;
                            }
                        }
                    } else if (5 == b.ltype) {
                        var U = b.tabs[x];
                        if (2 != U.fmt) continue;
                        var H = Xe._lctf.getInterval(U.cDef, u), E = U.cDef[H + 2], $ = U.scset[E];
                        for (a = 0; a < $.length; a++) {
                            var I = $[a], j = I.input;
                            if (!(j.length > w)) {
                                for (A = !0, S = 0; S < j.length; S++) {
                                    var z = Xe._lctf.getInterval(U.cDef, n[p + 1 + S]);
                                    if (-1 == H && U.cDef[z + 2] != j[S]) {
                                        A = !1;
                                        break;
                                    }
                                }
                                if (A) {
                                    var O = I.substLookupRecords;
                                    for (q = 0; q < O.length; q += 2) O[q], O[q + 1];
                                }
                            }
                        }
                    }
                }
            }
        }
        return n;
    }, Xe.U._applyType1 = function(e, t, n) {
        for (var a = e[t], s = 0; s < n.tabs.length; s++) {
            var o = n.tabs[s], i = Xe._lctf.coverageIndex(o.coverage, a);
            -1 != i && (1 == o.fmt ? e[t] = e[t] + o.delta : e[t] = o.newg[i]);
        }
    }, Xe.U.glyphsToPath = function(e, t, n) {
        for (var a = {
            cmds: [],
            crds: []
        }, s = 0, o = 0; o < t.length; o++) {
            var i = t[o];
            if (-1 != i) {
                for (var r = o < t.length - 1 && -1 != t[o + 1] ? t[o + 1] : 0, l = Xe.U.glyphToPath(e, i), c = 0; c < l.crds.length; c += 2) a.crds.push(l.crds[c] + s), 
                a.crds.push(l.crds[c + 1]);
                n && a.cmds.push(n);
                for (c = 0; c < l.cmds.length; c++) a.cmds.push(l.cmds[c]);
                n && a.cmds.push("X"), s += e.hmtx.aWidth[i], o < t.length - 1 && (s += Xe.U.getPairAdjustment(e, i, r));
            }
        }
        return a;
    }, Xe.U.pathToSVG = function(e, t) {
        null == t && (t = 5);
        for (var n = [], a = 0, s = {
            M: 2,
            L: 2,
            Q: 4,
            C: 6
        }, o = 0; o < e.cmds.length; o++) {
            var i = e.cmds[o], r = a + (s[i] ? s[i] : 0);
            for (n.push(i); a < r; ) {
                var l = e.crds[a++];
                n.push(parseFloat(l.toFixed(t)) + (a == r ? "" : " "));
            }
        }
        return n.join("");
    }, Xe.U.pathToContext = function(e, t) {
        for (var n = 0, a = e.crds, s = 0; s < e.cmds.length; s++) {
            var o = e.cmds[s];
            "M" == o ? (t.moveTo(a[n], a[n + 1]), n += 2) : "L" == o ? (t.lineTo(a[n], a[n + 1]), 
            n += 2) : "C" == o ? (t.bezierCurveTo(a[n], a[n + 1], a[n + 2], a[n + 3], a[n + 4], a[n + 5]), 
            n += 6) : "Q" == o ? (t.quadraticCurveTo(a[n], a[n + 1], a[n + 2], a[n + 3]), n += 4) : "#" == o.charAt(0) ? (t.beginPath(), 
            t.fillStyle = o) : "Z" == o ? t.closePath() : "X" == o && t.fill();
        }
    }, Xe.U.P = {}, Xe.U.P.moveTo = function(e, t, n) {
        e.cmds.push("M"), e.crds.push(t, n);
    }, Xe.U.P.lineTo = function(e, t, n) {
        e.cmds.push("L"), e.crds.push(t, n);
    }, Xe.U.P.curveTo = function(e, t, n, a, s, o, i) {
        e.cmds.push("C"), e.crds.push(t, n, a, s, o, i);
    }, Xe.U.P.qcurveTo = function(e, t, n, a, s) {
        e.cmds.push("Q"), e.crds.push(t, n, a, s);
    }, Xe.U.P.closePath = function(e) {
        e.cmds.push("Z");
    }, Xe.U._drawCFF = function(e, t, n, a) {
        for (var s = t.stack, o = t.nStems, i = t.haveWidth, r = t.width, l = t.open, c = 0, p = t.x, u = t.y, d = 0, h = 0, m = 0, f = 0, g = 0, y = 0, w = 0, v = 0, b = 0, x = 0, _ = {
            val: 0,
            size: 0
        }; c < e.length; ) {
            Xe.CFF.getCharString(e, c, _);
            var k = _.val;
            if (c += _.size, "o1" == k || "o18" == k) s.length % 2 != 0 && !i && (r = s.shift() + n.Private.nominalWidthX), 
            o += s.length >> 1, s.length = 0, i = !0; else if ("o3" == k || "o23" == k) {
                s.length % 2 != 0 && !i && (r = s.shift() + n.Private.nominalWidthX), o += s.length >> 1, 
                s.length = 0, i = !0;
            } else if ("o4" == k) s.length > 1 && !i && (r = s.shift() + n.Private.nominalWidthX, 
            i = !0), l && Xe.U.P.closePath(a), u += s.pop(), Xe.U.P.moveTo(a, p, u), l = !0; else if ("o5" == k) for (;s.length > 0; ) p += s.shift(), 
            u += s.shift(), Xe.U.P.lineTo(a, p, u); else if ("o6" == k || "o7" == k) for (var q = s.length, C = "o6" == k, T = 0; T < q; T++) {
                var A = s.shift();
                C ? p += A : u += A, C = !C, Xe.U.P.lineTo(a, p, u);
            } else if ("o8" == k || "o24" == k) {
                q = s.length;
                for (var S = 0; S + 6 <= q; ) d = p + s.shift(), h = u + s.shift(), m = d + s.shift(), 
                f = h + s.shift(), p = m + s.shift(), u = f + s.shift(), Xe.U.P.curveTo(a, d, h, m, f, p, u), 
                S += 6;
                "o24" == k && (p += s.shift(), u += s.shift(), Xe.U.P.lineTo(a, p, u));
            } else {
                if ("o11" == k) break;
                if ("o1234" == k || "o1235" == k || "o1236" == k || "o1237" == k) "o1234" == k && (h = u, 
                m = (d = p + s.shift()) + s.shift(), x = f = h + s.shift(), y = f, v = u, p = (w = (g = (b = m + s.shift()) + s.shift()) + s.shift()) + s.shift(), 
                Xe.U.P.curveTo(a, d, h, m, f, b, x), Xe.U.P.curveTo(a, g, y, w, v, p, u)), "o1235" == k && (d = p + s.shift(), 
                h = u + s.shift(), m = d + s.shift(), f = h + s.shift(), b = m + s.shift(), x = f + s.shift(), 
                g = b + s.shift(), y = x + s.shift(), w = g + s.shift(), v = y + s.shift(), p = w + s.shift(), 
                u = v + s.shift(), s.shift(), Xe.U.P.curveTo(a, d, h, m, f, b, x), Xe.U.P.curveTo(a, g, y, w, v, p, u)), 
                "o1236" == k && (d = p + s.shift(), h = u + s.shift(), m = d + s.shift(), x = f = h + s.shift(), 
                y = f, w = (g = (b = m + s.shift()) + s.shift()) + s.shift(), v = y + s.shift(), 
                p = w + s.shift(), Xe.U.P.curveTo(a, d, h, m, f, b, x), Xe.U.P.curveTo(a, g, y, w, v, p, u)), 
                "o1237" == k && (d = p + s.shift(), h = u + s.shift(), m = d + s.shift(), f = h + s.shift(), 
                b = m + s.shift(), x = f + s.shift(), g = b + s.shift(), y = x + s.shift(), w = g + s.shift(), 
                v = y + s.shift(), Math.abs(w - p) > Math.abs(v - u) ? p = w + s.shift() : u = v + s.shift(), 
                Xe.U.P.curveTo(a, d, h, m, f, b, x), Xe.U.P.curveTo(a, g, y, w, v, p, u)); else if ("o14" == k) {
                    if (s.length > 0 && !i && (r = s.shift() + n.nominalWidthX, i = !0), 4 == s.length) {
                        var U = s.shift(), H = s.shift(), E = s.shift(), $ = s.shift(), I = Xe.CFF.glyphBySE(n, E), j = Xe.CFF.glyphBySE(n, $);
                        Xe.U._drawCFF(n.CharStrings[I], t, n, a), t.x = U, t.y = H, Xe.U._drawCFF(n.CharStrings[j], t, n, a);
                    }
                    l && (Xe.U.P.closePath(a), l = !1);
                } else if ("o19" == k || "o20" == k) {
                    s.length % 2 != 0 && !i && (r = s.shift() + n.Private.nominalWidthX), o += s.length >> 1, 
                    s.length = 0, i = !0, c += o + 7 >> 3;
                } else if ("o21" == k) s.length > 2 && !i && (r = s.shift() + n.Private.nominalWidthX, 
                i = !0), u += s.pop(), p += s.pop(), l && Xe.U.P.closePath(a), Xe.U.P.moveTo(a, p, u), 
                l = !0; else if ("o22" == k) s.length > 1 && !i && (r = s.shift() + n.Private.nominalWidthX, 
                i = !0), p += s.pop(), l && Xe.U.P.closePath(a), Xe.U.P.moveTo(a, p, u), l = !0; else if ("o25" == k) {
                    for (;s.length > 6; ) p += s.shift(), u += s.shift(), Xe.U.P.lineTo(a, p, u);
                    d = p + s.shift(), h = u + s.shift(), m = d + s.shift(), f = h + s.shift(), p = m + s.shift(), 
                    u = f + s.shift(), Xe.U.P.curveTo(a, d, h, m, f, p, u);
                } else if ("o26" == k) for (s.length % 2 && (p += s.shift()); s.length > 0; ) d = p, 
                h = u + s.shift(), p = m = d + s.shift(), u = (f = h + s.shift()) + s.shift(), Xe.U.P.curveTo(a, d, h, m, f, p, u); else if ("o27" == k) for (s.length % 2 && (u += s.shift()); s.length > 0; ) h = u, 
                m = (d = p + s.shift()) + s.shift(), f = h + s.shift(), p = m + s.shift(), u = f, 
                Xe.U.P.curveTo(a, d, h, m, f, p, u); else if ("o10" == k || "o29" == k) {
                    var z = "o10" == k ? n.Private : n;
                    if (0 == s.length) console.log("error: empty stack"); else {
                        var O = s.pop(), F = z.Subrs[O + z.Bias];
                        t.x = p, t.y = u, t.nStems = o, t.haveWidth = i, t.width = r, t.open = l, Xe.U._drawCFF(F, t, n, a), 
                        p = t.x, u = t.y, o = t.nStems, i = t.haveWidth, r = t.width, l = t.open;
                    }
                } else if ("o30" == k || "o31" == k) {
                    var L = s.length, P = (S = 0, "o31" == k);
                    for (S += L - (q = -3 & L); S < q; ) P ? (h = u, m = (d = p + s.shift()) + s.shift(), 
                    u = (f = h + s.shift()) + s.shift(), q - S == 5 ? (p = m + s.shift(), S++) : p = m, 
                    P = !1) : (d = p, h = u + s.shift(), m = d + s.shift(), f = h + s.shift(), p = m + s.shift(), 
                    q - S == 5 ? (u = f + s.shift(), S++) : u = f, P = !0), Xe.U.P.curveTo(a, d, h, m, f, p, u), 
                    S += 4;
                } else {
                    if ("o" == (k + "").charAt(0)) throw console.log("Unknown operation: " + k, e), 
                    k;
                    s.push(k);
                }
            }
        }
        t.x = p, t.y = u, t.nStems = o, t.haveWidth = i, t.width = r, t.open = l;
    };

    const Ze = getDefaultExportFromCjs(Xe), decode = async () => {
        var e;
        const t = je.document.querySelectorAll("style");
        let n = null;
        if (t.forEach((e => {
            var t;
            -1 !== (null == (t = e.textContent) ? void 0 : t.indexOf("font-cxsecret")) && (n = e);
        })), !n) return !0;
        const a = null == (e = n.textContent) ? void 0 : e.match(/base64,([\w\W]+?)'/);
        if (!a) return;
        const s = base64ToUint8Array(a[1]), o = Ze.parse(s);
        let i = await ttfDownload1("https://www.forestpolice.org/ttf/2.0/table.json") || await ttfDownload1("https://jsd.vxo.im/gh/chengbianruan/staticfile/c.json") || await ttfDownload1("https://cdn.jsdelivr.net/gh/chengbianruan/staticfile/c.json");
        if (!i) return !1;
        let r = {};
        for (let l = 19968; l < 40870; l++) {
            let e = Ze.U.codeToGlyph(o, l);
            e && (e = Ze.U.glyphToPath(o, e), e = somd5(JSON.stringify(e)).slice(24), r[l] = i[e]);
        }
        return je.document.querySelectorAll(".font-cxsecret").forEach((e => {
            let t = e.innerHTML;
            Object.keys(r).forEach((e => {
                const n = new RegExp(String.fromCharCode(e), "g");
                t = t.replace(n, String.fromCharCode(r[e]));
            })), e.innerHTML = t, e.classList.remove("font-cxsecret");
        })), !0;
    }, base64ToUint8Array = e => {
        const t = atob(e), n = new Uint8Array(t.length);
        for (let a = 0; a < t.length; a++) n[a] = t.charCodeAt(a);
        return n;
    }, et = [ {
        type: "save",
        name: "\u5b66\u4e60\u901a\u8003\u8bd5\u65b0\u7248\u6536\u5f55",
        match: () => location.href.includes("work/view") || location.href.includes("test/reVersionPaperMarkContentNew"),
        question: {
            html: ".questionLi",
            question: "h3.mark_name",
            options: "ul.mark_letter.colorDeep > li",
            type: ".colorShallow",
            workType: "zj",
            pageType: "cx"
        },
        answerHook: e => {
            let t = removeHtml(J(e.html).find('span[class="colorShallow"]').html());
            if ("" === t) return null;
            let n = t.match(/^\((.+?)\)/);
            if (null === n) return null;
            e.type = n[1].split(",")[0], e.question = titleClean(e.question.split(t)[1].trim()).trim(), 
            e.options = removeStartChar(e.options);
            const a = J(e.html).find(".mark_score>.totalScore>i").text(), s = t.match(/(\d+(\.\d+)?)/);
            let o, i = J(e.html).find(".marking_dui").length > 0 || Number(a) == ((null == s ? void 0 : s[0]) || 0) && 0 != Number(a), r = typeMatch(t);
            if (0 == Number(a) && !i && "3" == r) return null;
            if (!i) switch (r) {
              case "0":
              case "1":
              case "3":
                0 != Number(a) && (i = !0);
            }
            switch (console.log(t, "quesType", r), r) {
              case "0":
              case "1":
                e.type = r, e.answer = J(e.html).find(".mark_answer>div>span.colorGreen:eq(0)").text().replace("\u6b63\u786e\u7b54\u6848:", "").trim().split("").map((t => e.options[t.charCodeAt(0) - 65])), 
                e.answer = e.answer.filter((e => "" !== e)), 0 === e.answer.length && i && (e.answer = J(e.html).find(".mark_answer>div>span.colorDeep:eq(0)").text().replace("\u6211\u7684\u7b54\u6848:", "").trim().split("").map((t => e.options[t.charCodeAt(0) - 65])), 
                e.answer = e.answer.filter((e => "" !== e)));
                break;

              case "3":
                if (e.type = "3", e.options = [], e.answer = judgeAnswer(J(e.html).find(".mark_answer>div>span.colorGreen:eq(0)").text().replace("\u6b63\u786e\u7b54\u6848", "")), 
                e.answer, 0 === e.answer.length) {
                    if (o = removeHtml(J(e.html).find(".mark_answer>div>span.colorDeep:eq(0)").html()), 
                    e.answer = judgeAnswer(o), 0 === e.answer.length) return null;
                    i || (e.answer = "\u6b63\u786e" === e.answer[0] ? [ "\u9519\u8bef" ] : [ "\u6b63\u786e" ]);
                }
                break;

              case "4":
                if (e.type = "4", e.answer = removeHtml(J(e.html).find(".mark_answer>div>.colorGreen:eq(0)").html()).replace("\u6b63\u786e\u7b54\u6848\uff1a", "").trim(), 
                e.answer.length < 10) return null;
                e.answer = [ e.answer ];
                break;

              case "5":
                if (e.type = "5", e.answer = removeHtml(J(e.html).find(".mark_answer>div>.colorGreen:eq(0)").html()).replace("\u6b63\u786e\u7b54\u6848\uff1a", "").trim(), 
                e.answer.length < 10) return null;
                e.answer = [ e.answer ];
                break;

              case "7":
                if (e.type = "7", e.answer = removeHtml(J(e.html).find(".mark_answer>div>.colorGreen:eq(0)").html()).replace("\u6b63\u786e\u7b54\u6848\uff1a", "").trim(), 
                e.answer.length < 10) return null;
                e.answer = [ e.answer ];
                break;

              case "6":
                if (e.type = "6", e.answer = removeHtml(J(e.html).find(".mark_answer>div>.colorGreen:eq(0)").html()).replace("\u6b63\u786e\u7b54\u6848\uff1a", "").trim(), 
                e.answer.length < 10) return null;
                e.answer = [ e.answer ];
                break;

              case "2":
                if (e.type = "2", e.answer = J(e.html).find(".mark_answer>div>.colorGreen:eq(0)>dd").map(((e, t) => removeHtml(J(t).html()).replace(`(${e + 1})`, "").trim())).get(), 
                0 == e.answer.length) {
                    const t = J(e.html).find(".mark_answer>div>.colorDeep:eq(0)>dd").map(((e, t) => removeHtml(J(t).html()).replace(`(${e + 1})`, "").trim())).get();
                    J(e.html).find(".mark_answer>div>.colorDeep:eq(0)>dd>.marking_dui").length == t.length && (e.answer = t);
                }
                break;

              default:
                return null;
            }
            return e;
        },
        paper: async e => {
            const t = {
                platform: "cx"
            }, n = J("#courseId").val(), a = (je.document.body.innerHTML.match(/(?:examId|relationId)=(\d+)/) || [])[1] || "", s = `https://mobilelearn.chaoxing.com/v2/apis/class/getClassDetail?courseId=${n}&classId=${J("#classId").val()}`;
            await request(s, "GET").then((e => {
                const n = JSON.parse(e[0].responseText).data.course.data[0];
                t.name = n.name, t.info = {}, t.info.imageurl = n.imageurl;
            })), t.hash = n, t.info = {}, t.chapter = [ {
                hash: `${a}`,
                name: J(".mark_title").text().trim(),
                question: e
            } ], Ye.setPaper(t.hash, t);
        }
    }, {
        type: "hook",
        name: "hook",
        match: location.href.includes("work/selectWorkQuestionYiPiYue") && location.href.includes("mooc2=0"),
        main: e => {
            location.href.includes("mooc2=0") ? je.location.href = location.href.replace("mooc2=0", "mooc2=1") : je.location.href = location.href + "&mooc2=1";
        }
    }, {
        type: "save",
        name: "\u5b66\u4e60\u901a\u4f5c\u4e1a\u6536\u5f55\u65b0",
        match: () => location.href.includes("work/selectWorkQuestionYiPiYue") && location.href.includes("mooc2=1"),
        question: {
            html: ".TiMu",
            question: ".Zy_TItle .clearfix",
            options: "ul.Zy_ulTop li",
            type: ".newZy_TItle",
            workType: "zj",
            pageType: "cx"
        },
        answerHook: e => {
            e.type = J(e.html).find(".newZy_TItle").text().replace(/\u3010|\u3011/g, "").trim();
            let t, n = J(e.html).find(".marking_dui").length > 0;
            switch (removeHtml(J(e.html).find(".Py_addpy:eq(0)").html()), e.question = titleClean(e.question).trim(), 
            e.type) {
              case "\u5355\u9009\u9898":
              case "\u591a\u9009\u9898":
                e.type = "\u5355\u9009\u9898" === e.type ? "0" : "1", e.options = J(e.html).find("ul.Zy_ulTop li").map(((e, t) => {
                    let n = J(t).find("i.fl").text().trim(), a = removeHtml(J(t).html());
                    return "" === n ? a.trim() : a.split(n)[1].trim();
                })).get(), e.answer = J(e.html).find(".correctAnswer >.fl.answerCon").text().trim().split("").map((t => e.options[t.charCodeAt(0) - 65])), 
                0 === e.answer.length && n && (e.answer = J(e.html).find(".myAnswer > .fl.answerCon").text().trim().split("").map((t => e.options[t.charCodeAt(0) - 65])));
                break;

              case "\u5224\u65ad\u9898":
                if (e.type = "3", e.answer = J(e.html).find(".correctAnswer > .fl.answerCon").text().trim().split("").map((e => e.includes("\u6b63\u786e") || e.includes("\u5bf9") || e.includes("\u221a") ? "\u6b63\u786e" : e.includes("\u9519\u8bef") || e.includes("\u9519") || e.includes("\xd7") ? "\u9519\u8bef" : null)).filter((e => null !== e)), 
                0 === e.answer.length) {
                    t = removeHtml(J(e.html).find(".fl.answerCon").html());
                    let [n, a] = [ ".marking_dui", ".marking_cuo" ].map((t => J(e.html).find(t).length));
                    if (n + a === 0) return null;
                    if (t.includes("\u6b63\u786e") || t.includes("\u5bf9") || t.includes("\u221a")) e.answer = [ "\u6b63\u786e" ]; else {
                        if (!(t.includes("\u9519\u8bef") || t.includes("\u9519") || t.includes("\xd7"))) return null;
                        e.answer = [ "\u9519\u8bef" ];
                    }
                    0 === n && 0 !== a && (e.answer = "\u6b63\u786e" === e.answer[0] ? "\u9519\u8bef" : "\u6b63\u786e");
                }
                break;

              case "\u586b\u7a7a\u9898":
                e.type = "2", e.answer = J(e.html).find(".correctAnswerBx>.correctAnswer>p:not(.clear)").map(((e, t) => removeHtml(J(t).html()).replace(`(${e + 1})`, "").trim())).get().filter((e => "" !== e)), 
                0 == e.answer.length && (e.answer = J(e.html).find(".myAllAnswerBx>.myAnswerBx>.myAnswer").map(((e, t) => removeHtml(J(t).html()).replace(/\u7b2c[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\u7a7a\uff1a/, "").trim())).get(), 
                e.answer.length !== J(e.html).find(".marking_dui").length && (e.answer = []));
                break;

              case "\u5206\u5f55\u9898":
                if (e.type = "9", e.answer = J(e.html).find(".correctAnswerBx>.correctAnswer>p:not(.clear)").map(((e, t) => removeHtml(J(t).html()))).get().filter((e => "" !== e)), 
                e.answer.length != J(e.html).find(".CorrectOrNot").length) {
                    if (J(e.html).find(".marking_cuo").length > 0) return null;
                    if (e.answer = J(e.html).find(".myAnswerBx>.myAnswer>p:not(.clear)").map(((e, t) => removeHtml(J(t).html()))).get().filter((e => "" !== e)), 
                    e.answer.length != J(e.html).find(".CorrectOrNot").length) return null;
                }
                e.answer;
                break;

              case "\u8fde\u7ebf\u9898":
                e.type = "11";
                let a = J(e.html).find("ul.firstUlList>li:not(.groupTitile)").map(((e, t) => {
                    let n = J(t).clone();
                    return n.find(".fl").remove(), removeHtml(n.html());
                })).get(), s = J(e.html).find("ul.secondUlList>li:not(.groupTitile)").map(((e, t) => {
                    let n = J(t).clone();
                    return n.find(".fl").remove(), removeHtml(n.html());
                })).get();
                t = J(e.html).find(".correctAnswer >.fl.answerCon >.collectAnswer").map(((e, t) => removeHtml(J(t).text()))).get(), 
                e.options = [ a, s ];
                let o = {};
                t.forEach((e => {
                    let [t, n] = e.split("-");
                    t.charCodeAt(0) >= 65 ? t = (t.charCodeAt(0) - 65).toString() : /^\d+$/.test(t) && (t = (parseInt(t) - 1).toString()), 
                    n.charCodeAt(0) >= 65 ? n = (n.charCodeAt(0) - 65).toString() : /^\d+$/.test(n) && (n = (parseInt(n) - 1).toString()), 
                    o[a[t]] = s[n];
                })), e.answer = o, e.answer;
                break;

              default:
                return e.type, null;
            }
            return e;
        },
        paper: async e => {
            const t = {
                platform: "cx"
            }, n = je.courseId, a = je.jobid, s = `https://mobilelearn.chaoxing.com/v2/apis/class/getClassDetail?courseId=${n}&classId=${je.classId}`;
            await request(s, "GET").then((e => {
                const n = JSON.parse(e[0].responseText).data.course.data[0];
                t.name = n.name, t.info = {}, t.info.imageurl = n.imageurl;
            })), t.hash = n, t.info = {}, t.chapter = [ {
                hash: `${a}`,
                name: J(".ceyan_name>h3").text().trim(),
                question: e
            } ], Ye.setPaper(t.hash, t);
        }
    }, {
        type: "ask",
        name: "\u5b66\u4e60\u901a\u65b0\u7248\u4f5c\u4e1a",
        match: /\/mooc2\/work\/dowork/i.test(location.pathname),
        types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9" ],
        question: {
            html: ".questionLi",
            question: "h3",
            options: "ul:eq(0) li .after, .answer_p",
            type: "input[name^=answertype]:eq(0)",
            workType: "zy",
            pageType: "cx"
        },
        questionHook: e => {
            const t = removeHtml(J(e.html).find(".colorShallow").html());
            return e.question = titleClean(e.question.split(t)[1].trim()).trim(), e.$options = J(e.html).find(".answerBg"), 
            e;
        },
        setAnswerHook: e => {
            qc(e.html), qc1(e.html);
        }
    }, {
        type: "ask",
        name: "\u5b66\u4e60\u901a\u65b0\u7248\u8003\u8bd5",
        match: /exam\/preview/i.test(location.pathname) || /exam\/test\/reVersionTestStartNew/i.test(location.pathname),
        types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9" ],
        question: {
            html: ".questionLi",
            question: "h3",
            options: "ul:eq(0) li .after, .answer_p",
            type: "input[name^=type]:not([name=type])",
            workType: "ks",
            pageType: "cx"
        },
        questionHook: e => {
            const t = removeHtml(J(e.html).find(".colorShallow").html());
            if (e.question = titleClean(e.question.split(t)[1].trim()).trim(), e.$options = J(e.html).find(".answerBg"), 
            "3" === e.type) e.options = [];
            return e;
        },
        setAnswerHook: e => {
            qc(e.html), qc1(e.html);
        },
        next: () => {
            J('.nextDiv .jb_btn:contains("\u4e0b\u4e00\u9898")').click();
        }
    }, {
        type: "ask",
        name: "\u5b66\u4e60\u901a\u65e7\u7248\u4f5c\u4e1a",
        match: /work\/doHomeWorkNew/i.test(location.pathname) && 0 == location.href.includes("mooc2=1"),
        types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9" ],
        init: async () => {
            if (!(await decode())) return msg("\u9875\u9762\u89e3\u5bc6\u5931\u8d25\uff0c\u65e0\u6cd5\u7b54\u9898\uff0c\u8bf7\u5c1d\u8bd5\u5207\u6362\u7f51\u7edc\u6216\u53cd\u9988\u7ed9\u4f5c\u8005\u5427", "error"), 
            !1;
        },
        question: {
            html: ".TiMu",
            question: ".clearfix.fontLabel",
            options: "ul:eq(0) li .after",
            type: "input[name^=answertype]:eq(0), .answer_p",
            workType: "zy",
            pageType: "cx"
        },
        questionHook: e => {
            switch (e.question = titleClean(e.question).trim(), e.$options = J(e.html).find(".fl.before"), 
            e.type) {
              case "3":
                e.options = J(e.html).find("ul:eq(0) li").map(((e, t) => J(t).find(".ri").length > 0 ? "\u6b63\u786e" : J(t).find(".wr").length > 0 ? "\u9519\u8bef" : isTrue(J(t).attr("aria-label") || "") ? "\u6b63\u786e" : isFalse(J(t).attr("aria-label") || "") ? "\u9519\u8bef" : void 0)).get(), 
                e.$options = J(e.html).find("ul>li");
                break;

              case "11":
                let t = J(e.html).find("ul.firstUlList>li:not(.groupTitile)").map(((e, t) => {
                    let n = J(t).clone();
                    return n.find(".fl").remove(), removeHtml(n.html());
                })).get(), n = J(e.html).find("ul.secondUlList>li:not(.groupTitile)").map(((e, t) => {
                    let n = J(t).clone();
                    return n.find(".fl").remove(), removeHtml(n.html());
                })).get();
                e.options = [ t, n ], e.$options = J(e.html).find("ul.thirdUlList>li:not(.groupTitile)");
            }
            return e;
        },
        setAnswerHook: e => {
            qc(e.html), qc1(e.html);
        },
        setAnswer: e => {
            switch (e.type) {
              case "11":
                return e.ques.$options.each(((t, n) => {
                    let a = e.ques.options[0], s = e.ques.options[1], o = e.answer[a[t]], i = s.indexOf(o);
                    o = String.fromCharCode(i + 65), J(n).find("select>option").each(((e, t) => {
                        J(t).val(), J(t).val() == o && J(t).prop("selected", !0);
                    }));
                })), e.answer, !1;

              case "3":
                let t = e.answer;
                return e.ques.$options.each(((e, n) => {
                    isTrue(t) && (isTrue(removeHtml(J(n).html())) || J(n).find(".ri").length > 0) && J(n).find("input").click(), 
                    isFalse(t) && (isFalse(removeHtml(J(n).html())) || J(n).find(".wr").length > 0) && J(n).find("input").click();
                })), !1;

              default:
                return !0;
            }
        }
    }, {
        type: "ask",
        name: "\u5b66\u4e60\u901a\u65b0\u7248\u7ae0\u8282",
        match: /work\/doHomeWorkNew/i.test(location.pathname) && location.href.includes("mooc2=1"),
        types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9" ],
        init: async () => {
            if (!(await decode())) return msg("\u9875\u9762\u89e3\u5bc6\u5931\u8d25\uff0c\u65e0\u6cd5\u7b54\u9898\uff0c\u8bf7\u5c1d\u8bd5\u5207\u6362\u7f51\u7edc\u6216\u53cd\u9988\u7ed9\u4f5c\u8005\u5427", "error"), 
            !1;
        },
        question: {
            html: ".TiMu",
            question: ".clearfix.fontLabel",
            options: "ul:eq(0) li .after, .answer_p",
            type: "input[name^=answertype]:eq(0)",
            workType: "zj",
            pageType: "cx"
        },
        questionHook: e => {
            switch (e.question = titleClean(e.question).trim(), e.type) {
              case "3":
                e.options = J(e.html).find("ul:eq(0) li").map(((e, t) => "true" === J(t).find(".num_option").attr("data") ? "\u6b63\u786e" : "false" === J(t).find(".num_option").attr("data") ? "\u9519\u8bef" : void 0)).get(), 
                e.options = [];
                break;

              case "11":
                let t = J(e.html).find("ul.firstUlList>li:not(.groupTitile)").map(((e, t) => {
                    let n = J(t).clone();
                    return n.find(".fl").remove(), removeHtml(n.html());
                })).get(), n = J(e.html).find("ul.secondUlList>li:not(.groupTitile)").map(((e, t) => {
                    let n = J(t).clone();
                    return n.find(".fl").remove(), removeHtml(n.html());
                })).get();
                e.options = [ t, n ], e.$options = J(e.html).find("ul.thirdUlList>li:not(.groupTitile)");
                break;

              default:
                e.type;
            }
            return e;
        },
        setAnswerHook: e => {
            qc(e.html), qc1(e.html);
        },
        setAnswer: e => (e.ques.options, "11" !== e.type || (e.ques.$options.each(((t, n) => {
            let a = e.ques.options[0], s = e.ques.options[1], o = e.answer[a[t]], i = s.indexOf(o);
            o = String.fromCharCode(i + 65), je.$(n).find(".dept_select").chosen().val(o).trigger("chosen:updated");
        })), e.answer, !1))
    } ], tt = [ {
        type: "ask",
        name: "\u667a\u6167\u6811\u7ae0\u8282",
        tips: "\u667a\u6167\u6811\u5fc5\u987b\u5f00\u81ea\u52a8\u8df3\u8f6c\uff0c\u5426\u5219\u7b54\u6848\u53ef\u80fd\u65e0\u6cd5\u4fdd\u5b58\u5bfc\u81f4\u4f4e\u5206\uff01",
        match: location.href.includes("zhihuishu.com") && !location.href.includes("checkHomework") && location.host.includes("zhihuishu") && ("/stuExamWeb.html" === location.pathname || location.href.includes("/webExamList/dohomework/") || location.href.includes("/webExamList/doexamination/")),
        types: [ "0", "1", "2", "3" ],
        question: {
            html: ".examPaper_box > div:eq(1) >div:not(.examPaper_partTit)",
            question: ".subject_describe.dynamic-fonts:eq(0) div:eq(0)",
            options: ".subject_node .nodeLab .label.clearfix .node_detail",
            type: ".subject_type span:first-child",
            workType: "zhs",
            pageType: "zhs"
        },
        init: async () => {
            await waitUntil((function() {
                return !J(".yidun_popup").hasClass("yidun_popup--light") && je.zhsques;
            }));
        },
        next: () => {
            J(".switch-btn-box button:eq(1)").click();
        },
        questionHook: (e, t) => {
            const n = je.zhsques.examBase.workExamParts.map((e => e.questionDtos)).flat()[t];
            return e.type = typeConvert(n.questionType.name), e.question = removeHtml(n.name), 
            e.options = n.questionOptions ? n.questionOptions.map((e => removeHtml(e.content))) : [], 
            "3" == e.type && (e.options = []), e;
        }
    }, {
        type: "save",
        name: "\u667a\u6167\u6811\u4f5c\u4e1a\u6536\u5f55",
        match: location.href.includes("zhihuishu.com") && location.href.includes("checkHomework") && location.host.includes("zhihuishu") && ("/stuExamWeb.html" === location.pathname || location.href.includes("/webExamList/checkHomework/")),
        question: {
            html: ".questionType",
            question: ".subject_describe",
            options: ".examquestions-answer",
            type: ".newZy_TItle",
            workType: "zhs",
            pageType: "zhs"
        },
        init: async () => {
            await waitUntil((function() {
                return J(".questionType").length > 0 && je.zhsques && je.zhsimgAnswer;
            }));
        },
        answerHook: e => {
            let t = J(e.html).find(".examPaper_subject").attr("data-questionid");
            const n = je.zhsimgAnswer;
            let a = je.zhsques.examBase.workExamParts.map((e => e.questionDtos)).flat().find((e => e.id == t));
            return a.answer = n[a.id], e.question = removeHtml(a.name), e.type = typeConvert(a.questionType.name), 
            e.options = a.questionOptions.map((e => removeHtml(e.content))), e.answer = a.answer.split("").map((t => e.options[t.charCodeAt(0) - 65])), 
            "3" == e.type && (e.options = [], e.answer = isTrue(e.answer[0]) ? [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? [ "\u9519\u8bef" ] : []), 
            e;
        }
    } ], nt = [ {
        type: "hook",
        name: "\u82af\u4f4d\u6559\u80b2hook",
        match: "www.beeline-ai.com" === location.host,
        main: async e => {
            const getPageIdentifier = () => J(".el-main > div:eq(0)").attr("class");
            je.mainClass = getPageIdentifier();
            const t = new MutationObserver((async e => {
                const n = getPageIdentifier();
                je.mainClass !== n && (je.mainClass = n, "homework-detail-container" === n && await waitUntil((() => 0 === J(".el-loading-mask").length)), 
                vuePageChange$1(), t.disconnect());
                for (const a of e) if ("attributes" === a.type && "class" === a.attributeName) {
                    const e = a.target.textContent;
                    if (e && (e.includes("\u4e0b\u4e00\u9898") || e.includes("\u4e0a\u4e00\u9898"))) {
                        vuePageChange$1(), t.disconnect();
                        break;
                    }
                }
            }));
            J("body").length >= 1 && t.observe(J("body")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u82af\u4f4d\u6559\u80b2\u4f5c\u4e1a",
        tips: "\u82af\u4f4d\u6559\u80b2\u4ec5\u652f\u6301\u9009\u62e9\u5224\u65ad\uff0c\u5176\u4ed6\u9898\u578b\u5f85\u9002\u914d",
        match: () => "www.beeline-ai.com" === location.host && (/student\/#\/courseInfo\/[A-Za-z0-9]+\/homework/i.test(location.href) || /student\/#\/courseInfo\/[A-Za-z0-9]+\/exam/i.test(location.href)),
        types: [ "0", "1", "3" ],
        question: {
            html: ".content-area > div.content",
            question: ".content",
            options: ".el-radio-group label .label,.el-checkbox-group label .label",
            type: ".question-box .tag",
            workType: "xinwei",
            pageType: "xinwei"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".question-box").length;
            }));
        },
        next: () => {
            J('.toggle-box > button:contains("\u4e0b\u4e00\u9898")').click();
        },
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => (e.type = typeMatch(J(e.html).find(".question-box>.tag").text()), 
        e)
    }, {
        type: "save",
        name: "\u82af\u4f4d\u6559\u80b2\u6536\u5f55",
        match: () => "www.beeline-ai.com" === location.host && location.href.includes("/homeworkDetailPage"),
        question: {
            html: ".question-content-body",
            question: ".topic-title",
            options: ".el-radio-group label .label,.el-checkbox-group label .label",
            type: ".question-box .tag",
            workType: "xinwei",
            pageType: "xinwei"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".question-content-body").length;
            }));
        },
        answerHook: e => {
            e.type = typeMatch(J(e.html).find(".question-box>.tag").text());
            let t = J(e.html).find(".answer-area > span:eq(1)").text();
            switch (e.type) {
              case "0":
              case "1":
                let n = t.split(",");
                if (e.answer = n.map((t => e.options[t.charCodeAt(0) - 65])), 0 === e.answer.length) return;
                break;

              case "3":
                "T" == t && (e.answer = [ "\u6b63\u786e" ]), "F" == t && (e.answer = [ "\u9519\u8bef" ]);
            }
            return e;
        }
    } ], at = [ {
        type: "hook",
        name: "\u667a\u666e\u6e05\u8a00token\u83b7\u53d6",
        match: /chatglm.cn\/main\//i.test(location.href),
        main: e => {
            const t = e.app, n = document.cookie.split(";");
            let a = "";
            n.forEach((e => {
                /chatglm_refresh_token/i.test(e) && (a = e.split("=")[1]);
            })), a && (t.app.gpt.forEach((e => {
                "GLM" === e.name && (e.key = a);
            })), t.setConfig(t.app), msg("\u667a\u666e\u6e05\u8a00token\u83b7\u53d6\u6210\u529f"));
        }
    }, {
        type: "hook",
        name: "\u8baf\u98de\u661f\u706btoken\u83b7\u53d6",
        match: /xinghuo.xfyun.cn\/desk/i.test(location.href),
        main: e => {
            const t = e.app, n = document.cookie.split(";");
            let a = "";
            n.forEach((e => {
                /ssoSessionId/i.test(e) && (a = e.split("=")[1]);
            })), a && (t.app.gpt.forEach((e => {
                "spark" === e.name && (e.key = a);
            })), t.setConfig(t.app), msg("\u8baf\u98de\u661f\u706btoken\u83b7\u53d6\u6210\u529f"));
        }
    } ], st = {
        single_selection: "\u5355\u9009\u9898",
        multiple_selection: "\u591a\u9009\u9898",
        true_or_false: "\u5224\u65ad\u9898",
        fill_in_blank: "\u586b\u7a7a\u9898",
        short_answer: "\u7b80\u7b54\u9898",
        text: "\u6587\u672c",
        analysis: "\u7efc\u5408\u9898",
        matching: "\u5339\u914d\u9898",
        random: "\u968f\u673a\u9898",
        cloze: "\u5b8c\u5f62\u586b\u7a7a\u9898"
    }, ot = [ {
        type: "hook",
        name: "\u56fd\u5f00hook",
        match: location.host.includes("ouchn.cn"),
        main: e => {
            je.mainClass = getUrl();
            let t = new MutationObserver((async e => {
                je.mainClass !== getUrl() && (je.mainClass = getUrl(), "homework-detail-container" === je.mainClass && await waitUntil((function() {
                    return 0 !== J(".selectDan").length;
                })), vuePageChange$1(), t.disconnect());
            }));
            J("body").length >= 1 && t.observe(J("body")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "save",
        name: "\u56fd\u5f00\u7b54\u6848\u6536\u5f55\u65e7",
        match: /\/exam\/([0-9]+)\/subjects#\/submission\/([0-9]+)/i.test(location.href),
        question: {
            html: "li.subject",
            question: ".summary-title .subject-description",
            options: ".subject-options li .option-content",
            type: ".subject-point > span:eq(0)",
            workType: "guokai",
            pageType: "guokai"
        },
        init: async () => {
            await waitUntil((function() {
                return J(".loading-gif").hasClass("ng-hide");
            }));
        },
        answerHook: e => {
            const t = je.angular.element(e.html).scope().subject;
            if ("text" === t.type) return;
            let n = !1;
            const a = parseFloat(t.point), s = parseFloat(t.score), o = 0 !== a && a === s;
            let i = J(`<div>${t.description}</div>`).clone();
            if (i.find("span.__blank__").remove(), e.question = removeHtml(i.html()), e.options = t.options.map((e => removeHtml(e.content))), 
            e.type = typeConvert(st[t.type]), t.correctOptions && t.correctOptions.length > 0 && (e.answer = t.correctOptions.map((e => removeHtml(e.content))), 
            n = !0), t.correct_answers && t.correct_answers.length > 0 && (e.answer = t.correct_answers.map((e => e.content)), 
            n = !0), n || o) {
                switch (t.type) {
                  case "single_selection":
                  case "multiple_selection":
                  case "true_or_false":
                    if (n) "true_or_false" === t.type && (e.answer = judgeAnswer(e.answer[0]), e.options = []); else {
                        if (t.options, e.answer = t.options.filter((e => e.isChosen)).map((e => removeHtml(e.content))), 
                        0 === e.answer.length) return;
                        "true_or_false" === t.type && (e.answer = judgeAnswer(e.answer[0]), e.options = []);
                    }
                    break;

                  case "analysis":
                    break;

                  case "cloze":
                    t.sub_subjects, e.options = t.sub_subjects.map((e => e.options.map((e => removeHtml(e.content)))));
                    break;

                  case "fill_in_blank":
                    n || (e.answer = t.answers.map((e => e.content)));
                }
                return e;
            }
        },
        paper: e => {
            const t = je.globalData.course, n = je.angular.element(J("body")).scope(), a = je.angular.element(J(".hd")).scope().exam, s = n.submissionData.id;
            if (!n.examSubmissions.find((e => (e.id, String(e.id) === String(s))))) return;
            const o = {
                platform: "guokai"
            };
            o.hash = t.id, o.name = t.name, o.info = {}, o.info.school = t.orgName, o.chapter = [ {
                hash: `${a.id}`,
                name: a.title,
                question: e
            } ], Ye.setPaper(o.hash, o);
        }
    }, {
        type: "save",
        name: "\u5e7f\u5f00\u7b54\u6848\u6536\u5f55",
        match: /mod\/quiz\/review\.php/i.test(location.pathname),
        question: {
            html: ".que",
            question: ".qtext",
            options: ".answer > div",
            type: "",
            answer: ".rightanswer",
            workType: "ougd",
            pageType: "ougd"
        },
        init: async () => {
            J(".specificfeedback").remove();
        },
        next: async () => {
            !J(".qn_buttons > a").last().hasClass("thispage") && J(".arrow_text").click();
        },
        answerHook: e => {
            const t = J(e.html).find(".info .state").text();
            if (e.type = (J(e.html).attr("class") || "").split(" ")[1], J(e.html).find(".qtext .accesshide").remove(), 
            e.question = removeHtml(J(e.html).find(".qtext").html()), e.question.includes("egg")) {
                let t = J(e.html).clone();
                t.find("img").each((function() {
                    var e;
                    (null == (e = J(this).attr("src")) ? void 0 : e.includes("egg")) && J(this).remove();
                })), e.question = removeHtml(t.find(".qtext").html());
            }
            switch (e.type, e.type) {
              case "truefalse":
                e.type = "3", e.$options = J(e.html).find("input[type=radio]"), e.options = J(e.html).find(".answer > div").map(((e, t) => removeHtml(J(t).html()).trim())).get(), 
                e.answer = [], e.answer = J(e.html).find(".answer > div").map(((t, n) => e.$options.eq(t).prop("checked") ? e.options[t] : "")).get(), 
                e.answer = e.answer.filter((e => "" !== e)), 0 === e.answer.length ? (e.temp = removeHtml(J(e.html).find(".rightanswer").html()).replace("\u6b63\u786e\u7b54\u6848\u662f", "").trim(), 
                e.answer = [ e.temp ]) : t.includes("\u6b63\u786e") || (e.answer = e.options.filter((t => !t.includes(e.answer[0])))), 
                isTrue(e.answer[0]) ? e.answer = [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? e.answer = [ "\u9519\u8bef" ] : e.answer = [], 
                e.options = [];
                break;

              case "multichoice":
              case "multichoiceset":
                if (e.type = "1", e.$options = J(e.html).find("input[type=checkbox]"), 0 === e.$options.length && (e.type = "0", 
                e.$options = J(e.html).find("input[type=radio]")), e.options = J(e.html).find(".answer > div").map(((e, t) => {
                    let n = J(t).find(".answernumber").text().trim(), a = removeHtml(J(t).html());
                    return "" === n ? a.trim() : a.split(n)[1].trim();
                })).get(), t.includes("\u6b63\u786e") && !t.includes("\u90e8\u5206\u6b63\u786e")) e.answer = [], 
                e.answer = J(e.html).find(".answer > div").map(((t, n) => {
                    let a = J(n).find(".answernumber").text().trim(), s = removeHtml(J(n).html());
                    return e.$options.eq(t).prop("checked") && J(n).find(".text-success").length > 0 ? "" === a ? s.trim() : s.split(a)[1].trim() : "";
                })).get(), e.answer = e.answer.filter((e => "" !== e)); else {
                    e.temp = removeHtml(J(e.html).find(".rightanswer").html(), !1).replace("\u6b63\u786e\u7b54\u6848\u662f\uff1a", "").trim();
                    const t = e.options.slice(0);
                    t.sort(((e, t) => t.length - e.length)), e.answer = t.map((t => e.temp.includes(t) ? (e.temp = e.temp.replace(t, ""), 
                    t) : "")), e.answer = e.answer.filter((e => "" !== e)), e.answer.length;
                }
                break;

              case "shortanswer":
                e.type = "4", e.$options = J(e.html).find("input[type=text]"), e.answer = removeHtml(J(e.html).find(".rightanswer").html()).replace("\u6b63\u786e\u7b54\u6848\uff1a", "").trim();
                break;

              case "match":
                e.type = "24", e.match = J(".answer tr td.text").map(((e, t) => removeHtml(J(t).html()))).get(), 
                e.$options = J(".answer tr td.control select"), e.selects = J(".answer tr td.control select").map(((e, t) => [ J(t).find("option").map(((e, t) => ({
                    value: J(t).val(),
                    text: J(t).text()
                }))).get() ])).get();
                break;

              case "multianswer":
                e.type = "14";
                let n = J(e.html).find(".formulation").clone();
                n.find(".subquestion").remove(), n.find(".accesshide").remove(), e.question = removeHtml(n.html());
                let a = [], s = [];
                J(e.html).find(".subquestion").map(((e, t) => {
                    let n = J(t).find("select>option").map(((e, t) => removeHtml(J(t).html()))).get();
                    n = n.filter((e => "" !== e)), a.push(n);
                    let o = J(t).find("select>option:selected").map(((e, t) => removeHtml(J(t).html()))).get();
                    s.push(o[0]);
                })), e.options = a;
                J(e.html).find(".text-success").length == e.options.length && (e.answer = s);
                break;

              case "description":
                return;
            }
            return e;
        },
        paper: async e => {
            const t = {
                platform: "ougd"
            };
            t.hash = (je.document.body.innerHTML.match(/(?:courseid)=(\d+)/) || [])[1] || "";
            const n = (je.document.body.innerHTML.match(/(?:cmid)=(\d+)/) || [])[1] || "";
            "" !== t.hash && "" !== n && (t.info = {}, t.name = J("h1").text().trim(), t.chapter = [ {
                hash: `${n}`,
                name: je.document.title.trim(),
                question: e
            } ], Ye.setPaper(t.hash, t));
        }
    }, {
        type: "ask",
        name: "\u5e7f\u5f00\u5f62\u8003",
        tips: "\u5e7f\u5f00\u4ec5\u652f\u6301\u57fa\u7840\u9898\u578b\uff0c\u7279\u6b8a\u9898\u578b\u8bf7\u624b\u52a8\u5b8c\u6210",
        match: /mod\/quiz\/attempt\.php/i.test(location.pathname),
        types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9", "14", "24" ],
        question: {
            html: ".que",
            question: ".qtext",
            options: ".answer > div",
            type: "",
            workType: "ougd",
            pageType: "ougd"
        },
        ischecked: e => Boolean(e.prop("checked")),
        questionHook: e => {
            if (e.type = (J(e.html).attr("class") || "").split(" ")[1], J(e.html).find(".qtext .accesshide").remove(), 
            e.question = removeHtml(J(e.html).find(".qtext").html()), e.question.includes("egg")) {
                let t = J(e.html).clone();
                t.find("img").each((function() {
                    var e;
                    (null == (e = J(this).attr("src")) ? void 0 : e.includes("egg")) && J(this).remove();
                })), e.question = removeHtml(t.find(".qtext").html());
            }
            switch (e.type) {
              case "truefalse":
                e.type = "3", e.$options = J(e.html).find("input[type=radio]"), e.options = [];
                break;

              case "multichoice":
              case "multichoiceset":
                e.type = "1", e.$options = J(e.html).find("input[type=checkbox]"), 0 === e.$options.length && (e.type = "0", 
                e.$options = J(e.html).find("input[type=radio]")), e.options = J(e.html).find(".answer > div").map(((e, t) => {
                    let n = J(t).find(".answernumber").text().trim(), a = removeHtml(J(t).html());
                    return "" === n ? a.trim() : a.split(n)[1].trim();
                })).get();
                break;

              case "shortanswer":
                e.type = "4", e.$options = J(e.html).find("input[type=text]");
                break;

              case "match":
                e.type = "24", e.match = J(".answer tr td.text").map(((e, t) => removeHtml(J(t).html()))).get(), 
                e.$options = J(".answer tr td.control select"), e.selects = J(".answer tr td.control select").map(((e, t) => [ J(t).find("option").map(((e, t) => ({
                    value: J(t).val(),
                    text: J(t).text()
                }))).get() ])).get();

              case "essay":
                e.type = "4", e.$options = J(e.html).find("iframe");
                break;

              case "multianswer":
                e.type = "14";
                let t = J(e.html).find(".formulation").clone();
                t.find(".subquestion").remove(), t.find(".accesshide").remove(), e.question = removeHtml(t.html());
                let n = [];
                J(e.html).find(".subquestion").map(((e, t) => {
                    let a = J(t).find("select>option").map(((e, t) => removeHtml(J(t).html()))).get();
                    a = a.filter((e => "" !== e)), n.push(a), J(t).find("select>option:selected").map(((e, t) => removeHtml(J(t).html()))).get();
                })), e.$options = J(e.html).find("select"), e.options = n;
                break;

              case "description":
                return;
            }
            return e;
        },
        setAnswer: e => {
            switch (e.type) {
              case "4":
                return J(e.html).find("input.form-control").each((function(t, n) {
                    J(n).val(e.answer[t]);
                })), J(e.html).find("iframe:eq(0)").contents().find("body").html(e.answer[0]), !1;

              case "3":
                e.ques.$options.each(((t, n) => {
                    const a = J(n).parent().find("label").text();
                    return "object" == typeof e.answer && (e.answer = e.answer[0]), isTrue(e.answer) && isTrue(a) ? (J(n).click(), 
                    !1) : !isFalse(e.answer) || !isFalse(a) || (J(n).click(), !1);
                }));

              case "14":
                return J(e.html).find("select").each(((t, n) => {
                    const a = e.answer[t];
                    J(n).find(`option:contains("${a}")`).prop("selected", !0);
                })), !1;

              default:
                return !0;
            }
        },
        finish: e => {
            J(".submitbtns .btn-primary").click();
        }
    }, {
        type: "ask",
        name: "\u56fd\u5f00\u4e13\u9898\u6d4b\u9a8c",
        match: /\/exam\/([0-9]+)\/subjects/i.test(location.pathname) && !/\/exam\/([0-9]+)\/subjects#\/submission\/([0-9]+)/i.test(location.href),
        types: [ "0", "1", "2", "3", "4", "5", "6", "7", "9", "14", "24" ],
        question: {
            html: "li.subject",
            question: ".summary-title .subject-description",
            options: ".subject-options li .option-content",
            type: ".summary-sub-title span:eq(0)",
            workType: "guokai",
            pageType: "guokai"
        },
        init: async () => {
            await waitUntil((function() {
                return J(".loading-gif").hasClass("ng-hide") && "" === J(".hd .examinee .submit-label").eq(0).text();
            })), await waitUntil((function() {
                return 0 !== J("li.subject").length;
            }));
        },
        ischecked: e => Boolean(e.parent().find("input").eq(-1).prop("checked")),
        questionHook: e => {
            const t = je.angular.element(e.html).scope(), n = t.subject;
            if ("text" === n.type) return;
            e.type = typeConvert(st[n.type]);
            let a = J(`<div>${n.description}</div>`).clone();
            switch (a.find("span.__blank__").remove(), e.question = removeHtml(a.html()), n.options = n.options.sort(((e, t) => e.sort - t.sort)), 
            e.options = n.options.map((e => removeHtml(e.content))), e.type, n.type, n.type) {
              case "cloze":
                e.options = n.sub_subjects.map((e => e.options.map((e => removeHtml(e.content))))), 
                e.$options = J(e.html).find("select");

              case "true_or_false":
                e.options = [];
            }
            return e.subject = n, e.scope = t, e;
        },
        setAnswer: e => {
            switch (e.ques, e.type) {
              case "2":
                return J(e.html).find(".___answer"), J(e.html).find(".___answer").each(((t, n) => {
                    J(n).html(e.answer[t]), e.ques.scope.subject.answers[t].content = e.answer[t], e.ques.scope.onChangeSubmission(e.ques.subject);
                })), !1;

              case "4":
                return J(e.html).find(".simditor-body.needsclick>p").each((function(t, n) {
                    J(n).html(e.answer[t]), e.ques.subject.answered_content = e.answer[t];
                })), e.ques.scope.onChangeSubmission(e.ques.subject), !1;

              case "14":
                return e.ques.subject.sub_subjects.forEach(((t, n) => {
                    let a = e.answer[n];
                    t.options.forEach(((s, o) => {
                        s.content === a && (t.answeredOption = String(s.id), e.ques.scope.onChangeSubmission(t), 
                        J(e.html).find(`input[value="${s.id}"]`).click(), J(e.html).find(`button:eq(${n})>span:eq(1)`).text(a));
                    }));
                })), !1;
            }
            return !0;
        }
    }, {
        type: "save",
        name: "\u4e0a\u6d77\u5f00\u653e\u6536\u5f55",
        match: () => "l.shou.org.cn" === location.host && location.href.includes("assignment/history.aspx?homeWorkId"),
        question: {
            html: ".e-q-body",
            question: ".ErichText",
            options: "ul>li>.ErichText",
            type: ".question-box .tag",
            workType: "shou",
            pageType: "shou"
        },
        init: async () => {},
        answerHook: e => {
            e.$options = J(e.html).find("ul>li");
            let t = J(e.html).find("ul>li.checked").map(((e, t) => removeHtml(J(t).find(".ErichText").html() || J(t).html()))).get();
            const n = J(e.html).find(".e-q-right").length > 0;
            e.answer = t.filter((e => "" !== e));
            let a = J(e.html).find(".e-ans-ref .e-ans-r").map(((e, t) => removeHtml(J(t).html()))).get().map((t => {
                let n = t.charCodeAt() - 65;
                return e.options[n];
            })).filter((e => "" !== e && void 0 !== e));
            switch (e.options = removeStartChar(e.options), J(e.html).attr("data-questiontype")) {
              case "2":
                e.type = "1";
                break;

              case "1":
                e.type = "0";
                break;

              case "3":
                e.type = "3", e.answer = J(e.html).find("ul>li.checked").map(((e, t) => removeHtml(J(t).html()))).get(), 
                e.options = [], isTrue(e.answer[0]) ? e.answer = [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? e.answer = [ "\u9519\u8bef" ] : e.answer = [];
                break;

              case "8":
                e.type = "15";
                const t = J(e.html).find(".e-q-quest form").map(((e, t) => {
                    let n = removeHtml(J(t).find(".e-q-q .ErichText").html()), a = J(t).find("ul>li").map(((e, t) => removeHtml(J(t).find(".ErichText").html() || J(t).html()))).get(), s = "0";
                    a = removeStartChar(a);
                    const o = J(t).find(".e-a-right").length > 0, i = J(t).find(".e-ans-ref .e-ans-r").map(((e, t) => removeHtml(J(t).html()))).get();
                    let r = i.map((e => {
                        let t = e.charCodeAt() - 65;
                        return a[t];
                    })).filter((e => "" !== e && void 0 !== e));
                    if (2 === a.length && 1 === i.length) {
                        let e = judgeAnswer(i[0]);
                        e.length > 0 && (r = e, a = [], s = "3");
                    }
                    return r.length > 1 && (s = "1"), {
                        question: n,
                        options: a,
                        answer: r,
                        isT: o,
                        type: s
                    };
                })).get();
                if (t.some((e => !e.isT))) return;
                a = t.map((e => e.answer)).flat(), e.options = t.map((e => ({
                    question: e.question,
                    options: e.options,
                    type: e.type
                })));
                break;

              case "11":
                e.type = "19";
                const n = J(e.html).find("form").map(((e, t) => ({
                    type: "0",
                    question: removeHtml(J(t).find(".e-q-q .ErichText").html()),
                    options: J(t).find("ul li .ErichText").map(((e, t) => removeHtml(J(t).html()))).get()
                }))).get();
                a = a.length > 0 ? judgeAnswer(a[0]) : [], e.options = n;
                break;

              default:
                return void J(e.html).attr("data-questiontype");
            }
            return a.length > 0 ? (e.answer = a, e) : !n && "3" === e.type && e.answer.length > 0 || !n ? void 0 : e;
        },
        paper: async e => {
            const t = {
                platform: "shou"
            }, n = J("input[name=CourseOpenId]").val(), a = J("input[name=WorkId]").val();
            await request("https://l.shou.org.cn/student/CourseScoreNew-inside.aspx", "GET").then((e => {
                const a = J(e[0].responseText);
                t.name = a.find(`#courseSelect>option[data-xid="${n}"]`).text().trim(), t.info = {};
            })), t.hash = n, t.info = {}, t.chapter = [ {
                hash: `${a}`,
                name: J(".mark_title").text().trim(),
                question: e
            } ], Ye.setPaper(t.hash, t);
        }
    }, {
        type: "ask",
        name: "\u4e0a\u6d77\u5f00\u653e\u4f5c\u4e1a",
        tips: "",
        match: () => "l.shou.org.cn" === location.host && (location.href.includes("assignment/preview.aspx?homeWorkId") || location.href.includes("study/assignment/continuation.aspx")),
        types: [ "0", "1", "3" ],
        question: {
            html: ".e-q-body",
            question: ".ErichText",
            options: "ul>li>.ErichText",
            type: ".question-box .tag",
            workType: "shou",
            pageType: "shou"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".e-q-body").length;
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => {
            switch (J(e.html).attr("data-questiontype")) {
              case "2":
                e.type = "1";
                break;

              case "1":
                e.type = "0";
                break;

              case "3":
                e.type = "3", e.$options = J(e.html).find("ul>li");
                break;

              case "8":
                e.type = "15", e.quesList = J(e.html).find("form").map(((e, t) => ({
                    type: "0",
                    question: removeHtml(J(t).find(".e-q-q .ErichText").html()),
                    options: J(t).find("ul li .ErichText").map(((e, t) => removeHtml(J(t).html()))).get()
                }))).get();
                break;

              default:
                return void J(e.html).attr("data-questiontype");
            }
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    } ], it = [ {
        type: "ask",
        name: "\u6210\u6559\u4e91\u8003\u8bd5",
        tips: "",
        match: () => location.href.includes("student/exam/resource/paper_card"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".ui-question",
            question: ".ui-question-content-wrapper",
            options: ".ui-question-options li .ui-question-content-wrapper",
            type: ".ui-question-group-title",
            workType: "chengjiaoyun",
            pageType: "chengjiaoyun"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".ui-question");
            })), !je.top.location.href.includes("student/exam2/doexam")) return !1;
        },
        toquestion: e => {
            J(`.ui-card-questions ul li:eq(${e - 1})`).click();
        },
        next: async () => {
            J("#next-btn").click();
        },
        ischecked: e => e.hasClass("ui-option-selected"),
        questionHook: e => {
            let t = J(e.html).parent().find(".ui-question-group-title").text().split(".")[1].trim();
            switch (e.$options = J(e.html).find(".ui-question-options li>span"), t) {
              case "\u5355\u9009\u9898":
                e.type = "0";
                break;

              case "\u591a\u9009\u9898":
                e.type = "1";
                break;

              case "\u5224\u65ad\u9898":
                e.type = "3", e.options = [];
            }
            return e;
        },
        setAnswer: e => {
            if ("3" === e.type) {
                let t = e.answer;
                return e.ques.$options.each(((e, n) => {
                    isTrue(t) && isTrue(removeHtml(J(n).parent().html())) && J(n).click(), isFalse(t) && isFalse(removeHtml(J(n).parent().html())) && J(n).click();
                })), !1;
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "save",
        name: "\u6210\u6559\u4e91\u6536\u5f55",
        match: () => location.href.includes("student/exam/resource/paper_card"),
        question: {
            html: ".ui-question",
            question: ".ui-question-content-wrapper",
            options: ".ui-question-options li .ui-question-content-wrapper",
            type: ".ui-question-group-title",
            workType: "chengjiaoyun",
            pageType: "chengjiaoyun"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".ui-question");
            })), je.top.location.href.includes("student/exam2/doexam")) return !1;
        },
        answerHook: e => {
            let t = J(e.html).parent().find(".ui-question-group-title").text().split(".")[1].trim();
            switch (e.$options = J(e.html).find(".ui-question-options li>span"), e.answer = J(e.html).find(".ui-question-options li.ui-correct-answer .ui-question-content-wrapper").map(((e, t) => removeHtml(J(t).html()))).get(), 
            t) {
              case "\u5355\u9009\u9898":
                e.type = "0";
                break;

              case "\u591a\u9009\u9898":
                e.type = "1";
                break;

              case "\u5224\u65ad\u9898":
                e.type = "3", e.options = [], e.answer = isTrue(e.answer[0]) ? [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? [ "\u9519\u8bef" ] : [];
            }
            return e;
        }
    } ], rt = [ {
        type: "hook",
        name: "hook",
        match: () => "xuexi.jsou.cn" === location.host && location.href.includes("newHomework/showHomeworkByStatus") && location.href.includes("checked=true"),
        main: e => {
            je.mainClass = J("#homeworkHistory").find(".active").attr("id");
            let t = new MutationObserver((async e => {
                je.mainClass !== J("#homeworkHistory").find(".active").attr("id") && (je.mainClass = J("#homeworkHistory").find(".active").attr("id"), 
                await waitUntil((function() {
                    return 0 === J(".layui-layer-shade").length;
                })), vuePageChange$1(), t.disconnect());
                for (let n of e) "attributes" === n.type && "class" === n.attributeName && n.target.textContent && (n.target.textContent.includes("\u4e0b\u4e00\u9898") || n.target.textContent.includes("\u4e0a\u4e00\u9898")) && (t.disconnect(), 
                vuePageChange$1());
            }));
            J("body").length >= 1 && t.observe(J("body")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u6c5f\u82cf\u5f00\u653e\u5927\u5b66\u7b54\u9898",
        tips: "",
        match: () => "xuexi.jsou.cn" === location.host && location.href.includes("/showHomeworkByStatus") && location.href.includes("checked=false"),
        types: [ "0", "1", "2", "3" ],
        question: {
            html: ".insert",
            question: ".window-title",
            options: ".questionId-option li > div:not(.numberCover)",
            type: ".questionDiv >div:eq(0)",
            workType: "jsou",
            pageType: "jsou"
        },
        init: async () => {
            document.addEventListener("copy", (function(e) {
                e.stopImmediatePropagation(), layer.msg("\u590d\u5236\u6210\u529f", {
                    icon: 4
                }), e.clipboardData.setData("text/plain", window.getSelection().toString());
            })), document.addEventListener("paste", (() => {
                event.stopImmediatePropagation();
                let e = (event.clipboardData || window.clipboardData).getData("text");
                layer.msg("\u7c98\u8d34\u6210\u529f", {
                    icon: 4
                }), document.execCommand("insertText", !1, e);
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => (e.type = J(e.html).find(".questionDiv >div:eq(1)").text().trim(), 
        e.type = typeConvert(e.type), e.$options = J(e.html).find(".questionId-option li .numberCover"), 
        "3" == e.type && (e.options = []), e),
        setAnswer: e => {
            switch (e.type) {
              case "2":
                if (e.$options = J(e.html).find(".questionTitle input"), e.$options.length == e.answer.length) return e.$options.each(((t, n) => {
                    J(n).val(e.answer[t]);
                })), !1;
                break;

              case "3":
                let t = e.answer;
                return J(e.html).find(".questionId-option>.default-option").each(((e, n) => {
                    isTrue(t) && isTrue(removeHtml(J(n).find(".option-title>div:eq(1)").html())) && J(n).find("div.numberCover").click(), 
                    isFalse(t) && isFalse(removeHtml(J(n).find(".option-title>div:eq(1)").html())) && J(n).find("div.numberCover").click();
                })), !1;

              case "4":
                const n = J(e.html).find(".jianda-answer>div").attr("id");
                return je.UE.getEditor(`${n}`).setContent(e.answer), !1;
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "save",
        name: "\u6c5f\u82cf\u5f00\u653e\u5927\u5b66\u6536\u5f55",
        match: () => "xuexi.jsou.cn" === location.host && location.href.includes("newHomework/showHomeworkByStatus") && location.href.includes("checked=true"),
        question: {
            html: ".insert",
            question: ".window-title",
            options: "#questionId-option li > div:not(.numberCover)",
            type: ".questionDiv >div:eq(0)",
            workType: "jsou",
            pageType: "jsou"
        },
        init: async () => {},
        answerHook: e => {
            const t = J(e.html).find(".questionDiv >div").text(), n = t.match(/\u5206\u503c(\d+)\u5206/), a = t.match(/\u5f97\u5206\uff1a(\d+)/);
            if (!n || !a) return null;
            e.type = typeConvert(J(e.html).find(".questionDiv >div:eq(1)").text());
            if (!(n[1] === a[1] && "0" !== a[1]) && "3" !== e.type) return null;
            switch (e.type) {
              case "0":
              case "1":
              case "3":
                if (e.answer = J(e.html).find(".answer .correctAnswer").text().trim().split("\uff1b").map((t => e.options[t.charCodeAt(0) - 65])), 
                e.answer = e.answer.filter((e => e)), 0 == e.answer.length && (e.answer = J(e.html).find(".answer .studentAnswer").text().trim().split("\uff1b").map((t => e.options[t.charCodeAt(0) - 65]))), 
                e.answer = e.answer.filter((e => e)), 3 == e.type) {
                    e.options = [];
                    let t = e.answer[0];
                    if (isFalse(t)) e.answer = "\u9519\u8bef"; else {
                        if (!isTrue(t)) return;
                        e.answer = "\u6b63\u786e";
                    }
                }
                break;

              case "2":
                e.options = [], e.answer = J(e.html).find(".answer .correctAnswer").text().trim().split("\uff1b"), 
                e.answer = e.answer.filter((e => e)), 0 == e.answer.length && (e.answer = J(e.html).find(".answer .studentAnswer").text().trim().split("\uff1b")), 
                e.answer = e.answer.filter((e => e));
                break;

              default:
                return;
            }
            return e;
        },
        paper: e => {
            const t = je.homework, n = {
                platform: "jsou"
            };
            n.hash = t.courseId, n.name = t.courseName, n.info = {}, n.chapter = [ {
                hash: `${t.homeworkId}`,
                name: t.title,
                question: e
            } ], Ye.setPaper(n.hash, n);
        }
    } ], lt = [ {
        type: "hook",
        name: "hook",
        match: "spoc-exam.icve.com.cn" === location.host || location.host.includes("exam.courshare.cn") || location.host.includes("webtrn.cn"),
        main: e => {
            je.mainClass = J(".q_content").first().attr("id");
            let t = new MutationObserver((async e => {
                je.mainClass !== J(".q_content").first().attr("id") && (je.mainClass = J(".q_content").first().attr("id"), 
                "homework-detail-container" === je.mainClass && await waitUntil((function() {
                    return 0 !== J(".q_content").length;
                })), vuePageChange$1(), t.disconnect());
                for (let n of e) "attributes" === n.type && "class" === n.attributeName && n.target.textContent && (n.target.textContent.includes("\u4e0b\u4e00\u9898") || n.target.textContent.includes("\u4e0a\u4e00\u9898")) && (t.disconnect(), 
                vuePageChange$1());
            }));
            J("#examPage").length >= 1 && t.observe(J("#examPage")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "hook",
        name: "hook",
        match: "zjy2.icve.com.cn" === location.host || "zyk.icve.com.cn" === location.host || "ai.icve.com.cn" === location.host,
        main: e => {
            J(".minimized-dialog img").css({
                "z-index": "999999"
            }), je.mainClass = J("#app")[0].__vue__.$route.name;
            let t = new MutationObserver((async e => {
                je.mainClass !== J("#app")[0].__vue__.$route.name && (je.mainClass = J("#app")[0].__vue__.$route.name, 
                "homework-detail-container" === je.mainClass && await waitUntil((function() {
                    return 0 !== J(".q_content").length;
                })), vuePageChange$1(), t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u804c\u6559\u4e91\u4f5c\u4e1a",
        tips: "",
        match: () => location.href.includes("examflow_index.action"),
        types: [ "0", "2", "1", "3", "4" ],
        question: {
            html: ".q_content",
            question: ".divQuestionTitle",
            options: ".questionOptions > div",
            type: ".question-box .tag",
            workType: "zhijiaoyun",
            pageType: "zhijiaoyun"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".q_content").length;
            }));
        },
        next: () => {},
        finish: e => {
            J('.paging_next:contains("\u4e0b\u4e00\u9875")').click();
        },
        ischecked: e => 0 !== e.parent().find(".checkbox_on").length,
        questionHook: e => {
            var t, n;
            e.question = removeHtml(J(e.html).find(".divQuestionTitle").html());
            let a = J(e.html).find("[name='quesId']").attr("id"), s = null == (n = null == (t = document.getElementById(`questionId[${a}]`)) ? void 0 : t.getAttribute("answertype")) ? void 0 : n.trim(), o = J(e.html).find("span[name^='questionIndex']").text().trim() + "\u3001", i = J(e.html).find(".q_score").text().trim();
            switch (e.question = e.question.replace(o, "").replace(i, "").trim(), e.options = J(e.html).find(".questionOptions>div").map(((e, t) => {
                let n = J(t).find(".option_index").text().trim();
                return removeHtml(J(t).html()).replace(n, "").trim();
            })).get(), e.$options = J(e.html).find(".questionOptions>div input"), s) {
              case "\u5355\u9879\u9009\u62e9\u9898":
              case "\u5355\u9009\u9898":
              case "singlechoice":
                e.type = "0";
                break;

              case "\u591a\u9879\u9009\u62e9\u9898":
              case "\u591a\u9009\u9898":
              case "multichoice":
                e.type = "1";
                break;

              case "\u5224\u65ad\u9898":
              case "bijudgement":
                e.type = "3", e.options = [];
                break;

              case "fillblank":
                e.type = "2", e.question = removeHtml(J(e.html).find("[name='fillblankTitle']").html());
                break;

              case "cloze":
                e.type = "14", e.options = J(e.html).find(".questionOptions>.exam_cloze_choice").map(((e, t) => [ J(t).find(".optionContent").map(((e, t) => removeHtml(J(t).html()))).get() ])).get();
                break;

              case "textarea":
                e.type = "4", e.options = [];
            }
            return e;
        },
        setAnswer: e => {
            switch (e.type) {
              case "2":
                return J(e.html).find(".fillblank_input > input").each(((t, n) => {
                    J(n).val(e.answer[t]);
                })), !1;

              case "3":
                let t = e.answer;
                return e.ques.$options.each(((e, n) => {
                    isTrue(t) && isTrue(removeHtml(J(n).parent().html())) && J(n).click(), isFalse(t) && isFalse(removeHtml(J(n).parent().html())) && J(n).click();
                })), !1;

              case "4":
                let n = J(e.html).find("[name='quesId']").attr("id");
                return je.UE.getEditor(`_baidu_editor_${n}`).setContent(`<p>${e.answer}</p>`), !1;
            }
            return !0;
        }
    }, {
        type: "save",
        name: "\u804c\u6559\u4e91\u6536\u5f55",
        match: () => location.href.includes("examrecord_recordDetail.action"),
        question: {
            html: ".q_content",
            question: ".divQuestionTitle",
            options: ".questionOptions>div.q_option_readonly",
            type: ".question-box .tag",
            workType: "zhijiaoyun",
            pageType: "zhijiaoyun"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".q_content").length;
            }));
        },
        answerHook: e => {
            const t = J(e.html).find(".exam.icon_examright").length, n = J(e.html).find("input[name='quesId']:not([id='']").attr("id"), a = J(`input#qId${n}`).attr("qtype"), s = J(e.html).find("span[name^='questionIndex']").text().trim() + "\u3001", o = J(e.html).find(".q_score").text().trim();
            switch (e.question = e.question.replace(s, "").replace(o, "").trim(), e.options = J(e.html).find(".questionOptions>div.q_option_readonly").map(((e, t) => {
                let n = J(t).find("span[name='optionIndexName']").text().trim();
                return removeHtml(J(t).html()).replace(n, "").trim();
            })).get(), a) {
              case "\u5355\u9879\u9009\u62e9\u9898":
              case "\u5355\u9009\u9898":
              case "singlechoice":
                e.type = "0";
                break;

              case "\u591a\u9879\u9009\u62e9\u9898":
              case "\u591a\u9009\u9898":
              case "multichoice":
                e.type = "1";
                break;

              case "\u5224\u65ad\u9898":
              case "bijudgement":
                e.type = "3";
                break;

              case "fillblank":
              case "\u586b\u7a7a\u9898":
                e.type = "2";
                const t = J(e.html).find(".answerOption>span:eq(0)").clone();
                t.find(".exam_answers").remove(), e.question = titleClean(removeHtml(t.html())).replace(/\uff08.*?\u5206\uff09/g, "").trim();
                break;

              case "cloze":
              case "\u5b8c\u5f62\u586b\u7a7a":
                e.type = "14", e.options = J(e.html).find(".questionOptions>.exam_cloze_choice").map(((e, t) => [ J(t).find(".optionContent").map(((e, t) => removeHtml(J(t).html()))).get() ])).get(), 
                e.answer = J(e.html).find(".exam_rightAnswer .answer_table .one_answer>span").map(((t, n) => {
                    const a = J(n).text().trim();
                    return e.options[t][a.charCodeAt(0) - 65];
                })).get();
                break;

              case "textarea":
                e.type = "4", e.options = [], e.answer = removeHtml(J(e.html).find(".exam_rightAnswer .has_standard_answer").html());
            }
            switch (e.type) {
              case "0":
              case "1":
                if (e.answer = J(e.html).find('.exam_rightAnswer .exam_answers_tit>span[name="rightAnswer"]').text().trim().split("").map((t => e.options[t.charCodeAt(0) - 65])), 
                e.answer, 0 == e.answer.length) {
                    if (0 == t) return;
                    e.answer = J(e.html).find('.exam_stu_answer span[name="stuAnswer"]').text().trim().split("").map((t => e.options[t.charCodeAt(0) - 65]));
                }
                break;

              case "2":
                e.answer = 0 == t ? J(e.html).find(".exam_rightAnswer span.fillblank_answer").map(((e, t) => removeHtml(J(t).html()))).get() : J(e.html).find(".exam_stu_answer span.fillblank_answer").map(((e, t) => removeHtml(J(t).html()))).get(), 
                e.answer;
                break;

              case "3":
                e.options = [];
                let n = J(e.html).find('.exam_stu_answer span[name="stuAnswer"]').text().trim();
                [ "\u6b63\u786e", "\u9519\u8bef" ].includes(n) && t && (e.answer = [ n ]);
            }
            return e;
        }
    }, {
        type: "save",
        name: "\u667a\u6167\u804c\u6559\u6536\u5f55",
        match: () => "zjy2.icve.com.cn" === location.host && (location.href.includes("/spocviewsJob") || location.href.includes("/viewExam")),
        question: {
            html: ".subjectDet",
            question: ".seeTitle .htmlP.ql-editor",
            options: ".optionList .htmlP.ql-editor",
            type: ".question-box .tag",
            workType: "zhijiaoyun",
            pageType: "zhijiaoyun"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".subjectDet").length;
            }));
        },
        answerHook: e => {
            const t = J(e.html).find(".xvhao").text().trim();
            e.type = typeConvert(t.match(/\u3010(.*)\u3011/)[1].trim().replace("\u586b\u7a7a\u9898(\u5ba2\u89c2)", "\u586b\u7a7a\u9898"));
            let n = J(e.html).find(".answer").text().trim();
            switch (e.answer = n.split(",").map((t => e.options[t.charCodeAt(0) - 65])), e.type) {
              case "2":
                e.options = [], e.answer = J(e.html).find(".answer>span").map(((e, t) => removeHtml(J(t).html()))).get();
                break;

              case "3":
                e.options = J(e.html).find(".optionList>div").map(((e, t) => removeHtml(J(t).html()))).get(), 
                e.answer = n.split(",").map((t => e.options[t.charCodeAt(0) - 65])), e.answer = judgeAnswer(e.answer[0]), 
                e.options = [];
                break;

              case "11":
                const t = J(e.html).find(".optionList .matching>.htmlP.ql-editor").map(((e, t) => removeHtml(J(t).html()))).get(), a = J(e.html).find(".optionList>.text .htmlP.ql-editor").map(((e, t) => removeHtml(J(t).html()))).get();
                e.options = [ t, a ];
                let s = {};
                n = J(e.html).find(".answer>span").map(((e, n) => {
                    let [o, i] = J(n).text().trim().split(".");
                    o.charCodeAt(0) >= 65 ? o = (o.charCodeAt(0) - 65).toString() : /^\d+$/.test(o) && (o = (parseInt(o) - 1).toString()), 
                    i.charCodeAt(0) >= 65 ? i = (i.charCodeAt(0) - 65).toString() : /^\d+$/.test(i) && (i = (parseInt(i) - 1).toString()), 
                    s[t[o]] = a[i];
                })), e.answer = s;
            }
            return e;
        }
    }, {
        type: "ask",
        name: "\u667a\u6167\u804c\u6559+\u7b54\u9898",
        tips: "\u8be5\u5e73\u53f0\u95ee\u9898\u8f83\u591a\uff0c\u9047\u5230\u8bf7\u53cd\u9988\u7ed9\u4f5c\u8005",
        match: () => location.href.includes("coursePreview/jobTest") || location.href.includes("spockeepTest") || location.href.includes("spocjobTest"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".subjectDet",
            question: ".ql-editor",
            options: ".optionList .ql-editor",
            type: ".question-box .tag",
            workType: "zhijiaoyun",
            pageType: "zhijiaoyun"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".subjectDet").length;
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().parent().hasClass("is-checked"),
        questionHook: e => {
            const t = J(e.html).find(".title.titleTwo").text().trim();
            if (e.type = typeConvert(t.match(/\u3010(.*)\u3011/)[1].trim().replace("\u586b\u7a7a\u9898(\u5ba2\u89c2)", "\u586b\u7a7a\u9898")), 
            "3" === e.type) e.options = [], e.$options = J(e.html).find(".optionList>div label");
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u667a\u6167\u804c\u6559+\u6536\u5f55",
        match: () => "zyk.icve.com.cn" === location.host && (location.href.includes("/coursePreview/viewJob1") || location.href.includes("/viewExam")),
        question: {
            html: ".subjectDet",
            question: ".seeTitle>span:eq(1)",
            options: ".optionList>div",
            type: ".question-box .tag",
            workType: "zhijiaoyun",
            pageType: "zhijiaoyun"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".subjectDet").length;
            }));
        },
        answerHook: e => {
            e.options = removeStartChar(e.options);
            const t = J(e.html).find(".xvhao").text().trim();
            e.type = typeConvert(t.match(/\u3010(.*)\u3011/)[1].trim().replace("\u586b\u7a7a\u9898(\u5ba2\u89c2)", "\u586b\u7a7a\u9898"));
            let n = J(e.html).find(".answer").text().trim();
            switch (e.answer = n.split(",").map((t => e.options[t.charCodeAt(0) - 65])), e.type) {
              case "2":
                e.options = [], e.answer = J(e.html).find(".answer>span").map(((e, t) => removeHtml(J(t).html()))).get();
                break;

              case "3":
                e.options = J(e.html).find(".optionList>div").map(((e, t) => removeHtml(J(t).html()))).get(), 
                e.answer = n.split(",").map((t => e.options[t.charCodeAt(0) - 65])), e.answer = judgeAnswer(e.answer[0]), 
                e.options = [];
            }
            return e;
        }
    }, {
        type: "save",
        name: "ai\u4f18\u8bfe\u6536\u5f55",
        match: () => "ai.icve.com.cn" === location.host && location.href.includes("/view-exams/"),
        question: {
            html: () => {
                let e = J(".examination-paper")[0].__vue__.$refs.Questions.sjtmtxlist, t = [];
                return e.sort(((e, t) => e.txdm - t.txdm)), e.forEach((e => {
                    e.sjtmlist.forEach((e => {
                        t.push(e);
                    }));
                })), t;
            },
            question: ".seeTitle>span:eq(1)",
            options: ".optionList>div",
            type: ".question-box .tag",
            workType: "zhijiaoyun",
            pageType: "zhijiaoyun"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".examination-paper")[0].__vue__.$refs.Questions.sjtmtxlist.length;
            }));
            let e = J(".examination-paper")[0].__vue__.$refs.Questions.sjtmtxlist, t = [];
            e.sort(((e, t) => e.txdm - t.txdm)), e.forEach((e => {
                e.sjtmlist.forEach((e => {
                    t.push(e);
                }));
            })), je.quesList = t;
        },
        answerHook: (e, t) => {
            const n = e.html;
            e.type = typeMatch(n.txdmmc), e.question = titleClean(n.tmmc);
            let a = [];
            const s = n.sjtmxxlist.map((e => {
                let t = removeHtml(e.xxnr);
                return "1" === e.sfzqda && a.push(t), t;
            }));
            return e.options = s, e.answer = a, e;
        },
        paper: async e => {
            const t = J(".examination-paper")[0].__vue__.sjAllInfo, n = {
                platform: "icve"
            };
            n.hash = t.sskcid, n.info = {};
            const a = "https://ai.icve.com.cn/gjspxpt/jsjkKcgl/getKcjbxx?id=" + t.sskcid;
            await request(a, "GET").then((e => {
                const t = JSON.parse(e[0].responseText).content;
                n.name = t.kcmc, n.info = {}, n.info.imageurl = t.kctpfm;
            })), n.chapter = [ {
                hash: `${t.sjid}`,
                name: t.sjmc,
                question: e
            } ], Ye.setPaper(n.hash, n);
        }
    }, {
        type: "ask",
        name: "ai\u4f18\u8bfe\u7b54\u9898",
        tips: "",
        match: () => "ai.icve.com.cn" === location.host && location.href.includes("/preview-exam/"),
        types: [ "0", "1" ],
        question: {
            html: () => {
                let e = J(".examination-paper")[0].__vue__.$refs.Questions.sjtmtxlist, t = [];
                return e.sort(((e, t) => e.txdm - t.txdm)), e.forEach((e => {
                    e.sjtmlist.forEach((e => {
                        t.push(e);
                    }));
                })), t;
            },
            question: ".seeTitle>span:eq(1)",
            options: "label",
            type: ".question-box .tag",
            workType: "zhijiaoyun",
            pageType: "zhijiaoyun"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".examination-paper")[0].__vue__.$refs.Questions.sjtmtxlist.length;
            }));
        },
        toquestion: e => {
            J(".topic-zpx-list>.topic-zpx>div>span:eq(" + e + ")").click();
        },
        next: () => {},
        ischecked: e => e.hasClass("wrongXz"),
        questionHook: e => {
            const t = e.html;
            e.type = typeMatch(t.txdmmc), e.question = titleClean(t.tmmc);
            let n = [];
            const a = t.sjtmxxlist.map((e => {
                let t = removeHtml(e.xxnr);
                return "1" === e.sfzqda && n.push(t), t;
            }));
            return e.options = a, e.answer = n, e.html = J(".content-center"), e.$options = () => J("label"), 
            e;
        },
        setAnswer: e => !0,
        finish: e => {}
    } ], ct = [ {
        type: "ask",
        name: "\u5ddd\u519c\u5728\u7ebf\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("cnzx.info") && location.href.includes("KaoShi/ShiTiYe.aspx"),
        types: [ "0", "1", "3" ],
        question: {
            html: "li.question",
            question: ".wenti >p.stem",
            options: ".wenti > ol > li",
            type: ".question_head > span:eq(0)",
            workType: "cnzx",
            pageType: "cnzx"
        },
        init: async () => {},
        ischecked: e => e.find("input").prop("checked"),
        questionHook: e => (e.$options = J(e.html).find(".wenti > ol > li input"), 0 !== e.options.length && (e.type = "radio" === e.$options.eq(0).attr("type") ? "0" : "1", 
        2 === e.options.length && e.options.includes("\u6b63\u786e") && e.options.includes("\u9519\u8bef") && (e.type = "3", 
        e.options = [])), e),
        setAnswer: e => "3" !== e.type || (J(e.html).find(".wenti > ol > li").each(((t, n) => {
            isTrue(e.answer) && isTrue(removeHtml(J(n).html())) && e.ques.$options.eq(t).click(), 
            isFalse(e.answer) && isFalse(removeHtml(J(n).html())) && e.ques.$options.eq(t).click();
        })), !1),
        finish: e => {
            J("li.paginationjs-next.J-paginationjs-next").click();
        }
    }, {
        type: "save",
        name: "\u5ddd\u519c\u5728\u7ebf\u6536\u5f55",
        match: () => location.host.includes("cnzx.info") && location.href.includes("ZaiXianLianXi.aspx"),
        question: {
            html: ".ShiTi>.ShiTiMiaoShu",
            question: ".ShiTiMiaoShu",
            options: ".el-radio-group label .label,.el-checkbox-group label .label",
            type: ".question-box .tag",
            workType: "cnzx",
            pageType: "cnzx"
        },
        init: async () => {},
        answerHook: e => {
            J(e.html).text(), e.question = removeHtml(titleClean(removeHtml(J(e.html).html())));
            let t = J("ul.TiXing>li.DangQianTiXing:eq(0)>a").text(), n = [], a = J(e.html).next();
            switch (e.options = removeStartChar(a.find("ul li").map(((e, t) => (J(t).hasClass("DaAn1") && n.push(e), 
            titleClean(removeHtml(J(t).html()))))).get()), e.answer = n.map((t => e.options[t])), 
            t) {
              case "\u5355\u9009\u9898":
              case "\u8bcd\u6c47\u4e0e\u7ed3\u6784":
              case "\u4ea4\u9645\u7528\u8bed":
                e.type = "0";
                break;

              case "\u591a\u9009\u9898":
                e.type = "1";
                break;

              case "\u5224\u65ad\u9898":
                e.type = "3", e.options = [], e.answer = isTrue(e.answer[0]) ? [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? [ "\u9519\u8bef" ] : [];
            }
            return e;
        }
    } ], pt = [ {
        type: "ask",
        name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u7b54\u9898(\u65e7\u7248)",
        tips: "",
        match: () => location.href.includes("study/html/content/studying/?courseOpenId=") || location.href.includes("study/html/content/sxsk/?courseOpenId=") || location.href.includes("study/html/content/tkOnline/?courseOpenId=") || location.href.includes("study/html/content/bkExam/?courseOpenId="),
        types: [ "0", "1", "3" ],
        question: {
            html: ".e-q-body>.e-q",
            question: ".ErichText",
            options: "ul>li>.ErichText",
            type: ".question-box .tag",
            workType: "ahjxjy",
            pageType: "ahjxjy"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".e-q-body>.e-q") && isExist(".e-item");
            })), !isExist(".photo-time") && !isExist(".btn_save")) return !1;
        },
        ischecked: e => e.parent().hasClass("checked"),
        questionHook: e => {
            var t;
            const n = J(e.html).parent().parent();
            switch (e.type = n ? null == (t = n.attr("id")) ? void 0 : t.trim() : "", e.type) {
              case "2":
                e.type = "1";
                break;

              case "1":
                e.type = "0";
                break;

              case "3":
                e.type = "3", e.$options = J(e.html).find("ul>li");
                break;

              case "4":
                e.type = "2";
                break;

              case "5":
                e.type = "4";
                break;

              default:
                e.type, e.type = "8";
            }
            return e;
        },
        setAnswer: e => {
            switch (e.type) {
              case "4":
              case "2":
                return J(e.html).find("textarea.answer-input").focus(), J(e.html).find(" textarea.answer-input"), 
                J(e.html).find(".answer-input.edui-default").each(((t, n) => {
                    let a = J(n).attr("id"), s = je.UE.getEditor(a);
                    s.ready((function() {
                        s.setContent(`<p>${e.answer[t]}</p>`);
                    }));
                })), J(e.html).find(".answer-input").blur(), !1;
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "save",
        name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u6536\u5f55(\u65e7\u7248)",
        tips: "\u8be5\u5e73\u53f0\u4ec5\u652f\u6301\u5355\u9009\u3001\u591a\u9009\u3001\u5224\u65ad\u9898\u578b\uff0c\u5176\u4ed6\u9898\u578b\u6682\u4e0d\u652f\u6301",
        match: () => location.href.includes("study/html/content/studying/?courseOpenId=") || location.href.includes("study/html/content/sxsk/?courseOpenId=") || location.href.includes("study/html/content/tkOnline/?courseOpenId=") || location.href.includes("study/html/content/bkExam/?courseOpenId="),
        question: {
            html: ".e-q-body>.e-q",
            question: ".ErichText",
            options: "ul>li>.ErichText",
            type: ".question-box .tag",
            workType: "ahjxjy",
            pageType: "ahjxjy"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".e-save"), isExist(".e-q-body>.e-q") && isExist(".w_e-q-panel");
            })), !isExist(".e-quest-review")) return !1;
        },
        answerHook: e => {
            var t;
            const n = J(e.html).parent().parent();
            e.type = n ? null == (t = n.attr("id")) ? void 0 : t.trim() : "", e.$options = J(e.html).find("ul>li");
            let a = J(e.html).find("ul>li.checked").map(((e, t) => removeHtml(J(t).find(".ErichText").html()))).get();
            const s = J(e.html).find(".e-q-right").length > 0;
            e.answer = a.filter((e => "" !== e));
            let o = J(e.html).find(".e-ans-ref .e-ans-r").map(((e, t) => removeHtml(J(t).html()))).get();
            1 === o.length && o[0].length > 1 && (o = o[0].split("\u3001"));
            let i = o.map((t => {
                let n = t.charCodeAt() - 65;
                return e.options[n];
            })).filter((e => "" !== e && void 0 !== e));
            switch (e.type) {
              case "2":
                e.type = "1";
                break;

              case "1":
                e.type = "0";
                break;

              case "3":
                e.type = "3", e.answer = J(e.html).find("ul>li.checked").map(((e, t) => removeHtml(J(t).html()))).get(), 
                e.options = [], isTrue(e.answer[0]) ? e.answer = [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? e.answer = [ "\u9519\u8bef" ] : e.answer = [];
                break;

              case "4":
                e.type = "2", e.options = [];
                break;

              case "5":
                e.type = "4", i = [ removeHtml(J(e.html).find(".e-ans-ref>.e-ans-r").html()) ], 
                e.options = [];
                break;

              case "11":
                e.type = "19";
                const t = J(e.html).find("form").map(((e, t) => ({
                    type: "0",
                    question: removeHtml(J(t).find(".e-q-q .ErichText").html()),
                    options: J(t).find("ul li .ErichText").map(((e, t) => removeHtml(J(t).html()))).get()
                }))).get();
                i = i.length > 0 ? judgeAnswer(i[0]) : [], e.options = t;

              default:
                return void e.type;
            }
            if (i.length > 0) return e.answer = i, e;
            if (!s && "3" === e.type && e.answer.length > 0) {
                if (e.answer = function(e) {
                    if (!isTrue(e[0]) && !isFalse(e[0])) return e[0], [];
                    return isTrue(e[0]) ? [ "\u9519\u8bef" ] : isFalse(e[0]) ? [ "\u6b63\u786e" ] : [];
                }(e.answer), 0 === e.answer.length) return;
            } else if (!s) return;
            return e;
        },
        paper: e => {
            const t = je.online, n = {
                platform: "ahjxjy"
            };
            n.hash = t.courseOpenId, n.name = je.localStorage.courseNmae, n.info = {}, n.chapter = [ {
                hash: `${t.cell.id}`,
                name: t.cell.title,
                question: e
            } ], Ye.setPaper(n.hash, n);
        }
    }, {
        type: "save",
        name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u6536\u5f55(\u65b0\u7248)",
        tips: "\u8be5\u5e73\u53f0\u4ec5\u652f\u6301\u5355\u9009\u3001\u591a\u9009\u3001\u5224\u65ad\u9898\u578b\uff0c\u5176\u4ed6\u9898\u578b\u6682\u4e0d\u652f\u6301",
        match: () => location.href.includes("/myHomework/answerRecord") || location.href.includes("/myHomework/assignment") || location.href.includes("/myExam/examDetails") || location.href.includes("/myExam/examHistory"),
        question: {
            html: ".option>div[id='answer-card-area']",
            question: ".ErichText",
            options: "ul>li>.ErichText",
            type: ".question-box .tag",
            workType: "ahjxjy",
            pageType: "ahjxjy"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".option>div[id='answer-card-area']");
            }));
        },
        answerHook: (e, t) => {
            const n = J("micro-app-body>#app>div")[0].__vue__.hierarchyList[t];
            e.type = typeMatch(n.name), e.question = titleClean(removeHtml(n.Content));
            const {options: a, answer: s} = n.CourseQuestionOptionList.reduce(((e, t) => {
                const n = removeHtml(t.Content);
                return t.IsAnswer && e.answer.push(n), e.options.push(n), e;
            }), {
                options: [],
                answer: []
            });
            return e.options = a, e.answer = "3" === e.type ? [ judgeAnswer(s[0]) ] : s, "3" === e.type && (e.options = []), 
            e;
        }
    }, {
        type: "ask",
        name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u7b54\u9898(\u65b0\u7248)",
        tips: "\u5355\u9898\u95f4\u9694\u5fc5\u987b\u5927\u4e8e 3 \u79d2\uff01\uff01\u5426\u5219\u5bb9\u6613\u5f02\u5e38\uff01\uff01",
        match: () => location.href.includes("/myHomework/assignment") || location.href.includes("/myExam/examDetails"),
        types: [ "0", "1", "3" ],
        minDelay: 3e3,
        answerDelay: 1e3,
        question: {
            html: ".option>div[id='answer-card-area']",
            question: ".ErichText",
            options: "ul.answer-list>li",
            type: ".question-box .tag",
            workType: "ahjxjy",
            pageType: "ahjxjy"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".option>div[id='answer-card-area']");
            })), !J(".submit-area").text().includes("\u63d0\u4ea4")) return !1;
            const e = J("micro-app-body>#app>div")[0].__vue__, t = e.hierarchyList[0];
            e.goAnchor(t.Id);
        },
        toquestion: e => {
            const t = J("micro-app-body>#app>div")[0].__vue__, n = t.hierarchyList[e];
            (null == n ? void 0 : n.Id) && t.goAnchor(n.Id);
        },
        ischecked: e => e.hasClass("on"),
        questionHook: (e, t) => {
            const n = J("micro-app-body>#app>div")[0].__vue__.hierarchyList[t];
            e.type = typeMatch(n.name), e.question = titleClean(removeHtml(n.Content));
            let a = [];
            return n.CourseQuestionOptionList.forEach((e => {
                const t = removeHtml(e.Content);
                e.IsAnswer, a.push(t);
            })), e.options = a, e.html = "body", e.$options = () => J("ul.answer-list>li"), 
            e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "ask",
        name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u7b54\u9898(\u81ea\u8003)",
        tips: "",
        match: () => location.href.includes("/userinfo/testPaper"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".item-card-area",
            question: ".desc",
            options: "ul>li",
            type: ".question-box .tag",
            workType: "ahjxjy",
            pageType: "ahjxjy"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".exam-paper-wrap");
            })), isExist(".exam-process-area")) return !1;
            const e = J(".exam-paper-wrap")[0].__vue__.topicList.map((e => e.getPaperList)).flat();
            window.Zques = e;
        },
        ischecked: e => e.parent().hasClass("checked"),
        questionHook: (e, t) => {
            const n = Zques[t];
            e.type = typeMatch(n.questionTypeName), e.question = titleClean(removeHtml(n.content));
            const {options: a, answer: s} = n.courseQuestionOptionList.reduce(((e, t) => {
                const n = removeHtml(t.content);
                return t.isAnswer && e.answer.push(n), e.options.push(n), e;
            }), {
                options: [],
                answer: []
            });
            return e.options = a, e.answer = "3" === e.type ? [ judgeAnswer(s[0]) ] : s, "3" === e.type && (e.options = []), 
            e;
        },
        setAnswer: e => {
            switch (e.type) {
              case "4":
              case "2":
                return J(e.html).find("textarea.answer-input").focus(), J(e.html).find(" textarea.answer-input"), 
                J(e.html).find(".answer-input.edui-default").each(((t, n) => {
                    let a = J(n).attr("id"), s = je.UE.getEditor(a);
                    s.ready((function() {
                        s.setContent(`<p>${e.answer[t]}</p>`);
                    }));
                })), J(e.html).find(".answer-input").blur(), !1;
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "save",
        name: "\u5b89\u5fbd\u7ee7\u7eed\u6559\u80b2\u6536\u5f55(\u81ea\u8003)",
        tips: "\u8be5\u5e73\u53f0\u4ec5\u652f\u6301\u5355\u9009\u3001\u591a\u9009\u3001\u5224\u65ad\u9898\u578b\uff0c\u5176\u4ed6\u9898\u578b\u6682\u4e0d\u652f\u6301",
        match: () => location.href.includes("/userinfo/testPaper"),
        question: {
            html: ".item-card-area",
            question: ".ErichText",
            options: "ul>li>.ErichText",
            type: ".question-box .tag",
            workType: "ahjxjy",
            pageType: "ahjxjy"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".exam-paper-wrap");
            })), !isExist(".score-describe")) return !1;
            const e = J(".exam-paper-wrap")[0].__vue__.topicList.map((e => e.getPaperList)).flat();
            window.Zques = e;
        },
        answerHook: (e, t) => {
            const n = Zques[t];
            e.type = typeMatch(n.questionTypeName), e.question = titleClean(removeHtml(n.content));
            const {options: a, answer: s} = n.courseQuestionOptionList.reduce(((e, t) => {
                const n = removeHtml(t.content);
                return t.isAnswer && e.answer.push(n), e.options.push(n), e;
            }), {
                options: [],
                answer: []
            });
            return e.options = a, e.answer = "3" === e.type ? [ judgeAnswer(s[0]) ] : s, "3" === e.type && (e.options = []), 
            e;
        }
    } ], ut = [ {
        type: "save",
        name: "\u9752\u4e66\u4f5c\u4e1a\u7b54\u9898\u6536\u5f55",
        match: () => location.host.includes("qingshuxuetang.com") && (location.href.includes("Student/ExercisePaper?courseId=") || location.href.includes("Student/ViewQuiz?quizId=") || location.href.includes("Student/SimulationExercise/Detail?id=") || location.href.includes("Student/Quiz/Detail?id=")),
        question: {
            html: ".paper-container > .question-detail-container",
            question: ".question-detail-description",
            options: ".question-detail-options .question-detail-option .option-description-preview",
            type: ".question-detail-type-desc",
            workType: "qingshu",
            pageType: "qingshu"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".question-detail-container") && je.qsques;
            }));
        },
        answerHook: (e, t) => {
            const n = je.qsques[t];
            switch (e.question = removeHtml(n.description), e.options = n.options ? n.options.map((e => removeHtml(e.description))) : [], 
            e.type = typeConvert(n.typeDesc), e.answer = n.solution.split("").map((t => e.options[t.charCodeAt(0) - 65])), 
            e.type) {
              case "3":
                e.options = [], e.answer = isTrue(e.answer[0]) ? [ "\u6b63\u786e" ] : isFalse(e.answer[0]) ? [ "\u9519\u8bef" ] : [ "" ];
                break;

              case "15":
                e.options = [], e.answer = [], n.subQuestions.forEach((t => {
                    let n = t.options ? t.options.map((e => removeHtml(e.description))) : [], a = t.solution.split("").map((e => n[e.charCodeAt(0) - 65]));
                    e.answer.push(a), e.options.push(n);
                }));
            }
            return e;
        }
    }, {
        type: "ask",
        name: "\u9752\u4e66\u5b66\u5802\u4f5c\u4e1a\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("qingshuxuetang.com") && (location.href.includes("/Student/ExercisePaper") || location.href.includes("Student/ExamPaper") || location.href.includes("Student/ViewQuiz") || location.href.includes("Student/SimulationExercise/Detail") || location.href.includes("Student/Quiz/Detail")),
        types: [ "0", "1", "3" ],
        question: {
            html: ".paper-container > .question-detail-container",
            question: ".question-detail-description",
            options: ".question-detail-options .question-detail-option .option-description",
            type: ".question-detail-type-desc",
            workType: "qingshu",
            pageType: "qingshu"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".question-detail-container") && je.qsques;
            }));
        },
        next: () => {},
        ischecked: e => e.parent().find("input").prop("checked"),
        toquestion: e => {
            J(`.group_item:eq(${e})`), J(`.group_item:eq(${e})`).click();
        },
        questionHook: (e, t) => {
            const n = je.qsques[t];
            if (e.question = removeHtml(n.description), e.options = n.options ? n.options.map((e => removeHtml(e.description))) : [], 
            e.type = typeConvert(n.typeDesc), "3" === e.type) e.options = [];
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    } ], dt = [ {
        type: "save",
        name: "\u4f18\u8bfe\u5728\u7ebf\u6536\u5f55",
        match: () => "cce.org.uooconline.com" === location.host && (location.href.includes("/exam/paper") || location.href.includes("/exam/")),
        question: {
            html: ".queContainer",
            question: ".topic-title",
            options: ".el-radio-group label .label,.el-checkbox-group label .label",
            type: ".question-box .tag",
            workType: "uooc",
            pageType: "uooc"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".queContainer").length;
            }));
        },
        answerHook: e => {
            const t = je.angular.element(e.html).scope().question;
            if (e.type = typeConvert(t.type_text), e.question = t.question, e.options = t.options_app.map((e => e.value)), 
            e.answer = t.answer.map((e => t.options[e])), "3" === e.type) e.options = [], e.answer = judgeAnswer(e.answer[0]);
            return e;
        }
    } ], ht = [ {
        type: "ask",
        name: "\u4eac\u4eba\u5e73\u53f0\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("cj-edu.com") && (location.href.includes("/Examination") || location.href.includes("/ExamInfo")),
        types: [ "0", "1", "3" ],
        question: {
            html: ".el-main>.all_subject>div.el-row",
            question: "div.stem",
            options: "ul li > label > span.el-radio__label > div:nth-child(2),ul li > label > span.el-checkbox__label > div:nth-child(2)",
            type: ".question-box .tag",
            workType: "cjedu",
            pageType: "cjedu"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".el-main>.all_subject>div.el-row").length;
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => {
            switch (J(e.html).prevAll("h1").first().text().trim()) {
              case "\u5355\u9009\u9898":
                e.type = "0";
                break;

              case "\u591a\u9009\u9898":
                e.type = "1";
                break;

              case "\u5224\u65ad\u9898":
                e.$options = J(e.html).find("ul li>label"), e.options = [], e.type = "3";
            }
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u4eac\u4eba\u5e73\u53f0\u4f5c\u4e1a\u6536\u5f55",
        match: () => location.host.includes("cj-edu.com") && location.href.includes("/ViewAnswerSheet"),
        question: {
            html: ".el-main>.all_subject>div.el-row",
            question: "p.stem",
            options: "ul li > label > span.el-radio__label > div:nth-child(2),ul li > label > span.el-checkbox__label > div:nth-child(2)",
            type: ".question-box .tag",
            workType: "cjedu",
            pageType: "cjedu"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".el-main>.all_subject>div.el-row").length;
            }));
        },
        answerHook: e => {
            let t = J(e.html).find(".seeStudentAnswer>p.answer").text().replace("\u53c2\u8003\u7b54\u6848\uff1a", "").trim(), n = J(e.html).prevAll("h1").first().text().trim();
            switch (e.options.length > 0 && (e.answer = t.split(",").map((t => e.options[t.charCodeAt(0) - 65]))), 
            n) {
              case "\u5355\u9009\u9898":
                e.type = "0";
                break;

              case "\u591a\u9009\u9898":
                e.type = "1";
                break;

              case "\u5224\u65ad\u9898":
                e.options = [], e.answer = judgeAnswer(t), e.type = "3";
            }
            return e;
        }
    } ], mt = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("ytccr.com"),
        main: e => {
            const getHash = () => getUrl();
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), vuePageChange$1(), t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u7ece\u901a\u7ee7\u6559\u4e91\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("ytccr.com") && location.href.includes("learning-work") && location.href.includes("type=3"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".border-item",
            question: ".title.qa-title",
            options: ".opts-list .opt-title-cnt",
            type: ".question-box .tag",
            workType: "ytccr",
            pageType: "ytccr"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".border-item").length;
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => {
            if (e.type = typeConvert(J(e.html).find(".qtype").text().trim()), "3" === e.type) e.options = [];
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u7ece\u901a\u7ee7\u6559\u4e91\u6536\u5f55",
        match: () => location.host.includes("ytccr.com") && location.href.includes("learning-work") && location.href.includes("type=5"),
        question: {
            html: ".border-item",
            question: ".title.qa-title",
            options: ".opts-list .opt-title-cnt",
            type: ".question-box .tag",
            workType: "ytccr",
            pageType: "ytccr"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".border-item").length;
            }));
        },
        answerHook: e => {
            e.type = typeConvert(J(e.html).find(".qtype").text().trim());
            let t = J(e.html).find(".u-text-success,.u-text-danger").text().split("\uff0c")[0].trim();
            if (t = t.match(/[A-Z]+$/)[0].trim(), e.answer = t.split("").map((t => e.options[t.charCodeAt(0) - 65])), 
            0 === e.answer.length) return e;
            if ("3" === e.type) e.options = [], e.answer = judgeAnswer(e.answer[0]);
            return e;
        }
    } ], ft = [ {
        type: "ask",
        name: "\u5b66\u8d77\u8003\u8bd5",
        tips: "",
        match: () => location.href.includes("oxer/page/ots/examIndex.html"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".queItemClass",
            question: "dt > div.din:eq(1)",
            options: "dd > div",
            type: ".question-box .tag",
            workType: "xueqi",
            pageType: "xueqi"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".queItemClass");
            })), je.document.onkeydown = null, je.oncontextmenu = null;
        },
        next: () => {},
        ischecked: e => e.parent().hasClass("cur"),
        questionHook: e => {
            let t = J(e.html).parent().find("div .fb:eq(0)").text().split("\u3001")[1];
            if (t.includes("\u5224\u65ad") && (t = "\u5224\u65ad\u9898"), e.type = typeMatch(t), 
            "3" === e.type) e.options = [], e.$options = J(e.html).find("input");
            return e;
        },
        setAnswer: e => {
            if ("3" === e.type) {
                let t = e.answer;
                return e.ques.$options.each(((e, n) => {
                    isTrue(t) && isTrue(removeHtml(J(n).val())) && J(n).click(), isFalse(t) && isFalse(removeHtml(J(n).val())) && J(n).click();
                })), !1;
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "save",
        name: "\u5b66\u671f\u8003\u8bd5\u6536\u5f55",
        match: () => location.href.includes("OTS-UniverDetail.html"),
        question: {
            html: ".dl_list",
            question: "dt > div.fl:eq(1)",
            options: "dd > var",
            type: ".question-box .tag",
            workType: "xueqi",
            pageType: "xueqi"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".dl_list");
            }));
        },
        answerHook: e => {
            var t, n, a, s, o;
            const i = J(e.html).attr("queid"), r = e.html._ms_context_.el.questions.find((e => e.id === i));
            r.questionTypeName.includes("\u5224\u65ad") && (r.questionTypeName = "\u5224\u65ad\u9898"), 
            e.type = typeMatch(r.questionTypeName), e.question = removeHtml(r.stem), console.log(r), 
            e.options = (null == (n = null == (t = r.answerArea) ? void 0 : t.optionList) ? void 0 : n.sort(((e, t) => e.sequence - t.sequence)).map((e => removeHtml(e.content)))) || [];
            let l = r.answer.ans || (null == (a = r.answer.ansL) ? void 0 : a.join("")) || null;
            if (l) e.answer = l.split("").map((t => e.options[t.charCodeAt(0) - 65])); else {
                const t = (null == (o = null == (s = r.answerArea) ? void 0 : s.optionList) ? void 0 : o.filter((e => e.isTrue)).map((e => removeHtml(e.content)))) || [];
                if (0 === r.answerScore) return;
                e.answer = t;
            }
            return "3" === e.type && (e.options = [], e.answer = judgeAnswer(l)), e;
        },
        paper: e => {
            const t = J(".dl_list:eq(0)")[0]._ms_context_.loop.category, n = J(".dl_list:eq(0)")[0]._ms_context_.oAnswerDetailInfo, a = {
                platform: "xueqi"
            };
            a.hash = t.code, a.name = t.value, a.info = {}, a.chapter = [ {
                hash: `${n.arrangementid}`,
                name: n.arrangementname,
                question: e
            } ], Ye.setPaper(a.hash, a);
        }
    } ], gt = [ {
        type: "hook",
        name: "hook",
        match: "gdrtvu.exam-cloud.cn" === location.host,
        main: e => {
            unsafeWindow.mainClass = getUrl();
            let t = new MutationObserver((async e => {
                unsafeWindow.mainClass !== getUrl() && (unsafeWindow.mainClass = getUrl(), vuePageChange(), 
                t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u7b54\u9898",
        tips: "\u516c\u544a",
        match: () => location.host.includes("exam-cloud.cn") && location.href.includes("oe-web/online-exam/exam"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".question-container",
            question: ".question-body:first",
            options: ".option .question-options",
            type: ".question-header .container",
            workType: "guangkai",
            pageType: "guangkai"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".question-container");
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => {
            let t = J(".list .current-question").parent().parent().find(".title").text();
            if (console.log(t), t = t.split("\u3001")[1], t = t.replace(/\(.*\)/, "").trim(), 
            console.log(t), e.type = typeConvert(t), "8" == e.type ? e.type = typeMatch(t) : e.type, 
            "3" === e.type) e.options = [];
            return e;
        },
        setAnswer: e => !0,
        finish: e => {
            J(".next .qm-primary-button").length && J(".next .qm-primary-button")[0].click();
        }
    } ], yt = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("open.ha.cn"),
        main: e => {
            const getHash = () => J(".stuHomeworkVersionId.active").attr("id");
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                getHash(), je.mainClass !== getHash() && (je.mainClass = getHash(), vuePageChange$1(), 
                t.disconnect());
            }));
            J(".homeworkBody").length >= 1 && t.observe(J(".homeworkBody")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u4e91\u4e0a\u6cb3\u5f00\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("open.ha.cn") && location.href.includes("/homework/showHomeworkByStatus") && location.href.includes("checked=false"),
        types: [ "0", "1" ],
        question: {
            html: ".layui-colla-content > .insert",
            question: ".window-title",
            options: ".option-title",
            type: ".question-box .tag",
            workType: "openha",
            pageType: "openha"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".layui-colla-content > .insert");
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => (e.options = e.$options.map(((t, n) => {
            let a = J(n).find(".numberCover").text().trim();
            return removeHtml(e.$options.eq(t).html()).replace(a, "").trim();
        })).get(), e.type = typeConvert(J(e.html).find(".questionDiv>.float-l:eq(1)").text().trim()), 
        e.$options = J(e.html).find(".option-title .numberCover"), e),
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u4e91\u4e0a\u6cb3\u5f00\u6536\u5f55",
        match: () => location.host.includes("open.ha.cn") && location.href.includes("/homework/showHomeworkByStatus") && location.href.includes("checked=true"),
        question: {
            html: ".layui-colla-content > .insert",
            question: ".window-title",
            options: ".option-title",
            type: ".question-box .tag",
            workType: "openha",
            pageType: "openha"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".layui-colla-content > .insert");
            }));
        },
        answerHook: e => {
            let t = [];
            const n = 0 == J(e.html).find(".option-title.error2").length;
            if (e.options = e.$options.map(((n, a) => {
                let s = J(a).find(".numberCover").text().trim(), o = removeHtml(e.$options.eq(n).html()).replace(s, "").trim();
                return J(a).hasClass("answer-title") && t.push(o), o;
            })).get(), e.type = typeConvert(J(e.html).find(".questionDiv>.float-l:eq(1)").text().trim()), 
            n) return e.answer = t, J(e.html).find(".option-title.error2"), e;
        },
        paper: e => {
            const t = je.homework, n = {
                platform: "openha"
            };
            n.hash = t.courseId, n.name = t.courseName, n.info = {}, n.chapter = [ {
                hash: `${t.homeworkId}`,
                name: t.title,
                question: e
            } ], Ye.setPaper(n.hash, n);
        }
    } ], wt = [ {
        type: "ask",
        name: "\u6cb3\u5357\u7ee7\u7eed\u6559\u80b2\u7b54\u9898",
        tips: "",
        match: () => location.href.includes("uc/task/startTask"),
        types: [ "0", "1" ],
        answerDelay: 1e3,
        minDelay: 1e3,
        question: {
            html: ".carousel-inner>.item.changeless-box",
            question: ".exam-tg-txt__wrap.e-tg-box",
            options: ".ic-options-list address",
            type: ".question-box .tag",
            workType: "cloudwis",
            pageType: "cloudwis"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".carousel-inner>.item.changeless-box");
            })), !isExist("#finish")) return !1;
            await waitUntil((function() {
                let e = J(".carousel-inner>article").filter(((e, t) => J(t).hasClass("temporary-box"))).eq(0).index();
                return e > 0 ? (J(".slide-tihao:eq(" + e + ")")[0].click(), !1) : (J(".slide-tihao:eq(0)")[0].click(), 
                !0);
            }));
        },
        toquestion: e => {
            J(".slide-tihao:eq(" + e + ")")[0].click();
        },
        ischecked: e => e.find(".checked").length > 0,
        questionHook: e => (e.type = typeConvert(J(e.html).attr("data-name") || ""), e.$options = J(e.html).find(".ic-options__wrap label"), 
        e.question = e.question.replace(/^\(\d+\)/, "").trim(), e.question = e.question.replace(/\(\d+\u5206\)$/, "").trim(), 
        e),
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "ask",
        name: "\u6cb3\u5357\u7ee7\u7eed\u6559\u80b2\u8003\u8bd5\u7b54\u9898",
        tips: "",
        match: () => location.href.includes("uc/exam/record/startExamination"),
        types: [ "0", "1" ],
        question: {
            html: ".trunk-box",
            question: ".exam-tg-txt__wrap.e-tg-box",
            options: ".ic-options-list address",
            type: ".question-box .tag",
            workType: "cloudwis",
            pageType: "cloudwis"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".trunk-box") && isExist(".ic-ac-checkbox-ol");
            })), await waitUntil((function() {
                return window.scrollTo(0, document.body.scrollHeight), J(".ic-ac-checkbox-ol li").length == J(".trunk-box").length;
            })), !isExist("#submit-btn")) return !1;
        },
        next: () => {
            J("#carousel-professional").carousel("next");
        },
        ischecked: e => e.find(".checked").length > 0,
        questionHook: e => {
            const t = J(e.html).attr("data-type");
            switch (console.log(t), t) {
              case "1":
                e.type = "0";
                break;

              case "2":
                e.type = "1";
                break;

              case "3":
                e.type = "3", e.options = [];
            }
            return e.question = e.question.replace(/^\d+\u3001/, "").trim(), e.question = e.question.replace(/\(\d+\u5206\)$/, "").trim(), 
            e.question = e.question.replace(/\[\S+\]$/, "").trim(), e.$options = J(e.html).find(".ic-options__wrap label"), 
            e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u6cb3\u5357\u7ee7\u7eed\u6559\u80b2\u6536\u5f55",
        match: () => location.href.includes("uc/task/startTask"),
        question: {
            html: ".carousel-inner>.item.changeless-box",
            question: ".exam-tg-txt__wrap.e-tg-box",
            options: ".ic-options-list address",
            type: ".question-box .tag",
            workType: "cloudwis",
            pageType: "cloudwis"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".carousel-inner>.item.changeless-box") && isExist(".slide-tihao");
            })), isExist("#finish")) return !1;
            await waitUntil((function() {
                let e = J(".carousel-inner>article").filter(((e, t) => J(t).hasClass("temporary-box"))).eq(0).index();
                return e > 0 ? (J(".slide-tihao:eq(" + e + ")")[0].click(), !1) : (J(".slide-tihao:eq(0)")[0].click(), 
                !0);
            }));
        },
        next: () => {},
        answerHook: e => {
            const t = J(e.html).find(".analysis-box .fs20.c-primary.vam").text().trim().split("");
            return e.type = typeConvert(J(e.html).attr("data-name") || ""), e.answer = t.map((t => e.options[t.charCodeAt(0) - 65])), 
            e.question = e.question.replace(/^\(\d+\)/, "").trim(), e.question = e.question.replace(/\(\d+\u5206\)$/, "").trim(), 
            e;
        }
    }, {
        type: "save",
        name: "\u6cb3\u5357\u7ee7\u7eed\u6559\u80b2\u8003\u8bd5\u6536\u5f55",
        match: () => location.href.includes("uc/exam/record/startExamination"),
        question: {
            html: ".trunk-box.answer-question",
            question: ".exam-tg-txt__wrap.e-tg-box",
            options: ".ic-options-list address",
            type: ".question-box .tag",
            workType: "cloudwis",
            pageType: "cloudwis"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".trunk-box") && isExist(".ic-ac-correct");
            })), await waitUntil((function() {
                return window.scrollTo(0, document.body.scrollHeight), J(".ic-ac-correct,.ic-ac-error").length == J(".trunk-box").length;
            })), isExist("#submit-btn")) return !1;
        },
        next: () => {
            J(".next-slide").click();
        },
        answerHook: e => {
            const t = J(e.html).attr("data-type");
            console.log(t);
            const n = J(e.html).find(".ic-options__wrap label").filter(((e, t) => J(t).find(".checked").length > 0)).map(((e, t) => removeHtml(J(t).html()))).get();
            switch (e.answer = n.map((t => e.options[t.charCodeAt(0) - 65])), e.question = e.question.replace(/^\d+\u3001/, "").trim(), 
            e.question = e.question.replace(/\(\d+\u5206\)$/, "").trim(), e.question = e.question.replace(/\[\S+\]$/, "").trim(), 
            t) {
              case "1":
                e.type = "0";
                break;

              case "2":
                e.type = "1";
                break;

              case "3":
                e.type = "3", e.options = [], e.answer = judgeAnswer(e.answer[0]);
            }
            return e;
        }
    } ], vt = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("sclecb.cn"),
        main: e => {
            const getHash = () => getUrl();
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), vuePageChange$1(), t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u56db\u5ddd\u5f00\u653e\u5927\u5b66\u7b54\u9898",
        tips: "",
        match: () => "study.sclecb.cn" === location.host && /\/[0-9]+\/show/i.test(location.href),
        types: [ "0", "1", "3" ],
        question: {
            html: ".testpaper-question.js-testpaper-question",
            question: ".testpaper-question-stem",
            options: ".testpaper-question-choices li",
            type: ".question-box .tag",
            workType: "sclecb",
            pageType: "sclecb"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".testpaper-question.js-testpaper-question");
            }));
        },
        next: () => {},
        ischecked: e => e.hasClass("checked"),
        questionHook: e => {
            switch (e.options = removeStartChar(e.options), e.$options = J(e.html).find(".testpaper-question-choice-inputs > label > input"), 
            e.type = typeConvert(J(e.html).parent().parent().find(".panel-heading>strong").text().trim()), 
            e.type, e.type) {
              case "0":
              case "1":
                break;

              case "3":
                e.$options = J(e.html).find(".radio-inline");
            }
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "ask",
        name: "\u56db\u5ddd\u5f00\u653e\u5927\u5b66\u7b54\u9898\u65e7",
        tips: "",
        match: () => location.host.includes("sclecb.cn") && /student\/course\/study\/[0-9a-zA-Z]+\/test\/redo/i.test(location.href),
        types: [ "0", "1" ],
        question: {
            html: ".questiono-item",
            question: ".clearfix.questiono-header h6",
            options: ".common_test_option .processing_img",
            type: ".question-box .tag",
            workType: "sclecb",
            pageType: "sclecb"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".questiono-item");
            }));
        },
        next: () => {},
        ischecked: e => e.hasClass("checked"),
        questionHook: e => {
            const t = J(e.html).parent().parent().find("div:eq(0)").text().trim();
            switch (!0) {
              case t.includes("\u5355\u9009\u9898"):
                e.type = "0";
                break;

              case t.includes("\u591a\u9009\u9898"):
                e.type = "1";
                break;

              case t.includes("\u5224\u65ad\u9898"):
                e.type = "3", e.options = [], e.$options = J(e.html).find(".common_test_option > label");
                break;

              default:
                return;
            }
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u56db\u5ddd\u5f00\u653e\u5927\u5b66\u6536\u5f55",
        match: () => "study.sclecb.cn" === location.host && (/task\/[0-9]+\/activity_show/i.test(location.href) || /result\/[0-9]+\/show/i.test(location.href)),
        question: {
            html: ".testpaper-question.js-testpaper-question",
            question: ".testpaper-question-stem",
            options: ".testpaper-question-choices li",
            type: ".question-box .tag",
            workType: "sclecb",
            pageType: "sclecb"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".testpaper-question.js-testpaper-question");
            }));
        },
        answerHook: (e, t) => {
            let n = [];
            e.options = e.$options.map(((e, t) => {
                const a = removeHtml(J(t).clone().find(".testpaper-question-choice-index").remove().end().html());
                return J(t).hasClass("testpaper-question-choice-right") && n.push(a), a;
            })).get(), e.answer = n, e.type = typeConvert(J(".js-panel-card>span").eq(t).prevAll("p").first().text().trim());
            const a = J(".js-panel-card>span").eq(t).hasClass("bg-success");
            switch (e.type) {
              case "0":
              case "1":
                break;

              case "3":
                let t = "";
                t = J(e.html).find(".testpaper-question-result").text().replace("\u4f60\u7684\u7b54\u6848\u662f", "").trim(), 
                e.answer = judgeAnswer(t);
            }
            if ((a || !(e.answer.length > 0) || "3" != e.type) && a) return e;
        }
    } ], bt = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("superchutou.com"),
        main: e => {
            const getHash = () => getUrl();
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), vuePageChange$1(), t.disconnect());
            }));
            J("#root").length >= 1 && t.observe(J("#root")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u51fa\u5934\u7cfb\u7edf\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("superchutou.com") && location.href.includes("onlineclass/exam/"),
        types: [ "0", "1" ],
        question: {
            html: "[class^='single_excer_item']",
            question: "[class^='title_content'] > [class^='title_content_text']:eq(1)",
            options: "[class^='options_content'] label",
            type: ".question-box .tag",
            workType: "chutou",
            pageType: "chutou"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist("[class^='single_excer_item']");
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => {
            let t = J(e.html).find("[class^='title_content'] > span:eq(1)").text();
            if (t = t.replace(/\u3010|\u3011/g, "").trim(), e.type = typeConvert(t), e.options = removeStartChar(e.options), 
            "3" === e.type) e.options = [];
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u51fa\u5934\u6536\u5f55",
        match: () => location.host.includes("superchutou.com") && location.href.includes("/onlineclass/analysis/"),
        question: {
            html: "[class^='single_excer_item']",
            question: "[class^='title_content'] > [class^='title_content_text']:eq(1)",
            options: "[class^='options_content'] label",
            type: ".question-box .tag",
            workType: "chutou",
            pageType: "chutou"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist("dl>dd>span");
            }));
        },
        answerHook: e => {
            let t = J(e.html).find("[class^='title_content'] > span:eq(1)").text();
            t = t.replace(/\u3010|\u3011/g, "").trim(), e.type = typeConvert(t), e.options = removeStartChar(e.options);
            const n = J(e.html).find(".ant-collapse-header>div.ant-row>div.ant-col.ant-col-18>div:eq(1)").text().replace("\u53c2\u8003\u7b54\u6848\uff1a", "").trim();
            switch (e.type) {
              case "0":
              case "1":
                e.answer = n.split("").map((t => e.options[t.charCodeAt(0) - 65]));
                break;

              case "3":
                e.options = [], e.answer = judgeAnswer(n);
            }
            return e;
        }
    } ], xt = [ {
        type: "ask",
        name: "\u826f\u5e08\u5728\u7ebf\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("ls365.net") && (location.href.includes("student/examing.aspx") || location.href.includes("Student/myhomework.aspx")),
        types: [ "0", "1" ],
        question: {
            html: ".exam_question",
            question: ".exam_question_title",
            options: ".question_select .select_detail",
            type: ".exam_question_title strong",
            workType: "ls365",
            pageType: "ls365"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".exam_question");
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => {
            let t = J(e.html).find(".exam_question_title").clone();
            t.find(".question_number").remove(), t.find("strong").remove(), t.find(".exam_feed_back").remove(), 
            e.question = removeHtml(t.html());
            let n = J(e.html).find(".exam_question_title strong").text();
            return n = n.replace(/\[|\]/g, "").trim(), e.type = typeConvert(n), e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u826f\u5e08\u5728\u7ebf\u8003\u8bd5\u6536\u5f55",
        match: () => location.host.includes("ls365.net") && location.href.includes("User/Student/ViewPaper.aspx"),
        question: {
            html: "[name^='anchor_']",
            question: ".title-img-ctr",
            options: ".pold .phtml",
            type: ".QuestionsType",
            workType: "ls365",
            pageType: "ls365"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist("[name^='anchor_']");
            }));
        },
        answerHook: e => {
            let t = J(e.html).find(".QuestionsType").text();
            t = t.replace(/\[|\]/g, "").trim(), e.type = typeConvert(t);
            let n = J(e.html).find(".my-work-answer>p").filter(((e, t) => t.innerText.includes("\u53c2\u8003\u7b54\u6848"))).map(((e, t) => J(t).find(".two").text())).get();
            if (0 !== n.length) return e.answer = n[0].split("").map((t => e.options[t.charCodeAt(0) - 65])), 
            e;
        }
    }, {
        type: "save",
        name: "\u826f\u5e08\u5728\u7ebf\u4f5c\u4e1a\u6536\u5f55",
        match: () => location.host.includes("ls365.net") && location.href.includes("Student/myhomework_after.aspx"),
        question: {
            html: "[name^='anchor_']",
            question: ".my-work-nav>.col-md-10",
            options: ".pold .phtml",
            type: ".QuestionsType",
            workType: "ls365",
            pageType: "ls365"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist("[name^='anchor_']");
            }));
        },
        answerHook: e => {
            let t = J(e.html).find(".my-work-nav>div:eq(0)>span:eq(0)").text();
            t = t.replace(/\[|\]/g, "").trim(), e.type = typeConvert(t);
            let n = J(e.html).find(".my-work-answer>p").filter(((e, t) => t.innerText.includes("\u53c2\u8003\u7b54\u6848"))).map(((e, t) => J(t).find(".two").text())).get();
            if (0 !== n.length) return e.answer = n[0].split("").map((t => e.options[t.charCodeAt(0) - 65])), 
            e;
        }
    } ], _t = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("jijiaox.com"),
        main: e => {
            je.mainClass = J("#app")[0].__vue__.$route.path;
            let t = new MutationObserver((async e => {
                je.mainClass !== J("#app")[0].__vue__.$route.path && (je.mainClass = J("#app")[0].__vue__.$route.path, 
                vuePageChange(), t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u7ee7\u6559\u4e91\u8003\u8bd5\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("jijiaox.com") && (location.href.includes("/mg/studentindexexam/") || !location.href.includes("examrec")),
        types: [ "0", "1", "3", "4" ],
        question: {
            html: ".question>div",
            question: ".topic-title",
            options: ".ml_2 label",
            type: ".question-box .tag",
            workType: "jijiaox",
            pageType: "jijiaox"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".question>div");
            }));
        },
        next: () => {},
        ischecked: e => e.hasClass("is-checked"),
        questionHook: (e, t) => {
            const n = J(".page")[0].__vue__.$data.testInfo.studentPraxisList[t];
            switch (e.options = n.options ? n.options : [], "string" == typeof e.options && (e.options = []), 
            e.question = removeHtml(n.title), n.type) {
              case "single":
                e.type = "0";
                break;

              case "muti":
                e.type = "1";
                break;

              case "charge":
                e.type = "3";
                break;

              case "text":
                e.type = "4";
                break;

              default:
                console.log(n.type, "\u672a\u77e5\u7c7b\u578b");
            }
            return e;
        },
        setAnswer: e => "4" !== e.type || (J(e.html).find(".editor")[0].__vue__.editor.txt.html(e.answer[0]), 
        !1),
        finish: e => {}
    }, {
        type: "save",
        name: "\u7ee7\u6559\u4e91\u8003\u8bd5\u6536\u5f55",
        match: () => location.host.includes("jijiaox.com") && location.href.includes("/mg/studentindexexam/examrec/"),
        question: {
            html: ".question>div",
            question: ".topic-title",
            options: ".el-radio-group label .label,.el-checkbox-group label .label",
            type: ".question-box .tag",
            workType: "jijiaox",
            pageType: "jijiaox"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".question>div");
            }));
        },
        answerHook: (e, t) => {
            const n = J(".page")[0].__vue__.$data.testInfo.studentPraxisList[t], a = n.answer;
            switch (e.options = n.options ? n.options : [], "string" == typeof e.options && (e.options = []), 
            e.question = removeHtml(n.title), n.type) {
              case "single":
                e.type = "0";
                break;

              case "muti":
                e.type = "1";
                break;

              case "charge":
                e.type = "3", e.answer = "1" == a ? [ "\u6b63\u786e" ] : "-1" == a ? [ "\u9519\u8bef" ] : [];
                break;

              case "text":
                e.type = "4", e.answer = [ removeHtml(a) ];
                break;

              default:
                console.log(n.type, "\u672a\u77e5\u7c7b\u578b");
            }
            switch (e.type) {
              case "0":
              case "1":
                console.log("________", a), e.answer = "string" == typeof a ? a.split("").map((t => e.options[t.charCodeAt(0) - 65])) : a.map((t => (console.log(t), 
                e.options[t.charCodeAt(0) - 65])));
            }
            return console.log(e), e;
        }
    } ], kt = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("wencaischool.net") && J("#app").length,
        main: e => {
            je.mainClass = J("#app")[0].__vue__.$route.path;
            let t = new MutationObserver((async e => {
                je.mainClass !== J("#app")[0].__vue__.$route.path && (je.mainClass = J("#app")[0].__vue__.$route.path, 
                vuePageChange(), t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
            const n = document.createElement("style");
            n.type = "text/css", n.innerHTML = "* {\n              font-size: 13px !important;\n            }", 
            document.head.appendChild(n);
        }
    }, {
        type: "ask",
        name: "\u67e0\u6aac\u6587\u624d\u8003\u8bd5\u7b54\u9898",
        tips: "\u6b64\u5e73\u53f0\u7b54\u9898\u95f4\u9694\u5c3d\u91cf3s\u5de6\u53f3\uff0c\u5426\u5219\u53ef\u80fd\u9009\u4e0d\u4e0a\u7b54\u6848",
        match: () => location.host.includes("wencaischool.net") && location.href.includes("/separation/exam/index.html"),
        types: [ "0", "1", "2", "3", "4", "5", "6", "7", "14" ],
        minDelay: 2e3,
        answerDelay: 1e3,
        question: {
            html: ".tmList",
            question: ".tmTitleTxt",
            options: ".perRad .opCont",
            type: ".question-box .tag",
            workType: "wencai",
            pageType: "wencai"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".tmList") && J("#onlineExamArea")[0].__vue__._data.itemsList.length > 0;
            }));
        },
        next: () => {},
        ischecked: e => e[0].checked,
        questionHook: e => {
            let t = J(e.html).find(".tmc.tm").attr("ttype");
            return e.type = typeConvert({
                1: "\u586b\u7a7a\u9898",
                2: "\u7b80\u7b54\u9898",
                3: "\u5355\u9009\u9898",
                4: "\u591a\u9009\u9898",
                5: "\u9605\u8bfb\u7406\u89e3",
                12: "\u5b8c\u5f62\u586b\u7a7a"
            }[t]), e.$options = J(e.html).find(".perRad input"), e;
        },
        setAnswer: e => {
            switch (e.type) {
              case "4":
                return J(e.html).find("textarea").focus(), document.execCommand("selectAll"), document.execCommand("insertText", !1, e.answer[0]), 
                !1;

              case "2":
                J(e.html).find(".ansbox.inputAnswer input").each((async (t, n) => {
                    n.focus(), document.execCommand("selectAll");
                    let a = e.answer[t];
                    document.execCommand("insertText", !1, a), await sleep(1e3);
                }));
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "save",
        name: "\u67e0\u6aac\u6587\u624d\u8003\u8bd5\u6536\u5f55",
        match: () => location.host.includes("wencaischool.net") && location.href.includes("/separation/exam/index.html"),
        question: {
            html: ".tmList",
            question: ".tmTitleTxt",
            options: ".perRad .opCont",
            type: ".question-box .tag",
            workType: "wencai",
            pageType: "wencai"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".tmList") && J("#onlineExamArea")[0].__vue__._data.itemsList.length > 0;
            }));
        },
        answerHook: (e, t) => {
            const n = J("#onlineExamArea")[0].__vue__._data.itemsList[t];
            e.question = removeHtml(n.itemName), e.options = n.optionNodes.map((e => removeHtml(e.optionContent)));
            e.type = typeConvert({
                1: "\u586b\u7a7a\u9898",
                2: "\u7b80\u7b54\u9898",
                3: "\u5355\u9009\u9898",
                4: "\u591a\u9009\u9898",
                5: "\u9605\u8bfb\u7406\u89e3",
                12: "\u5b8c\u5f62\u586b\u7a7a"
            }[n.itemType]);
            let a = n.itemAnswer[0].optionContent;
            switch (e.type) {
              case "0":
              case "1":
                e.answer = a.split("").map((t => e.options[t.charCodeAt(0) - 65]));
                break;

              case "4":
                e.answer = removeHtml(a);
                break;

              case "2":
                e.answer = n.itemAnswer.map((e => removeHtml(e.optionContent)));
            }
            return e;
        }
    }, {
        type: "ask",
        name: "\u67e0\u6aac\u6587\u624d\u4f5c\u4e1a\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("wencaischool.net") && location.href.includes("/exam/portal/exam.jsp"),
        types: [ "0", "1", "2", "3" ],
        question: {
            html: "table[id^='tblItem_'][islabel='0']",
            question: "table>tbody>tr:eq(0)>td:eq(0)",
            options: "table>tbody>tr:eq(1)>td:eq(0) table>tbody>tr>td>label",
            type: ".question-box .tag",
            workType: "wencai",
            pageType: "wencai"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist("table[id^='tblItem_'][islabel=0]");
            })), J(".aah_wrapper>div").css("z-index", 9999);
        },
        next: () => {},
        ischecked: e => e[0].checked,
        questionHook: e => {
            let t = removeHtml(J(e.html).parent().parent().prevAll("tr").filter((function() {
                return J(this).find("table[islabel='1']").length > 0;
            })).first().html());
            if (e.type = typeMatch(t), "8" == e.type && t.includes("\u9009\u62e9\u9898") && (e.type = "0"), 
            "3" === e.type) e.options = [];
            return e;
        },
        setAnswer: e => {
            if ("2" === e.type) {
                const t = J(e.html).find("table>tbody>tr:eq(0)>td:eq(0)>input");
                t.length == e.answer.length && t.each((async (t, n) => {
                    n.value = "", n.focus(), document.execCommand("selectAll");
                    let a = e.answer[t];
                    document.execCommand("insertText", !1, a), await sleep(1e3);
                }));
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "save",
        name: "\u67e0\u6aac\u6587\u624d\u4f5c\u4e1a\u6536\u5f55",
        match: () => location.host.includes("wencaischool.net") && location.href.includes("/openlearning/exam/portal/view_answer.jsp"),
        question: {
            html: "tr[id^='trScore_']",
            question: "table>tbody>tr:eq(0)>td:eq(0)",
            options: "table>tbody>tr:eq(1)>td:eq(0) table>tbody>tr>td>label",
            type: ".question-box .tag",
            workType: "wencai",
            pageType: "wencai"
        },
        init: async () => {},
        answerHook: (e, t) => {
            const n = removeHtml(J(e.html).prevAll("tr:not([id])").first().html());
            switch (e.type = typeMatch(n), "8" == e.type && n.includes("\u9009\u62e9\u9898") && (e.type = "0"), 
            e.type) {
              case "0":
              case "1":
              case "3":
                const t = J(e.html).find("table>tbody>tr:eq(1)>td:eq(0)>div[style='color:darkred;font-size:10pt']").text().split("\u7b54\u6848\uff1a")[1].split("]")[0];
                e.answer = t.split("").map((t => e.options[t.charCodeAt(0) - 65])), "3" == e.type && (e.options = [], 
                e.answer = judgeAnswer(e.answer[0]));
                break;

              case "2":
                const n = J(e.html).find("table>tbody>tr:eq(0)>td:eq(0)").clone();
                n.find("input").remove(), e.answer = n.find("nobr").map(((e, t) => {
                    const n = removeHtml(J(t).html());
                    return /\[\u53c2\u8003\u7b54\u6848\uff1a(.+?)\]/.exec(n)[1];
                })).get(), n.find("nobr").remove(), n.find("font").remove(), e.question = removeHtml(n.html());
            }
            return e;
        }
    } ], qt = [ {
        type: "save",
        name: "yxlearning\u6536\u5f55",
        match: () => location.host.includes("yxlearning.com") && location.href.includes("exam/start?myExamRecordId"),
        question: {
            html: ".subject>.mb20.sub",
            question: ".ls1.lh30.text-f666",
            options: "ul.options>li.cursor-p",
            type: ".question-box .tag",
            workType: "yxlearning",
            pageType: "yxlearning"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".mb20.sub");
            })), !je.yxques) return !1;
        },
        answerHook: (e, t) => {
            const n = [];
            je.yxques.questionStemRPS.forEach(((e, t) => {
                e.listPaperQuestionRP.forEach(((e, t) => {
                    n.push(e);
                }));
            }));
            const a = n[t];
            e.question = titleClean(removeHtml(a.questionName));
            const s = a.type, o = [];
            switch (e.options = removeStartChar(a.paperOptionRPS.map((e => removeHtml(e.context)))), 
            a.paperOptionRPS.forEach(((t, n) => {
                1 == t.standardAnswer && o.push(e.options[n]);
            })), e.answer = o, s) {
              case 1:
                e.type = "3", e.options = [], e.answer = judgeAnswer(e.answer[0]);
                break;

              case 2:
                e.type = "0";
                break;

              case 3:
                e.type = "1";
            }
            return e;
        }
    }, {
        type: "ask",
        name: "\u65e5\u7167\u4e13\u4e1a\u6280\u672f\u4eba\u5458\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("yxlearning.com") && location.href.includes("exam/start?myExamRecordId"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".mb20.sub",
            question: ".ls1.lh30.text-f666",
            options: ".cursor-p",
            type: ".question-box .tag",
            workType: "yxlearning",
            pageType: "yxlearning"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".mb20.sub");
            }));
        },
        next: () => {},
        ischecked: e => e.hasClass("active"),
        questionHook: e => {
            if (e.options = removeStartChar(J(e.html).find("ul>li").map(((e, t) => removeHtml(J(t).html()))).get()), 
            e.$options = J(e.html).find("ul>li"), e.type = typeConvert(J(e.html).parent().prevAll(".title").first().find("[du-html='questionStemName']").text().trim()), 
            "3" === e.type) e.options = [], e.$options = J(e.html).find("ul>li");
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    } ], Ct = [ {
        type: "ask",
        name: "\u9ea6\u80fd\u7f51\u7b54\u9898",
        tips: "",
        match: () => location.href.includes("lms/web/onlineexam/exambegin"),
        types: [ "0", "1", "3" ],
        question: {
            html: "#exam_form>.sdiv",
            question: ".eptimu_name",
            options: ".ansdiv > .optiondiv",
            type: ".eptimu_title",
            workType: "cjnep",
            pageType: "cjnep"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".sdiv");
            }));
        },
        toquestion: e => {
            J(`.controldiv > a:eq(${e})`), J(`.epcl_circle:eq(${e})`)[0].click();
        },
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => {
            if (e.question = e.question.replace(/^[0-9]+\u3001/, "").trim(), e.question = titleClean(e.question), 
            e.options = removeStartChar(e.options), e.type = typeMatch(J(e.html).find(".eptimu_title").text().trim()), 
            e.$options = J(e.html).find(".ansdiv input"), "3" === e.type) e.options = [];
            return e;
        },
        setAnswer: e => {
            switch (e.type) {
              case "3":
                let t = e.answer;
                return J(e.html).find(".ansdiv input").each(((e, n) => {
                    isTrue(t) && "1" == J(n).val() && J(n).click(), isFalse(t) && "0" == J(n).val() && J(n).click();
                })), !1;

              case "2":
              case "4":
              case "5":
              case "6":
                const n = J(e.html).find(".ansdiv textarea"), a = e.answer.join(";");
                n.val(a), n.trigger("input"), n.trigger("keydown"), n.trigger("change"), n.trigger("blur"), 
                n.trigger("focus");
                const s = n[0];
                if (s) {
                    [ "input", "change", "blur", "focus" ].forEach((e => {
                        const t = new Event(e, {
                            bubbles: !0
                        });
                        s.dispatchEvent(t);
                    }));
                }
                return !1;
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "save",
        name: "\u9ea6\u80fd\u7f51\u7b54\u9898\u6536\u5f55",
        match: () => location.href.includes("lms/web/exam/examshow"),
        question: {
            html: "#exam_form>.sdiv",
            question: ".eptimu_name",
            options: ".ansdiv > .optiondiv",
            type: ".eptimu_title",
            workType: "cjnep",
            pageType: "cjnep"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".sdiv");
            }));
        },
        answerHook: e => {
            switch (e.type = typeMatch(J(e.html).find(".eptimu_title").text().trim()), e.question = e.question.replace(/^[0-9]+\u3001/, "").trim(), 
            e.question = titleClean(e.question), e.options = removeStartChar(e.$options.map(((e, t) => {
                let n = J(t).clone();
                return J(n).find("img").remove(), removeHtml(J(n).html()).trim();
            })).get()), e.type) {
              case "0":
              case "1":
                e.answer = e.$options.map(((t, n) => {
                    var a;
                    return (null == (a = J(n).find("img").attr("src")) ? void 0 : a.includes("exam-yes")) && e.options[t];
                })).get().filter((e => void 0 !== e));
                break;

              case "3":
                e.answer = e.$options.map(((t, n) => {
                    var a;
                    return (null == (a = J(n).find("img").attr("src")) ? void 0 : a.includes("exam-yes")) && e.options[t];
                })).get().filter((e => void 0 !== e)), e.answer = judgeAnswer(e.answer), e.options = [];
                break;

              case "4":
                e.options = [];
                let t = removeHtml(J(e.html).find(".eptimu_answer.ansdiv").html()).trim();
                t.includes("\u6b63\u786e\u7b54\u6848\uff1a") ? e.answer = t.split("\u6b63\u786e\u7b54\u6848\uff1a")[1].trim() : e.answer = [];
            }
            return e;
        }
    } ], Tt = [ {
        type: "ask",
        name: "\u9ea6\u80fd\u7f51\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("mynep.com") && location.href.includes("my-exam/exambegin"),
        types: [ "0", "1" ],
        question: {
            html: ".et_test",
            question: ".et_title",
            options: "ul>.et_answer>label",
            type: ".question-box .tag",
            workType: "mynep",
            pageType: "mynep"
        },
        init: async () => {},
        toquestion: e => {
            je.select_num(e + 1);
        },
        next: () => {},
        ischecked: e => e.parent().find("input").prop("checked"),
        questionHook: e => {
            e.question = e.question.replace(/\u7b2c\d+\u9898\uff1a/, ""), e.options = removeStartChar(e.options);
            switch (J(e.html).find('input[id^="question-num-isdone"]').attr("question_num_type_id")) {
              case "1":
                e.type = "0";
                break;

              case "2":
                e.type = "1";
            }
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u9ea6\u80fd\u7f51\u6536\u5f55",
        match: () => location.host.includes("mynep.com") && location.href.includes("web/my-exam/examshow"),
        question: {
            html: ".et_test",
            question: ".et_title",
            options: "ul>.et_answer>label",
            type: ".question-box .tag",
            workType: "mynep",
            pageType: "mynep"
        },
        init: async () => {},
        answerHook: e => {
            const t = J(e.html).find(".et_title").clone();
            t.find(".exam-btn").remove(), t.find("div").remove(), e.question = removeHtml(t.html()).replace(/\u7b2c\d+\u9898\uff1a/, "").trim(), 
            e.options = [];
            const n = [];
            J(e.html).find(".et_answer>.et_answer>.et_answer>label").map(((t, a) => {
                e.options.push(removeHtml(J(a).html()).trim()), J(a).parent().find("input").prop("checked") && n.push(t);
            })).get(), e.options = removeStartChar(e.options), e.answer = n.map((t => e.options[t]));
            switch (J(e.html).find('input[id^="question-num-isdone"]').attr("question_num_type_id")) {
              case "1":
                e.type = "0";
                break;

              case "2":
                e.type = "1";
                break;

              default:
                return !1;
            }
            return e;
        }
    } ], At = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("91huayi.com"),
        main: e => {
            const getHash = () => J(".dd_01").attr("questionid");
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), "homework-detail-container" === je.mainClass && await waitUntil((function() {
                    return 0 === J(".el-loading-mask").length;
                })), vuePageChange$1(), t.disconnect());
            }));
            J(".box").length >= 1 && t.observe(J(".box")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u534e\u533b\u7f51\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("91huayi.com") && location.href.includes("/ExamInterface/ComputerExamIndex"),
        types: [ "0", "1" ],
        question: {
            html: "#exampage",
            question: ".dd_01",
            options: ".dd_02",
            type: ".big_type",
            workType: "huayi",
            pageType: "huayi"
        },
        init: async () => {},
        next: () => {
            var e;
            null == (e = J("#btnNext")) || e.click();
        },
        ischecked: e => e.prop("checked"),
        questionHook: e => {
            const t = J(e.html).find(".dd_01").clone();
            return t.find(".dd_01_red").remove(), e.question = removeHtml(t.html()), e.options = removeStartChar(e.options), 
            e.type = typeMatch(J(e.html).find(".big_type").text()), e.$options = J(e.html).find("dd.q-content input"), 
            e;
        },
        setAnswer: e => {
            switch (console.log(e), e.type) {
              case "0":
              case "1":
                return e.ques.$options.each(((t, n) => {
                    if (e.answer.includes(t)) {
                        if (e.rule.ischecked && e.rule.ischecked(J(n))) return;
                        n.click();
                    } else e.rule.ischecked && e.rule.ischecked(J(n)) && n.click();
                })), !1;
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "ask",
        name: "\u534e\u533b\u7f51\u8003\u8bd5",
        tips: "",
        match: () => location.host.includes("91huayi.com") && location.href.includes("/pages/exam.aspx?cwid="),
        types: [ "0" ],
        question: {
            html: ".test>table",
            question: "thead",
            options: "tbody>tr>td>label",
            type: ".big_type",
            workType: "huayi",
            pageType: "huayi"
        },
        init: async () => {},
        next: () => {
            var e;
            null == (e = J("#btnNext")) || e.click();
        },
        ischecked: e => e.prop("checked"),
        questionHook: e => (e.question = titleClean(e.question), e.question = e.question.replace(/^\d+\u3001/, ""), 
        e.options = removeStartChar(e.options), 0 !== e.options.length && (e.type = "0"), 
        e),
        setAnswer: e => !0,
        finish: e => {}
    } ], St = [ {
        type: "ask",
        name: "\u4e91\u5357\u5f00\u653e\u5927\u5b66\u7b54\u9898",
        tips: "",
        match: () => location.href.includes("hw/student/studentStartHomework.action") && location.host.includes("teach.ynou.edu.cn"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".e_juan02biaoti",
            question: ".qcontent > p:first",
            options: ".signDefault>.label",
            type: ".question-box .tag",
            workType: "ynou",
            pageType: "ynou"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".e_juan02biaoti").length;
            })), J("body").css("text-align", "left");
        },
        next: () => {},
        ischecked: e => (e.find("input").is(":checked"), e.find("input").is(":checked")),
        questionHook: e => {
            e.options = [];
            const t = J(e.html).find(".e_juan02daan").clone();
            t.find(".clear").nextAll().remove();
            const n = removeHtml(t.html()), a = n.split(/[A][\u3001\.\uff0e]/)[0].trim();
            null !== a && (e.question = a), e.question = a, e.question = a;
            const s = n.match(/(?:[A-G](?:[\u3001.]|\s)?\s?.*?)(?=\s*[A-G](?:[\u3001.]|\s)?|\s*$)/gs);
            if (null !== s) {
                const t = removeOptionsStartChar(s.map((e => e.trim())));
                !1 !== t && (e.options = t);
            }
            const o = J(e.html).find(".signDefault").attr("answer_control");
            return "radio" === o && e.options.length > 1 && (e.type = "0"), "checkbox" === o && e.options.length > 1 && (e.type = "1"), 
            "radio" === o && 0 === e.options.length && (e.type = "3"), e;
        },
        setAnswer: e => {
            if (console.log(e), "3" === e.type) {
                let t = e.answer;
                return e.ques.$options.each(((e, n) => {
                    isTrue(t) && isTrue(removeHtml(J(n).html())) && J(n).click(), isFalse(t) && isFalse(removeHtml(J(n).html())) && J(n).click();
                })), !1;
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "save",
        name: "\u6536\u5f55",
        match: () => location.href.includes("/hw/student/studentViewHomework.action") && location.host.includes("teach.ynou.edu.cn"),
        question: {
            html: ".e_juan02biaoti",
            question: ".qcontent > p:first",
            options: ".signDefault>.label",
            type: ".question-box .tag",
            workType: "ynou",
            pageType: "ynou"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".e_juan02biaoti").length;
            })), J("body").css("text-align", "left");
        },
        answerHook: e => {
            e.options = [];
            const t = J(e.html).find(".e_juan02daan").clone();
            t.find(".clear").nextAll().remove();
            const n = removeHtml(t.html()), a = n.split(/[A][\u3001\.\uff0e]/)[0].trim();
            if (null === a) return null;
            e.question = a;
            const s = n.match(/(?:[A-G](?:[\u3001.]|\s)?\s?.*?)(?=\s*[A-G](?:[\u3001.]|\s)?|\s*$)/gs);
            if (null !== s) {
                const t = removeOptionsStartChar(s.map((e => e.trim())));
                if (0 == t) return null;
                e.options = t;
            }
            const o = J(e.html).find(".signDefault").attr("answer_control");
            "radio" === o && e.options.length > 1 && (e.type = "0"), "checkbox" === o && e.options.length > 1 && (e.type = "1"), 
            "radio" === o && 0 === e.options.length && (e.type = "3");
            const i = J(e.html).find(".right_answer>font").text();
            switch (e.type) {
              case "0":
              case "1":
                e.answer = i.split("").map((t => e.options[t.charCodeAt(0) - 65]));
                break;

              case "3":
                e.answer = isTrue(i) ? "\u6b63\u786e" : isFalse(i) ? "\u9519\u8bef" : "";
            }
            return e;
        }
    } ], Ut = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("21tb.com"),
        main: e => {
            const getHash = () => J("#examIngEmsRightPanel").attr("class");
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), vuePageChange$1(), t.disconnect());
            }));
            J("#examIngEmsRightPanel").length >= 1 && t.observe(J("#examIngEmsRightPanel")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "21tb\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("21tb.com") && location.href.includes("exercise/newExercise.fullExerciseTemp.do"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".paper-content > .question-panel-middle",
            question: ".question-stem>.name",
            options: "ul.question-options>li>label",
            type: ".question-box .tag",
            workType: "21tb",
            pageType: "21tb"
        },
        init: async () => {
            if (J(".view-paper-content").length > 0) return !1;
        },
        next: () => {},
        ischecked: e => e.parent().find("input").prop("checked"),
        questionHook: e => {
            e.question = titleClean(e.question), e.question = e.question.replace(/\uff08\d+\u5206\uff09$/, "").trim(), 
            e.options = e.options.map((e => e.replace(/^[A-Z]\s*\.\s*/, ""))), e.options = removeStartChar(e.options);
            const t = J(e.html).attr("class") || "";
            switch (console.log(t), !0) {
              case t.includes("SINGLE"):
                e.type = "0";
                break;

              case t.includes("MULTIPLE"):
                e.type = "1";
                break;

              case t.includes("JUDGMENT"):
                e.type = "3", e.options = [];
            }
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "21tb\u6536\u5f55",
        match: () => location.host.includes("21tb.com") && location.href.includes("exercise/newExercise.fullExerciseTemp.do"),
        question: {
            html: "form > .question-panel-middle",
            question: ".question-stem>.name",
            options: "ul.question-options>li>label",
            type: ".question-box .tag",
            workType: "21tb",
            pageType: "21tb"
        },
        init: async () => {
            if (console.log(J(".view-paper-content").length), 0 == J(".view-paper-content").length) return !1;
        },
        answerHook: e => {
            e.question = titleClean(e.question), e.question = e.question.replace(/\uff08\d+\u5206\uff09$/, "").trim(), 
            e.options = e.options.map((e => e.replace(/^[A-Z]\s*\.\s*/, ""))), e.options = removeStartChar(e.options);
            const t = J(e.html).attr("questtype") || "", n = J(e.html).find(".true-answer").text().split("\uff1a")[1].trim();
            switch (!0) {
              case t.includes("SINGLE"):
                e.type = "0", e.answer = n.split(", ").map((t => e.options[t.charCodeAt(0) - 65]));
                break;

              case t.includes("MULTIPLE"):
                e.type = "1", e.answer = n.split(", ").map((t => e.options[t.charCodeAt(0) - 65]));
                break;

              case t.includes("JUDGMENT"):
                e.type = "3", e.options = [], e.answer = judgeAnswer(n);
            }
            return console.log(e), e;
        }
    }, {
        type: "ask",
        name: "21tb\u8003\u8bd5\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("21tb.com") && location.href.includes("ems/html/examCenter/fullExamTemp.do"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".paper-content > .question-panel-middle",
            question: ".question-stem",
            options: "ul.question-options>li>label",
            type: ".question-box .tag",
            workType: "21tb",
            pageType: "21tb"
        },
        init: async () => {
            if (J(".view-paper-content").length > 0) return !1;
        },
        next: () => {},
        ischecked: e => e.parent().find("input").prop("checked"),
        questionHook: e => {
            const t = J(e.html).find(".question-stem").clone();
            t.find(".num").remove(), e.question = titleClean(removeHtml(t.html())).replace(/^\./, ""), 
            e.question = e.question.replace(/\uff08\d+\u5206\uff09$/, "").trim(), e.options = e.options.map((e => e.replace(/^[A-Z]\s*\.\s*/, ""))), 
            e.options = removeStartChar(e.options);
            const n = J(e.html).attr("class") || "";
            switch (console.log(n), !0) {
              case n.includes("SINGLE"):
                e.type = "0";
                break;

              case n.includes("MULTIPLE"):
                e.type = "1";
                break;

              case n.includes("JUDGMENT"):
                e.type = "3", e.options = [];
            }
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    } ], Ht = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("168wangxiao.com"),
        main: e => {
            const getHash = () => (J(".question-submit-btn").text(), J(".question-submit-btn").text() || J(".listTit>span").text());
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), "homework-detail-container" === je.mainClass && await waitUntil((function() {
                    return 0 === J(".el-loading-mask").length;
                })), vuePageChange$1(), t.disconnect());
            }));
            J("#app").length >= 1 && (J("#app")[0], t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            }));
        }
    }, {
        type: "ask",
        name: "168\u7f51\u6821\u7b54\u9898",
        tips: "168\u7f51\u6821\u76ee\u524d\u652f\u6301\u9009\u62e9\u3001\u5224\u65ad\u3001\u586b\u7a7a\u3001\u7b80\u7b54\uff0c\u5176\u4ed6\u9898\u578b\u8bf7\u53cd\u9988\u7ed9\u4f5c\u8005",
        match: () => location.host.includes("168wangxiao.com") && location.href.includes("/web/learningCenter/details/"),
        types: [ "0", "1", "2", "3", "4" ],
        question: {
            html: ".question-item-container",
            question: ".title-content",
            options: ".options .opt-content",
            type: ".type",
            workType: "168wx",
            pageType: "168wx"
        },
        init: async () => (await waitUntil((function() {
            return 0 !== J(".question-item-container").length;
        })), !J(".question-submit-btn").text().includes("\u91cd\u65b0\u7b54\u9898")),
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => {
            const t = J(e.html).find(".type").text();
            return e.type = typeMatch(t), e;
        },
        setAnswer: e => "4" !== e.type || (J(e.html).find(".ql-editor"), J(e.html).find(".ql-editor")[0].innerHTML = e.answer[0], 
        !1),
        finish: e => {}
    }, {
        type: "save",
        name: "168\u7f51\u6821\u7b54\u9898",
        match: () => location.host.includes("168wangxiao.com") && location.href.includes("/web/learningCenter/details/"),
        question: {
            html: ".question-item-container",
            question: ".title-content",
            options: ".options .opt-content",
            type: ".type",
            workType: "168wx",
            pageType: "168wx"
        },
        init: async () => (await waitUntil((function() {
            return 0 !== J(".question-item-container").length;
        })), J(".question-submit-btn").text().includes("\u91cd\u65b0\u7b54\u9898")),
        answerHook: e => {
            const t = J(e.html).find(".type").text();
            switch (e.type = typeMatch(t), e.answer = J(e.html).find(".options .opt-content.is-correct-answer").map(((e, t) => removeHtml(J(t).html()))).get(), 
            e.type) {
              case "2":
                e.options = [], e.answer = J(e.html).find(".analyze-container>.answer>.text-container>p").map(((e, t) => removeHtml(J(t).html()))).get();
                break;

              case "3":
                e.options = [], e.answer = [ judgeAnswer(e.answer[0]) ];
                break;

              case "4":
                e.options = [], e.answer = J(e.html).find(".analyze-container>.answer>.text-container").map(((e, t) => removeHtml(J(t).html()))).get();
            }
            return e;
        }
    }, {
        type: "ask",
        name: "168\u7f51\u6821\u8003\u8bd5",
        tips: "",
        match: () => location.host.includes("168wangxiao.com") && location.href.includes("/web/examination/answer"),
        types: [ "0", "1", "2", "3", "4" ],
        question: {
            html: ".Answer-area",
            question: ".listTit>span",
            options: ".el-checkbox-group>label",
            type: ".type",
            workType: "168wx",
            pageType: "168wx"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".Answer-area").length;
            }));
        },
        next: () => {
            J('button:contains("\u4e0b\u4e00\u9898")').click();
        },
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => (e.options = removeOptionsStartChar(e.options), e.type = typeMatch(J(".tit-type").text()), 
        e),
        setAnswer: e => "4" !== e.type || (J(e.html).find(".ql-editor"), J(e.html).find(".ql-editor")[0].innerHTML = e.answer[0], 
        !1),
        finish: e => {}
    } ], Et = [ {
        type: "ask",
        name: "\u4e91\u73ed\u8bfe\u7b54\u9898",
        tips: "",
        match: () => "www.mosoteach.cn" === location.host && location.href.includes("/web/index.php?c=interaction_quiz&m=reply"),
        types: [ "0", "1" ],
        question: {
            html: ".topic-item",
            question: ".t-subject",
            options: ".t-option.t-item label,.t-judge.t-item label",
            type: ".t-type",
            workType: "mosoteach",
            pageType: "mosoteach"
        },
        init: async () => {
            await waitUntil((function() {
                var e;
                return 0 !== (null == (e = J("#app")[0]) ? void 0 : e.__vue__.$data.topics.length);
            }));
        },
        next: () => {},
        ischecked: e => e.hasClass("is-checked"),
        questionHook: (e, t) => {
            const n = J("#app")[0].__vue__.$data.topics[t];
            e.question = titleClean(removeHtml(n.subject));
            const a = n.options;
            switch (a.sort(((e, t) => e.item_no - t.item_no)), e.options = a.map((e => removeHtml(e.content))), 
            n.type) {
              case "SINGLE":
                e.type = "0";
                break;

              case "MULTI":
                e.type = "1";
                break;

              case "TF":
                e.type = "3";
            }
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u4e91\u73ed\u8bfe\u6536\u5f55",
        match: () => "www.mosoteach.cn" === location.host && location.href.includes("/web/index.php?c=interaction_quiz&m=person_quiz_result"),
        question: {
            html: ".topic-list > .topic-item",
            question: ".topic-title",
            options: ".el-radio-group label .label,.el-checkbox-group label .label",
            type: ".question-box .tag",
            workType: "mosoteach",
            pageType: "mosoteach"
        },
        init: async () => {
            await waitUntil((function() {
                var e;
                return 0 !== (null == (e = J("#app")[0]) ? void 0 : e.__vue__.$data.topics.length);
            }));
        },
        answerHook: (e, t) => {
            const n = J("#app")[0].__vue__.$data.topics[t];
            e.question = titleClean(removeHtml(n.subject));
            const a = n.options;
            switch (a.sort(((e, t) => e.item_no - t.item_no)), e.options = a.map((e => removeHtml(e.content))), 
            e.answer = n.answers.map((t => e.options[t])), n.type) {
              case "SINGLE":
                e.type = "0";
                break;

              case "MULTI":
                e.type = "1";
                break;

              case "TF":
                e.type = "3", e.answer = "F" === n.tfAnswer ? "\u9519\u8bef" : "T" === n.tfAnswer ? "\u6b63\u786e" : "";
                break;

              default:
                return null;
            }
            return e;
        }
    } ], $t = [ {
        type: "hook",
        name: "hook",
        match: "www.learnin.com.cn" === location.host,
        main: e => {
            const getHash = () => {
                try {
                    return J(".page-student-course-topic-do-container")[0].__vue__.$data.topic.studentTopic.id;
                } catch (e) {
                    return "";
                }
            };
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), vuePageChange$1(), t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "save",
        name: "learnin\u6536\u5f55",
        match: () => "www.learnin.com.cn" === location.host && location.href.includes("/user/#/user/student/course/") && 0 == J("button:contains('\u63d0\u4ea4\u4f5c\u4e1a')").length,
        question: {
            html: ".store-question-item-container",
            question: ".question-title",
            options: ".question-info>.question-option-list>.option-item",
            type: ".item-question-header>.header-left",
            workType: "learnin",
            pageType: "learnin"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".store-question-item-container");
            }));
        },
        answerHook: (e, t) => {
            const n = J(".page-student-course-topic-do-container")[0].__vue__.$data.topic.topicItems[0].childList, a = n[t];
            switch (n[t], a.questionTypeCode) {
              case "judgment":
                e.type = "3";
                break;

              case "single":
                e.type = "0";
                break;

              case "multiple":
                e.type = "1";
                break;

              default:
                return e;
            }
            e.question = titleClean(removeHtml(a.questionTitle));
            let s = [], o = [];
            return a.optionList.forEach((e => {
                const t = removeHtml(e.content);
                e.isAnswer && o.push(t), s.push(t);
            })), e.options = s, e.answer = o, "3" == e.type && (e.options = [], e.answer = judgeAnswer(o[0])), 
            e;
        }
    }, {
        type: "ask",
        name: "learnin\u7b54\u9898",
        tips: "",
        match: () => "www.learnin.com.cn" === location.host && location.href.includes("/user/#/user/student/course/") && 1 == J("button:contains('\u63d0\u4ea4\u4f5c\u4e1a')").length,
        types: [ "0", "1", "3" ],
        question: {
            html: ".store-question-item-container",
            question: ".question-title",
            options: ".question-info>.question-option-list>.option-item>.option-index",
            type: ".item-question-header>.header-left",
            workType: "learnin",
            pageType: "learnin"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".store-question-item-container");
            }));
        },
        next: () => {},
        ischecked: e => e.hasClass("active"),
        questionHook: (e, t) => {
            const n = J(".page-student-course-topic-do-container")[0].__vue__.$data.topic.topicItems[0].childList, a = n[t];
            switch (n[t], a.questionTypeCode) {
              case "judgment":
                e.type = "3";
                break;

              case "single":
                e.type = "0";
                break;

              case "multiple":
                e.type = "1";
                break;

              default:
                return e;
            }
            e.question = titleClean(removeHtml(a.questionTitle));
            let s = [];
            return a.optionList.forEach((e => {
                const t = removeHtml(e.content);
                s.push(t);
            })), e.options = s, "3" == e.type && (e.options = []), e;
        },
        setAnswer: e => !0,
        finish: e => {}
    } ], It = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("ouchn.edu.cn"),
        main: e => {
            const getHash = () => getUrl();
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), vuePageChange$1(), t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u7535\u5927\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("ouchn.edu.cn") && location.href.includes("learningPlatform/#/myExamDetails/examQuestion"),
        types: [ "0" ],
        question: {
            html: ".everyQuest",
            question: ".topicTitle",
            options: ".optionList .topicTitle",
            type: ".question-box .tag",
            workType: "ouchn",
            pageType: "ouchn"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".everyQuest");
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => (e.type = "0", e),
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u7535\u5927\u6536\u5f55",
        match: () => location.host.includes("ouchn.edu.cn") && location.href.includes("learningPlatform/#/myExamDetails/testPaper"),
        question: {
            html: ".everyQuest",
            question: ".topicTitle",
            options: ".optionList .topicTitle",
            type: ".question-box .tag",
            workType: "ouchn",
            pageType: "ouchn"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".everyQuest");
            }));
        },
        answerHook: e => {
            const t = J(e.html).find('.rightAndWrong>span:contains("\u6b63\u786e\u7b54\u6848")').text().replace("\u6b63\u786e\u7b54\u6848\uff1a", "").trim(), n = e.options;
            let a = [];
            return t.split("").forEach((e => {
                a.push(n[e.charCodeAt(0) - 65]);
            })), 1 == a.length ? e.type = "0" : e.type = "1", e.answer = a, e;
        }
    } ], jt = [ {
        type: "hook",
        name: "mooc",
        match: "www.icourse163.org" === location.host,
        main: e => {
            je.mainClass = J("#courseLearn-inner-box > div:eq(0)").attr("class");
            let t = new MutationObserver((async e => {
                je.mainClass !== J("#courseLearn-inner-box > div:eq(0)").attr("class") && (je.mainClass = J("#courseLearn-inner-box > div:eq(0)").attr("class"), 
                "homework-detail-container" === je.mainClass && await waitUntil((function() {
                    return 0 === J(".el-loading-mask").length;
                })), vuePageChange$1(), t.disconnect());
            }));
            J("#courseLearn-inner-box").length >= 1 && t.observe(J("#courseLearn-inner-box")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "mooc\u7b54\u9898",
        tips: "\u4e2d\u56fd\u5927\u5b66MOOC\u9650\u5236\u7b54\u9898\u901f\u5ea6\uff0c\u8bf7\u4e0d\u8981\u8fc7\u5feb",
        match: () => "www.icourse163.org" === location.host && location.href.includes("#/learn/quiz?id="),
        types: [ "0", "1", "2", "3" ],
        question: {
            html: ".u-questionItem",
            question: ".f-richEditorText",
            options: "ul.choices>li>input",
            type: ".qaCate.j-qacate.f-fl",
            workType: "mooc",
            pageType: "mooc"
        },
        init: async () => {
            await waitUntil((function() {
                return J(".u-questionItem").length, 0 !== J(".u-questionItem").length;
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: (e, t) => {
            J(e.html).find(".qaCate.j-qacate.f-fl > span:eq(0)").attr("class");
            const n = je.learnUtilQuestionList[t];
            switch (e.question = removeHtml(n.title), e.options = n.options.map((e => removeHtml(e.content))), 
            n.type) {
              case 1:
                e.type = "0";
                break;

              case 2:
                e.type = "1";
                break;

              case 3:
                e.type = "2";
                break;

              case 4:
                e.type = "3", e.options = [];
                break;

              default:
                n.type, e.type = "8";
            }
            return e;
        },
        setAnswer: e => {
            switch (e.type) {
              case "2":
                return J(e.html).find(".u-baseinputui>textarea").each(((t, n) => {
                    J(n).val(e.answer[t]), J(n).focus(), J(n).blur();
                })), !1;

              case "3":
                let t = e.answer;
                J(e.html).find("ul.choices>li").each(((e, n) => {
                    isTrue(t) && J(n).find(".u-icon-correct").length > 0 && J(n).find("input").click(), 
                    isFalse(t) && J(n).find(".u-icon-wrong").length > 0 && J(n).find("input").click();
                }));
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "save",
        name: "\u4e2d\u56fd\u5927\u5b66mooc\u6536\u5f55",
        match: () => "www.icourse163.org" === location.host && location.href.includes("#/learn/quizscore?id="),
        question: {
            html: ".u-questionItem",
            question: ".f-richEditorText",
            options: "ul.choices li>input",
            type: ".qaCate.j-qacate.f-fl",
            workType: "mooc",
            pageType: "mooc"
        },
        init: async () => {
            await waitUntil((function() {
                return J(".u-questionItem").length, 0 !== J(".u-questionItem").length;
            }));
        },
        answerHook: (e, t) => {
            const n = je.learnUtilQuestionList[t];
            e.question = removeHtml(n.title);
            let a = [], s = [];
            switch (n.options.forEach((e => {
                a.push(removeHtml(e.content)), e.answer && s.push(removeHtml(e.content));
            })), e.options = a, e.answer = s, n.type) {
              case 1:
                e.type = "0";
                break;

              case 2:
                e.type = "1";
                break;

              case 3:
                e.type = "2", e.answer = [ n.stdAnswer ];
                break;

              case 4:
                e.type = "3", e.options = [];
                break;

              default:
                n.type;
            }
            return e;
        }
    } ], zt = [ {
        type: "ask",
        name: "\u897f\u8d22\u5728\u7ebf\u7b54\u9898",
        tips: "",
        match: () => (location.host.includes("swufe-online.com") || location.host.includes("webtrn.cn")) && (location.href.includes("learnspace/course/test/coursewareTest_intoRedoTestPage.action") || location.href.includes("learnspace/learn/learn/templateeight/index.action") || location.href.includes("learnspace/course/test/coursewareTest_intoTestPage.action")),
        types: [ "0", "1", "3" ],
        question: {
            html: ".bank_test > .test_item",
            question: ".test_item_tit",
            options: ".test_item_theme>ul>li>label, .test_item_theme>label",
            type: ".question-box .tag",
            workType: "swufe",
            pageType: "swufe"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".bank_test > .test_item");
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => {
            const t = J(e.html).find(".test_item_tit").clone();
            if (t.find(".tipNodo").remove(), e.question = removeHtml(t.html()), e.question = titleClean(e.question), 
            e.type = typeMatch(J(e.html).prevAll(".test_item_type").first().text()), e.question = e.question.replace(/^[.*?]\s*/, "").replace(/^\u3010.*?\u3011\s*/, "").replace(/\s*\uff08\d+\.\d+\u5206\uff09$/, "").replace(/^\d+\./, "").trim().replace(/^\d+\uff0e/, "").trim().replace(/^\d+ ./, "").trim(), 
            e.options = removeStartChar(e.options), "3" === e.type) e.options = [];
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u897f\u8d22\u5728\u7ebf\u9636\u6bb5\u6d4b\u9a8c\u6536\u5f55",
        match: () => (location.host.includes("swufe-online.com") || location.host.includes("webtrn.cn")) && (location.href.includes("learnspace/course/test/coursewareTest_intoTestAnswerPage.action") || location.href.includes("learnspace/learn/learn/templateeight/index.action")),
        question: {
            html: ".bank_test > .test_item",
            question: ".test_item_tit",
            options: ".test_item_theme>ul>li>.zdh_op_con",
            type: ".question-box .tag",
            workType: "swufe",
            pageType: "swufe"
        },
        init: async () => {},
        answerHook: e => {
            e.type = typeMatch(J(e.html).prevAll(".test_item_type").first().text()), e.question = e.question.replace(/^[.*?]\s*/, "").replace(/^\u3010.*?\u3011\s*/, "").replace(/\s*\uff08\d+\.\d+\u5206\uff09$/, "").replace(/^\d+\./, "").trim().replace(/^\d+\uff0e/, "").trim().replace(/^\d+ ./, "").trim(), 
            e.options = removeStartChar(e.options);
            const t = J(e.html).find(".test_item_key_tit").text().replace("\u53c2\u8003\u7b54\u6848\uff1a", "").trim();
            switch (e.type) {
              case "0":
              case "1":
                e.answer = t.split("").map((t => {
                    let n = t.charCodeAt() - 65;
                    return e.options[n];
                }));
                break;

              case "3":
                e.answer = judgeAnswer(t), e.options = [];
            }
            return e;
        }
    }, {
        type: "ask",
        name: "\u897f\u8d22\u5728\u7ebf\u7efc\u5408\u7ec3\u4e60\u7b54\u9898",
        tips: "\u897f\u8d22\u5728\u7ebf\u6536\u5f55\u8bf7\u91cd\u65b0\u70b9\u51fb\u9898\u578b\u5207\u6362\u89e6\u53d1",
        match: () => location.host.includes("swufe-online.com") && location.href.includes("/learnspace/userDefine/t_test.jsp?courseId="),
        types: [ "0", "1", "3" ],
        question: {
            html: ".timu_title",
            question: ".timu_title",
            options: ".test_item_theme>ul>li",
            type: ".question-box .tag",
            workType: "swufe",
            pageType: "swufe"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".timu_title");
            })), !document.body.innerHTML.includes("\u63d0\u4ea4\u7b54\u9898\u540e\u663e\u793a")) return !1;
            J(".layui-tab-title>li").on("click", (function() {
                vuePageChange$1();
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: (e, t) => {
            const n = J(e.html).attr("id");
            return e.type = typeMatch(J(".layui-this").text()), e.question = removeHtml(J(e.html).html()), 
            e.options = J(`#${n}`).map((function() {
                let t = [], n = J(this).next(), a = [];
                for (;n.length && n.hasClass("question-item-opt"); ) a.push(removeHtml(n[0].outerHTML)), 
                t.push(n), n = n.next();
                return e.$options = J(t.map((e => e[0]))).find("label"), a;
            })).get(), e.options = removeStartChar(e.options), e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u897f\u8d22\u5728\u7ebf\u7efc\u5408\u4f5c\u4e1a\u6536\u5f55",
        match: () => location.host.includes("swufe-online.com") && location.href.includes("/learnspace/userDefine/t_test.jsp?courseId="),
        question: {
            html: ".timu_title",
            question: ".timu_title",
            options: ".test_item_theme>ul>li",
            type: ".question-box .tag",
            workType: "swufe",
            pageType: "swufe"
        },
        init: async () => {
            if (await waitUntil((function() {
                return isExist(".timu_title");
            })), document.body.innerHTML.includes("\u63d0\u4ea4\u7b54\u9898\u540e\u663e\u793a")) return !1;
            J(".layui-tab-title>li").on("click", (function() {
                vuePageChange$1();
            }));
        },
        answerHook: e => {
            const t = J(e.html).attr("id");
            switch (e.type = typeMatch(J(".layui-this").text()), e.question = removeHtml(J(e.html).html()), 
            e.options = J(`#${t}`).map((function() {
                let t = [], n = J(this).next(), a = [];
                for (;n.length && n.hasClass("question-item-opt"); ) a.push(removeHtml(n[0].outerHTML)), 
                t.push(n), n = n.next();
                return e.$options = J(t.map((e => e[0]))).find("label"), a;
            })).get(), e.options = removeStartChar(e.options), e.type) {
              case "0":
              case "1":
                const n = J(`#${t}`).nextAll(".ans").first().find("span:eq(0)").text();
                e.answer = n.trim().split("").map((t => {
                    let n = t.charCodeAt() - 65;
                    return e.options[n];
                }));
                break;

              case "3":
                e.answer = judgeAnswer(J(`#${t}`).nextAll(".ans").first().find("span:eq(0)").text().trim()), 
                e.options = [];
                break;

              case "7":
              case "4":
                e.answer = removeHtml(J(`#${t}`).nextAll(".ans").first().html()).replace("\u6b63\u786e\u7b54\u6848\uff1a", "").trim(), 
                e.options = [];
                break;

              default:
                e.type;
            }
            return e;
        }
    } ], Ot = [ {
        type: "ask",
        name: "\u91cd\u5e86\u6cd5\u6cbb\u8003\u8bd5\u7b54\u9898",
        tips: "\u672c\u5e73\u53f0\u65e0\u7b54\u6848\u6536\u5f55\uff0c\u9700\u8981\u81ea\u884c\u8865\u5145\u9898\u5e93\uff0c\u5efa\u8bae\u4f7f\u7528\u9898\u5e93\u5bfc\u5165\u529f\u80fd",
        match: () => "ks.cqsdx.cn" === location.host && location.pathname.includes("/exam/user/bind"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".qlist",
            question: "span:eq(1)",
            options: "label",
            type: ".badge.badge-danger",
            workType: "cqsdx",
            pageType: "cqsdx"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".qlist");
            }));
        },
        toquestion: e => {
            J(`#question_card button:eq(${e})`).click();
        },
        next: () => {},
        ischecked: e => e.find("div").hasClass("checked"),
        questionHook: e => {
            const t = J(e.html).find(".badge.badge-danger").text();
            if (e.type = typeMatch(t), e.question = e.question.replace(/\u206B/g, "").trim(), 
            e.options = e.options.map((e => e.replace(/\u206B/g, "").trim())), "3" === e.type) e.options = [];
            return e;
        },
        setAnswer: e => !0,
        finish: e => {}
    } ], Ft = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("telfri-edu.com"),
        main: e => {
            const getHash = () => getUrl();
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), vuePageChange$1(), t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "olearn\u7b54\u9898",
        tips: "",
        match: () => location.host.includes("telfri-edu.com") && location.href.includes("/learn/homework/do/"),
        types: [ "0", "1", "3" ],
        question: {
            html: ".topic-group>.topic-container",
            question: ".topic-title",
            options: ".topic-answer .radio-wrap .radio-text",
            type: ".question-box .tag",
            workType: "olearn",
            pageType: "olearn"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".topic-group>.topic-container");
            }));
        },
        next: () => {},
        ischecked: e => e.hasClass("is-active"),
        questionHook: e => {
            let t = J(e.html).prevAll(".topic-title").first().find(".title-bold").text().trim();
            return e.$options = J(e.html).find(".topic-answer .radio-wrap>label"), e.type = typeMatch(t), 
            e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "olearn\u6536\u5f55",
        match: () => location.host.includes("telfri-edu.com") && location.href.includes("/learn/homework/show/"),
        question: {
            html: ".topic-group>.topic-container",
            question: ".topic-title",
            options: ".topic-answer .radio-wrap .radio-text",
            type: ".question-box .tag",
            workType: "olearn",
            pageType: "olearn"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".topic-group>.topic-container");
            }));
        },
        answerHook: e => {
            let t = J(e.html).prevAll(".topic-title").first().find(".title-bold").text().trim();
            e.type = typeMatch(t);
            const n = J(e.html).find(".standard-answer>.analysis-text").text().trim();
            switch (e.type) {
              case "0":
              case "1":
                e.answer = n.split("").map((t => e.options[t.charCodeAt(0) - 65]));
                break;

              case "3":
                e.options = [], e.answer = judgeAnswer(n);
            }
            return e;
        }
    } ], Lt = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("yxbyun.com"),
        main: e => {
            const getHash = () => J("#app")[0].__vue__.$route.path;
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), vuePageChange$1(), t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "save",
        name: "\u4ebf\u5b66\u5b9d\u6536\u5f55",
        match: () => location.host.includes("yxbyun.com") && (location.href.includes("yxbstudent/#/testPaper") || location.href.includes("yxbstudent/#/finalExam")),
        question: {
            html: ".test_wrap",
            question: ".content",
            options: ".el-radio-group input",
            type: ".question-box .tag",
            workType: "yxbyun",
            pageType: "yxbyun"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".test_wrap");
            }));
        },
        answerHook: e => {
            var t;
            const n = J(e.html).find("div:eq(0)")[0].__vue__, a = (null == (t = n.pagerData) ? void 0 : t.question) || n.smallPaper.questionTopic;
            return e.type = typeMatch(n.queTypeName), e.question = titleClean(removeHtml(a.questionTitle)), 
            e.options = (a.optionList || a.questionOptionList).map((e => removeHtml(e.questionContent))), 
            [ "0", "1", "3" ].includes(e.type) && (e.answer = a.questionAnswer.split(",").map((t => e.options[t.charCodeAt(0) - 65]))), 
            "3" === e.type && (e.options = [], e.answer = judgeAnswer(e.answer)), e;
        }
    }, {
        type: "ask",
        name: "\u4ebf\u5b66\u5b9d\u7b54\u9898",
        match: () => location.host.includes("yxbyun.com") && (location.href.includes("yxbstudent/#/testPaper") || location.href.includes("yxbstudent/#/finalExam")),
        types: [ "0", "1", "3" ],
        question: {
            html: ".test_wrap",
            question: ".content",
            options: ".answer>.daan,.el-radio-group>label",
            type: ".question-box .tag",
            workType: "yxbyun",
            pageType: "yxbyun"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".test_wrap");
            }));
        },
        next: () => {},
        ischecked: e => e.hasClass("active"),
        questionHook: e => {
            var t;
            const n = J(e.html).find("div:eq(0)")[0].__vue__, a = (null == (t = n.pagerData) ? void 0 : t.question) || n.smallPaper.questionTopic;
            if (e.type = typeMatch(n.queTypeName), e.question = titleClean(removeHtml(a.questionTitle)), 
            e.options = (a.optionList || a.questionOptionList).map((e => removeHtml(e.questionContent))), 
            "3" === e.type) e.options = [];
            return e;
        },
        setAnswer: e => {
            if ("3" === e.type) {
                let t = e.answer;
                return e.ques.$options.each(((e, n) => {
                    isTrue(t) && isTrue(removeHtml(J(n).parent().html())) && J(n).click(), isFalse(t) && isFalse(removeHtml(J(n).parent().html())) && J(n).click(), 
                    removeHtml(J(n).parent().html());
                })), !1;
            }
            return !0;
        },
        finish: e => {}
    } ], Pt = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("wdjycj.com") || location.host.includes("iwdjy.com"),
        main: e => {
            const getHash = () => getUrl();
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), vuePageChange$1(), t.disconnect());
            }));
            J("#app").length >= 1 && t.observe(J("#app")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "save",
        name: "\u6587\u9876\u5728\u7ebf\u6536\u5f55",
        match: () => location.href.includes("/testpaper-test-result?resultId=") || location.href.includes("/testpaper-test?id"),
        question: {
            html: ".st-item",
            question: ".st-title",
            options: ".st-main>p",
            type: ".question-box .tag",
            workType: "wdzx",
            pageType: "wdzx"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".st-item");
            }));
            let e = [];
            try {
                J(".exam-html")[0].__vue__.test.lists.forEach(((t, n) => {
                    t.question_lists.forEach(((t, n) => {
                        e.push(t);
                    }));
                }));
            } catch (t) {}
            je.ques = e;
        },
        answerHook: (e, t) => {
            var n;
            const a = je.ques[t], s = [];
            switch (e.question = titleClean(removeHtml(a.content)), e.options = (null == (n = a.appanswer) ? void 0 : n.map((e => {
                const t = removeHtml(e.text);
                return e.right && s.push(t), removeHtml(t);
            }))) || [], a.tm_type) {
              case 4:
                e.type = "3", e.answer = judgeAnswer("1" == a.answer ? "\u6b63\u786e" : "0" == a.answer ? "\u9519\u8bef" : "");
                break;

              case 5:
                e.type = "2", e.question = e.question.replace(/{#answer}/g, "_____"), e.answer = a.answer.split("|").map((e => e.includes("\u203b") ? e.split("\u203b")[0] : e));
                break;

              case 2:
                e.type = "0", e.answer = s;
                break;

              case 3:
                e.type = "1", e.answer = s;
                break;

              case 1:
                e.type = "4", e.answer = removeHtml(a.answer);
                break;

              default:
                a.tm_type;
            }
            return e;
        }
    }, {
        type: "ask",
        name: "\u6587\u9876\u5728\u7ebf\u7b54\u9898",
        tips: "",
        match: () => location.href.includes("/testpaper-test?id=") || location.href.includes("/final-exam"),
        types: [ "0", "1", "2", "3" ],
        question: {
            html: ".st-item",
            question: ".st-title",
            options: ".st-main>p",
            type: ".question-box .tag",
            workType: "wdzx",
            pageType: "wdzx"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".st-item");
            }));
        },
        next: () => {},
        toquestion: e => {
            J(`.card-box .bj:eq(${e})`).click();
        },
        ischecked: e => J(e).find("input").prop("checked"),
        questionHook: (e, t) => {
            e.options = removeOptionsStartChar(e.options);
            const n = J(e.html).find(".st-title").clone();
            J(n).find("strong").remove(), e.question = removeHtml(J(n).html());
            let a = J(e.html).prevAll(".title").first().text().trim();
            return e.type = typeMatch(a), e.$options = J(e.html).find(".answer-box>.answer>label"), 
            e;
        },
        setAnswer: e => {
            switch (e.type) {
              case "4":
              case "5":
              case "6":
              case "7":
                return J(e.html).find(".answer-text>div")[0].__vue__.msg.yourAnswer = e.answer[0], 
                J(e.html).find(".quill-editor").map(((t, n) => {
                    n.__vue__.value = e.answer[t];
                })), !1;

              case "2":
                let setYourAnswerById = function(e, t, n) {
                    for (let a of e) if (Array.isArray(a.itemlists)) for (let e of a.itemlists) if (e.id === t) return e.yourAnswer = n, 
                    !0;
                    return !1;
                };
                const t = J(e.html).find("span.bj input").attr("name");
                return setYourAnswerById(J(".exam-html")[0].__vue__.answerCard, Number(t), e.answer), 
                e.answer, !1;
            }
            return !0;
        },
        finish: e => {}
    } ], Mt = [ {
        type: "ask",
        name: "\u6b66\u6c49\u7406\u5de5\u7ee7\u7eed\u6559\u80b2\u7b54\u9898",
        tips: "\u6b66\u6c49\u7406\u5de5\u7ee7\u7eed\u6559\u80b2\u4ec5\u652f\u6301\u9009\u62e9\u3001\u5224\u65ad\u9898\u5176\u4ed6\u9898\u578b\u6682\u4e0d\u652f\u6301\uff0c\u82e5\u6709\u9700\u8981\u8bf7\u53cd\u9988\u7ed9\u4f5c\u8005",
        match: () => location.href.includes("/web/exercise.htm"),
        question: {
            html: ".pad_top",
            question: "div:eq(0)",
            options: ".radio>label",
            type: ".question-box .tag",
            workType: "whut",
            pageType: "whut"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".pad_top").length;
            }));
        },
        next: () => {},
        ischecked: e => e.find("input").is(":checked"),
        questionHook: e => {
            e.question = titleClean(e.question), e.question = e.question.replace(/^\d+\s*[\u3001.\uff09)]/, "").trim(), 
            e.options = removeOptionsStartChar(e.options);
            let t = J(e.html).prevAll(".p-title").first().clone();
            return t = t.remove("span"), e.type = typeMatch(t.text()), e.type, e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u6b66\u6c49\u7406\u5de5\u7ee7\u7eed\u6559\u80b2\u6536\u5f55",
        match: () => location.href.includes("/web/showexercise.htm"),
        question: {
            html: ".pad_top",
            question: "div:eq(0)",
            options: ".radio>label",
            type: ".question-box .tag",
            workType: "whut",
            pageType: "whut"
        },
        init: async () => {
            await waitUntil((function() {
                return 0 !== J(".pad_top").length;
            }));
        },
        answerHook: e => {
            e.question = titleClean(e.question), e.question = e.question.replace(/^\d+\s*[\u3001.\uff09)]/, "").trim(), 
            e.options = removeOptionsStartChar(e.options);
            const t = !J(e.html).children("p").first().text().includes("\u9519\u8bef:");
            let n = [], a = J(e.html).prevAll(".p-title").first().clone();
            switch (a = a.remove("span"), e.type = typeMatch(a.text()), e.type) {
              case "0":
              case "1":
                if (e.$options.each(((t, a) => {
                    J(a).find("input").is(":checked") && n.push(e.options[t]);
                })), t) e.answer = n; else {
                    let t = J(e.html).children("p").first().text().match(/\u3010(.*?)\u3011/);
                    n = [], t && t[1].split(";").forEach((t => {
                        n.push(e.options[t.charCodeAt(0) - 65]);
                    })), e.answer = n;
                }
                break;

              case "3":
                if (e.$options.each(((t, a) => {
                    J(a).find("input").is(":checked") && n.push(e.options[t]);
                })), t) e.answer = n[0]; else {
                    let t = J(e.html).children("p").first().text().match(/\u3010(.*?)\u3011/);
                    n = [], t && t[1].split(";").forEach((t => {
                        n.push(e.options[t.charCodeAt(0) - 65]);
                    })), e.answer = n[0];
                }
                e.options = [];
            }
            return e;
        }
    } ], Vt = [ {
        type: "save",
        name: "\u4e1c\u5317\u8d22\u7ecf\u5927\u5b66\u6210\u6559\u6536\u5f55",
        match: () => location.host.includes("dufe.edu.cn") && (location.href.includes("/HomeWorkPaper") || location.href.includes("/HomeWorkHistoryPaper") || location.href.includes("/ExercisesPaper")),
        question: {
            html: ".QuestTrunk,.HistoryQuestTrunk",
            question: ".CBTPaperMain-divInline",
            options: ".CBTPaperMain-options li",
            type: ".question-box .tag",
            workType: "dufe",
            pageType: "dufe"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".QuestTrunk,.HistoryQuestTrunk");
            }));
        },
        answerHook: e => {
            const t = e.html.vtree[0].vmodel._trunks[0], n = e.html.vtree[0].vmodel._type;
            let a = [], s = [];
            const getOption = () => {
                t.QUESTION_OPTIONS.forEach((e => {
                    const t = removeHtml(e.OPTION_CONTENT);
                    "1" === e.ISTRUE && a.push(t), s.push(t);
                }));
            };
            switch (n) {
              case "001":
                e.type = "0", getOption();
                break;

              case "002":
                e.type = "1", getOption();
                break;

              case "004":
                e.type = "3", e.options = [], a = "1" === t.QUESTION_OPTIONS[0].ISTRUE ? [ "\u6b63\u786e" ] : "0" === t.QUESTION_OPTIONS[0].ISTRUE ? [ "\u9519\u8bef" ] : [];
                break;

              case "005":
                e.type = "4", a = [ removeHtml(t.QUESTION_OPTIONS[0].OPTION_CONTENT) ];
            }
            return e.question = titleClean(t.QUESTION_TITLE), e.options = s, e.answer = a, e;
        }
    }, {
        type: "ask",
        name: "\u4e1c\u5317\u8d22\u7ecf\u5927\u5b66\u6210\u6559\u7b54\u9898",
        match: () => location.host.includes("dufe.edu.cn") && (location.href.includes("/HomeWorkPaper") || location.href.includes("/ExercisesPaper")),
        types: [ "0", "1", "3", "4" ],
        question: {
            html: ".QuestTrunk",
            question: ".CBTPaperMain-divInline",
            options: ".CBTPaperMain-options li>label",
            type: ".question-box .tag",
            workType: "dufe",
            pageType: "dufe"
        },
        init: async () => {},
        next: () => {},
        ischecked: e => e.parent().find("input").prop("checked"),
        questionHook: e => {
            const t = e.html.vtree[0].vmodel._trunks[0], n = e.html.vtree[0].vmodel._type;
            let a = [], s = [];
            const getOption = () => {
                t.QUESTION_OPTIONS.forEach((e => {
                    const t = removeHtml(e.OPTION_CONTENT);
                    "1" === e.ISTRUE && a.push(t), s.push(t);
                }));
            };
            switch (n) {
              case "001":
                e.type = "0", getOption();
                break;

              case "002":
                e.type = "1", getOption();
                break;

              case "004":
                e.type = "3", e.options = [], a = "1" === t.QUESTION_OPTIONS[0].ISTRUE ? [ "\u6b63\u786e" ] : "0" === t.QUESTION_OPTIONS[0].ISTRUE ? [ "\u9519\u8bef" ] : [];
                break;

              case "005":
                e.type = "4", a = [ removeHtml(t.QUESTION_OPTIONS[0].OPTION_CONTENT) ];
            }
            return e.question = titleClean(t.QUESTION_TITLE), e.options = s, e.answer = a, e;
        },
        setAnswer: e => {
            if ("4" === e.type) {
                const t = J(e.html).find("textarea")[0];
                return t._ms_context_._answer = e.answer[0], t._ms_context_._save(), !1;
            }
            return !0;
        },
        finish: e => {}
    }, {
        type: "ask",
        name: "\u4e1c\u5317\u8d22\u7ecf\u5927\u5b66\u6210\u6559\u7b54\u9898(\u7efc\u5408)",
        match: () => location.host.includes("dufe.edu.cn") && location.href.includes("/CompHomeworkPaper"),
        types: [ "0", "1", "3", "4" ],
        question: {
            html: ".Question",
            question: ".CBTPaperMain-trunkTitle",
            options: "ul.Question-options>li",
            type: ".question-box .tag",
            workType: "dufe",
            pageType: "dufe"
        },
        init: async () => {},
        next: () => {},
        ischecked: e => e.parent().find("input").prop("checked"),
        questionHook: e => {
            const t = (e => {
                var t;
                if (e) {
                    const n = Object.keys(e).find((e => e.startsWith("__reactEventHandlers")));
                    if (n) {
                        const t = e[n];
                        return console.log("React \u4e8b\u4ef6\u5904\u7406\u5bf9\u8c61:", t), t;
                    }
                    if (!n) {
                        const n = Object.keys(e).find((e => e.startsWith("__reactInternalInstance$") || e.startsWith("__reactFiber$")));
                        if (n && (null == (t = e[n]) ? void 0 : t.memoizedProps)) return console.log("React \u5185\u90e8\u6570\u636e:", e[n].memoizedProps), 
                        e[n].memoizedProps;
                    }
                } else console.error("\u672a\u627e\u5230 .Question \u5143\u7d20");
            })(e.html).children[0]._owner.memoizedProps;
            return e.type = {
                SingleChoice: "0",
                MultipleChoice: "1"
            }[t.type], e.options = removeStartChar(e.options), e;
        },
        setAnswer: e => {
            if ("4" === e.type) {
                const t = J(e.html).find("textarea")[0];
                return t._ms_context_._answer = e.answer[0], t._ms_context_._save(), !1;
            }
            return !0;
        },
        finish: e => {}
    } ], Dt = {
        single: "0",
        multiple: "1",
        judge: "3"
    }, Nt = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("lygtc.edu.cn"),
        main: () => {
            const getHash = () => J("#app")[0].__vue__.$route.path;
            je.mainClass = getHash();
            const e = new MutationObserver((async () => {
                const t = getHash();
                je.mainClass !== t && (je.mainClass = t, vuePageChange$1(), e.disconnect());
            })), t = J("#app")[0];
            t && e.observe(t, {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "save",
        name: "\u6625\u98ce\u96e8\u6536\u5f55",
        match: () => location.host.includes("lygtc.edu.cn") && (location.href.includes("/student/#/my-study/homework/records/detail") || location.href.includes("/student/#/my-study/homework")),
        question: {
            html: ".questions>div>div[id],.question>div>div[id]",
            question: ".topic-title",
            options: ".el-radio-group label .label,.el-checkbox-group label .label",
            type: ".question-box .tag",
            workType: "cfy",
            pageType: "cfy"
        },
        init: async () => {
            await waitUntil((() => 0 !== J(".questions>div>div[id],.question>div>div[id]").length));
        },
        answerHook: e => {
            const t = J(e.html).find(">div")[0].__vue__.question;
            return e.question = titleClean(removeHtml(t.title)), e.options = JSON.parse(t.options).map((e => e.content)), 
            e.answer = t.answer.split("").map((t => e.options[t.charCodeAt(0) - 65])).filter(Boolean), 
            e.type = Dt[t.type] || "", "judge" === t.type && (e.options = [], e.answer = [ judgeAnswer(t.answer) ]), 
            t.type, e;
        }
    }, {
        type: "ask",
        name: "\u6625\u98ce\u96e8\u7b54\u9898",
        tips: "\u516c\u544a",
        match: () => location.host.includes("lygtc.edu.cn") && location.href.includes("/student/#/my-study/homework"),
        types: Object.values(Dt),
        question: {
            html: ".question>div>div[id]",
            question: ".question-title>.title",
            options: ".radio-option",
            type: ".question-box .tag",
            workType: "cfy",
            pageType: "cfy"
        },
        init: async () => {
            await waitUntil((() => 0 !== J(".question>div>div[id]").length));
        },
        next: () => {},
        ischecked: e => e.find(".el-radio__input.is-checked").length > 0,
        questionHook: e => {
            e.options = removeStartChar(e.options);
            const t = J(e.html).find(">div")[0].__vue__.question;
            return e.question = titleClean(removeHtml(t.title)), e.options = JSON.parse(t.options).map((e => e.content)), 
            e.type = Dt[t.type] || "", "judge" === t.type && (e.options = [], e.answer = [ judgeAnswer(t.answer) ]), 
            e;
        },
        setAnswer: () => !0,
        finish: () => {}
    } ], Bt = [ {
        type: "hook",
        name: "hook",
        match: location.host.includes("jijiaool.com"),
        main: e => {
            const getHash = () => J(".contentIframe").attr("src");
            je.mainClass = getHash();
            let t = new MutationObserver((async e => {
                je.mainClass !== getHash() && (je.mainClass = getHash(), vuePageChange$1(), t.disconnect());
            }));
            J(".contentIframe").length >= 1 && t.observe(J(".contentIframe")[0], {
                subtree: !0,
                attributes: !0,
                childList: !0
            });
        }
    }, {
        type: "ask",
        name: "\u7ee7\u6559\u5728\u7ebf\u7b54\u9898",
        match: () => location.href.includes("jijiaool.com") && location.href.includes("/Learning/CourseOnlineExamination"),
        types: [ "0", "1" ],
        question: {
            html: ".bank_test>.test_item",
            question: ".test_item_tit",
            options: ".test_item_theme>ul>li>label",
            type: ".question-box .tag",
            workType: "jijiaool",
            pageType: "jijiaool"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".bank_test>.test_item");
            }));
        },
        next: () => {},
        ischecked: e => e.parent().parent().hasClass("is-checked"),
        questionHook: e => {
            e.options = removeOptionsStartChar(e.options);
            const t = J(e.html).prevAll(".test_item_type").first().text().trim();
            return e.type = typeMatch(t), e;
        },
        setAnswer: e => !0,
        finish: e => {}
    }, {
        type: "save",
        name: "\u7ee7\u6559\u5728\u7ebf\u6536\u5f55",
        match: () => location.href.includes("jijiaool.com") && location.href.includes("/Learning/CourseExamWorkPageDetail"),
        question: {
            html: ".bank_test>.test_item",
            question: ".test_item_tit",
            options: ".test_item_theme>ul>li>label",
            type: ".question-box .tag",
            workType: "jijiaool",
            pageType: "jijiaool"
        },
        init: async () => {
            await waitUntil((function() {
                return isExist(".bank_test>.test_item");
            }));
        },
        answerHook: e => {
            const t = J(e.html).find(".test_item_tit").clone();
            t.find(".tipNodo").remove(), e.question = titleClean(removeHtml(t.html())), e.options = removeOptionsStartChar(e.options);
            const n = removeHtml(J(e.html).find(".test_item_tit:eq(1)").html().replace(/ \u6b63\u786e\u7b54\u6848\uff1a/g, "").trim()), a = J(e.html).prevAll(".test_item_type").first().text().trim();
            switch (e.type = typeMatch(a), e.type) {
              case "0":
              case "1":
                e.answer = n.split("").map((t => e.options[t.charCodeAt(0) - 65]));
                break;

              case "3":
                e.answer = judgeAnswer(n), e.options = [];
            }
            return e;
        }
    } ], Gt = Object.freeze(Object.defineProperty({
        __proto__: null,
        a21tb: Ut,
        ahjxjy: pt,
        cfy: Nt,
        chaoxing: et,
        chatglm: at,
        chengjiaoyun: it,
        chutou: bt,
        cjedu: ht,
        cjnep: Ct,
        cloudwis: wt,
        cnzx: ct,
        cqsdx: Ot,
        dufe: Vt,
        gkks: gt,
        guokai: ot,
        huayi: At,
        jijiaool: Bt,
        jijiaox: _t,
        jsou: rt,
        learnin: $t,
        ls365: xt,
        mooc: jt,
        mosoteach: Et,
        mynep: Tt,
        olearn: Ft,
        openha: yt,
        ouchn: It,
        qingshu: ut,
        sclecb: vt,
        swufe: zt,
        uooc: dt,
        wdjycj: Pt,
        wencai: kt,
        whut: Mt,
        wx168: Ht,
        xinwei: nt,
        xueqi: ft,
        ynou: St,
        ytccr: mt,
        yunmuxueyuan: We,
        yxbyun: Lt,
        yxlearning: qt,
        zhihuishu: tt,
        zhijiaoyun: lt
    }, Symbol.toStringTag, {
        value: "Module"
    })), Rt = [];

    for (const Yi in Gt) Rt.push(...Gt[Yi]);

    const parseRule = async e => {
        await waitUntil((() => void 0 !== je[Yt + "app"]));
        const t = e.filter((e => "function" == typeof e.match ? e.match() : e.match)), n = getAppStore(), a = {
            app: n,
            ask: getAskStore()
        };
        if (!t.length) return n.app.alert = "\u5f53\u524d\u6ca1\u6709\u4efb\u52a1", console.log("\u6ca1\u6709\u5339\u914d\u5230\u89c4\u5219", "error"), 
        void addLog("\u6ca1\u6709\u5339\u914d\u5230\u89c4\u5219", "error");
        for (const s of t) {
            if (console.log(`\u5339\u914d\u5230\u89c4\u5219\uff1a${s.name}`, "success"), addLog(`\u5339\u914d\u5230\u89c4\u5219\uff1a${s.name}`, "success"), 
            s.init) {
                let e = await s.init();
                if ("boolean" == typeof e && !1 === e) continue;
            }
            n.alert = `\u5f53\u524d\u4efb\u52a1:${s.name}`, "hook" === s.type && s.main(a), 
            "ask" === s.type && askParser(s, a), "save" === s.type && saveParser(s, a);
        }
    }, saveParser = (e, t) => {
        const n = t.app, a = t.ask;
        a.rule = e, e.tips && (a.tips = e.tips);
        const s = questionSaveParser(e.question, e.answerHook || null).filter((e => null != e && 0 !== e.answer.length && "" !== e.answer && "8" != e.type)).map((e => (e.question = titleClean(e.question), 
        e)));
        if (a.saveQuestionData = s, s.forEach((e => {
            0 !== e.answer.length && Answer.cacheAnswer(e);
        })), e.paper && "function" == typeof e.paper) try {
            e.paper(s);
        } catch (i) {
            addLog("\u6574\u5377\u7f13\u5b58\u5f02\u5e38", "error");
        }
        const o = {
            questionList: s,
            pageType: e.question.pageType
        };
        n.setPage("question"), s.length && Answer.syncQuestionList(o), n.app.alert = `\u9898\u5e93\u6536\u5f55\u5b8c\u6210\uff0c\u5171\u7f13\u5b58${s.length}\u9053\u9898\u76ee`, 
        msg(`\u9898\u5e93\u6536\u5f55\u5b8c\u6210\uff0c\u5171\u7f13\u5b58${s.length}\u9053\u9898\u76ee`, "success"), 
        e.next && e.next();
    }, askParser = (e, t) => {
        const n = t.app, a = t.ask;
        a.rule = e, e.minDelay && (a.minDelay = e.minDelay, a.delay < a.minDelay && (a.delay = a.minDelay)), 
        e.tips && (a.tips = e.tips), n.app.showFloat = !n.app.hideFloat, n.setPage("ask"), 
        a.clearQuestion();
        questionParser(e.question, e.questionHook || null).map((e => (e.question = titleClean(e.question), 
        "3" == e.type && (e.options = []), e))).forEach((e => {
            a.addQuestion(e);
        })), a.autoAnswer && a.toggleStart();
    }, questionSaveParser = (e, t) => {
        "function" == typeof e.html && (e.html = e.html());
        return J(e.html).map(((n, a) => {
            const s = removeHtml(J(a).find(e.question).html()), o = J(a).find(e.options).map(((e, t) => removeHtml(J(t).html()))).get(), i = J(a).find(e.type).val(), r = J(a)[0];
            let l = {
                question: titleClean(s ?? ""),
                options: o,
                $options: J(a).find(e.options),
                $answer: J(a).find(e.answer),
                answer: [],
                type: i,
                html: r
            };
            try {
                t && (l = t(l, n));
            } catch (c) {
                console.log("\u6536\u5f55hook\u62a5\u9519", c);
            }
            return null == l || null == l ? null : (l.question && "" != l.question && (l.question = titleClean(l.question)), 
            l.options && l.options.length > 0 && (l.options = removeStartChar(l.options)), {
                question: l.question,
                options: l.options,
                answer: l.answer,
                type: l.type,
                hash: questionHash(l.type, l.question, l.options)
            });
        })).get();
    }, questionParser = (e, t) => {
        "function" == typeof e.html && (e.html = e.html());
        return J(e.html).map(((n, a) => {
            const s = removeHtml(J(a).find(e.question).html()), o = J(a).find(e.options).map(((e, t) => removeHtml(J(t).html()))).get(), i = J(a).find(e.type).val(), r = e.workType, l = J(a)[0];
            let c = {
                question: titleClean(s ?? ""),
                options: o,
                $options: J(a).find(e.options),
                type: i,
                html: l,
                workType: r,
                pageType: e.pageType
            };
            return t && (c = t(c, n)), c;
        })).get();
    };

    class AnonymousIdentityOptimized {
        static generateShortId() {
            return Date.now().toString(36).padStart(8, "0").slice(-8) + Array.from({
                length: 8
            }, (() => "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[Math.floor(62 * Math.random())])).join("");
        }
        static validateId(e) {
            return /^[0-9A-Za-z]{16}$/.test(e);
        }
        static getAnonymousId() {
            if (this.cachedAnonymousId) return this.cachedAnonymousId;
            let e = Ue(this.STORAGE_KEY);
            return e && this.validateId(e) || (e = this.generateShortId(), $e(this.STORAGE_KEY, e)), 
            this.cachedAnonymousId = e, e;
        }
        static getStableCanvasFingerprint() {
            try {
                const e = document.createElement("canvas");
                e.width = 220, e.height = 30;
                const t = e.getContext("2d", {
                    willReadFrequently: !0
                });
                if (!t) return "";
                t.textBaseline = "alphabetic", t.fillStyle = "#000", t.font = "16px Arial", t.fillText("AiAsk,\ud83c\udf10.\ud83d\ude00", 2, 20);
                const n = t.getImageData(0, 0, 220, 30).data;
                let a = 0;
                for (let s = 0; s < n.length; s += 40) a = (a << 5) - a + n[s], a |= 0;
                return a.toString(36);
            } catch (e) {
                return "";
            }
        }
        static getWebGLFingerprint() {
            try {
                const e = document.createElement("canvas"), t = e.getContext("webgl") || e.getContext("experimental-webgl");
                if (!t) return "";
                const n = t.getExtension("WEBGL_debug_renderer_info");
                if (!n) return t.getParameter(t.VERSION) + "|" + t.getParameter(t.VENDOR);
                const a = t.getParameter(n.UNMASKED_VENDOR_WEBGL);
                return a + "|" + t.getParameter(n.UNMASKED_RENDERER_WEBGL);
            } catch (e) {
                return "";
            }
        }
        static getDeviceFingerprint() {
            if (this.cachedFingerprint) return this.cachedFingerprint;
            const e = Ue(this.FINGERPRINT_KEY);
            if (e && e.version === this.FP_VERSION && e.value) return this.cachedFingerprint = e.value, 
            e.value, e.value;
            const t = [ this.normalizeUserAgent(navigator.userAgent), navigator.language, navigator.platform, screen.colorDepth, screen.pixelDepth || screen.colorDepth, (new Date).getTimezoneOffset(), navigator.hardwareConcurrency || 0, navigator.maxTouchPoints || 0, navigator.deviceMemory || 0, this.getWebGLFingerprint(), this.getStableCanvasFingerprint() ].filter(Boolean).join("|"), n = Qe(t).substring(0, 12);
            return $e(this.FINGERPRINT_KEY, {
                value: n,
                version: this.FP_VERSION,
                createdAt: Date.now()
            }), this.cachedFingerprint = n, n;
        }
        static normalizeUserAgent(e) {
            return e.includes("Chrome") ? "Chrome" : e.includes("Firefox") ? "Firefox" : e.includes("Safari") ? "Safari" : e.includes("Edge") ? "Edge" : e.includes("Opera") ? "Opera" : "Unknown";
        }
        static getIdentity() {
            return {
                anonymous_id: this.getAnonymousId(),
                device_fingerprint: this.getDeviceFingerprint()
            };
        }
        static clear() {
            $e(this.STORAGE_KEY, null), $e(this.FINGERPRINT_KEY, null), this.cachedAnonymousId = null, 
            this.cachedFingerprint = null;
        }
        static regenerateFingerprint() {
            return $e(this.FINGERPRINT_KEY, null), this.cachedFingerprint = null, this.getDeviceFingerprint();
        }
        static getDebugInfo() {
            return {
                anonymous_id: this.getAnonymousId(),
                device_fingerprint: this.getDeviceFingerprint(),
                fingerprint_components: {
                    browser: this.normalizeUserAgent(navigator.userAgent),
                    language: navigator.language,
                    platform: navigator.platform,
                    screen_color: screen.colorDepth,
                    timezone: (new Date).getTimezoneOffset(),
                    hardware: navigator.hardwareConcurrency,
                    webgl: this.getWebGLFingerprint()
                },
                storage: {
                    fp_stored: Ue(this.FINGERPRINT_KEY),
                    id_stored: Ue(this.STORAGE_KEY)
                }
            };
        }
        static async testStability(e = 10) {
            const t = [];
            for (let a = 0; a < e; a++) {
                this.cachedFingerprint = null;
                const e = this.getDeviceFingerprint();
                t.push(e), await new Promise((e => setTimeout(e, 100)));
            }
            const n = new Set(t);
            n.size, n.size, Array.from(n), n.size, 1 === n.size || n.size;
        }
    }

    __publicField(AnonymousIdentityOptimized, "STORAGE_KEY", "anonymous_id"), __publicField(AnonymousIdentityOptimized, "FINGERPRINT_KEY", "device_fingerprint"), 
    __publicField(AnonymousIdentityOptimized, "FP_VERSION", "v2"), __publicField(AnonymousIdentityOptimized, "cachedAnonymousId", null), 
    __publicField(AnonymousIdentityOptimized, "cachedFingerprint", null);

    const Jt = 864e5, Qt = [ {
        id: "492563",
        name: "GreasyFork",
        home: "https://greasyfork.org/zh-CN/scripts/492563-%E7%88%B1%E9%97%AE%E7%AD%94%E5%8A%A9%E6%89%8B",
        updateurl: "https://greasyfork.org/zh-CN/scripts/492563.json",
        getdata: e => {
            const t = JSON.parse(e[0].responseText);
            return {
                version: t.version,
                code_updated_at: formatDate(t.code_updated_at)
            };
        }
    }, {
        id: "2384",
        name: "\u811a\u672c\u732b",
        home: "https://scriptcat.org/zh-CN/script-show-page/2384",
        updateurl: "https://scriptcat.org/api/v2/scripts/2384",
        getdata: e => {
            const t = JSON.parse(e[0].responseText);
            return {
                version: t.data.script.version,
                code_updated_at: formatDate(new Date(1e3 * t.data.updatetime).toISOString())
            };
        }
    } ];

    function getAppStore() {
        return je[Yt + "app"];
    }

    function getAskStore() {
        return je[Yt + "ask"];
    }

    function request(e, t, n = void 0, a = void 0, s = 5e3) {
        "GET" === t && n && (e += `?${new URLSearchParams(n).toString()}`), "POST" === t && (a = {
            ...a
        });
        const o = {
            "User-Agent": je.navigator.userAgent,
            "Content-Type": "application/json",
            referer: location.href,
            ...a
        };
        return new Promise(((a, i) => {
            const r = Date.now();
            Ie({
                method: t,
                url: e,
                headers: o,
                data: "GET" !== t ? JSON.stringify(n) : void 0,
                timeout: s,
                onload: function(e) {
                    const t = Date.now();
                    a([ e, t - r ]);
                },
                ontimeout: () => i(new Error("\u63a5\u53e3\u8bf7\u6c42\u8d85\u65f6")),
                onerror: e => {
                    i(e);
                }
            });
        }));
    }

    function requestApi(e, t, n = void 0, a = void 0, s = 5e3) {
        return new Promise((async (o, i) => {
            const r = Cache.get("user", {}), l = r && r.user && r.api_key;
            let c;
            {
                if (!l) {
                    const e = AnonymousIdentityOptimized.getIdentity();
                    n = {
                        ...n,
                        anonymous_id: e.anonymous_id,
                        device_fingerprint: e.device_fingerprint
                    };
                }
                const e = function(e) {
                    const {html: t, ...n} = e, flatten = (e, t = "") => {
                        const n = [];
                        return Object.keys(e).sort().forEach((a => {
                            const s = t ? `${t}.${a}` : a, o = e[a];
                            null != o && (Array.isArray(o) && 0 === o.length || ("object" != typeof o || Array.isArray(o) || 0 !== Object.keys(o).length) && (Array.isArray(o) ? o.every((e => "object" != typeof e)) ? n.push(`${s}=${o.sort().join(",")}`) : n.push(`${s}=${JSON.stringify(o)}`) : "object" == typeof o ? n.push(...flatten(o, s)) : n.push(`${s}=${o}`)));
                        })), n;
                    }, a = flatten(n).join("&");
                    return Qe(a);
                }(n);
                a = {
                    ...a,
                    aka: e
                }, c = await encrypt(JSON.stringify(n), e);
            }
            const p = {
                "User-Agent": je.navigator.userAgent,
                "Content-Type": "application/json",
                referer: location.href,
                v: Xt.script.version,
                ...a
            };
            if (l) p.Authorization = `Bearer ${r.api_key}`; else {
                const e = AnonymousIdentityOptimized.getIdentity();
                p["X-Anonymous-ID"] = e.anonymous_id, p["X-Device-FP"] = e.device_fingerprint;
            }
            const u = Date.now();
            Ie({
                method: t,
                url: e,
                headers: p,
                data: JSON.stringify({
                    data: c
                }),
                timeout: s,
                onload: async function(e) {
                    const t = Date.now() - u;
                    let n = JSON.parse(e.responseText);
                    if (n.encrypted) {
                        n = await decrypt(n.data);
                        const a = {
                            ...e,
                            responseText: n
                        };
                        o([ a, t ]);
                    } else o([ e, t ]);
                },
                ontimeout: () => i(new Error("\u63a5\u53e3\u8bf7\u6c42\u8d85\u65f6")),
                onerror: e => {
                    i(e);
                }
            });
        }));
    }

    const vuePageChange$1 = async () => {
        if (je.vuePageChangeLock) return;
        je.vuePageChangeLock = !0;
        const e = getAppStore(), t = getAskStore();
        t.questionInx = 0, e.app.showFloat = !1, e.setPage("home"), t.clearQuestion(), await parseRule(Rt), 
        je.vuePageChangeLock = !1;
    }, addLog = (e, t = "info") => {
        const n = getAppStore(), a = (new Date).toLocaleString();
        try {
            n.addLog({
                time: a,
                type: t,
                content: e
            });
        } catch (s) {
            console.log(e);
        }
    }, compareVersions = (e, t) => {
        const normalize = e => e.split(".").map(Number), n = normalize(e), a = normalize(t);
        for (let s = 0; s < Math.max(n.length, a.length); s++) {
            const e = n[s] || 0, t = a[s] || 0;
            if (t > e) return !0;
            if (t < e) return !1;
        }
        return !1;
    }, updateFn = async (e = !0) => {
        if (!getAppStore().app.checkUpdate) return;
        const t = Cache.get("lastCheckTime");
        if (e && t && Date.now() - t < Jt) {
            new Date(t + Jt).toLocaleString();
        } else try {
            const e = await Promise.allSettled(Qt.map((async e => {
                try {
                    e.name, e.updateurl, addLog(`[${e.name}] \u5f00\u59cb\u68c0\u6d4b\u66f4\u65b0`, "info");
                    const t = await request(e.updateurl, "GET", {}, {}), n = e.getdata(t);
                    return e.name, {
                        script: e,
                        updateInfo: n
                    };
                } catch (t) {
                    throw e.name, String(t), addLog(`[${e.name}] \u66f4\u65b0\u68c0\u6d4b\u5931\u8d25: ${String(t)}`, "error"), 
                    t;
                }
            })));
            Cache.set("lastCheckTime", Date.now());
            const t = e.filter((e => "fulfilled" === e.status));
            e.filter((e => "rejected" === e.status));
            if (0 === t.length) return void msg("\u6240\u6709\u66f4\u65b0\u6e90\u68c0\u6d4b\u5931\u8d25\uff0c\u8bf7\u53cd\u9988\u7ed9\u4f5c\u8005\u3002", "error");
            let n = !1, a = !0;
            for (const {value: s} of t) {
                const {script: e, updateInfo: t} = s;
                if (compareVersions(Xt.script.version, t.version)) {
                    msg(`\n          <div style="line-height: 1.5; font-size: 14px;">\n            <p>\u68c0\u6d4b\u5230\u65b0\u7248\u672c\uff1a<span style="color: red; font-weight: bold;">${t.version}</span></p>\n            <p>\u811a\u672c\u6e90\uff1a<strong>${e.name}</strong></p>\n            <p>\u66f4\u65b0\u65f6\u95f4\uff1a<span style="color: #555;">${t.code_updated_at}</span></p>\n            <p><a target="_blank" href="${e.home}" style="color: #007bff; text-decoration: underline;">>> \u70b9\u6211\u5feb\u6377\u8df3\u8f6c\u66f4\u65b0 <<</a></p>\n          </div>`, "warning"), 
                    addLog(`[${e.name}] \u68c0\u6d4b\u5230\u65b0\u7248\u672c\uff1a${t.version}`, "warning"), 
                    n = !0, a = !1;
                } else e.name, t.version, addLog(`[${e.name}] \u5df2\u662f\u6700\u65b0\u7248\uff1a${t.version}`, "info");
            }
            !n && a && (msg("\u5f53\u524d\u5df2\u662f\u6700\u65b0\u7248", "success"), addLog("\u5f53\u524d\u5df2\u662f\u6700\u65b0\u7248", "success"));
        } catch (n) {
            console.error("\u66f4\u65b0\u68c0\u6d4b\u6d41\u7a0b\u5f02\u5e38", n), addLog(`\u66f4\u65b0\u68c0\u6d4b\u5931\u8d25: ${String(n)}`, "error"), 
            msg("\u6240\u6709\u66f4\u65b0\u6e90\u5747\u68c0\u6d4b\u5931\u8d25\uff0c\u8bf7\u5c1d\u8bd5\u5207\u6362\u7f51\u7edc\u6216\u8005\u53cd\u9988\u7ed9\u4f5c\u8005", "error");
        }
    }, ttfDownload1 = async e => new Promise((t => {
        Ie({
            method: "GET",
            url: e,
            onload: function(e) {
                try {
                    const n = e.responseText, a = JSON.parse(n);
                    t(a);
                } catch (n) {
                    msg("\u5b57\u4f53\u6587\u4ef6\u4e0b\u8f7d\u5931\u8d25", "error"), t(null);
                }
            },
            onerror: function(e) {
                msg("\u5b57\u4f53\u6587\u4ef6\u4e0b\u8f7d\u5931\u8d25", "error"), t(null);
            }
        });
    })), Wt = He;

    function somd5(e) {
        return Qe(e);
    }

    function removeHtml(e, t = !0) {
        const n = document.createElement("textarea");
        n.innerHTML = e, e = (e = (e = (e = n.value).replace(/[\t\r\xa0]/g, " ")).replace(/[\u2000-\u200a]/g, " ")).replace(/<br\s*\/?>/g, "\n"), 
        t && (e = e.replace(/<(\/)?(p|div).*?>/g, "\n")), e = (e = (e = (e = e.replace(/ {2,}/g, " ")).replace(/\n{2,}/g, "\n")).replace(/<xmp.*?>/g, "<pre>")).replace(/<\/xmp>/g, "</pre>");
        let a = (e = D.sanitize(e, {
            ALLOWED_TAGS: [ "img", "br", "sub", "sup" ],
            ALLOWED_ATTR: [ "src", "href" ],
            ALLOW_DATA_ATTR: !1,
            KEEP_CONTENT: !0
        })).match(/<img.*?src="(.*?)".*?>/g);
        return a && a.forEach((t => {
            let n = t.match(/src="(.*?)"/);
            if (n && -1 == n[1].indexOf("http") && !n[1].includes("data:image")) if (n[1].startsWith("/")) e = e.replace(n[1], location.origin + n[1]); else {
                const t = new URL(n[1], document.baseURI).href;
                e = e.replace(n[1], t);
            }
        })), e.trim();
    }

    function titleClean(e) {
        return e.replace(/^[.*?]\s*/, "").replace(/^\u3010.*?\u3011\s*/, "").replace(/\s*\uff08\d+\.\d+\u5206\uff09$/, "").replace(/^\d+\./, "").trim().replace(/^\d+\uff0e/, "").trim();
    }

    function sleep(e) {
        return new Promise((t => setTimeout(t, e)));
    }

    function typeConvert(e, t = !0) {
        return t ? Kt[e] || "8" : Object.keys(Kt).find((t => Kt[t] === e)) || "\u5176\u5b83";
    }

    function typeMatch(e) {
        const t = {
            0: [ "\u5355\u9009", "\u5355\u9879\u9009\u62e9", "A2", "A1" ],
            1: [ "\u591a\u9009", "\u591a\u9879\u9009\u62e9" ],
            2: [ "\u586b\u7a7a" ],
            3: [ "\u5224\u65ad" ],
            4: [ "\u7b80\u7b54", "\u95ee\u7b54", "\u7efc\u5408\u9898" ],
            5: [ "\u540d\u8bcd\u89e3\u91ca" ],
            6: [ "\u8bba\u8ff0", "\u4e3b\u89c2" ],
            7: [ "\u8ba1\u7b97" ],
            9: [ "\u5206\u5f55" ],
            14: [ "\u5b8c\u5f62\u586b\u7a7a" ],
            24: [ "\u9009\u8bcd\u586b\u7a7a" ]
        };
        return Object.keys(t).find((n => t[n].some((t => e.includes(t))))) || "8";
    }

    function matchAnswer(e, t) {
        const preprocess = e => e.map((e => function(e) {
            if (/^[+-]?\d+(\.\d+)?$/.test(e)) return e;
            const t = e.replace(/\s+/g, "");
            return t.replace(new RegExp("\\p{P}", "gu"), "") || t;
        }(removeHtml(e))));
        e = preprocess(e), t = preprocess(t);
        const n = e.map((e => {
            const n = t.findIndex((t => t === e));
            return -1 !== n ? n : t.findIndex((t => t.includes(e)));
        }));
        return n.includes(-1) ? [] : n;
    }

    function msg(e, t = "info") {
        try {
            N.ElNotification({
                title: `${Wt.script.name} v${Wt.script.version}`,
                message: e,
                type: t,
                dangerouslyUseHTMLString: !0,
                appendTo: document.getElementById("AiAskApp")
            }), addLog(e, "success");
        } catch (n) {
            addLog(`\u6d88\u606f\u901a\u77e5\u5931\u8d25\u3010${e}\u3011`, "error");
        }
    }

    function isTrue(e) {
        return !isFalse(e) && /(\u6b63\u786e|\u662f|\u5bf9|\u221a|T|ri|true)/i.test(e);
    }

    function isFalse(e) {
        return /(\u4e0d\u6b63\u786e|\u9519\u8bef|\u5426|\u9519|\xd7|F|wr|false)/i.test(e);
    }

    const questionHash = (e, t, n, a = !0) => {
        let s = Array.from(n);
        a && s.sort();
        let o = `${e}${t}${s.join("")}`;
        o = o.replace(/\s/g, "");
        return Qe(o);
    };

    async function encrypt(e = "", t = "asdgdfghfghfghfg", n = "1234567890123456") {
        try {
            if (!e) return "";
            if (t = t.substring(0, 16), n = n.substring(0, 16), !window.crypto || !window.crypto.subtle) {
                const a = Q.enc.Utf8.parse(t), s = Q.enc.Utf8.parse(n);
                return Q.AES.encrypt(e, a, {
                    iv: s,
                    mode: Q.mode.CBC,
                    padding: Q.pad.Pkcs7
                }).toString();
            }
            const s = new TextEncoder, o = s.encode(e), i = s.encode(t), r = s.encode(n), l = await crypto.subtle.importKey("raw", i, {
                name: "AES-CBC"
            }, !1, [ "encrypt" ]), c = await crypto.subtle.encrypt({
                name: "AES-CBC",
                iv: r
            }, l, o), p = new Uint8Array(c), u = 1024;
            let d, h = "";
            for (let e = 0; e < p.length; e += u) {
                const t = p.slice(e, Math.min(e + u, p.length));
                h += String.fromCharCode.apply(null, Array.from(t));
            }
            try {
                d = btoa(h);
            } catch (a) {
                d = h.split("").map((e => ("0" + e.charCodeAt(0).toString(16)).slice(-2))).join("");
            }
            return d;
        } catch (s) {
            return addLog(`\u52a0\u5bc6\u5f02\u5e38: ${s instanceof Error ? s.message : "\u672a\u77e5\u9519\u8bef"}`, "error"), 
            "";
        }
    }

    async function decrypt(e = "", t = "asdgdfghfghfghfg", n = "1234567890123456") {
        try {
            if (!e) return "";
            if (t = t.substring(0, 16), n = n.substring(0, 16), !window.crypto || !window.crypto.subtle) {
                const a = Q.enc.Utf8.parse(t), s = Q.enc.Utf8.parse(n);
                return Q.AES.decrypt(e, a, {
                    iv: s,
                    mode: Q.mode.CBC,
                    padding: Q.pad.Pkcs7
                }).toString(Q.enc.Utf8);
            }
            /^[A-Za-z0-9+/]*={0,2}$/.test(e);
            const s = new TextEncoder, o = s.encode(t), i = s.encode(n);
            let r;
            try {
                r = atob(e);
            } catch (a) {
                throw new Error("Base64 \u89e3\u7801\u5931\u8d25\uff0c\u6570\u636e\u683c\u5f0f\u4e0d\u6b63\u786e");
            }
            const l = new Uint8Array(r.length);
            for (let e = 0; e < r.length; e++) l[e] = r.charCodeAt(e);
            if (l.length % 16 != 0) throw new Error("\u52a0\u5bc6\u6570\u636e\u957f\u5ea6\u4e0d\u6b63\u786e\uff0c\u4e0d\u662f16\u7684\u500d\u6570");
            const c = await crypto.subtle.importKey("raw", o, {
                name: "AES-CBC"
            }, !1, [ "decrypt" ]), p = await crypto.subtle.decrypt({
                name: "AES-CBC",
                iv: i
            }, c, l);
            return new TextDecoder("utf-8", {
                fatal: !0
            }).decode(p);
        } catch (s) {
            return addLog(`\u89e3\u5bc6\u5f02\u5e38: ${s instanceof Error ? s.message : "\u672a\u77e5\u9519\u8bef"}`, "error"), 
            "";
        }
    }

    function simpleMarkdownToHtml(e) {
        if (!e) return "";
        let t = e;
        const n = [], protect = e => {
            const t = `{{{{PLACEHOLDER${n.length}}}}}`;
            return n.push(e), t;
        }, escapeHtml = e => e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        return t = t.replace(/```(\w*)\n([\s\S]*?)```/g, ((e, t, n) => protect(`<pre><code class="hljs">${escapeHtml(n.trim())}</code></pre>`))), 
        t = t.replace(/`([^`]+)`/g, ((e, t) => protect(`<code>${escapeHtml(t)}</code>`))), 
        t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((e, t, n) => protect(`<a href="${n}" target="_blank" rel="noopener noreferrer">${t}</a>`))), 
        t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), t = t.replace(/__(.+?)__/g, "<strong>$1</strong>"), 
        t = t.replace(/\*(.+?)\*/g, "<em>$1</em>"), t = t.replace(/_(.+?)_/g, "<em>$1</em>"), 
        t = t.replace(/^### (.+)$/gm, "<h3>$1</h3>"), t = t.replace(/^## (.+)$/gm, "<h2>$1</h2>"), 
        t = t.replace(/^# (.+)$/gm, "<h1>$1</h1>"), t = t.replace(/^\- (.+)$/gm, "<li>$1</li>"), 
        t = t.replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>"), t = t.replace(/^\d+\. (.+)$/gm, "<li>$1</li>"), 
        t = t.replace(/\n/g, "<br>"), t = t.replace(/<br><(pre|h1|h2|h3|ul|ol)/g, "<$1"), 
        t = t.replace(/<\/(pre|h1|h2|h3|ul|ol)><br>/g, "</$1>"), t = t.replace(/\{\{\{\{PLACEHOLDER(\d+)\}\}\}\}/g, ((e, t) => n[parseInt(t)])), 
        t;
    }

    function judgeAnswer(e) {
        return isTrue(e) ? [ "\u6b63\u786e" ] : isFalse(e) ? [ "\u9519\u8bef" ] : [];
    }

    function removeStartChar(e) {
        return e.map(((e, t) => {
            let n = String.fromCharCode(65 + t) + " .", a = String.fromCharCode(65 + t) + ".", s = String.fromCharCode(65 + t) + "\u3001", o = String.fromCharCode(65 + t) + "\uff0e", i = String.fromCharCode(65 + t);
            return e.replace(new RegExp(`^${n}|^${a}|^${s}|^${o}|^${i}`), "").trim();
        }));
    }

    function qc(e) {
        J(e).find(".answerBg, .textDIV, .eidtDiv").each((function() {
            (J(this).find(".check_answer").length || J(this).find(".check_answer_dx").length) && J(this).click();
        })), J(e).find(".answerBg, .textDIV, .eidtDiv").find("textarea").each((function() {
            je.UE.getEditor(J(this).attr("name")).ready((function() {
                this.setContent("");
            }));
        })), J(e).find(":radio, :checkbox").prop("checked", !1), J(e).find("textarea").each((function() {
            je.UE.getEditor(J(this).attr("name")).ready((function() {
                this.setContent("");
            }));
        }));
    }

    function qc1(e) {
        J(e).find(".before-after,.before-after-checkbox, .textDIV, .eidtDiv").each((function() {
            (J(this).find(".check_answer").length || J(this).find(".check_answer_dx").length) && J(this).click();
        })), J(e).find(".before-after, .textDIV, .eidtDiv").find("textarea").each((function() {
            je.UE.getEditor(J(this).attr("name")).ready((function() {
                this.setContent("");
            }));
        })), J(e).find(":radio, :checkbox").prop("checked", !1), J(e).find("textarea").each((function() {
            je.UE.getEditor(J(this).attr("name")).ready((function() {
                this.setContent("");
            }));
        }));
    }

    const waitUntil = (e, t = 100) => new Promise((n => {
        const a = setInterval((() => {
            e() && (clearInterval(a), n());
        }), t);
    }));

    function isExist(e) {
        return J(e).length > 0;
    }

    function getUrl() {
        return location.href;
    }

    function removeOptionsStartChar(e) {
        for (let t = 0; t < e.length; t++) {
            let n = String.fromCharCode(65 + t) + ".", a = String.fromCharCode(65 + t) + "\u3001", s = String.fromCharCode(65 + t) + "\uff0e", o = String.fromCharCode(65 + t);
            const i = new RegExp(`^${n}|^${a}|^${s}|^${o}`);
            if (!e[t].match(i)) return !1;
            e[t] = e[t].replace(i, "").trim();
        }
        return e;
    }

    const formatDate = e => new Date(e).toISOString().replace("T", " ").substring(0, 19);

    const Kt = {
        "\u5355\u9009\u9898": "0",
        "\u591a\u9009\u9898": "1",
        "\u586b\u7a7a\u9898": "2",
        "\u5224\u65ad\u9898": "3",
        "\u7b80\u7b54\u9898": "4",
        "\u95ee\u7b54\u9898": "4",
        "\u540d\u8bcd\u89e3\u91ca": "5",
        "\u8bba\u8ff0\u9898": "6",
        "\u8ba1\u7b97\u9898": "7",
        "\u5206\u5f55\u9898": "9",
        "\u8d44\u6599\u9898": "10",
        "\u8fde\u7ebf\u9898": "11",
        "\u5339\u914d\u9898": "11",
        "\u6392\u5e8f\u9898": "13",
        "\u5b8c\u578b\u586b\u7a7a": "14",
        "\u5b8c\u5f62\u586b\u7a7a\u9898": "14",
        "\u9605\u8bfb\u7406\u89e3": "15",
        "\u7a0b\u5e8f\u9898": "17",
        "\u53e3\u8bed\u9898": "18",
        "\u542c\u529b\u9898": "19",
        "\u5171\u7528\u9009\u9879\u9898": "20",
        "\u6d4b\u8bc4\u9898": "21",
        "\u949f\u8868\u9898": "23",
        "\u9009\u8bcd\u586b\u7a7a": "24",
        "\u9009\u505a\u9898": "25",
        "\u5176\u5b83": "8"
    }, Yt = function(e) {
        let t = "";
        for (;t.length < e; t += Math.random().toString(36).substr(2)) ;
        return t.substr(0, e);
    }(9) + "_", Xt = He;

    je.ksv = Qe(Xt.script.author + Xt.script.name.replace(/server:/, "").trim());

    const Zt = {
        debug: !0,
        searchApi: [],
        defaultShowFloat: !1,
        showFloat: !1,
        showBoard: !0,
        checkUpdate: !0,
        hideFloat: !1,
        alert: "\u70b9\u6211\u6709\u60ca\u559c",
        alertBubble: !0,
        iframe: !1,
        key: "",
        gpt: [ {
            name: "GLM",
            desc: "\u667a\u666e\u6e05\u8a004.0",
            api: "http://82.157.105.20:8002/v1/chat/completions",
            key: "",
            msg: "AI\u54cd\u5e94\u5f02\u5e38\uff0c\u53ef\u80fd\u662f\u6ca1\u6709\u83b7\u53d6cookie,\u8bf7\u6309\u4e0b\u65b9\u6b65\u9aa4\u64cd\u4f5c\n1. \u6253\u5f00[\u667a\u666e\u6e05\u8a00](https://chatglm.cn/main/alltoolsdetail)\n2. \u767b\u5f55\u540e\u968f\u4fbf\u53d1\u4e00\u6761\u6d88\u606f\u5373\u53ef\n3. \u8fd4\u56de\u7b54\u9898\u9875\u5237\u65b0\u9875\u9762",
            home: "https://chatglm.cn/main/alltoolsdetail",
            recommend: 3,
            model: "gpt-4o"
        }, {
            name: "spark",
            desc: "\u8baf\u98de\u661f\u706b",
            api: "http://82.157.105.20:8000/v1/chat/completions",
            key: "",
            msg: "AI\u54cd\u5e94\u5f02\u5e38\uff0c\u53ef\u80fd\u662f\u6ca1\u6709\u83b7\u53d6cookie,\u8bf7\u6309\u4e0b\u65b9\u6b65\u9aa4\u64cd\u4f5c\n1. \u6253\u5f00[\u8baf\u98de\u661f\u706b](https://xinghuo.xfyun.cn/desk)\n2. \u767b\u5f55\u540e\u968f\u4fbf\u53d1\u4e00\u6761\u6d88\u606f\u5373\u53ef\n3. \u8fd4\u56de\u7b54\u9898\u9875\u5237\u65b0\u9875\u9762",
            home: "https://xinghuo.xfyun.cn/desk",
            recommend: 5,
            model: "gpt-4o"
        } ],
        gptIndex: 1,
        askGpt: !1,
        hotkey: "Ctrl+Shift+H",
        hotkeyEnabled: !0
    };

    const en = function() {
        const e = Cache.get("app") || {}, t = {
            ...Zt
        };
        for (const [n, a] of Object.entries(e)) "gpt" !== n && "alert" !== n && void 0 !== a && (t[n] = a);
        if (e.gpt) {
            const n = new Map;
            e.gpt.forEach((e => {
                n.set(e.name, e.key);
            })), t.gpt = Zt.gpt.map((e => ({
                ...e,
                key: n.get(e.name) || ""
            })));
        }
        return t.alert = Zt.alert, t.gptIndex >= t.gpt.length && (t.gptIndex = 0), t;
    }();

    function getApp() {
        return Cache.get("app") || Zt;
    }

    !function(e) {
        const t = {
            ...Cache.get("app"),
            ...e
        };
        Cache.set("app", t);
    }(en);

    const tn = {
        display: [ {
            type: "switch",
            label: "\u9ed8\u8ba4\u663e\u793a\u60ac\u6d6e",
            name: "defaultShowFloat",
            value: en.defaultShowFloat,
            desc: "\u6253\u5f00\u9875\u9762\u65f6\u662f\u5426\u663e\u793a\u60ac\u6d6e\u7a97",
            options: []
        }, {
            type: "switch",
            label: "\u5f3a\u5236\u9690\u85cf",
            name: "hideFloat",
            value: en.hideFloat,
            desc: "\u4ec5\u70ed\u952e\u6216\u70b9\u51fb\u53f3\u4e0b\u89d2\u56fe\u7247\u624d\u663e\u793a\u60ac\u6d6e\u7a97",
            options: []
        }, {
            type: "switch",
            label: "\u6c14\u6ce1\u63d0\u793a",
            name: "alertBubble",
            value: en.alertBubble,
            desc: "\u53f3\u4e0b\u89d2\u6c14\u6ce1\u63d0\u793a\u662f\u5426\u5f00\u542f",
            options: []
        } ],
        system: [ {
            type: "switch",
            label: "\u68c0\u6d4b\u66f4\u65b0",
            name: "checkUpdate",
            value: en.checkUpdate,
            desc: "\u6253\u5f00\u9875\u9762\u65f6\u662f\u5426\u68c0\u6d4b\u66f4\u65b0",
            options: []
        }, {
            type: "switch",
            label: "iframe\u4f18\u5316(\u6d4b\u8bd5)",
            name: "iframe",
            value: en.iframe,
            desc: "\u9488\u5bf9\u6df1\u5ea6\u5d4c\u5957\u7f51\u9875\u7684\u4f18\u5316\uff0c\u9002\u5408\u5355\u4efb\u52a1\u9875\u4f7f\u7528\uff0c\u591a\u4efb\u52a1\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5f39\u7a97\u8fc7\u591a\u3002\n \u6ce8\u610f\uff1a\u8be5\u529f\u80fd\u4e3a\u6d4b\u8bd5\u529f\u80fd\uff0c\u53ef\u80fd\u5b58\u5728\u672a\u77e5\u95ee\u9898\uff0c\u8bf7\u8c28\u614e\u4f7f\u7528",
            options: []
        } ],
        ai: [ {
            type: "select",
            label: "AI\u6a21\u578b\u9009\u62e9",
            name: "gptIndex",
            value: en.gptIndex,
            desc: "\u9009\u62e9AI\u6a21\u578b",
            options: en.gpt.map(((e, t) => ({
                label: e.desc,
                value: t
            })))
        }, {
            type: "switch",
            label: "AI\u8f85\u52a9\u7b54\u9898",
            name: "askGpt",
            value: en.askGpt,
            desc: "\u5f53\u6240\u6709\u9898\u5e93\u5747\u65e0\u7b54\u6848\u65f6\uff0c\u5c06\u4f7f\u7528AI\u8f85\u52a9\u81ea\u52a8\u7b54\u9898\uff0c\u6b63\u786e\u7387\u65e0\u6cd5\u4fdd\u8bc1\uff0c\u8c28\u614e\u4f7f\u7528",
            options: []
        } ],
        hotkey: [ {
            type: "switch",
            label: "\u542f\u7528\u5feb\u6377\u952e",
            name: "hotkeyEnabled",
            value: en.hotkeyEnabled,
            desc: "\u662f\u5426\u542f\u7528\u5feb\u6377\u952e\u663e\u9690\u60ac\u6d6e\u7a97",
            options: []
        }, {
            type: "hotkey",
            label: "\u5feb\u6377\u952e\u8bbe\u7f6e",
            name: "hotkey",
            value: en.hotkey,
            desc: "\u70b9\u51fb\u8f93\u5165\u6846\u540e\u6309\u4e0b\u60f3\u8981\u8bbe\u7f6e\u7684\u5feb\u6377\u952e\u7ec4\u5408\uff08\u652f\u6301Ctrl\u3001Shift\u3001Alt\u7ec4\u5408\u952e\uff09",
            options: []
        } ]
    }, nn = defineStore("app", {
        state: () => ({
            app: en,
            script: Xt.script,
            page: "home",
            ConfigInput: tn,
            logs: [ {
                time: (new Date).toLocaleString(),
                type: "success",
                content: "\u521d\u59cb\u5316\u65e5\u5fd7\u6210\u529f"
            } ]
        }),
        actions: {
            setConfig(e) {
                this.app = {
                    ...this.app,
                    ...e
                }, Cache.set("app", this.app);
            },
            setPage(e) {
                this.page = e;
            },
            addLog(e) {
                this.logs.length > 100 && this.logs.shift(), this.logs.push(e);
            }
        }
    }), an = Cache.get("apiList", []), sn = [ {
        name: "\u4e00\u4e4b\u9898\u5e93",
        url: "http://cx.icodef.com/wyn-nb?v=4",
        method: "POST",
        type: "json",
        headers: {},
        params: [],
        data: {
            question: "$question",
            options: "$options",
            type: "$type"
        },
        response: {
            type: "field",
            value: "data"
        },
        weight: 0
    } ], on = defineStore("api", {
        state: () => ({
            apiList: an,
            defApiList: sn
        }),
        actions: {},
        getters: {
            getApiList() {
                return this.apiList.forEach(((e, t) => {
                    e.name === this.defApiList[t].name && (this.defApiList[t] = e);
                })), this.apiList.concat(this.defApiList);
            }
        }
    }), markToHtml = e => simpleMarkdownToHtml(e), rn = {
        0: '\u4f60\u662f\u4e00\u4e2aJSON\u8f93\u51fa\u673a\u5668\uff0c\u53ea\u80fd\u8f93\u51faJSON\u683c\u5f0f\uff0c\u7edd\u5bf9\u7981\u6b62\u8f93\u51fa\u4efb\u4f55\u5176\u4ed6\u5185\u5bb9\u3002\n\n\u3010\u9898\u578b\u3011\u5355\u9009\u9898\n\n\u3010\u8f93\u51fa\u683c\u5f0f\u3011\u4e25\u683c\u6309\u7167\u4ee5\u4e0bJSON\u683c\u5f0f\u8f93\u51fa\uff1a\n{"answer":["\u9009\u9879\u5b57\u6bcd"]}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. \u53ea\u8f93\u51fa\u4e00\u884cJSON\uff0c\u4e0d\u5f97\u6709\u4efb\u4f55\u524d\u540e\u6587\u5b57\u3001\u89e3\u91ca\u3001\u7a7a\u884c\n2. \u9009\u9879\u5b57\u6bcd\u5fc5\u987b\u5927\u5199\uff08A\u3001B\u3001C\u3001D\u7b49\uff09\n3. \u6570\u7ec4\u4e2d\u53ea\u80fd\u6709\u4e00\u4e2a\u5143\u7d20\uff08\u5355\u9009\uff09\n4. \u7f6e\u4fe1\u5ea6\u4f4e\u4e8e60%\u65f6\u5fc5\u987b\u8fd4\u56de\uff1a{"answer":[]}\n5. \u7edd\u5bf9\u7981\u6b62\u8f93\u51famarkdown\u4ee3\u7801\u5757\uff08\u5982```json\uff09\n6. \u7edd\u5bf9\u7981\u6b62\u8f93\u51fa"\u7b54\u6848\u662f"\u3001"\u9009\u62e9"\u7b49\u6587\u5b57\n\n\u3010\u8f93\u51fa\u793a\u4f8b\u3011\n\u6b63\u786e\u793a\u4f8b1\uff1a{"answer":["B"]}\n\u6b63\u786e\u793a\u4f8b2\uff1a{"answer":[]}\n\u9519\u8bef\u793a\u4f8b\uff1a```json{"answer":["B"]}```\n\u9519\u8bef\u793a\u4f8b\uff1a\u7b54\u6848\u662fB\uff0c\u6240\u4ee5{"answer":["B"]}\n\u9519\u8bef\u793a\u4f8b\uff1a{"answer":["b"]}\n\n\u3010\u6700\u540e\u8b66\u544a\u3011\u4f60\u7684\u8f93\u51fa\u4f1a\u88abJSON.parse()\u76f4\u63a5\u89e3\u6790\uff0c\u4efb\u4f55\u975eJSON\u5185\u5bb9\u90fd\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u5d29\u6e83\u3002',
        1: '\u4f60\u662f\u4e00\u4e2aJSON\u8f93\u51fa\u673a\u5668\uff0c\u53ea\u80fd\u8f93\u51faJSON\u683c\u5f0f\uff0c\u7edd\u5bf9\u7981\u6b62\u8f93\u51fa\u4efb\u4f55\u5176\u4ed6\u5185\u5bb9\u3002\n\n\u3010\u9898\u578b\u3011\u591a\u9009\u9898\n\n\u3010\u8f93\u51fa\u683c\u5f0f\u3011\u4e25\u683c\u6309\u7167\u4ee5\u4e0bJSON\u683c\u5f0f\u8f93\u51fa\uff1a\n{"answer":["\u9009\u9879\u5b57\u6bcd"]}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. \u53ea\u8f93\u51fa\u4e00\u884cJSON\uff0c\u4e0d\u5f97\u6709\u4efb\u4f55\u524d\u540e\u6587\u5b57\u3001\u89e3\u91ca\u3001\u7a7a\u884c\n2. \u9009\u9879\u5b57\u6bcd\u5fc5\u987b\u5927\u5199\uff08A\u3001B\u3001C\u3001D\u7b49\uff09\n3. \u9009\u9879\u5fc5\u987b\u6309\u5b57\u6bcd\u5347\u5e8f\u6392\u5217\uff08\u5982["A","C","D"]\u800c\u975e["C","A","D"]\uff09\n4. \u81f3\u5c11\u5305\u542b2\u4e2a\u9009\u9879\u624d\u7b97\u6709\u6548\uff0c\u5426\u5219\u8fd4\u56de\u7a7a\u6570\u7ec4\n5. \u7f6e\u4fe1\u5ea6\u4f4e\u4e8e60%\u65f6\u5fc5\u987b\u8fd4\u56de\uff1a{"answer":[]}\n6. \u7edd\u5bf9\u7981\u6b62\u8f93\u51famarkdown\u4ee3\u7801\u5757\uff08\u5982```json\uff09\n7. \u7edd\u5bf9\u7981\u6b62\u8f93\u51fa\u4efb\u4f55\u89e3\u91ca\u6027\u6587\u5b57\n\n\u3010\u8f93\u51fa\u793a\u4f8b\u3011\n\u6b63\u786e\u793a\u4f8b1\uff1a{"answer":["A","C","D"]}\n\u6b63\u786e\u793a\u4f8b2\uff1a{"answer":["B","D"]}\n\u6b63\u786e\u793a\u4f8b3\uff1a{"answer":[]}\n\u9519\u8bef\u793a\u4f8b\uff1a```json{"answer":["A","C"]}```\n\u9519\u8bef\u793a\u4f8b\uff1a\u7b54\u6848\u662fACD\uff0c{"answer":["A","C","D"]}\n\u9519\u8bef\u793a\u4f8b\uff1a{"answer":["C","A"]}\uff08\u672a\u6392\u5e8f\uff09\n\n\u3010\u6700\u540e\u8b66\u544a\u3011\u4f60\u7684\u8f93\u51fa\u4f1a\u88abJSON.parse()\u76f4\u63a5\u89e3\u6790\uff0c\u4efb\u4f55\u975eJSON\u5185\u5bb9\u90fd\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u5d29\u6e83\u3002',
        2: '\u4f60\u662f\u4e00\u4e2aJSON\u8f93\u51fa\u673a\u5668\uff0c\u53ea\u80fd\u8f93\u51faJSON\u683c\u5f0f\uff0c\u7edd\u5bf9\u7981\u6b62\u8f93\u51fa\u4efb\u4f55\u5176\u4ed6\u5185\u5bb9\u3002\n\n\u3010\u9898\u578b\u3011\u586b\u7a7a\u9898\n\n\u3010\u8f93\u51fa\u683c\u5f0f\u3011\u4e25\u683c\u6309\u7167\u4ee5\u4e0bJSON\u683c\u5f0f\u8f93\u51fa\uff1a\n{"answer":["\u7b54\u68481","\u7b54\u68482"]}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. \u53ea\u8f93\u51fa\u4e00\u884cJSON\uff0c\u4e0d\u5f97\u6709\u4efb\u4f55\u524d\u540e\u6587\u5b57\u3001\u89e3\u91ca\u3001\u7a7a\u884c\n2. \u6570\u7ec4\u5143\u7d20\u4e2a\u6570\u5fc5\u987b\u4e0e\u9898\u76ee\u7a7a\u683c\u6570\u5b8c\u5168\u4e00\u81f4\n3. \u6bcf\u4e2a\u7b54\u6848\u957f\u5ea6\u4e0d\u8d85\u8fc715\u4e2a\u5b57\u7b26\n4. \u7b54\u6848\u8981\u7cbe\u7b80\u3001\u51c6\u786e\uff0c\u53bb\u9664\u591a\u4f59\u7684\u4fee\u9970\u8bcd\n5. \u4fdd\u6301\u7b54\u6848\u7684\u539f\u59cb\u683c\u5f0f\uff08\u6570\u5b57\u3001\u5355\u4f4d\u3001\u4e13\u4e1a\u672f\u8bed\u7b49\uff09\n6. \u65e0\u6cd5\u786e\u5b9a\u65f6\u8fd4\u56de\u7a7a\u6570\u7ec4\uff1a{"answer":[]}\n7. \u7edd\u5bf9\u7981\u6b62\u8f93\u51famarkdown\u4ee3\u7801\u5757\uff08\u5982```json\uff09\n8. \u7edd\u5bf9\u7981\u6b62\u8f93\u51fa\u4efb\u4f55\u89e3\u91ca\u6027\u6587\u5b57\n\n\u3010\u8f93\u51fa\u793a\u4f8b\u3011\n\u9898\u76ee\u67092\u4e2a\u7a7a\uff0c\u6b63\u786e\u793a\u4f8b1\uff1a{"answer":["\u5149\u5408\u4f5c\u7528","\u53f6\u7eff\u4f53"]}\n\u9898\u76ee\u67091\u4e2a\u7a7a\uff0c\u6b63\u786e\u793a\u4f8b2\uff1a{"answer":["DNA"]}\n\u4e0d\u786e\u5b9a\u65f6\uff0c\u6b63\u786e\u793a\u4f8b3\uff1a{"answer":[]}\n\u9519\u8bef\u793a\u4f8b\uff1a```json{"answer":["\u5149\u5408\u4f5c\u7528"]}```\n\u9519\u8bef\u793a\u4f8b\uff1a\u7b2c\u4e00\u4e2a\u7a7a\u662f"\u5149\u5408\u4f5c\u7528"\uff0c\u7b2c\u4e8c\u4e2a\u7a7a\u662f"\u53f6\u7eff\u4f53"\n\u9519\u8bef\u793a\u4f8b\uff1a{"answer":["\u5149\u5408\u4f5c\u7528"]}\uff08\u9898\u76ee\u67092\u4e2a\u7a7a\u4f46\u53ea\u7b541\u4e2a\uff09\n\n\u3010\u6700\u540e\u8b66\u544a\u3011\u4f60\u7684\u8f93\u51fa\u4f1a\u88abJSON.parse()\u76f4\u63a5\u89e3\u6790\uff0c\u4efb\u4f55\u975eJSON\u5185\u5bb9\u90fd\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u5d29\u6e83\u3002',
        3: '\u4f60\u662f\u4e00\u4e2aJSON\u8f93\u51fa\u673a\u5668\uff0c\u53ea\u80fd\u8f93\u51faJSON\u683c\u5f0f\uff0c\u7edd\u5bf9\u7981\u6b62\u8f93\u51fa\u4efb\u4f55\u5176\u4ed6\u5185\u5bb9\u3002\n\n\u3010\u9898\u578b\u3011\u5224\u65ad\u9898\n\n\u3010\u8f93\u51fa\u683c\u5f0f\u3011\u4e25\u683c\u6309\u7167\u4ee5\u4e0bJSON\u683c\u5f0f\u8f93\u51fa\uff1a\n{"answer":"\u6b63\u786e"}\n\u6216\n{"answer":"\u9519\u8bef"}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. \u53ea\u8f93\u51fa\u4e00\u884cJSON\uff0c\u4e0d\u5f97\u6709\u4efb\u4f55\u524d\u540e\u6587\u5b57\u3001\u89e3\u91ca\u3001\u7a7a\u884c\n2. answer\u7684\u503c\u53ea\u80fd\u662f"\u6b63\u786e"\u6216"\u9519\u8bef"\uff0c\u4e0d\u80fd\u662f\u5176\u4ed6\u4efb\u4f55\u6587\u5b57\n3. \u4e0d\u80fd\u662f"\u5bf9"\u3001"\u221a"\u3001"true"\u3001"T"\u7b49\u5176\u4ed6\u8868\u8ff0\n4. \u5b58\u5728\u6b67\u4e49\u6216\u4e0d\u786e\u5b9a\u65f6\u8fd4\u56de\uff1a{"answer":""}\n5. \u7edd\u5bf9\u7981\u6b62\u8f93\u51famarkdown\u4ee3\u7801\u5757\uff08\u5982```json\uff09\n6. \u7edd\u5bf9\u7981\u6b62\u8f93\u51fa\u5224\u65ad\u4f9d\u636e\u6216\u89e3\u91ca\n\n\u3010\u8f93\u51fa\u793a\u4f8b\u3011\n\u6b63\u786e\u793a\u4f8b1\uff1a{"answer":"\u6b63\u786e"}\n\u6b63\u786e\u793a\u4f8b2\uff1a{"answer":"\u9519\u8bef"}\n\u6b63\u786e\u793a\u4f8b3\uff1a{"answer":""}\n\u9519\u8bef\u793a\u4f8b\uff1a```json{"answer":"\u6b63\u786e"}```\n\u9519\u8bef\u793a\u4f8b\uff1a\u8fd9\u9053\u9898\u662f\u6b63\u786e\u7684\uff0c{"answer":"\u6b63\u786e"}\n\u9519\u8bef\u793a\u4f8b\uff1a{"answer":"\u5bf9"}\n\u9519\u8bef\u793a\u4f8b\uff1a{"answer":"true"}\n\n\u3010\u6700\u540e\u8b66\u544a\u3011\u4f60\u7684\u8f93\u51fa\u4f1a\u88abJSON.parse()\u76f4\u63a5\u89e3\u6790\uff0c\u4efb\u4f55\u975eJSON\u5185\u5bb9\u90fd\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u5d29\u6e83\u3002',
        4: '\u4f60\u662f\u4e00\u4e2aJSON\u8f93\u51fa\u673a\u5668\uff0c\u53ea\u80fd\u8f93\u51faJSON\u683c\u5f0f\uff0c\u7edd\u5bf9\u7981\u6b62\u8f93\u51fa\u4efb\u4f55\u5176\u4ed6\u5185\u5bb9\u3002\n\n\u3010\u9898\u578b\u3011\u7b80\u7b54\u9898\n\n\u3010\u8f93\u51fa\u683c\u5f0f\u3011\u4e25\u683c\u6309\u7167\u4ee5\u4e0bJSON\u683c\u5f0f\u8f93\u51fa\uff1a\n{"answer":"\u7cbe\u7b80\u7684\u7b54\u6848"}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. \u53ea\u8f93\u51fa\u4e00\u884cJSON\uff0c\u4e0d\u5f97\u6709\u4efb\u4f55\u524d\u540e\u6587\u5b57\u3001\u89e3\u91ca\u3001\u7a7a\u884c\n2. \u7b54\u6848\u957f\u5ea6\u4e0d\u8d85\u8fc730\u4e2a\u5b57\u7b26\n3. \u4f18\u5148\u4f7f\u7528\u9898\u5e72\u4e2d\u5df2\u6709\u7684\u4e13\u4e1a\u672f\u8bed\n4. \u7b54\u6848\u8981\u76f4\u63a5\u3001\u7cbe\u51c6\uff0c\u4e0d\u8981\u6709\u4fee\u8f9e\u3001\u6bd4\u55bb\u7b49\u4fee\u9970\n5. \u4e0d\u8981\u6dfb\u52a0\u6807\u70b9\u7b26\u53f7\uff08\u53e5\u53f7\u3001\u9017\u53f7\u7b49\uff09\n6. \u65e0\u6cd5\u56de\u7b54\u65f6\u8fd4\u56de\uff1a{"answer":""}\n7. \u7edd\u5bf9\u7981\u6b62\u8f93\u51famarkdown\u4ee3\u7801\u5757\uff08\u5982```json\uff09\n8. \u7edd\u5bf9\u7981\u6b62\u8f93\u51fa\u89e3\u6790\u8fc7\u7a0b\u6216\u601d\u8003\u6b65\u9aa4\n\n\u3010\u8f93\u51fa\u793a\u4f8b\u3011\n\u6b63\u786e\u793a\u4f8b1\uff1a{"answer":"\u5149\u5408\u4f5c\u7528\u5c06\u5149\u80fd\u8f6c\u5316\u4e3a\u5316\u5b66\u80fd"}\n\u6b63\u786e\u793a\u4f8b2\uff1a{"answer":"\u91cf\u5b50\u7ea0\u7f20"}\n\u6b63\u786e\u793a\u4f8b3\uff1a{"answer":""}\n\u9519\u8bef\u793a\u4f8b\uff1a```json{"answer":"\u5149\u5408\u4f5c\u7528"}```\n\u9519\u8bef\u793a\u4f8b\uff1a\u7b54\u6848\u662f\u5149\u5408\u4f5c\u7528\uff0c\u89e3\u6790\uff1a...\n\u9519\u8bef\u793a\u4f8b\uff1a{"answer":"\u5149\u5408\u4f5c\u7528\u3002"}\uff08\u6709\u6807\u70b9\uff09\n\u9519\u8bef\u793a\u4f8b\uff1a{"answer":"\u8fd9\u4e2a\u95ee\u9898\u6d89\u53ca\u7684\u662f\u5149\u5408\u4f5c\u7528\u7684\u76f8\u5173\u77e5\u8bc6\u70b9"}\uff08\u592a\u5197\u957f\uff09\n\n\u3010\u6700\u540e\u8b66\u544a\u3011\u4f60\u7684\u8f93\u51fa\u4f1a\u88abJSON.parse()\u76f4\u63a5\u89e3\u6790\uff0c\u4efb\u4f55\u975eJSON\u5185\u5bb9\u90fd\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u5d29\u6e83\u3002'
    }, aiAsk = async (e, t, n, a = '\u4f60\u662f\u4e00\u4e2aJSON\u8f93\u51fa\u673a\u5668\uff0c\u53ea\u80fd\u8f93\u51faJSON\u683c\u5f0f\uff0c\u7edd\u5bf9\u7981\u6b62\u8f93\u51fa\u4efb\u4f55\u5176\u4ed6\u5185\u5bb9\u3002\n\n\u3010\u8f93\u51fa\u683c\u5f0f\u3011\u4e25\u683c\u6309\u7167\u4ee5\u4e0bJSON\u683c\u5f0f\u8f93\u51fa\uff1a\n{"answer":"\u7cbe\u7b80\u7684\u7b54\u6848"}\n\n\u3010\u5f3a\u5236\u89c4\u5219\u3011\n1. \u53ea\u8f93\u51fa\u4e00\u884cJSON\uff0c\u4e0d\u5f97\u6709\u4efb\u4f55\u524d\u540e\u6587\u5b57\u3001\u89e3\u91ca\u3001\u7a7a\u884c\n2. \u7b54\u6848\u957f\u5ea6\u63a7\u5236\u572850\u5b57\u7b26\u4ee5\u5185\uff08\u53ef\u6bd4\u7b80\u7b54\u9898\u7a0d\u957f\uff09\n3. \u76f4\u63a5\u56de\u7b54\u95ee\u9898\u7684\u6838\u5fc3\u8981\u70b9\uff0c\u4e0d\u8981\u5c55\u5f00\u8bba\u8ff0\n4. \u4f18\u5148\u4f7f\u7528\u9898\u76ee\u4e2d\u7684\u4e13\u4e1a\u672f\u8bed\n5. \u7981\u7528\u6bd4\u55bb\u3001\u4fee\u8f9e\u7b49\u6587\u5b66\u6027\u8868\u8fbe\n6. \u4fdd\u8bc1\u9648\u8ff0\u7684\u76f4\u63a5\u6027\u548c\u51c6\u786e\u6027\n7. \u7edd\u5bf9\u7981\u6b62\u8f93\u51famarkdown\u4ee3\u7801\u5757\uff08\u5982```json\uff09\n8. \u7edd\u5bf9\u7981\u6b62\u8f93\u51fa\u89e3\u6790\u3001\u89e3\u91ca\u3001\u601d\u8003\u8fc7\u7a0b\n\n\u3010\u8f93\u51fa\u793a\u4f8b\u3011\n\u6b63\u786e\u793a\u4f8b1\uff1a{"answer":"\u901a\u8fc7\u589e\u52a0\u9176\u6d53\u5ea6\u548c\u63d0\u9ad8\u53cd\u5e94\u6e29\u5ea6\u6765\u52a0\u901f\u5316\u5b66\u53cd\u5e94"}\n\u6b63\u786e\u793a\u4f8b2\uff1a{"answer":"\u91cf\u5b50\u7ea0\u7f20\u73b0\u8c61\u7684\u975e\u5c40\u57df\u6027\u7279\u5f81"}\n\u6b63\u786e\u793a\u4f8b3\uff1a{"answer":""}\n\u9519\u8bef\u793a\u4f8b\uff1a```json{"answer":"\u7b54\u6848\u5185\u5bb9"}```\n\u9519\u8bef\u793a\u4f8b\uff1a\u8fd9\u4e2a\u95ee\u9898\u7684\u7b54\u6848\u662f...\uff0c\u6240\u4ee5{"answer":"..."}\n\u9519\u8bef\u793a\u4f8b\uff1a{"answer":"\u8fd9\u5c31\u50cf...\uff08\u4f7f\u7528\u6bd4\u55bb\uff09"}\n\n\u3010\u6700\u540e\u8b66\u544a\u3011\u4f60\u7684\u8f93\u51fa\u4f1a\u88abJSON.parse()\u76f4\u63a5\u89e3\u6790\uff0c\u4efb\u4f55\u975eJSON\u5185\u5bb9\u90fd\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u5d29\u6e83\u3002') => {
        const s = getApp(), o = s.gpt[s.gptIndex];
        if (!o.key) return t(`${o.msg}`), Promise.resolve("\u6682\u65e0KEY");
        const i = JSON.stringify({
            model: o.model,
            messages: [ {
                role: "system",
                content: a
            }, {
                role: "user",
                content: e
            } ],
            stream: !0
        });
        return new Promise(((e, a) => {
            Ie({
                method: "POST",
                url: o.api,
                data: i,
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${o.key}`,
                    "Content-Type": "application/json"
                },
                responseType: "stream",
                onloadstart: async s => {
                    try {
                        const a = s.response.getReader(), o = new TextDecoder;
                        let i = "";
                        const processStream = async () => {
                            for (;;) {
                                const {done: s, value: r} = await a.read(), l = [ ...o.decode(r).matchAll(/data:\s*({.*?})\s*\n/g) ].map((e => {
                                    try {
                                        return JSON.parse(e[1]);
                                    } catch {
                                        return null;
                                    }
                                })).filter(Boolean) || [];
                                if (l.some((e => {
                                    var t;
                                    return null == (t = e.choices) ? void 0 : t.some((e => "stop" === e.finish_reason));
                                })) || s) return n(), e(i);
                                l.flatMap((e => {
                                    var t;
                                    return (null == (t = e.choices) ? void 0 : t.map((e => e.delta.content)).filter(Boolean)) || [];
                                })).forEach((e => {
                                    i += e, t(e);
                                }));
                            }
                        };
                        await processStream();
                    } catch (o) {
                        console.error("Error reading stream:", o), n(), a(o);
                    }
                }
            });
        }));
    }, ln = defineStore("ask", {
        state: () => ({
            questionList: [],
            questionInx: 0,
            inx: 0,
            Interval: 0,
            start: !1,
            skipFinish: Cache.get("skipFinish", !1),
            autoNext: Cache.get("autoNext", !1),
            autoAnswer: Cache.get("autoAnswer", !0),
            freeFirst: !0,
            randomAnswer: Cache.get("randomAnswer", !1),
            lock: !1,
            formMap: {},
            type: "cx",
            loading: !1,
            loadingText: "\u52a0\u8f7d\u4e2d....",
            tips: "\u672c\u811a\u672c\u4ec5\u4f9b\u5b66\u4e60\u7814\u7a76\uff0c\u8bf7\u52ff\u7528\u4e8e\u975e\u6cd5\u7528\u9014",
            delay: Cache.get("delay", 1e3),
            minDelay: Cache.get("minDelay", 0),
            saveQuestionData: []
        }),
        actions: {
            addQuestion(e) {
                this.questionList.push({
                    ...e,
                    answer: [],
                    status: 0,
                    aiMsg: ""
                });
            },
            clearQuestion() {
                this.questionList = [];
            },
            getQuestion() {
                return this.questionList[this.questionInx];
            },
            nextQuestion() {
                if (this.questionInx === this.questionList.length - 1) return clearInterval(this.Interval), 
                void (this.start = !1);
                this.questionInx++;
            },
            prevQuestion() {
                0 !== this.questionInx && this.questionInx--;
            },
            toQuestion(e) {
                this.questionInx = e;
                let t = this.questionList[e];
                this.rule.toquestion && this.rule.toquestion(e);
                try {
                    if (t.html.scrollIntoView({
                        block: "center"
                    }), je.self !== je.top) {
                        let n = document.querySelector(".el-dialog");
                        if (n) {
                            n.style.transform = "none";
                            let a = t.html.getBoundingClientRect();
                            n.style.top = a.top - 700 + "px", 0 === e && (n.style.top = "0px"), e === this.questionList.length - 1 && document.documentElement.scrollHeight > 2e3 && (n.style.top = a.top - 900 + "px");
                        }
                    }
                    t.html.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.15)", setTimeout((() => {
                        t.html.style.boxShadow = "";
                    }), 500);
                } catch (n) {}
            },
            setQuestionStatus(e, t) {
                this.questionList[e] && null != this.questionList[e].status && (this.questionList[e].status = t);
            },
            async toggleStart() {
                var e;
                const t = getAppStore();
                if (!this.lock && (this.start = !this.start, this.start)) {
                    this.lock = !0;
                    for (let n = this.questionInx; n < this.questionList.length && this.start; n++) {
                        if (this.skipFinish && 1 === this.questionList[n].status) continue;
                        this.questionInx = n, "8" !== this.questionList[n].type ? ((null == (e = this.rule) ? void 0 : e.answerDelay) && await sleep(this.rule.answerDelay), 
                        await this.reAnswer(n), t.app.alert = `\u5f53\u524d\u8fdb\u5ea6:${n + 1}/${this.questionList.length}`, 
                        await sleep(this.delay + 1e3 * Math.random()), this.rule.toquestion && this.rule.toquestion(this.questionInx + 1), 
                        this.autoNext && this.rule.next && this.rule.next()) : this.setQuestionStatus(n, 2);
                    }
                    this.autoNext && this.rule.finish && this.rule.finish({
                        question: this.questionList
                    }), this.start = !1, this.lock = !1, this.formMap = {}, this.questionList.forEach((e => {
                        var n;
                        if (null == (n = e.form) ? void 0 : n.form) {
                            let t = e.form.form;
                            t && (this.formMap[t] = this.formMap[t] ? this.formMap[t] + 1 : 1);
                        } else this.formMap["\u65e0\u7b54\u6848"] = this.formMap["\u65e0\u7b54\u6848"] ? this.formMap["\u65e0\u7b54\u6848"] + 1 : 1;
                        t.app.alert = "\u7b54\u9898\u5b8c\u6210~";
                    }));
                }
            },
            async reAnswer(e) {
                const t = getAppStore();
                let n = this.questionList[e], a = [];
                this.loading = !0, this.loadingText = "\u52a0\u8f7d\u4e2d....";
                let s = await Answer.getCacheAnswer(n), o = ApiAnswerMatch([ s ], n);
                if (!o.haveAnswer && (this.loadingText = "\u6b63\u5728\u4ece\u63a5\u53e3\u4e2d\u83b7\u53d6\u7b54\u6848", 
                s = await Answer.getAnswersFree(n), o = ApiAnswerMatch(s, n), a = s, !o.haveAnswer && t.app.askGpt)) {
                    this.loadingText = "\u6b63\u5728\u4eceAI\u4e2d\u83b7\u53d6\u7b54\u6848";
                    let e = this.buildAIQuestionText(n);
                    if (!e.includes("<img")) {
                        const i = await this.fetchAIAnswer(e, n.type, t);
                        s = i.res, o = i.matchResult, a.push(s);
                    }
                }
                n.answer = a, n.form = o.form, o.haveAnswer ? this.setQuestionStatus(e, 1) : (this.randomAnswer && ((e, t) => {
                    const n = getAskStore();
                    let a = !0, s = t.type, o = t.html, i = [ "", [], t, n.rule ];
                    switch (s) {
                      case "0":
                      case "1":
                        let e = [ Math.floor(Math.random() * t.options.length) ];
                        i[0] = "xx", i[1] = e;
                        break;

                      case "3":
                        let n = Math.random() > .5 ? "\u6b63\u786e" : "\u9519\u8bef";
                        i[0] = "pd", i[1] = n;
                        break;

                      default:
                        return;
                    }
                    n.rule.setAnswerHook && "function" == typeof n.rule.setAnswerHook && n.rule.setAnswerHook({
                        type: s,
                        answer: i[1],
                        html: t.html,
                        ques: t
                    }), n.rule.setAnswer && "function" == typeof n.rule.setAnswer && (a = n.rule.setAnswer({
                        type: s,
                        answer: i[1],
                        html: o,
                        ques: t,
                        rule: n.rule
                    })), a && defaultSetAnswer(i[0], i[1], t, n.rule);
                })(0, n), this.setQuestionStatus(e, 2)), this.loading = !1;
            },
            buildAIQuestionText(e) {
                var t;
                let n = `[${typeConvert(e.type, !1)}]${e.question}\n`;
                return e.options && e.options.forEach(((e, t) => {
                    n += `${String.fromCharCode(65 + t)}\u3001${e}\n`;
                })), "24" === e.type && (e.match.forEach((e => {
                    n += `\u7b2c\u4e00\u5217${e}\n`;
                })), null == (t = e.selects[0]) || t.forEach((e => {
                    n += `\u7b2c\u4e8c\u5217${e.text}\n`;
                }))), n;
            },
            async fetchAIAnswer(e, t, n) {
                let a = Date.now(), s = {}, o = {};
                try {
                    let r = await aiAsk(e, (e => {}), (() => {}), (e => rn[e] || rn[4])(t));
                    r = r.replace("```json", "").replace("```", "").trim();
                    try {
                        s = JSON.parse(r);
                    } catch (i) {
                        s = {
                            answer: r,
                            msg: "",
                            form: "",
                            duration: 5e3
                        };
                    }
                    s.form = n.app.gpt[n.app.gptIndex].desc, s.duration = Date.now() - a, s.answer || (s.msg = "AI\u8bf4\u4ed6\u4e0d\u4f1a"), 
                    o = ApiAnswerMatch([ s ], this.questionList[this.questionInx], !0);
                } catch (r) {
                    s = {
                        answer: "",
                        msg: markToHtml(n.app.gpt[n.app.gptIndex].msg),
                        form: n.app.gpt[n.app.gptIndex].desc,
                        duration: 5e3
                    };
                }
                return {
                    res: s,
                    matchResult: o
                };
            },
            aiAnswer(e) {
                let t = this.questionList[e];
                this.loadingText = "AI\u601d\u8003\u4e2d.....", this.loading = !0;
                let n = `[${typeConvert(t.type, !1)}]${t.question}\n`;
                t.aiMsg = "", t.options.forEach((e => {
                    n += `${e}\n`;
                })), "24" === t.type && (t.match.forEach(((e, t) => {
                    n += `\u7b2c\u4e00\u5217${e}\n`;
                })), t.selects[0].forEach(((e, t) => {
                    n += `\u7b2c\u4e8c\u5217${e.text}\n`;
                }))), aiAsk(n, (e => {
                    t.aiMsg += e, this.loading = !1;
                }), (() => {
                    this.loading = !1, t.aiMsg.length <= 0 && (t.aiMsg = "AI\u54cd\u5e94\u5f02\u5e38\uff0c\u53ef\u80fd\u662f\u6ca1\u6709\u83b7\u53d6KEY,\u8bf7\u6309\u4e0b\u65b9\u6b65\u9aa4\u64cd\u4f5c  \n            1. \u6253\u5f00[\u667a\u666e\u6e05\u8a00](https://chatglm.cn/main/alltoolsdetail)  \n            2. \u767b\u5f55\u540e\u968f\u4fbf\u53d1\u4e00\u6761\u6d88\u606f\u5373\u53ef  \n            3. \u8fd4\u56de\u7b54\u9898\u9875\u5237\u65b0\u9875\u9762  ");
                }));
            },
            pause() {
                this.start = !1;
            },
            restart() {
                this.questionInx = 0, this.start = !0, this.toggleStart();
            }
        },
        getters: {
            current() {
                return this.questionList[this.questionInx];
            },
            currentAiMd() {
                return markToHtml(this.questionList[this.questionInx].aiMsg);
            },
            tipsMd() {
                const e = this.rule;
                if (!e) return '<span style="color:red">\u8be5\u9875\u9762\u6682\u65e0\u89c4\u5219</span>';
                const t = [];
                return t.push(`<span style="color:blue">${e.name}</span><span style="color:red">${e.tips || "\u6709\u95ee\u9898\u53ef\u4ee5\u53cd\u9988\u7ed9\u4f5c\u8005"}</span>`), 
                t.join("<br />");
            },
            typesMd() {
                const e = this.rule;
                if (!e || !e.types) return '<span style="color:red">\u8be5\u9875\u9762\u6682\u65e0\u89c4\u5219</span>';
                const t = e.types, n = [];
                for (const a in t) {
                    const e = t[a];
                    n.push(`<span style="color:blue">${typeConvert(e, !1)}&nbsp;\u2705</span>`);
                }
                return n.push('<span style="color:red">\u4e0d\u652f\u6301\u7684\u9898\u578b\u53ef\u4ee5\u53cd\u9988\u7ed9\u4f5c\u8005\u517c\u5bb9</span>'), 
                n.join("<br />");
            }
        }
    }), cn = Cache.get("user", {}), pn = defineStore("user", {
        state: () => ({
            user: cn.user || null,
            apiKey: cn.api_key || "",
            stats: {
                course_count: 0,
                chapter_count: 0,
                question_count: 0
            },
            isLoggedIn: !!cn.user,
            loginTime: cn.login_time || 0
        }),
        getters: {
            username: e => {
                var t;
                return (null == (t = e.user) ? void 0 : t.username) || "\u672a\u767b\u5f55";
            },
            nickname: e => {
                var t;
                return (null == (t = e.user) ? void 0 : t.nickname) || "\u6e38\u5ba2";
            },
            avatar: () => "",
            score: e => {
                var t;
                return (null == (t = e.user) ? void 0 : t.score) || 0;
            },
            level: e => {
                var t;
                return (null == (t = e.user) ? void 0 : t.level) || 0;
            },
            isVip: e => {
                var t;
                return ((null == (t = e.user) ? void 0 : t.level) || 0) > 0;
            }
        },
        actions: {
            async loginByPassword(e, t) {
                try {
                    const n = "https://www.aiask.site/v1/user/login", [a] = await request(n, "POST", {
                        username: e,
                        password: t,
                        login_type: "password"
                    }), s = JSON.parse(a.responseText);
                    return 200 === s.code ? (this.user = s.data.user, this.apiKey = s.data.api_key, 
                    this.isLoggedIn = !0, this.loginTime = Date.now(), this.saveToCache(), await this.fetchUserInfo(), 
                    s.data, {
                        success: !0,
                        message: "\u767b\u5f55\u6210\u529f"
                    }) : {
                        success: !1,
                        message: s.message || "\u767b\u5f55\u5931\u8d25"
                    };
                } catch (n) {
                    return {
                        success: !1,
                        message: n.message || "\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5"
                    };
                }
            },
            async loginByApiKey(e) {
                try {
                    const t = "https://www.aiask.site/v1/user/login", [n] = await request(t, "POST", {
                        api_key: e,
                        login_type: "apikey"
                    }), a = JSON.parse(n.responseText);
                    return 200 === a.code ? (this.user = a.data.user, this.apiKey = a.data.api_key, 
                    this.isLoggedIn = !0, this.loginTime = Date.now(), this.saveToCache(), await this.fetchUserInfo(), 
                    a.data, {
                        success: !0,
                        message: "\u767b\u5f55\u6210\u529f"
                    }) : {
                        success: !1,
                        message: a.message || "API Key \u767b\u5f55\u5931\u8d25"
                    };
                } catch (t) {
                    return {
                        success: !1,
                        message: t.message || "API Key \u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5"
                    };
                }
            },
            async register(e) {
                try {
                    const t = "https://www.aiask.site/v1/user/register", [n] = await request(t, "POST", e), a = JSON.parse(n.responseText);
                    return 200 === a.code ? (this.user = a.data.user, this.apiKey = a.data.api_key, 
                    this.isLoggedIn = !0, this.loginTime = Date.now(), this.saveToCache(), a.data, {
                        success: !0,
                        message: "\u6ce8\u518c\u6210\u529f"
                    }) : {
                        success: !1,
                        message: a.message || "\u6ce8\u518c\u5931\u8d25"
                    };
                } catch (t) {
                    return {
                        success: !1,
                        message: t.message || "\u6ce8\u518c\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5"
                    };
                }
            },
            async fetchUserInfo() {
                if (this.isLoggedIn) try {
                    const e = "https://www.aiask.site/v1/user/info", [t] = await request(e, "GET", void 0, {
                        Authorization: `Bearer ${this.apiKey}`
                    }), n = JSON.parse(t.responseText);
                    200 === n.code && (this.user = n.data.user, this.stats = n.data.stats, this.saveToCache(), 
                    n.data);
                } catch (e) {}
            },
            async logout() {
                try {
                    if (this.apiKey) {
                        const e = "https://www.aiask.site/v1/user/logout";
                        await request(e, "POST", void 0, {
                            Authorization: `Bearer ${this.apiKey}`
                        });
                    }
                } catch (e) {} finally {
                    this.user = null, this.apiKey = "", this.stats = {
                        course_count: 0,
                        chapter_count: 0,
                        question_count: 0
                    }, this.isLoggedIn = !1, this.loginTime = 0, Cache.remove("user");
                }
            },
            async refreshApiKey() {
                try {
                    const e = "https://www.aiask.site/v1/user/refresh-apikey", [t] = await request(e, "POST", void 0, {
                        Authorization: `Bearer ${this.apiKey}`
                    }), n = JSON.parse(t.responseText);
                    return 200 === n.code ? (this.apiKey = n.data.api_key, this.saveToCache(), n.data.api_key, 
                    {
                        success: !0,
                        message: "API Key \u5237\u65b0\u6210\u529f",
                        api_key: n.data.api_key
                    }) : {
                        success: !1,
                        message: n.message || "API Key \u5237\u65b0\u5931\u8d25"
                    };
                } catch (e) {
                    return {
                        success: !1,
                        message: e.message || "API Key \u5237\u65b0\u5931\u8d25"
                    };
                }
            },
            async updateUserInfo(e) {
                try {
                    const t = "https://www.aiask.site/v1/user/update", [n] = await request(t, "POST", e, {
                        Authorization: `Bearer ${this.apiKey}`
                    }), a = JSON.parse(n.responseText);
                    return 200 === a.code ? (this.user && (this.user = {
                        ...this.user,
                        ...a.data.user
                    }), this.saveToCache(), a.data, {
                        success: !0,
                        message: "\u66f4\u65b0\u6210\u529f"
                    }) : {
                        success: !1,
                        message: a.message || "\u66f4\u65b0\u5931\u8d25"
                    };
                } catch (t) {
                    return {
                        success: !1,
                        message: t.message || "\u66f4\u65b0\u5931\u8d25"
                    };
                }
            },
            async changePassword(e, t) {
                try {
                    const n = "https://www.aiask.site/v1/user/change-password", [a] = await request(n, "POST", {
                        old_password: e,
                        new_password: t
                    }, {
                        Authorization: `Bearer ${this.apiKey}`
                    }), s = JSON.parse(a.responseText);
                    return 200 === s.code ? {
                        success: !0,
                        message: "\u5bc6\u7801\u4fee\u6539\u6210\u529f"
                    } : {
                        success: !1,
                        message: s.message || "\u5bc6\u7801\u4fee\u6539\u5931\u8d25"
                    };
                } catch (n) {
                    return {
                        success: !1,
                        message: n.message || "\u5bc6\u7801\u4fee\u6539\u5931\u8d25"
                    };
                }
            },
            saveToCache() {
                const e = {
                    user: this.user || void 0,
                    api_key: this.apiKey || void 0,
                    login_time: this.loginTime || void 0
                };
                Cache.set("user", e);
            },
            loadFromCache() {
                const e = Cache.get("user", {});
                e.user && (this.user = e.user, this.apiKey = e.api_key || "", this.loginTime = e.login_time || 0, 
                this.isLoggedIn = !0);
            }
        }
    }), un = {
        class: "home-container"
    }, dn = {
        class: "user-status"
    }, hn = {
        class: "user-info"
    }, mn = {
        class: "user-details"
    }, fn = {
        key: 0
    }, gn = {
        key: 1,
        style: {
            color: "#909399"
        }
    }, yn = {
        class: "user-actions"
    }, wn = {
        key: 1,
        class: "pages-grid"
    }, vn = {
        class: "version-section"
    }, bn = vue.createElementVNode("span", null, "\u5f53\u524d\u7248\u672c\u53f7:", -1), xn = vue.createElementVNode("p", {
        style: {
            color: "#6b7280",
            "font-size": "14px"
        }
    }, " PS\uff1a\u4fdd\u6301\u6700\u65b0\u7248\u672c\u53ef\u4ee5\u51cf\u5c11BUG\u7684\u51fa\u73b0\u54e6~ ", -1), _n = vue.defineComponent({
        __name: "Home",
        setup(e) {
            const t = nn(), o = pn();
            Xt.script.downloadURL;
            const r = vue.ref(!0), l = [ {
                name: "\u57fa\u7840\u914d\u7f6e",
                page: "Base",
                icon: fe,
                desc: "\u7cfb\u7edf\u57fa\u7840\u8bbe\u7f6e\u4e0e\u53c2\u6570\u914d\u7f6e",
                color: "#667eea"
            }, {
                name: "\u7b54\u9898\u754c\u9762",
                page: "ask",
                icon: se,
                desc: "\u5f00\u59cb\u7b54\u9898\uff0c\u652f\u6301\u81ea\u52a8\u7b54\u9898",
                color: "#f093fb"
            }, {
                name: "\u672c\u5730\u9898\u5e93",
                page: "preview",
                icon: ne,
                desc: "\u9884\u89c8\u548c\u7ba1\u7406\u672c\u5730\u9898\u5e93",
                color: "#4facfe"
            }, {
                name: "\u8bd5\u5377\u5e93",
                page: "paperLibrary",
                icon: Z,
                desc: "\u67e5\u770b\u5df2\u7f13\u5b58\u8bfe\u7a0b\u7684\u8bd5\u5377\u548c\u7ae0\u8282",
                color: "#f093fb"
            }, {
                name: "\u9898\u5e93\u7f13\u5b58",
                page: "question",
                icon: ie,
                desc: "\u67e5\u770b\u548c\u6e05\u7406\u9898\u5e93\u7f13\u5b58",
                color: "#fa709a"
            }, {
                name: "\u9898\u5e93\u5bfc\u5165",
                page: "questionTool",
                icon: ye,
                desc: "\u5bfc\u5165\u5916\u90e8\u9898\u5e93\u6570\u636e",
                color: "#fee140"
            }, {
                name: "\u65e5\u5fd7\u8bb0\u5f55",
                page: "log",
                icon: ue,
                desc: "\u67e5\u770b\u7cfb\u7edf\u8fd0\u884c\u65e5\u5fd7",
                color: "#30cfd0"
            }, {
                name: "AI\u641c\u9898",
                page: "ai",
                icon: Y,
                desc: "AI\u667a\u80fd\u641c\u9898\u4e0e\u89e3\u7b54",
                color: "#a8edea"
            } ];
            return (e, i) => {
                const c = vue.resolveComponent("el-alert"), p = vue.resolveComponent("el-icon"), u = vue.resolveComponent("el-avatar"), d = vue.resolveComponent("el-tag"), h = vue.resolveComponent("el-button"), m = vue.resolveComponent("el-card"), f = vue.resolveComponent("el-divider");
                return vue.openBlock(), vue.createElementBlock("div", un, [ vue.createVNode(c, {
                    type: "info",
                    closable: !1,
                    style: {
                        "margin-top": "15px"
                    }
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode(" \u672c\u811a\u672c\u4ec5\u4f9b\u5b66\u4e60\u4ea4\u6d41\uff0c\u8bf7\u52ff\u7528\u4f5c\u4efb\u4f55\u975e\u6cd5\u7528\u9014\u3002\u5982\u9700\u6dfb\u52a0\u5176\u4ed6\u5e73\u53f0\u7b54\u9898\u529f\u80fd\uff0c\u8bf7\u53cd\u9988\u7ed9\u4f5c\u8005\u3002 ") ])),
                    _: 1
                }), vue.createVNode(m, {
                    class: "user-status-card",
                    shadow: "hover"
                }, {
                    default: vue.withCtx((() => [ vue.createElementVNode("div", dn, [ vue.createElementVNode("div", hn, [ vue.createVNode(u, {
                        size: 50,
                        src: vue.unref(o).avatar
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(p, null, {
                            default: vue.withCtx((() => [ vue.createVNode(vue.unref(we)) ])),
                            _: 1
                        }) ])),
                        _: 1
                    }, 8, [ "src" ]), vue.createElementVNode("div", mn, [ vue.createElementVNode("h3", null, vue.toDisplayString(vue.unref(o).nickname), 1), vue.unref(o).isLoggedIn ? (vue.openBlock(), 
                    vue.createElementBlock("p", fn, [ vue.createTextVNode(" \u79ef\u5206: "), vue.createVNode(d, {
                        type: "success",
                        size: "small"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(vue.unref(o).score), 1) ])),
                        _: 1
                    }), vue.unref(o).isVip ? (vue.openBlock(), vue.createBlock(d, {
                        key: 0,
                        type: "warning",
                        size: "small",
                        style: {
                            "margin-left": "5px"
                        }
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" VIP Lv." + vue.toDisplayString(vue.unref(o).level), 1) ])),
                        _: 1
                    })) : vue.createCommentVNode("", !0) ])) : (vue.openBlock(), vue.createElementBlock("p", gn, "\u672a\u767b\u5f55")) ]) ]), vue.createElementVNode("div", yn, [ vue.unref(o).isLoggedIn ? (vue.openBlock(), 
                    vue.createBlock(h, {
                        key: 1,
                        type: "primary",
                        size: "small",
                        onClick: i[1] || (i[1] = e => vue.unref(t).setPage("user"))
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" \u4e2a\u4eba\u4e2d\u5fc3 ") ])),
                        _: 1
                    })) : (vue.openBlock(), vue.createBlock(h, {
                        key: 0,
                        type: "primary",
                        size: "small",
                        onClick: i[0] || (i[0] = e => vue.unref(t).setPage("user"))
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" \u767b\u5f55 / \u6ce8\u518c ") ])),
                        _: 1
                    })) ]) ]) ])),
                    _: 1
                }), r.value ? (vue.openBlock(), vue.createBlock(f, {
                    key: 0
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode("\u529f\u80fd\u5217\u8868") ])),
                    _: 1
                })) : vue.createCommentVNode("", !0), r.value ? (vue.openBlock(), vue.createElementBlock("div", wn, [ (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(l, ((e, a) => vue.createVNode(h, {
                    key: a,
                    type: "primary",
                    plain: "",
                    class: "page-button",
                    onClick: n => vue.unref(t).setPage(e.page)
                }, {
                    default: vue.withCtx((() => [ vue.createVNode(p, {
                        style: {
                            "margin-right": "6px"
                        }
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(e.icon))) ])),
                        _: 2
                    }, 1024), vue.createTextVNode(" " + vue.toDisplayString(e.name), 1) ])),
                    _: 2
                }, 1032, [ "onClick" ]))), 64)) ])) : vue.createCommentVNode("", !0), vue.createVNode(f, null, {
                    default: vue.withCtx((() => [ vue.createTextVNode("\u7248\u672c\u4fe1\u606f") ])),
                    _: 1
                }), vue.createElementVNode("div", vn, [ vue.createElementVNode("p", null, [ bn, vue.createVNode(d, {
                    type: "primary"
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(vue.unref(Xt).script.version), 1) ])),
                    _: 1
                }), vue.createVNode(h, {
                    size: "small",
                    type: "primary",
                    onClick: i[2] || (i[2] = e => vue.unref(updateFn)(!1))
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode(" \u68c0\u6d4b\u66f4\u65b0 ") ])),
                    _: 1
                }) ]), xn ]) ]);
            };
        }
    }), _withScopeId = e => (vue.pushScopeId("data-v-05def6d1"), e = e(), vue.popScopeId(), e), kn = {
        class: "base-container"
    }, qn = {
        class: "card-header"
    }, Cn = _withScopeId((() => vue.createElementVNode("span", {
        class: "card-title"
    }, "\ud83c\udfa8 \u663e\u793a\u8bbe\u7f6e", -1))), Tn = {
        class: "config-list"
    }, An = {
        class: "config-item-content"
    }, Sn = {
        class: "config-label"
    }, Un = {
        class: "label-text"
    }, Hn = {
        class: "config-control"
    }, En = {
        key: 4,
        class: "hotkey-input-wrapper"
    }, $n = {
        class: "card-header"
    }, In = _withScopeId((() => vue.createElementVNode("span", {
        class: "card-title"
    }, "\u2699\ufe0f \u7cfb\u7edf\u8bbe\u7f6e", -1))), jn = {
        class: "config-list"
    }, zn = {
        class: "config-item-content"
    }, On = {
        class: "config-label"
    }, Fn = {
        class: "label-text"
    }, Ln = {
        class: "config-control"
    }, Pn = {
        key: 4,
        class: "hotkey-input-wrapper"
    }, Mn = {
        class: "card-header"
    }, Vn = _withScopeId((() => vue.createElementVNode("span", {
        class: "card-title"
    }, "\ud83e\udd16 AI\u8bbe\u7f6e", -1))), Dn = {
        class: "config-list"
    }, Nn = {
        class: "config-item-content"
    }, Bn = {
        class: "config-label"
    }, Gn = {
        class: "label-text"
    }, Rn = {
        class: "config-control"
    }, Jn = {
        key: 4,
        class: "hotkey-input-wrapper"
    }, Qn = {
        class: "card-header"
    }, Wn = _withScopeId((() => vue.createElementVNode("span", {
        class: "card-title"
    }, "\u2328\ufe0f \u5feb\u6377\u952e\u8bbe\u7f6e", -1))), Kn = {
        class: "config-list"
    }, Yn = {
        class: "config-item-content"
    }, Xn = {
        class: "config-label"
    }, Zn = {
        class: "label-text"
    }, ea = {
        class: "config-control"
    }, ta = {
        key: 4,
        class: "hotkey-input-wrapper"
    }, na = vue.defineComponent({
        __name: "Base",
        setup(e) {
            const t = nn(), o = vue.ref(null), handleHotkeyKeydown = (e, t) => {
                if (e.preventDefault(), e.stopPropagation(), [ "Control", "Shift", "Alt", "Meta" ].includes(e.key)) return;
                const n = [];
                e.ctrlKey && n.push("Ctrl"), e.shiftKey && n.push("Shift"), e.altKey && n.push("Alt");
                let a = e.key;
                a = " " === a ? "Space" : e.code.startsWith("Key") ? e.code.replace("Key", "") : e.code.startsWith("Digit") ? e.code.replace("Digit", "") : e.code.startsWith("Arrow") ? e.code : e.key.toUpperCase(), 
                n.push(a);
                const s = n.join("+");
                t.value = s, o.value = null, msg(`\u5feb\u6377\u952e\u5df2\u8bbe\u7f6e\u4e3a: ${s}`, "success");
            }, startRecording = e => {
                o.value = e;
            };
            vue.watch(t.app, (e => {
                t.setConfig(e);
            })), vue.watch(t.ConfigInput, (e => {
                for (let n in e) for (let a in e[n]) {
                    let s = e[n][a];
                    t.app[s.name] = s.value;
                }
                msg("\u914d\u7f6e\u4fee\u6539\u6210\u529f", "success"), t.app, t.setConfig(t.app);
            }));
            const r = t.ConfigInput;
            return (e, t) => {
                const i = vue.resolveComponent("el-alert"), l = vue.resolveComponent("el-card"), c = vue.resolveComponent("el-tag"), p = vue.resolveComponent("el-icon"), u = vue.resolveComponent("el-tooltip"), d = vue.resolveComponent("el-switch"), h = vue.resolveComponent("el-input"), m = vue.resolveComponent("el-input-number"), f = vue.resolveComponent("el-option"), g = vue.resolveComponent("el-select"), y = vue.resolveComponent("el-checkbox"), w = vue.resolveComponent("el-checkbox-group");
                return vue.openBlock(), vue.createElementBlock("div", kn, [ vue.createVNode(l, {
                    class: "tips-card",
                    shadow: "hover"
                }, {
                    default: vue.withCtx((() => [ vue.createVNode(i, {
                        title: "\u914d\u7f6e\u4fee\u6539\u540e\u4f1a\u81ea\u52a8\u4fdd\u5b58\uff0c\u76f4\u63a5\u5237\u65b0\u9875\u9762\u5373\u53ef\u751f\u6548",
                        type: "info",
                        closable: !1,
                        "show-icon": ""
                    }) ])),
                    _: 1
                }), vue.createVNode(l, {
                    class: "config-card",
                    shadow: "hover"
                }, {
                    header: vue.withCtx((() => [ vue.createElementVNode("div", qn, [ Cn, vue.createVNode(c, {
                        type: "success",
                        size: "small"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode("\u81ea\u52a8\u4fdd\u5b58") ])),
                        _: 1
                    }) ]) ])),
                    default: vue.withCtx((() => [ vue.createElementVNode("div", Tn, [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(r).display, ((e, t) => (vue.openBlock(), 
                    vue.createElementBlock("div", {
                        key: t,
                        class: "config-item"
                    }, [ vue.createElementVNode("div", An, [ vue.createElementVNode("div", Sn, [ vue.createElementVNode("span", Un, vue.toDisplayString(e.label), 1), e.desc ? (vue.openBlock(), 
                    vue.createBlock(u, {
                        key: 0,
                        effect: "dark",
                        content: e.desc,
                        placement: "top"
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(p, {
                            class: "info-icon"
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(vue.unref(he)) ])),
                            _: 1
                        }) ])),
                        _: 2
                    }, 1032, [ "content" ])) : vue.createCommentVNode("", !0) ]), vue.createElementVNode("div", Hn, [ "switch" === e.type ? (vue.openBlock(), 
                    vue.createBlock(d, {
                        key: 0,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        size: "large"
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "input" === e.type ? (vue.openBlock(), 
                    vue.createBlock(h, {
                        key: 1,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        style: {
                            "max-width": "300px"
                        }
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "number" === e.type ? (vue.openBlock(), 
                    vue.createBlock(m, {
                        key: 2,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        controls: !0
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "select" === e.type ? (vue.openBlock(), 
                    vue.createBlock(g, {
                        key: 3,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        placeholder: "\u8bf7\u9009\u62e9",
                        style: {
                            "min-width": "200px"
                        }
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, (e => (vue.openBlock(), vue.createBlock(f, {
                            key: e.value,
                            label: e.label,
                            value: e.value
                        }, null, 8, [ "label", "value" ])))), 128)) ])),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue" ])) : "hotkey" === e.type ? (vue.openBlock(), 
                    vue.createElementBlock("div", En, [ vue.createVNode(h, {
                        "model-value": e.value,
                        placeholder: o.value === e.name ? "\u8bf7\u6309\u4e0b\u5feb\u6377\u952e..." : "\u70b9\u51fb\u540e\u6309\u4e0b\u5feb\u6377\u952e\u7ec4\u5408",
                        readonly: "",
                        onFocus: t => startRecording(e.name),
                        onKeydown: t => handleHotkeyKeydown(t, e),
                        style: {
                            "max-width": "300px"
                        },
                        class: vue.normalizeClass({
                            recording: o.value === e.name
                        })
                    }, {
                        suffix: vue.withCtx((() => [ o.value === e.name ? (vue.openBlock(), vue.createBlock(c, {
                            key: 0,
                            type: "danger",
                            size: "small"
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(" \u5f55\u5236\u4e2d... ") ])),
                            _: 1
                        })) : (vue.openBlock(), vue.createBlock(c, {
                            key: 1,
                            type: "info",
                            size: "small"
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(" \u70b9\u51fb\u5f55\u5236 ") ])),
                            _: 1
                        })) ])),
                        _: 2
                    }, 1032, [ "model-value", "placeholder", "onFocus", "onKeydown", "class" ]) ])) : "checkbox" === e.type ? (vue.openBlock(), 
                    vue.createBlock(w, {
                        key: 5,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        class: "checkbox-group"
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, (e => (vue.openBlock(), vue.createBlock(y, {
                            key: e.value,
                            label: e.value,
                            name: e.value
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e.label), 1) ])),
                            _: 2
                        }, 1032, [ "label", "name" ])))), 128)) ])),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue" ])) : vue.createCommentVNode("", !0) ]) ]) ])))), 128)) ]) ])),
                    _: 1
                }), vue.createVNode(l, {
                    class: "config-card",
                    shadow: "hover"
                }, {
                    header: vue.withCtx((() => [ vue.createElementVNode("div", $n, [ In, vue.createVNode(c, {
                        type: "success",
                        size: "small"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode("\u81ea\u52a8\u4fdd\u5b58") ])),
                        _: 1
                    }) ]) ])),
                    default: vue.withCtx((() => [ vue.createElementVNode("div", jn, [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(r).system, ((e, t) => (vue.openBlock(), 
                    vue.createElementBlock("div", {
                        key: t,
                        class: "config-item"
                    }, [ vue.createElementVNode("div", zn, [ vue.createElementVNode("div", On, [ vue.createElementVNode("span", Fn, vue.toDisplayString(e.label), 1), e.desc ? (vue.openBlock(), 
                    vue.createBlock(u, {
                        key: 0,
                        effect: "dark",
                        content: e.desc,
                        placement: "top"
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(p, {
                            class: "info-icon"
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(vue.unref(he)) ])),
                            _: 1
                        }) ])),
                        _: 2
                    }, 1032, [ "content" ])) : vue.createCommentVNode("", !0) ]), vue.createElementVNode("div", Ln, [ "switch" === e.type ? (vue.openBlock(), 
                    vue.createBlock(d, {
                        key: 0,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        size: "large"
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "input" === e.type ? (vue.openBlock(), 
                    vue.createBlock(h, {
                        key: 1,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        style: {
                            "max-width": "300px"
                        }
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "number" === e.type ? (vue.openBlock(), 
                    vue.createBlock(m, {
                        key: 2,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        controls: !0
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "select" === e.type ? (vue.openBlock(), 
                    vue.createBlock(g, {
                        key: 3,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        placeholder: "\u8bf7\u9009\u62e9",
                        style: {
                            "min-width": "200px"
                        }
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, (e => (vue.openBlock(), vue.createBlock(f, {
                            key: e.value,
                            label: e.label,
                            value: e.value
                        }, null, 8, [ "label", "value" ])))), 128)) ])),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue" ])) : "hotkey" === e.type ? (vue.openBlock(), 
                    vue.createElementBlock("div", Pn, [ vue.createVNode(h, {
                        "model-value": e.value,
                        placeholder: o.value === e.name ? "\u8bf7\u6309\u4e0b\u5feb\u6377\u952e..." : "\u70b9\u51fb\u540e\u6309\u4e0b\u5feb\u6377\u952e\u7ec4\u5408",
                        readonly: "",
                        onFocus: t => startRecording(e.name),
                        onKeydown: t => handleHotkeyKeydown(t, e),
                        style: {
                            "max-width": "300px"
                        },
                        class: vue.normalizeClass({
                            recording: o.value === e.name
                        })
                    }, {
                        suffix: vue.withCtx((() => [ o.value === e.name ? (vue.openBlock(), vue.createBlock(c, {
                            key: 0,
                            type: "danger",
                            size: "small"
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(" \u5f55\u5236\u4e2d... ") ])),
                            _: 1
                        })) : (vue.openBlock(), vue.createBlock(c, {
                            key: 1,
                            type: "info",
                            size: "small"
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(" \u70b9\u51fb\u5f55\u5236 ") ])),
                            _: 1
                        })) ])),
                        _: 2
                    }, 1032, [ "model-value", "placeholder", "onFocus", "onKeydown", "class" ]) ])) : "checkbox" === e.type ? (vue.openBlock(), 
                    vue.createBlock(w, {
                        key: 5,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        class: "checkbox-group"
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, (e => (vue.openBlock(), vue.createBlock(y, {
                            key: e.value,
                            label: e.value,
                            name: e.value
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e.label), 1) ])),
                            _: 2
                        }, 1032, [ "label", "name" ])))), 128)) ])),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue" ])) : vue.createCommentVNode("", !0) ]) ]) ])))), 128)) ]) ])),
                    _: 1
                }), vue.createVNode(l, {
                    class: "config-card",
                    shadow: "hover"
                }, {
                    header: vue.withCtx((() => [ vue.createElementVNode("div", Mn, [ Vn, vue.createVNode(c, {
                        type: "success",
                        size: "small"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode("\u81ea\u52a8\u4fdd\u5b58") ])),
                        _: 1
                    }) ]) ])),
                    default: vue.withCtx((() => [ vue.createElementVNode("div", Dn, [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(r).ai, ((e, t) => (vue.openBlock(), 
                    vue.createElementBlock("div", {
                        key: t,
                        class: "config-item"
                    }, [ vue.createElementVNode("div", Nn, [ vue.createElementVNode("div", Bn, [ vue.createElementVNode("span", Gn, vue.toDisplayString(e.label), 1), e.desc ? (vue.openBlock(), 
                    vue.createBlock(u, {
                        key: 0,
                        effect: "dark",
                        content: e.desc,
                        placement: "top"
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(p, {
                            class: "info-icon"
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(vue.unref(he)) ])),
                            _: 1
                        }) ])),
                        _: 2
                    }, 1032, [ "content" ])) : vue.createCommentVNode("", !0) ]), vue.createElementVNode("div", Rn, [ "switch" === e.type ? (vue.openBlock(), 
                    vue.createBlock(d, {
                        key: 0,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        size: "large"
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "input" === e.type ? (vue.openBlock(), 
                    vue.createBlock(h, {
                        key: 1,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        style: {
                            "max-width": "300px"
                        }
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "number" === e.type ? (vue.openBlock(), 
                    vue.createBlock(m, {
                        key: 2,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        controls: !0
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "select" === e.type ? (vue.openBlock(), 
                    vue.createBlock(g, {
                        key: 3,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        placeholder: "\u8bf7\u9009\u62e9",
                        style: {
                            "min-width": "200px"
                        }
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, (e => (vue.openBlock(), vue.createBlock(f, {
                            key: e.value,
                            label: e.label,
                            value: e.value
                        }, null, 8, [ "label", "value" ])))), 128)) ])),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue" ])) : "hotkey" === e.type ? (vue.openBlock(), 
                    vue.createElementBlock("div", Jn, [ vue.createVNode(h, {
                        "model-value": e.value,
                        placeholder: o.value === e.name ? "\u8bf7\u6309\u4e0b\u5feb\u6377\u952e..." : "\u70b9\u51fb\u540e\u6309\u4e0b\u5feb\u6377\u952e\u7ec4\u5408",
                        readonly: "",
                        onFocus: t => startRecording(e.name),
                        onKeydown: t => handleHotkeyKeydown(t, e),
                        style: {
                            "max-width": "300px"
                        },
                        class: vue.normalizeClass({
                            recording: o.value === e.name
                        })
                    }, {
                        suffix: vue.withCtx((() => [ o.value === e.name ? (vue.openBlock(), vue.createBlock(c, {
                            key: 0,
                            type: "danger",
                            size: "small"
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(" \u5f55\u5236\u4e2d... ") ])),
                            _: 1
                        })) : (vue.openBlock(), vue.createBlock(c, {
                            key: 1,
                            type: "info",
                            size: "small"
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(" \u70b9\u51fb\u5f55\u5236 ") ])),
                            _: 1
                        })) ])),
                        _: 2
                    }, 1032, [ "model-value", "placeholder", "onFocus", "onKeydown", "class" ]) ])) : "checkbox" === e.type ? (vue.openBlock(), 
                    vue.createBlock(w, {
                        key: 5,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        class: "checkbox-group"
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, (e => (vue.openBlock(), vue.createBlock(y, {
                            key: e.value,
                            label: e.value,
                            name: e.value
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e.label), 1) ])),
                            _: 2
                        }, 1032, [ "label", "name" ])))), 128)) ])),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue" ])) : vue.createCommentVNode("", !0) ]) ]) ])))), 128)) ]) ])),
                    _: 1
                }), vue.createVNode(l, {
                    class: "config-card",
                    shadow: "hover"
                }, {
                    header: vue.withCtx((() => [ vue.createElementVNode("div", Qn, [ Wn, vue.createVNode(c, {
                        type: "success",
                        size: "small"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode("\u81ea\u52a8\u4fdd\u5b58") ])),
                        _: 1
                    }) ]) ])),
                    default: vue.withCtx((() => [ vue.createElementVNode("div", Kn, [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(r).hotkey, ((e, t) => (vue.openBlock(), 
                    vue.createElementBlock("div", {
                        key: t,
                        class: "config-item"
                    }, [ vue.createElementVNode("div", Yn, [ vue.createElementVNode("div", Xn, [ vue.createElementVNode("span", Zn, vue.toDisplayString(e.label), 1), e.desc ? (vue.openBlock(), 
                    vue.createBlock(u, {
                        key: 0,
                        effect: "dark",
                        content: e.desc,
                        placement: "top"
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(p, {
                            class: "info-icon"
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(vue.unref(he)) ])),
                            _: 1
                        }) ])),
                        _: 2
                    }, 1032, [ "content" ])) : vue.createCommentVNode("", !0) ]), vue.createElementVNode("div", ea, [ "switch" === e.type ? (vue.openBlock(), 
                    vue.createBlock(d, {
                        key: 0,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        size: "large"
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "input" === e.type ? (vue.openBlock(), 
                    vue.createBlock(h, {
                        key: 1,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        style: {
                            "max-width": "300px"
                        }
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "number" === e.type ? (vue.openBlock(), 
                    vue.createBlock(m, {
                        key: 2,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        controls: !0
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : "select" === e.type ? (vue.openBlock(), 
                    vue.createBlock(g, {
                        key: 3,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        placeholder: "\u8bf7\u9009\u62e9",
                        style: {
                            "min-width": "200px"
                        }
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, (e => (vue.openBlock(), vue.createBlock(f, {
                            key: e.value,
                            label: e.label,
                            value: e.value
                        }, null, 8, [ "label", "value" ])))), 128)) ])),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue" ])) : "hotkey" === e.type ? (vue.openBlock(), 
                    vue.createElementBlock("div", ta, [ vue.createVNode(h, {
                        "model-value": e.value,
                        placeholder: o.value === e.name ? "\u8bf7\u6309\u4e0b\u5feb\u6377\u952e..." : "\u70b9\u51fb\u540e\u6309\u4e0b\u5feb\u6377\u952e\u7ec4\u5408",
                        readonly: "",
                        onFocus: t => startRecording(e.name),
                        onKeydown: t => handleHotkeyKeydown(t, e),
                        style: {
                            "max-width": "300px"
                        },
                        class: vue.normalizeClass({
                            recording: o.value === e.name
                        })
                    }, {
                        suffix: vue.withCtx((() => [ o.value === e.name ? (vue.openBlock(), vue.createBlock(c, {
                            key: 0,
                            type: "danger",
                            size: "small"
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(" \u5f55\u5236\u4e2d... ") ])),
                            _: 1
                        })) : (vue.openBlock(), vue.createBlock(c, {
                            key: 1,
                            type: "info",
                            size: "small"
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(" \u70b9\u51fb\u5f55\u5236 ") ])),
                            _: 1
                        })) ])),
                        _: 2
                    }, 1032, [ "model-value", "placeholder", "onFocus", "onKeydown", "class" ]) ])) : "checkbox" === e.type ? (vue.openBlock(), 
                    vue.createBlock(w, {
                        key: 5,
                        modelValue: e.value,
                        "onUpdate:modelValue": t => e.value = t,
                        class: "checkbox-group"
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, (e => (vue.openBlock(), vue.createBlock(y, {
                            key: e.value,
                            label: e.value,
                            name: e.value
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e.label), 1) ])),
                            _: 2
                        }, 1032, [ "label", "name" ])))), 128)) ])),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue" ])) : vue.createCommentVNode("", !0) ]) ]) ])))), 128)) ]) ])),
                    _: 1
                }) ]);
            };
        }
    }), _export_sfc = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [a, s] of t) n[a] = s;
        return n;
    }, aa = _export_sfc(na, [ [ "__scopeId", "data-v-05def6d1" ] ]), sa = [ "innerHTML" ], oa = [ "innerHTML" ], ia = vue.createElementVNode("div", {
        class: "aah_bomHet50"
    }, [ vue.createElementVNode("span", {
        class: "dq"
    }, [ vue.createElementVNode("i"), vue.createTextVNode("\u5f53\u524d\u9898\u76ee") ]), vue.createElementVNode("span", {
        class: "yp"
    }, [ vue.createElementVNode("i"), vue.createTextVNode("\u5df2\u4f5c\u7b54") ]), vue.createElementVNode("span", {
        class: "wp"
    }, [ vue.createElementVNode("i"), vue.createTextVNode("\u65e0\u7b54\u6848") ]), vue.createElementVNode("span", {
        class: "zp"
    }, [ vue.createElementVNode("i"), vue.createTextVNode("\u672a\u4f5c\u7b54") ]) ], -1), ra = [ "innerHTML" ], la = [ "innerHTML" ], ca = {
        key: 0
    }, pa = {
        style: {
            width: "100%"
        }
    }, ua = [ "innerHTML" ], da = [ "value" ], ha = {
        key: 1,
        style: {
            color: "green"
        }
    }, ma = {
        key: 2,
        style: {
            color: "red"
        }
    }, fa = {
        key: 0
    }, ga = {
        key: 1
    }, ya = [ "innerHTML" ], wa = {
        key: 0
    }, va = [ "innerHTML" ], ba = vue.defineComponent({
        __name: "Ask",
        setup(e) {
            const t = ln(), o = nn(), getOptionIndex = e => String.fromCharCode(65 + e), formatTooltip = e => `\u7b54\u9898\u95f4\u9694\uff1a${e}ms`;
            vue.watch(o.app, (e => {
                o.setConfig(e);
            }));
            const watchAutoNext = () => {
                Cache.set("autoNext", t.autoNext);
            }, watchSkipFinish = () => {
                Cache.set("skipFinish", t.skipFinish);
            }, watchAutoAnswer = () => {
                Cache.set("autoAnswer", t.autoAnswer);
            }, watchRandomAnswer = () => {
                Cache.set("randomAnswer", t.randomAnswer);
            }, watchAskGpt = () => {
                msg("\u8bf7\u5148\u53bbAI\u641c\u9898\u9875\u9762\u6d4b\u8bd5AI\u662f\u5426\u53ef\u7528\uff0c\u518d\u542f\u7528\u7b54\u9898\uff0c\u7b54\u9898\u6b63\u786e\u7387\u65e0\u6cd5\u4fdd\u8bc1"), 
                Cache.set("askGpt", o.app.askGpt);
            }, watchDelay = () => {
                Cache.set("delay", t.delay);
            };
            return (e, i) => {
                const r = vue.resolveComponent("el-popover"), l = vue.resolveComponent("el-alert"), c = vue.resolveComponent("el-button"), p = vue.resolveComponent("el-col"), u = vue.resolveComponent("el-checkbox"), d = vue.resolveComponent("el-tooltip"), h = vue.resolveComponent("el-slider"), m = vue.resolveComponent("el-form-item"), f = vue.resolveComponent("el-form"), g = vue.resolveComponent("el-tag"), y = vue.resolveComponent("el-divider"), w = vue.resolveComponent("el-input"), v = vue.resolveComponent("el-row"), H = vue.resolveComponent("el-empty"), $ = vue.resolveDirective("loading");
                return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [ vue.createVNode(l, {
                    style: {
                        "margin-bottom": "10px"
                    },
                    type: "info",
                    closable: !1
                }, {
                    default: vue.withCtx((() => [ vue.createVNode(r, {
                        placement: "bottom",
                        title: "\u652f\u6301\u7684\u9898\u578b",
                        trigger: "hover"
                    }, {
                        default: vue.withCtx((() => [ vue.createElementVNode("div", {
                            innerHTML: vue.unref(t).typesMd
                        }, null, 8, sa) ])),
                        reference: vue.withCtx((() => [ vue.createElementVNode("div", {
                            innerHTML: vue.unref(t).tipsMd
                        }, null, 8, oa) ])),
                        _: 1
                    }) ])),
                    _: 1
                }), vue.createVNode(v, null, {
                    default: vue.withCtx((() => [ vue.unref(t).current ? (vue.openBlock(), vue.createBlock(p, {
                        key: 0,
                        span: 12
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(c, {
                            onClick: i[0] || (i[0] = e => vue.unref(t).start ? vue.unref(t).pause() : vue.unref(t).toggleStart()),
                            size: "small",
                            class: "aah_btn",
                            type: "primary",
                            plain: ""
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(vue.unref(t).start ? "\u6682\u505c\u7b54\u9898" : "\u5f00\u59cb\u7b54\u9898"), 1) ])),
                            _: 1
                        }) ])),
                        _: 1
                    })) : vue.createCommentVNode("", !0), vue.unref(t).current ? (vue.openBlock(), vue.createBlock(p, {
                        key: 1,
                        span: 12
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(c, {
                            onClick: i[1] || (i[1] = e => vue.unref(t).restart()),
                            size: "small",
                            class: "aah_btn",
                            type: "primary",
                            plain: ""
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode("\u91cd\u65b0\u7b54\u9898") ])),
                            _: 1
                        }) ])),
                        _: 1
                    })) : vue.createCommentVNode("", !0), vue.unref(t).current ? (vue.openBlock(), vue.createBlock(p, {
                        key: 2,
                        span: 24
                    }, {
                        default: vue.withCtx((() => [ ia ])),
                        _: 1
                    })) : vue.createCommentVNode("", !0), vue.unref(t).current ? (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, {
                        key: 3
                    }, vue.renderList(vue.unref(t).questionList, ((e, a) => (vue.openBlock(), vue.createBlock(p, {
                        span: 3
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(), vue.createBlock(c, {
                            class: vue.normalizeClass(a == vue.unref(t).questionInx ? "aah_active" : ""),
                            style: {
                                width: "30px",
                                "margin-bottom": "4px"
                            },
                            key: a,
                            onClick: e => vue.unref(t).toQuestion(a),
                            size: "small",
                            type: 1 == e.status ? "primary" : 2 == e.status ? "danger" : "",
                            plain: ""
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(a + 1), 1) ])),
                            _: 2
                        }, 1032, [ "class", "onClick", "type" ])) ])),
                        _: 2
                    }, 1024)))), 256)) : vue.createCommentVNode("", !0), vue.createVNode(p, {
                        span: 24
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(f, {
                            "label-width": "auto"
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(u, {
                                onChange: watchSkipFinish,
                                modelValue: vue.unref(t).skipFinish,
                                "onUpdate:modelValue": i[2] || (i[2] = e => vue.unref(t).skipFinish = e),
                                label: "\u8df3\u8fc7\u5df2\u4f5c\u7b54"
                            }, null, 8, [ "modelValue" ]), vue.createVNode(u, {
                                onChange: watchAutoAnswer,
                                modelValue: vue.unref(t).autoAnswer,
                                "onUpdate:modelValue": i[3] || (i[3] = e => vue.unref(t).autoAnswer = e),
                                label: "\u81ea\u52a8\u7b54\u9898"
                            }, null, 8, [ "modelValue" ]), vue.createVNode(u, {
                                onChange: watchAutoNext,
                                modelValue: vue.unref(t).autoNext,
                                "onUpdate:modelValue": i[4] || (i[4] = e => vue.unref(t).autoNext = e),
                                label: "\u81ea\u52a8\u8df3\u8f6c"
                            }, null, 8, [ "modelValue" ]), vue.createVNode(u, {
                                onChange: watchRandomAnswer,
                                modelValue: vue.unref(t).randomAnswer,
                                "onUpdate:modelValue": i[5] || (i[5] = e => vue.unref(t).randomAnswer = e),
                                label: "\u65e0\u7b54\u6848\u968f\u673a\u7b54\u9898"
                            }, null, 8, [ "modelValue" ]), vue.createVNode(d, {
                                class: "box-item",
                                effect: "dark",
                                content: "AI\u65e0\u6cd5\u4fdd\u8bc1\u6b63\u786e\u7387\uff0c\u4e14\u4e0d\u540c\u6a21\u578b\u6548\u679c\u4e5f\u5404\u4e0d\u76f8\u540c\uff0c\u8bf7\u81ea\u884c\u5224\u65ad\u662f\u5426\u542f\u7528",
                                placement: "top-start"
                            }, {
                                default: vue.withCtx((() => [ vue.createVNode(u, {
                                    onChange: watchAskGpt,
                                    modelValue: vue.unref(o).app.askGpt,
                                    "onUpdate:modelValue": i[6] || (i[6] = e => vue.unref(o).app.askGpt = e),
                                    label: "\u4f7f\u7528AI\u8f85\u52a9\u7b54\u9898"
                                }, null, 8, [ "modelValue" ]) ])),
                                _: 1
                            }), vue.unref(t).minDelay > 0 ? (vue.openBlock(), vue.createBlock(l, {
                                key: 0,
                                type: "warning",
                                closable: !1
                            }, {
                                title: vue.withCtx((() => [ vue.createElementVNode("span", null, "\u7531\u4e8e\u89c4\u5219\u9650\u5236\uff0c\u5f53\u524d\u5e73\u53f0\u7b54\u9898\u95f4\u9694\u6700\u5c0f\u4e3a" + vue.toDisplayString(vue.unref(t).minDelay) + "ms", 1) ])),
                                _: 1
                            })) : vue.createCommentVNode("", !0), vue.createVNode(m, {
                                label: "\u95f4\u9694"
                            }, {
                                default: vue.withCtx((() => [ vue.createVNode(h, {
                                    onChange: watchDelay,
                                    modelValue: vue.unref(t).delay,
                                    "onUpdate:modelValue": i[7] || (i[7] = e => vue.unref(t).delay = e),
                                    max: 5e3,
                                    min: vue.unref(t).minDelay,
                                    "format-tooltip": formatTooltip
                                }, null, 8, [ "modelValue", "min" ]) ])),
                                _: 1
                            }) ])),
                            _: 1
                        }) ])),
                        _: 1
                    }), vue.unref(t).formMap ? (vue.openBlock(), vue.createBlock(p, {
                        key: 4,
                        span: 24
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).formMap, ((e, t) => (vue.openBlock(), vue.createBlock(g, {
                            key: t,
                            style: {
                                "margin-right": "10px"
                            }
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(t) + ":" + vue.toDisplayString(e) + " \u6b21", 1) ])),
                            _: 2
                        }, 1024)))), 128)) ])),
                        _: 1
                    })) : vue.createCommentVNode("", !0), vue.unref(t).current ? (vue.openBlock(), vue.createBlock(y, {
                        key: 5
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(c, {
                            onClick: i[8] || (i[8] = e => vue.unref(t).reAnswer(vue.unref(t).questionInx)),
                            style: {
                                color: "red",
                                "font-size": "10px"
                            },
                            link: ""
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode("\u91cd\u7b54") ])),
                            _: 1
                        }), vue.createVNode(y, {
                            direction: "vertical"
                        }), vue.createVNode(c, {
                            onClick: i[9] || (i[9] = e => vue.unref(t).aiAnswer(vue.unref(t).questionInx)),
                            style: {
                                color: "red",
                                "font-size": "10px"
                            },
                            link: ""
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode("AI\u7b54\u9898") ])),
                            _: 1
                        }) ])),
                        _: 1
                    })) : vue.createCommentVNode("", !0), vue.unref(t).current ? (vue.openBlock(), vue.createBlock(p, {
                        key: 6,
                        span: 24
                    }, {
                        default: vue.withCtx((() => [ vue.createElementVNode("div", {
                            class: "aah_title",
                            innerHTML: "[" + vue.unref(typeConvert)(vue.unref(t).current.type ?? "", !1) + "]" + vue.unref(t).current.question
                        }, null, 8, ra), (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).current.options, ((e, s) => (vue.openBlock(), vue.createElementBlock("p", {
                            style: vue.normalizeStyle(vue.unref(t).current.form && vue.unref(t).current.form.match && vue.unref(t).current.form.match.includes(s) ? "color:green;" : ""),
                            class: "aah_options",
                            innerHTML: getOptionIndex(s) + ". " + e
                        }, null, 12, la)))), 256)), "24" == vue.unref(t).current.type ? (vue.openBlock(), vue.createElementBlock("p", ca, [ vue.createElementVNode("table", pa, [ (vue.openBlock(!0), 
                        vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).current.match, ((e, o) => (vue.openBlock(), vue.createElementBlock("tr", null, [ vue.createElementVNode("td", {
                            innerHTML: e
                        }, null, 8, ua), vue.createElementVNode("td", null, [ vue.createElementVNode("select", null, [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).current.selects[o], (e => (vue.openBlock(), 
                        vue.createElementBlock("option", {
                            value: e.value
                        }, vue.toDisplayString(e.text), 9, da)))), 256)) ]) ]) ])))), 256)) ]) ])) : vue.createCommentVNode("", !0), vue.unref(t).current.form ? (vue.openBlock(), 
                        vue.createElementBlock("p", ha, " \u91c7\u7528\u3010" + vue.toDisplayString(vue.unref(t).current.form.form) + "\u3011\u7684\u7b54\u6848 ", 1)) : vue.createCommentVNode("", !0), "8" == vue.unref(t).current.type || null == vue.unref(t).current.type || "" == vue.unref(t).current.type ? (vue.openBlock(), 
                        vue.createElementBlock("p", ma, " \u5f53\u524d\u9898\u578b\u6682\u4e0d\u652f\u6301\uff0c\u8bf7\u53cd\u9988\u7ed9\u4f5c\u8005\u5427 ")) : vue.createCommentVNode("", !0) ])),
                        _: 1
                    })) : vue.createCommentVNode("", !0), vue.unref(t).current ? vue.withDirectives((vue.openBlock(), vue.createBlock(p, {
                        key: 7,
                        span: 24,
                        "element-loading-text": vue.unref(t).loadingText
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).current.answer, (e => (vue.openBlock(), vue.createElementBlock("div", null, [ vue.createVNode(y, null, {
                            default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(`${e.form}(${e.duration}ms)`), 1) ])),
                            _: 2
                        }, 1024), "object" == typeof e.answer ? (vue.openBlock(), vue.createElementBlock("div", fa, [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.answer, (e => (vue.openBlock(), 
                        vue.createElementBlock("p", null, [ vue.createVNode(w, {
                            value: e,
                            readonly: "",
                            style: {
                                width: "100%"
                            }
                        }, null, 8, [ "value" ]) ])))), 256)) ])) : (vue.openBlock(), vue.createElementBlock("div", ga, [ vue.createElementVNode("div", {
                            innerHTML: e.answer ? e.answer : e.msg ?? "\u6682\u65e0\u7b54\u6848"
                        }, null, 8, ya) ])) ])))), 256)), vue.unref(t).current.aiMsg ? (vue.openBlock(), vue.createElementBlock("div", wa, [ vue.createVNode(y, null, {
                            default: vue.withCtx((() => [ vue.createTextVNode("AI\u56de\u7b54(\u4ec5\u4f9b\u53c2\u8003)") ])),
                            _: 1
                        }), vue.createElementVNode("div", {
                            innerHTML: vue.unref(t).currentAiMd
                        }, null, 8, va) ])) : vue.createCommentVNode("", !0) ])),
                        _: 1
                    }, 8, [ "element-loading-text" ])), [ [ $, vue.unref(t).loading ] ]) : vue.createCommentVNode("", !0) ])),
                    _: 1
                }), vue.unref(t).current ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(H, {
                    key: 0,
                    description: "\u6682\u65e0\u9898\u76ee\u6570\u636e"
                })) ], 64);
            };
        }
    }), xa = vue.createElementVNode("br", null, null, -1), _a = vue.createElementVNode("br", null, null, -1), ka = vue.createElementVNode("p", {
        style: {
            color: "red"
        }
    }, "\u4e14\u5e76\u975e\u6240\u6709\u7f51\u7ad9\u90fd\u652f\u6301\uff0c\u9700\u8981\u4f5c\u8005\u9002\u914d\uff0c\u82e5\u60a8\u7684\u5e73\u53f0\u4e0d\u652f\u6301\u53ef\u4ee5\u53cd\u9988\u7ed9\u4f5c\u8005", -1), qa = vue.createElementVNode("div", {
        class: "el-upload__text"
    }, [ vue.createTextVNode(" \u62d6\u62fd\u5907\u4efd\u6587\u4ef6\u6216 "), vue.createElementVNode("em", null, "\u70b9\u51fb\u4e0a\u4f20"), vue.createTextVNode("\u6062\u590d\u5907\u4efd ") ], -1), Ca = {
        style: {
            "margin-top": "20px",
            "margin-bottom": "20px"
        }
    }, Ta = [ "innerHTML" ], Aa = [ "innerHTML" ], Sa = [ "innerHTML" ], Ua = vue.defineComponent({
        __name: "Question",
        setup(e) {
            const t = vue.ref(0);
            let o;
            window.addEventListener("keydown", (e => {
                "`" === e.key && t.value++;
            }));
            try {
                Xt.script, o = Xt.script.updateURL.match(/scripts\/(\d+)/)[1];
            } catch (p) {
                o = "492563";
            }
            const r = `https://greasyfork.org/zh-CN/scripts/${o}`, l = ln(), c = Cache.match("ques1_"), clearCache = () => {
                Cache.matchRemove("ques1_"), msg("\u6e05\u9664\u6210\u529f", "success");
            }, exportHtml = async e => {
                const t = e.map(((e, t) => {
                    return `\n        <p><a href="${r}">\u7231\u95ee\u7b54\u52a9\u624b</a></p>\n        <p>${t + 1}\u3001[${typeConvert(e.type, !1)}]${e.question}</p>\n        <p>${n = e.options, 
                "object" != typeof n ? "" : n.map(((e, t) => String.fromCharCode(65 + t) + "." + e)).join("<br>")}</p>\n        <p style="color:green;">\u7b54\u6848\uff1a${answerFormat(e.answer)}</p>\n        \n        `;
                    var n;
                })).join("<br/>"), n = new Blob([ `<HtML> <head> <meta charset="utf-8"> <title>\u7231\u95ee\u7b54\u52a9\u624b\u7b54\u6848\u5bfc\u51fa</title> </head> <body> ${t} </body> </HtML>` ], {
                    type: "text/html"
                }), a = document.createElement("a");
                a.href = URL.createObjectURL(n), a.download = "\u7231\u95ee\u7b54\u52a9\u624b.html", 
                a.click();
            }, exportData = async () => {
                try {
                    const e = Cache.matchGet("ques1_") || [];
                    if (0 === e.length) return void msg("\u6682\u65e0\u9898\u76ee\u53ef\u5bfc\u51fa", "warning");
                    msg(`\u6b63\u5728\u6253\u5305${e.length}\u9898\uff0c\u8bf7\u7a0d\u540e...`, "info");
                    const t = await encrypt(JSON.stringify(e));
                    if (!t) return void msg("\u52a0\u5bc6\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\u6216\u8054\u7cfb\u5f00\u53d1\u8005", "error");
                    const n = new Blob([ t ], {
                        type: "application/text"
                    });
                    msg(`\u6253\u5305\u5b8c\u6210\uff0c\u5171\u8ba1${e.length}\u9898\uff0c\u51c6\u5907\u4e0b\u8f7d`, "success");
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(n);
                    const s = (new Date).toLocaleDateString().replace(/\//g, "-");
                    a.download = `\u7231\u95ee\u7b54\u52a9\u624b\u5907\u4efd-${s}.bak`, a.click(), setTimeout((() => URL.revokeObjectURL(a.href)), 100);
                } catch (e) {
                    msg(`\u5bfc\u51fa\u5931\u8d25\uff1a${e}`, "error");
                }
            }, exportDocx = async () => {
                exportHtml(l.saveQuestionData);
            }, exportDocx1 = async () => {
                const e = Cache.matchGet("ques1_") || [];
                exportHtml(e);
            }, changeT = e => typeConvert(e.type, !1), answerFormat = e => Array.isArray(e) ? e.join("<br/>") : "string" == typeof e ? e : "object" == typeof e ? JSON.stringify(e) : e, beforeUpload = e => {
                const t = new FileReader;
                return t.onload = async e => {
                    var t;
                    const n = null == (t = e.target) ? void 0 : t.result;
                    try {
                        const e = JSON.parse(await decrypt(n));
                        e.forEach((e => {
                            Answer.cacheAnswer(e);
                        })), msg(`\u9898\u5e93\u5bfc\u5165\u6210\u529f\uff0c\u5171\u8ba1${e.length}\u9898\n            \u8fc7\u591a\u9898\u76ee\u5bfc\u5165\u540e\u9875\u9762\u4f1a\u5361\u4e3b\u8bf7\u76f4\u63a5\u5173\u95ed\u9875\u9762\u91cd\u65b0\u6253\u5f00`, "success");
                    } catch (a) {
                        msg("\u6587\u4ef6\u683c\u5f0f\u9519\u8bef", "error");
                    }
                }, t.readAsText(e), !1;
            };
            return (e, o) => {
                const i = vue.resolveComponent("el-alert"), r = vue.resolveComponent("el-statistic"), p = vue.resolveComponent("el-col"), u = vue.resolveComponent("el-row"), d = vue.resolveComponent("el-upload"), h = vue.resolveComponent("el-button"), m = vue.resolveComponent("el-popconfirm"), f = vue.resolveComponent("el-table-column"), g = vue.resolveComponent("el-table"), y = vue.resolveComponent("el-watermark");
                return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [ vue.createVNode(i, {
                    type: "info",
                    closable: !1
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode(" \u672c\u811a\u672c\u652f\u6301\u5c06\u5b58\u5728\u7b54\u6848\u7684\u9898\u76ee\u6536\u5f55\u5230\u672c\u5730\uff0c\u4ee5\u4f9b\u540e\u7eed\u7b54\u9898\u68c0\u7d22\uff0c\u53ef\u51cf\u5c11\u63a5\u53e3\u8bf7\u6c42\u6b21\u6570\uff0c\u4ee5\u53ca\u63d0\u9ad8\u7b54\u6848\u6b63\u786e\u7387"), xa, vue.createTextVNode(" \u5728\u652f\u6301\u91cd\u590d\u7b54\u9898\u4e14\u7b54\u5b8c\u9898\u663e\u793a\u7b54\u6848\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u65e0\u9700\u4f7f\u7528\u63a5\u53e3\u641c\u7d22\u7b54\u6848"), _a, ka ])),
                    _: 1
                }), vue.createVNode(y, {
                    content: [ "\u7231\u95ee\u7b54\u52a9\u624b", "AiAskHelper" ]
                }, {
                    default: vue.withCtx((() => [ vue.createVNode(u, {
                        style: {
                            "margin-top": "20px",
                            "margin-bottom": "20px"
                        }
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(p, {
                            span: 24
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(r, {
                                title: "\u7f13\u5b58\u9898\u76ee\u6570\u91cf",
                                value: vue.unref(c).length
                            }, null, 8, [ "value" ]) ])),
                            _: 1
                        }) ])),
                        _: 1
                    }), vue.createVNode(d, {
                        drag: "",
                        accept: ".bak",
                        "show-file-list": !1,
                        "before-upload": beforeUpload,
                        class: "mb-4"
                    }, {
                        tip: vue.withCtx((() => [])),
                        default: vue.withCtx((() => [ qa ])),
                        _: 1
                    }), vue.createElementVNode("div", Ca, [ vue.createVNode(m, {
                        title: "\u786e\u5b9a\u8981\u6e05\u7a7a\u672c\u5730\u7f13\u5b58\u5417\uff1f",
                        "confirm-button-text": "\u786e\u5b9a",
                        "cancel-button-text": "\u53d6\u6d88",
                        onConfirm: clearCache,
                        "hide-after": 0
                    }, {
                        reference: vue.withCtx((() => [ vue.createVNode(h, {
                            type: "danger"
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode("\u6e05\u9664\u7f13\u5b58") ])),
                            _: 1
                        }) ])),
                        _: 1
                    }), vue.createVNode(h, {
                        type: "primary",
                        onClick: exportData
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode("\u5bfc\u51fa\u5907\u4efd") ])),
                        _: 1
                    }) ]), t.value > 10 ? (vue.openBlock(), vue.createBlock(h, {
                        key: 0,
                        type: "primary",
                        onClick: exportDocx
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode("\u5bfc\u51fa\u5f53\u524d") ])),
                        _: 1
                    })) : vue.createCommentVNode("", !0), t.value > 10 ? (vue.openBlock(), vue.createBlock(h, {
                        key: 1,
                        type: "primary",
                        onClick: exportDocx1
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode("\u5bfc\u51fa\u6240\u6709") ])),
                        _: 1
                    })) : vue.createCommentVNode("", !0), vue.createVNode(g, {
                        data: vue.unref(l).saveQuestionData,
                        style: {
                            width: "100%"
                        },
                        "empty-text": "\u5f53\u524d\u9875\u6682\u65e0\u6570\u636e"
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(f, {
                            prop: "type",
                            label: "\u9898\u578b",
                            formatter: changeT
                        }), vue.createVNode(f, {
                            prop: "question",
                            label: "\u9898\u76ee"
                        }, {
                            default: vue.withCtx((e => [ vue.createElementVNode("div", {
                                innerHTML: e.row.question
                            }, null, 8, Ta) ])),
                            _: 1
                        }), vue.createVNode(f, {
                            prop: "options",
                            label: "\u9009\u9879"
                        }, {
                            default: vue.withCtx((e => [ vue.createElementVNode("div", {
                                innerHTML: e.row.options.join("<br/>")
                            }, null, 8, Aa) ])),
                            _: 1
                        }), vue.createVNode(f, {
                            prop: "answer",
                            label: "\u7b54\u6848"
                        }, {
                            default: vue.withCtx((e => [ vue.createElementVNode("div", {
                                innerHTML: answerFormat(e.row.answer)
                            }, null, 8, Sa) ])),
                            _: 1
                        }) ])),
                        _: 1
                    }, 8, [ "data" ]) ])),
                    _: 1
                }) ], 64);
            };
        }
    }), Ha = {
        class: "flex justify-right mt-4 mr-10"
    }, Ea = vue.defineComponent({
        __name: "QuestionEdit",
        props: {
            ques: {},
            visible: {
                type: Boolean
            }
        },
        emits: [ "handleClose" ],
        setup(e, {emit: t}) {
            const o = e, r = vue.ref(o.visible);
            vue.watch((() => o.visible), (e => {
                r.value = e;
            }));
            const l = t, handleClose = e => {
                l("handleClose"), e();
            }, handleCancel = () => {
                handleClose((() => {
                    r.value = !1;
                }));
            }, handleSave = () => {
                Answer.cacheAnswer(o.ques), Cache.matchRemove(o.ques.key), msg("\u9898\u76ee\u4fee\u6539\u6210\u529f", "success"), 
                handleClose((() => {
                    r.value = !1;
                }));
            }, handleDelete = e => {
                o.ques.options.splice(e, 1), o.ques.answer.includes(o.ques.options[e]) && (o.ques.answer = o.ques.answer.filter((t => t !== o.ques.options[e])));
            }, handleAdd = () => {
                o.ques.options.push("");
            };
            return (e, t) => {
                var i;
                const l = vue.resolveComponent("el-option"), c = vue.resolveComponent("el-select"), p = vue.resolveComponent("el-form-item"), u = vue.resolveComponent("el-input"), d = vue.resolveComponent("el-button"), h = vue.resolveComponent("el-form"), m = vue.resolveComponent("el-dialog");
                return vue.openBlock(), vue.createBlock(m, {
                    modelValue: r.value,
                    "onUpdate:modelValue": t[2] || (t[2] = e => r.value = e),
                    title: `\u9898\u76ee\u7f16\u8f91:[${null == (i = e.ques) ? void 0 : i.type}]`,
                    width: "90%",
                    style: {
                        "max-width": "600px"
                    },
                    "before-close": handleClose
                }, {
                    default: vue.withCtx((() => [ vue.createVNode(h, null, {
                        default: vue.withCtx((() => [ vue.createVNode(p, {
                            label: "\u9898\u578b"
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(c, {
                                modelValue: e.ques.type,
                                "onUpdate:modelValue": t[0] || (t[0] = t => e.ques.type = t),
                                placeholder: "\u8bf7\u9009\u62e9"
                            }, {
                                default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(Kt), ((e, t) => (vue.openBlock(), vue.createBlock(l, {
                                    key: e,
                                    label: t,
                                    value: e
                                }, {
                                    default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(t), 1) ])),
                                    _: 2
                                }, 1032, [ "label", "value" ])))), 128)) ])),
                                _: 1
                            }, 8, [ "modelValue" ]) ])),
                            _: 1
                        }), vue.createVNode(p, {
                            label: "\u9898\u5e72"
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(u, {
                                modelValue: e.ques.question,
                                "onUpdate:modelValue": t[1] || (t[1] = t => e.ques.question = t),
                                type: "textarea",
                                autosize: {
                                    minRows: 3,
                                    maxRows: 8
                                }
                            }, null, 8, [ "modelValue" ]) ])),
                            _: 1
                        }), e.ques.options && Array.isArray(e.ques.options) && e.ques.options.length > 0 ? (vue.openBlock(), 
                        vue.createBlock(p, {
                            key: 0,
                            label: "\u9009\u9879"
                        }, {
                            default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.ques.options, ((t, s) => (vue.openBlock(), vue.createElementBlock("div", {
                                key: s,
                                class: "flex mb-4 w-[90%] items-center space-x-2"
                            }, [ vue.createVNode(d, {
                                type: "primary",
                                circle: "",
                                style: {
                                    "flex-shrink": "0"
                                },
                                plain: !e.ques.answer.includes(t),
                                onClick: e => (e => {
                                    o.ques.answer = o.ques.answer.includes(e) ? o.ques.answer.filter((t => t !== e)) : [ ...o.ques.answer, e ], 
                                    o.ques.answer.sort(((e, t) => o.ques.options.indexOf(e) - o.ques.options.indexOf(t)));
                                })(t)
                            }, {
                                default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(String.fromCharCode(65 + s)), 1) ])),
                                _: 2
                            }, 1032, [ "plain", "onClick" ]), vue.createVNode(u, {
                                modelValue: e.ques.options[s],
                                "onUpdate:modelValue": t => e.ques.options[s] = t,
                                class: "option-input flex-grow"
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), vue.createVNode(d, {
                                size: "small",
                                type: 0 == s ? "success" : "danger",
                                icon: vue.unref(0 != s ? pe : de),
                                circle: "",
                                plain: "",
                                onClick: e => 0 != s ? handleDelete(s) : handleAdd()
                            }, null, 8, [ "type", "icon", "onClick" ]) ])))), 128)) ])),
                            _: 1
                        })) : Array.isArray(e.ques.answer) && 0 == e.ques.options.length ? (vue.openBlock(), vue.createBlock(p, {
                            key: 1,
                            label: "\u7b54\u6848"
                        }, {
                            default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.ques.answer, ((t, s) => (vue.openBlock(), vue.createElementBlock("div", {
                                key: s,
                                class: "flex mb-4 w-[90%] items-center space-x-2"
                            }, [ vue.createVNode(u, {
                                modelValue: e.ques.answer[s],
                                "onUpdate:modelValue": t => e.ques.answer[s] = t,
                                class: "option-input flex-grow"
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), vue.createVNode(d, {
                                size: "small",
                                type: 0 == s ? "success" : "danger",
                                icon: vue.unref(0 != s ? pe : de),
                                circle: "",
                                plain: "",
                                onClick: e => 0 != s ? handleDelete(s) : handleAdd()
                            }, null, 8, [ "type", "icon", "onClick" ]) ])))), 128)) ])),
                            _: 1
                        })) : vue.createCommentVNode("", !0), vue.createElementVNode("div", Ha, [ vue.createVNode(d, {
                            type: "danger",
                            onClick: handleCancel
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode("\u53d6\u6d88") ])),
                            _: 1
                        }), vue.createVNode(d, {
                            type: "primary",
                            onClick: handleSave
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode("\u4fdd\u5b58") ])),
                            _: 1
                        }) ]) ])),
                        _: 1
                    }) ])),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }), $a = {
        class: "preview-container"
    }, Ia = {
        class: "preview-header"
    }, ja = {
        class: "header-content"
    }, za = vue.createElementVNode("div", {
        class: "header-title"
    }, [ vue.createElementVNode("h2", null, "\ud83d\udcda \u672c\u5730\u9898\u5e93"), vue.createElementVNode("p", null, "\u667a\u80fd\u641c\u7d22 \xb7 \u5feb\u901f\u9884\u89c8 \xb7 \u4fbf\u6377\u7ba1\u7406") ], -1), Oa = {
        class: "header-stats"
    }, Fa = {
        class: "stat-item"
    }, La = {
        class: "stat-number"
    }, Pa = vue.createElementVNode("span", {
        class: "stat-label"
    }, "\u9898\u76ee\u603b\u6570", -1), Ma = vue.createElementVNode("div", {
        class: "stat-divider"
    }, null, -1), Va = {
        class: "stat-item"
    }, Da = {
        class: "stat-number"
    }, Na = vue.createElementVNode("span", {
        class: "stat-label"
    }, "\u5f53\u524d\u9875\u7801", -1), Ba = vue.createElementVNode("span", {
        style: {
            color: "#f59e0b",
            "margin-left": "8px"
        }
    }, "\ud83d\udca1 \u70b9\u51fb\u9898\u76ee\u5361\u7247\u53ef\u67e5\u770b\u8be6\u60c5", -1), Ga = {
        class: "search-section"
    }, Ra = {
        key: 0,
        class: "search-result-info"
    }, Ja = {
        key: 0,
        class: "empty-state"
    }, Qa = vue.createElementVNode("div", {
        class: "empty-icon"
    }, "\ud83d\udcdd", -1), Wa = {
        key: 1,
        class: "questions-list"
    }, Ka = {
        class: "question-item-card"
    }, Ya = {
        class: "question-badge"
    }, Xa = {
        class: "badge-number"
    }, Za = {
        class: "question-actions-top"
    }, es = {
        class: "question-main"
    }, ts = {
        class: "question-header-section"
    }, ns = [ "innerHTML" ], as = {
        key: 0,
        class: "options-section"
    }, ss = {
        key: 0,
        class: "complex-question-tip"
    }, os = {
        key: 1,
        class: "options-list"
    }, is = {
        class: "option-letter"
    }, rs = [ "innerHTML" ], ls = {
        key: 0,
        class: "correct-badge"
    }, cs = {
        class: "answer-section"
    }, ps = {
        class: "answer-header"
    }, us = vue.createElementVNode("svg", {
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg"
    }, [ vue.createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
    }) ], -1), ds = vue.createElementVNode("span", null, "\u6b63\u786e\u7b54\u6848", -1), hs = {
        class: "answer-content-wrapper"
    }, ms = {
        key: 0,
        class: "answer-tags"
    }, fs = {
        key: 1,
        class: "answer-tags"
    }, gs = [ "innerHTML" ], ys = {
        key: 3,
        class: "no-answer"
    }, ws = vue.createElementVNode("svg", {
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg"
    }, [ vue.createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 416a48 48 0 1 0 0 96h448a48 48 0 1 0 0-96H288z"
    }) ], -1), vs = vue.createElementVNode("span", null, "\u6682\u65e0\u7b54\u6848", -1), bs = {
        key: 0,
        class: "pagination-wrapper"
    }, xs = vue.defineComponent({
        __name: "Preview",
        setup(e) {
            const t = vue.ref(Cache.matchGet("ques1_") || []), o = vue.ref(!1), r = vue.ref(""), l = vue.ref(1), c = vue.ref(10), p = function(e) {
                const t = new Blob([ `(${e.toString()})()` ], {
                    type: "application/javascript"
                }), n = URL.createObjectURL(t);
                return new Worker(n);
            }((() => {
                self.importScripts("https://cdn.bootcdn.net/ajax/libs/fuse.js/7.1.0/fuse.min.js"), 
                self.onmessage = function(e) {
                    const {data: t, options: n} = e.data, a = new Fuse(t, n).search(e.data.keyword).map((e => e.item));
                    a.forEach((t => {
                        t.question1 = t.question, e.data.keyword.split("").forEach((e => {
                            /[\u4e00-\u9fa5a-zA-Z0-9]/.test(e) && (t.question1 = t.question1.replace(new RegExp(e, "g"), `<span style="color:red">${e}</span>`));
                        }));
                    })), self.postMessage(a);
                };
            })), u = vue.computed((() => {
                const e = (l.value - 1) * c.value, n = e + c.value;
                return t.value.slice(e, n);
            })), cl_img_format = e => {
                if (!e.trim()) return e;
                return e.replace(/<img\b(?!.*?\breferrerPolicy\b)[^>]*>/gi, (e => e.replace(/\/?>$/, ' referrerPolicy="no-referrer">')));
            }, d = vue.computed((() => t.value.length)), getOptionIndex = e => String.fromCharCode(65 + e), handlePageChange = e => {
                l.value = e;
            }, search = () => {
                const e = {
                    keys: [ "question" ],
                    threshold: .3
                }, n = r.value.trim();
                o.value = !0, n ? (p.onmessage = e => {
                    const n = e.data;
                    t.value = n, o.value = !1, l.value = 1;
                }, p.postMessage({
                    data: Cache.matchGet("ques1_"),
                    options: e,
                    keyword: n
                })) : (t.value = Cache.matchGet("ques1_") || [], o.value = !1, l.value = 1);
            }, h = vue.ref(null), m = vue.ref(!1), handleClose = () => {
                m.value = !1;
            };
            return (e, i) => {
                const p = vue.resolveComponent("el-alert"), f = vue.resolveComponent("el-icon"), g = vue.resolveComponent("el-input"), y = vue.resolveComponent("el-tag"), w = vue.resolveComponent("el-empty"), v = vue.resolveComponent("el-button"), H = vue.resolveComponent("el-watermark"), $ = vue.resolveComponent("el-pagination"), I = vue.resolveDirective("loading");
                return vue.openBlock(), vue.createElementBlock("div", $a, [ vue.createVNode(Ea, {
                    visible: m.value,
                    ques: h.value,
                    onHandleClose: handleClose
                }, null, 8, [ "visible", "ques" ]), vue.createElementVNode("div", Ia, [ vue.createElementVNode("div", ja, [ za, vue.createElementVNode("div", Oa, [ vue.createElementVNode("div", Fa, [ vue.createElementVNode("span", La, vue.toDisplayString(d.value), 1), Pa ]), Ma, vue.createElementVNode("div", Va, [ vue.createElementVNode("span", Da, vue.toDisplayString(l.value), 1), Na ]) ]) ]) ]), vue.createVNode(p, {
                    class: "preview-alert",
                    type: "info",
                    closable: !1,
                    "show-icon": ""
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode(" \u672c\u5730\u9898\u5e93\u652f\u6301\u9884\u89c8\u3001\u641c\u7d22\u3001\u7f16\u8f91\u7b49\u529f\u80fd\u3002\u641c\u7d22\u652f\u6301\u9898\u76ee\u5173\u952e\u8bcd\u6a21\u7cca\u5339\u914d "), Ba ])),
                    _: 1
                }), vue.createElementVNode("div", Ga, [ vue.createVNode(g, {
                    modelValue: r.value,
                    "onUpdate:modelValue": i[0] || (i[0] = e => r.value = e),
                    size: "large",
                    placeholder: "\ud83d\udd0d \u8f93\u5165\u5173\u952e\u8bcd\uff0c\u667a\u80fd\u641c\u7d22\u9898\u76ee...",
                    clearable: "",
                    onInput: search
                }, {
                    prefix: vue.withCtx((() => [ vue.createVNode(f, null, {
                        default: vue.withCtx((() => [ vue.createVNode(vue.unref(me)) ])),
                        _: 1
                    }) ])),
                    _: 1
                }, 8, [ "modelValue" ]), r.value ? (vue.openBlock(), vue.createElementBlock("div", Ra, [ vue.createVNode(y, {
                    type: "primary",
                    effect: "dark",
                    size: "large"
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode(" \u627e\u5230 " + vue.toDisplayString(t.value.length) + " \u9053\u76f8\u5173\u9898\u76ee ", 1) ])),
                    _: 1
                }) ])) : vue.createCommentVNode("", !0) ]), vue.withDirectives((vue.openBlock(), vue.createBlock(H, {
                    content: [ "\u7231\u95ee\u7b54\u52a9\u624b", "AiAskHelper" ]
                }, {
                    default: vue.withCtx((() => [ 0 === u.value.length ? (vue.openBlock(), vue.createElementBlock("div", Ja, [ vue.createVNode(w, {
                        description: "\u6682\u65e0\u9898\u76ee\u6570\u636e"
                    }, {
                        image: vue.withCtx((() => [ Qa ])),
                        _: 1
                    }) ])) : (vue.openBlock(), vue.createElementBlock("div", Wa, [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(u.value, ((e, o) => (vue.openBlock(), vue.createElementBlock("div", {
                        key: o,
                        class: "question-item-wrapper"
                    }, [ vue.createElementVNode("div", Ka, [ vue.createElementVNode("div", Ya, [ vue.createElementVNode("span", Xa, vue.toDisplayString((l.value - 1) * c.value + o + 1), 1) ]), vue.createElementVNode("div", Za, [ vue.createVNode(v, {
                        type: "primary",
                        size: "small",
                        circle: "",
                        onClick: t => (e => {
                            h.value = e, m.value = !0;
                        })(e)
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(f, null, {
                            default: vue.withCtx((() => [ vue.createVNode(vue.unref(oe)) ])),
                            _: 1
                        }) ])),
                        _: 2
                    }, 1032, [ "onClick" ]), vue.createVNode(v, {
                        type: "danger",
                        size: "small",
                        circle: "",
                        onClick: n => (e => {
                            t.value = t.value.filter((t => t.key !== e.key)), Cache.matchRemove(e.key);
                        })(e)
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(f, null, {
                            default: vue.withCtx((() => [ vue.createVNode(vue.unref(te)) ])),
                            _: 1
                        }) ])),
                        _: 2
                    }, 1032, [ "onClick" ]) ]), vue.createElementVNode("div", es, [ vue.createElementVNode("div", ts, [ vue.createVNode(y, {
                        class: "question-type-tag",
                        type: "primary"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(vue.unref(typeConvert)(e.type ?? "", !1)), 1) ])),
                        _: 2
                    }, 1024) ]), vue.createElementVNode("div", {
                        class: "question-text",
                        innerHTML: cl_img_format(e.question1 || e.question)
                    }, null, 8, ns), e.options && e.options.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", as, [ "object" == typeof e.options[0] ? (vue.openBlock(), 
                    vue.createElementBlock("div", ss, [ vue.createVNode(p, {
                        type: "warning",
                        closable: !1
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" \u8be5\u9898\u578b\u6682\u4e0d\u652f\u6301\u5b8c\u6574\u663e\u793a ") ])),
                        _: 1
                    }) ])) : (vue.openBlock(), vue.createElementBlock("div", os, [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, ((t, o) => (vue.openBlock(), vue.createElementBlock("div", {
                        key: o,
                        class: vue.normalizeClass([ "option-item", {
                            "option-correct": e.answer && e.answer.includes(t)
                        } ])
                    }, [ vue.createElementVNode("div", is, vue.toDisplayString(getOptionIndex(o)), 1), vue.createElementVNode("div", {
                        class: "option-text",
                        innerHTML: cl_img_format(t)
                    }, null, 8, rs), e.answer && e.answer.includes(t) ? (vue.openBlock(), vue.createElementBlock("div", ls, " \u2713 ")) : vue.createCommentVNode("", !0) ], 2)))), 128)) ])) ])) : vue.createCommentVNode("", !0), vue.createElementVNode("div", cs, [ vue.createElementVNode("div", ps, [ vue.createVNode(f, null, {
                        default: vue.withCtx((() => [ us ])),
                        _: 1
                    }), ds ]), vue.createElementVNode("div", hs, [ Array.isArray(e.answer) && 0 === e.options.length ? (vue.openBlock(), 
                    vue.createElementBlock("div", ms, [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.answer, ((e, t) => (vue.openBlock(), vue.createBlock(y, {
                        key: t,
                        type: "success",
                        effect: "dark",
                        size: "large"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e), 1) ])),
                        _: 2
                    }, 1024)))), 128)) ])) : Array.isArray(e.answer) ? (vue.openBlock(), vue.createElementBlock("div", fs, [ (vue.openBlock(!0), 
                    vue.createElementBlock(vue.Fragment, null, vue.renderList(e.answer, ((e, t) => (vue.openBlock(), vue.createBlock(y, {
                        key: t,
                        type: "success",
                        effect: "dark",
                        size: "large"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e), 1) ])),
                        _: 2
                    }, 1024)))), 128)) ])) : e.answer ? (vue.openBlock(), vue.createElementBlock("div", {
                        key: 2,
                        class: "answer-text",
                        innerHTML: cl_img_format(e.answer)
                    }, null, 8, gs)) : (vue.openBlock(), vue.createElementBlock("div", ys, [ vue.createVNode(f, null, {
                        default: vue.withCtx((() => [ ws ])),
                        _: 1
                    }), vs ])) ]) ]) ]) ]) ])))), 128)) ])) ])),
                    _: 1
                })), [ [ I, o.value ] ]), d.value > 0 ? (vue.openBlock(), vue.createElementBlock("div", bs, [ vue.createVNode($, {
                    size: "default",
                    background: "",
                    layout: "total, prev, pager, next, jumper",
                    total: d.value,
                    "page-size": c.value,
                    "current-page": l.value,
                    "onUpdate:currentPage": i[1] || (i[1] = e => l.value = e),
                    onCurrentChange: handlePageChange
                }, null, 8, [ "total", "page-size", "current-page" ]) ])) : vue.createCommentVNode("", !0) ]);
            };
        }
    }), _s = {
        class: "paper-library-container"
    }, ks = {
        key: 0,
        class: "paper-list-view"
    }, qs = vue.createElementVNode("div", null, [ vue.createTextVNode(" \u8bd5\u5377\u5e93\u5c55\u793a\u6240\u6709\u5df2\u7f13\u5b58\u7684\u8bfe\u7a0b\u8bd5\u5377\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u6bcf\u4e2a\u8bfe\u7a0b\u7684\u7ae0\u8282\u548c\u9898\u76ee\u8be6\u60c5 "), vue.createElementVNode("p", {
        style: {
            color: "#3b82f6",
            "margin-top": "8px",
            "margin-bottom": "0"
        }
    }, " \ud83d\udca1 \u70b9\u51fb\u8bfe\u7a0b\u5361\u7247\u53ef\u67e5\u770b\u8be6\u7ec6\u7684\u7ae0\u8282\u548c\u9898\u76ee\u4fe1\u606f ") ], -1), Cs = {
        class: "search-header"
    }, Ts = {
        class: "search-stats"
    }, As = {
        class: "papers-grid"
    }, Ss = {
        class: "paper-header"
    }, Us = {
        class: "paper-info"
    }, Hs = {
        class: "paper-title"
    }, Es = {
        class: "paper-meta"
    }, $s = {
        class: "paper-footer"
    }, Is = {
        class: "paper-actions"
    }, js = {
        key: 1,
        class: "chapter-list-view"
    }, zs = {
        class: "header-content"
    }, Os = {
        class: "header-actions"
    }, Fs = {
        class: "course-info"
    }, Ls = {
        class: "course-stats"
    }, Ps = {
        class: "chapters-list"
    }, Ms = {
        class: "chapter-header"
    }, Vs = {
        class: "chapter-number"
    }, Ds = {
        class: "chapter-info"
    }, Ns = {
        class: "chapter-title"
    }, Bs = {
        class: "chapter-meta"
    }, Gs = {
        class: "chapter-actions"
    }, Rs = {
        key: 2,
        class: "question-list-view"
    }, Js = {
        class: "header-content"
    }, Qs = {
        class: "chapter-info-header"
    }, Ws = {
        class: "questions-container"
    }, Ks = {
        class: "question-number"
    }, Ys = [ "innerHTML" ], Xs = {
        key: 0,
        class: "question-options"
    }, Zs = {
        key: 0
    }, eo = [ vue.createElementVNode("p", {
        style: {
            color: "#999"
        }
    }, "\u590d\u6742\u9898\u578b\uff0c\u6682\u65f6\u65e0\u6cd5\u5b8c\u6574\u663e\u793a", -1) ], to = {
        key: 1
    }, no = {
        class: "option-label"
    }, ao = [ "innerHTML" ], so = {
        class: "question-answer"
    }, oo = vue.createElementVNode("span", {
        style: {
            color: "#67c23a",
            "font-weight": "bold"
        }
    }, "\u2713 \u7b54\u6848", -1), io = {
        key: 0
    }, ro = {
        key: 1
    }, lo = [ "innerHTML" ], co = {
        key: 3,
        style: {
            color: "#999"
        }
    }, po = vue.defineComponent({
        __name: "PaperLibrary",
        setup(e) {
            const t = vue.ref([]), o = vue.ref(!1), r = vue.ref(""), l = vue.ref(null), c = vue.ref(null), loadPapers = () => {
                o.value = !0;
                try {
                    const e = Cache.matchGet("paper__");
                    t.value = e.map((e => {
                        var t;
                        let n = 0;
                        return e.chapter && Array.isArray(e.chapter) && e.chapter.forEach((e => {
                            e.question && Array.isArray(e.question) && (n += e.question.length);
                        })), {
                            ...e,
                            totalQuestions: n,
                            chapterCount: (null == (t = e.chapter) ? void 0 : t.length) || 0
                        };
                    }));
                } finally {
                    o.value = !1;
                }
            };
            loadPapers();
            const p = vue.computed((() => {
                if (!r.value.trim()) return t.value;
                const e = r.value.toLowerCase();
                return t.value.filter((t => {
                    var n, a;
                    return (null == (n = t.name) ? void 0 : n.toLowerCase().includes(e)) || (null == (a = t.courseName) ? void 0 : a.toLowerCase().includes(e));
                }));
            })), backToPaperList = () => {
                l.value = null, c.value = null;
            }, backToChapterList = () => {
                c.value = null;
            }, cl_img_format = e => {
                if (!e || !e.trim()) return e;
                return e.replace(/<img\b(?!.*?\breferrerPolicy\b)[^>]*>/gi, (e => e.replace(/\/?>$/, ' referrerPolicy="no-referrer">')));
            }, exportPaperToHtml = e => {
                try {
                    const t = generatePaperHtml(e);
                    downloadHtml(t, `${e.name || e.courseName || "\u8bfe\u7a0b\u8bd5\u5377"}.html`), 
                    N.ElMessage.success("\u5bfc\u51fa\u6210\u529f\uff01");
                } catch (t) {
                    N.ElMessage.error("\u5bfc\u51fa\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5"), console.error("\u5bfc\u51fa\u9519\u8bef:", t);
                }
            }, generatePaperHtml = e => {
                const t = e.name || e.courseName || "\u672a\u547d\u540d\u8bfe\u7a0b";
                var n;
                !(n = e.createTime) || new Date(n).toLocaleString("zh-CN");
                let a = "";
                return e.chapter && e.chapter.length > 0 && e.chapter.forEach(((e, t) => {
                    a += `\n        <div class="chapter">\n          <h2 class="chapter-title">\n            <span class="chapter-number">${t + 1}</span>\n            ${e.name || e.title || "\u672a\u547d\u540d\u7ae0\u8282"}\n          </h2>\n          ${generateQuestionsHtml(e.question || [])}\n        </div>\n      `;
                })), `\n<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>${t} - \u8bd5\u5377</title>\n  <style>\n    ${getHtmlStyles()}\n  </style>\n</head>\n<body>\n  <div class="container">\n    <header class="header">\n      <h1 class="course-title">${t}</h1>\n      <div class="meta-info">\n        <span class="badge">\u5171 ${e.chapterCount || 0} \u4e2a\u7ae0\u8282</span>\n        <span class="badge">\u5171 ${e.totalQuestions || 0} \u9053\u9898\u76ee</span>\n      </div>\n      <div class="watermark">\u5bfc\u51fa\u81ea\u7231\u95ee\u7b54\u52a9\u624b</div>\n    </header>\n    \n    <main class="content">\n      ${a || '<p class="empty">\u6682\u65e0\u7ae0\u8282\u6570\u636e</p>'}\n    </main>\n    \n    <footer class="footer">\n      <p>\u672c\u6587\u6863\u7531\u7231\u95ee\u7b54\u52a9\u624b\u751f\u6210 | \u5bfc\u51fa\u65f6\u95f4: ${(new Date).toLocaleString("zh-CN")}</p>\n    </footer>\n  </div>\n</body>\n</html>\n  `;
            }, generateChapterHtml = (e, t) => {
                var n;
                const a = e.name || e.courseName || "\u672a\u547d\u540d\u8bfe\u7a0b", s = t.name || t.title || "\u672a\u547d\u540d\u7ae0\u8282";
                return `\n<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>${a} - ${s}</title>\n  <style>\n    ${getHtmlStyles()}\n  </style>\n</head>\n<body>\n  <div class="container">\n    <header class="header">\n      <h1 class="course-title">${a}</h1>\n      <h2 class="chapter-subtitle">${s}</h2>\n      <div class="meta-info">\n        <span class="badge">\u5171 ${(null == (n = t.question) ? void 0 : n.length) || 0} \u9053\u9898\u76ee</span>\n      </div>\n      <div class="watermark">\u5bfc\u51fa\u81ea\u7231\u95ee\u7b54\u52a9\u624b</div>\n    </header>\n    \n    <main class="content">\n      ${generateQuestionsHtml(t.question || [])}\n    </main>\n    \n    <footer class="footer">\n      <p>\u672c\u6587\u6863\u7531\u7231\u95ee\u7b54\u52a9\u624b\u751f\u6210 | \u5bfc\u51fa\u65f6\u95f4: ${(new Date).toLocaleString("zh-CN")}</p>\n    </footer>\n  </div>\n</body>\n</html>\n  `;
            }, generateQuestionsHtml = e => e && 0 !== e.length ? e.map(((e, t) => {
                const n = typeConvert(e.type ?? "", !1);
                let a = "";
                e.options && e.options.length > 0 && ("object" == typeof e.options[0] ? a = '<p class="note">\u590d\u6742\u9898\u578b\uff0c\u90e8\u5206\u5185\u5bb9\u53ef\u80fd\u65e0\u6cd5\u5b8c\u6574\u663e\u793a</p>' : (a = '<div class="options">', 
                e.options.forEach(((t, n) => {
                    const s = e.answer && e.answer.includes(t), o = String.fromCharCode(65 + n);
                    a += `\n            <div class="option ${s ? "is-answer" : ""}">\n              <span class="option-label">${o}.</span>\n              <span class="option-content">${t}</span>\n            </div>\n          `;
                })), a += "</div>"));
                let s = '<div class="answer-section"><h4>\u7b54\u6848</h4>';
                return Array.isArray(e.answer) ? (e.options && e.options.length, s += e.answer.map((e => `<span class="answer-tag">${e}</span>`)).join("")) : e.answer ? s += `<div class="answer-content">${e.answer}</div>` : s += '<span class="no-answer">\u6682\u65e0\u7b54\u6848</span>', 
                s += "</div>", `\n      <div class="question">\n        <div class="question-header">\n          <span class="question-number">\u7b2c ${t + 1} \u9898</span>\n          <span class="question-type">[${n}]</span>\n        </div>\n        <div class="question-content">${e.question}</div>\n        ${a}\n        ${s}\n      </div>\n    `;
            })).join("") : '<p class="empty">\u6682\u65e0\u9898\u76ee\u6570\u636e</p>', getHtmlStyles = () => "\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', \n                 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 1.6;\n    color: #333;\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    padding: 20px;\n  }\n\n  .container {\n    max-width: 1200px;\n    margin: 0 auto;\n    background: white;\n    border-radius: 12px;\n    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n    overflow: hidden;\n  }\n\n  .header {\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    color: white;\n    padding: 40px;\n    position: relative;\n  }\n\n  .course-title {\n    font-size: 32px;\n    margin-bottom: 10px;\n    font-weight: 600;\n  }\n\n  .chapter-subtitle {\n    font-size: 24px;\n    margin-top: 10px;\n    opacity: 0.95;\n  }\n\n  .meta-info {\n    display: flex;\n    gap: 12px;\n    flex-wrap: wrap;\n    margin-top: 16px;\n  }\n\n  .badge {\n    display: inline-block;\n    padding: 6px 16px;\n    background: rgba(255, 255, 255, 0.2);\n    border-radius: 20px;\n    font-size: 14px;\n    backdrop-filter: blur(10px);\n  }\n\n  .date {\n    padding: 6px 16px;\n    font-size: 14px;\n    opacity: 0.9;\n  }\n\n  .watermark {\n    position: absolute;\n    top: 20px;\n    right: 40px;\n    opacity: 0.3;\n    font-size: 14px;\n  }\n\n  .content {\n    padding: 40px;\n  }\n\n  .chapter {\n    margin-bottom: 40px;\n    page-break-inside: avoid;\n  }\n\n  .chapter-title {\n    font-size: 24px;\n    color: #667eea;\n    margin-bottom: 24px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #667eea;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n  }\n\n  .chapter-number {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    color: white;\n    border-radius: 50%;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  .question {\n    margin-bottom: 30px;\n    padding: 24px;\n    background: #f8f9fa;\n    border-radius: 12px;\n    border-left: 4px solid #667eea;\n    page-break-inside: avoid;\n  }\n\n  .question-header {\n    display: flex;\n    gap: 12px;\n    margin-bottom: 12px;\n    align-items: center;\n  }\n\n  .question-number {\n    display: inline-block;\n    padding: 4px 12px;\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    color: white;\n    border-radius: 12px;\n    font-size: 14px;\n    font-weight: 600;\n  }\n\n  .question-type {\n    color: #667eea;\n    font-weight: 600;\n    font-size: 14px;\n  }\n\n  .question-content {\n    font-size: 16px;\n    margin-bottom: 16px;\n    line-height: 1.8;\n    color: #2c3e50;\n    font-weight: 500;\n  }\n\n  .options {\n    margin: 16px 0;\n  }\n\n  .option {\n    display: flex;\n    padding: 12px 16px;\n    margin-bottom: 8px;\n    background: white;\n    border-radius: 8px;\n    border: 1px solid #e0e0e0;\n    transition: all 0.2s;\n  }\n\n  .option:hover {\n    border-color: #667eea;\n    transform: translateX(4px);\n  }\n\n  .option.is-answer {\n    background: #f0f9ff;\n    border: 2px solid #67c23a;\n    color: #67c23a;\n    font-weight: 500;\n  }\n\n  .option-label {\n    font-weight: 600;\n    margin-right: 12px;\n    min-width: 24px;\n  }\n\n  .option-content {\n    flex: 1;\n  }\n\n  .answer-section {\n    margin-top: 16px;\n    padding: 16px;\n    background: white;\n    border-radius: 8px;\n    border: 2px solid #67c23a;\n  }\n\n  .answer-section h4 {\n    color: #67c23a;\n    margin-bottom: 12px;\n    font-size: 16px;\n  }\n\n  .answer-tag {\n    display: inline-block;\n    padding: 6px 16px;\n    background: #67c23a;\n    color: white;\n    border-radius: 16px;\n    margin-right: 8px;\n    margin-bottom: 8px;\n    font-size: 14px;\n  }\n\n  .answer-content {\n    padding: 12px;\n    background: #f0f9ff;\n    border-radius: 8px;\n    color: #409eff;\n    line-height: 1.6;\n  }\n\n  .no-answer {\n    color: #999;\n    font-style: italic;\n  }\n\n  .note {\n    color: #999;\n    font-size: 14px;\n    font-style: italic;\n  }\n\n  .empty {\n    text-align: center;\n    color: #999;\n    padding: 40px;\n    font-size: 16px;\n  }\n\n  .footer {\n    background: #f8f9fa;\n    padding: 24px;\n    text-align: center;\n    color: #666;\n    border-top: 1px solid #e0e0e0;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n    border-radius: 8px;\n    margin: 8px 0;\n  }\n\n  @media print {\n    body {\n      background: white;\n      padding: 0;\n    }\n    \n    .container {\n      box-shadow: none;\n    }\n    \n    .question, .chapter {\n      page-break-inside: avoid;\n    }\n  }\n\n  @media (max-width: 768px) {\n    .container {\n      border-radius: 0;\n    }\n    \n    .header, .content {\n      padding: 20px;\n    }\n    \n    .course-title {\n      font-size: 24px;\n    }\n  }\n", downloadHtml = (e, t) => {
                const n = new Blob([ e ], {
                    type: "text/html;charset=utf-8"
                }), a = URL.createObjectURL(n), s = document.createElement("a");
                s.href = a, s.download = t, document.body.appendChild(s), s.click(), document.body.removeChild(s), 
                URL.revokeObjectURL(a);
            }, deletePaper = async (e, t) => {
                t && t.stopPropagation();
                try {
                    await N.ElMessageBox.confirm(`\u786e\u5b9a\u8981\u5220\u9664\u8bfe\u7a0b"${e.name || e.courseName || "\u672a\u547d\u540d\u8bfe\u7a0b"}"\u5417\uff1f\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d\uff01`, "\u5220\u9664\u786e\u8ba4", {
                        confirmButtonText: "\u786e\u5b9a\u5220\u9664",
                        cancelButtonText: "\u53d6\u6d88",
                        type: "warning",
                        confirmButtonClass: "el-button--danger"
                    }), Cache.remove(e.key), l.value && l.value.key === e.key && backToPaperList(), 
                    loadPapers(), N.ElMessage.success("\u5220\u9664\u6210\u529f\uff01");
                } catch (n) {
                    "cancel" !== n && console.error("\u5220\u9664\u9519\u8bef:", n);
                }
            }, clearAllPapers = async () => {
                if (0 !== t.value.length) try {
                    await N.ElMessageBox.confirm(`\u786e\u5b9a\u8981\u6e05\u7a7a\u6240\u6709\u8bd5\u5377\u5417\uff1f\u5171 ${t.value.length} \u95e8\u8bfe\u7a0b\u5c06\u88ab\u5220\u9664\uff0c\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d\uff01`, "\u6e05\u7a7a\u786e\u8ba4", {
                        confirmButtonText: "\u786e\u5b9a\u6e05\u7a7a",
                        cancelButtonText: "\u53d6\u6d88",
                        type: "error",
                        confirmButtonClass: "el-button--danger"
                    }), Cache.matchRemove("paper__"), backToPaperList(), loadPapers(), N.ElMessage.success("\u5df2\u6e05\u7a7a\u6240\u6709\u8bd5\u5377\uff01");
                } catch (e) {
                    "cancel" !== e && console.error("\u6e05\u7a7a\u9519\u8bef:", e);
                } else N.ElMessage.warning("\u5f53\u524d\u6ca1\u6709\u8bd5\u5377\u6570\u636e");
            };
            return (e, i) => {
                const u = vue.resolveComponent("el-alert"), d = vue.resolveComponent("el-card"), h = vue.resolveComponent("el-icon"), m = vue.resolveComponent("el-input"), f = vue.resolveComponent("el-button"), g = vue.resolveComponent("el-tag"), y = vue.resolveComponent("el-empty"), w = vue.resolveComponent("el-divider"), v = vue.resolveDirective("loading");
                return vue.openBlock(), vue.createElementBlock("div", _s, [ l.value ? l.value && !c.value ? (vue.openBlock(), vue.createElementBlock("div", js, [ vue.createVNode(d, {
                    class: "header-card",
                    shadow: "hover"
                }, {
                    default: vue.withCtx((() => [ vue.createElementVNode("div", zs, [ vue.createElementVNode("div", Os, [ vue.createVNode(f, {
                        type: "primary",
                        onClick: backToPaperList,
                        plain: ""
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(h, null, {
                            default: vue.withCtx((() => [ vue.createVNode(vue.unref(K), {
                                style: {
                                    transform: "rotate(180deg)"
                                }
                            }) ])),
                            _: 1
                        }), vue.createTextVNode(" \u8fd4\u56de\u8bfe\u7a0b\u5217\u8868 ") ])),
                        _: 1
                    }), vue.createVNode(f, {
                        type: "success",
                        onClick: i[1] || (i[1] = e => exportPaperToHtml(l.value)),
                        icon: vue.unref(ae)
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" \u5bfc\u51fa\u6574\u4e2a\u8bfe\u7a0b ") ])),
                        _: 1
                    }, 8, [ "icon" ]), vue.createVNode(f, {
                        type: "danger",
                        onClick: i[2] || (i[2] = e => deletePaper(l.value)),
                        icon: vue.unref(te)
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" \u5220\u9664\u6b64\u8bfe\u7a0b ") ])),
                        _: 1
                    }, 8, [ "icon" ]) ]), vue.createElementVNode("div", Fs, [ vue.createElementVNode("h2", null, vue.toDisplayString(l.value.name || l.value.courseName || "\u672a\u547d\u540d\u8bfe\u7a0b"), 1), vue.createElementVNode("div", Ls, [ vue.createVNode(g, {
                        type: "success"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(l.value.chapterCount) + " \u4e2a\u7ae0\u8282", 1) ])),
                        _: 1
                    }), vue.createVNode(g, {
                        type: "warning"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(l.value.totalQuestions) + " \u9053\u9898\u76ee", 1) ])),
                        _: 1
                    }) ]) ]) ]) ])),
                    _: 1
                }), vue.createElementVNode("div", Ps, [ l.value.chapter && 0 !== l.value.chapter.length ? vue.createCommentVNode("", !0) : (vue.openBlock(), 
                vue.createBlock(y, {
                    key: 0,
                    description: "\u6682\u65e0\u7ae0\u8282\u6570\u636e"
                })), (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(l.value.chapter, ((e, t) => (vue.openBlock(), vue.createBlock(d, {
                    key: t,
                    class: "chapter-card",
                    shadow: "hover",
                    onClick: t => (e => {
                        c.value = e;
                    })(e)
                }, {
                    default: vue.withCtx((() => [ vue.createElementVNode("div", Ms, [ vue.createElementVNode("div", Vs, vue.toDisplayString(t + 1), 1), vue.createElementVNode("div", Ds, [ vue.createElementVNode("h3", Ns, vue.toDisplayString(e.name || e.title || "\u672a\u547d\u540d\u7ae0\u8282"), 1), vue.createElementVNode("div", Bs, [ vue.createVNode(g, {
                        size: "small",
                        type: "primary"
                    }, {
                        default: vue.withCtx((() => {
                            var t;
                            return [ vue.createTextVNode(vue.toDisplayString((null == (t = e.question) ? void 0 : t.length) || 0) + " \u9053\u9898\u76ee ", 1) ];
                        })),
                        _: 2
                    }, 1024) ]) ]), vue.createElementVNode("div", Gs, [ vue.createVNode(f, {
                        type: "success",
                        size: "small",
                        onClick: vue.withModifiers((t => ((e, t) => {
                            try {
                                const n = generateChapterHtml(e, t);
                                downloadHtml(n, `${e.name || e.courseName}-${t.name || t.title || "\u7ae0\u8282"}.html`), 
                                N.ElMessage.success("\u5bfc\u51fa\u6210\u529f\uff01");
                            } catch (n) {
                                N.ElMessage.error("\u5bfc\u51fa\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5"), console.error("\u5bfc\u51fa\u9519\u8bef:", n);
                            }
                        })(l.value, e)), [ "stop" ]),
                        icon: vue.unref(ae)
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" \u5bfc\u51fa ") ])),
                        _: 2
                    }, 1032, [ "onClick", "icon" ]), vue.createVNode(h, {
                        class: "chapter-arrow"
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(vue.unref(K)) ])),
                        _: 1
                    }) ]) ]) ])),
                    _: 2
                }, 1032, [ "onClick" ])))), 128)) ]) ])) : c.value ? (vue.openBlock(), vue.createElementBlock("div", Rs, [ vue.createVNode(d, {
                    class: "header-card",
                    shadow: "hover"
                }, {
                    default: vue.withCtx((() => [ vue.createElementVNode("div", Js, [ vue.createVNode(f, {
                        type: "primary",
                        onClick: backToChapterList,
                        plain: ""
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(h, null, {
                            default: vue.withCtx((() => [ vue.createVNode(vue.unref(K), {
                                style: {
                                    transform: "rotate(180deg)"
                                }
                            }) ])),
                            _: 1
                        }), vue.createTextVNode(" \u8fd4\u56de\u7ae0\u8282\u5217\u8868 ") ])),
                        _: 1
                    }), vue.createElementVNode("div", Qs, [ vue.createElementVNode("h2", null, vue.toDisplayString(c.value.name || c.value.title || "\u672a\u547d\u540d\u7ae0\u8282"), 1), vue.createVNode(g, {
                        type: "primary"
                    }, {
                        default: vue.withCtx((() => {
                            var e;
                            return [ vue.createTextVNode(vue.toDisplayString((null == (e = c.value.question) ? void 0 : e.length) || 0) + " \u9053\u9898\u76ee", 1) ];
                        })),
                        _: 1
                    }) ]) ]) ])),
                    _: 1
                }), vue.createElementVNode("div", Ws, [ c.value.question && 0 !== c.value.question.length ? vue.createCommentVNode("", !0) : (vue.openBlock(), 
                vue.createBlock(y, {
                    key: 0,
                    description: "\u6682\u65e0\u9898\u76ee\u6570\u636e"
                })), (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(c.value.question, ((e, t) => (vue.openBlock(), vue.createBlock(d, {
                    key: t,
                    class: "question-card",
                    shadow: "hover"
                }, {
                    default: vue.withCtx((() => [ vue.createElementVNode("div", Ks, "\u7b2c " + vue.toDisplayString(t + 1) + " \u9898", 1), vue.createElementVNode("div", {
                        class: "question-title",
                        innerHTML: "[" + vue.unref(typeConvert)(e.type ?? "", !1) + "] " + cl_img_format(e.question)
                    }, null, 8, Ys), e.options && e.options.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", Xs, [ "object" == typeof e.options[0] ? (vue.openBlock(), 
                    vue.createElementBlock("div", Zs, eo)) : (vue.openBlock(), vue.createElementBlock("div", to, [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(e.options, ((t, o) => {
                        return vue.openBlock(), vue.createElementBlock("div", {
                            key: o,
                            class: vue.normalizeClass([ "option-item", {
                                "is-answer": e.answer && e.answer.includes(t)
                            } ])
                        }, [ vue.createElementVNode("span", no, vue.toDisplayString((i = o, String.fromCharCode(65 + i))) + ".", 1), vue.createElementVNode("span", {
                            class: "option-content",
                            innerHTML: cl_img_format(t)
                        }, null, 8, ao) ], 2);
                        var i;
                    })), 128)) ])) ])) : vue.createCommentVNode("", !0), vue.createElementVNode("div", so, [ vue.createVNode(w, {
                        "content-position": "left"
                    }, {
                        default: vue.withCtx((() => [ oo ])),
                        _: 1
                    }), Array.isArray(e.answer) && e.options && 0 === e.options.length ? (vue.openBlock(), vue.createElementBlock("div", io, [ (vue.openBlock(!0), 
                    vue.createElementBlock(vue.Fragment, null, vue.renderList(e.answer, ((e, t) => (vue.openBlock(), vue.createBlock(g, {
                        key: t,
                        type: "success",
                        style: {
                            margin: "4px"
                        }
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e), 1) ])),
                        _: 2
                    }, 1024)))), 128)) ])) : Array.isArray(e.answer) ? (vue.openBlock(), vue.createElementBlock("div", ro, [ (vue.openBlock(!0), 
                    vue.createElementBlock(vue.Fragment, null, vue.renderList(e.answer, ((e, t) => (vue.openBlock(), vue.createElementBlock("span", {
                        key: t
                    }, [ vue.createVNode(g, {
                        type: "success",
                        style: {
                            margin: "4px"
                        }
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e), 1) ])),
                        _: 2
                    }, 1024) ])))), 128)) ])) : e.answer ? (vue.openBlock(), vue.createElementBlock("div", {
                        key: 2,
                        class: "answer-content",
                        innerHTML: cl_img_format(e.answer)
                    }, null, 8, lo)) : (vue.openBlock(), vue.createElementBlock("div", co, "\u6682\u65e0\u7b54\u6848")) ]) ])),
                    _: 2
                }, 1024)))), 128)) ]) ])) : vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock("div", ks, [ vue.createVNode(d, {
                    class: "tips-card",
                    shadow: "hover"
                }, {
                    default: vue.withCtx((() => [ vue.createVNode(u, {
                        type: "info",
                        closable: !1,
                        "show-icon": ""
                    }, {
                        default: vue.withCtx((() => [ qs ])),
                        _: 1
                    }) ])),
                    _: 1
                }), vue.createVNode(d, {
                    class: "search-card",
                    shadow: "hover"
                }, {
                    default: vue.withCtx((() => [ vue.createElementVNode("div", Cs, [ vue.createVNode(m, {
                        modelValue: r.value,
                        "onUpdate:modelValue": i[0] || (i[0] = e => r.value = e),
                        size: "large",
                        placeholder: "\ud83d\udd0d \u641c\u7d22\u8bfe\u7a0b\u540d\u79f0...",
                        clearable: "",
                        style: {
                            flex: "1"
                        }
                    }, {
                        prefix: vue.withCtx((() => [ vue.createVNode(h, null, {
                            default: vue.withCtx((() => [ vue.createVNode(vue.unref(me)) ])),
                            _: 1
                        }) ])),
                        _: 1
                    }, 8, [ "modelValue" ]), vue.createVNode(f, {
                        type: "danger",
                        size: "large",
                        onClick: clearAllPapers,
                        icon: vue.unref(te),
                        disabled: 0 === t.value.length
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" \u6e05\u7a7a\u6240\u6709 ") ])),
                        _: 1
                    }, 8, [ "icon", "disabled" ]) ]), vue.createElementVNode("div", Ts, [ vue.createVNode(g, {
                        type: "info",
                        effect: "plain"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" \u5171 " + vue.toDisplayString(t.value.length) + " \u95e8\u8bfe\u7a0b ", 1) ])),
                        _: 1
                    }), r.value ? (vue.openBlock(), vue.createBlock(g, {
                        key: 0,
                        type: "primary",
                        effect: "plain"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" \u641c\u7d22\u7ed3\u679c: " + vue.toDisplayString(p.value.length) + " \u95e8 ", 1) ])),
                        _: 1
                    })) : vue.createCommentVNode("", !0) ]) ])),
                    _: 1
                }), vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", As, [ 0 === p.value.length ? (vue.openBlock(), vue.createBlock(y, {
                    key: 0,
                    description: "\u6682\u65e0\u8bd5\u5377\u6570\u636e"
                })) : vue.createCommentVNode("", !0), (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(p.value, ((e, t) => (vue.openBlock(), vue.createBlock(d, {
                    key: t,
                    class: "paper-card",
                    shadow: "hover",
                    onClick: t => (e => {
                        l.value = e, c.value = null;
                    })(e)
                }, {
                    default: vue.withCtx((() => [ vue.createElementVNode("div", Ss, [ vue.createVNode(h, {
                        class: "paper-icon",
                        size: 32,
                        color: "#409EFF"
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(vue.unref(re)) ])),
                        _: 1
                    }), vue.createElementVNode("div", Us, [ vue.createElementVNode("h3", Hs, vue.toDisplayString(e.name || e.courseName || "\u672a\u547d\u540d\u8bfe\u7a0b"), 1), vue.createElementVNode("div", Es, [ vue.createVNode(g, {
                        size: "small",
                        type: "success"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e.chapterCount) + " \u4e2a\u7ae0\u8282 ", 1) ])),
                        _: 2
                    }, 1024), vue.createVNode(g, {
                        size: "small",
                        type: "warning"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e.totalQuestions) + " \u9053\u9898\u76ee ", 1) ])),
                        _: 2
                    }, 1024) ]) ]) ]), vue.createVNode(w, {
                        style: {
                            margin: "12px 0"
                        }
                    }), vue.createElementVNode("div", $s, [ vue.createElementVNode("div", Is, [ vue.createVNode(f, {
                        type: "success",
                        size: "small",
                        onClick: vue.withModifiers((t => exportPaperToHtml(e)), [ "stop" ]),
                        icon: vue.unref(ae)
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" \u5bfc\u51fa ") ])),
                        _: 2
                    }, 1032, [ "onClick", "icon" ]), vue.createVNode(f, {
                        type: "danger",
                        size: "small",
                        onClick: vue.withModifiers((t => deletePaper(e, t)), [ "stop" ]),
                        icon: vue.unref(te)
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode(" \u5220\u9664 ") ])),
                        _: 2
                    }, 1032, [ "onClick", "icon" ]) ]), vue.createVNode(h, null, {
                        default: vue.withCtx((() => [ vue.createVNode(vue.unref(K)) ])),
                        _: 1
                    }) ]) ])),
                    _: 2
                }, 1032, [ "onClick" ])))), 128)) ])), [ [ v, o.value ] ]) ])) ]);
            };
        }
    }), uo = vue.defineComponent({
        __name: "Log",
        setup(e) {
            const t = nn(), getColor = e => {
                switch (e) {
                  case "warn":
                    return "orange";

                  case "error":
                    return "red";

                  case "success":
                    return "green";

                  default:
                    return "blue";
                }
            };
            return (e, a) => {
                const o = vue.resolveComponent("el-table-column"), i = vue.resolveComponent("el-table");
                return vue.openBlock(), vue.createBlock(i, {
                    data: vue.unref(t).logs,
                    style: {
                        width: "100%"
                    }
                }, {
                    default: vue.withCtx((() => [ vue.createVNode(o, {
                        prop: "time",
                        label: "\u65f6\u95f4",
                        width: "180"
                    }, {
                        default: vue.withCtx((({row: e}) => [ vue.createElementVNode("span", null, vue.toDisplayString(e.time), 1) ])),
                        _: 1
                    }), vue.createVNode(o, {
                        prop: "content",
                        label: "\u5185\u5bb9"
                    }, {
                        default: vue.withCtx((({row: e}) => [ vue.createElementVNode("span", {
                            style: vue.normalizeStyle({
                                color: getColor(e.type)
                            })
                        }, vue.toDisplayString(e.content), 5) ])),
                        _: 1
                    }) ])),
                    _: 1
                }, 8, [ "data" ]);
            };
        }
    }), ho = defineStore("ai", {
        state: () => ({
            aiMsg: "",
            aiLoading: !1
        }),
        actions: {
            currentAiMd() {
                return simpleMarkdownToHtml(this.aiMsg);
            },
            resetAi() {
                this.aiMsg = "", this.aiLoading = !1;
            }
        }
    }), mo = {
        class: "ai-container"
    }, fo = vue.createElementVNode("div", {
        class: "card-header"
    }, [ vue.createElementVNode("span", {
        class: "card-title"
    }, "\ud83e\udd16 AI\u667a\u80fd\u641c\u9898") ], -1), go = {
        class: "search-type"
    }, yo = {
        class: "card-header"
    }, wo = vue.createElementVNode("span", {
        class: "card-title"
    }, "\ud83d\udca1 AI\u89e3\u7b54", -1), vo = {
        class: "result-content"
    }, bo = [ "innerHTML" ], xo = vue.createElementVNode("div", {
        class: "card-header"
    }, [ vue.createElementVNode("span", {
        class: "card-title"
    }, "\ud83d\udcda \u7231\u95ee\u7b54\u9898\u5e93") ], -1), _o = vue.createElementVNode("div", {
        style: {
            "font-size": "60px"
        }
    }, "\ud83d\udea7", -1), ko = vue.createElementVNode("div", {
        class: "card-header"
    }, [ vue.createElementVNode("span", {
        class: "card-title"
    }, "\u2139\ufe0f \u670d\u52a1\u8bf4\u660e") ], -1), qo = [ "innerHTML" ], Co = vue.defineComponent({
        __name: "Ai",
        setup(e) {
            let t = getApp(), o = t.gpt[t.gptIndex];
            const r = ho(), l = vue.ref(""), search = async () => {
                if (l.value) {
                    if (r.resetAi(), "2" === p.value) return r.aiMsg = "\u7231\u95ee\u7b54\u5b98\u65b9\u9898\u5e93\u5f00\u53d1\u4e2d...", 
                    void msg("\u7231\u95ee\u7b54\u5b98\u65b9\u9898\u5e93\u5f00\u53d1\u4e2d...");
                    r.aiLoading = !0;
                    try {
                        await aiAsk(l.value, (e => {
                            r.aiLoading = !1, r.aiMsg += e, console.log(r.aiMsg);
                        }), (() => {
                            r.aiMsg.length <= 0 && (r.aiMsg = o.msg);
                        }), "\u4f60\u662f\u4e00\u4e2a\u4e13\u4e1a\u7684\u7b54\u9898\u52a9\u624b\uff0c\u8bf7\u6839\u636e\u7528\u6237\u63d0\u4f9b\u7684\u9898\u76ee\u8fdb\u884c\u89e3\u7b54\u3002\n\n\u8981\u6c42\uff1a\n1. \u4ed4\u7ec6\u5206\u6790\u9898\u76ee\u5185\u5bb9\uff0c\u7406\u89e3\u9898\u76ee\u8981\u6c42\n2. \u63d0\u4f9b\u51c6\u786e\u3001\u7b80\u6d01\u7684\u7b54\u6848\n3. \u5982\u679c\u662f\u9009\u62e9\u9898\uff0c\u8bf7\u76f4\u63a5\u7ed9\u51fa\u6b63\u786e\u9009\u9879\uff08\u5982\uff1aA\u3001B\u3001C\u3001D\u6216\u591a\u9009\u7ec4\u5408\uff09\n4. \u5982\u679c\u662f\u586b\u7a7a\u9898\u6216\u7b80\u7b54\u9898\uff0c\u8bf7\u7ed9\u51fa\u7b80\u660e\u627c\u8981\u7684\u7b54\u6848\n5. \u5982\u679c\u9898\u76ee\u4e0d\u6e05\u6670\u6216\u65e0\u6cd5\u786e\u5b9a\u7b54\u6848\uff0c\u8bf7\u8bf4\u660e\u539f\u56e0\n6. \u56de\u7b54\u8981\u6709\u6761\u7406\uff0c\u5fc5\u8981\u65f6\u53ef\u4ee5\u7b80\u8981\u8bf4\u660e\u7406\u7531\n\n\u8bf7\u5f00\u59cb\u89e3\u7b54\uff1a");
                    } catch (e) {
                        console.error("AI\u68c0\u7d22\u8d85\u65f6\uff0c\u53ef\u80fd\u662f\u7f51\u7edc\u95ee\u9898\u6216\u8005\u5bf9\u5e94GPT\u7684cookie\u5931\u6548", e), 
                        r.aiMsg = o.msg;
                    } finally {
                        r.aiLoading = !1;
                    }
                }
            }, c = [ {
                label: "AI\u68c0\u7d22",
                value: "1",
                key: "ai"
            }, {
                label: "\u7231\u95ee\u7b54\u9898\u5e93",
                value: "2",
                key: "ask"
            } ], p = vue.ref("1");
            return (e, t) => {
                const i = vue.resolveComponent("el-input"), u = vue.resolveComponent("el-radio-button"), d = vue.resolveComponent("el-radio-group"), h = vue.resolveComponent("el-icon"), m = vue.resolveComponent("el-button"), f = vue.resolveComponent("el-card"), g = vue.resolveComponent("el-tag"), y = vue.resolveComponent("el-empty"), w = vue.resolveDirective("loading");
                return vue.openBlock(), vue.createElementBlock("div", mo, [ vue.createVNode(f, {
                    class: "search-card",
                    shadow: "hover"
                }, {
                    header: vue.withCtx((() => [ fo ])),
                    default: vue.withCtx((() => [ vue.createVNode(i, {
                        modelValue: l.value,
                        "onUpdate:modelValue": t[0] || (t[0] = e => l.value = e),
                        type: "textarea",
                        placeholder: "\u8bf7\u8f93\u5165\u9898\u76ee\u6216\u95ee\u9898\uff0cAI\u5c06\u4e3a\u60a8\u63d0\u4f9b\u8be6\u7ec6\u89e3\u7b54...",
                        rows: 5,
                        autosize: {
                            minRows: 5,
                            maxRows: 10
                        },
                        style: {
                            "margin-bottom": "16px"
                        }
                    }, null, 8, [ "modelValue" ]), vue.createElementVNode("div", go, [ vue.createVNode(d, {
                        modelValue: p.value,
                        "onUpdate:modelValue": t[1] || (t[1] = e => p.value = e),
                        size: "default"
                    }, {
                        default: vue.withCtx((() => [ (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(c, (e => vue.createVNode(u, {
                            value: e.value,
                            key: e.value
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e.label), 1) ])),
                            _: 2
                        }, 1032, [ "value" ]))), 64)) ])),
                        _: 1
                    }, 8, [ "modelValue" ]) ]), vue.createVNode(m, {
                        type: "primary",
                        size: "large",
                        style: {
                            width: "100%",
                            "margin-top": "16px"
                        },
                        onClick: search,
                        loading: vue.unref(r).aiLoading
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(h, {
                            style: {
                                "margin-right": "8px"
                            }
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(vue.unref(me)) ])),
                            _: 1
                        }), vue.createTextVNode(" " + vue.toDisplayString(vue.unref(r).aiLoading ? "\u641c\u7d22\u4e2d..." : "\u5f00\u59cb\u641c\u7d22"), 1) ])),
                        _: 1
                    }, 8, [ "loading" ]) ])),
                    _: 1
                }), "1" === p.value && (vue.unref(r).aiMsg || vue.unref(r).aiLoading) ? (vue.openBlock(), vue.createBlock(f, {
                    key: 0,
                    class: "result-card",
                    shadow: "hover"
                }, {
                    header: vue.withCtx((() => [ vue.createElementVNode("div", yo, [ wo, vue.unref(r).aiLoading ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(g, {
                        key: 0,
                        type: "success",
                        size: "small"
                    }, {
                        default: vue.withCtx((() => [ vue.createTextVNode("\u89e3\u7b54\u5b8c\u6210") ])),
                        _: 1
                    })) ]) ])),
                    default: vue.withCtx((() => [ vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", vo, [ !vue.unref(r).aiLoading && vue.unref(r).aiMsg ? (vue.openBlock(), 
                    vue.createElementBlock("div", {
                        key: 0,
                        innerHTML: vue.unref(r).currentAiMd(),
                        class: "markdown-body"
                    }, null, 8, bo)) : vue.unref(r).aiLoading ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createBlock(y, {
                        key: 1,
                        description: "AI\u7b54\u9898\u4ec5\u4f9b\u53c2\u8003\uff0c\u4e0d\u4fdd\u8bc1\u51c6\u786e\u6027"
                    })) ])), [ [ w, vue.unref(r).aiLoading ] ]) ])),
                    _: 1
                })) : vue.createCommentVNode("", !0), "2" === p.value ? (vue.openBlock(), vue.createBlock(f, {
                    key: 1,
                    class: "result-card",
                    shadow: "hover"
                }, {
                    header: vue.withCtx((() => [ xo ])),
                    default: vue.withCtx((() => [ vue.createVNode(y, {
                        description: "\u7231\u95ee\u7b54\u5b98\u65b9\u9898\u5e93\u5f00\u53d1\u4e2d\uff0c\u656c\u8bf7\u671f\u5f85...(\u771f\u7684\u5feb\u597d\u4e86)"
                    }, {
                        image: vue.withCtx((() => [ _o ])),
                        _: 1
                    }) ])),
                    _: 1
                })) : vue.createCommentVNode("", !0), "1" === p.value ? (vue.openBlock(), vue.createBlock(f, {
                    key: 2,
                    class: "copyright-card",
                    shadow: "hover"
                }, {
                    header: vue.withCtx((() => [ ko ])),
                    default: vue.withCtx((() => [ vue.createElementVNode("div", {
                        class: "copyright-content",
                        innerHTML: vue.unref(markToHtml)(`\u5f53\u524d\u91c7\u7528\u7684\u662f **${vue.unref(o).name}** \u670d\u52a1\uff0c\u4ec5\u4f9b\u6d4b\u8bd5\u4f7f\u7528\uff0c\u4e0d\u4fdd\u8bc1\u51c6\u786e\u6027\u3002\n    \n\u5982\u6709\u4fb5\u6743\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u5220\u9664\u3002\n    \n\u8bf7\u5927\u5bb6\u591a\u591a\u652f\u6301\u5b98\u65b9\uff1a[${vue.unref(o).home}](${vue.unref(o).home})`)
                    }, null, 8, qo) ])),
                    _: 1
                })) : vue.createCommentVNode("", !0) ]);
            };
        }
    }), To = {
        key: 2,
        style: {
            width: "calc(100% - 130px)",
            "margin-left": "10px"
        }
    }, Ao = {
        key: 0,
        style: {
            color: "red",
            "margin-top": "5px"
        }
    }, So = vue.defineComponent({
        __name: "ParamTable",
        props: {
            data: {},
            presetValues: {}
        },
        setup(e) {
            const t = e.presetValues || [];
            return (e, s) => {
                const o = vue.resolveComponent("el-input"), i = vue.resolveComponent("el-table-column"), r = vue.resolveComponent("el-option"), l = vue.resolveComponent("el-select"), c = vue.resolveComponent("el-button"), p = vue.resolveComponent("el-table");
                return vue.openBlock(), vue.createElementBlock("div", null, [ vue.createVNode(p, {
                    data: e.data,
                    border: ""
                }, {
                    default: vue.withCtx((() => [ vue.createVNode(i, {
                        label: "Key",
                        width: "200"
                    }, {
                        default: vue.withCtx((({row: e}) => [ vue.createVNode(o, {
                            modelValue: e.key,
                            "onUpdate:modelValue": t => e.key = t,
                            placeholder: "Key",
                            style: {
                                width: "100%"
                            }
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ])),
                        _: 1
                    }), vue.createVNode(i, {
                        label: "Value"
                    }, {
                        default: vue.withCtx((({row: e}) => [ vue.createVNode(l, {
                            modelValue: e.valueType,
                            "onUpdate:modelValue": t => e.valueType = t,
                            placeholder: "Value Type",
                            style: {
                                width: "120px"
                            }
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(r, {
                                label: "\u5185\u7f6e\u503c",
                                value: "preset"
                            }), vue.createVNode(r, {
                                label: "\u81ea\u5b9a\u4e49",
                                value: "custom"
                            }) ])),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue" ]), "custom" === e.valueType ? (vue.openBlock(), 
                        vue.createBlock(o, {
                            key: 0,
                            modelValue: e.value,
                            "onUpdate:modelValue": t => e.value = t,
                            placeholder: "Value",
                            style: {
                                width: "calc(100% - 130px)",
                                "margin-left": "10px"
                            }
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : vue.createCommentVNode("", !0), "preset" === e.valueType ? (vue.openBlock(), 
                        vue.createBlock(l, {
                            key: 1,
                            modelValue: e.value,
                            "onUpdate:modelValue": t => e.value = t,
                            placeholder: "\u9009\u62e9\u5185\u7f6e\u503c",
                            style: {
                                width: "calc(100% - 130px)",
                                "margin-left": "10px"
                            }
                        }, {
                            default: vue.withCtx((() => [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t), (e => (vue.openBlock(), vue.createBlock(r, {
                                key: e.key,
                                label: e.label,
                                value: e.value
                            }, null, 8, [ "label", "value" ])))), 128)) ])),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue" ])) : vue.createCommentVNode("", !0), "code" === e.valueType ? (vue.openBlock(), 
                        vue.createElementBlock("div", To, [ vue.createVNode(o, {
                            modelValue: e.value,
                            "onUpdate:modelValue": t => e.value = t,
                            placeholder: "\u8bf7\u8f93\u5165\u4ee3\u7801",
                            type: "textarea",
                            style: {
                                width: "100%"
                            }
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), vue.createVNode(c, {
                            size: "small",
                            type: "primary",
                            style: {
                                "margin-top": "5px"
                            },
                            onClick: t => (e => {
                                if ("code" === e.valueType) try {
                                    e.error = "";
                                    const t = new Function(`return ${e.value}`)();
                                    console.log("\u4ee3\u7801\u8fd0\u884c\u7ed3\u679c\uff1a", t), e.error = "";
                                } catch (t) {
                                    console.error("\u4ee3\u7801\u8fd0\u884c\u9519\u8bef\uff1a", t), e.error = `\u4ee3\u7801\u8fd0\u884c\u9519\u8bef: ${t.message}`;
                                }
                            })(e)
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(" \u8fd0\u884c\u4ee3\u7801 ") ])),
                            _: 2
                        }, 1032, [ "onClick" ]), e.error ? (vue.openBlock(), vue.createElementBlock("div", Ao, vue.toDisplayString(e.error), 1)) : vue.createCommentVNode("", !0) ])) : vue.createCommentVNode("", !0) ])),
                        _: 1
                    }), vue.createVNode(i, {
                        label: "\u64cd\u4f5c",
                        width: "100"
                    }, {
                        default: vue.withCtx((({$index: t}) => [ vue.createVNode(c, {
                            size: "small",
                            onClick: n => e.$emit("remove", t)
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode("\u5220\u9664") ])),
                            _: 2
                        }, 1032, [ "onClick" ]) ])),
                        _: 1
                    }) ])),
                    _: 1
                }, 8, [ "data" ]), vue.createVNode(c, {
                    size: "small",
                    onClick: s[0] || (s[0] = t => e.$emit("add"))
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode("\u6dfb\u52a0") ])),
                    _: 1
                }) ]);
            };
        }
    }), Uo = {
        key: 0
    }, Ho = {
        key: 1
    }, Eo = {
        key: 0,
        class: "error-message"
    }, $o = {
        key: 2
    }, Io = {
        class: "mt-30"
    }, jo = {
        key: 0
    }, zo = {
        class: "json-preview",
        style: {
            "max-height": "300px",
            "overflow-y": "auto"
        }
    }, Oo = {
        key: 1
    }, Fo = [ "innerHTML" ], Lo = {
        key: 2
    }, Po = {
        style: {
            "max-height": "300px",
            "overflow-y": "auto"
        }
    }, Mo = {
        style: {
            "max-height": "300px",
            "overflow-y": "auto"
        }
    }, Vo = {
        style: {
            "max-height": "300px",
            "overflow-y": "auto"
        }
    }, Do = {
        style: {
            "max-height": "300px",
            "overflow-y": "auto"
        }
    }, No = {
        key: 2,
        class: "mt-10"
    }, Bo = vue.createElementVNode("strong", null, "\u63d0\u53d6\u7684\u7b54\u6848\uff1a", -1), Go = {
        key: 3,
        class: "mt-10"
    }, Ro = vue.defineComponent({
        __name: "ApiComponent",
        setup(e) {
            const t = [ "GET", "POST" ], o = vue.ref("POST"), r = vue.ref("http://cx.icodef.com/wyn-nb?v=4"), l = vue.ref([]), c = vue.ref([]), p = vue.ref('{\n    "question": "$question",\n    "options": "$options",\n    "type": "$type"\n}'), u = vue.ref([ {
                key: "question",
                value: "$question",
                valueType: "preset"
            }, {
                key: "options",
                value: "$options",
                valueType: "preset"
            }, {
                key: "type",
                value: "$type",
                valueType: "preset"
            } ]), d = vue.ref("json"), h = [ {
                label: "None",
                value: "none"
            }, {
                label: "JSON",
                value: "json"
            }, {
                label: "x-www-form-urlencoded",
                value: "urlencoded"
            } ], m = [ {
                key: "timestamp",
                label: "\u5f53\u524d\u65f6\u95f4\u6233",
                value: "$timestamp"
            }, {
                key: "random",
                label: "\u968f\u673a\u6570",
                value: "$random"
            }, {
                key: "question",
                label: "\u9898\u5e72",
                value: "$question"
            }, {
                key: "options",
                label: "\u9009\u9879",
                value: "$options"
            }, {
                key: "type",
                label: "\u9898\u578b",
                value: "$type"
            }, {
                key: "typename",
                label: "\u9898\u578b\u540d",
                value: "$typename"
            } ], f = {
                timestamp: Date.now(),
                random: Math.random(),
                question: "\u6025\u6027\u5417\u5561\u4e2d\u6bd2\u7684\u62ee\u6297\u5242\u662f:",
                options: [ "\u7eb3\u916a\u916e", "\u66f2\u9a6c\u6735", "\u5c3c\u83ab\u5730\u5e73", "\u963f\u6258\u54c1", "\u80be\u4e0a\u817a\u7d20" ],
                type: "0",
                typename: "\u5355\u9009\u9898"
            }, g = vue.ref({
                data: "",
                headers: "",
                raw: "",
                contentType: ""
            }), y = vue.ref(""), w = vue.ref("body"), q = vue.ref("body"), H = vue.ref(!0), $ = vue.ref(!1), I = vue.computed((() => [ "GET", "DELETE" ].includes(o.value)));
            function replacePresetValues(e, t) {
                if ("string" == typeof e) return e.replace(/\$(\w+)/g, ((e, n) => void 0 !== t[n] ? t[n] : `$${n}`));
                if (Array.isArray(e)) return e.map((e => replacePresetValues(e, t)));
                if ("object" == typeof e && null !== e) {
                    const n = {};
                    for (const a in e) n[a] = replacePresetValues(e[a], t);
                    return n;
                }
                return e;
            }
            function generateGMConfig() {
                const e = c.value.filter((e => e.key)).map((e => {
                    const t = replacePresetValues(e.value, f);
                    return `${encodeURIComponent(e.key)}=${encodeURIComponent(t)}`;
                })).join("&"), t = e ? `${r.value}?${e}` : r.value, n = {};
                l.value.forEach((({key: e, value: t}) => {
                    e && (n[e] = t);
                })), n["Content-Type"] = "json" === d.value ? "application/json" : "application/x-www-form-urlencoded";
                let a = null;
                if ("json" === d.value) try {
                    const e = replacePresetValues(JSON.parse(p.value || "{}"), f);
                    a = JSON.stringify(e);
                } catch (s) {
                    console.error("JSON \u89e3\u6790\u5931\u8d25\uff1a", s);
                } else if ("urlencoded" === d.value) {
                    a = u.value.map((e => ({
                        key: e.key,
                        value: replacePresetValues(e.value, f)
                    }))).filter((e => e.key)).map((e => `${encodeURIComponent(e.key)}=${encodeURIComponent(e.value)}`)).join("&");
                }
                return {
                    method: o.value,
                    url: t,
                    headers: n,
                    data: a
                };
            }
            function validateJson() {
                try {
                    JSON.parse(p.value), H.value = !0;
                } catch {
                    H.value = !1;
                }
            }
            function formatJson() {
                if (!H.value) return msg("JSON \u683c\u5f0f\u65e0\u6548\uff0c\u8bf7\u68c0\u67e5\uff01");
                p.value = JSON.stringify(JSON.parse(p.value), null, 2);
            }
            function addRow(e) {
                e.push({
                    key: "",
                    value: ""
                });
            }
            function removeRow(e, t) {
                e.splice(t, 1);
            }
            function sendRequest() {
                if ("json" === d.value && !H.value) return msg("JSON \u683c\u5f0f\u65e0\u6548\uff0c\u8bf7\u68c0\u67e5\uff01");
                $.value = !0;
                const e = generateGMConfig();
                Ie({
                    method: e.method,
                    url: e.url,
                    headers: e.headers,
                    data: e.data || void 0,
                    onload: e => {
                        !function(e) {
                            var t;
                            const n = (null == (t = e.responseHeaders.match(/content-type:\s?([\w/+-]+)/i)) ? void 0 : t[1]) || "", a = function(e, t) {
                                if (t.includes("application/json")) try {
                                    return JSON.stringify(JSON.parse(e), null, 2);
                                } catch {
                                    return "\u65e0\u6cd5\u89e3\u6790\u7684 JSON \u6570\u636e";
                                }
                                return t.includes("text/html") || t.includes("text/plain") ? e : `\u65e0\u6cd5\u89e3\u6790\u7684\u54cd\u5e94\u7c7b\u578b\uff1a${t}`;
                            }(e.responseText, n);
                            y.value = JSON.stringify(generateGMConfig(), null, 2), g.value = {
                                data: a,
                                headers: e.responseHeaders,
                                raw: e.responseText,
                                contentType: n
                            };
                        }(e), $.value = !1;
                    },
                    onerror: e => {
                        !function(e) {
                            g.value = {
                                data: e.message || "\u8bf7\u6c42\u5931\u8d25",
                                headers: "",
                                raw: "",
                                contentType: ""
                            }, msg(`\u8bf7\u6c42\u9519\u8bef: ${e.message || "\u672a\u77e5\u9519\u8bef"}`);
                        }(e), $.value = !1;
                    }
                });
            }
            const j = vue.ref("data"), z = vue.ref('(res) => res.code === 1 ? /\u53db\u9006|\u516c\u4f17\u53f7|\u674e\u6052\u96c5|\u4e00\u4e4b/.test(res.data) ? null : res.data.replace(/javascript:void\\(0\\);/g, "").trim().replace(/\\n/g, "").split("#") : null'), O = vue.ref("field"), F = vue.ref("");
            function extractAnswer() {
                if (j.value || z.value) try {
                    const e = JSON.parse(g.value.data);
                    if ("function" === O.value) {
                        const t = new Function("res", `return (${z.value})(res);`);
                        F.value = t(e);
                    } else if (j.value) {
                        const t = function(e, t) {
                            const n = t.split(/\.|\[|\]/).filter((e => e));
                            let a = e;
                            for (const s of n) {
                                if (null == a) return;
                                a = isNaN(Number(s)) ? a[s] : a[Number(s)];
                            }
                            return a;
                        }(e, j.value);
                        F.value = void 0 !== t ? JSON.stringify(t, null, 2) : "\u63d0\u53d6\u7b54\u6848\u5931\u8d25\uff0c\u65e0\u6cd5\u627e\u5230\u5bf9\u5e94\u5b57\u6bb5\u7684\u7b54\u6848";
                    }
                } catch (e) {
                    F.value = "\u63d0\u53d6\u7b54\u6848\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5 JSON \u6570\u636e\u6216\u63d0\u53d6\u903b\u8f91" + e;
                } else msg("\u8bf7\u586b\u5199\u7b54\u6848\u5b57\u6bb5\u8def\u5f84\u6216\u81ea\u5b9a\u4e49\u63d0\u53d6\u51fd\u6570\uff01");
            }
            function saveApi() {
                if (F.value.includes("\u63d0\u53d6\u7b54\u6848\u5931\u8d25")) return void msg("\u63d0\u53d6\u7b54\u6848\u5931\u8d25\uff0c\u65e0\u6cd5\u4fdd\u5b58\u63a5\u53e3\uff01");
                let e = {
                    method: o.value,
                    url: r.value
                };
                const t = {};
                if (l.value.forEach((({key: e, value: n}) => {
                    e && (t[e] = n);
                })), e.headers = t, "GET" === e.method) {
                    e.params = c.value, e.type = "get";
                    const t = c.value.filter((e => e.key)).map((e => {
                        const t = replacePresetValues(e.value, f);
                        return `${encodeURIComponent(e.key)}=${encodeURIComponent(t)}`;
                    })).join("&");
                    e.url = t ? `${r.value}?${t}` : r.value;
                } else if ("json" === d.value) e.data = JSON.parse(p.value), e.type = "json"; else if ("urlencoded" === d.value) {
                    const t = {};
                    for (const e of u.value) t[e.key] = e.value;
                    e.data = t, e.type = "urlencoded";
                }
                "field" === O.value ? e.response = {
                    type: "field",
                    value: j.value
                } : z.value && (e.response = {
                    type: "function",
                    value: z.value
                });
            }
            return (e, i) => {
                const f = vue.resolveComponent("el-alert"), v = vue.resolveComponent("el-option"), L = vue.resolveComponent("el-select"), P = vue.resolveComponent("el-col"), M = vue.resolveComponent("el-input"), V = vue.resolveComponent("el-button"), D = vue.resolveComponent("el-row"), N = vue.resolveComponent("el-tab-pane"), B = vue.resolveComponent("el-tabs"), G = vue.resolveComponent("el-divider"), R = vue.resolveComponent("el-radio"), J = vue.resolveComponent("el-radio-group"), Q = vue.resolveComponent("el-main"), W = vue.resolveComponent("el-container");
                return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [ vue.createVNode(f, {
                    title: "\u5f00\u53d1\u4e2d.....\u6682\u4e0d\u53ef\u7528",
                    type: "error"
                }), vue.createVNode(W, null, {
                    default: vue.withCtx((() => [ vue.createVNode(Q, {
                        class: "request-builder"
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(D, {
                            gutter: 20,
                            class: "mb-20"
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(P, {
                                span: 6
                            }, {
                                default: vue.withCtx((() => [ vue.createVNode(L, {
                                    modelValue: o.value,
                                    "onUpdate:modelValue": i[0] || (i[0] = e => o.value = e),
                                    placeholder: "Method"
                                }, {
                                    default: vue.withCtx((() => [ (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(t, (e => vue.createVNode(v, {
                                        key: e,
                                        label: e,
                                        value: e
                                    }, null, 8, [ "label", "value" ]))), 64)) ])),
                                    _: 1
                                }, 8, [ "modelValue" ]) ])),
                                _: 1
                            }), vue.createVNode(P, {
                                span: 12
                            }, {
                                default: vue.withCtx((() => [ vue.createVNode(M, {
                                    modelValue: r.value,
                                    "onUpdate:modelValue": i[1] || (i[1] = e => r.value = e),
                                    placeholder: "URL",
                                    clearable: ""
                                }, null, 8, [ "modelValue" ]) ])),
                                _: 1
                            }), vue.createVNode(P, {
                                span: 6
                            }, {
                                default: vue.withCtx((() => [ vue.createVNode(V, {
                                    type: "primary",
                                    loading: $.value,
                                    onClick: sendRequest,
                                    class: "full-width"
                                }, {
                                    default: vue.withCtx((() => [ vue.createTextVNode(" \u53d1\u9001\u8bf7\u6c42 ") ])),
                                    _: 1
                                }, 8, [ "loading" ]) ])),
                                _: 1
                            }) ])),
                            _: 1
                        }), vue.createVNode(B, {
                            modelValue: w.value,
                            "onUpdate:modelValue": i[10] || (i[10] = e => w.value = e),
                            class: "mb-20"
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(N, {
                                label: "Query",
                                name: "query"
                            }, {
                                default: vue.withCtx((() => [ vue.createVNode(So, {
                                    data: c.value,
                                    "preset-values": m,
                                    onAdd: i[2] || (i[2] = e => addRow(c.value)),
                                    onRemove: i[3] || (i[3] = e => removeRow(c.value, e))
                                }, null, 8, [ "data" ]) ])),
                                _: 1
                            }), vue.createVNode(N, {
                                label: "Headers",
                                name: "headers"
                            }, {
                                default: vue.withCtx((() => [ vue.createVNode(So, {
                                    data: l.value,
                                    "preset-values": m,
                                    onAdd: i[4] || (i[4] = e => addRow(l.value)),
                                    onRemove: i[5] || (i[5] = e => removeRow(l.value, e))
                                }, null, 8, [ "data" ]) ])),
                                _: 1
                            }), vue.createVNode(N, {
                                label: "Body",
                                name: "body"
                            }, {
                                default: vue.withCtx((() => [ vue.createVNode(L, {
                                    modelValue: d.value,
                                    "onUpdate:modelValue": i[6] || (i[6] = e => d.value = e),
                                    placeholder: "Body \u7c7b\u578b",
                                    disabled: I.value,
                                    class: "mb-10"
                                }, {
                                    default: vue.withCtx((() => [ (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(h, (e => vue.createVNode(v, {
                                        key: e.value,
                                        label: e.label,
                                        value: e.value
                                    }, null, 8, [ "label", "value" ]))), 64)) ])),
                                    _: 1
                                }, 8, [ "modelValue", "disabled" ]), "none" === d.value ? (vue.openBlock(), vue.createElementBlock("div", Uo, "\u65e0\u8bf7\u6c42\u4f53")) : "json" === d.value ? (vue.openBlock(), 
                                vue.createElementBlock("div", Ho, [ vue.createVNode(M, {
                                    modelValue: p.value,
                                    "onUpdate:modelValue": i[7] || (i[7] = e => p.value = e),
                                    type: "textarea",
                                    placeholder: "JSON \u683c\u5f0f\u7684\u8bf7\u6c42\u4f53",
                                    rows: 10,
                                    class: vue.normalizeClass({
                                        "is-error": !H.value
                                    }),
                                    onInput: validateJson
                                }, null, 8, [ "modelValue", "class" ]), vue.createVNode(V, {
                                    type: "success",
                                    size: "small",
                                    onClick: formatJson
                                }, {
                                    default: vue.withCtx((() => [ vue.createTextVNode("\u683c\u5f0f\u5316 JSON") ])),
                                    _: 1
                                }), H.value ? vue.createCommentVNode("", !0) : (vue.openBlock(), vue.createElementBlock("p", Eo, "JSON \u683c\u5f0f\u65e0\u6548\uff0c\u8bf7\u68c0\u67e5\uff01")) ])) : "urlencoded" === d.value ? (vue.openBlock(), 
                                vue.createElementBlock("div", $o, [ vue.createVNode(So, {
                                    data: u.value,
                                    "preset-values": m,
                                    onAdd: i[8] || (i[8] = e => addRow(u.value)),
                                    onRemove: i[9] || (i[9] = e => removeRow(u.value, e))
                                }, null, 8, [ "data" ]) ])) : vue.createCommentVNode("", !0) ])),
                                _: 1
                            }) ])),
                            _: 1
                        }, 8, [ "modelValue" ]), vue.createElementVNode("div", Io, [ vue.createVNode(B, {
                            modelValue: q.value,
                            "onUpdate:modelValue": i[11] || (i[11] = e => q.value = e)
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(N, {
                                label: "Body",
                                name: "body"
                            }, {
                                default: vue.withCtx((() => [ g.value.contentType.includes("application/json") ? (vue.openBlock(), vue.createElementBlock("div", jo, [ vue.createElementVNode("pre", zo, vue.toDisplayString(g.value.data), 1) ])) : g.value.contentType.includes("text/html") ? (vue.openBlock(), 
                                vue.createElementBlock("div", Oo, [ vue.createElementVNode("div", {
                                    innerHTML: g.value.data,
                                    style: {
                                        "max-height": "300px",
                                        "overflow-y": "auto"
                                    }
                                }, null, 8, Fo) ])) : (vue.openBlock(), vue.createElementBlock("div", Lo, [ vue.createElementVNode("pre", Po, vue.toDisplayString(g.value.data), 1) ])) ])),
                                _: 1
                            }), vue.createVNode(N, {
                                label: "\u8bf7\u6c42\u53c2\u6570",
                                name: "request-headers"
                            }, {
                                default: vue.withCtx((() => [ vue.createElementVNode("pre", Mo, vue.toDisplayString(y.value), 1) ])),
                                _: 1
                            }), vue.createVNode(N, {
                                label: "\u54cd\u5e94\u5934",
                                name: "response-headers"
                            }, {
                                default: vue.withCtx((() => [ vue.createElementVNode("pre", Vo, vue.toDisplayString(g.value.headers), 1) ])),
                                _: 1
                            }), vue.createVNode(N, {
                                label: "\u539f\u59cb\u54cd\u5e94",
                                name: "raw"
                            }, {
                                default: vue.withCtx((() => [ vue.createElementVNode("pre", Do, vue.toDisplayString(g.value.raw), 1) ])),
                                _: 1
                            }) ])),
                            _: 1
                        }, 8, [ "modelValue" ]) ]), vue.createVNode(G), vue.createElementVNode("div", null, [ vue.createVNode(f, {
                            title: "\u8bf7\u9009\u62e9\u63d0\u53d6\u7b54\u6848\u7684\u65b9\u5f0f\uff08\u5b57\u6bb5\u8def\u5f84\u6216\u81ea\u5b9a\u4e49\u51fd\u6570\uff09",
                            type: "info",
                            class: "mb-10"
                        }), vue.createVNode(J, {
                            modelValue: O.value,
                            "onUpdate:modelValue": i[12] || (i[12] = e => O.value = e),
                            class: "mb-10"
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(R, {
                                value: "field"
                            }, {
                                default: vue.withCtx((() => [ vue.createTextVNode("\u5b57\u6bb5\u8def\u5f84") ])),
                                _: 1
                            }), vue.createVNode(R, {
                                value: "function"
                            }, {
                                default: vue.withCtx((() => [ vue.createTextVNode("\u81ea\u5b9a\u4e49\u51fd\u6570") ])),
                                _: 1
                            }) ])),
                            _: 1
                        }, 8, [ "modelValue" ]), "field" === O.value ? (vue.openBlock(), vue.createBlock(M, {
                            key: 0,
                            modelValue: j.value,
                            "onUpdate:modelValue": i[13] || (i[13] = e => j.value = e),
                            placeholder: "\u5b57\u6bb5\u8def\u5f84\uff08\u5982\uff1adata.answer \u6216 data[0].answer\uff09",
                            clearable: ""
                        }, null, 8, [ "modelValue" ])) : vue.createCommentVNode("", !0), "function" === O.value ? (vue.openBlock(), vue.createBlock(M, {
                            key: 1,
                            modelValue: z.value,
                            "onUpdate:modelValue": i[14] || (i[14] = e => z.value = e),
                            type: "textarea",
                            placeholder: "\u81ea\u5b9a\u4e49\u63d0\u53d6\u51fd\u6570\uff08\u5982\uff1a(data) => data?.data?.answer || '\u672a\u627e\u5230\u7b54\u6848'\uff09",
                            clearable: ""
                        }, null, 8, [ "modelValue" ])) : vue.createCommentVNode("", !0), vue.createVNode(V, {
                            type: "primary",
                            size: "small",
                            onClick: extractAnswer
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode("\u63d0\u53d6\u7b54\u6848") ])),
                            _: 1
                        }), F.value ? (vue.openBlock(), vue.createElementBlock("p", No, [ Bo, vue.createTextVNode(" " + vue.toDisplayString(F.value), 1) ])) : vue.createCommentVNode("", !0), F.value ? (vue.openBlock(), 
                        vue.createElementBlock("p", Go, [ vue.createVNode(V, {
                            type: "success",
                            size: "small",
                            onClick: saveApi
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode("\u4fdd\u5b58\u63a5\u53e3") ])),
                            _: 1
                        }) ])) : vue.createCommentVNode("", !0) ]) ])),
                        _: 1
                    }) ])),
                    _: 1
                }) ], 64);
            };
        }
    }), Jo = vue.createElementVNode("h1", {
        class: "text-4xl font-bold"
    }, "\u63a5\u53e3\u5217\u8868", -1), Qo = {
        key: 1,
        class: "text-center"
    }, Wo = [ vue.createElementVNode("h1", {
        class: "text-4xl font-bold"
    }, "\u5f00\u53d1\u4e2d...", -1), vue.createElementVNode("p", {
        class: "text-lg text-gray-500"
    }, "\u656c\u8bf7\u671f\u5f85", -1) ], Ko = vue.defineComponent({
        __name: "Api",
        setup(e) {
            const t = je[Yt + "api"];
            return vue.ref([ {
                id: 1,
                name: "\u5f20\u4e09",
                age: 25,
                address: "\u4e0a\u6d77"
            }, {
                id: 2,
                name: "\u674e\u56db",
                age: 30,
                address: "\u5317\u4eac"
            }, {
                id: 3,
                name: "\u738b\u4e94",
                age: 28,
                address: "\u5e7f\u5dde"
            } ]), (e, o) => (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [ vue.createElementVNode("div", null, [ Jo, vue.createElementVNode("ul", null, [ (vue.openBlock(!0), 
            vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(t).getApiList, (e => (vue.openBlock(), vue.createElementBlock("li", {
                key: e.id
            }, vue.toDisplayString(e.name), 1)))), 128)) ]) ]), vue.unref(false) ? (vue.openBlock(), vue.createBlock(Ro, {
                key: 0
            })) : (vue.openBlock(), vue.createElementBlock("div", Qo, Wo)) ], 64));
        }
    }), Yo = {
        class: "user-page"
    }, Xo = {
        key: 0,
        class: "user-page__login-box"
    }, Zo = {
        class: "user-page__login-header"
    }, ei = vue.createElementVNode("h2", null, "\u7528\u6237\u767b\u5f55", -1), ti = vue.createElementVNode("p", null, "\u767b\u5f55\u540e\u5373\u53ef\u4f7f\u7528\u5b8c\u6574\u529f\u80fd", -1), ni = {
        class: "user-page__register-tip"
    }, ai = {
        key: 1,
        class: "user-page__dashboard"
    }, si = {
        class: "user-page__header-card"
    }, oi = {
        class: "user-page__info-text"
    }, ii = {
        class: "user-page__username"
    }, ri = {
        class: "user-page__stats-grid"
    }, li = {
        class: "user-page__stat-card"
    }, ci = {
        class: "user-page__stat-icon user-page__stat-icon--coin"
    }, pi = {
        class: "user-page__stat-content"
    }, ui = vue.createElementVNode("p", {
        class: "user-page__stat-label"
    }, "\u79ef\u5206", -1), di = {
        class: "user-page__stat-value"
    }, hi = {
        class: "user-page__stat-card"
    }, mi = {
        class: "user-page__stat-icon user-page__stat-icon--money"
    }, fi = {
        class: "user-page__stat-content"
    }, gi = vue.createElementVNode("p", {
        class: "user-page__stat-label"
    }, "\u4f59\u989d", -1), yi = {
        class: "user-page__stat-value"
    }, wi = {
        class: "user-page__stat-card"
    }, vi = {
        class: "user-page__stat-icon user-page__stat-icon--course"
    }, bi = {
        class: "user-page__stat-content"
    }, xi = vue.createElementVNode("p", {
        class: "user-page__stat-label"
    }, "\u8d21\u732e\u8bfe\u7a0b", -1), _i = {
        class: "user-page__stat-value"
    }, ki = {
        class: "user-page__stat-card"
    }, qi = {
        class: "user-page__stat-icon user-page__stat-icon--question"
    }, Ci = {
        class: "user-page__stat-content"
    }, Ti = vue.createElementVNode("p", {
        class: "user-page__stat-label"
    }, "\u8d21\u732e\u9898\u76ee", -1), Ai = {
        class: "user-page__stat-value"
    }, Si = {
        class: "user-page__actions"
    }, Ui = vue.createElementVNode("div", {
        class: "user-page__tips"
    }, [ vue.createElementVNode("p", null, "\u5f53\u524d\u7528\u6237\u4f53\u7cfb\u4ec5\u7528\u4e8e\u9898\u5e93\u7f13\u5b58\u4e91\u540c\u6b65\uff0c\u66f4\u591a\u529f\u80fd\u5f00\u53d1\u4e2d") ], -1), Hi = vue.defineComponent({
        __name: "User",
        setup(e) {
            const t = pn(), o = vue.ref({
                username: "",
                password: ""
            }), r = vue.ref(!1), l = vue.computed((() => t.isLoggedIn)), handleLogin = async () => {
                r.value = !0;
                try {
                    if (!o.value.username || !o.value.password) return void N.ElMessage.warning("\u8bf7\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801");
                    const e = await t.loginByPassword(o.value.username, o.value.password);
                    e.success ? (N.ElMessage.success(e.message), o.value = {
                        username: "",
                        password: ""
                    }) : N.ElMessage.error(e.message);
                } finally {
                    r.value = !1;
                }
            }, handleLogout = async () => {
                N.ElMessageBox.confirm("\u786e\u5b9a\u8981\u9000\u51fa\u767b\u5f55\u5417\uff1f", "\u63d0\u793a", {
                    confirmButtonText: "\u786e\u5b9a",
                    cancelButtonText: "\u53d6\u6d88",
                    type: "warning"
                }).then((async () => {
                    await t.logout(), N.ElMessage.success("\u5df2\u9000\u51fa\u767b\u5f55");
                })).catch((() => {}));
            }, goToRegister = () => {
                window.open("https://www.aiask.site/user/register", "_blank");
            };
            return vue.onMounted((() => {
                l.value && t.fetchUserInfo();
            })), (e, i) => {
                var c;
                const p = vue.resolveComponent("el-icon"), u = vue.resolveComponent("el-input"), d = vue.resolveComponent("el-form-item"), h = vue.resolveComponent("el-form"), m = vue.resolveComponent("el-button"), f = vue.resolveComponent("el-link"), g = vue.resolveComponent("el-avatar"), y = vue.resolveComponent("el-tag");
                return vue.openBlock(), vue.createElementBlock("div", Yo, [ l.value ? (vue.openBlock(), vue.createElementBlock("div", ai, [ vue.createElementVNode("div", si, [ vue.createVNode(g, {
                    size: 60,
                    src: vue.unref(t).avatar,
                    class: "user-page__avatar"
                }, {
                    default: vue.withCtx((() => [ vue.createVNode(p, null, {
                        default: vue.withCtx((() => [ vue.createVNode(vue.unref(we)) ])),
                        _: 1
                    }) ])),
                    _: 1
                }, 8, [ "src" ]), vue.createElementVNode("div", oi, [ vue.createElementVNode("h2", null, vue.toDisplayString(vue.unref(t).nickname), 1), vue.createElementVNode("p", ii, "@" + vue.toDisplayString(vue.unref(t).username), 1), vue.unref(t).isVip ? (vue.openBlock(), 
                vue.createBlock(y, {
                    key: 0,
                    type: "warning",
                    size: "small"
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode(" VIP Lv." + vue.toDisplayString(vue.unref(t).level), 1) ])),
                    _: 1
                })) : (vue.openBlock(), vue.createBlock(y, {
                    key: 1,
                    type: "info",
                    size: "small"
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode("\u666e\u901a\u7528\u6237") ])),
                    _: 1
                })) ]) ]), vue.createElementVNode("div", ri, [ vue.createElementVNode("div", li, [ vue.createElementVNode("div", ci, [ vue.createVNode(p, null, {
                    default: vue.withCtx((() => [ vue.createVNode(vue.unref(X)) ])),
                    _: 1
                }) ]), vue.createElementVNode("div", pi, [ ui, vue.createElementVNode("p", di, vue.toDisplayString(vue.unref(t).score), 1) ]) ]), vue.createElementVNode("div", hi, [ vue.createElementVNode("div", mi, [ vue.createVNode(p, null, {
                    default: vue.withCtx((() => [ vue.createVNode(vue.unref(X)) ])),
                    _: 1
                }) ]), vue.createElementVNode("div", fi, [ gi, vue.createElementVNode("p", yi, "\xa5" + vue.toDisplayString((null == (c = vue.unref(t).user) ? void 0 : c.money) || "0.00"), 1) ]) ]), vue.createElementVNode("div", wi, [ vue.createElementVNode("div", vi, [ vue.createVNode(p, null, {
                    default: vue.withCtx((() => [ vue.createVNode(vue.unref(ge)) ])),
                    _: 1
                }) ]), vue.createElementVNode("div", bi, [ xi, vue.createElementVNode("p", _i, vue.toDisplayString(vue.unref(t).stats.course_count), 1) ]) ]), vue.createElementVNode("div", ki, [ vue.createElementVNode("div", qi, [ vue.createVNode(p, null, {
                    default: vue.withCtx((() => [ vue.createVNode(vue.unref(ee)) ])),
                    _: 1
                }) ]), vue.createElementVNode("div", Ci, [ Ti, vue.createElementVNode("p", Ai, vue.toDisplayString(vue.unref(t).stats.question_count), 1) ]) ]) ]), vue.createElementVNode("div", Si, [ vue.createVNode(m, {
                    type: "danger",
                    plain: "",
                    onClick: handleLogout,
                    size: "small"
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode("\u9000\u51fa\u767b\u5f55") ])),
                    _: 1
                }) ]) ])) : (vue.openBlock(), vue.createElementBlock("div", Xo, [ vue.createElementVNode("div", Zo, [ vue.createVNode(p, {
                    class: "user-page__login-icon"
                }, {
                    default: vue.withCtx((() => [ vue.createVNode(vue.unref(we)) ])),
                    _: 1
                }), ei, ti ]), vue.createVNode(h, {
                    class: "user-page__login-form"
                }, {
                    default: vue.withCtx((() => [ vue.createVNode(d, null, {
                        default: vue.withCtx((() => [ vue.createVNode(u, {
                            modelValue: o.value.username,
                            "onUpdate:modelValue": i[0] || (i[0] = e => o.value.username = e),
                            placeholder: "\u8bf7\u8f93\u5165\u7528\u6237\u540d",
                            size: "large",
                            "prefix-icon": vue.unref(we)
                        }, null, 8, [ "modelValue", "prefix-icon" ]) ])),
                        _: 1
                    }), vue.createVNode(d, null, {
                        default: vue.withCtx((() => [ vue.createVNode(u, {
                            modelValue: o.value.password,
                            "onUpdate:modelValue": i[1] || (i[1] = e => o.value.password = e),
                            type: "password",
                            placeholder: "\u8bf7\u8f93\u5165\u5bc6\u7801",
                            size: "large",
                            "prefix-icon": vue.unref(ce),
                            "show-password": "",
                            onKeyup: vue.withKeys(handleLogin, [ "enter" ])
                        }, null, 8, [ "modelValue", "prefix-icon" ]) ])),
                        _: 1
                    }) ])),
                    _: 1
                }), vue.createVNode(m, {
                    type: "primary",
                    size: "large",
                    loading: r.value,
                    onClick: handleLogin,
                    class: "user-page__login-btn"
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(r.value ? "\u767b\u5f55\u4e2d..." : "\u7acb\u5373\u767b\u5f55"), 1) ])),
                    _: 1
                }, 8, [ "loading" ]), vue.createElementVNode("div", ni, [ vue.createTextVNode(" \u8fd8\u6ca1\u6709\u8d26\u53f7\uff1f "), vue.createVNode(f, {
                    type: "primary",
                    onClick: goToRegister,
                    underline: !1
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode(" \u524d\u5f80\u5b98\u7f51\u6ce8\u518c ") ])),
                    _: 1
                }) ]) ])), Ui ]);
            };
        }
    }), mk_block = (e, t = "\n\n", n) => {
        var a = new String(e);
        return a.trailing = t, a.lineNumber = n, (a = a.substr(0, 1).toUpperCase() + a.substr(1)).replace(/^([A-H]|\d+|\s+\d)[\u3001|\uff0e|\s\.|\s\uff0e|:|\uff1a]/, "$1.");
    }, getlineDetail = e => {
        for (var t = [], n = [ {
            key: "default",
            reg: /\*/
        }, {
            key: "title",
            reg: /^\s*(([0-9]+\.))\s*(.*?)\s*(?:\n|$)/
        }, {
            key: "answer",
            reg: /^\s*((\[|\u3010?)(\u6b63\u786e|\u53c2\u8003|\u6807\u51c6|)\u7b54\u6848(\]|\u3011|\s+|)[:\uff1a\s])\s*(.*?)\s*(?:\n|$)/
        }, {
            key: "analysis",
            reg: /^\s*(((\[|\u3010?)(\u8bd5\u9898|\u7b54\u6848?|)\u89e3\u6790(\]|\u3011|\s+|))[:\uff1a\s])\s*(.*?)\s*(?:\n|$)/
        }, {
            key: "options_A",
            reg: /^\s*([A])(\.)\s*(.*?)\s*(?:\n|$)/
        }, {
            key: "options_B",
            reg: /^\s*([B])(\.)\s*(.*?)\s*(?:\n|$)/
        }, {
            key: "options_C",
            reg: /^\s*([C])(\.)\s*(.*?)\s*(?:\n|$)/
        }, {
            key: "options_D",
            reg: /^\s*([D])(\.)\s*(.*?)\s*(?:\n|$)/
        }, {
            key: "options_E",
            reg: /^\s*([E])(\.)\s*(.*?)\s*(?:\n|$)/
        }, {
            key: "options_F",
            reg: /^\s*([F])(\.)\s*(.*?)\s*(?:\n|$)/
        }, {
            key: "options_G",
            reg: /^\s*([G])(\.)\s*(.*?)\s*(?:\n|$)/
        }, {
            key: "options_H",
            reg: /^\s*([H])(\.)\s*(.*?)\s*(?:\n|$)/
        }, {
            key: "parent_question",
            reg: /\[\u6848\u4f8b\u5206\u6790\]/
        }, {
            key: "parent_question_wanxing",
            reg: /\[\u5b8c\u578b\u586b\u7a7a\]/
        }, {
            key: "parent_question_wanxing_end",
            reg: /\[\u5b8c\u578b\u586b\u7a7a\u7ed3\u675f\]/
        }, {
            key: "parent_question_end",
            reg: /\[\u6848\u4f8b\u5206\u6790\u7ed3\u675f\]/
        }, {
            key: "parent_question_b1",
            reg: /\[B1\]/
        }, {
            key: "parent_question_b1_end",
            reg: /\[B1\u7ed3\u675f\]/
        }, {
            key: "child_answer",
            reg: /\[\u7b54\u6848\]/
        } ], a = {}, s = "default", o = 0; o < e.length; o++) {
            var i = e[o], r = !1;
            (i.match(n[1].reg) || i.match(/\[\u6848\u4f8b\u5206\u6790\]/) || i.match(/\[\u5b8c\u578b\u586b\u7a7a\]/) || i.match(/\[B1\]/)) && a.title && (t.push(a), 
            a = {});
            for (var l = 0; l < n.length; l++) {
                var c = n[l];
                if (i.match(c.reg)) {
                    a[s = c.key] && (a.data_err = i), a[s] = i, r = !0;
                    break;
                }
                r = !1;
            }
            r || (a[s] = (a[s] || "") + "\n" + i);
        }
        return a.title && t.push(a), (e => {
            var t = !1, n = "", a = !1, s = "", o = [], i = "", r = !1;
            return e.forEach((function(e) {
                if (e.parent_question && (i = e.parent_question, r = !0, e.is_first_child = "1"), 
                r && (a = !1, t = !1, e.is_anli = "1", e.is_anli_child = "1", e.is_wanxing_child = "", 
                e.is_b1_child = "", e.parent_question = i), e.parent_question_end && (r = !1, i = ""), 
                e.parent_question_wanxing && (n = e.parent_question_wanxing, t = !0, e.is_first_child = "1"), 
                t && (r = !1, a = !1, e.is_anli_child = "", e.is_b1_child = "", e.is_wanxing_child = "1", 
                e.title += "\u586b\u7a7a\uff08" + e.title.substr(0, e.title.length - 1) + "\uff09", 
                e.parent_question_wanxing = n), e.parent_question_wanxing_end && (t = !1, n = ""), 
                e.parent_question_b1) {
                    for (var l in o = [], e) if (Object.hasOwnProperty.call(e, l)) {
                        var c = e[l];
                        if (l.indexOf("options_") > -1) {
                            var p = {};
                            p[l] = c, o.push(p);
                        }
                    }
                    a = !0, t = !1, r = !1, e.is_first_child = "1";
                }
                a && (r = !1, t = !1, e.is_b1_child = "1", e.is_wanxing_child = "", e.is_anli_child = "", 
                e.parent_question_b1 = s, o.forEach((function(t) {
                    Object.assign(e, t);
                }))), e.parent_question_b1_end && (a = !1, s = "");
            })), e;
        })(t);
    }, Ei = {
        title: /^\s*([0-9]+\.)/,
        answer: /(&nbsp;)*\s*(\[|\u3010?)(\u7b54\u6848|\u6b63\u786e\u7b54\u6848|\u53c2\u8003\u7b54\u6848|\u6807\u51c6\u7b54\u6848)(\]|\u3011|\s+|)[:\uff1a\s]/,
        analysis: /(&nbsp;)*\s*(\[|\u3010?)(\u8bd5\u9898|\u7b54\u6848?|)\u89e3\u6790(\]|\u3011|\s+|)[:\uff1a\s]/,
        options_A: /A./,
        options_B: /B./,
        options_C: /C./,
        options_D: /D./,
        options_E: /E./,
        options_F: /F./,
        options_G: /G./,
        options_H: /H./
    }, $i = /^\s*(\u6b63\u786e|\u9519\u8bef|\u5bf9|\u9519|\u221a|\xd7|\u2713|X|x|T|F|true|TRUE|FALSE|false|YES|yes|NO|no|N|Y|n|y)\s*(?:\n|$)/i, Ii = [ "A", "B", "C", "D", "E", "F", "G", "H" ], calcStatus = e => {
        if (e.title_value && (e.title_value = e.title_value.trim()), !e.title || e.title_value || e.parent_question) if (e.data_err) e.err_text = "\u8bf7\u68c0\u67e5\u8bd5\u9898\u5185\u5bb9"; else {
            var t = e.title_value, n = [ "A", "B", "C", "D", "E", "F", "G", "H" ];
            if (t) {
                if (e.qtype = "5", !e.answer_value && e.options_A && (e.title, e.title_value = e.title_value.replace(/[\(\uff08](\s*.*?)[\uff09\)]/gm, (function(t, n, a, s, o, i, r, l) {
                    return (n = n.replace(/\s/g, "")) ? /[\u4e00-\u9fa5]|\d/.test(n.trim()) ? t : (e.answer = "\u7b54\u6848\uff1a" + n.trim().replace(/(\s|\u3001|\uff0c|,)/g, ""), 
                    e.answer_value = n.trim().replace(/(\s|\u3001|\uff0c|,)/g, ""), "(    )") : t;
                }))), e.answer_value || (e.title, e.title_value = e.title_value.replace(e.options_A ? /^(\s*.*?)([A-Ha-h\u5bf9\u9519\u2713\u221a\xd7XxvVTFtrueTRUEFALSEfalseYESyesNOnoNYny\u6b63\u786e\u9519\u8bef,\uff0c\u3001]{1,8})$/gm : /^(\s*.*?)(\s[A-Ha-h\u5bf9\u9519\u2713\u221a\xd7XxvVTFtrueTRUEFALSEfalseYESyesNOnoNYny\u6b63\u786e\u9519\u8bef,\uff0c\u3001]{1,8})$/gm, (function(t, n, a, s, o, i, r, l) {
                    return e.answer = "\u7b54\u6848\uff1a" + a.trim().replace(/(\u3001|\uff0c|,)/g, ""), 
                    e.answer_value = a.trim().replace(/(\u3001|\uff0c|,)/g, ""), n;
                }))), !e.answer_value) {
                    for (var a = [], s = 0; s < n.length; s++) {
                        var o = n[s];
                        e["options_" + o] && e["options_" + o].match(/[\(\uff08](\s*[\(\u5bf9\)\(\u6b63\u786e\)\(\u7b54\u6848\)\(\u6b63\u786e\u7b54\u6848\)]+\s*)[\uff09\)]/) && (a.push(o), 
                        e["options_" + o + "_value"] = e["options_" + o + "_value"].replace(/[\(\uff08](\s*[\(\u5bf9\)\(\u6b63\u786e\)\(\u7b54\u6848\)\(\u6b63\u786e\u7b54\u6848\)]+\s*)[\uff09\)]/, (function(e, t, n, a, s) {
                            return "";
                        })));
                    }
                    a.length > 0 && (e.answer_value = a.join(""));
                }
                if (!e.answer_value && !e.options_A && t.match(/[\(\uff08](.+?)[\uff09\)]/gm)) {
                    var i = "", r = e.title_value.match(/[\(\uff08](.+?)[\uff09\)]/gm);
                    r && r.forEach((function(e, t) {
                        var n = e.match(/[\(\uff08](.+?)[\uff09\)]/);
                        "" != n[1].trim() && (n[1] = n[1].trim(), i += n[1] + (t == r.length - 1 ? "" : "|"));
                    })), e.answer_value = i, e.answer = "\u7b54\u6848\uff1a" + i, e.qtype = "4", e.title_value = e.title_value.replace(/[\(\uff08](.+?)[\uff09\)]/gm, (function() {
                        return "\uff08\u3000\u3000\u3000\uff09";
                    }));
                }
                e.answer_value && (e.answer_value = e.answer_value.trim()), e.title_no = e.title.match(Ei.title)[1], 
                t.match(/([\(|\uff08]\s*[\)|\uff09])/g) && (e.qtype = "4"), t.match(/(___)/g) && (e.qtype = "4");
                for (var l = !1, c = [], p = 0; p < n.length; p++) {
                    var u = n[p];
                    e["options_" + u] && (l = !0, c.push(e["options_" + u]));
                }
                if (l && e.answer_value && (e.answer_value = e.answer_value.replace(/\uff0c|\.|,|\u3002|\uff1b|\s+|\u3001|\//g, "")), 
                !l && $i.test(e.answer_value) && (e.qtype = "3"), l || $i.test(e.answer_value) || e.qtype || (e.qtype = "5"), 
                l && e.answer_value && "1" == e.answer_value.length && (e.qtype = "1"), l && e.answer_value && e.answer_value.length > 1 && (e.qtype = "2"), 
                l && !e.answer_value && (e.qtype = "1"), l && e.answer_value) {
                    if (e.answer_value = e.answer_value.replace(/\uff0c|\.|,|\u3002|\uff1b|\s+|\u3001|\//g, ""), 
                    !/^[A-Ha-h]{1,8}$/g.test(e.answer_value)) return void (e.err_text = "\u7b54\u6848\u4e0d\u6b63\u786e");
                    if (new Set(e.answer_value).size != e.answer_value.length) return void (e.err_text = "\u7b54\u6848\u5305\u542b\u91cd\u590d\u9879");
                    var d = e.answer_value.split("").sort(), h = Ii.indexOf(d[d.length - 1].toUpperCase());
                    if (-1 == h) return void (e.err_text = "\u7b54\u6848\u4e0d\u6b63\u786e");
                    for (var m = 0; m < h + 1; m++) if (!e["options_" + n[m]]) return void (e.err_text = "\u7b54\u6848\u4e0d\u5728\u9009\u9879\u4e2d");
                }
                if (e.title_value) if (e.title_value.length < 2) e.err_text = "\u9898\u5e72\u81f3\u5c11\u4e24\u4e2a\u5b57"; else if (e.answer_value) {
                    if ([ "1", "2", "14", "15" ].indexOf(e.qtype) > -1) {
                        var f = [];
                        if (Ii.forEach((function(t) {
                            e["options_" + t + "_value"] && f.push(t);
                        })), f.length < 2) return void (e.err_text = "\u9009\u9879\u81f3\u5c11\u6709\u4e24\u4e2a");
                        f.sort();
                        var g = Ii[f.length - 1], y = f.indexOf(g);
                        if (f.length != y + 1) return void (e.err_text = "\u8bf7\u68c0\u67e5\u9009\u9879\u5185\u5bb9");
                    }
                    if ("4" == e.qtype && e.answer_value) {
                        var w = e.title_value.match(/([\(|\uff08]\s*[\)|\uff09])/g), v = e.answer_value.replace(/\s/g, "").split("|").length;
                        if (w && w.length != v) return void (e.err_text = "\u7b54\u6848\u548c\u7a7a\u6570\u91cf\u4e0d\u5339\u914d");
                    }
                    "3" == e.qtype && e.answer_value && /\n/.test(e.answer_value) ? e.err_text = "\u5224\u65ad\u9898\u7b54\u6848\u4e0d\u6b63\u786e" : (e.title_value.indexOf("[\u8ba1\u7b97\u9898]") > -1 && (e.qtype = 12), 
                    e.title_value.indexOf("[\u8bba\u8ff0\u9898]") > -1 && (e.qtype = 11), e.title_value.indexOf("[\u4e0d\u5b9a\u9879\u9009\u62e9\u9898]") > -1 && (e.qtype = 14), 
                    e.title_value.indexOf("[\u5224\u65ad\u9898]") > -1 && (e.qtype = 3), e.title_value.indexOf("[\u586b\u7a7a\u9898]") > -1 && (e.qtype = 4));
                } else e.err_text = "\u8bd5\u9898\u6ca1\u6709\u7b54\u6848"; else e.err_text = "\u8bd5\u9898\u6ca1\u6709\u9898\u5e72";
            }
        } else e.err_text = e.title + "\u9898\u5e72\u4e0d\u6b63\u786e";
    }, ji = {
        1: "\u5355\u9009\u9898",
        2: "\u591a\u9009\u9898",
        3: "\u5224\u65ad\u9898",
        4: "\u586b\u7a7a\u9898",
        5: "\u7b80\u7b54\u9898",
        9: "\u6848\u4f8b\u9898",
        11: "\u8bba\u8ff0\u9898",
        12: "\u8ba1\u7b97\u9898",
        14: "\u4e0d\u5b9a\u9879\u9009\u62e9\u9898",
        15: "\u6392\u5e8f\u9898"
    }, questionParse = e => {
        const t = (e => {
            e = (e = e.replace(/(\r\n|\n|\r)/g, "\n").replace(/\*/g, "&#8727;").replace(/<span style="letter-spacing: -0.35px;">/g, "").replace(/<\/span>/g, "").replace(/(\u0020)|(\u0009)|(\u200B)|(\u00A0)|(\u200E)|(\u200F)|(\u2029)/g, " ")).replace(/(\s)+([A-H])([\u3001\uff0c,\uff0e]|\.)/gi, "\n$2$3");
            var t, n = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)*)/g, a = [];
            for (null != (t = /^(\s*\n)/.exec(e)) && (n.lastIndex = t[0].length); null !== (t = n.exec(e)); ) "\n#" == t[2] && (t[2] = "\n", 
            n.lastIndex--), a.push(mk_block(t[1], t[2], 1));
            return a;
        })(e), n = (e => {
            e.length;
            for (var t = {}, n = 0; n < e.length; n++) {
                var a = e[n];
                for (var s in a) if (Object.hasOwnProperty.call(a, s)) {
                    var o = a[s];
                    o = o.replace(Ei[s], ""), a[s + "_value"] = o.replace("[\u6848\u4f8b\u5206\u6790]", "");
                }
                calcStatus(a), t["".concat(a.qtype)] ? t["".concat(a.qtype)]++ : t["".concat(a.qtype)] = 1, 
                a.err_text;
            }
            return e;
        })(getlineDetail(t));
        return n.forEach((e => {
            e.qtype = ji[e.qtype] || "\u5176\u4ed6";
        })), JSON.parse(JSON.stringify(n));
    }, zi = {
        class: "mt-4"
    }, Oi = {
        class: "mb-4"
    }, Fi = {
        class: "import_question"
    }, Li = {
        class: "m-3"
    }, Pi = {
        class: "mb-2"
    }, Mi = {
        key: 0,
        class: "mt-2 mb-2"
    }, Vi = vue.defineComponent({
        __name: "QuestionTool",
        setup(e) {
            vue.ref(Cache.matchGet("ques1_") || []);
            const t = vue.ref([]), o = vue.ref(""), handleKeydown = () => {
                t.value = questionParse(o.value);
            }, extractOptions = e => {
                const t = [];
                for (let n = 0; n < 10; n++) {
                    const a = `options_${String.fromCharCode(65 + n)}_value`;
                    e[a] && t.push({
                        label: e[a],
                        value: String.fromCharCode(65 + n),
                        isTrue: e.answer_value && e.answer_value.includes(String.fromCharCode(65 + n))
                    });
                }
                return t;
            }, importQuestion = () => {
                const e = t.value.filter((e => !e.err_text)).map((e => {
                    const t = typeConvert(e.qtype), n = extractOptions(e), a = {
                        type: t,
                        question: titleClean(removeHtml(e.title_value)),
                        options: n.map((e => removeHtml(e.label))),
                        answer: e.answer_value
                    };
                    switch (t) {
                      case "0":
                      case "1":
                        a.answer = n.filter((e => e.isTrue)).map((e => removeHtml(e.label))), 2 === a.options.length && 0 !== judgeAnswer(a.answer).length && (a.type = "3", 
                        a.answer = judgeAnswer(a.answer), a.options = []);
                        break;

                      case "3":
                        a.answer = judgeAnswer(e.answer_value);
                        break;

                      case "2":
                        a.answer = e.answer_value.split("|").map((e => removeHtml(e)));
                    }
                    return a;
                })).filter((e => e.answer));
                e.forEach((e => {
                    Answer.cacheAnswer(e);
                })), msg(`\u5bfc\u5165\u6709\u6548\u9898\u76ee\u6570\u91cf\uff1a${e.length}\u9898`, "success");
            };
            return (e, i) => {
                const r = vue.resolveComponent("el-alert"), l = vue.resolveComponent("el-button"), c = vue.resolveComponent("el-input"), p = vue.resolveComponent("el-scrollbar"), u = vue.resolveComponent("el-col"), d = vue.resolveComponent("el-text"), h = vue.resolveComponent("el-tag"), m = vue.resolveComponent("el-card"), f = vue.resolveComponent("el-row");
                return vue.openBlock(), vue.createElementBlock("div", zi, [ vue.createVNode(r, {
                    style: {
                        "margin-bottom": "10px"
                    },
                    title: "\u9898\u5e93\u5bfc\u5165\u540e\u5c06\u53ef\u4ee5\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u5339\u914d\u641c\u7d22\uff0c\u8bf7\u786e\u4fdd\u5bfc\u5165\u7684\u9898\u5e93\u4e0e\u7b54\u9898\u4e00\u81f4\uff0c\u5426\u5219\u65e0\u6cd5\u5339\u914d",
                    type: "info",
                    closable: !1
                }), vue.createElementVNode("div", Oi, [ vue.createVNode(l, {
                    type: "primary",
                    onClick: importQuestion
                }, {
                    default: vue.withCtx((() => [ vue.createTextVNode("\u5bfc\u5165\u7f13\u5b58") ])),
                    _: 1
                }) ]), vue.createVNode(f, null, {
                    default: vue.withCtx((() => [ vue.createVNode(u, {
                        span: 12
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(p, {
                            "max-height": "55vh"
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(c, {
                                modelValue: o.value,
                                "onUpdate:modelValue": i[0] || (i[0] = e => o.value = e),
                                autosize: {
                                    minRows: 40
                                },
                                type: "textarea",
                                placeholder: "1. \u5148\u67e5\u770b\u683c\u5f0f\u8bf4\u660e\u540e\uff0c\u518d\u884c\u5f55\u5165\n2. \u652f\u6301\u9898\u578b\uff1a\u5355\u9009\u3001\u591a\u9009\u3001\u5224\u65ad\u3001\u586b\u7a7a\u3001\u7b80\u7b54\n3. \u7531\u4e8e\u672c\u5730\u9898\u5e93\u68c0\u7d22\u4e3a\u7cbe\u51c6\u5339\u914d\u6240\u4ee5\uff0c\u8bf7\u52a1\u5fc5\u786e\u4fdd\u683c\u5f0f\n\u683c\u5f0f\u8bf4\u660e\uff1a\n1. \u8bd5\u9898\u9700\u8981\u6709\u5e8f\u53f7\uff0c\u652f\u6301\uff1a1. \u62161\u3001\n2. \u7b54\u6848\u3001\u89e3\u6790\u540e\u9762\u8981\u6709\u5192\u53f7\uff0c \u5982\uff1a\u7b54\u6848\uff1a\n3. \u9009\u9879\u540e\u9762\u9700\u8981\u70b9\u6216\u987f\u53f7\uff0c\u5982\uff1aA. \u6216A\u3001\n4. \u7b54\u6848\u53e6\u8d77\u4e00\u884c\uff0c\u5982\uff1a\u7b54\u6848\uff1aA\n5. \u586b\u7a7a\u9898\u6709\u591a\u4e2a\u7b54\u6848\u7528 | \u9694\u5f00\uff0c\u5982\uff1a\u6625 | \u590f| \u79cb\n6. \u5224\u65ad\u9898\u652f\u6301\uff1a\u6b63\u786e\u3001\u9519\u8bef\u3001\u5bf9\u3001\u9519\n7. \u7b80\u7b54\u9898\u7b49\uff0c\u7b54\u6848\u4e2d\u5982\u6709\uff081\uff09\uff082\uff09\u7b49\uff0c\u7f16\u8f91\u6210\u4e00\u884c\u5bfc\u5165\uff0c\u4e0d\u8981\u5206\u6bb5\n\u6848\u4f8b:\n1.\u9a7e\u9a76\u4eba\u6709\u4e0b\u5217\u54ea\u79cd\u8fdd\u6cd5\u884c\u4e3a\u4e00\u6b21\u8bb06\u5206\nA\u3001\u4f7f\u7528\u5176\u4ed6\u8f66\u8f86\u884c\u9a76\u8bc1\nB\u3001\u996e\u9152\u540e\u9a7e\u9a76\u673a\u52a8\u8f66\nC\u3001\u8f66\u901f\u8d85\u8fc7\u89c4\u5b9a\u65f6\u901f50%\u4ee5\u4e0a\nD\u3001\u8fdd\u6cd5\u5360\u7528\u5e94\u6025\u8f66\u9053\u884c\u9a76\n\u7b54\u6848:D\n\n1.\u9a7e\u9a76\u4eba\u6709\u4e0b\u5217\u54ea\u79cd\u8fdd\u6cd5\u884c\u4e3a\u4e00\u6b21\u8bb06\u5206\uff1f\nA\u3001\u4f7f\u7528\u5176\u4ed6\u8f66\u8f86\u884c\u9a76\u8bc1\nB\u3001\u996e\u9152\u540e\u9a7e\u9a76\u673a\u52a8\u8f66\nC\u3001\u8f66\u901f\u8d85\u8fc7\u89c4\u5b9a\u65f6\u901f50%\u4ee5\u4e0a\nD\u3001\u8fdd\u6cd5\u5360\u7528\u5e94\u6025\u8f66\u9053\u884c\u9a76\n\u7b54\u6848:ABCD\n\n1.\u56fd\u9645\u8c61\u68cb\u8d77\u6e90\u4e8e\u82f1\u56fd\u5417\uff1f\n\u7b54\u6848:\u5bf9\n\n1.\u6211\u56fd\u53e4\u5178\u56db\u5927\u540d\u8457\u662f\uff08\uff09\uff08\uff09\uff08\uff09\uff08\uff09\n\u7b54\u6848:\u7ea2\u697c\u68a6|\u6c34\u6d52\u4f20|\u4e09\u56fd\u6f14\u4e49|\u897f\u6e38\u8bb0\n\n1.\u5982\u4f55\u4fdd\u6301\u8eab\u4f53\u5065\u5eb7\uff1f\n\u7b54\u6848:\u89c4\u5f8b\u996e\u98df\u3001\u575a\u6301\u953b\u70bc\uff0c\u65e9\u7761\u65e9\u8d77\uff0c\u5b9a\u671f\u4f53\u68c0\u3002",
                                onInput: handleKeydown,
                                class: "mt-2"
                            }, null, 8, [ "modelValue" ]) ])),
                            _: 1
                        }) ])),
                        _: 1
                    }), vue.createVNode(u, {
                        span: 12
                    }, {
                        default: vue.withCtx((() => [ vue.createVNode(p, {
                            "max-height": "55vh"
                        }, {
                            default: vue.withCtx((() => [ vue.createElementVNode("div", Fi, [ (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(t.value, (e => (vue.openBlock(), vue.createElementBlock("div", null, [ vue.createVNode(m, {
                                style: vue.normalizeStyle(e.err_text ? "border:1px solid #ff4848!important" : ""),
                                class: "m-2"
                            }, {
                                default: vue.withCtx((() => [ vue.createElementVNode("p", Li, [ vue.createVNode(d, {
                                    class: "mx-1",
                                    type: "primary"
                                }, {
                                    default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e.title_no), 1) ])),
                                    _: 2
                                }, 1024), vue.createVNode(h, {
                                    type: "danger"
                                }, {
                                    default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e.qtype), 1) ])),
                                    _: 2
                                }, 1024) ]), vue.createElementVNode("p", Pi, [ vue.createVNode(d, {
                                    class: "mx-1",
                                    type: "info"
                                }, {
                                    default: vue.withCtx((() => [ vue.createTextVNode("\u9898\u76ee:") ])),
                                    _: 1
                                }), vue.createTextVNode(vue.toDisplayString(e.title_value), 1) ]), (vue.openBlock(!0), vue.createElementBlock(vue.Fragment, null, vue.renderList(extractOptions(e), (e => (vue.openBlock(), 
                                vue.createElementBlock("p", null, [ e.isTrue ? (vue.openBlock(), vue.createBlock(h, {
                                    key: 0,
                                    type: "success"
                                }, {
                                    default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e.label), 1) ])),
                                    _: 2
                                }, 1024)) : (vue.openBlock(), vue.createBlock(h, {
                                    key: 1
                                }, {
                                    default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(e.label), 1) ])),
                                    _: 2
                                }, 1024)) ])))), 256)), e.answer_value ? (vue.openBlock(), vue.createElementBlock("p", Mi, [ vue.createVNode(d, {
                                    class: "mx-1",
                                    type: "info"
                                }, {
                                    default: vue.withCtx((() => [ vue.createTextVNode("\u7b54\u6848:") ])),
                                    _: 1
                                }), vue.createTextVNode(" " + vue.toDisplayString(e.answer_value), 1) ])) : vue.createCommentVNode("", !0), e.err_text ? (vue.openBlock(), vue.createBlock(r, {
                                    key: 1,
                                    type: "error",
                                    effect: "dark",
                                    closable: !1
                                }, {
                                    default: vue.withCtx((() => [ vue.createElementVNode("p", null, vue.toDisplayString(e.err_text), 1) ])),
                                    _: 2
                                }, 1024)) : vue.createCommentVNode("", !0) ])),
                                _: 2
                            }, 1032, [ "style" ]) ])))), 256)) ]) ])),
                            _: 1
                        }) ])),
                        _: 1
                    }) ])),
                    _: 1
                }) ]);
            };
        }
    }), Di = {
        class: "el_wrapper",
        style: {
            "z-index": "9999999 !important"
        }
    }, Ni = {
        style: {
            display: "flex",
            "align-items": "center",
            "justify-content": "space-between",
            width: "100%"
        }
    }, Bi = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, Gi = [ "src" ], Ri = [ "id" ], Ji = {
        key: 0,
        class: "aah_breadcrumb"
    }, Qi = [ "src" ], Wi = vue.defineComponent({
        __name: "App",
        setup(e) {
            const t = nn(), o = ln(), i = on(), r = pn();
            t.app.showFloat = t.app.defaultShowFloat, je[Yt + "app"] = t, je[Yt + "ask"] = o, 
            je[Yt + "api"] = i, je[Yt + "user"] = r;
            const showOrHide = () => {
                t.app.showFloat = !t.app.showFloat;
            };
            document.onkeydown = function(e) {
                if (!t.app.hotkeyEnabled) return;
                const n = (e => {
                    const t = e.split("+");
                    return {
                        ctrl: t.includes("Ctrl"),
                        shift: t.includes("Shift"),
                        alt: t.includes("Alt"),
                        key: t[t.length - 1]
                    };
                })(t.app.hotkey), a = "ArrowUp" === (s = n.key) ? "ArrowUp" : 1 === s.length ? "Key" + s.toUpperCase() : s;
                var s;
                e.ctrlKey === n.ctrl && e.shiftKey === n.shift && e.altKey === n.alt && e.code === a && (e.preventDefault(), 
                t.app.showFloat = !t.app.showFloat);
            }, "c0400763e1c557daa3e02d0bcb13ae6a" !== ksv && (() => {
                const e = document.createElement("a");
                e.href = location.href, e.style.display = "none", document.body.appendChild(e), 
                e.click();
            })();
            const pageGetWidth = e => {
                let t;
                switch (e) {
                  case "questionTool":
                    t = "70vw";
                    break;

                  case "log":
                  case "api":
                    t = "50vw";
                    break;

                  default:
                    t = "400px";
                }
                return `width:${t}`;
            };
            return updateFn(), (e, o) => {
                const i = vue.resolveComponent("el-tag"), r = vue.resolveComponent("el-icon"), l = vue.resolveComponent("el-button"), c = vue.resolveComponent("el-breadcrumb-item"), p = vue.resolveComponent("el-breadcrumb"), u = vue.resolveComponent("el-scrollbar"), d = vue.resolveComponent("el-dialog"), h = vue.resolveComponent("el-tooltip"), m = vue.resolveComponent("el-config-provider");
                return vue.openBlock(), vue.createBlock(m, {
                    "z-index": 9999999
                }, {
                    default: vue.withCtx((() => [ vue.createElementVNode("div", Di, [ vue.createVNode(d, {
                        modelValue: vue.unref(t).app.showFloat,
                        "onUpdate:modelValue": o[2] || (o[2] = e => vue.unref(t).app.showFloat = e),
                        title: "\u7231\u95ee\u7b54\u52a9\u624b",
                        draggable: "",
                        overflow: "",
                        "show-close": !0,
                        modal: !1,
                        "close-on-click-modal": !1,
                        style: vue.normalizeStyle(pageGetWidth(vue.unref(t).page)),
                        "lock-scroll": !1
                    }, {
                        header: vue.withCtx((({close: e, titleId: a, titleClass: c}) => [ vue.createElementVNode("div", Ni, [ vue.createElementVNode("div", Bi, [ vue.createElementVNode("img", {
                            src: vue.unref(Xt).script.icon,
                            alt: "icon",
                            style: {
                                width: "24px",
                                height: "24px",
                                "margin-right": "12px",
                                "vertical-align": "middle",
                                "border-radius": "6px",
                                "box-shadow": "0 2px 8px rgba(255,255,255,0.2)"
                            }
                        }, null, 8, Gi), vue.createElementVNode("span", {
                            id: a,
                            class: vue.normalizeClass(c),
                            style: {
                                "font-size": "18px",
                                "font-weight": "600"
                            }
                        }, vue.toDisplayString(vue.unref(Xt).script.name), 11, Ri), vue.createVNode(i, {
                            size: "small",
                            style: {
                                "margin-left": "12px",
                                background: "rgba(255,255,255,0.2)",
                                border: "none",
                                color: "white"
                            }
                        }, {
                            default: vue.withCtx((() => [ vue.createTextVNode(" v" + vue.toDisplayString(vue.unref(Xt).script.version), 1) ])),
                            _: 1
                        }) ]), "home" != vue.unref(t).page ? (vue.openBlock(), vue.createBlock(l, {
                            key: 0,
                            onClick: o[0] || (o[0] = e => vue.unref(t).setPage("home")),
                            size: "small",
                            style: {
                                background: "rgba(255,255,255,0.2)",
                                border: "none",
                                color: "white"
                            }
                        }, {
                            default: vue.withCtx((() => [ vue.createVNode(r, {
                                style: {
                                    "margin-right": "4px"
                                }
                            }, {
                                default: vue.withCtx((() => [ vue.createVNode(vue.unref(W)) ])),
                                _: 1
                            }), vue.createTextVNode(" \u8fd4\u56de\u9996\u9875 ") ])),
                            _: 1
                        })) : vue.createCommentVNode("", !0) ]) ])),
                        default: vue.withCtx((() => [ vue.createVNode(u, {
                            "max-height": "55vh"
                        }, {
                            default: vue.withCtx((() => [ "home" != vue.unref(t).page ? (vue.openBlock(), vue.createElementBlock("div", Ji, [ vue.createVNode(p, {
                                separator: "/"
                            }, {
                                default: vue.withCtx((() => [ vue.createVNode(c, {
                                    onClick: o[1] || (o[1] = e => vue.unref(t).setPage("home")),
                                    style: {
                                        cursor: "pointer"
                                    }
                                }, {
                                    default: vue.withCtx((() => [ vue.createElementVNode("a", null, [ vue.createVNode(r, null, {
                                        default: vue.withCtx((() => [ vue.createVNode(vue.unref(le)) ])),
                                        _: 1
                                    }), vue.createTextVNode(" \u9996\u9875") ]) ])),
                                    _: 1
                                }), vue.createVNode(c, null, {
                                    default: vue.withCtx((() => [ vue.createTextVNode(vue.toDisplayString(vue.unref(t).page), 1) ])),
                                    _: 1
                                }) ])),
                                _: 1
                            }) ])) : vue.createCommentVNode("", !0), "home" == vue.unref(t).page ? (vue.openBlock(), vue.createBlock(_n, {
                                key: 1
                            })) : "user" == vue.unref(t).page ? (vue.openBlock(), vue.createBlock(Hi, {
                                key: 2
                            })) : "Base" == vue.unref(t).page ? (vue.openBlock(), vue.createBlock(aa, {
                                key: 3
                            })) : "ask" == vue.unref(t).page ? (vue.openBlock(), vue.createBlock(ba, {
                                key: 4
                            })) : "question" == vue.unref(t).page ? (vue.openBlock(), vue.createBlock(Ua, {
                                key: 5
                            })) : "preview" == vue.unref(t).page ? (vue.openBlock(), vue.createBlock(xs, {
                                key: 6
                            })) : "paperLibrary" == vue.unref(t).page ? (vue.openBlock(), vue.createBlock(po, {
                                key: 7
                            })) : "questionTool" == vue.unref(t).page ? (vue.openBlock(), vue.createBlock(Vi, {
                                key: 8
                            })) : "log" == vue.unref(t).page ? (vue.openBlock(), vue.createBlock(uo, {
                                key: 9
                            })) : "ai" == vue.unref(t).page ? (vue.openBlock(), vue.createBlock(Co, {
                                key: 10
                            })) : "api" == vue.unref(t).page ? (vue.openBlock(), vue.createBlock(Ko, {
                                key: 11
                            })) : vue.createCommentVNode("", !0) ])),
                            _: 1
                        }) ])),
                        _: 1
                    }, 8, [ "modelValue", "style" ]), vue.withDirectives(vue.createElementVNode("div", {
                        class: "minimized-dialog",
                        onClick: showOrHide
                    }, [ vue.createElementVNode("div", {
                        onClick: showOrHide
                    }, [ vue.createVNode(h, {
                        content: vue.unref(t).app.alert,
                        placement: "top",
                        visible: !vue.unref(t).app.showFloat && vue.unref(t).app.alertBubble
                    }, {
                        default: vue.withCtx((() => [ vue.createElementVNode("img", {
                            src: vue.unref("data:image/svg+xml,%3csvg%20class='icon'%20viewBox='0%200%201024%201024'%20xmlns='http://www.w3.org/2000/svg'%20width='200'%20height='200'%3e%3cpath%20d='m253.36%201024-115.278-58.836v-53.206c-64.889-68.266-62.918-94.729%2014.075-153.424-23.506-17.594-63.762%202.675-77.275-36.315%2047.435-42.93%2070.378-101.063%2087.973-162.01a326.695%20326.695%200%200%201%20208.037-226.617c4.645-89.38%2086.847-143.43%20178.479-112.605l-35.612%2090.365c105.145%207.32%20192.414%2045.042%20256.317%20123.303%2040.538%2015.483%2038.849-34.767%2069.252-40.82l11.964%2058.273%2050.391-27.306c28.151%2018.72-5.208%2031.951-10.416%2052.22%2014.78%2020.128%2028.996%2040.538%2044.479%2060.244a142.867%20142.867%200%200%201%2028.996%20114.153c-12.528%2077.838-30.263%20154.831-41.101%20233.092A1276.939%201276.939%200%200%200%20918.433%201024H897.32l-89.24-70.378%209.994-10.416-17.735%2036.878-68.408-20.128-39.411%2023.788-42.227-21.114c-28.151%2014.076-52.502%2036.034-86.565%2027.307l-9.009-37.863H332.747L306.144%201024zm-9.993-380.041-.844.985%20126.68%2019.706%2010.838%2010.979c-29.277%2032.374-19.846%2074.178-29.7%20110.493l34.064%2030.263-35.19%2094.87a412.274%20412.274%200%200%200%20233.515%202.11l9.712-26.602%2012.809%2015.905-11.824%2050.672%205.35%204.645c16.749-11.682%2033.218-24.21%2050.812-34.626a84.454%2084.454%200%200%201%2026.04-5.348l7.46%2033.922%2048.842-23.788%2052.925%2014.076c-1.83-43.212-2.956-80.935-5.912-118.517%200-4.926-9.853-9.29-15.061-14.075l-5.63-23.225%2014.075-100.922h18.72l3.238-1.267c-11.964%20106.412%208.023%20202.266%2087.128%20281.512%208.727-48.842%2016.61-93.321%2024.632-137.66%207.46-40.96%2015.061-81.92%2022.521-122.88%2010.557-48.42%2025.477-97.262-10.979-140.755l-30.825%2038.004c0-16.469%201.126-33.078%201.126-49.546%200-70.378-53.206-104.723-115.983-76.29a232.951%20232.951%200%200%201-32.937%209.43c16.046-32.373-3.519-52.924-25.477-70.377a292.21%20292.21%200%200%200-209.304-70.378c-11.401.703-22.802%200-40.256%200l45.183-104.582c-40.397%2010.979-74.038%2014.78-94.73%2045.464s14.92%2045.886%2020.833%2069.674c-110.212%204.364-202.69%2080.513-236.611%20193.117l-70.378%20172.708%2049.124%203.519%205.63%2054.191c32.514-26.04%2026.04-61.088%2030.262-92.899h17.876v58.414l30.967%206.334c1.407-6.616%202.393-11.683%203.66-16.469%209.148-34.626-19.706-59.117-22.38-91.491zm-37.863%20178.9-6.475%2020.833-25.336%2084.453c1.548%208.868%200%2023.225%205.067%2025.477%2032.374%2016.046%2065.733%2029.277%20104.16%2045.746%2021.113-65.452%2063.621-114.435%2069.533-180.872-37.3-16.187-70.941-31.53-104.722-44.338-17.032-6.756-36.315-10.979-35.049%2019.002zm121.754-38.848%2010.556-90.225-48.138-6.193v78.964zm-168.907%2096.98%2023.084-73.474c-28.152-10.416-47.576-9.29-56.303%2015.483s2.674%2042.79%2032.937%2057.992z'%20fill='%23353947'/%3e%3cpath%20d='M198.607%20548.948c33.922-112.604%20126.68-188.472%20235.907-192.272-5.912-23.788-41.1-39.553-20.832-69.674s54.332-34.486%2094.729-45.465L463.228%20346.12h40.256a292.21%20292.21%200%200%201%20209.304%2070.378c21.958%2017.735%2042.227%2038.286%2025.477%2070.378l.986-.985c-30.967%2026.743-32.797%2059.399-19.847%2095.15L744.599%20622l-40.819-6.192-103.174-14.076-62.214-93.04-31.67%2050.672c-19.425-5.63-26.603.845-20.691%2020.692l-21.536-.845a165.67%20165.67%200%200%200-100.078-17.172l-10.416-86.565-37.44%2031.248-44.339%2042.226zm255.19-62.917-10.556-10.557c-17.173-17.032-35.049-15.061-47.294%203.378s-4.786%2036.737%2012.105%2050.25c20.128%2016.046%2034.907%209.712%2045.745-11.542%2014.217-10.838%2015.202-21.395%200-31.811z'%20fill='%23F5F5F6'%20data-spm-anchor-id='a313x.search_index.0.i5.dc0f3a810XA6r8'%20class='selected'/%3e%3cpath%20d='m592.442%20886.763-9.712%2026.603a412.274%20412.274%200%200%201-233.514-2.112l35.189-94.87-34.063-30.543c9.853-36.315%200-78.12%2029.7-110.494a198.184%20198.184%200%200%200%20105.425-94.87c16.328%202.394%2026.04-1.688%2020.692-20.69l31.67-4.927%2063.058%2078.542c0%207.882-1.97%2018.017%201.971%2023.084%2030.966%2038.708%2023.788%2080.935%2014.076%20123.865-8.587%2036.034-16.469%2071.364-24.492%20106.412zm-149.624-223.24c0%2014.076-2.815%2023.648%200%2026.885%2020.27%2020.691%2020.832%2045.605%2019.566%2071.927a96.84%2096.84%200%200%200%203.237%2031.107c5.912%2020.41%2012.668%2041.382%2038.426%2044.056a48.56%2048.56%200%200%200%2053.347-35.189%20696.602%20696.602%200%200%200%2018.58-80.371c6.052-6.475%2035.47-2.534%2018.157-36.597z'%20fill='%23F5F5F6'/%3e%3cpath%20d='M600.606%20602.013%20703.78%20616.09l40.82%205.349c37.863%209.993%2022.943%2041.241%2026.461%2065.17L756.986%20787.53l-49.828%2078.12-21.395%2031.529-10.134%2021.395a84.454%2084.454%200%200%200-26.04%205.348c-17.594%2010.416-34.063%2022.944-50.813%2034.626v-5.208h-5.067l11.823-50.672c16.047-61.932%2032.937-123.724%2047.717-185.938%205.348-22.662-25.477-68.267-51.94-82.624zM927.3%20706.736c-7.46%2040.96-15.061%2081.92-22.521%20122.88-8.023%2044.338-15.906%2088.817-24.633%20137.66-79.105-79.387-98.529-175.242-87.128-281.513z'%20fill='%23B3DCF8'/%3e%3cpath%20d='m199.029%20843.692%206.475-20.832h45.605c2.111-39.271-20.973-30.263-38.427-30.122-1.548-29.981%2018.017-25.758%2035.049-18.58%2034.063%2013.231%2067.422%2028.151%20104.722%2044.479-5.912%2066.437-48.42%20115.42-69.533%20180.871-38.427-16.186-71.927-29.418-104.16-45.182-4.786-2.252-3.519-16.61-5.067-25.477h33.5l26.321-70.378z'%20fill='%2387BC85'/%3e%3cpath%20d='M738.265%20486.03a232.951%20232.951%200%200%200%2032.937-9.43c62.777-28.151%20116.405%206.615%20115.983%2076.29%200%2016.468-.704%2033.077-1.126%2049.546l1.126-.986-12.105-2.674-21.536%2016.75-29.98%208.305a86.565%2086.565%200%200%201-91.633-59.259c2.393-26.462%204.645-52.924%207.038-79.527zm113.731%2061.792-61.37-52.502c-3.94%2035.752-6.615%2059.822-10.275%2093.18z'%20fill='%23F5F5F6'%20data-spm-anchor-id='a313x.search_index.0.i3.dc0f3a810XA6r8'/%3e%3cpath%20d='M198.607%20548.948h73.615c-28.151%2042.227-74.178%2076.853-59.117%20137.66-4.223%2031.81%202.252%2066.859-30.263%2092.899l-6.052-54.473-49.124-3.519z'%20fill='%23AED4EF'/%3e%3cpath%20d='m927.3%20706.736-134.28-21.113-3.238%201.266%206.897-37.863%2027.025-7.742%2031.248-8.867%2029.84-20.691%202.393-10.276-.422.986%2030.262-36.738c35.752%2043.776%2020.832%2092.618%2010.276%20141.038zm-557.675-42.79-126.68-19.706a171.3%20171.3%200%200%201%2016.75-41.1c21.817-29.278%2046.168-56.303%2069.533-84.454%203.238%209.15%206.757%2018.157%209.572%2027.307q15.624%2049.123%2030.966%2098.529z'%20fill='%23F5F5F6'/%3e%3cpath%20d='M763.18%20810.473c5.207%204.645%2014.075%209.009%2015.06%2014.076%202.956%2037.582%204.082%2075.304%205.912%20118.516l-52.925-14.075-47.997%2023.787-7.601-34.766c14.075-1.97%2020.55-7.883%2010.979-21.817%2021.395%2011.682%2023.788-9.994%2033.359-19.003z'%20fill='%23AED4EF'/%3e%3cpath%20d='M601.169%20634.106c26.462%2014.075%2057.288%2059.962%2051.939%2082.624-14.076%2062.214-31.67%20124.006-47.716%20185.938l-12.95-15.905c8.023-35.33%2015.905-70.378%2024.35-105.99%2010.135-42.93%2017.314-85.157-14.075-123.865-3.519-4.785-.985-14.92-1.548-22.802zM328.806%20518.404c-23.365%2028.152-47.716%2055.458-69.533%2084.454a171.3%20171.3%200%200%200-16.75%2041.1l.844-.985-12.386%2043.072h-17.876c-15.061-60.385%2030.403-94.87%2059.117-137.097l44.338-42.226z'%20fill='%23484F5E'/%3e%3cpath%20d='m327.258%20784.011-37.582-17.454v-78.964l48.138%206.193z'%20fill='%23D55375'/%3e%3cpath%20d='m823.704%20641.284-27.025%207.742-6.897%2037.863h-18.72c-3.52-23.928%2011.4-55.176-26.463-65.17l-25.195-40.96%2012.527-16.187a86.565%2086.565%200%200%200%2091.35%2059.259zm-454.079%2022.662V644.1l12.246-12.95c8.445%201.267%2020.41%206.897%2024.773%203.237%2020.55-17.031%2038.99-36.455%2058.132-55.176l20.973%201.548a198.184%20198.184%200%200%201-105.708%2094.87z'%20fill='%23484F5E'/%3e%3cpath%20d='m199.029%20843.692%2034.485%2014.075-26.321%2070.378h-33.5z'%20fill='%23CAE7AF'/%3e%3cpath%20d='m230.98%20686.326%2012.387-43.071c2.675%2031.67%2031.53%2056.302%2022.24%2091.35-1.267%204.786-2.252%209.854-3.66%2016.47l-30.966-6.335z'%20fill='%23F5F5F6'/%3e%3cpath%20d='m763.18%20810.473-44.058%2067.704-11.964-12.528%2050.39-78.4z'%20fill='%23484F5E'/%3e%3cpath%20d='M212.682%20792.738c17.454%200%2040.538-9.15%2038.427%2030.122h-45.605z'%20fill='%23CDEAB1'/%3e%3cpath%20d='m598.917%20957.985-5.349-4.645h5.067z'%20fill='%23484F5E'/%3e%3cpath%20d='M464.495%20579.211c-19.143%2018.72-37.582%2038.145-58.132%2055.176-4.364%203.66-16.328-1.97-24.773-3.237l-17.173-69.111a165.67%20165.67%200%200%201%20100.078%2017.172z'%20fill='%23AED4EF'/%3e%3cpath%20d='m364.417%20562.039%2017.173%2069.111-12.246%2012.95Q354%20594.976%20338.377%20545.57c-2.815-9.149-6.334-18.157-9.571-27.306l-12.246-11.542%2037.441-30.967z'%20fill='%23353947'/%3e%3cpath%20d='M600.606%20602.013v31.67l-62.214-79.245-31.67%204.926%2031.388-50.39z'%20fill='%23484F5E'/%3e%3cpath%20d='M453.797%20517.278c-10.838%2021.255-25.617%2028.152-45.745%2011.542-16.891-14.075-24.633-31.529-12.105-50.25s30.121-20.41%2047.294-3.378c-23.507.986-34.767%2011.542-29.137%2039.412l39.693%203.097z'%20fill='%23AED4EF'/%3e%3cpath%20d='m731.931%20564.572-12.809%2015.624c-12.95-35.752-11.12-68.407%2019.847-95.15-2.111%2026.602-4.363%2053.064-7.038%2079.526z'%20fill='%23353947'/%3e%3cpath%20d='M506.722%20559.787c5.348%2019.002-4.364%2023.084-20.691%2020.69-6.194-19.846.985-26.32%2020.69-20.69z'%20fill='%23484F5E'/%3e%3cpath%20d='M453.797%20485.749c15.202%2010.416%2014.076%2020.973%200%2031.53v-31.812zm-10.556-10.557%2010.556%2010.557-10.556-10.557z'%20fill='%23AED4EF'/%3e%3cpath%20d='m442.818%20663.524%20151.313%2022.099c17.313%2034.062-12.105%2030.121-18.157%2036.596a696.602%20696.602%200%200%201-18.58%2080.09%2048.56%2048.56%200%200%201-52.784%2034.908c-25.758-2.675-32.514-23.647-38.426-44.057a96.84%2096.84%200%200%201-3.237-31.107c1.266-26.321%200-51.235-19.566-71.926-3.378-2.956-.563-12.387-.563-26.603zm66.297%20153.987c41.523-26.462%2042.226-60.384%2034.766-98.53l-55.317-10.274c-.422%2038.707-15.202%2075.163%2020.55%20108.804zm198.043%2048.138%2011.964%2012.528c-9.57%209.008-11.964%2030.685-33.359%2019.002z'%20fill='%23353947'/%3e%3cpath%20d='M686.186%20896.757c9.571%2014.075%202.955%2019.846-10.98%2021.817zm165.81-348.935-71.645%2040.679c3.66-33.36%206.334-57.429%2010.276-93.18z'%20fill='%23353947'/%3e%3cpath%20d='m884.792%20611.726-29.84%2020.69-1.408-16.89%2021.536-16.75z'%20fill='%23484F5E'%20data-spm-anchor-id='a313x.search_index.0.i4.dc0f3a810XA6r8'%20class='selected'/%3e%3cpath%20d='m853.544%20615.526%201.408%2016.89-31.248%208.868v-17.453zm31.248-3.8-9.712-12.95%2012.105%202.674z'%20fill='%23353947'/%3e%3cpath%20d='m443.522%20474.91%2010.557%2010.557v31.952l-39.693-3.097c-6.194-27.87%205.63-38.426%2029.136-39.411z'%20fill='%23F5F5F6'/%3e%3cpath%20d='M509.115%20817.51c-35.753-33.64-20.973-70.377-20.55-108.803l55.316%2010.275c7.883%2038.145%206.757%2072.067-34.766%2098.529z'%20fill='%23E25679'/%3e%3c/svg%3e"),
                            onClick: showOrHide
                        }, null, 8, Qi) ])),
                        _: 1
                    }, 8, [ "content", "visible" ]) ]) ], 512), [ [ vue.vShow, !vue.unref(t).app.showFloat ] ]) ]) ])),
                    _: 1
                });
            };
        }
    });

    (e => {
        const t = GM_getResourceText(e);
        GM_addStyle(t);
    })("ElementPlus");

    const Ki = {
        ef16b0304b00ce71fd40a6ec2ee77005: "ACDFGHIJ",
        "735b46e223cfc7bad9b86c9937c75234": "BDEFG",
        "24ec8818a8cc7ef047261e702dac5815": "ABCDEFGHIJ",
        "196888b3dcb1e1bfff5881cb653ba923": "BDEFGH",
        b935cd024690d61b8fba0484a66108f0: "ABCDEGH",
        "2015082c8ae5776bfd6939c5b987bde8": "BEF",
        "95018628ad8e26805393ebbb913f5655": "AF",
        "9cbff65dc6a768716f51443d6086a1c3": "BDG",
        b8f6dedb0bf830a10b66369b1c602088: "CFG",
        "1ad38a724dc5bac06ce6d1c63b0184cf": "ACDEFGI",
        "6ba30ef9d51b4c81a126ff6d17ee4fb2": "AEFHIJ",
        "78a0d910c07fde12bafafda0f23c8b31": "CEH",
        "9ae999623635bc09942f1d0eb59e6837": "BH",
        "7d6006b8e10d9dffbe1fa0570757caa7": "DH",
        "86eba22e064f8fe7223621469d91c696": "ACDF",
        "4e585ee0c6ac7c985615389285c830ef": "BCF",
        "5ff23de904db9fb6485cddb667995cd7": "ABCDEFGHI",
        fc402dcdbd1751096532c45785acbbbe: "DF",
        ece41fab3f00663e05f8f58eb73d24dd: "ABCDEFGH",
        "784388b61ba6bc8106194478e383908a": "CDFIJ",
        e735470377881c422d187ce9bb7f4f24: "ACDEG",
        "6a721d0773b4945fbe8f550da3850005": "ABCDEFI",
        cfcabe2eeaeef886169447086ac23b96: "AEG",
        c38f5ab64c8b82df3bb66f8f9831097b: "AEF",
        b684fb365965c6b3488eeedcae114384: "ADEF",
        "1c402ceeda5ea92b80fe8b5b5bcbdc4d": "ACF",
        ce75bbb9a8b72f97de5a8bb03ee95df7: "J",
        e21ba3c8d7f8bbb66e4af7a9182d87a5: "ACGI",
        "445adaca0de2f938fe7bacf8140eef36": "ABF",
        "4f14c1e0a1eccde02ee4f0a77eaa78cd": "BCEF",
        e78e28ee7040cdf3894293cd2eeade9b: "H",
        ee5a026e9664d3d75f0471b9bc826c98: "EF",
        "904d82937a49e762ec1fa7c53574bb39": "ADF",
        "2ee96820a6a35990bff61a607953274c": "BDDF",
        dc13afaff7b568f31d96c0ff8b5998b8: "ABEF",
        "13c11253a2bb72c3726d318163662263": "ABCF",
        ca8b276d3213cfda5e6406c0930dfdb5: "CDF",
        "0d38524f7ca472260864ef7b79b11591": "ABCDG",
        "0e9bfd8011be1eddfcf97102f9e21ab6": "DEF",
        ca88100d2fd190136cdcb3ffe1648820: "DG",
        "2d8c02e62a414df727f2bd36d4231c68": "ABCFG",
        "099b9f86638886c7ca57401d4360165c": "ABCDEFG",
        "7a0a8f7222c07c8c24c4a6d201105ecc": "ACEF",
        "181f54c34d485b426b900e2c777a831c": "AEFHI",
        "993215603eb31c60f31aa261267790e8": "ABCEF",
        fcae686eac9b3de629da73618ea6cdc0: "ABCDF",
        "8b6271d28906b0a6a765ea1c37c31ff9": "ABDF",
        "5dfd875662f18654b374acd37e6c3790": "CF",
        e8b47f587340890e698ccb14ef1f39c4: "CDEF",
        de2c87983e695e599c1a2f6836277a4f: "ABDEF",
        "8a46cf5b7a0845cbe4d03b64630a4792": "A",
        "53422e877a081b1b4f6e4c212ab57cf1": "AB",
        "29d95a58cdb26116c1906879055c8c81": "ABC",
        "5ba8eea749f56522bb1a5f252bfa3647": "ABCD",
        "16374490395999a162f0652a32d13b8b": "ABCDE",
        "8b2a7f5a361969be6a905da99af21b44": "ABCDEF",
        e12185b3db81b9ec20d0402632e83f74: "ACDEF",
        "83bd97c6c3ac69318ad965f7776a51b4": "ABCE",
        bedb4b64e5f1a1e47af4f461c59c0682: "ABD",
        f09e72b012b4e90e2008662ae01f9f66: "ABDE",
        e329dd6e7aecd220d271ba06a87c1d4f: "ABE",
        "8d234f3f7209a68f21d4e2b8f367d0b3": "AC",
        "51f6ac2445476dc718eb710ae28d26e3": "ACD",
        "6fd0d649bcb9f81660389156d9fdbf03": "ACDE",
        "79b887d55f7fbe5f8f1e29537c4099b7": "ACE",
        d23fcd2143ca2071fc33f912cf1c28e4: "AD",
        "32e93bed7ac49065a1af9639795f4b47": "ADE",
        "81e4110d9047c39ea1444a178b7cd33d": "AE",
        db7b924f30f69a55e36735b16f52dac0: "B",
        "84c04e4ecc048bd34e35382ec3ea64a5": "BC",
        "50ba53e0c5817f04cd5f2053e6193569": "BCD",
        "26fee236555e7629f11308452c47b032": "BCDE",
        d22d3cc146b96cf9d049da3decb8060e: "BCDEF",
        a90e4a238e95a9ef750a1e0844b6730b: "BCDG",
        a4bfbd439f12870ac2294ac4f59c2ade: "BCE",
        d7e98cd9fa6c9fc480ebcba65bbd5ed7: "BD",
        "859f062ed997fc06bebde9c00669d29d": "BDE",
        "1ad8f209d08633c3cee74a4f48862c4f": "BDEF",
        "8d34b7e5f05d2d9188a6d40a0f882cb0": "BDF",
        fe4bf0dc5ee6f3e858034bacfbd8c657: "BE",
        be0eb600553b1c72f65f4eeed6eece84: "C",
        "322d75dc959f260a6cb15bae2149972f": "CD",
        a897c5097bbbf5f66ad491c083a897f2: "CDE",
        b01f11bd3ef4311b47cef1a032dde5c2: "CE",
        "1a09dd8805d368791a8bc18050cf76a9": "D",
        "6a1137dfc861563b83e2579024ce929f": "DE",
        "2e256e5ceb7a86e50fe2c93f622d30ac": "E",
        ddeacacae3b5f3ceb9ae1638d1585271: "EG",
        "19be069faa48362663d092896fa7d4d4": "F",
        "52113efae9e75eacdb3529fefb168982": "G"
    }, get_href = () => location.href, hookXHR = () => {
        const e = {
            send: XMLHttpRequest.prototype.send
        };
        Object.defineProperty(XMLHttpRequest.prototype, "send", {
            configurable: !1,
            writable: !1,
            value: function(t) {
                return this.addEventListener("readystatechange", (function() {
                    switch (!0) {
                      case /onlineexamh5new.zhihuishu.com/i.test(get_href()):
                        if (4 === this.readyState && (this.response.includes("workExamParts") || this.response.includes("lookHomework"))) {
                            const e = JSON.parse(this.response);
                            je.zhsques = e.rt;
                        }
                        if (4 === this.readyState && this.responseURL.includes("getAnswerImgInfo")) {
                            let e = {};
                            const t = JSON.parse(this.response).rt;
                            for (let n in JSON.parse(this.response).rt) e[n] = Ki[somd5(t[n])], e[n] || (somd5(t[n]), 
                            t[n]);
                            je.zhsimgAnswer = e;
                        }
                        break;

                      case /icve.com.cn/i.test(location.host):
                        4 === this.readyState && this.responseURL && (this.responseURL.includes("examRecordPaperList") || this.responseURL.includes("queryXsDtjgSjInfo")) && JSON.parse(this.response);
                        break;

                      case /qingshuxuetang.com/i.test(get_href()):
                        if (4 === this.readyState && (this.responseURL.includes("Student/DetailData") || this.responseURL.includes("Student/SimulationExercise/DetailData") || this.responseURL.includes("Student/Quiz/DetailData"))) {
                            const e = JSON.parse(this.response);
                            je.qsques = e.data.paperDetail.questions, e.data.paperDetail.questions;
                        }
                        break;

                      case /cce.org.uooconline.com/i.test(get_href()):
                        if (4 === this.readyState && this.responseURL.includes("/exam/view?cid=")) {
                            const e = JSON.parse(this.response);
                            je.cceques = e.data.questions, e.data.questions;
                        }
                        break;

                      case /cj-edu.com/i.test(get_href()):
                        if (4 === this.readyState && this.responseURL.includes("api/student/getHomeworkStudentInfo.do")) {
                            const e = JSON.parse(this.response);
                            je.cjques = e.data, e.data;
                        }
                        break;

                      case /gxk.yxlearning.com/i.test(get_href()):
                        if (4 === this.readyState && this.responseURL.includes("cms/paper/start-do-paper-or-test.gson")) {
                            const e = JSON.parse(this.response);
                            je.yxques = e.attribute.data, e.data;
                        }
                    }
                })), e.send.call(this, t);
            }
        });
    }, loadVue = () => {
        var e, t, n;
        const a = function() {
            const e = vue.effectScope(!0), t = e.run((() => vue.ref({})));
            let n = [], a = [];
            const s = vue.markRaw({
                install(e) {
                    setActivePinia(s), s._a = e, e.provide(be, s), e.config.globalProperties.$pinia = s, 
                    a.forEach((e => n.push(e))), a = [];
                },
                use(e) {
                    return this._a ? n.push(e) : a.push(e), this;
                },
                _p: n,
                _a: null,
                _e: e,
                _s: new Map,
                state: t
            });
            return s;
        }(), s = vue.createApp(Wi);
        s.use(N), s.use(a);
        const l = document.createElement("div"), c = document.createElement("div");
        c.id = "AiAskApp", window.self !== window.top && (null == (t = null == (e = window.top) ? void 0 : e.location) ? void 0 : t.origin) === window.location.origin && en.iframe ? (c.id = "AiAskAppTop", 
        null == (n = window.top) || n.document.body.appendChild(l)) : document.body.append(l);
        const p = l.attachShadow({
            mode: "closed"
        });
        p.appendChild(c);
        try {
            const e = document.createElement("style");
            e.textContent = Se("ElementPlus") + '#aiAskApp{text-align:left!important}#AiAskApp .el_wrapper>div{pointer-events:none;z-index:999999!important}#AiAskApp .el_wrapper>div>div{pointer-events:none;z-index:999999!important}.el-notification.right{min-height:84px}.el-dialog{pointer-events:auto;border-radius:16px!important;overflow:hidden;box-shadow:0 12px 48px #0000001f!important;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);z-index:999999!important;background:linear-gradient(135deg,#667eea,#764ba2)!important;padding:0!important;max-width:95vw!important}.el-dialog__header{background:transparent!important;color:#fff!important;padding:20px 24px!important;margin:0!important}.el-dialog__title{color:#fff!important;font-weight:600;font-size:18px}.el-dialog__headerbtn .el-dialog__close{color:#fff!important;font-size:20px}.el-dialog__body{padding:0!important;background:#fff!important;border-radius:0 0 16px 16px!important}@media (max-width: 600px){#AiAskApp .el-scrollbar,#AiAskApp .el-scrollbar__wrap{max-height:50vh!important}}@media (min-width: 601px){#AiAskApp .el-scrollbar,#AiAskApp .el-scrollbar__wrap{max-height:70vh!important}}.el-scrollbar__view{background:#fff!important;padding:16px!important}.minimized-dialog img{pointer-events:auto;width:50px!important;height:50px!important;z-index:9999999!important;position:fixed;bottom:0;right:0;cursor:pointer}.aah_breadcrumb{margin-bottom:16px;padding:12px 16px;background:#fffffff2;border-radius:8px;border:1px solid rgba(229,231,235,.5);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.aah_breadcrumb .el-breadcrumb__item a{color:#667eea;font-weight:500;transition:color .3s}.aah_breadcrumb .el-breadcrumb__item a:hover{color:#764ba2}.el-card{border-radius:12px!important;border:1px solid #e5e7eb!important;box-shadow:0 1px 3px #0000000d!important;transition:all .3s cubic-bezier(.4,0,.2,1)!important;margin-bottom:12px;overflow:hidden;background:#fff!important}.el-card:hover{transform:translateY(-2px);box-shadow:0 4px 12px #00000014!important;border-color:#667eea!important}.el-card__body{padding:16px!important}.el-alert{border-radius:8px!important;border:1px solid!important;padding:12px 16px!important;margin-bottom:12px}.el-alert--info{background:#f0f9ff!important;border-color:#bae6fd!important}.el-alert--warning{background:#fffbeb!important;border-color:#fde68a!important}.el-alert--error{background:#fef2f2!important;border-color:#fecaca!important}.el-alert--success{background:#f0fdf4!important;border-color:#bbf7d0!important}.el-button{border-radius:12px!important;padding:12px 24px!important;font-weight:500;transition:all .3s cubic-bezier(.4,0,.2,1)!important;border:none!important}.el-button--primary{background:linear-gradient(135deg,#667eea,#764ba2)!important;box-shadow:0 4px 12px #667eea4d}.el-button--primary:hover{transform:translateY(-2px);box-shadow:0 6px 20px #667eea66!important}.el-button--primary.is-plain{background:#fff!important;border:2px solid #667eea!important;color:#667eea!important}.el-button--primary.is-plain:hover{background:linear-gradient(135deg,#667eea,#764ba2)!important;color:#fff!important}.el-button--small{padding:8px 16px!important;border-radius:10px!important}.aah_btn{width:100%}.el-tag{border-radius:8px!important;padding:6px 16px!important;border:none!important;font-weight:500;box-shadow:0 2px 8px #00000014}.el-tag--primary{background:linear-gradient(135deg,#667eea,#764ba2)!important;color:#fff!important}.el-tag--info{background:linear-gradient(135deg,#a5b4fc,#818cf8)!important;color:#fff!important}.el-divider{margin:24px 0!important}.el-divider__text{background:#fff0!important;padding:0 16px!important}.el-input__wrapper{border-radius:12px!important;box-shadow:0 2px 8px #0000000d!important;transition:all .3s;padding:8px 16px!important}.el-input__wrapper:hover{box-shadow:0 4px 12px #0000001a!important}.el-input__wrapper.is-focus{box-shadow:0 4px 16px #667eea4d!important;border-color:#667eea!important}.el-input__inner{border:none!important;margin:auto}.el-textarea__inner{border-radius:12px!important;box-shadow:0 2px 8px #0000000d!important;padding:12px 16px!important;transition:all .3s}.el-textarea__inner:focus{box-shadow:0 4px 16px #667eea4d!important}.aah_title{font-size:15px;font-weight:600;line-height:1.8;color:#1f2937;margin-bottom:12px;padding:12px;background:#fff;border-radius:8px;border:1px solid #e5e7eb;border-left:3px solid #667eea;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.aah_title img{max-width:100%;height:auto;overflow:hidden;border-radius:8px;margin:12px 0}.aah_options{transition:all .2s;cursor:pointer}.aah_options:hover{border-color:#667eea;background:#f9fafb}.aah_options[style*="color:green"]{background:#f0fdf4!important;border-color:#86efac!important;font-weight:600;color:#166534!important}.aah_active{box-shadow:0 0 5px #0af}.aah_bomHet50{padding:13px 0 13px 10px}.aah_bomHet50 span{display:inline-block;line-height:24px;padding-left:14px;color:#a8a8b3}.aah_bomHet50 span i{display:inline-block;width:10px;height:10px;border:1px solid #DBDFE9;border-radius:2px;vertical-align:middle;margin-right:4px;margin-top:-2px}.aah_bomHet50 .dq i{background-color:#ecf5ff;box-shadow:0 0 5px #0af}.aah_bomHet50 .yp i{background-color:#f0f9eb;border-color:#409eff}.aah_bomHet50 .wp i{background-color:#fef0f0;border-color:#f56c6c}.el-dialog .el-form{max-height:65vh;overflow-y:auto;padding-right:8px}.el-dialog .el-form::-webkit-scrollbar{width:6px}.el-dialog .el-form::-webkit-scrollbar-thumb{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:3px}.el-dialog .el-form::-webkit-scrollbar-track{background:#f1f5f9;border-radius:3px}.el-dialog .el-form-item{margin-bottom:18px}.el-dialog .el-form-item__label{font-weight:600;color:#fff;margin-bottom:8px}.el-dialog .flex.mb-4{margin-bottom:12px}.el-dialog .option-input{flex:1}.el-upload__input{display:none!important}.question-card{margin-bottom:20px;animation:slideIn .3s ease-out}@keyframes slideIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.log-container{margin:20px}.hljs{display:block;overflow-x:auto;padding:16px;background:#1f2937;color:#e5e7eb;border-radius:12px;box-shadow:0 4px 12px #0000001a}.is-error{border:2px solid #ef4444!important;box-shadow:0 0 0 3px #ef44441a!important}.error-message{color:#ef4444;margin-top:8px;font-size:13px;font-weight:500}.el-form-item{margin-bottom:20px}.el-form-item__label{font-weight:600;color:#374151}.el-slider__bar{background:linear-gradient(90deg,#667eea,#764ba2)!important}.el-slider__button{border:3px solid #667eea!important;box-shadow:0 2px 8px #667eea66}.el-checkbox__input.is-checked .el-checkbox__inner,.el-radio__input.is-checked .el-radio__inner{background:linear-gradient(135deg,#667eea,#764ba2)!important;border-color:#667eea!important}.el-empty{padding:40px 0}.el-empty__description{color:#9ca3af;font-size:15px}.el-watermark{border-radius:16px}.el-pagination{margin-top:24px;display:flex;justify-content:center}.el-pagination.is-background .el-pager li{border-radius:8px!important;margin:0 4px}.el-pagination.is-background .el-pager li.is-active{background:linear-gradient(135deg,#667eea,#764ba2)!important}.el-dropdown-menu{border-radius:12px!important;border:none!important;box-shadow:0 8px 24px #0000001f!important;padding:8px!important}.el-dropdown-menu__item{border-radius:8px!important;margin:4px 0;transition:all .3s}.el-dropdown-menu__item:hover{background:linear-gradient(135deg,#f0f4ff,#e0e7ff)!important;color:#667eea!important}.el-switch.is-checked .el-switch__core{background:linear-gradient(135deg,#667eea,#764ba2)!important}.el-select__wrapper{border-radius:12px!important;box-shadow:0 2px 8px #0000000d!important}.el-select__wrapper.is-focused{box-shadow:0 4px 16px #667eea4d!important}.el-tooltip__popper{border-radius:8px!important;padding:12px 16px!important}.el-loading-mask{border-radius:16px!important;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.el-row{margin-bottom:16px}@media (max-width: 768px){.el-dialog{width:95%!important;max-width:95vw!important;margin:0 auto}.el-card{margin-bottom:12px}.aah_title{font-size:14px;padding:12px}.el-button{padding:10px 20px!important}}.el-scrollbar__wrap::-webkit-scrollbar{width:8px;height:8px}.el-scrollbar__wrap::-webkit-scrollbar-thumb{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:4px}.el-scrollbar__wrap::-webkit-scrollbar-track{background:#f1f5f9;border-radius:4px}@keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.fade-in{animation:fadeIn .3s ease-out}.glass-effect{background:#ffffffd9;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.user-page{padding:0;max-width:100%}.user-page__login-box{max-width:380px;margin:30px auto;padding:32px 28px;background:#fff;border-radius:14px;box-shadow:0 4px 16px #00000014}.user-page__login-header{text-align:center;margin-bottom:28px}.user-page__login-icon{font-size:56px;background:linear-gradient(135deg,#667eea,#764ba2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:12px}.user-page__login-header h2{margin:12px 0 6px;font-size:24px;font-weight:600;color:#1f2937}.user-page__login-header p{margin:0;color:#6b7280;font-size:13px}.user-page__login-type-switch{width:100%;display:flex;margin-bottom:20px}.user-page__login-type-switch .el-radio-button{flex:1}.user-page__login-type-switch .el-radio-button__inner{width:100%;border-radius:8px!important}.user-page__login-form{margin-bottom:20px}.user-page__login-form .el-form-item{margin-bottom:14px}.user-page__login-btn{width:100%;height:44px;font-size:15px;font-weight:600;border-radius:10px!important}.user-page__register-tip{text-align:center;margin-top:20px;color:#6b7280;font-size:13px}.user-page__register-tip .el-link{font-weight:600;margin-left:4px}.user-page__dashboard{padding:12px;max-width:100%;margin:0 auto}.user-page__header-card{display:flex;align-items:center;gap:14px;padding:18px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:12px;margin-bottom:12px;box-shadow:0 4px 12px #667eea40}.user-page__avatar{flex-shrink:0;border:3px solid rgba(255,255,255,.5);box-shadow:0 4px 12px #0003}.user-page__info-text h2{margin:0 0 4px;color:#fff;font-size:18px;font-weight:700;text-shadow:0 2px 8px rgba(0,0,0,.3)}.user-page__username{margin:0 0 8px;color:#fffffff2;font-size:12px;text-shadow:0 1px 4px rgba(0,0,0,.2)}.user-page__stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:12px}.user-page__stat-card{display:flex;align-items:center;gap:10px;padding:12px;background:#fff;border-radius:10px;box-shadow:0 2px 6px #0000000f;transition:all .3s ease}.user-page__stat-card:hover{transform:translateY(-2px);box-shadow:0 4px 10px #0000001a}.user-page__stat-icon{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}.user-page__stat-icon--coin{background:linear-gradient(135deg,#ffd89b,#f39c12);color:#fff}.user-page__stat-icon--money{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.user-page__stat-icon--course{background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff}.user-page__stat-icon--question{background:linear-gradient(135deg,#4facfe,#00f2fe);color:#fff}.user-page__stat-content{flex:1;min-width:0}.user-page__stat-label{margin:0 0 2px;color:#6b7280;font-size:11px;font-weight:500}.user-page__stat-value{margin:0;color:#1f2937;font-size:17px;font-weight:700}.user-page__apikey-section{padding:14px;background:#fff;border-radius:12px;box-shadow:0 2px 6px #0000000f;margin-bottom:12px}.user-page__section-header{display:flex;align-items:center;gap:8px;margin-bottom:10px}.user-page__section-header .el-icon{font-size:18px;color:#667eea}.user-page__section-header h3{margin:0;font-size:15px;font-weight:600;color:#1f2937}.user-page__apikey-display{margin-top:10px}.user-page__apikey-input .el-input__inner{font-family:Courier New,monospace;font-size:12px}.user-page__actions{display:flex;justify-content:center;gap:10px;padding:12px;background:#fff;border-radius:12px;box-shadow:0 2px 6px #0000000f}@media (max-width: 768px){.user-page__dashboard{padding:10px}.user-page__header-card{flex-direction:column;text-align:center;padding:16px}.user-page__stats-grid{grid-template-columns:repeat(2,1fr);gap:8px}.user-page__stat-card{padding:10px}.user-page__stat-icon{width:32px;height:32px;font-size:16px}.user-page__stat-value{font-size:16px}.user-page__apikey-section{padding:12px}.user-page__actions{flex-direction:column}.user-page__actions .el-button{width:100%}}.home-container{padding:0;text-align:center}.user-status-card{margin-bottom:15px}.user-status{display:flex;justify-content:space-between;align-items:center}.user-info{display:flex;align-items:center;gap:15px}.user-details h3{margin:0 0 5px;font-size:18px;font-weight:600}.user-details p{margin:0;font-size:14px;color:#606266}.features-tags{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:16px 0}.pages-grid{display:flex;flex-wrap:wrap;gap:12px;margin:16px 0;justify-content:center}.page-button{min-width:160px;flex:0 1 calc(25% - 9px);justify-content:center}@media (max-width: 768px){.page-button{flex:0 1 calc(50% - 6px)}}@media (max-width: 480px){.page-button{flex:1 1 100%}}.version-section{margin:16px 0;text-align:center}.version-section p{margin:12px 0;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px}.sponsor-link{color:#667eea;text-decoration:none;font-weight:500;transition:color .3s}.sponsor-link:hover{color:#764ba2;text-decoration:underline}.paper-library-container{padding:0}.tips-card{margin-bottom:16px}.search-card{margin-bottom:20px}.search-header{display:flex;gap:12px;align-items:center}.search-stats{display:flex;gap:12px;margin-top:16px;justify-content:center}.papers-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:20px}.paper-card{cursor:pointer;transition:all .3s ease}.paper-card:hover{transform:translateY(-4px);box-shadow:0 8px 16px #0000001a}.paper-header{display:flex;align-items:flex-start;gap:12px}.paper-icon{flex-shrink:0}.paper-info{flex:1;min-width:0}.paper-title{margin:0 0 8px;font-size:16px;font-weight:600;color:#303133;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.paper-meta{display:flex;gap:8px;flex-wrap:wrap}.paper-footer{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#909399}.paper-actions{display:flex;align-items:center;gap:8px}.header-card{margin-bottom:20px}.header-content{display:flex;flex-direction:column;gap:16px}.header-actions{display:flex;gap:12px;flex-wrap:wrap}.course-info h2,.chapter-info-header h2{margin:0 0 12px;font-size:20px;font-weight:600;color:#303133}.course-stats,.chapter-info-header{display:flex;gap:12px;align-items:center;flex-wrap:wrap}.chapters-list{display:flex;flex-direction:column;gap:12px}.chapter-card{cursor:pointer;transition:all .3s ease}.chapter-card:hover{transform:translate(4px);box-shadow:0 4px 12px #0000001a}.chapter-header{display:flex;align-items:center;gap:16px}.chapter-number{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex-shrink:0}.chapter-info{flex:1;min-width:0}.chapter-title{margin:0 0 8px;font-size:16px;font-weight:600;color:#303133}.chapter-arrow{flex-shrink:0;font-size:20px;color:#909399}.chapter-actions{display:flex;align-items:center;gap:12px;margin-left:auto}.questions-container{display:flex;flex-direction:column;gap:16px}.question-card{transition:all .3s ease}.question-card:hover{box-shadow:0 4px 12px #0000001a}.question-number{display:inline-block;padding:4px 12px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border-radius:12px;font-size:14px;font-weight:600;margin-bottom:12px}.question-title{font-size:15px;line-height:1.8;color:#303133;margin-bottom:16px;font-weight:500}.question-options{margin-bottom:16px}.option-item{display:flex;align-items:flex-start;padding:10px 12px;margin-bottom:8px;background:#f5f7fa;border-radius:8px;transition:all .2s ease}.option-item:hover{background:#e8edf3}.option-item.is-answer{background:#f0f9ff;border:1px solid #67c23a;color:#67c23a;font-weight:500}.option-label{flex-shrink:0;font-weight:600;margin-right:8px;min-width:24px}.option-content{flex:1;line-height:1.6}.question-answer{margin-top:16px}.answer-content{padding:12px;background:#f0f9ff;border-radius:8px;color:#409eff;line-height:1.6}.preview-container{padding:0}.preview-header{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px 32px;margin-bottom:20px;box-shadow:0 8px 24px #667eea40;position:relative;overflow:hidden}.preview-header:before{content:"";position:absolute;top:-50%;right:-10%;width:300px;height:300px;background:#ffffff1a;border-radius:50%;animation:float 6s ease-in-out infinite}@keyframes float{0%,to{transform:translateY(0) rotate(0)}50%{transform:translateY(-20px) rotate(180deg)}}.header-content{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;position:relative;z-index:1}.header-title h2{color:#fff;font-size:28px;font-weight:700;margin:0 0 8px;text-shadow:0 2px 8px rgba(0,0,0,.1)}.header-title p{color:#ffffffe6;font-size:14px;margin:0;letter-spacing:2px}.header-stats{display:flex;gap:24px;align-items:center}.stat-item{display:flex;flex-direction:column;align-items:center;background:#ffffff26;padding:12px 24px;border-radius:12px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);min-width:100px}.stat-number{font-size:32px;font-weight:700;color:#fff;line-height:1;margin-bottom:4px}.stat-label{font-size:12px;color:#ffffffd9;letter-spacing:1px}.stat-divider{width:1px;height:40px;background:#ffffff4d}.preview-alert{margin-bottom:20px;border-radius:12px!important}.search-section{margin-bottom:24px}.search-result-info{margin-top:16px;text-align:center;animation:slideInDown .3s ease-out}@keyframes slideInDown{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.empty-state{padding:60px 20px}.empty-icon{font-size:80px;margin-bottom:16px;animation:bounce 2s ease-in-out infinite}@keyframes bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}.questions-list{display:flex;flex-direction:column;gap:20px;margin-bottom:24px}.question-item-wrapper{animation:fadeInUp .4s ease-out}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.question-item-card{background:#fff;border-radius:16px;padding:24px;box-shadow:0 2px 12px #00000014;border:2px solid transparent;position:relative;transition:all .3s cubic-bezier(.4,0,.2,1);overflow:hidden}.question-item-card:before{content:"";position:absolute;top:0;left:0;width:5px;height:100%;background:linear-gradient(180deg,#667eea,#764ba2);transition:width .3s ease}.question-item-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px #667eea33;border-color:#667eea}.question-item-card:hover:before{width:8px}.question-badge{position:absolute;top:-12px;left:20px;z-index:10}.badge-number{display:inline-flex;align-items:center;justify-content:center;min-width:48px;height:48px;padding:0 12px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;font-size:20px;font-weight:700;border-radius:12px;box-shadow:0 4px 12px #667eea66}.question-actions-top{position:absolute;top:20px;right:20px;display:flex;gap:8px;z-index:10}.question-actions-top .el-button{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 2px 8px #0000001a}.question-main{margin-top:24px}.question-header-section{margin-bottom:16px}.question-type-tag{font-size:14px;font-weight:600;padding:8px 16px!important;border-radius:8px!important;background:linear-gradient(135deg,#667eea,#764ba2)!important;border:none!important;color:#fff!important}.question-text{font-size:16px;line-height:1.8;color:#1f2937;margin-bottom:20px;padding:16px;background:#f8fafc;border-radius:12px;border-left:4px solid #667eea}.question-text img{max-width:100%;height:auto;border-radius:8px;margin:12px 0}.options-section{margin-bottom:24px}.complex-question-tip{margin-bottom:16px}.options-list{display:flex;flex-direction:column;gap:12px}.option-item{display:flex;align-items:flex-start;gap:12px;padding:16px;background:#f8fafc;border:2px solid #e5e7eb;border-radius:12px;transition:all .3s ease;position:relative;cursor:pointer}.option-item:hover{background:#f0f4ff;border-color:#667eea;transform:translate(4px)}.option-item.option-correct{background:linear-gradient(135deg,#f0fdf4,#dcfce7);border-color:#22c55e;border-width:2px}.option-item.option-correct:hover{background:linear-gradient(135deg,#dcfce7,#bbf7d0);transform:translate(4px) scale(1.01)}.option-letter{display:flex;align-items:center;justify-content:center;min-width:36px;height:36px;background:#fff;border:2px solid #667eea;border-radius:50%;color:#667eea;font-size:16px;font-weight:700;flex-shrink:0;transition:all .3s ease}.option-item.option-correct .option-letter{background:#22c55e;border-color:#22c55e;color:#fff}.option-text{flex:1;line-height:1.6;color:#374151;padding-top:6px}.correct-badge{display:flex;align-items:center;justify-content:center;width:32px;height:32px;background:#22c55e;color:#fff;border-radius:50%;font-size:18px;font-weight:700;flex-shrink:0;box-shadow:0 2px 8px #22c55e4d;animation:scaleIn .3s ease-out}@keyframes scaleIn{0%{transform:scale(0)}to{transform:scale(1)}}.answer-section{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border-radius:12px;padding:20px;border:2px solid #0ea5e9;margin-top:20px}.answer-header{display:flex;align-items:center;gap:8px;margin-bottom:16px;color:#0369a1;font-size:16px;font-weight:700}.answer-header .el-icon{font-size:24px}.answer-content-wrapper{margin-top:12px}.answer-tags{display:flex;flex-wrap:wrap;gap:10px}.answer-tags .el-tag{font-size:16px;padding:10px 20px!important;border-radius:10px!important;font-weight:600;box-shadow:0 2px 8px #22c55e4d}.answer-text{padding:16px;background:#fff;border-radius:8px;line-height:1.8;color:#374151;box-shadow:0 2px 8px #0000000d}.no-answer{display:flex;align-items:center;gap:8px;color:#9ca3af;font-style:italic;padding:12px}.no-answer .el-icon{font-size:20px}.pagination-wrapper{display:flex;justify-content:center;padding:32px 0;background:#fff;border-radius:16px;box-shadow:0 2px 12px #00000014}.preview-container .el-watermark{min-height:200px}@media (max-width: 768px){.preview-header{padding:20px}.header-content{flex-direction:column;align-items:flex-start}.header-title h2{font-size:24px}.header-stats{width:100%;justify-content:space-around}.stat-item{min-width:auto;flex:1}.question-item-card{padding:20px 16px}.question-badge{left:12px}.badge-number{min-width:40px;height:40px;font-size:18px}.question-actions-top{top:12px;right:12px}.question-text{font-size:15px;padding:14px}.option-item{padding:12px}.option-letter{min-width:32px;height:32px;font-size:14px}.answer-section{padding:16px}.pagination-wrapper{padding:20px 0}}@media print{.preview-header,.preview-alert,.search-section,.question-actions-top,.pagination-wrapper{display:none!important}.question-item-card{break-inside:avoid;box-shadow:none;border:1px solid #e5e7eb;margin-bottom:16px}}', 
            p.appendChild(e);
        } catch (u) {
            console.error("\u5e94\u7528\u6837\u5f0f\u8868\u65f6\u51fa\u9519:", u);
        }
        s.mount(c);
    }, run = async () => {
        var e;
        (e = document.createElement("iframe")).style.display = "none", document.body.appendChild(e), 
        window.console = e.contentWindow.console;
        (je === je.top || [ /\/work\/doHomeWorkNew/i, /selectWorkQuestionYiPiYue/i, /uooconline.com/i, /edu-edu.com/i, /hblearning\/exam\/portal\/exam.jsp/i ].some((e => e.test(location.href))) || Rt.some((e => "hook" !== e.type && ("function" == typeof e.match ? e.match() : e.match)))) && (loadVue(), 
        parseRule(Rt));
    };

    (() => {
        if (hookXHR(), /onlineexamh5new.zhihuishu.com/i.test(get_href())) {
            const e = je.yxyz;
            je.yxyz = function(t, n) {
                !je.yxyzpush && (je.yxyzpush = []);
                let a = e(t, n);
                return je.yxyzpush.push({
                    ...t,
                    data: a
                }), a;
            };
        }
        if (/icve.com.cn/i.test(get_href()) || /courshare.cn/i.test(get_href()) || /webtrn.cn/i.test(get_href())) {
            const e = je.open;
            je.open = function() {
                return arguments[2] = "", e.apply(this, arguments);
            };
        }
        if (/ytccr.com/i.test(get_href())) {
            const e = localStorage.getItem;
            localStorage.getItem = function(t) {
                if ("_debugger" === t) return !0;
                return e.apply(this, arguments);
            };
        }
        if (/91huayi.com/i.test(get_href())) {
            const e = je.$.cookie;
            je.$.cookie = function(t, n, a) {
                return console.log("Cookie\u64cd\u4f5c:", t, n, a), t.startsWith("switchTime") && void 0 !== n ? (n = void 0, 
                e.apply(this, [ t, n, a ])) : e.apply(this, arguments);
            };
        }
    })(), Rt.filter((e => e.match && e.hook)).forEach((e => {
        e.hook();
    })), "complete" === document.readyState ? run() : window.addEventListener("load", run);

})(Vue, DOMPurify, ElementPlus, $, CryptoJS);