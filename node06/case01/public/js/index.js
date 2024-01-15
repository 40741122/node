const btnPrevDate = document.querySelector(".btn-prevDate");
const btnNextDate = document.querySelector(".btn-nextDate");
const myDate = document.querySelector(".myDate");
const btnAddShow = document.querySelector(".btn-addShow");
const newSet = document.querySelector(".newSet");
const updateSet = document.querySelector(".updateSet");
const bsOffcanvas = new bootstrap.Offcanvas("#inputArea");
const form = document.querySelector("form");
const btnSend = document.querySelector(".btn-send");
const lists = document.querySelectorAll(".list");
const btnUpdate = document.querySelector(".btn-update")
const btnDel = document.querySelector(".btn-del")

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

btnSend.addEventListener("click", (e) => {
    if(document.querySelector("[name=title]").value === ""){
        return false;
    }
    if(document.querySelector("[name=money]").value === ""){
        return false;
    }
    if(document.querySelector("select").selectedIndex === "0"){
        return false;
    }
    form.submit();
})

lists.forEach((list) => {
    list.addEventListener("click", (e) => {
        let id = e.currentTarget.getAttribute("id");
        let sort = e.currentTarget.getAttribute("sort");
        let money = e.currentTarget.getAttribute("money");
        let title = e.currentTarget.getAttribute("title");
        document.querySelector("[name=id]").value = id;
        document.querySelector("[name=title]").value = title;
        document.querySelector("[name=money]").value = money;
        document.querySelector("select").selectedIndex = sort;
        newSet.classList.add("d-none");
        newSet.classList.remove("d-flex");
        updateSet.classList.add("d-flex");
        updateSet.classList.remove("d-none");
        bsOffcanvas.show();
    })
})

btnUpdate.addEventListener("click", () => {
    let url = "/expense";
    const form = document.querySelector("form");
    const formData = new FormData(form);
    fetch(url, {
        method: "PUT",
        body: formData
    }).then((response) => {
        return response.json()
    }).then((result) => {
        if(result.aaaa === 1){
            let date = myDate.value;
            window.location.href = `/expense/d/${date}`
        }
    }).catch((error) => {
        alert(error)
    });
})

btnDel.addEventListener("click", (e) => {
    let url = "/expense";
    const form = document.querySelector("form");
    const formData = new FormData(form);
    
    fetch(url, {
        method: "DELETE",
        body: formData
    }).then((response) => {
        return response.json()
    }).then((result) => {
        if(result.aaaa === 1){
            let date = myDate.value;
            window.location.href = `/expense/d/${date}`
        }
    }).catch((error) => {
        alert(error)
    });
})