/********************
 *
 *  데이터 뿌리기
 * 
********************/
//데이터 박스 생성
var filterBody = document.querySelector('.filter-body');
var dataBox = (num,tit_ko,tit_en,tit_sub,title1,text1,title2,text2,title3,text3) => {
    var filterBox = document.createElement('div');
        filterBox.className = 'filter-con-box';
        filterBox.dataset.id = `box${num}`
        filterBody.appendChild(filterBox);
    var boxUi='';
    boxUi = `<ul>
                <li class="filter-con-box-title" >
                    <p class="txt-b txt-ko">${tit_ko}</p><p class="txt-en">${tit_en}</p>
                    <p class="txt-en txt-last">${tit_sub}</p>
                </li>
                <li>
                    <div>
                        <p class="txt-b txt-ko">${title1}</p>
                        <p class="txt-ko">${text1}</p>
                    </div>
                    <div>
                        <p class="txt-b txt-ko">${title2}</p>
                        <p class="txt-ko scroll">${text2}</p>
                    </div>
                    <div>
                        <p class="txt-b txt-ko">${title3}</p>
                        <p class="txt-ko">${text3}</p>
                    </div>
                </li>
            </ul>`;
    filterBox.innerHTML = boxUi;
}

/*
* sub 메뉴의 데이터
* 
* --  dataTable.js 에 저장된 데이터 [순서]이름 / 데이터 리스트 명 = Data
*     데이터리스트명[순서] 로 화면단에 나열.
*     ex) 글리세린 ==> Data[3]
*         병풀추출물(7,800ppm)  ==> Data[12]
*
* [0]정제수, [1]부틸렌글라이콜, [2]메틸프로판다이올, [3]글리세린, [4]다이프로필렌글라이콜, [5]잔탄검, [6]다이포타슘글리시리제이트, [7]판테놀, [8]카보머, [9]알지닌, [10]1,2-헥산다이올, 
* [11]달맞이꽃추출물(8,800ppm), [12]병풀추출물(7,800ppm), [13]소듐하이알루로네이트, [14]다이소듐이디티에이, [15]하이드록시아세토페논, [16]카프릴릴글라이콜, [17]에틸헥실글리세린, 
* [18]소듐라우로일글루타메이트, [19]소듐코코일글라이시네이트, [20]코코-베타인, [21]소듐클로라이드, [22]시트릭애씨드, [23]사철쑥추출물 (9,500ppm), [24]소듐시트레이트, [25]마데카소사이드, 
* [26]우엉뿌리추출물, [27]코튼꽃추출물, [28]작약뿌리추출물, [29]스페인감초뿌리추출물, [30]하수오뿌리추출물, [31]진흙버섯추출물, [32]뽕나무껍질추출물, [33]고삼뿌리추출물, [34]로즈우드오일, 
* [35]세틸에틸헥사노에이트, [36]세테아릴올리베이트, [37]솔비탄올리베이트, [38]달맞이꽃씨추출물, [39]폴리글루타믹애씨드, [40]하이드롤라이즈드글라이코사미노글리칸, [41]하이드로제네이티드포스파티딜콜린, 
* [42]수크로오스스테아레이트, [43]소듐하이알루로네이트크로스폴리머, [44]세테아릴알코올, [45]하이드롤라이즈드하이알루로닉애씨드, [46]하이드록시프로필트라이모늄하이알루로네이트, [47]아시아티코사이드, 
* [48]마데카식애씨드, [49]아시아틱애씨드, [50]소듐아세틸레이티드하이알루로네이트, [51]벤질글라이콜, [52]트로메타민, [53]클로페네신, [54]다이소듐라우레스설포석시네이트, [55]코카미도프로필하이드록시설테인, 
* [56]라우릴글루코사이드, [57]코카마이드미파, [58]로즈마리잎오일, [59]폴리쿼터늄-10, [60]아르간커넬오일, [61]아보카도오일, [62]호호바씨오일, [63]메도우폼씨오일, [64]해바라기씨오일, [65]미역추출물, 
* [66]폴리쿼터늄-67, [67]소듐아세테이트, [68]캠퍼, [69]스테아릴알코올, [70]세틸알코올, [71]글리세릴스테아레이트, [72]스테아라미도프로필다이메틸아민, [73]쉐어버터, [74]하이드록시에틸우레아, 
* [75]구아하이드록시프로필트리모늄클로라이드, [76]올리브오일, [77]퀸즈랜드넛오일, [78]바이오틴, [79]글루타믹애씨드, [80]소듐C14-16올레핀설포네이트, [81]소듐메틸코코일타우레이트, [82]베타인, 
* [83]병풀추출물(35.9298325%), [84]사철쑥추출물(35.9288325%), [85]카프릴릭/카프릭트라이글리세라이드, [86]하이알루로닉애씨드, [87]프로판다이올,
*/
var subData = {
    hair1:[Data[0],Data[54],Data[55],Data[56],Data[57],Data[3],Data[21],Data[15],Data[16],Data[4],
            Data[6],Data[1],Data[10],Data[58],Data[59],Data[22],Data[24],Data[14],Data[60],Data[61],
            Data[62],Data[63],Data[64],Data[65],Data[11] ],
    
    hair2:[Data[0],Data[54],Data[56],Data[55],Data[57],Data[3],Data[21],Data[15],Data[16],Data[4],
            Data[6],Data[58],Data[66],Data[67],Data[22],Data[14],Data[43],Data[50],Data[45],Data[1],
            Data[10],Data[68],Data[65],Data[11] ],
    
    hair3:[Data[0],Data[69],Data[70],Data[71],Data[72],Data[64],Data[60],Data[3],Data[73],Data[15],
            Data[58],Data[16],Data[4],Data[74],Data[75],Data[76],Data[77],Data[7],Data[78],Data[65],
            Data[11],Data[79],Data[14],Data[6],Data[21],Data[9] ],
    
    skin1:[Data[0],Data[1],Data[2],Data[3],Data[4],Data[5],Data[6],Data[7],Data[8],Data[9],Data[10],
           Data[11],Data[12],Data[13],Data[14],Data[15],Data[16],Data[17] ],
    
    skin2:[Data[3],Data[0],Data[18],Data[19],Data[20],Data[21],Data[22],Data[90],Data[23],Data[91],
           Data[24],Data[15],Data[16],Data[4],Data[6],Data[1],Data[10],Data[5],Data[25],Data[26],
           Data[27],Data[28],Data[29],Data[30],Data[31],Data[32],Data[33],Data[34] ],
    
    skin3:[Data[83],Data[84],Data[1],Data[3],Data[10],Data[0],Data[4],Data[35],Data[36],Data[37],
           Data[38],Data[39],Data[40],Data[13],Data[41],Data[85],Data[42],Data[43],Data[44],Data[45],Data[46],
           Data[17],Data[47],Data[48],Data[49],Data[25],Data[86],Data[50],Data[87],Data[51],Data[8],
           Data[52],Data[53],Data[14] ],
    
    body1:[Data[0],Data[80],Data[55],Data[54],Data[3],Data[1],Data[57],Data[21],Data[23],Data[88],
           Data[89],Data[81],Data[34],Data[59],Data[82],Data[13],Data[60],Data[24],Data[22],Data[14],
           Data[15],Data[4],Data[16],Data[6],Data[10] ]
}

var dataTable = (text) => {
    filterBody.innerHTML = '';
    for(var i=0;i<text.length;i++){
        dataBox(i, text[i].tit_ko, text[i].tit_en, text[i].tit_sub, 
                text[i].title1, text[i].text1, 
                text[i].title2, text[i].text2, 
                text[i].title3, text[i].text3);
    }
    return false;
}

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
    depth.innerHTML = ` ${mainTitle.innerHTML} > ${titlText.innerHTML}`;

 
 //현재 페이지 파일명 가져오기
 var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
 if( thisfilefullname === 'hair.html' ) dataTable(subData.hair1);
 if( thisfilefullname === 'skin.html' ) dataTable(subData.skin1);
 if( thisfilefullname ==='body.html' ) dataTable(subData.body1);

 console.log( thisfilefullname )

 $('.filter-btn').click(function(){
      $(this).addClass('on').siblings().removeClass('on');
 });

 $('.filter-key-sub .filter-btn').click(function(){
     pageTitle.innerHTML = $(this).text();
     depth.innerHTML = ` ${mainTitle.innerHTML} > ${this.innerHTML}`; 
 });








