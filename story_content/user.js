function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5djJXMycCZi":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
}

