// JavaScript source code

window.onscroll = function()
{
  var scrollTop =
    document.documentElement.scrollTop || // IE, Firefox, Opera
    document.body.scrollTop;              // Chrome, Safari

  header_scroll(scrollTop, window.innerWidth);

};

function header_scroll(len, width)
{
    var thr = 170;

    var header_scroll = '';
        header_scroll += '<div class="container">';
            header_scroll += '<div class="row header_scroll_pc">';
                header_scroll += '<div class="col-xs-4 utatane_logo"><a href="TechnoEdge2018.html"><img src="./pictures/UTaTane_icon_moji.png" alt="UTaTane"></a></div>';
                header_scroll += '<div class="col-xs-8 nav"><div><a href="livingroom2018mayfes.html">Home</a> | <a href="train.html">Train</a> | <a href="school.html">School</a> | <a href="park.html">Park</a></div></div>';
                // スペースのために必要な <div>...</div>
            header_scroll += '</div>';
        header_scroll += '</div>';

  if(len > thr)
  {
    document.getElementById("header_scroll").innerHTML = header_scroll;
  }
  else
  {
    document.getElementById("header_scroll").innerHTML = '';
  }
};

function header() {
    var html = '';

    html += '<header>';
        html += '<div class="header_default">';
            html += '<div class="container">';

                html += '<div class="header_sp">';
                    html += '<div class="row">';
                        html += '<div class="col-xs-12 utatane_icon"><a href="TechnoEdge2018.html"><img src="./pictures/UTaTane_icon.png" alt="UTaTane"></a></div>';
                    html += '</div>';
                html += '</div>'; // header_sp

                html += '<div class="row header_pc">';
                    html += '<div class="col-xs-4 utatane_icon"><a href="TechnoEdge2018.html"><img src="./pictures/UTaTane_icon.png" alt="UTaTane"></a></div>';
                    html += '<div class="col-xs-8 nav"><nav><a href="livingroom2018mayfes.html">Home</a> | <a href="train.html">Train</a> | <a href="school.html">School</a> | <a href="park.html">Park</a></nav></div>';
                html += '</div>'; // header_pc

            html += '</div>';
        html += '</div>';
    html += '</header>';

    document.write(html);
};

function footer() {
    var html = '';

    html += '<footer>';
        html += '<div align="center">';
            html += '<p>E-mail: utatane.mayfes2018[at]gmail.com</p>';
            html += '<div class="container" id="snslinks">';
                html += '<div class="row">';
                    html += '<div class="col-xs-6" style="margin-right: 1em;"><a target="_blank" href="https://twitter.com/UTaTane_MayFes"><i class="fab fa-twitter"></i></a></div>';
                    html += '<div class="col-xs-6" style="margin-left: 1em;"><a target="_blank" href="https://www.facebook.com/UTaTan%C3%A9-941362419351686/"><i class="fab fa-facebook"></i></a></div>';
                html += '</div>';
            html += '</div>';
            html += '<p><small>Copyright &copy; 2018 UTaTan&eacute;. All rights reserved.</small></p>';
        html += '</div>';
    html += '</footer>';

    document.write(html);
};

function menulist_appear()
{
  closebutton = '<div id="closebutton_wrap" onclick="menulist_disappear()"><div id="closebutton_icon"><p><i class="fas fa-times"></i></p></div></div>';

  menulist = '';
  menulist += '<table>';
    menulist += '<tr><td><a href="TechnoEdge2018.html" onclick="menulist_disappear()">Top</tr></a></td>';
    menulist += '<tr><td><a href="livingroom2018mayfes.html" onclick="menulist_disappear()">Home</tr></a></td>';
    menulist += '<tr><td><a href="train.html" onclick="menulist_disappear()">Train</tr></a></td>';
    menulist += '<tr><td><a href="school.html" onclick="menulist_disappear()">School</tr></a></td>';
    menulist += '<tr><td><a href="park.html" onclick="menulist_disappear()">Park</tr></a></td>';
  menulist += '</table>';

  document.getElementById("menubutton").innerHTML = '';
  document.getElementById("closebutton").innerHTML = closebutton;
  document.getElementById("menulist").innerHTML = menulist;
};

function menulist_disappear()
{
  menubutton = '<div id="menubutton_wrap" onclick="menulist_appear()"><div id="menubutton_icon"><p><i class="fas fa-bars"></i></p></div></div>';
  document.getElementById("menubutton").innerHTML = menubutton;
  document.getElementById("closebutton").innerHTML = '';
  document.getElementById("menulist").innerHTML = '';
};
