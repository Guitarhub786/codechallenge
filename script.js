var storeHTML;
var storeJS;


run_button.addEventListener("click", function () {
  storeHTML = editor.getValue();
  storeJS = editor2.getValue();
  storeMix =
    "<script>" +
    storeJS +
    "</script>" +
    storeHTML;
  // console.log(storeHTML);
  // console.log(storeJS);
  var jsDoc2 = document.getElementById("iframe2").contentWindow.document;

  jsDoc2.open();
  jsDoc2.write(storeMix);
  // console.log(storeMix);
  jsDoc2.close();
});

//============== ACE EDITOR ==============
function update() {

  var idoc = document.getElementById("iframe").contentWindow.document;

  idoc.open();
  idoc.write(editor.getValue());
  idoc.close();
}

function setupEditor() {
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/javascript");
  editor.getSession().setTabSize(2);
  editor.getSession().setUseWrapMode(true);
  editor.setValue(
    `
    <!DOCTYPE html><html><body>
        <h2 id="idOutput">Output...</h2>
        <h2 id="idDone" onclick="myFunction()" style='color: red' >Waiting...</h2>
    <script>
        
        document.getElementById("idOutput").innerHTML = x;  
        
        if (x === 6) {
          document.getElementById("idDone").style.color = "green"; 
          document.getElementById("idDone").innerHTML = 'Done!'; 
        }
    </script></body></html>
    `,
    1
  ); //1 = moves cursor to end

  editor.getSession().on("change", function () {
    update();
  });

  editor.focus();

  editor.setOptions({
    fontSize: "12pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
update();

//==================================================

function update2() {

  storeHTML = editor.getValue();
  storeJS = editor2.getValue();
  storeMix =
    "<script>" +
    storeJS +
    "</script>" +
    storeHTML;

  var idoc2 = document.getElementById("iframe2").contentWindow.document;

  idoc2.open();
  idoc2.write(editor2.getValue());  // original (need 'RUN' button)
  idoc2.write(storeMix);            // updates live
  idoc2.close();

}

function setupEditor2() {
  window.editor2 = ace.edit("editor2");
  editor2.setTheme("ace/theme/monokai");
  editor2.getSession().setMode("ace/mode/javascript");
  editor2.getSession().setTabSize(2);
  editor2.getSession().setUseWrapMode(true);
  editor2.setValue(
    `
function add() {
  
}

x = add(2,4);`,
    1
  ); //1 = moves cursor to end

  editor2.getSession().on("change", function () {
    update2();
  });

  editor2.focus();

  editor2.setOptions({
    fontSize: "14pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false
  });

  editor2.setShowPrintMargin(false);
  editor2.setBehavioursEnabled(false);
}

setupEditor2();
update2();
