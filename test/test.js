/********************
 *
 *  데이터 뿌리기
 * 
********************/
//sub 메뉴의 데이터
// var hair1 = [ '정제수','다이소듐라우레스설포석시네이트','코카미도프로필하이드록시설테인','라우릴글루코사이드','코카마이드미파','글리세린','소듐클로라이드','하이드록시아세토페논',
//             '카프릴릴글라이콜','다이프로필렌글라이콜','다이포타슘글리시리제이트','부틸렌글라이콜','1,2-헥산다이올','로즈마리잎오일','폴리쿼터늄-10','시트릭애씨드',
//             '소듐시트레이트','다이소듐이디티에이','아르간커넬오일','아보카도오일','호호바씨오일','메도우폼씨오일','해바라기씨오일','미역추출물','달맞이꽃추출물' ]

// var hair2 = [ '정제수','다이소듐라우레스설포석시네이트','라우릴글루코사이드','코카미도프로필하이드록시설테인','코카마이드미파','글리세린','소듐클로라이드','하이드록시아세토페논','카프릴릴글라이콜',
//             '다이프로필렌글라이콜','다이포타슘글리시리제이트','로즈마리잎오일','폴리쿼터늄-67','소듐아세테이트','시트릭애씨드','다이소듐이디티에이','소듐하이알루로네이트크로스폴리머',
//             '소듐아세틸레이티드하이알루로네이트','하이드롤라이즈드하이알루로닉애씨드','부틸렌글라이콜','1,2-헥산다이올','캠퍼','미역추출물','달맞이꽃추출물' ]

// var hair3 = [ '정제수','세테아릴알코올','세틸알코올','글리세릴스테아레이트','스테아라미도프로필다이메틸아민','해바라기씨오일','아르간커넬오일','글리세린','쉐어버터','하이드록시아세토페논',
//             '로즈마리잎오일','카프릴릴글라이콜','다이프로필렌글라이콜','하이드록시에틸우레아','구아하이드록시프로필트리모늄클로라이드','올리브오일','퀸즈랜드넛오일','판테놀','바이오틴',
//             '미역추출물','달맞이꽃추출물','글루타믹애씨드','다이소듐이디티에이','다이포타슘글리시리제이트','소듐클로라이드','알지닌' ]

// var skin1 = [ '정제수','부틸렌글라이콜','메틸프로판다이올','글리세린','다이프로필렌글라이콜','잔탄검','다이포타슘글리시리제이트','판테놀','카보머','알지닌',
//             '1,2-헥산다이올','달맞이꽃추출물','병풀추출물','소듐하이알루로네이트','다이소듐이디티에이','하이드록시아세토페논','카프릴릴글라이콜','에틸헥실글리세린' ]

// var skin2 = [ '글리세린','정제수','소듐라우로일글루타메이트','소듐코코일글라이시네이트','코코-베타인','소듐클로라이드','시트릭애씨드','달맞이꽃추출물','사철쑥추출물 (9,500ppm)','병풀추출물',
//             '소듐시트레이트','하이드록시아세토페논','카프릴릴글라이콜','다이프로필렌글라이콜','다이포타슘글리시리제이트','부틸렌글라이콜','1,2-헥산다이올','잔탄검','마데카소사이드',
//             '우엉뿌리추출물','코튼꽃추출물','작약뿌리추출물','스페인감초뿌리추출물','하수오뿌리추출물','진흙버섯추출물','뽕나무껍질추출물','고삼뿌리추출물','로즈우드오일' ]

// var skin3 = [ '병풀추출물','사철쑥추출물 (9,500ppm)','부틸렌글라이콜','글리세린','1,2-헥산다이올','정제수','다이프로필렌글라이콜','세틸에틸헥사노에이트','세테아릴올리베이트','솔비탄올리베이트',
//             '달맞이꽃씨추출물','폴리글루타믹애씨드','하이드롤라이즈드글라이코사미노글리칸','소듐하이알루로네이트','수크로오스스테아레이트','하이드로제네이티드포스파티딜콜린',
//             '소듐하이알루로네이트크로스폴리머','세테아릴알코올','하이드롤라이즈드하이알루로닉애씨드','하이드록시프로필트라이모늄하이알루로네이트','에틸헥실글리세린','아시아티코사이드',
//             '마데카식애씨드','아시아틱애씨드','마데카소사이드','소듐아세틸레이티드하이알루로네이트','메틸프로판다이올','벤질글라이콜','카보머','트로메타민','클로페네신','다이소듐이디티에이' ]

