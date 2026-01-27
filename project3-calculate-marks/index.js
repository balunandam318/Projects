console.log("Calculate percentage");

const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");


const calculateMarks = (event) =>{
    const maxMarks = 400;
    event.preventDefault(); // stops refresh

    const formData = new FormData(calculateFormEl);
    const data ={};

    formData.forEach((value, key)=>{
        data[key]=+value;
    })
    console.log({ data });

    const totalMarks = data.maths +data.science+data.social+data.english;
    const percentage = Math.floor((totalMarks/maxMarks)*100);
    console.log({totalMarks,percentage});

    // const resultEl = document.createElement("p");
    resultEl.className = 'result';

    resultEl.innerHTML = `You got ${totalMarks} out of  ${maxMarks} and your percentage is ${percentage}%`;
    // calculateFormEl.after(resultEl);
};
