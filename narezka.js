function trim() {
    q = document.getElementById('mytext').value;
    mylen = q.length;
    needlen = + document.getElementById('num').value;
  needlen2 = + document.getElementById('num2').value;
    r = document.getElementById('dop');
  r.innerHTML = "";
  /* debugger; */
    for (let i = 0; i < Math.ceil(mylen / needlen); i++) {
      newhr = r.appendChild(document.createElement("hr"));
      temp=q.substring((needlen * i) - needlen2, (needlen * (i + 1) + needlen2));
        resultlist = r.appendChild(document.createElement("textarea"), r.nextSibling),
          resultlist.setAttribute("id", "resultlist" + i);
          resultlist.value=temp;
      newbtn = r.appendChild(document.createElement("input"), r.nextSibling),
          newbtn.setAttribute("id", "resultbtn" + i),
        newbtn.setAttribute("type", "button"),
        newbtn.setAttribute("onclick", "copyFieldToClipboard('resultlist" + i+"');");
      newbtn.value=document.getElementById("resultlist"+i).value.length;
          
      
            }
    }

function copyFieldToClipboard(e) {
  var area = document.getElementById(e);  
    area.select();
    document.execCommand("copy");
 /* document.body.removeChild(area);  */
}

function paste(e) {
var area=document.getElementById(e);
area.value="";
 navigator.clipboard.readText()
    .then(text => {
      area.value = text;
    })
    .catch(err => {
      console.log('Something went wrong', err);
    })  
  
area.value=navigator.clipboard.readText();
}
