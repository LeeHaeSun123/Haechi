/**
 * 
 */
 var students = [
	{'no' : 1, 'name': 'hong', 'grade' : 1 },
    {'no' : 2, 'name': 'kim', 'grade' : 1 },
    {'no' : 3, 'name' : 'lee', 'grade': 2 },
    {'no' : 4, 'name' : 'park', 'grade' : 3 },
    {'no' : 5, 'name' : 'nam', 'grade' : 4}
]

var subject = ['국어', '수학', '영어', '전산']

var product = []; //성적 정보 저장

var scores = [
	{'serial' : 1, 'no' : 1, 'subject' : '국어', 'score' : 90},
	{'serial' : 2, 'no' : 2, 'subject' : '국어', 'score' : 70},
	{'serial' : 3, 'no' : 3, 'subject' : '국어', 'score' : 80},
	{'serial' : 4, 'no' : 4, 'subject' : '국어', 'score' : 50},
]
var scores_serial = 0; //현재 학생 순번(초기값을 줌)
//var gSerial; //조회 화면에서 선택한 serial값
var product_serial = product.length; //입력된 성적 정보의 길이 저장

/*subject.sort();
for(x of subject){
	frm.subject.append(new Option(x,x))//첫번째 x : text값, 두번째 x : value값
}*/

/*class History{
	constructor(serial, no, name, grade, subject, score){
		this.serial = serial;
		this.no = no;
		this.name = name;
		this.grade = grade;
		this.subject = subject;
		this.score = score;
	}	
}*/

var frm = document.frm;

//학번 검색
document.getElementById('search_btn');

frm.search_btn.onclick = function(){ //검색 버튼이 클릭되면
	var no = frm.no.value; //변수 no는 no의 값을 대입된다
	var flag = false; // 변수 flag가 flase일 때
	for(x of students){ //students라는 배열에서
		if(x.no == no){ //선택한 no(1, 2, 3, 4, 5)가 변수 no와 같을 때 
			frm.name.value = x.name; //name의 값은 students배열 안에 있는 name과 같고
			frm.grade.value = x.grade; //grade의 값은 students배열 안에 있는 grade값과 같다
			flag = true; //flag가 true일 때
			break; //종료
		}
	}
	if(!flag){ //만약, flag가 true가 아닐 때(flag가 false일 때)
		alert('학번이 없음'); //창에 '학번이 없음'이 뜬다
		frm.name.value=''; //name의 값은 없다
		frm.grade.value=''; //name의 값은 없다
	}
}

//데이터 저장하기
document.getElementById('save_btn');

frm.save_btn.onclick = function(){ //저장 버튼이 클릭되면
    scores_serial++; //성적의 저장 순번
    var s = { //JSON type의 자료구조
	   "serial" : scores_serial,
	   "no"     : frm.no.value,
	   "subject": frm.subject.value,
	   "score" : Number(frm.score.value)
	   }
	   product.push(s);
	   /*(강사)info.innerHTML = '자료가 저장되었습니다.';
	                         +'<b>총건수 : '
	                         + score.length + '</b>'
	   */
    /*frm.no.value = '';
    frm.name.value = '';
    frm.grade.value = '';
    frm.subject.value = '';
    frm.score.value = '';
    frm.no.focus();
    
	let no = frm.no.value; //학번(변수 no에 no의 값을 대입)
	let name = frm.name.value; //성명(변수 name에 name의 값을 대입)
	let grade = frm.grade.value; //학년(변수 grade에 grade값을 대입)
	let score = frm.score.value; //성적(변수 score에 score값을 대입)
    let subject = frm.subject.value; // 과목(변수 subject에 subject값을 대입)
    
    let history = new History(serial, no, name, grade, subject, score);
    product.push(history);*/
}

//출력
document.getElementById('print_btn');

frm.print_btn.onclick = function(){
	
	var str = '';
	var r = document.getElementById('result');
	for(x of scores){
		for(s of students){
			if(x.no == s.no){
				str += "<div class='items'>"
				    + "<span class='serial'>" + x.serial + "</span>"
				    + "<span class='no'>"     + s.no     + "</span>"
				    + "<span class='name'>"   + s.name   + "</span>"
				    + "<span class='grade'>"  + s.grade  + "</span>"
				    + "<span class='scores'>" + x.scores + "</span>"
				    + "<div>";
			}
		}
	}
		r.innerHTML = str;
	/*var str = "<div class='title'>"
	        + "<span class='no'>학번</span>"
	        + "<span class='name'>성명</span>"
	        + "<span class='grade'>학년</span>"
	        + "<span class='subject'>과목</span>"
	        + "<span class='test'>성적</span>"
	        + "</div>";
	        
	for(x of students){
		str += "<div class='item'>"
		    + "<span class='no'>" + x.no + "</span>"
	        + "<span class='name'>" + x.name + "</span>"
	        + "<span class='grade'>" + x.grade + "</span>"
	        + "<span class='subject'>" + x.subject + "</span>"
	        + "<span class='test'>" + x.test + "</span>"
	        + "</div>";*/
		    
	} 
	
	/*frm.correct_btn.onclick = function(){
		for(s of scores){
			if(s.serial == gSerial){
				s.subject == frm.subject.value;
				s.scores = Number(frm.score.value);
				frm.print_btn.click();
				gSerial = 0;
				break;
			}
		}
	}*/
	
	/*frm.delete_btn.onclick = function(){
		for(s in scores){
			if(scores[s].serial == gSerial){
				scores.splice(s,1);
				frm.delete_btn.click();
				frm.no.value = '';
				frm.name.value = '';
				frm.grade.value = '';
				frm.subject.value = '';
				frm.score.value = '';
				frm.no.focus();
				gSerial = 0;
			}
		}
	}
	*/
	
	/*function go(serial){
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
*/



