/* <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'; */
// </script>

if (localStorage.getItem('theme') === 'dark') {
    var theme = 'dark';
} else {
    var theme = 'light';
}

if (localStorage.getItem('time') === 'postSpring') {
    var time = 'postSpring';
} else {
    var time = 'preSpring';
}

document.addEventListener('DOMContentLoaded', function() {
    var darkMode = theme === 'dark';
    var preSpring = time === 'preSpring';
    var mermaidPres = document.getElementsByClassName('mermaid');
    var mermaidInnerTextPre = mermaidPres[0].innerText;
    var mermaidInnerTextPost = mermaidPres[1].innerText;

    if (darkMode) {
        mermaidInnerTextPre  = mermaidInnerTextPre.replace('THEME', '%%{init: {\'theme\':\'dark\'}}%%');
        mermaidInnerTextPost = mermaidInnerTextPost.replace('THEME', '%%{init: {\'theme\':\'dark\'}}%%');
        document.body.classList.toggle('dark-mode');
        document.getElementById('preSpringTable').classList.toggle('dark-mode');
        document.getElementById('postSpringTable').classList.toggle('dark-mode');
        const headers = document.getElementsByClassName('header');
        for (let i = 0; i < headers.length; i++) {
            headers[i].classList.toggle('dark-mode');
        }
        const buttons = document.getElementsByClassName('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle('dark-mode');
        }
    } else {
        mermaidInnerTextPre  = mermaidInnerTextPre.replace('THEME', '%%{init: {\'theme\':\'neutral\'}}%%');
        mermaidInnerTextPost = mermaidInnerTextPost.replace('THEME', '%%{init: {\'theme\':\'neutral\'}}%%');
        document.body.classList.toggle('light-mode');
        document.getElementById('preSpringTable').classList.toggle('light-mode');
        document.getElementById('postSpringTable').classList.toggle('light-mode');
        const headers = document.getElementsByClassName('header');
        for (let i = 0; i < headers.length; i++) {
            headers[i].classList.toggle('light-mode');
        }
        const buttons = document.getElementsByClassName('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle('light-mode');
        }
    }

    if (preSpring) {
        document.getElementById('title').innerHTML = 'Pre-Spring 2023';
        document.getElementById('postSpring').style.display = 'none';
        document.getElementById('postSpringTable').style.display = 'none';
    } else {
        document.getElementById('title').innerHTML = 'Post-Spring 2023';
        document.getElementById('preSpring').style.display = 'none';
        document.getElementById('preSpringTable').style.display = 'none';
    }

    if (window.innerWidth < 600) {
        mermaidInnerTextPre = mermaidInnerTextPre.replace('DIAGRAM_DIR', 'direction TB');
        mermaidInnerTextPost = mermaidInnerTextPost.replace('DIAGRAM_DIR', 'direction TB');
    } else {
        mermaidInnerTextPre = mermaidInnerTextPre.replace('DIAGRAM_DIR', 'direction LR');
        mermaidInnerTextPost = mermaidInnerTextPost.replace('DIAGRAM_DIR', 'direction LR');
    }

    mermaidPres[0].innerHTML = mermaidInnerTextPre;
    mermaidPres[1].innerHTML = mermaidInnerTextPost;
    mermaid.initialize({});
});

function lightMode() { 
    localStorage.setItem('theme', 'light');
    location.reload();
}

function darkMode() {
    localStorage.setItem('theme', 'dark');
    location.reload();
}

function goToPost() {
    localStorage.setItem('time', 'postSpring');
    location.reload();
}

function goToPre() {
    localStorage.setItem('time', 'preSpring');
    location.reload();
}