// var body1 = [ '정제수','소듐C14-16올레핀설포네이트','코카미도프로필하이드록시설테인','다이소듐라우레스설포석시네이트','글리세린','부틸렌글라이콜','코카마이드미파','소듐클로라이드',
//             '사철쑥추출물 (9,500ppm)','미역추출물','달맞이꽃추출물','소듐메틸코코일타우레이트','로즈우드오일','폴리쿼터늄-10','베타인','소듐하이알루로네이트','아르간커넬오일','소듐시트레이트',
//             '시트릭애씨드','다이소듐이디티에이','하이드록시아세토페논','다이프로필렌글라이콜','카프릴릴글라이콜','다이포타슘글리시리제이트','1,2-헥산다이올' ]



var hair1 = [Data[0],Data[54],Data[55],Data[56],Data[57],Data[3],Data[21],Data[15],Data[16],Data[4],Data[6],Data[1],Data[10],Data[58],Data[59],Data[22],
            Data[24],Data[14],Data[60],Data[61],Data[62],Data[63],Data[64],Data[65],Data[11]]

var hair2 = [Data[0],Data[54],Data[56],Data[55],Data[57],Data[3],Data[21],Data[15],Data[16],Data[4],Data[6],Data[58],Data[66],Data[67],Data[22],Data[14],
            Data[43],Data[50],Data[45],Data[1],Data[10],Data[68],Data[65],Data[11]]

var hair3 = [Data[0],Data[44],Data[70],Data[71],Data[72],Data[64],Data[60],Data[3],Data[73],Data[15],Data[58],Data[16],Data[4],Data[74],Data[75],Data[76],
            Data[77],Data[7],Data[78],Data[65],Data[11],Data[79],Data[14],Data[6],Data[21],Data[9]]

var skin1 = [Data[0],Data[1],Data[2],Data[3],Data[4],Data[5],Data[6],Data[7],Data[8],Data[9],Data[10],Data[11],Data[12],
           Data[13],Data[14],Data[15],Data[16],Data[17]]

var skin2 = [Data[3],Data[0],Data[18],Data[19],Data[20],Data[21],Data[22],Data[11],Data[23],Data[12],Data[24],Data[15],Data[16],
           Data[4],Data[6],Data[1],Data[10],Data[5],Data[25],Data[26],Data[27],Data[28],Data[29],Data[30],Data[31],Data[32],Data[33],Data[34]]

var skin3 = [Data[12],Data[23],Data[1],Data[3],Data[10],Data[0],Data[4],Data[35],Data[36],Data[37],Data[38],Data[39],Data[40],
           Data[13],Data[41],Data[42],Data[43],Data[44],Data[45],Data[46],Data[17],Data[47],Data[48],Data[49],Data[25],Data[45],
           Data[50],Data[2],Data[51],Data[8],Data[52],Data[53],Data[14]]

var body1 = [Data[0],Data[80],Data[55],Data[54],Data[3],Data[1],Data[57],Data[21],Data[23],Data[65],Data[11],Data[81],Data[34],Data[59],Data[82],
           Data[13],Data[60],Data[24],Data[22],Data[14],Data[15],Data[4],Data[16],Data[6],Data[10]]


