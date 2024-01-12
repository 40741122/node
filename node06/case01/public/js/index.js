const btnPrevDate = document.querySelector(".btn-prevDate");
const btnNextDate = document.querySelector(".btn-nextDate");
const myDate = document.querySelector(".myDate");
const btnAddShow = document.querySelector(".btn-addShow");
const newSet = document.querySelector(".newSet");
const updateSet = document.querySelector(".updateSet");
const bsOffcanvas = new bootstrap.Offcanvas("#inputArea");


myDate.addEventListener("change", (e) => {
    let date = e.currentTarget.value;
    window.location.href = `/expense/d/${date}`;
});

btnPrevDate.addEventListener("click", () => {
    let date = new Date(myDate.value);
    date.setDate((date.getDate() - 1));
    let isoString = date.toISOString().split("T")[0];
    window.location.href = `/expense/d/${isoString}`;
})

btnNextDate.addEventListener("click", () => {
    let date = new Date(myDate.value);
    date.setDate((date.getDate() + 1));
    let isoString = date.toISOString().split("T")[0];
    window.location.href = `/expense/d/${isoString}`;
})

btnAddShow.addEventListener("click", (e) => {
    document.querySelector("[name=title]").value = "";
    document.querySelector("[name=money").value = "";
    document.querySelector("[name=id]").value = "";
    document.querySelector("select").selectedIndex = 0;
    newSet.classList.remove("d-none");
    newSet.classList.add("d-flex");
    updateSet.classList.add("d-none");
    updateSet.classList.remove("d-flex");
    bsOffcanvas.show();
})