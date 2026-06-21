//1.傳送話給控制台
console. log('JavaScript已連結，準備進行互動...');

//2.詢問姓名
let visitorname = prompt('你好，請輸入你的姓名:');

if (visitorname === ''|| visitorname === null){
    visitorname = '訪客';
}

window.alert('Hello '+ visitorname+ ',歡迎來到我的網站!');

const logoElement = document.getElementById('main-logo');
logoElement.innerText = visitorname + "'s Website";

const titleElement = document.getElementById('hero-title');
titleElement.innerHTML = `我的未來，由<span class ="highlight" style="color:#38bdf8;">${visitorname}</span>主宰`;

function changeColor(){
    const highlight = document.querySelector('.highlight');
    if (highlight.style.color === 'red'){
        highlight.style.color = '#38bdf8';
    } else {
        highlight.style.color = 'red';
    }
}


const SendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const aiResponse = document.getElementById('ai-response');

SendBtn.addEventListener('click', function(){
    const userMessage = userInput.value;

    if (userMessage===""){
        alert('請先輸入指令喔!')
        return;
    }

    setTimeout(function() {

        if (userMessage.includes("新增") || userMessage.includes("提醒")) {
            
            let taskText = userMessage.replace('幫我', '').replace('新增', '').replace('提醒', '').trim();

            if (taskText !== "") {
                document.getElementById('todo-input').value = taskText;
                
                if (typeof addTodo === "function") {
                    addTodo();
                    aiResponse.innerText = `AI助理: 沒問題！已幫您在下方新增事項：「${taskText}」`;
                } else {
                    aiResponse.innerText = `AI助理: 已幫您把「${taskText}」填入輸入框，但目前找不到您的 todo.js 邏輯。`;
                }
            } else {
                aiResponse.innerText = "AI助理: 請告訴我具體想新增什麼事情呢？（例如輸入：新增繳交作業）";
            }
        }

        else if (userMessage.includes("淺色") || userMessage.includes("白天")) {
            document.body.className = "theme-light";
            aiResponse.innerText="AI助理: 已為您調整至【預設淺色模式】。";
        } 

        else if (userMessage.includes("綠色") || userMessage.includes("駭客")) {
            document.body.className = "theme-matrix";
            aiResponse.innerText="AI助理: 已啟動【矩陣駭客模式】!";
        } 

        else if (userMessage.includes("深色") || userMessage.includes("晚上")) {
            document.body.className = "";
            aiResponse.innerText="AI助理: 已為您恢復至【預設深色模式】。";
        } 

        else if (userMessage.includes("你好") || userMessage.includes("哈嘍")) {
            document.body.className = "";
            aiResponse.innerText="AI助理: 您好呀~今天過得還好嗎?";
        } 

        else if (userMessage.includes("功能") || userMessage.includes("做什麼")) {
        aiResponse.innerText="AI助理: 我可以幫您變換顏色"
        }

        else if (userMessage.includes("學校") || userMessage.includes("東吳")) {
        aiResponse.innerText="AI助理: 東吳大學是個學習網頁設計最棒的地方!";
        } 

        else {
        aiResponse.innerText="AI助理: 我收到你的訊息「" + userMessage + " 」了! 不過我目前還沒有開通這樣的功能~";
        }


    }, 300);

    userInput.value = ""
} 

);