//데이터 박스 생성
var filterBody = document.querySelector('.filter-body');
var dataBox = (num,tit_ko,tit_en,tit_sub,title1,text1,title2,text2,title3,text3) => {
    var filterBox = document.createElement('div');
        filterBox.className = 'filter-con-box';
        filterBox.dataset.id = 'box'+num;
        filterBody.appendChild(filterBox);
    var boxUi='';
    boxUi = '<ul>';
    boxUi +=    '<li class="filter-con-box-title" >';
    boxUi +=         '<p class="txt-b txt-ko">'+tit_ko+'</p><p class="txt-en">'+tit_en+'</p>';
    boxUi +=         '<p class="txt-en txt-last">'+tit_sub+'</p>';
    boxUi +=     '</li>';
    boxUi +=     '<li>';
    boxUi +=         '<div>';
    boxUi +=             '<p class="txt-b txt-ko">'+title1+'</p>';
    boxUi +=             '<p class="txt-ko">'+text1+'</p>';
    boxUi +=         '</div>';
    boxUi +=         '<div>';
    boxUi +=             '<p class="txt-b txt-ko">'+title2+'</p>';
    boxUi +=             '<p class="txt-ko scroll">'+text2+'</p>';
    boxUi +=         '</div>';
    boxUi +=         '<div>';
    boxUi +=             '<p class="txt-b txt-ko">'+title3+'</p>';
    boxUi +=             '<p class="txt-ko">'+text3+'</p>';
    boxUi +=         '</div>';
    boxUi +=     '</li>';
    boxUi += '</ul>';
    filterBox.innerHTML = boxUi;
}


// var num = 0;
// var newData = [];
// var dataFilter = function(searchName){
//     var newArr = Data.filter(function(item,idx){
//         return item.tit_ko == searchName[idx];
//     });
//     for( var i=0;i<newArr.length;i++){
//         dataBox(i,newArr[i].tit_ko, newArr[i].tit_en, newArr[i].tit_sub, 
//                 newArr[i].title1, newArr[i].text1, 
//                 newArr[i].title2, newArr[i].text2, 
//                 newArr[i].title3, newArr[i].text3 );        
//     }
//     console.log(newArr)
//     return newArr;
// }


var dataFilter = function(text){
    filterBody.innerHTML = '';
    for(var i=0;i<text.length;i++){
        dataBox(i, text[i].tit_ko, text[i].tit_en, text[i].tit_sub, 
                text[i].title1, text[i].text1, 
                text[i].title2, text[i].text2, 
                text[i].title3, text[i].text3);
    }
    return false;
}


var dd = [];
var test = [];
for(var i=0;i<Data.length;i++){
    dd.push( `[${Data[i].id}] ${Data[i].tit_ko}` )
}
console.log( dd )

var newArr = Data.filter(function(item,idx){
    return item.tit_ko = skin2;
});
console.log( newArr )




// $.getJSON( './dataTable.json', function(data){
//     var newData = [];

//     $.each( data, function(i,item){
//         console.log(item.length)
//     } )
// } )


/********************
 *
 *  분류
 * 
********************/
//visual title
var pageTitle = document.querySelector('.filter-visual .filter-title');
var titlText = document.querySelector('.filter-key-sub .filter-btn.on');
    pageTitle.innerHTML = titlText.innerHTML;

//depth
var mainTitle = document.querySelector('.filter-key-major .filter-btn.on');
var depth = document.querySelector('.depth span');
    depth.innerHTML = ' '+ mainTitle.innerHTML +' > '+ titlText.innerHTML;



$(function(){


    //현재 페이지 파일명 가져오기
    var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
    if( thisfilefullname === 'hair.html' ) dataFilter( hair1 );
    if( thisfilefullname === 'skin.html' ) dataFilter(skin1);
    if( thisfilefullname ==='body.html' ) dataFilter(body1);

    console.log( thisfilefullname )

    $('.filter-btn').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.filter-key-sub .filter-btn').click(function(){
        pageTitle.innerHTML = $(this).text();
        depth.innerHTML = ' '+ mainTitle.innerHTML +' > '+ $(this).innerHTML;
        

        var thisId = $(this).attr('id');
        switch ( thisId ){
            case 'hair1': filterBody.innerHTML = '';dataFilter(hair1); break;
            case 'hair2': filterBody.innerHTML = '';dataFilter(hair2); break;
            case 'hair3': filterBody.innerHTML = '';dataFilter(hair3); break;
            case 'skin1': filterBody.innerHTML = '';dataFilter(skin1); break;
            case 'skin2': filterBody.innerHTML = '';dataFilter(skin2); break;
            case 'skin3': filterBody.innerHTML = '';dataFilter(skin3); break;
            case 'body1': filterBody.innerHTML = '';dataFilter(body1); break;
            default:
                return false;
        }
        
        console.log( thisId );

    });

})



