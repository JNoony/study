/********************
 *
 *  데이터 뿌리기
 * 
 * [ 데이터 파일 ] dataTable.js 
   - 새로 소분류/대분류 추가 하지 않고 텍스트만 추가, 수정시 dataTable 내에 하면됨.
   - '텍스트' 검색
 * 
********************/
// 본문에 뿌려지는 소분류 데이터 (sub 메뉴의 데이터) 
var hair1 = [ '정제수','다이소듐라우레스설포석시네이트','코카미도프로필하이드록시설테인','라우릴글루코사이드','코카마이드미파','글리세린','소듐클로라이드','하이드록시아세토페논',
            '카프릴릴글라이콜','다이프로필렌글라이콜','다이포타슘글리시리제이트','부틸렌글라이콜','1,2-헥산다이올','로즈마리잎오일','폴리쿼터늄-10','시트릭애씨드',
            '소듐시트레이트','다이소듐이디티에이','아르간커넬오일','아보카도오일','호호바씨오일','메도우폼씨오일','해바라기씨오일','미역추출물','달맞이꽃추출물' ]

var hair2 = [ '정제수','다이소듐라우레스설포석시네이트','라우릴글루코사이드','코카미도프로필하이드록시설테인','코카마이드미파','글리세린','소듐클로라이드','하이드록시아세토페논','카프릴릴글라이콜',
            '다이프로필렌글라이콜','다이포타슘글리시리제이트','로즈마리잎오일','폴리쿼터늄-67','소듐아세테이트','시트릭애씨드','다이소듐이디티에이','소듐하이알루로네이트','소듐아세틸레이티드하이알루로네이트',
            '하이드롤라이즈드하이알루로닉애씨드','부틸렌글라이콜','1,2-헥산다이올','캠퍼','미역추출물','달맞이꽃추출물' ]

var hair3 = [ '정제수','세테아릴알코올','세틸알코올','글리세릴스테아레이트','스테아라미도프로필다이메틸아민','해바라기씨오일','아르간커넬오일','글리세린','쉐어버터','하이드록시아세토페논',
            '로즈마리잎오일','카프릴릴글라이콜','다이프로필렌글라이콜','하이드록시에틸우레아','구아하이드록시프로필트리모늄클로라이드','올리브오일','퀸즈랜드넛오일','판테놀','바이오틴',
            '미역추출물','달맞이꽃추출물','글루타믹애씨드','다이소듐이디티에이','다이포타슘글리시리제이트','소듐클로라이드','알지닌' ]

var skin1 = [ '정제수','부틸렌글라이콜','메틸프로판다이올','글리세린','다이프로필렌글라이콜','잔탄검','다이포타슘글리시리제이트','판테놀','카보머','알지닌',
            '1,2-헥산다이올','달맞이꽃추출물','병풀추출물','소듐하이알루로네이트','다이소듐이디티에이','하이드록시아세토페논','카프릴릴글라이콜','에틸헥실글리세린' ]

var skin2 = [ '글리세린','정제수','소듐라우로일글루타메이트','소듐코코일글라이시네이트','코코-베타인','소듐클로라이드','시트릭애씨드','달맞이꽃추출물','사철쑥추출물 (9,500ppm)','병풀추출물',
            '소듐시트레이트','하이드록시아세토페논','카프릴릴글라이콜','다이프로필렌글라이콜','다이포타슘글리시리제이트','부틸렌글라이콜','1,2-헥산다이올','잔탄검','마데카소사이드',
            '우엉뿌리추출물','코튼꽃추출물','작약뿌리추출물','스페인감초뿌리추출물','하수오뿌리추출물','진흙버섯추출물','뽕나무껍질추출물','고삼뿌리추출물','로즈우드오일' ]

