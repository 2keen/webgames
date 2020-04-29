function main() {
    //initialize canvas and context, test for browser support
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");
    if (gl==null) {
        alert("Unable to initialize Webgl. Your browser or machine may not support it.");
        return;
    }

    //black background
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    //clear color buffer
    gl.clear(gl.COLOR_BUFFER_BIT);

}

window.onload = main;