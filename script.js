function showSection(id) {

    // sakrij sve sekcije
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.add("hidden");
    });

    // prikaži odabranu
    document.getElementById(id).classList.remove("hidden");
}