var skin3 = [ '병풀추출물','사철쑥추출물 (9,500ppm)','부틸렌글라이콜','글리세린','1,2-헥산다이올','정제수','다이프로필렌글라이콜','세틸에틸헥사노에이트','세테아릴올리베이트','솔비탄올리베이트',
            '달맞이꽃씨추출물','폴리글루타믹애씨드','하이드롤라이즈드글라이코사미노글리칸','소듐하이알루로네이트','수크로오스스테아레이트','하이드로제네이티드포스파티딜콜린',
            '소듐하이알루로네이트크로스폴리머','세테아릴알코올','하이드롤라이즈드하이알루로닉애씨드','하이드록시프로필트라이모늄하이알루로네이트','에틸헥실글리세린','아시아티코사이드',
            '마데카식애씨드','아시아틱애씨드','마데카소사이드','소듐아세틸레이티드하이알루로네이트','메틸프로판다이올','벤질글라이콜','카보머','트로메타민','클로페네신','다이소듐이디티에이' ]

var body1 = [ '정제수','소듐C14-16올레핀설포네이트','코카미도프로필하이드록시설테인','다이소듐라우레스설포석시네이트','글리세린','부틸렌글라이콜','코카마이드미파','소듐클로라이드',
            '사철쑥추출물 (9,500ppm)','달맞이꽃추출물(5,000ppm)','미역추출물(4,500ppm)','소듐메틸코코일타우레이트','로즈우드오일','폴리쿼터늄-10','베타인','소듐하이알루로네이트','아르간커넬오일','소듐시트레이트',
            '시트릭애씨드','다이소듐이디티에이','하이드록시아세토페논','다이프로필렌글라이콜','카프릴릴글라이콜','다이포타슘글리시리제이트','1,2-헥산다이올' ]


//데이터 박스 생성 - 리스트형식
var filterBody = document.querySelector('.filter-body');
var dataBoxTitle = (num,tit_ko,tit_en)=>{
    var filterBox = document.createElement('div');
        filterBox.className = 'filter-con-box';
        filterBox.dataset.id = `box-${num}`;
        filterBody.appendChild(filterBox);
    var boxUi='';
    boxUi = `<div class="filter-con-box-title" >
                <p class="txt-b txt-ko">${tit_ko}</p>
                <p class="txt-en txt-last">${tit_en}</p>
            </div>`;
    filterBox.innerHTML = boxUi;
}
//데이터 박스 생성 - 페이퍼박스 형식 [데이터 전부 보이기]
var dataBox = (num,tit_ko,tit_en,tit_sub,title1,text1,title2,text2,title3,text3) => {
    var filterBox = document.createElement('div');
        filterBox.className = 'popup';
        filterBox.dataset.id = `popup-${num}`
        filterBody.appendChild(filterBox);
    var boxUi='';
    boxUi = `<div class="popup-bg"></div>
            <ul class="filter-con-box popup-con">
                <li class="filter-con-box-title" >
                    <p class="txt-b txt-ko">${tit_ko}</p><p class="txt-en">${tit_en}</p>
                    <p class="txt-en txt-last">${tit_sub}</p>
                </li>
                <li class="filter-con-box-info">
                    <div class="filter-con-box-info-text">
                        <p class="txt-b txt-ko">${title1}</p>
                        <p class="txt-ko">${text1}</p>
                    </div>
                    <div class="filter-con-box-info-text">
                        <p class="txt-b txt-ko">${title2}</p>
                        <p class="txt-ko scroll">${text2}</p>
                    </div>
                    <div class="filter-con-box-info-text">
                        <p class="txt-b txt-ko">${title3}</p>
                        <p class="txt-ko">${text3}</p>
                    </div>
                </li>
            </ul>`;
    filterBox.innerHTML = boxUi;
}

// 데이터뿌리기 - 리스트 형식 데이터
var num = 0;
var dataFilter = (searchName)=>{
    var newArr = Data.filter(function(item,idx){
        return item.tit_ko = searchName[idx];
    });
    for( var i=0;i<searchName.length;i++){
        dataBoxTitle(i,newArr[i].tit_ko, newArr[i].tit_en );        
    }
    return newArr;
}
// 데이터뿌리기 - 페이지박스(팝업용) 데이터
var popupDataFilter = (searchName,i)=>{
    var newArr = Data.filter(function(item,idx){
        return item.tit_ko = searchName[idx];
    });
    dataBox(i,newArr[i].tit_ko, newArr[i].tit_en, newArr[i].tit_sub, 
        newArr[i].title1, newArr[i].text1, 
        newArr[i].title2, newArr[i].text2, 
        newArr[i].title3, newArr[i].text3 );
    return newArr;
}


