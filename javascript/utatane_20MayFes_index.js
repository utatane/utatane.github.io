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
                header_index_scroll += '<div class="col-xs-3 utatane_logo"><a href=';
                header_index_scroll += ref;
                header_index_scroll += '><img src="../../pictures/UTaTane_icon_moji.png" alt="UTaTane"></a></div>';
                header_index_scroll += '<div class="col-xs-9 index_nav"><div><a href="#top">トップ</a> | <a href="#concept">企画コンセプト</a> | <a href="#contents">展示</a> | <a href="#participation"> 参加方法</a> | <a href="#contact">問い合わせ</a></div></div>';
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
                      html += '><img src="../../pictures/UTaTane_icon.png" alt="UTaTane"></a></div>';
                  html += '</div>';
              html += '</div>'; // header_sp

              html += '<div class="row header_pc">';
//                    html += '<div class="col-xs-4 utatane_icon"><a href="https://mayfes2018-utatane.com"><img src="./pictures/UTaTane_icon.png" alt="UTaTane"></a></div>';
                  html += '<div class="col-xs-3 utatane_icon"><a href=';
                  html += ref;
                  html += '><img src="../../pictures/UTaTane_icon.png" alt="UTaTane"></a></div>';
                  html += '<div class="col-xs-9 index_nav"><div><a href="#top">トップ</a> | <a href="#concept">企画コンセプト</a> | <a href="#contents">展示</a> | <a href="#participation"> 参加方法</a> | <a href="#contact">問い合わせ</a></div></div>';
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
    menulist_index += '<tr><td><a href="#top" onclick="menulist_index_disappear()">トップ</tr></a></td>';
    menulist_index += '<tr><td><a href="#concept" onclick="menulist_index_disappear()">企画コンセプト</tr></a></td>';
    menulist_index += '<tr><td><a href="#contents" onclick="menulist_index_disappear()">展示</tr></a></td>';
    menulist_index += '<tr><td><a href="#contents" onclick="menulist_index_disappear()">参加方法</tr></a></td>';
    menulist_index += '<tr><td><a href="#contact" onclick="menulist_index_disappear()">問い合わせ</tr></a></td>';
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
