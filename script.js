let mqlM = window.matchMedia('(max-width: 767px)');

let mqlF = window.matchMedia('(min-width: 1024px)');
// function loader() {
if (mqlM.matches) {
    let html =
        `
        <div class="intro" id="div-1">
            <h3 id="intro-txt">
                I'm James, and welcome to my World!
                A budding Fullstack developer with a pasion for
                <strong>Ux</strong> and <strong>Ui Design</strong>
            </h3>

            <img id="headshot" src="./images/New folder/4.svg"
                alt="a photo of James Conway, the creater of this odd little world">

        </div>
        
        <script>document.getElementById("headshot").addEventListener("load", () => { alert("done") })</script>
`
    document.getElementById("welcome").innerHTML = html;

} else if (mqlF.matches) {
    html =
        `
        <h1>Hello cutie<h/1>
        `

    document.getElementById("welcome").innerHTML = html
}
// }
// loader()

// document.getElementById("headshot").addEventListener("load", loader())