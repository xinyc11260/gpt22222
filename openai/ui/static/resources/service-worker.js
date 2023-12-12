self.addEventListener("install",s=>{s.waitUntil(caches.open("ninja-cache").then(function(s){return s.addAll([
    "/_next/image","/resources/apple-touch-icon.png","/resources/favicon-16x16.png","/resources/favicon-32x32.png","/ulp/react-components/1.66.5/css/main.cdn.min.css","/sweetalert2/bulma.min.css","/sweetalert2/sweetalert2.all.min-bc15590d.js","/fonts/colfax/ColfaxAIBold.woff","/fonts/colfax/ColfaxAIBold.woff2","/fonts/colfax/ColfaxAIBoldItalic.woff","/fonts/colfax/ColfaxAIBoldItalic.woff2","/fonts/colfax/ColfaxAIRegular.woff","/fonts/colfax/ColfaxAIRegular.woff2","/fonts/colfax/ColfaxAIRegularItalic.woff","/fonts/colfax/ColfaxAIRegularItalic.woff2","/fonts/katex/KaTeX_AMS-Regular.woff2","/fonts/katex/KaTeX_Caligraphic-Bold.woff2","/fonts/katex/KaTeX_Caligraphic-Regular.woff2","/fonts/katex/KaTeX_Fraktur-Bold.woff2","/fonts/katex/KaTeX_Fraktur-Regular.woff2","/fonts/katex/KaTeX_Main-Bold.woff2","/fonts/katex/KaTeX_Main-BoldItalic.woff2","/fonts/katex/KaTeX_Main-Italic.woff2","/fonts/katex/KaTeX_Main-Regular.woff2","/fonts/katex/KaTeX_Math-BoldItalic.woff2","/fonts/katex/KaTeX_Math-Italic.woff2","/fonts/katex/KaTeX_SansSerif-Bold.woff2","/fonts/katex/KaTeX_SansSerif-Italic.woff2","/fonts/katex/KaTeX_SansSerif-Regular.woff2","/fonts/katex/KaTeX_Script-Regular.woff2","/fonts/katex/KaTeX_Size1-Regular.woff2","/fonts/katex/KaTeX_Size2-Regular.woff2","/fonts/katex/KaTeX_Size3-Regular.woff2","/fonts/katex/KaTeX_Size4-Regular.woff2","/fonts/katex/KaTeX_Typewriter-Regular.woff2","/fonts/signifier/signifier-bold-italic.woff2","/fonts/signifier/signifier-bold.woff2","/fonts/signifier/signifier-light-italic.woff2","/fonts/signifier/signifier-light.woff2","/fonts/soehne/soehne-buch-kursiv.woff2","/fonts/soehne/soehne-buch.woff2","/fonts/soehne/soehne-halbfett-kursiv.woff2","/fonts/soehne/soehne-halbfett.woff2","/fonts/soehne/soehne-kraftig-kursiv.woff2","/fonts/soehne/soehne-kraftig.woff2","/fonts/soehne/soehne-mono-buch-kursiv.woff2","/fonts/soehne/soehne-mono-buch.woff2",
])}))}),self.addEventListener("fetch",function(s){s.respondWith(caches.match(s.request).then(function(t){return t||fetch(s.request)}))});