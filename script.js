function showSection(id) {

    // sakrij početni meni
    document.querySelector(".menu").classList.add("hidden");

    // sakrij sve sekcije
    document.querySelectorAll(".page").forEach(sec => {
        sec.classList.add("hidden");
    });

    // prikaži odabranu sekciju
    document.getElementById(id).classList.remove("hidden");

    // prikaži strelicu
    document.getElementById("backBtn").classList.remove("hidden");
}

function goHome() {

    // sakrij sve sekcije
    document.querySelectorAll(".page").forEach(sec => {
        sec.classList.add("hidden");
    });

    // prikaži početni meni
    document.querySelector(".menu").classList.remove("hidden");

    // sakrij strelicu
    document.getElementById("backBtn").classList.add("hidden");
}