/********************
* visual title - 배너 제목
* 소분류 클릭시 텍스트 변경
********************/
var pageTitle = document.querySelector('.filter-visual .filter-title');
var titlText = document.querySelector('.filter-key-sub .filter-btn.on');
    pageTitle.innerHTML = titlText.innerHTML;


/********************
 *  popup  
********************/
//popup close
function popupClose(){
    // scroll on/off
    $('.popup').is(':visible') == true ? scrollOff() : scrollOn();
    // close 
    $('.popup-bg').click(function(){  
        scrollOn();
        $('.popup').remove();
    })
}
//popup open - scroll off
function scrollOff(){
    $('html, body').css({overflow: 'hidden'});
    $('body').addClass('scrollOff');
}
function scrollOn(){
    $('html, body').css({ overflow: 'auto'});
    $('body').removeClass('scrollOff');
}


    
    // 현재 페이지 파일명 가져오기
    var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
	// ---- 기본 데이터 테이블 불러오기
    if( thisfilefullname === 'hair.html' ) dataFilter(hair1);
    if( thisfilefullname === 'skin.html' ) dataFilter(skin1);
    if( thisfilefullname ==='body.html' ) dataFilter(body1);

    $('.filter-btn').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    //---- 소분류 클릭시 이벤트
    $('.filter-key-sub .filter-btn').click(function(){
        pageTitle.innerHTML = $(this).text();

        var thisId = $(this).attr('id');
        switch ( thisId ){
            case 'hair1': filterBody.innerHTML = '';dataFilter(hair1); break;
            case 'hair2': filterBody.innerHTML = '';dataFilter(hair2); break;
            case 'hair3': filterBody.innerHTML = '';dataFilter(hair3); break;
            case 'skin1': filterBody.innerHTML = '';dataFilter(skin1); break;
            case 'skin2': filterBody.innerHTML = '';dataFilter(skin2); break;
            case 'skin3': filterBody.innerHTML = '';dataFilter(skin3); break;
            case 'body1': filterBody.innerHTML = '';dataFilter(body1); break;
            default: return false;
        }

        //리스트 클릭시 팝업 생성    
        $('.filter-body .filter-con-box').click(function(e){
            var dataId = $(this).data('id');
            var dataIdNum = dataId.slice(dataId.lastIndexOf('-')+1);

            //popup
            if( thisId == 'hair1' ) popupDataFilter(hair1,dataIdNum);
            if( thisId == 'hair2' ) popupDataFilter(hair2,dataIdNum);
            if( thisId == 'hair3' ) popupDataFilter(hair3,dataIdNum);
            if( thisId == 'skin1' ) popupDataFilter(skin1,dataIdNum);
            if( thisId == 'skin2' ) popupDataFilter(skin2,dataIdNum);
            if( thisId == 'skin3' ) popupDataFilter(skin3,dataIdNum);
            if( thisId == 'body1' ) popupDataFilter(body1,dataIdNum);
            popupClose()

        });
        
    });

    
    //----현재 화면에서 리스트 클릭시 팝업 생성    
    $('.filter-body .filter-con-box').click(function(e){
        var dataId = $(this).data('id');//div id값
        var dataIdNum = dataId.slice(dataId.lastIndexOf('-')+1);//숫자만 추출
        var subChk = $('.filter-key-sub .filter-btn.on').attr('id');//체크된 소분류값

        //popup
        if( subChk == 'hair1' ) popupDataFilter(hair1,dataIdNum);
        if( subChk == 'skin1' ) popupDataFilter(skin1,dataIdNum);
        if( subChk == 'body1' ) popupDataFilter(body1,dataIdNum);
        popupClose();
    });

