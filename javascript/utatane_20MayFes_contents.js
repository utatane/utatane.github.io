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
                header_index_scroll += '<div class="col-xs-12 index_nav"><div><a href="./index.html">トップへ戻る</a> | <a href="./colorful_patchwork.html">色のパッチワーク</a> | <a href="./discussion.html">議論</a> |'
                header_index_scroll += ' <a href="./fake_product_catalog.html"> 架空商品カタログ </a> | <a href="./drawing_song_miscommunication.html"> すれ違い絵かき歌 </a> | <a href="./distorted_heading.html"> ねじ曲げ見出し </a>| <a href="./science_factory.html">科学の工場見学</a> | </div></div>';
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
                  html += '<div class="col-xs-12 index_nav"><div><a href="./index.html">トップへ戻る</a> | <a href="./colorful_patchwork.html">色のパッチワーク</a> | <a href="./discussion.html">議論</a> |';
                  html += ' <a href="./fake_product_catalog.html"> 架空商品カタログ </a> | <a href="./drawing_song_miscommunication.html"> すれ違い絵かき歌 </a> | <a href="./distorted_heading.html"> ねじ曲げ見出し </a>| <a href="./science_factory.html">科学の工場見学</a> | </div></div>';
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
    menulist_index += '<tr><td><a href="./index.html" onclick="menulist_index_disappear()">トップへ戻る</tr></a></td>';
    menulist_index += '<tr><td><a href="./colorful_patchwork.html" onclick="menulist_index_disappear()">色のパッチワーク</tr></a></td>';
    menulist_index += '<tr><td><a href="./discussion" onclick="menulist_index_disappear()">議論</tr></a></td>';
    menulist_index += '<tr><td><a href="./fake_product_catalog.html" onclick="menulist_index_disappear()">架空商品カタログ</tr></a></td>';
    menulist_index += '<tr><td><a href="./drawing_song_miscommunication.html" onclick="menulist_index_disappear()">すれ違い絵かき歌</tr></a></td>';
    menulist_index += '<tr><td><a href="./distorted_heading.html" onclick="menulist_index_disappear()">ねじ曲げ見出し</tr></a></td>';
    menulist_index += '<tr><td><a href="./science_factory.html" onclick="menulist_index_disappear()">科学の工場見学</tr></a></td>';
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
