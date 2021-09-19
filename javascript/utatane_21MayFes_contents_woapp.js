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
                header_index_scroll += '<div class="col-xs-12 index_nav"><div><a href="./index.html">トップページに戻る</a>';
                //header_index_scroll += '<div class="col-xs-12 index_nav"><div><a href="./index.html">トップへ戻る</a> | <a href="./discussion.html">展示秘話・議論</a> | <a href="./distorted_heading.html">ねじまげ見出し</a> |'
                //header_index_scroll += ' <a href="./drawing_song_miscommunication.html"> すれ違いえかき </a> | <a href="./onomatopeia_emoticon.html"> オノマトペカタログ </a> | <a href="./polyphonic_scape.html"> ポリフォニックスケープ </a>| <a href="./unit.html">数の表現事典</a> | <a href="./workshop.html">ワークショップ</a> |</div></div>';
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
                  html += '<div class="col-xs-12 index_nav"><div><a href="./index.html">トップページに戻る</a>';
                  //html += '<div class="col-xs-12 index_nav"><div><a href="./index.html">トップへ戻る</a> | <a href="./discussion.html">展示秘話・議論</a> | <a href="./distorted_heading.html">ねじまげ見出し</a> |'
                  //html += ' <a href="./drawing_song_miscommunication.html"> すれ違いえかき </a> | <a href="./onomatopeia_emoticon.html"> オノマトペカタログ </a> | <a href="./polyphonic_scape.html"> ポリフォニックスケープ </a>| <a href="./unit.html">数の表現事典</a> | <a href="./workshop.html">ワークショップ</a> |</div></div>';
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
    menulist_index += '<tr><td><a href="./index.html" onclick="menulist_index_disappear()">トップページに戻る</tr></a></td>';
    //menulist_index += '<tr><td><a href="./discussion.html" onclick="menulist_index_disappear()">展示秘話・議論</tr></a></td>';
    /*menulist_index += '<tr><td><a href="./distorted_heading.html" onclick="menulist_index_disappear()">ねじまげ見出し</tr></a></td>';
    menulist_index += '<tr><td><a href="./drawing_song_miscommunication.html" onclick="menulist_index_disappear()">すれ違いえかき</tr></a></td>';
    menulist_index += '<tr><td><a href="./onomatopeia_emoticon.html" onclick="menulist_index_disappear()">オノマトペカタログ</tr></a></td>';
    menulist_index += '<tr><td><a href="./polyphonic_scape.html" onclick="menulist_index_disappear()">ポリフォニック・スケープ</tr></a></td>';
    menulist_index += '<tr><td><a href="./unit.html" onclick="menulist_index_disappear()">数の表現事典</tr></a></td>';
    menulist_index += '<tr><td><a href="./workshop.html" onclick="menulist_index_disappear()">ワークショップ</tr></a></td>';*/
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