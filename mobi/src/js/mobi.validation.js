/*!
 * Support for jQuery Validation Plugin v1.17.0
 * created 2017 by merryyear45@gmail.com
 */

if (typeof jQuery === 'undefined') {
    throw new Error('inputEraser\'s JavaScript requires jQuery')
  }
 
 (function($){
     $.fn.inputEraser = function(validO, opts){
         return this.each(function(){
             var options = $.extend({}, $.fn.inputEraser.reg_exp_chr, opts || {});
             var $el = $(this);
             var chrExpStr = "";
             var chrExp, chrNegExp, senExp;
             var userAgent = navigator.userAgent;
             var isMobile = false;
       
 
             if (	(userAgent.match(/iPhone|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null	)
                 || 	(userAgent.match(/LG|SAMSUNG|Samsung/) != null	)	){
                 isMobile = true;
             }
 
             for(chk in validO){
                 if(chk == 'maxlength'){
                     $el.attr(chk, validO[chk]);
                 }else if(validO[chk]&& options[chk]) {
 
                     chrExpStr+= options[chk].toString().substring( 2, options[chk].toString().length-2 );
 
                 }else{
                     if(validO[chk] && options[chk]){
                         chrExpStr += options[chk].toString().substring( 2, options[chk].toString().length-2 );
                     }
                 }
 
                 //key입력 이후 사용할 벨류
                 if(validO[chk] && $.fn.inputEraser.reg_exp_sen[chk]){
                     senExp = $.fn.inputEraser.reg_exp_sen[chk];
                 }
 
             }
 
             if(chrExpStr){
                 chrExp = new RegExp(  "["+chrExpStr+"]", "gm");
                 chrNegExp = new RegExp(  "[^"+chrExpStr+"]", "gm");
             }
 
             // 문자 입력시 한단위씩 밸리데이션하는거 추가.(모바일이 아닐 경우)
             // 모바일에서는 이벤트가 없음.(input으로 하면 가능. 그러나 그경우에는 keyCode가 없음)
             if(!isMobile){
                 $el.on('keypress.baliBot',function(e){
                     var chrTyped, chrCode=0, evt=e?e:event;
                     chrCode = (event.which) ? event.which : event.keyCode;
 
                     // 한글일 경우(아스키코드를 벗어나는 값들) keyup, blur에서 체크
                     if(chrCode > 222){return true}
 
                     chrTyped = String.fromCharCode(chrCode);
 
                     if (evt.altKey || evt.ctrlKey ) return true;
 
                     if ( chrTyped.match(chrExp)){
                         return true;
                     }
 
                     if(evt.preventDefault){
                         evt.preventDefault();
                     }
                     evt.returnValue=false;
                     return false;
                 });
             }
 
 
 
                 
      
 
       
        $el.on('change.baliBot keyup.baliBot click.valiBot',function(e){
       
         // 문자 입력후에 표현식에 맞지 않으면 삭제 하는 로직
         var lastChr = (e.target.value).slice((e.target.value).length-1);
         var areA = new RegExp(/[\ㆍ\ᆢ]/,"" );
 
         if(isMobile){
           if(!areA.test(lastChr) ){
             $(e.target).val(e.target.value.replace(chrNegExp, ''));
           }
         }else{
           $(e.target).val(e.target.value.replace(chrNegExp, ''));
         }
         if($(e.target).attr('maxlength')<e.target.value.length){
           e.target.value = e.target.value.substr(0,$(e.target).attr('maxlength'));
         }
         
         
         
         // phoneNum_kr이면 '-', data_kr이면 '/' 추가됨
         if(opts){
           for(key in opts){
               if(opts.hasOwnProperty(key)) {
 
                  if(key == 'phoneNum_kr'){
                          $(e.target).attr('maxlength',13);
                     e.target.value = (phoneNumFormatter(e.target.value));
                     
                  }else if(key == 'date_kr'){
                          $(e.target).attr('maxlength',10);
                          e.target.value = (dateFormatter(e.target.value));
                  }
                  
                  function phoneNumFormatter(telVal) {
                     var retVal = '';
                     retVal = telVal.replace(/[^0-9]/g, '');
                     if (retVal.length <= 3) {
                       retVal = retVal;
                     } else if (retVal.length > 3 && retVal.length < 7) {
                       retVal = retVal.substring(0, 3) + "-" + retVal.substring(3);
                     } else if (retVal.length >= 7 && retVal.length < 11) {
                       retVal = retVal.substring(0, 3) + "-" + retVal.substring(3, 6) + "-" + retVal.substring(6);
                     } else if (telVal.length == 11) {
                       retVal = retVal.substring(0, 3) + "-" + retVal.substring(3, 7) + "-" + retVal.substring(7);
                     } else {
                       retVal = retVal.substring(0, 3) + "-" + retVal.substring(3, 7) + "-" + retVal.substring(7, 11);
                     }
                     return retVal;
                   }
                  
                     
                  function dateFormatter(telVal){
                       var retVal = '';
                       retVal = telVal.replace(/[^0-9]/g, '');
                       if (retVal.length <= 4) {
                         retVal = retVal;
                       } else if (retVal.length > 4 && retVal.length < 7) {
                         retVal = retVal.substring(0, 4) + "/" + retVal.substring(4);
                       } else if (retVal.length >= 7 && retVal.length < 11) {
                         retVal = retVal.substring(0, 4) + "/" + retVal.substring(4, 6) + "/" + retVal.substring(6);
                       } else if (telVal.length == 10) {
                         retVal = retVal.substring(0, 4) + "/" + retVal.substring(4, 6) + "/" + retVal.substring(6);
                       } else {
                         retVal = retVal.substring(0, 4) + "/" + retVal.substring(4, 6) + "/" + retVal.substring(6, 11);
                       }
                       return retVal;
                     }
              }
           }  
         }
         
         // Email2 스트링만들기
         if($(e.target).attr('id') == 'id_email2Button'){
             $('#id_email2Full').val($('#id_email2').val()+$('#id_email2Select').val());
         }
         
       }); 
 
 
             // 모바일의 경우를 위해 분기
             $el.on('blur.baliBot',function(e){
                 e.target.value = e.target.value.substr(0,$(e.target).attr('maxlength'));
                 $(e.target).val(e.target.value.replace(chrNegExp, ''));
             });
 
             // 문자 입력후에 표현식에 맞지 않으면 삭제 하는 로직
             $el.on('paste.baliBot',function(e){
 
                 var content;
                 e.preventDefault();
 
                 if( e.clipboardData ){
                     content = e.clipboardData.getData('text/plain');
 
                     if(chrNegExp.test(content)){
                         alert(" 적절하지 않은 형식입니다. \n 다시 한번 확인해 주세요.");
                         content = "";
                         return false;
                     }else{
                         if(senExp && !senExp.test(content)){
                             alert(" 적절하지 않은 형식입니다. \n 다시 한번 확인해 주세요.");
                             content = "";
                             return false;
                         }
                         if($(e.target).attr('maxlength') && content.length > $(e.target).attr('maxlength')){
                             alert(" 최대길이 ["+$(e.target).attr('maxlength') +"]자를 초과하였습니다.");
                             content = "";
                             return false;
                         }
                     }
                     document.execCommand('insertText', false, content);
                     return;
                 }else if( window.clipboardData ){
                     content = window.clipboardData.getData('Text');
 
                     if(chrNegExp.test(content)){
                         alert(" 적절하지 않은 형식입니다. \n 다시 한번 확인해 주세요.");
                         content = "";
                         return false;
                     }else{
                         if(senExp && !senExp.test(content)){
                             alert(" 적절하지 않은 형식입니다. \n 다시 한번 확인해 주세요.");
                             content = "";
                             return false;
                         }
 
                         if($(e.target).attr('maxlength') && content.length > $(e.target).attr('maxlength')){
                             alert(" 최대길이 ["+$(e.target).attr('maxlength') +"]자를 초과하였습니다.");
                             content = "";
                             return false;
                         }
                     }
 
                     if (window.getSelection){
                         window.getSelection().getRangeAt(0).insertNode( document.createTextNode(content) );
                     }
                     return;
                 }else if( e.originalEvent.clipboardData ){
                     content = e.originalEvent.clipboardData.getData('text/plain');
                     if(chrNegExp.test(content)){
                         alert(" 적절하지 않은 형식입니다. \n 다시 한번 확인해 주세요.");
                         content = "";
                         return false;
                     }else{
 
                         if(senExp && !senExp.test(content)){
                             alert(" 적절하지 않은 형식입니다. \n 다시 한번 확인해 주세요.");
                             content = "";
                             return false;
                         }
 
                         if($(e.target).attr('maxlength') && content.length > $(e.target).attr('maxlength')){
                             alert(" 최대길이 ["+$(e.target).attr('maxlength') +"]자를 초과하였습니다.");
                             content = "";
                             return false;
                         }
                     }
                     document.execCommand('insertText', false, content);
                     return;
                 }
 
             });
 
         });
     };
 
     $.fn.inputEraser.reg_exp_chr = {
                 hangul : new RegExp(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,""),
                 ENGLISH : new RegExp(/[A-Z]/ , ""),
                 english : new RegExp(/[a-z]/ , ""),
                 digits  : new RegExp(/[\d]/ , ""),
                 space   : new RegExp(/[\s]/ , ""),
                 special : new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/,"" )
     }
     $.fn.inputEraser.reg_exp_sen = {
                 email		: new RegExp(/^[\w]([-_\.]?[\w])*@[\w]([-_\.]?[\w])*\.[\w]{2,3}$/i,"gm") ,
                 appURL	: new RegExp(/^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/,"gmi") ,
                 //phoneNum_kr	: new RegExp(/^01[\d]{1}[\d]{4}[\d]{4}$/,"g"),
         phoneNum_kr	: new RegExp(/^01{1}[016789]{1}-[0-9]{3,4}-[0-9]{4}$/,"g"),
         date_kr	: new RegExp(/^[\d]{4}-[\d]{2}-[\d]{2}$/,"g"),
                 email_id	: new RegExp(/^[a-z0-9_]{4,20}$/,"g"),
     }
 
 })(jQuery);
 
  // 비어있는지 체크
     function isEmpty(input) {
         if (input==null || input == undefined || input.replace(/ /gi,"") == "" ){
             return true;
         }
         return false
     }
 