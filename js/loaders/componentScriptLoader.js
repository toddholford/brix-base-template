const componentHeader = document.getElementById("componentHeader");

const navLoaderFunc = navLoader();
const tabLoaderFunc = tabLoader();

function identifyCurrentComponent() {

    let componentLoaderFunc;

    navPages.forEach(page => {
        //remove whitespaces
        const pageName = page.split(" ").join("");

        if (page == componentHeader.innerText) {
            componentLoaderFunc = pageName+"()";
            return componentLoaderFunc;
        }
    });

}

function componentScriptLoader(navLoader, tabLoader, componentLoader) {

    const navLoaderScript = navLoader;
    navLoaderScript;
    const tabLoaderScript = tabLoader;
    tabLoaderScript;
    const componentLoaderScript = componentLoader;
    componentLoaderScript;

}

document.onload = componentScriptLoader(navLoaderFunc, tabLoaderFunc, identifyCurrentComponent());