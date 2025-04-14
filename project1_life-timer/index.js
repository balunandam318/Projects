console.log("This is Life-Timer App");


let isDOBOpen = false;
const settingIcon = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");

const initialText = document.getElementById("initialText");
const afterText = document.getElementById("afterText");
const dobButton = document.getElementById("dobButton");
const dobInput = document.getElementById("dobInput");

const yearEL = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEL = document.getElementById("minute");
const secondEl = document.getElementById("second");

let dateOfBirth = dobInput.value;

const makeTwoDigit = (number)=>{
    return number > 9 ? number : `0${number}`;
}

const toggle = ()=>{
    if(isDOBOpen){
        settingContent.classList.add("hide");
    }
    else{
        settingContent.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
    console.log(isDOBOpen);
}

const updateAge = ()=>{
    const currentDate = new Date();
    console.log({currentDate});

    const dobDiff = currentDate - dateOfBirth;
    const year = Math.floor(dobDiff/(1000*60*60*24*365));
    const month = Math.floor(dobDiff/(1000*60*60*24*365))%12;
    const day = Math.floor(dobDiff/(1000*60*60*24))%30;
    const hour = Math.floor(dobDiff/(1000*60*60))%24;
    const minute = Math.floor(dobDiff/(1000*60))%60;
    const second = Math.floor(dobDiff/1000)%60;
    console.log("year",year,"month",month,"day",day,"hour",hour,"minute",minute,"second",second);
    console.log("date difference is",dobDiff);

    yearEL.innerHTML=makeTwoDigit(year);
    monthEl.innerHTML = makeTwoDigit(month);
    dayEl.innerHTML = makeTwoDigit(day);
    hourEl.innerHTML = makeTwoDigit(hour);
    minuteEL.innerHTML = makeTwoDigit(minute);
    secondEl.innerHTML = makeTwoDigit(second);

};

// const localStorageGetter = ()=>{
//     const year = localStorage.getItem("year");
//     const month = localStorage.getItem("month");
//     const date = localStorage.getItem("date");

//     if(year && month && date){
//         dateOfBirth = new Date(year,month,date);
//         console.log(year,month,date);
//     };
//     updateAge();
// };

// const contentToggler = () =>{
//     if(dateOfBirth){

//         initialText.classList.add("hide");
//         afterText.classList.remove("hide");
//         updateAge();
//         setInterval(()=> updateAge(),1000);
//     }else{
//         afterText.classList.add("hide");
//         initialText.classList.remove("hide");

//     };
// };
const dobSave = ()=>{

    const dateString = dobInput.value;

    dateOfBirth = dateString ? new Date(dateString):null;
    console.log("Your date of Birth is",dateOfBirth);

    // // localStorage
    // const year = localStorage.getItem("year");
    // const month = localStorage.getItem("month");
    // const date = localStorage.getItem("date");
    // if(year && month && date){
    //             console.log({year,month,date});
    //             dateOfBirth = new Date(year,month,date);
    //         };


    if(dateOfBirth){
        localStorage.setItem("year",dateOfBirth.getFullYear());
        localStorage.setItem("month",dateOfBirth.getMonth());
        localStorage.setItem("date",dateOfBirth.getDate());

        initialText.classList.add("hide");
        afterText.classList.remove("hide");
        setInterval(()=> updateAge(),1000);

        // updateAge();
    }else{
        afterText.classList.add("hide");
        initialText.classList.remove("hide");

    };

};

// dobSave();
// localStorageGetter();
// contentToggler();

settingIcon.addEventListener("click",toggle);
dobButton.addEventListener("click",dobSave);
