import data from "./data.json" assert { type: "json" };

const charts = document.getElementById("charts")

const chart = data.map((d, index) => {
    return `
        <div class="chart ${d.day}" key=${index}>
            <div style="height: ${d.amount}%" class="display ${d.amount > 50 ? 'high' : 'low'}"></div>
            <p>${d.day}</p>
        </div>
    `
}).join("")


charts.innerHTML = chart