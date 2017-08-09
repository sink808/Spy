var spy=0;
function Start() {
  var num_element = document.getElementsByName('people_num');
  var num = num_element[0].value; // 遊戲人數
  var bank = ["海灘上", "教堂", "高中教室", "餐廳", "SPA中心", "銀行", "火車上", "夜店", "動物園", "馬戲團", "旅館裡", "賭場", "飛機上", "潛水艇裡", "軍營", 
              "游泳池", "遠洋郵輪", "醫院", "超市", "購物中心", "大學實驗室", "警察局", "電影院", "劇院", "十字軍軍團", "電影工作室", "嘉年華會", "主題樂園"]; // 題目
  var anwser = Math.floor(Math.random() * 29);
if(!isNaN(num) && num%1===0 && num>0){
    if(num<21 && num>2){   
        spy = Math.floor(Math.random() * num) + 1; // 第幾個玩家是spy    
        for(i=1;i<=num;i++){
  	        if(i!=spy)
                alert("玩家" + i + "\n" + bank[anwser]);
            else if(i==spy)
      	        alert("玩家" + i + "\n" + "????");
      	    if(i<num)
      	        alert("請傳給下一位玩家\n");
      	    else
      	        alert("遊戲開始\n");
        } // for
    } // if 人數小於20 
    else if(num==1){
    	alert("1個人也太可憐了吧!");
    	spy=0; // 初始化
    }
    else if(num==2){
    	alert("2個人不能玩喔!");
    	spy=0; // 初始化
    }
    else // if 人數大於20
        alert("玩家人數請小於20");
} // if 玩家人數為正常輸入

else       // 玩家不是數字或不是整數
	alert("请输入非0正整数"); 
} // Start()

function Publish() {
	if(spy!=0)
        alert("間諜是玩家" + spy); 
}