     function openNav() {
         document.getElementById("mySidenav").style.width = "250px";
         document.getElementById("main").style.marginLeft = "250px";
     }

     function closeNav() {
         document.getElementById("mySidenav").style.width = "0";
         document.getElementById("main").style.marginLeft = "0";
     }

     function startTime() {
         const today = new Date();
         let h = today.getHours();
         let m = today.getMinutes();
         let s = today.getSeconds();
         m = checkTime(m);
         s = checkTime(s);
         document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
         setTimeout(startTime, 1000);
     }

     function checkTime(i) {
         if (i < 10) {
             i = "0" + i
         };
         return i;
     }
     var roznica = 0;

     function darkmode() {
         var element = document.querySelectorAll('.dark');
         element.forEach(x => x.classList.toggle("dark-mode"));
         var element2 = document.querySelectorAll('.darkmain');
         element2.forEach(z => z.classList.toggle("dark-modemain"));
         if (roznica == 0) {
             setchartsdark();
             roznica = 1;
         } else {
             setchartslight();
             roznica = 0;
         }
     }

     function setchartsdark() {
         const zmiana = document.getElementsByTagName('iframe')
         for (let i = 0; i < zmiana.length; i++) {
             let podmianka_src = zmiana[i].getAttribute("src");
             let zmienione_src = podmianka_src.replace('light', 'dark');
             zmiana[i].setAttribute("src", zmienione_src);
         }
     }

     function setchartslight() {
         const zmiana = document.getElementsByTagName('iframe')
         for (let i = 0; i < zmiana.length; i++) {
             let podmianka_src = zmiana[i].getAttribute("src");
             let zmienione_src = podmianka_src.replace('dark', 'light');
             zmiana[i].setAttribute("src", zmienione_src);
         }
     }

     const zmiana = document.getElementById('temp');
     const zmiana_wilg = document.getElementById('wilg');
     const zmiana_pm1 = document.getElementById('pm1');
     const zmiana_pm25 = document.getElementById('pm25');
     const zmiana_pm10 = document.getElementById('pm10');

     let podmianka_src = zmiana.getAttribute("src");
     let podmianka_src_wilg = zmiana_wilg.getAttribute("src");
     let podmianka_src_pm1 = zmiana_pm1.getAttribute("src");
     let podmianka_src_pm25 = zmiana_pm25.getAttribute("src");
     let podmianka_src_pm10 = zmiana_pm10.getAttribute("src");

     var podstawa = 'xxx'

     function tydzien() {
         let ms = (Date.now()) - 604800000; //tydzien

         const zmiana = document.getElementById('temp');
         const zmiana_wilg = document.getElementById('wilg');
         const zmiana_pm1 = document.getElementById('pm1');
         const zmiana_pm25 = document.getElementById('pm25');
         const zmiana_pm10 = document.getElementById('pm10');


         let podmianka_src = zmiana.getAttribute("src");
         let podmianka_src_wilg = zmiana_wilg.getAttribute("src");
         let podmianka_src_pm1 = zmiana_pm1.getAttribute("src");
         let podmianka_src_pm25 = zmiana_pm25.getAttribute("src");
         let podmianka_src_pm10 = zmiana_pm10.getAttribute("src");


         let zmienione_src = podmianka_src.replace(podstawa, ms);
         let zmienione_src_wilg = podmianka_src_wilg.replace(podstawa, ms);
         let zmienione_src_pm1 = podmianka_src_pm1.replace(podstawa, ms);
         let zmienione_src_pm25 = podmianka_src_pm25.replace(podstawa, ms);
         let zmienione_src_pm10 = podmianka_src_pm10.replace(podstawa, ms);
       
         podstawa = ms;
         zmiana.setAttribute("src", zmienione_src);
         zmiana_wilg.setAttribute("src", zmienione_src_wilg);
         zmiana_pm1.setAttribute("src", zmienione_src_pm1);
         zmiana_pm25.setAttribute("src", zmienione_src_pm25);
         zmiana_pm10.setAttribute("src", zmienione_src_pm10);

     }


     function szesc() {
         let ms = (Date.now()) - 21600000; //6h
         const zmiana = document.getElementById('temp');
         const zmiana_wilg = document.getElementById('wilg');
         const zmiana_pm1 = document.getElementById('pm1');
         const zmiana_pm25 = document.getElementById('pm25');
         const zmiana_pm10 = document.getElementById('pm10');


         let podmianka_src = zmiana.getAttribute("src");
         let podmianka_src_wilg = zmiana_wilg.getAttribute("src");
         let podmianka_src_pm1 = zmiana_pm1.getAttribute("src");
         let podmianka_src_pm25 = zmiana_pm25.getAttribute("src");
         let podmianka_src_pm10 = zmiana_pm10.getAttribute("src");


         let zmienione_src = podmianka_src.replace(podstawa, ms);
         let zmienione_src_wilg = podmianka_src_wilg.replace(podstawa, ms);
         let zmienione_src_pm1 = podmianka_src_pm1.replace(podstawa, ms);
         let zmienione_src_pm25 = podmianka_src_pm25.replace(podstawa, ms);
         let zmienione_src_pm10 = podmianka_src_pm10.replace(podstawa, ms);
         podstawa = ms;
         zmiana.setAttribute("src", zmienione_src);
         zmiana_wilg.setAttribute("src", zmienione_src_wilg);
         zmiana_pm1.setAttribute("src", zmienione_src_pm1);
         zmiana_pm25.setAttribute("src", zmienione_src_pm25);
         zmiana_pm10.setAttribute("src", zmienione_src_pm10);

     }

     function dzien() {
         let ms = (Date.now()) - 86400000; //24h
         const zmiana = document.getElementById('temp');
         const zmiana_wilg = document.getElementById('wilg');
         const zmiana_pm1 = document.getElementById('pm1');
         const zmiana_pm25 = document.getElementById('pm25');
         const zmiana_pm10 = document.getElementById('pm10');


         let podmianka_src = zmiana.getAttribute("src");
         let podmianka_src_wilg = zmiana_wilg.getAttribute("src");
         let podmianka_src_pm1 = zmiana_pm1.getAttribute("src");
         let podmianka_src_pm25 = zmiana_pm25.getAttribute("src");
         let podmianka_src_pm10 = zmiana_pm10.getAttribute("src");


         let zmienione_src = podmianka_src.replace(podstawa, ms);
         let zmienione_src_wilg = podmianka_src_wilg.replace(podstawa, ms);
         let zmienione_src_pm1 = podmianka_src_pm1.replace(podstawa, ms);
         let zmienione_src_pm25 = podmianka_src_pm25.replace(podstawa, ms);
         let zmienione_src_pm10 = podmianka_src_pm10.replace(podstawa, ms);
         podstawa = ms;
         zmiana.setAttribute("src", zmienione_src);
         zmiana_wilg.setAttribute("src", zmienione_src_wilg);
         zmiana_pm1.setAttribute("src", zmienione_src_pm1);
         zmiana_pm25.setAttribute("src", zmienione_src_pm25);
         zmiana_pm10.setAttribute("src", zmienione_src_pm10);

     }


     setTimeout(loading, 500);

     function loading() {
         document.getElementById("loading_screen").style.display = "none";

     }

     function asdasd() {
         var xyz = document.getElementById("flotGaugeValue0").innerHTML;
     }

     ! function (d, s, id) {
         var js, fjs = d.getElementsByTagName(s)[0];
         if (!d.getElementById(id)) {
             js = d.createElement(s);
             js.id = id;
             js.src = 'https://weatherwidget.io/js/widget.min.js';
             fjs.parentNode.insertBefore(js, fjs);
         }
     }(document, 'script', 'weatherwidget-io-js');
