//Driver Script
particlesJS.load('particles-js', 'girderSoft.json');
window.onload = function(e){ 
    const demoDownloadButton = document.getElementById("demoDownloadButton");
    const downloadRow = document.getElementById("downloadRow");
    demoDownloadButton.onclick = function() { 
        makeInactive(demoDownloadButton);
        makeVisible(downloadRow);
    };

    const makeInactive = function(elementRef) {
        elementRef.classList.add('inactive');
    }

    const makeVisible = function(elementRef) {
        elementRef.classList.add('visible');
    }

}