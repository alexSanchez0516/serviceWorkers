window.onload = () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register("./sw.js")
            .then((registrado) => console.log("registrado", registrado))
            .catch((error) => console.log("error"));
    }
};
