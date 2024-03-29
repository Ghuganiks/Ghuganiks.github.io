(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const h="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='257'%20id='_Слой_2'%20data-name='Слой%202'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20256.5%2047.96'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20none;%20stroke:%20%23000;%20stroke-width:%201px;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='_Слой_1-2'%20data-name='Слой%201'%3e%3cpath%20class='cls-1'%20d='M256.5,44.9v3.06H0v-3.06H10.63c8.84,0,16-7.16,16-16v-12C26.63,8.06,33.8,.9,42.63,.9H210.63c8.84,0,16,7.16,16,16v12c0,8.84,7.17,16,16,16h13.87Z'%20/%3e%3cpath%20class='cls-2'%20d='M256.5,44.5h-14c-8.84,0-16-7.16-16-16v-12c0-8.84-7.16-16-16-16H42.5c-8.84,0-16,7.16-16,16v12c0,8.84-7.16,16-16,16H0'/%3e%3c/g%3e%3c/svg%3e",p=()=>`
<div class="overflow">
<div class="dialog">
<p>В современном мире существует проблема перегруженного информационного поля. Мозг перенасыщен информацией, он перегружен и находится
в состоянии тревоги, что приводит к неспособности адекватно воспринимать и перерабатывать необходимый объем поступающей информации</p>

<p><span class="underline">Задание</span>: Очисти пространство от «Информационного тумана»</p>
</div>
    <canvas id="canvas"></canvas>
</div>
<div class="table">
  <div class="cell">
    <h3>ПРОБЛЕМА:</h3>
    <p>
      Ограниченная способность запоминания: Информационная перегрузка может
      привести к тому, что человек не способен запоминать и удерживать важные
      сведения, поскольку они затерялись среди обилия информации
    </p>
  </div>
  <div class="cell">
    <h3>ЗАДАНИЕ:</h3>
    <p>
      Посмотри, как выглядит твой мозг при избыточном потоке информации, ему
      правда непросто, когда он перегружен!попробуй найти в нем пин-код от
      карты, который затерялся среди кучи информации, которую ты поглотил
    </p>
  </div>
</div>

<div class="folders">
</div>

`,u=()=>`
<div class="pincode-folder">
  <div class="folder-header">
    <img src="/src/assets/folder_heading.svg" alt="folder-header" />
    <span class="folder-header-text">2.1.4.3 (пин-код)</span>
  </div>
  <div class="pincode-header">
    <p>Пин-код от карты: 9999</p>
    <p>Не захламляй себя!</p>
    <p>
      Важно: информационная перегрузка негативно сказывается на физическом и
      психическом здоровье, а также на способности принятия решений и обучения
      человека
    </p>
    <div class="lines"></div>
  </div>
  <div class="pincode-buttons">
    <p>Пора двигаться дальше</p>
    <a data-link href="/desires">Далее -></a>
  </div>
</div>

`,w=()=>`
<div class="table">
  <div class="cell">
    <h3>ПРОБЛЕМА:</h3>
    <p>
      Ограниченная способность запоминания: Информационная перегрузка может
      привести к тому, что человек не способен запоминать и удерживать важные
      сведения, поскольку они затерялись среди обилия информации
    </p>
  </div>
  <div class="cell">
    <h3>ЗАДАНИЕ:</h3>
    <p>
      Посмотри, как выглядит твой мозг при избыточном потоке информации, ему
      правда непросто, когда он перегружен!попробуй найти в нем пин-код от
      карты, который затерялся среди кучи информации, которую ты поглотил
    </p>
  </div>
</div>

<div class="floating-folders">
</div>
`,C="data:image/svg+xml,%3csvg%20width='69'%20height='54'%20viewBox='0%200%2069%2054'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.56897%208.29839H4.04396L4.247%207.86897L6.73311%202.61081C7.27032%201.47462%208.41446%200.75%209.67125%200.75H29.4589C30.5123%200.75%2031.5004%201.2606%2032.1098%202.11988L36.2675%207.98226L36.4917%208.29839H36.8793H65C66.7949%208.29839%2068.25%209.75346%2068.25%2011.5484V50C68.25%2051.7949%2066.7949%2053.25%2065%2053.25H4C2.20507%2053.25%200.75%2051.7949%200.75%2050V11.1173C0.75%209.56048%202.01209%208.29839%203.56897%208.29839Z'%20fill='%23F7F7F7'%20stroke='black'%20stroke-width='1.5'/%3e%3c/svg%3e",g="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='8'%20cy='8'%20r='7.2'%20stroke='black'%20stroke-width='1.6'/%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20width='56'%20height='70'%20viewBox='0%200%2056%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.50124%2050.3949C7.30205%2050.3949%206.15736%2050.0654%205.1217%2049.4614C3.54095%2048.5279%202.39627%2047.0453%201.9602%2045.2882C1.52413%2043.531%201.74216%2041.6641%202.66881%2040.0717L21.9104%207.67428C22.4555%206.7408%2023.2731%205.91713%2024.1997%205.36803C25.7805%204.43454%2027.5793%204.15999%2029.3781%204.59927C31.1223%205.03856%2032.6486%206.13678%2033.5752%207.72919L52.8168%2040.0717C53.4164%2041.115%2053.7434%2042.2681%2053.7434%2043.4761C53.7979%2047.265%2050.7454%2050.3949%2046.9844%2050.3949H8.50124ZM25.7805%2010.0354L6.59343%2042.3779C6.32089%2042.8721%206.21187%2043.4761%206.3754%2044.0802C6.53893%2044.6842%206.92049%2045.1784%207.41106%2045.4529C7.73812%2045.6726%208.11968%2045.7824%208.50124%2045.7824H46.9298C48.1835%2045.7824%2049.1647%2044.7391%2049.1647%2043.4761C49.1647%2043.0918%2049.0557%2042.7074%2048.8376%2042.3779L29.7051%2010.0354C29.3781%209.54125%2028.8875%209.15687%2028.2879%208.99214C27.6883%208.82741%2027.0887%208.93723%2026.5436%209.26669C26.2711%209.48634%2025.9985%209.76089%2025.7805%2010.0354Z'%20fill='black'/%3e%3cpath%20d='M28.0082%2032.3292C26.7422%2032.3292%2025.6963%2031.2756%2025.6963%2030.0002V20.7949C25.6963%2019.5194%2026.7422%2018.4658%2028.0082%2018.4658C29.2743%2018.4658%2030.3201%2019.5194%2030.3201%2020.7949V30.0556C30.3201%2031.3311%2029.2743%2032.3292%2028.0082%2032.3292Z'%20fill='black'/%3e%3cpath%20d='M28.0082%2041.5893C26.7422%2041.5893%2025.6963%2040.5357%2025.6963%2039.2603C25.6963%2037.9848%2026.6871%2036.9312%2027.9532%2036.9312C29.2192%2036.9312%2030.2651%2037.9848%2030.2651%2039.2603C30.2651%2040.5357%2029.2743%2041.5893%2028.0082%2041.5893Z'%20fill='black'/%3e%3c/svg%3e",y="data:image/svg+xml,%3csvg%20width='540'%20height='404'%20viewBox='0%200%20540%20404'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%20837H539M1%20837L4.32195%2011.0824L4.3625%201H539V6.8814V837M1%20837C6.88438%20822.437%2022.52%20784.403%2037.9875%20748.779C53.455%20713.154%2094.3094%20705.929%20112.803%20706.769H346.497M539%20837C539%20831.119%20534.124%20809.105%20514.622%20768.104C495.119%20727.102%20462.223%20713.49%20448.213%20711.81L346.497%20706.769M285.131%2033.7678C301.103%2034.8881%20333.215%2046.7069%20333.888%2085.0201C334.56%20123.333%20342.574%20515.483%20346.497%20706.769'%20stroke='black'/%3e%3cpath%20d='M502.057%20166.177L539%200.999984L4.99998%201.00003C14.2358%2042.9231%2031.7%20128.614%2041.1038%20166.177C50.5075%20203.74%20110.513%20217.044%20139.34%20219L414.736%20219C467.8%20219%20495.06%20183.785%20502.057%20166.177Z'%20fill='white'%20stroke='black'/%3e%3c/svg%3e",x="data:image/svg+xml,%3csvg%20width='540'%20height='623'%20viewBox='0%200%20540%20623'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.3625%20219.566C13.6094%20177.534%2031.0944%2091.6207%2040.5094%2053.9602C49.9244%2016.2996%20110.001%202.96149%20138.863%201C208.634%201%20361.46%201%20414.588%201C467.715%201%20495.007%2036.3068%20502.013%2053.9602L539%20219.566M4.3625%20219.566L539%20219.566M4.3625%20219.566L4.32195%20229.653M1%201056H539M1%201056L4.32195%20229.653M1%201056C6.88438%201041.43%2022.52%201003.38%2037.9875%20967.733C53.455%20932.09%2094.3094%20924.861%20112.803%20925.701H346.497M539%201056V225.45M539%201056C539%201050.12%20534.124%201028.09%20514.622%20987.068C495.119%20946.045%20462.223%20932.426%20448.213%20930.745L346.497%20925.701M539%20219.566V225.45M4.32195%20229.653L285.131%20252.351M285.131%20252.351L539%20225.45M285.131%20252.351C301.103%20253.471%20333.215%20265.296%20333.888%20303.629C334.56%20341.963%20342.574%20734.316%20346.497%20925.701'%20stroke='black'/%3e%3c/svg%3e",b="data:image/svg+xml,%3csvg%20width='540'%20height='623'%20viewBox='0%200%20540%20623'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.3625%20219.566C13.6094%20177.534%2031.0944%2091.6207%2040.5094%2053.9602C49.9244%2016.2996%20110.001%202.96149%20138.863%201C208.634%201%20361.46%201%20414.588%201C467.715%201%20495.007%2036.3068%20502.013%2053.9602L539%20219.566M4.3625%20219.566L539%20219.566M4.3625%20219.566L4.32195%20229.653M1%201056H539M1%201056L4.32195%20229.653M1%201056C6.88438%201041.43%2022.52%201003.38%2037.9875%20967.733C53.455%20932.09%2094.3094%20924.861%20112.803%20925.701H346.497M539%201056V225.45M539%201056C539%201050.12%20534.124%201028.09%20514.622%20987.068C495.119%20946.045%20462.223%20932.426%20448.213%20930.745L346.497%20925.701M539%20219.566V225.45M4.32195%20229.653L285.131%20252.351M285.131%20252.351L539%20225.45M285.131%20252.351C301.103%20253.471%20333.215%20265.296%20333.888%20303.629C334.56%20341.963%20342.574%20734.316%20346.497%20925.701'%20stroke='black'/%3e%3cpath%20d='M308.918%20249.507L308.934%20249.504L308.95%20249.503L504.439%20229.605C504.717%20229.577%20504.917%20229.327%20504.885%20229.05L493.303%20130.592C493.272%20130.327%20493.039%20130.134%20492.773%20130.152L31.4466%20161.35C31.1594%20161.37%2030.9479%20161.627%2030.9844%20161.912L39.8935%20231.635C39.9234%20231.869%2040.1126%20232.05%2040.3476%20232.069L271.526%20251.501L271.534%20251.501L290.917%20252.495C290.953%20252.497%20290.989%20252.495%20291.025%20252.489L308.918%20249.507Z'%20fill='white'%20stroke='black'/%3e%3cpath%20d='M231.409%20192.798L230.59%20180.7L238.206%20180.185L239.024%20192.283L237.457%20192.389L236.721%20181.5L232.247%20181.802L232.983%20192.691L231.409%20192.798ZM241.783%20192.096L240.271%20192.198L243.179%20179.849L244.777%20179.741L249.344%20191.585L247.723%20191.695L246.709%20189.093L242.422%20189.383L241.783%20192.096ZM242.714%20188.149L246.245%20187.911L244.052%20182.225L243.83%20183.462L242.714%20188.149ZM251.308%20191.452L250.038%20191.538L249.22%20179.441L250.802%20179.334L254.131%20187.111L256.383%20178.956L257.926%20178.852L258.745%20190.949L257.295%20191.047L256.741%20182.276L256.702%20182.278L256.43%20183.361L254.918%20188.781L253.343%20188.887L251.091%20183.723L250.715%20182.683L250.676%20182.686L250.787%20183.743L251.308%20191.452ZM263.945%20185.75L261.254%20190.779L259.384%20190.906L262.322%20185.375C261.595%20185.043%20260.995%20184.548%20260.522%20183.891C260.027%20183.204%20259.751%20182.445%20259.695%20181.614C259.657%20181.058%20259.771%20180.544%20260.037%20180.072C260.307%20179.594%20260.692%20179.226%20261.192%20178.968C261.691%20178.709%20262.479%20178.544%20263.554%20178.471L266.789%20178.252L267.607%20190.35L266.033%20190.456L265.706%20185.631L263.945%20185.75ZM265.624%20184.415L265.297%20179.575L264.12%20179.654C262.997%20179.73%20262.225%20179.965%20261.803%20180.359C261.38%20180.748%20261.19%20181.252%20261.231%20181.87C261.311%20183.044%20262.027%20183.943%20263.379%20184.567L265.624%20184.415ZM272.775%20190L272.047%20179.236L268.422%20179.481L268.332%20178.148L277.164%20177.551L277.254%20178.884L273.622%20179.129L274.35%20189.894L272.775%20190ZM279.588%20189.54L278.769%20177.442L280.344%20177.336L280.745%20183.267L284.841%20177.032L286.51%20176.919L282.556%20182.957L287.936%20188.975L285.964%20189.108L280.745%20183.267L281.162%20189.433L279.588%20189.54ZM289.721%20188.854L288.208%20188.957L291.116%20176.607L292.714%20176.499L297.282%20188.343L295.66%20188.453L294.646%20185.851L290.359%20186.141L289.721%20188.854ZM290.652%20184.907L294.183%20184.669L291.989%20178.983L291.768%20180.22L290.652%20184.907Z'%20fill='black'/%3e%3cpath%20d='M230.508%20194.065L297.612%20189.526L297.694%20190.735L230.589%20195.273L230.508%20194.065Z'%20fill='black'/%3e%3c/svg%3e";let L="";function E(){var t=document.getElementById("canvas");const a=t.getContext("2d",{willReadFrequently:!0});a.globalCompositeOperation="destination-over",t.width=window.innerWidth,t.height=window.innerHeight,a.fillStyle="#000000d3",a.fillRect(0,0,t.width,t.height);const i=o=>{if(e)if(o.type==="touchmove"){const d=o.changedTouches[0].clientX,c=o.changedTouches[0].clientY;a.clearRect(d-80,c-80,160,160)}else{const d=o.clientX,c=o.clientY;a.clearRect(d-80,c-80,160,160)}};let e=!1;t.addEventListener("mousedown",()=>e=!0),t.addEventListener("mouseup",()=>e=!1),t.addEventListener("touchstart",()=>e=!0),t.addEventListener("touchend",()=>e=!1),t.addEventListener("mousemove",i),t.addEventListener("touchmove",i);const s=()=>{const o=a.getImageData(0,0,t.width,t.height),d=o.data.length/4;let c=0;for(let r=0;r<o.data.length;r+=4)o.data[r+3]>0&&c++;if(c/d*100<20){const r=document.querySelectorAll(".overflow")[0];r.classList.add("transitioning-src"),setTimeout(()=>r.remove(),1e3),clearInterval(n)}},n=setInterval(()=>{s()},100)}function k(){const t=document.getElementsByClassName("folders")[0];["01. Открыть бизнес","02. Новости","03. Припевы песен","04. Мемы","05. Уведомление","06. Выложить пост","07. Цитаты великих","08. Ивангай восстал","09. Надо в отпуск","10. Пароль от wi-fi","11. Тик-токи","12. Надо посмотреть","13. Пинкод","14. Туц-туц","15. О! Новый пост","16. Он тоже уехал","17. Идеи бизнеса","18. Baby Shark","19. Челленджи","20. Распродажа на wb","21. Мотивация","22. Начать спорт"].forEach((e,s)=>{if(s==12){const n=document.createElement("a");n.setAttribute("data-link",""),n.id="folder",n.className="folder",n.innerHTML=`
        <a data-link href="/desires" class="folder-header">
          <img data-link src="${h}" alt="folder-header" />
          <span data-link class="folder-header-text">${e}</span>
        </a>
    `,n.href="/desires",t.appendChild(n)}else{const n=document.createElement("div");n.id="folder",n.className="folder",n.innerHTML=`
        <div class="folder-header">
          <img src="${h}" alt="folder-header" />
          <span class="folder-header-text">${e}</span>
        </div>
    `,t.appendChild(n)}});var i=[...document.querySelectorAll(".folder")];i.forEach((e,s)=>{e.style.top=`${s*20}px`,e.firstElementChild.style.left=`${20+s*4}px`})}function H(){const t=["Желанные гаджеты   ","Фото для инстаграма","Дорогие отели      ","Желанные авто      ","Они сделали больше ","Тренды             ","Идеи бизнеса       ","Популярные образы  ","Зависть            ","Модные луки        ","Фото с Мальдив     ","Дорогие бренды     ","Известные рестораны","Трендовые профессии","Мои желания!","Хочу их переплюнуть","Идеи бизнеса       ","Темки              ","Фото денег         ","Яхты               ","Фото из Москва Сити","Истории о заработке","Молодые и успешные ","Они круче          ","Список Forbes      ","Модные хобби       ","Вершина карьеры    ","Фото еды           ","Курсы за 3 дня     "];var a=document.getElementsByClassName("floating-folders")[0];t.forEach(i=>{var e=document.createElement("div");e.innerHTML=`
      <img src="${C}" alt="folder-header" draggable="false" />
      <h5>${i}</h5>
    `,e.className="floating-folder",T(e);let s=!1;e.addEventListener("mousedown",()=>{s=!1}),e.addEventListener("mousemove",()=>{s=!0}),i=="Мои желания!"&&e.addEventListener("click",n=>{s?(n.preventDefault(),s=!1):_()}),a.appendChild(e)})}function f(t){return new Promise((a,i)=>setTimeout(a,t))}const _=async()=>{var t=document.getElementsByClassName("floating-folders")[0];let a=window.innerWidth/2-10*10-290,i=window.innerHeight/2-10*10-300;for(let s=0;s<=10;s++){var e=document.createElement("div");e.innerHTML=`
        <div class="floating-window__header">
          <div class="floating-window__header_close">
            <img src="${g}"  draggable="false" />
            <img src="${g}"  draggable="false" />
            <img src="${g}"  draggable="false" />
          </div>
          <span>Alert</span>
        </div>
        <div class="floating-window__content">
          <img src="${M}"  draggable="false" />
          <p>
              Все не так просто! Очень сложно вспомнить
              о своих реальных желаниях, когда ты живешь чужими жизнями
          </p>
          <button class='floating-window__button'>Я справлюсь!</button
        </div>
    `,e.style.top=i+20+"px",e.style.left=a+20+"px",e.className="floating-window",t.appendChild(e),a=a+20,i=i+20,s==10&&e.getElementsByClassName("floating-window__button")[0].addEventListener("click",function(o){N()},!1),await f(100)}},N=()=>{Array.prototype.slice.call(document.getElementsByClassName("floating-window")).forEach(function(e){e.remove()});var t=document.getElementsByClassName("floating-folders")[0],a=document.createElement("div");a.className="floating-window",a.innerHTML=`
    <div class="floating-window__header">
        <div class="floating-window__header_close">
          <img src="${g}"  draggable="false" />
          <img src="${g}"  draggable="false" />
          <img src="${g}"  draggable="false" />
        </div>
        <span>Мои желания!</span>
    </div>
    <div class="floating-window__content">
    <p style="text-align: left;">
        Вспомни о своих реальных желаниях и попробуй их сформулировать прямо здесь!
    </p>
    <textarea class="floating-window__textarea" name="textarea" cols="40" rows="5"></textarea>
    <a data-link href="/finish" class='floating-window__button'>Больше не забуду</a>
    </div>
`,a.getElementsByClassName("floating-window__textarea")[0].addEventListener("input",function(e){L=e.target.value}),a.style.top="50%",a.style.left="50%",a.style.transform="translate(-50%, -50%)",t.appendChild(a)},B=async()=>{var t=document.getElementsByClassName("convert-container")[0],a=document.createElement("div");a.className="pamyatka",a.innerHTML=`
    <h2>Памятка</h2>
    <p>
В процессе очищения вы сами убедились в том, как пагубно информационная перегрузка влияет на наше мышление, продуктивность, концентрацию, цели,
в целом, на наше здоровье.
    </p>
    <p>
Главное средство профилактики информационной перегрузки - это умение управ-лять своим временем и вниманием, это установка приоритетов и регулярные перерывы от информационного потока. Также важно развивать критическое мышление и умение фильтровать информацию, выбирая только самое важное
и полезное.
    </p>
    <p>
И не забывай о своих реальный желаниях:
    </p>
    <p>
        ${L}
    </p>
    <p>
Копию памятки вы получите на электронную почту.
    </p>
`;const i=document.getElementsByClassName("table")[0],e=document.createElement("img");e.className="convert",e.setAttribute("src",y),t.appendChild(e);const s=async()=>{e.removeEventListener("click",s),e.classList.add("transitioning-src"),await f(1e3),e.setAttribute("src",x),e.classList.remove("transitioning-src"),await f(1e3),e.classList.add("transitioning-src"),await f(1e3),e.setAttribute("src",b),e.classList.remove("transitioning-src"),await f(800),i.classList.add("transitioning-src"),e.classList.add("transitioning-src"),await f(800),i.remove(),t.removeChild(e),t.appendChild(a)};e.addEventListener("click",s,!1)};function m(t,a){return Math.floor(Math.random()*(a-t+1)+t)}function T(t){const a=document.getElementsByClassName("floating-folders")[0];var i=0,e=0,s=m(30,a.offsetWidth-100),n=m(30,a.offsetHeight-100);t.onmousedown=o,t.ontouchstart=o,t.style.top=n+"px",t.style.left=s+"px";function o(l){l=l||window.event,t.classList.add("dragging"),l.type==="touchstart"?(i=l.changedTouches[0].clientX,e=l.changedTouches[0].clientY):(i=l.clientX,e=l.clientY),document.onmouseup=c,document.ontouchend=c,document.onmousemove=d,document.ontouchmove=d}function d(l){l=l||window.event,l.preventDefault(),l.stopPropagation(),l.type==="touchmove"?(s=i-l.changedTouches[0].clientX,n=e-l.changedTouches[0].clientY,i=l.changedTouches[0].clientX,e=l.changedTouches[0].clientY):(s=i-l.clientX,n=e-l.clientY,i=l.clientX,e=l.clientY),t.style.top=t.offsetTop-n+"px",t.style.left=t.offsetLeft-s+"px"}function c(){t.classList.remove("dragging"),document.onmouseup=null,document.ontouchend=null,document.onmousemove=null,document.ontouchmove=null}}const Z=()=>`
<div class="table">
  <div class="cell">
    <h3>ИТОГ:</h3>
    <p>
все испытания пройдены! Проблема перегруженного информационного поля гораздо серьезнее. Мы призываем вас уделять больше внимания информационной гигиене
    </p>
  </div>
  <div class="cell">
    <h3>ЗАДАНИЕ:</h3>
    <p>
Осталось немного. памятку получают все, кто проходит данный процесс очищения. ОТкройте конверт и прочитайте содержимое
    </p>
  </div>
</div>

<div class="convert-container">
</div>
`,$={"/":{title:"Home",render:p},"/pincode":{title:"Pincode",render:u},"/desires":{title:"Desires",render:w},"/finish":{title:"Finish",render:Z}};function v(){let t=$[location.pathname];t?(document.title=t.title,app.innerHTML=t.render()):(history.replaceState("","","/"),v()),location.pathname=="/"&&(k(),E()),location.pathname=="/desires"&&H(),location.pathname=="/finish"&&B()}window.addEventListener("click",t=>{t.target.matches("[data-link]")&&(t.preventDefault(),t.target.href==null?history.pushState("","","/desires"):history.pushState("","",t.target.href),v())});window.addEventListener("popstate",v);window.addEventListener("DOMContentLoaded",v);
