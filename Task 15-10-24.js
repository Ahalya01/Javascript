function showCards() {
    let cardContainer = document.getElementById("cardContainer");
    cardContainer.style.display = "flex";
    cardContainer.style.flexWrap = "wrap";  
    cardContainer.style.gap = "10px";  
    for (let i = 0; i < 6; i++) {  
        setTimeout(function () {
            cardContainer.innerHTML += `<div style="display: flex; flex-direction: column; align-items: center; padding: 10px; border: 1px solid #ccc; width: 150px;">
                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6IUxNLEw02-OgW7h-rF5-Qp9lhaVMVTEIipHdsPK-pOmAs8YnIErFWboNjJoS_xBcGc62VgLm8X_Eg3WtegrZp6pQ_knKxENAewZ-hE2MpYzRrbOCQdsh" style="width: 100%; height: auto;">
                    <h1 style="font-size: 16px; margin: 10px 0 5px;">Card ${i + 1}</h1>
                    <p style="font-size: 14px; margin: 0;">Braclets ${i + 1}</p>
                </div>
            `;
        }, 2000 * i);
    }
}