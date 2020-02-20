/*!
 * Preformatted text dialog plugin for Editor.md
 *
 * @file        encrypt-block-dialog.js
 * @author      pandao
 * @version     1.2.0
 * @updateTime  2015-03-07
 * {@link       https://github.com/pandao/editor.md}
 * @license     MIT
 */

(function () {

    var factory = function (exports) {
        var cmEditor;
        var pluginName = "encrypt-block-dialog";

        exports.fn.encryptBlockDialog = function () {

            var _this = this;
            var cm = this.cm;
            var lang = this.lang;
            var editor = this.editor;
            var settings = this.settings;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            var classPrefix = this.classPrefix;
            var dialogLang = lang.dialog.encryptBlockText;
            var dialogName = classPrefix + pluginName, dialog;

            cm.focus();

            if (editor.find("." + dialogName).length > 0) {
                dialog = editor.find("." + dialogName);
                dialog.find("textarea").val(selection);

                this.dialogShowMask(dialog);
                this.dialogLockScreen();
                dialog.show();
            }
            else {
                var dialogContent = "<div class=\"" + classPrefix + "code-toolbar\">" +
                    "<textarea type=\"text\">" + selection + "</textarea>" + "<br/>" +
                    "添加附件：" + "<input type=\"file\" name=\"" + classPrefix + "encrypt-file\"></input>" +
                    "<input type=\"submit\" value=\"本地上传\" />"
                "</div>";

                dialog = this.createDialog({
                    name: dialogName,
                    title: dialogLang.title,
                    width: 780,
                    height: 560,
                    mask: settings.dialogShowMask,
                    drag: settings.dialogDraggable,
                    content: dialogContent,
                    lockScreen: settings.dialogLockScreen,
                    maskStyle: {
                        opacity: settings.dialogMaskOpacity,
                        backgroundColor: settings.dialogMaskBgColor
                    },
                    buttons: {
                        enter: [lang.buttons.enter, function () {
                            var encryptTexts = this.find("textarea").val();

                            if (encryptTexts === "") {
                                alert(dialogLang.emptyAlert);
                                return false;
                            }

                            encryptTexts = encryptTexts.split("\n");

                            for (var i in encryptTexts) {
                                encryptTexts[i] = encryptTexts[i];
                            }

                            encryptTexts = encryptTexts.join("\n");

                            if (cursor.ch !== 0) {
                                encryptTexts = "\r\n\r\n" + encryptTexts;
                            }

                            cm.replaceSelection('\n<div class=' + '\'' + 'encryptTexts' + '\'' + ' style=' + '\'' + 'border:1px solid #000' + '\'' + '><p>加密内容:</p><p>' + encryptTexts + '</p></div>\n');

                            this.hide().lockScreen(false).hideMask();

                            //删除对话框
                            this.remove();

                            return false;
                        }],
                        cancel: [lang.buttons.cancel, function () {
                            this.hide().lockScreen(false).hideMask();
                            //删除对话框
                            this.remove();
                            return false;
                        }]
                    }
                });
                var fileInput = dialog.find("[name=\"" + classPrefix + "encrypt-file\"]");
                fileInput.bind("change", function () {
                    var fileName = fileInput.val();
                    // var isImage   = new RegExp("(\\.(" + settings.imageFormats.join("|") + "))$", "i"); // /(\.(webp|jpg|jpeg|gif|bmp|png))$/

                    if (fileName === "") {
                        alert(imageLang.uploadFileEmpty);

                        return false;
                    }

                    // loading(true);

                    var submitHandler = function () {
                        var textarea = dialog.find("textarea");
                        var textvalue = textarea[0].value;
                        textarea.val(textvalue + "<a>[加密附件]</a>");


                        // dialog.find("[data-url]").val("加密附件"); // 设置图片地址
                        // var uploadIframe = document.getElementById(iframeName);

                        // uploadIframe.onload = function() {

                        //     loading(false);

                        //     var body = (uploadIframe.contentWindow ? uploadIframe.contentWindow : uploadIframe.contentDocument).document.body;
                        //     var json = (body.innerText) ? body.innerText : ( (body.textContent) ? body.textContent : null);

                        //     json = (typeof JSON.parse !== "undefined") ? JSON.parse(json) : eval("(" + json + ")");

                        //     if(!settings.crossDomainUpload)
                        //     {
                        //       if (json.success === 1)
                        //       {
                        //           dialog.find("[data-url]").val(json.url);
                        //       }
                        //       else
                        //       {
                        //           alert(json.message);
                        //       }
                        //     }

                        //     return false;
                        // };
                    };

                    dialog.find("[type=\"submit\"]").bind("click", submitHandler).trigger("click");
                });
            }




        };

    };

    // CommonJS/Node.js
    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        module.exports = factory;
    }
    else if (typeof define === "function")  // AMD/CMD/Sea.js
    {
        if (define.amd) { // for Require.js

            define(["editormd"], function (editormd) {
                factory(editormd);
            });

        } else { // for Sea.js
            define(function (require) {
                var editormd = require("./../../editormd");
                factory(editormd);
            });
        }
    }
    else {
        factory(window.editormd);
    }

})();
