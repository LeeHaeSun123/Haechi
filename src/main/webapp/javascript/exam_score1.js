/**
 * 성적 정보처리
 * date : 2022.03(jobtc) 
 */

var frm = document.frm;
var info = document.getElementById('info')

var students=[
   {'no':1, 'name':'hong', 'grade':1},
   {'no':2, 'name':'kim' , 'grade':1},
   {'no':3, 'name':'lee' , 'grade':2},
   {'no':4, 'name':'park', 'grade':3},
   {'no':5, 'name':'nam' , 'grade':4}
]
var subjects=['국어', '영어', '수학', '전산', '세계사', '역사']
var scores=[];//성적 정보 저장
var scores_serial = 0; // 입력된 성적 순번
var gSerial; // 조회 화면에서 선택한 serial값

// 과목 설정
subjects.sort();
for(x of subjects){
   frm.subject.append(new Option(x, x))
}


// 검색 버튼이 클릭되면
frm.btnFind.onclick = function(){
   var msg='학번을 확인해 주세요.';
   frm.name.value='';
   frm.grade.value='';
   frm.subject.value='';
   frm.score.value = '';
   gSerial=0;
   
   for(x of students){
      if(x.no == frm.no.value){
         frm.name.value = x.name;
         frm.grade.value = x.grade;
         msg = '성적을 입력해 주세요';
         break;
      }
   }
   info.innerHTML = msg;
}

frm.btnSave.onclick = function(){ 
   scores_serial++;//성적의 저장 순번
   var s ={ // JSON type의 자료구조
      "serial" : scores_serial,
      "no"     : frm.no.value,
      "subject": frm.subject.value,
      "score"  : Number(frm.score.value)
   }
   
   
   scores.push(s);
   info.innerHTML = '자료가 저장되었습니다.'
                  + '<b> 총건수 : ' 
               + scores.length + '</b>'
 
   frm.no.value='';
   frm.name.value='';
   frm.grade.value='';
   frm.subject.value='';
   frm.score.value='';
   frm.no.focus();
   gSerial=0;
}

frm.btnPrint.onclick = function() {
   var str='';
   var r = document.getElementById('result');
   for(x of scores){
      for(s of students){
         if(x.no==s.no){
            str += "<div class='items' onclick='go("+ x.serial + ")'    >"
               +  "   <span class='serial'>" + x.serial + "</span>"
               +  "   <span class='no'>"     + x.no     + "</span>"
               +  "   <span class='name'>"   + s.name   + "</span>"
               +  "   <span class='grade'>"  + s.grade  + "</span>"
               +  "   <span class='subject'>"+ x.subject+ "</span>"
               +  "   <span class='score'>"  + x.score  + "</span>"
               + "</div>";
         }
      }
   }
   r.innerHTML = str;
   gSerial=0;
 }
frm.btnUpdate.onclick = function(){
   for(s of scores){
      if(s.serial == gSerial){
         s.subject = frm.subject.value;
         s.score = Number(frm.score.value);
         frm.btnPrint.click();
         gSerial = 0;
         break;
      }
   }
}
frm.btnDelete.onclick = function(){ 
   for(s in scores){
      if(scores[s].serial == gSerial){
         scores.splice(s,1);
         frm.btnPrint.click();
         info.innerHTML = ' 데이터가 삭제되었습니다.'
         frm.no.value = '';
         frm.name.value = '';
         frm.grade.value = '';
         frm.subject.value = '';
         frm.score.value='';
         frm.no.focus();
         gSerial = 0;
      }
   }
   
}

function go(serial){
   for(s of scores){
      if(s.serial == serial){
         frm.no.value = s.no;
         frm.subject.value = s.subject;
         frm.score.value = s.score;
         gSerial = serial;
         
         for(x of students){
            if(x.no == s.no){
               frm.name.value = x.name;
               frm.grade.value = x.grade;
               break;
            }
         }
      }
   }
}

