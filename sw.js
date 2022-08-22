self.addEventListener("install", (e) => {
    console.log("instado");
});

self.addEventListener("activate", (e) => {
    console.log("activate", e);
});

//evento fetch para descargar static

self.addEventListener("fetch", (e) => {
    console.log("fetch", fetch);
});
