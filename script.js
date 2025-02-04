document.addEventListener("DOMContentLoaded", () => {
  const displayAdvice = document.getElementById('advice');
  const adviceId = document.getElementById('adv-num');
  const genAdviceBtn = document.getElementById('gen-quote');

  genAdvice();
  function genAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
        .then(data => {
        if(data.slip){
        const advicedata = data.slip;
        displayAdvice.textContent = `${advicedata.advice}`;
        adviceId.textContent = `ADVICE # ${advicedata.id}`;
        }
      })
      .catch(error => {
        console.error("Error fetching Advide");
        alert("Check Network Connection, Failed to load quote");

      });
  }
  genAdviceBtn.addEventListener("click", genAdvice)

  });