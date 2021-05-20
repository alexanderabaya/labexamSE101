
    var dimblack = document.getElementById('dimblack');
    var sidebar  = document.getElementById('showmenu'); 

function show() {
    /*
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };

    
    */
   dimblack.style.display = "block";
   sidebar.style.left = "0px";
}

function Close() {
    /*
    window.onscroll = function() {};
    */
    dimblack.style.display = "none";
    sidebar.style.left = "-260px";

}   
