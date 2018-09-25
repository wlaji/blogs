(function(window) {
    var svgSprite = '<svg><symbol id="icon-yonghuming" viewBox="0 0 1024 1024"><path d="M632.618667 577.237333c105.728-46.570667 179.84-152.192 179.84-274.965333 0-165.674667-134.784-300.437333-300.458667-300.437333S211.562667 136.597333 211.562667 302.272c0 122.752 74.090667 228.394667 179.818667 274.965333C206.826667 629.866667 71.189333 799.616 71.189333 1000.832c0 11.797333 9.557333 21.333333 21.333333 21.333333s21.333333-9.536 21.333333-21.333333c0-219.52 178.602667-398.122667 398.144-398.122667s398.144 178.602667 398.144 398.122667c0 11.797333 9.536 21.333333 21.333333 21.333333s21.333333-9.536 21.333333-21.333333C952.810667 799.616 817.173333 629.866667 632.618667 577.237333zM254.229333 302.272c0-142.144 115.626667-257.770667 257.770667-257.770667 142.144 0 257.792 115.626667 257.792 257.770667S654.144 560.042667 512 560.042667C369.856 560.042667 254.229333 444.416 254.229333 302.272z"  ></path></symbol><symbol id="icon-mima" viewBox="0 0 1024 1024"><path d="M916.210526 1024 107.789474 1024C78.012632 1024 53.894737 999.855158 53.894737 970.105263L53.894737 485.052632C53.894737 455.275789 78.012632 431.157895 107.789474 431.157895L188.631579 431.157895 188.631579 323.368421C188.631579 144.761263 333.419789 0 512 0 690.580211 0 835.368421 144.761263 835.368421 323.368421L835.368421 431.157895 916.210526 431.157895C945.987368 431.157895 970.105263 455.275789 970.105263 485.052632L970.105263 970.105263C970.105263 999.855158 945.987368 1024 916.210526 1024ZM781.473684 323.368421C781.473684 174.538105 660.830316 53.894737 512 53.894737 363.169684 53.894737 242.526316 174.538105 242.526316 323.368421L242.526316 431.157895 781.473684 431.157895 781.473684 323.368421ZM916.210526 485.052632 835.368421 485.052632 188.631579 485.052632 107.789474 485.052632 107.789474 970.105263 916.210526 970.105263 916.210526 485.052632ZM512 592.842105C526.874947 592.842105 538.947368 604.914526 538.947368 619.789474L538.947368 835.368421C538.947368 850.243368 526.874947 862.315789 512 862.315789 497.125053 862.315789 485.052632 850.243368 485.052632 835.368421L485.052632 619.789474C485.052632 604.914526 497.125053 592.842105 512 592.842105Z"  ></path></symbol></svg>';
    var script = function() { var scripts = document.getElementsByTagName("script"); return scripts[scripts.length - 1] }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function(fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) { setTimeout(fn, 0) } else {
                var loadFn = function() {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) { IEContentLoaded(window, fn) }

        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                init = function() {
                    if (!done) {
                        done = true;
                        fn()
                    }
                };
            var polling = function() { try { d.documentElement.doScroll("left") } catch (e) { setTimeout(polling, 50); return } init() };
            polling();
            d.onreadystatechange = function() {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function(el, target) { target.parentNode.insertBefore(el, target) };
    var prepend = function(el, target) { if (target.firstChild) { before(el, target.firstChild) } else { target.appendChild(el) } };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }
    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true; try { document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>") } catch (e) { console && console.log(e) } } ready(appendSvg)
})(window)