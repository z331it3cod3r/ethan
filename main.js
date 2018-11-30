let p = {};
const e = {
  name: 'Ethan',
  age: '11',
  color: 'orange'
};
let n = null;
let userInput = null;
let q = 0;
cTime = null;
$('#info').submit(function (e)
{
  e.preventDefault();
  userInput = $('#input').value;
  cb();
});
$('#fastforward').submit(function (e) {
  e.preventDefault();
  clearTimeout(p.timeout.id);
  clearInterval(p.timeout.timeID);
  p.timeout = null;
  time(cTime);
  cb();
});
r('What is your name?');
function cb()
{
  if (q === 0)
  {
    if (userInput == 'gasp')
    {
      r('Welcome to the Byron easter egg.');
      w(r, 'Unfortunately, he has requested a space paradox and everything we know is now lost.');
      w(r, 'Goodbye, spaced out world.', 2);
      w(reset, 'https://media1.tenor.com/images/5ff9790dc2a52e2d61239c1eeda56255/tenor.gif', 4);
    }
    else
    {
      if (userInput == 'gaeCooper')
      {
        r('Welcome to the Cooper easter egg.');
        w(r, 'Unfortunately, he has requested a picture of the worst football team ever.');
        w(r, 'Goodbye, football-ly world.', 2);
        w(reset, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkLoFg5CIjBGQytTw-fIs0rCfjZ0wS3TBYnGq59oSiN2E1XU6Rg:https://txcityservices.com/wp-content/uploads/2018/04/Dallas-Cowboys-Logo.jpg', 4);
      }
      else
      {
          p.name = userInput;
          r('Hello ' + p.name + '!');
          w(r, 'My name is ' + e.name + '!');
          w(r, 'How old are you?', 2);
          ie.type = 'number';
          ie.min = 1;
          ie.max = 122;
          w(s, null, 2);
        
      }
    }
  }
  if (q == 1)
  {
    p.age = Math.floor(userInput);
    r('Being ' + p.age + ' is awesome!');
    w(r, 'I\'m ' + e.age + ' years old' + (p.age == e.age ? ' too!' : '!'));
    w(r, 'What\'s your favorite color?', 2);
    ie.type = 'color';
    w(s, null, 2);
  }
  if (q == 2)
  {
    p.color = userInput;
    document.body.style.background = p.color;
    r('There we go.');
    w(r, 'This is my favorite color.', 1);
    w(function ()
    {
      div.style.backgroundColor = e.color;
    }, null, 2);
    w(r, 'Oh, wait. I need to go to basketball practice now.', 3);
    w(r, 'Be back in an hour.', 4);
    p.timeout = {
      id: setTimeout(timef, 1000 * 60 * 60),
      timeID: setInterval(time, 1000 * 60)
    };
    cTime = {
      h: 5,
      m: 59
    };
    w(s, !0, 5);
  }
  if (q == 3)
  {
    if (p.timeout)
    {
      r('You actually waited a hour?');
      w(r, 'Nice!');
      p.timeout = null;
    }
    else
    {
      r('Puny human using puny button...');
      w(r, 'Also, be warned that pressing Fast Forward 3 times will cause a time paradox.');
    }
  }
  q++;
  h();
  h(!0);
  time();
}
function time(e = null)
{
  if (e)
  {
    timeE.innerHTML = e.h + ':' + e.m;
  }
  else
  {
    timeE = $('#time');
    timeT = timeE.html().split(':');
    timeT[1]++;
    if (timeT[1] == 60)
    {
      timeT[1] = 0;
      timeT[0]++;
    }
    if (timeT[0] == 12)
    {
      timeT[0] = 1;
    }
    timeE.html(timeT.join(':' + ((timeT[1] < 10) ? '0' : '')));
  }
}

function r(text)
{
  response = $('<p>' + htmlentities(text) + '</p>');
  $('#text').append(response);
}

function w(f, p = null, m = 1)
{
  if (p)
  {
    setTimeout(f, 1000 * m, p);
  }
  else
  {
    setTimeout(f, 1000 * m);
  }
}

function s(f = !1)
{
  if (f)
  {
    $('#fastforward').css('display', 'initial');
  }
  else
  {
    $('#info').css('display', 'initial');
  }
}

function h(f = !1)
{
  if (f)
  {
    $('#fastforward').css('display', 'none');
  }
  else
  {
    $('#info').css('display', 'none');
  }
}

function timef()
{
  cb();
  clearInterval(p.timeout.timeID);
  time(cTime);
}

function htmlentities(str)
{
  return String(str).replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>').replace(/"/g, '"');
}

function reset(url)
{
  $('div').css('display', 'none');
  $('body').css('background', 'url(' + url + ') no-repeat center center fixed');
  $('body').css('backgroundSize', 'cover');
}
