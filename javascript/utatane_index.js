// JavaScript source code
// トップページ用
window.onscroll = function()
{
  var scrollTop =
    document.documentElement.scrollTop || // IE, Firefox, Opera
    document.body.scrollTop;              // Chrome, Safari

  header_index_scroll(scrollTop, window.innerWidth);
}

function header_index_scroll(len, width)
{
    var thr = 170;
    
    var loc = location.href;
    var index_of_hash = loc.indexOf("#");
    if(index_of_hash == -1)
    {
      ref = loc;
    }
    else
    {
      ref = loc.substr(0, index_of_hash);
    }
    
    var header_index_scroll = '';
        header_index_scroll += '<div class="container">';
            header_index_scroll += '<div class="row header_scroll_pc">';
                //header_index_scroll += '<div class="col-xs-4 utatane_logo"><a href="https://mayfes2018-utatane.com"><img src="./pictures/UTaTane_icon_moji.png" alt="UTaTane"></a></div>';
                header_index_scroll += '<div class="col-xs-4 utatane_logo"><a href=';
                header_index_scroll += ref;
                header_index_scroll += '><img src="./pictures/UTaTane_icon_moji.png" alt="UTaTane"></a></div>';
                header_index_scroll += '<div class="col-xs-8 index_nav"><div><a href="#home">Top</a> | <a href="#preface">Preface</a> | <a href="#concept">Concept</a> | <a href="#movie">Movie</a> | <a href="#about">About</a> | <a href="#access">Access</a></div></div>';
            header_index_scroll += '</div>';
        header_index_scroll += '</div>';

  if(len > thr)
  {
    document.getElementById("header_index_scroll").innerHTML = header_index_scroll;
  }
  else
  {
    document.getElementById("header_index_scroll").innerHTML = '';
  }
};

function header_index() {

    var loc = location.href;
    var index_of_hash = loc.indexOf("#");
    if(index_of_hash == -1)
    {
      ref = loc;
    }
    else
    {
      ref = loc.substr(0, index_of_hash);
    }

    var html = '';

    html += '<header>';
        html += '<div class="header_default">';
            html += '<div class="container">';

                html += '<div class="header_sp">';
                    html += '<div class="row">';
//                        html += '<div class="col-xs-12 utatane_icon"><a href="https://mayfes2018-utatane.com"><img src="./pictures/UTaTane_icon.png" alt="UTaTane"></a></div>';
                        html += '<div class="col-xs-12 utatane_icon"><a href=';
                        html += ref;
                        html += '><img src="./pictures/UTaTane_icon.png" alt="UTaTane"></a></div>';
                    html += '</div>';
                html += '</div>'; // header_sp

                html += '<div class="row header_pc">';
//                    html += '<div class="col-xs-4 utatane_icon"><a href="https://mayfes2018-utatane.com"><img src="./pictures/UTaTane_icon.png" alt="UTaTane"></a></div>';
                    html += '<div class="col-xs-4 utatane_icon"><a href=';
                    html += ref;
                    html += '><img src="./pictures/UTaTane_icon.png" alt="UTaTane"></a></div>';
                    html += '<div class="col-xs-8 index_nav"><nav><a href="#home">Top</a> | <a href="#preface">Preface</a> | <a href="#concept">Concept</a> | <a href="#movie">Movie</a> | <a href="#about">About</a> | <a href="#access">Access</a></nav></div>';
                html += '</div>'; // header_pc

            html += '</div>';
        html += '</div>';
    html += '</header>';

    document.write(html);
};


function menulist_index_appear()
{
  closebutton = '<div id="closebutton_wrap" onclick="menulist_index_disappear()"><div id="closebutton_icon"><p><i class="fas fa-times"></i></p></div></div>';

  menulist_index = '';
  menulist_index += '<table>';
    menulist_index += '<tr><td><a href="#home" onclick="menulist_index_disappear()">Top</tr></a></td>';
    menulist_index += '<tr><td><a href="#preface" onclick="menulist_index_disappear()">Preface</tr></a></td>';
    menulist_index += '<tr><td><a href="#concept" onclick="menulist_index_disappear()">Concept</tr></a></td>';
    menulist_index += '<tr><td><a href="#movie" onclick="menulist_index_disappear()">Movie</tr></a></td>';
    menulist_index += '<tr><td><a href="#about" onclick="menulist_index_disappear()">About</tr></a></td>';
    menulist_index += '<tr><td><a href="#access" onclick="menulist_index_disappear()">Access</tr></a></td>';
    menulist_index += '<tr><td><a href="#links" onclick="menulist_index_disappear()">Links</tr></a></td>';
  menulist_index += '</table>';

  document.getElementById("menubutton").innerHTML = '';
  document.getElementById("closebutton").innerHTML = closebutton;
  document.getElementById("menulist").innerHTML = menulist_index;
};

function menulist_index_disappear()
{
  menubutton_index = '<div id="menubutton_wrap" onclick="menulist_index_appear()"><div id="menubutton_icon"><p><i class="fas fa-bars"></i></p></div></div>';
  document.getElementById("menubutton").innerHTML = menubutton_index;
  document.getElementById("closebutton").innerHTML = '';
  document.getElementById("menulist").innerHTML = '';
};
