
const qrFormEl = document.getElementById("qrForm");
const qrContainerEl = document.getElementById("qrContainer");
const qrImageEl = document.getElementById("qrImage");
const qrInputTextEl = document.getElementById("qrInputText");
const generateBtnEl = document.getElementById("generateBtn");


const renderQrCode = (url)=>{
    if(!url) return;
    generateBtnEl.innerHTML="Generating QR Code ...";
    qrImageEl.src=url;
    qrContainerEl.classList.add("show");

    qrImageEl.addEventListener("load",()=>{
        generateBtnEl.innerHTML="Generate QR Code"
    });

    // const onImageLoad = () => {
    //     const interval = setInterval(() => {
    //       qrContainerEl.classList.add("show");
    //       clearInterval(interval);
    //       generateBtnEl.innerText = "Genrate QR Code";
    //     }, 500);
    //   };
    
    //   qrImageEl.addEventListener("load", onImageLoad);
};

qrFormEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    const formData = new FormData(qrFormEl);
    const text = formData.get("qrText");

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

    renderQrCode(qrCodeUrl);
});

qrInputTextEl.addEventListener("keyup",()=>{
    if(!qrInputTextEl.value.trim()){
        qrContainerEl.classList.remove("show");
    }
})