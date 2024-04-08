// console.log(jeopardyQuestions.length)
const clickables = $(".tiles")
const questions = $("#question")
const yourScore = $('#dollarAmount')
const categories = $(".newCat")
let count = 0
let rightAnswer = ""
let score = 0
let reward = 0
function loadGame (){
    let randomShow = jeopardyQuestions[Math.ceil(Math.random()*jeopardyQuestions.length)].showNumber
    //finds a random shownumber
    let randomShowGroup = jeopardyQuestions.filter((obj) => obj.showNumber === randomShow)
    let testArr = []
    //filter for category name
    for(let i = 0; i < 5;i++){
    categories.eq(i).text(randomShowGroup[i].category)
    testArr.push(randomShowGroup[i].category)
    }
    //this is an array that contains the 5 different categories and sets the pages categories with those

    let cat1 = randomShowGroup.filter((obj)=>
    obj.category === testArr[0])
    let cat2 = randomShowGroup.filter((obj)=>
    obj.category === testArr[1])
    let cat3 = randomShowGroup.filter((obj)=>
    obj.category === testArr[2])
    let cat4 = randomShowGroup.filter((obj)=>
    obj.category === testArr[3])
    let cat5 = randomShowGroup.filter((obj)=>
    obj.category === testArr[4])
    if(cat1.length<5 ||cat2.length<5 ||cat3.    length<5 ||cat4.length<5 ||cat5.length<5){
        return loadGame()
    }
    let cat1Html = $(".cat1")
    for(let i = 0;i<5;i++){
    cat1Html.eq(i).text(cat1[i].value)
    }
    let cat2Html = $(".cat2")
    for(let i = 0;i<5;i++){
        cat2Html.eq(i).text(cat2[i].value)
    }
    let cat3Html = $(".cat3")
    for(let i = 0;i<5;i++){
        cat3Html.eq(i).text(cat3[i].value)
    }
    let cat4Html = $(".cat4")
    for(let i = 0;i<5;i++){
        cat4Html.eq(i).text(cat4[i].value)
    }
    let cat5Html = $(".cat5")
    for(let i = 0;i<5;i++){
        cat5Html.eq(i).text(cat5[i].value)
    }
    //goes through the show and seperates it by categories
    clickables.on("click",(event)=>{
        if(count === 0){
            reward = event.target.innerHTML
            //price
            if(event.target.classList.contains("cat1")){
                let selection = cat1.filter((obj)=> obj.value === reward)
                $("#question").text(selection[0].question)
                rightAnswer = selection[0].answer
            } else 
            if(event.target.classList.contains("cat2")){
                let selection = cat2.filter((obj)=> obj.value === reward)
                $("#question").text(selection[0].question)
                rightAnswer = selection[0].answer
            } else 
            if(event.target.classList.contains("cat3")){
                let selection = cat3.filter((obj)=> obj.value === reward)
                $("#question").text(selection[0].question)
                rightAnswer = selection[0].answer
            } else 
            if(event.target.classList.contains("cat4")){
                let selection = cat4.filter((obj)=> obj.value === reward)
                $("#question").text(selection[0].question)
                rightAnswer = selection[0].answer
            } else 
            if(event.target.classList.contains("cat5")){
                let selection = cat5.filter((obj)=> obj.value === reward)
                $("#question").text(selection[0].question)
                rightAnswer = selection[0].answer
            }
            //loads the right question on the screen
            event.target.innerHTML = ""
            //deletes the point value
            event.target.style.pointerEvents = "none"
            //turns off css styling of hover on question
        }
        count++
    })
    $("button").on("click",()=>{
        if(count>0){
            if($("input").val().toLowerCase() === rightAnswer.toLowerCase()){
                questions.text("Correct !!")
                score += parseInt(reward.split("$")[1].replace(",",""))
                yourScore.text(`YOUR SCORE:$${score}`)
            } else {
                questions.text("InCorrect!!")
                score -= parseInt(reward.split("$")[1].replace(",",""))
                yourScore.text(`YOUR SCORE:$${score}`)
            }
        }
        $("input").val("")
        count = 0
    })
}
loadGame()
