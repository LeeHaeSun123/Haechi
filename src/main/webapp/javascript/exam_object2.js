/**
 * 
 */
function Info(){ //함수 Info를 생성(함수 Info를 실행 할 때)
   this.account=0;
   this.flag;//입금 or 출금
   this.date;
   this.amount;   
}
var bank=[]; //bank배열 생성
var account=[
   {'name':'kim', 'no': '12345', 'balance' : 0 },
   {'name':'lee', 'no': '67890', 'balance' : 0 }
]

var frm = document.bank;

//입력금액에 천단위 분리기호 넣기
frm.amount.onkeyup = function(){
	var temp = frm.amount.value.replaceAll(',','');
	temp = Number(temp).toLocaleString('ko');
	frm.amount.value = temp;
}
//date태그에 초기 날짜값 설정
frm.nal.valueAsDate = new Date();

//예금주명 표시
frm.account.onblur = function(){ //account(계좌)가 onblur=cursor(포커스)에 벗어났을 때
	info = checkAccount(frm.account.value);//checkAccount는 account의 초기값을 나타내며 변수 info에 대입
	if(info){ //만약 info가
		frm.accName.value = info.name; //accName(계좌 이름)의 값이 info의 이름과 같을 때
	}else{
		alert('계좌번호를 확인하세요.')
	}
}

// 신규 계좌추가
frm.btnAddAccount.onclick = function(){ //버튼 계좌추가(btnAddAcount)가 클릭했을 때
   var win = window.open( //변수 win은 페이지를 오픈한다
      'exam_object2_addAccount.html',
      'win',
      'width=320, height=220' //상세 정보
   )
}

// 전체 계좌정보 출력
frm.btnPrintAccount.onclick = function(){ //버튼 계좌출력(btnPrintAccount)를 클릭했을 때
   var r = document.getElementById('result'); //변수 r은 id='result'인 <div>영역에 출력한다(표시된다)
   var str = "<div class='title'>"
         + "   <span class='no'>계좌번호</span>"
         + "   <span class='name'>예금주</span>"
         + "   <span class='balance'>잔액</span>"
         + "</div>";
   
   for(x of account){
      str += "<div class='item'>"
         + "   <span class='no'>"      + x.no      + "</span>"
         + "   <span class='name'>"    + x.name    + "</span>"
         + "   <span class='balance'>" + x.balance.toLocaleString('ko') +"</span>"
         + "</div>";
   }
         
   r.innerHTML = str;         
}



// 날짜순으로 내림차순 정렬
function nalDesc(x,y){
   if(y.date > x.date) return 1;
   else return -1;
}


frm.btnSave.onclick = function(){
   var no = frm.account.value;
   var acc = checkAccount(no)
   if(acc == null){
      alert('해당 계좌가 없구먼.');
      return;
   }
   
   var info = new Info();
   info.account = frm.account.value;
   //사용자가 지정한 날짜에 현재 시간을 추가
   var now = new Date();
   var y = frm.nal.value.substr(0,4);
   var m = frm.nal.vlaue.substr(5,2);
   var d = frm.nal.value.substr(8,2);
   
   var tempDate = new Date();
   tempDate.setFullYear(y);
   tempDate.setMonth(m-1);
   tempDate.setDate(d);
   
   info.date = new Date().toLocaleString('ko');
   
   //천단위 분리기호를 숫자로 변환
   tempAmt = frm.amount.value.replaceAll(',','');
   info.amount = Number(tempAmt);
   
   
   if(frm.trans[0].checked){
      info.flag = frm.trans[0].value;
      deposit(info);
   }else{
      info.flag = frm.trans[1].value;
      withdraw(info);
   }
   
}
// 출금처리(잔고 감소)
function withdraw(info){
   rInfo = checkAccount(info.account);
   if(rInfo){
      //계좌가 있다면 잔액체크
      if(rInfo.balance>=info.amount){
         rInfo.balance -= Number(info.amount);
         bank.push(info);
         console.log(rInfo.balance)
      }else{
         alert('잔액이 부족합니다.')
      }
   }else{
      alert('계좌 번호를 확인....')
   }
}

// 입금처리(잔고 증가)
function deposit(info){
   for(x of account){
      if(x.no == info.account){
         x.balance += Number(info.amount);
         console.log(x.balance)
      }
   }
   bank.push(info);//입출력 목록 생성
}



//계좌조회
// 계좌번호를 매개변수로 전달받아
// account[]에서 찾아 있으면 해당 account를 반환
function checkAccount(no){
   var returnInfo;
   for(x of account){
      if(x.no == no){
         returnInfo = x;
         break;
      }
   }
   return returnInfo;
}

frm.btnPrint.onclick = function(){ //버튼을 누를 때 출력되는 함수
   var r = document.getElementById('result'); //변수 r은 id='result'인 <div>영역에 출력한다(표시된다)
   // 날짜순으로 내림차
   bank.sort(nalDesc);
   // 입금정보를 출력할 타이틀
   
   acc = checkAccount(frm.account.value);
   str = '<div>현 잔액 : ' + acc.balance.toLocaleString('ko') + '</div>';
   
   
    str  += "<div class='title'>"
         + "   <span class='nal'>거래일자</span>"
         + "   <span class='dep'>입금</span>"
         + "   <span class='wit'>출금</span>"
         + "</div>";
   
   for(x of bank){
      if(x.account != frm.account.value) continue;
      
      str += "<div class='item'>"
         + "   <span class='nal'>" + x.date   + "</span>";
      if(x.flag=='입금'){
         str += "   <span class='dep'>" + x.amount.toLocaleString('ko')  + "</span>"
            +  "   <span class='wit'></span>"
      }else{
         str += "   <span class='dep'></span>"
            +  "   <span class='wit'>" + x.amount.toLocaleString('ko') + "</span>"
      }         
         
       str +=  "</div>";
   }
   
   
   r.innerHTML = str;
}

