var i = 2;
var q = 2;
var p = 2;
var ma = 2;

function m() {
  setTimeout(function() {
    time.innerHTML = i;
    i--;
    if (i >= 0) {
      m();
    }
    if (i < 0) {
      document.getElementById('fButton').disabled = false;
    } else {
      document.getElementById('fButton').disabled = true;
    }
  }, 1000);
}
m();

function n() {
  document.getElementById('s_task').scrollIntoView();
  if (document.getElementById('s').style.display = 'block') {
    document.getElementById('s').style.display = 'block';
  } else {
    document.getElementById('s').style.display = 'none';
  }

  setTimeout(function() {
    sTime.innerHTML = p;
    p--;
    if (p >= 0) {
      n();
    }
    if (p < 0) {
      document.getElementById('sButton').disabled = false;
    } else {
      document.getElementById('sButton').disabled = true;
    }

  }, 1000);
}


function o() {
  document.getElementById('t_task').scrollIntoView();
  if (document.getElementById('t').style.display = 'block') {
    document.getElementById('t').style.display = 'block';
  } else {
    document.getElementById('t').style.display = 'none';
  }

  setTimeout(function() {
    mdTime.innerHTML = q;
    q--;
    if (q >= 0) {
      o();
    }
    if (q < 0) {
      document.getElementById('theiframe').disabled = false;
    } else {
      document.getElementById('theiframe').disabled = true;
    }

  }, 1000);
}

function a() {
  document.getElementById("theiframe").contentWindow.document.body.onclick = function() {
    alert();
    bom();
  }
}

function bom() {
  if (document.getElementById('u').style.display = 'block') {
    document.getElementById('u').style.display = 'block';
  } else {
    document.getElementById('u').style.display = 'none';
  }

  setTimeout(function() {
    bo.innerHTML = ma;
    ma--;
    if (ma >= 0) {
      bom();
    }
    if (ma < 0) {
      document.getElementById('claim').disabled = false;
    } else {
      document.getElementById('claim').disabled = true;
    }
  }, 1000);
}



function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert('copyed')
}

function code(){
  document.getElementById('l').scrollIntoView();
  if (document.getElementById('copyBox').style.display = 'block') {
    document.getElementById('copyBox').style.display = 'block';
  } else {
    document.getElementById('copyBox').style.display = 'none';
  }
}
