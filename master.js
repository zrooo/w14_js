var Links = {
  setColor: function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
};

var Body = {
  setColor : function(color){
    document.querySelector('body').style.color = color;
  },
  setBGColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
};


/* function linksSetColor(color){
  var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
}

function bodysetColor(color){
    document.querySelector('body').style.color = color;
}

function bodysetBGColor(color){
    document.querySelector('body').style.backgroundcolor = color;
} */

function nightDayHandler(self){

  if(self.value == 'night'){
    //bodysetBGColor('black');
    Body.setBGColor('black');
    //bodysetColor('white');
    Body.setColor('white');
    self.value = 'day';
    //linksetColor('powderblue')
    Links.setColor('blue');

  } else {
    Body.setBGColor('white');
    Body.setColor('black');
    self.value = 'night';
    //linksetColor('blue');
    Links.setColor('blue');
  }
}
