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
                header_scroll += '<div class="col-xs-4 utatane_logo"><a href="index.html"><img src="./pictures/UTaTane_icon_moji.png" alt="UTaTane"></a></div>';
                //header_scroll += '<div class="col-xs-8 nav"><div><a href="color.html">Color</a> | <a href="story.html">Story</a> | <a href="self.html">Self</a> | <span style="word-spacing: normal;"><a href="question.html">Idea&nbsp;Sheet</a></span></div></div>';
                // スペースのために <div>...</div> を余計に入れている
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
                        html += '<div class="col-xs-12 utatane_icon"><a href="index.html"><img src="./pictures/UTaTane_icon.png" alt="UTaTane"></a></div>';
                    html += '</div>';
                html += '</div>'; // header_sp

                html += '<div class="row header_pc">';
                    html += '<div class="col-xs-4 utatane_icon"><a href="index.html"><img src="./pictures/UTaTane_icon.png" alt="UTaTane"></a></div>';
                    //html += '<div class="col-xs-8 nav"><nav><a href="color.html">Color</a> | <a href="story.html">Story</a> | <a href="self.html">Self</a> | <span style="word-spacing: normal;"><a href="question.html">Idea&nbsp;Sheet</a></span></nav></div>';
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
                    html += '<div class="col-xs-6"><a target="_blank" href="https://twitter.com/UTaTane_MayFes"><i class="fab fa-twitter"></i></a></div>';
                    html += '<div class="col-xs-6"><a target="_blank" href="https://www.facebook.com/UTaTan%C3%A9-941362419351686/"><i class="fab fa-facebook"></i></a></div>';
                    html += '<div class="col-xs-6"><a target="_blank" href="https://www.instagram.com/utatane_info/"><i class="fab fa-instagram"></i></a></div>';
                html += '</div>';
            html += '</div>';
            html += '<p><small>Copyright &copy; 2019 UTaTan&eacute;. All rights reserved.</small></p>';
        html += '</div>';
    html += '</footer>';

    document.write(html);
};

function menulist_appear()
{
  closebutton = '<div id="closebutton_wrap" onclick="menulist_disappear()"><div id="closebutton_icon"><p><i class="fas fa-times"></i></p></div></div>';

  menulist = '';
  menulist += '<table>';
    menulist += '<tr><td><a href="index.html" onclick="menulist_disappear()">Top</tr></a></td>';
    menulist += '<tr><td><a href="color.html" onclick="menulist_disappear()">Color</tr></a></td>';
    menulist += '<tr><td><a href="story.html" onclick="menulist_disappear()">Story</tr></a></td>';
    menulist += '<tr><td><a href="self.html" onclick="menulist_disappear()">Self</tr></a></td>';
    menulist += '<tr><td><a href="question.html" onclick="menulist_disappear()">Idea&nbsp;Sheet</tr></a></td>';
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
