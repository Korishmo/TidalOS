var sysVersion = "0.7";
var sysBuild = 510;
var sysCodename = "Unity";
var sysScales = ["9", "12", "15", "20", "24"];
var sysDevMode = 1;
var FirstRunOSK = 0;
var nnbob = 99;
var sysBatt = 100;
var usespasscode = 0;
var passcodehash = "";
var bioslock = 0;
var Icons = [];
var icns = 0;
var currentOSK = 999;
var icons = ["icon://fa-cogs", "icon://fa-download", "icon://fa-music"];
var keyboard_locale = qwerty_us;
var songnames = ["Thatched Villagers", "Sneaky Snitch", "Mind Control"];
var songcomposers = ["Kevin MacLeod", "Kevin MacLeod", "ColBreakz"];
var isremixed = [false, false, false];
var remixedby = ["", "", ""];
var qwerty_us = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
setText("TidalOS.settings.aboutdiag.window", ("TidalOS Settings \n \n About \n \n Version " + sysVersion + "\n Build " + sysBuild + "\n Codename ") + sysCodename);
SFS.Config(sysVersion, sysBuild, sysBatt, sysDevMode, "TidalOS");
biosBoot();
function ninetyninebottlesofbeer() {
  while ((nnbob >= 1)) {
    console.log(nnbob + " bottles of beer on the wall");
    console.log(nnbob + " bottles of beer");
    console.log("Take one down");
    console.log("Pass it around");
    nnbob = nnbob - 1;
  console.log(nnbob + " bottles of beer on the wall");
  }
}
consoleDebugger();
timedLoop(1, function() {
if (isremixed[(getText("TidalOS.music.ID"))]) {
  setText("TidalOS.music.sba", (songnames[(getText("TidalOS.music.ID"))] + " \n by \n ") + songcomposers[(((getText("TidalOS.music.ID"))) + "\n remixed by " + remixedby[(getText("TidalOS.music.ID"))])]);
} else {
  if (!"") {
    setText("TidalOS.music.sba", (songnames[(getText("TidalOS.music.ID"))] + " \n by \n ") + songcomposers[(getText("TidalOS.music.ID"))]);
  } else {
    setText("TidalOS.music.sba", (songnames[(getText("TidalOS.music.ID"))] + " \n by \n ") + songcomposers[(getText("TidalOS.music.ID"))]);
  }
}
setText("TidalOS.settings.wifi.window", "TidalOS Settings \n \n Internet \n \n Networks: \n  \n Network: " + SFS.ListNetworks().join("\n" + "\n Network: "));
});
function oskopen(menu, inputid, letters) {
  if (!FirstRunOSK) {
    deleteElement("osk.1");
    deleteElement("osk.2");
    deleteElement("osk.3");
    deleteElement("osk.4");
    deleteElement("osk.5");
    deleteElement("osk.6");
    deleteElement("osk.7");
    deleteElement("osk.8");
    deleteElement("osk.0");
    deleteElement("osk.9");
    if (currentOSK) {
      deleteElement("osk.@");
      deleteElement("osk.#");
      deleteElement("osk.$");
      deleteElement("osk.%");
      deleteElement("osk.^");
      deleteElement("osk.&");
      deleteElement("osk.*");
      deleteElement("osk.(");
      deleteElement("osk.)");
      deleteElement("osk.'");
      deleteElement("osk.\"");
  deleteElement("osk.?");
  deleteElement("osk.:");
  deleteElement("osk.;");
  deleteElement("osk./");
      deleteElement("osk.-");
      deleteElement("osk.=");
      deleteElement("osk.+");
      deleteElement("osk._");
      deleteElement("osk.\\");
      deleteElement("osk.[");
      deleteElement("osk.]");
      deleteElement("osk.{");
      deleteElement("osk.}");
      deleteElement("osk.∀");
      deleteElement("osk.™")
      deleteElement("osk.©");
      deleteElement("osk.Þ");
      deleteElement("osk.letters");
    } else {
          deleteElement("osk.a");
          deleteElement("osk.b");
    deleteElement("osk.c");
    deleteElement("osk.d");
    deleteElement("osk.e");
    deleteElement("osk.f");
    deleteElement("osk.g");
    deleteElement("osk.h");
    deleteElement("osk.i");
    deleteElement("osk.j");
    deleteElement("osk.k");
    deleteElement("osk.l");
    deleteElement("osk.m");
    deleteElement("osk.n");
    deleteElement("osk.o");
    deleteElement("osk.p");
    deleteElement("osk.q");
    deleteElement("osk.r");
    deleteElement("osk.s");
    deleteElement("osk.t");
    deleteElement("osk.u");
    deleteElement("osk.v");
    deleteElement("osk.w");
    deleteElement("osk.x");
    deleteElement("osk.y");
    deleteElement("osk.z");
          deleteElement("osk.symbols");
          deleteElement("osk.backspace");
          deleteElement("osk.enter");
    }
    deleteElement("osk.!");
    deleteElement("osk..");
    deleteElement("osk.,");
      deleteElement("osk.space");
  }

  if (menu == 0) {
    BetterElementMakerAPI.Button("osk.1", 0, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "1", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.2", 30, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "2", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.3", 60, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "3", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.4", 90, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "4", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.5", 120, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "5", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.6", 150, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "6", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.7", 180, 295, 40, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "7", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.8", 220, 295, 40, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "8", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.9", 260, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "9", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.0", 290, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "0", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.q", 0, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[0], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.w", 30, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[1], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.e", 60, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[2], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.r", 90, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[3], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.t", 120, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[4], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.y", 150, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[5], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.u", 180, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[6], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.i", 210, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[7], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.o", 240, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[8], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.p", 270, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[9], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.backspace", 300, 325, 20, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "←  ", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.a", 10, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[10], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.s", 40, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[11], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.d", 70, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[12], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.f", 100, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[13], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.g", 130, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[14], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.h", 160, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[15], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.j", 190, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[16], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.k", 220, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[17], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.l", 250, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[18], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.enter", 280, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "⏎", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.z", 15, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[19], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.x", 45, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[20], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.c", 75, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[21], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.v", 105, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[22], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.b", 135, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[23], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.n", 165, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[24], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.m", 195, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", letters[25], "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk..", 225, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", ".", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.,", 255, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", ",", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.!", 285, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "!", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.symbols", 0, 415, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "%", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.space", 60, 415, 180, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "space", "rgb(0, 0, 0)");
    onEvent("osk.a", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.a"));
    });
    onEvent("osk.b", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.b"));
    });
    onEvent("osk.c", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.c"));
    });
    onEvent("osk.d", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.d"));
    });
    onEvent("osk.e", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.e"));
    });
    onEvent("osk.f", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.f"));
    });
    onEvent("osk.g", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.g"));
    });
    onEvent("osk.h", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.h"));
    });
    onEvent("osk.i", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.i"));
    });
    onEvent("osk.j", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.j"));
    });
    onEvent("osk.k", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.k"));
    });
    onEvent("osk.l", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.l"));
    });
    onEvent("osk.m", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.m"));
    });
    onEvent("osk.n", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.n"));
    });
    onEvent("osk.o", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.o"));
    });
    onEvent("osk.p", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.p"));
    });
    onEvent("osk.q", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.q"));
    });
    onEvent("osk.r", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.r"));
    });
    onEvent("osk.s", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.s"));
    });
    onEvent("osk.t", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.t"));
    });
    onEvent("osk.u", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.u"));
    });
    onEvent("osk.v", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.v"));
    });
    onEvent("osk.w", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.w"));
    });
    onEvent("osk.x", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.x"));
    });
    onEvent("osk.y", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.y"));
    });
    onEvent("osk.z", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.z"));
    });
    onEvent("osk.enter", "click", function( ) {
      setText(inputid, getText(inputid) + "\n");
    });
    onEvent("osk.backspace", "click", function( ) {
      setText(inputid, getText(inputid).substring(0, getText(inputid).length - 1));
    });
    onEvent("osk.symbols", "click", function( ) {
      oskopen(1, inputid, letters);
    });
  } else if (menu == 1) {
    BetterElementMakerAPI.Button("osk.1", 0, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "1", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.2", 30, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "2", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.3", 60, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "3", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.4", 90, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "4", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.5", 120, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "5", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.6", 150, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "6", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.7", 180, 295, 40, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "7", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.8", 220, 295, 40, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "8", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.9", 260, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "9", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.0", 290, 295, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "0", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.@", 0, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "@", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.#", 30, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "#", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.$", 60, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "$", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.&", 90, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "&", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.*", 120, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "*", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.(", 150, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "(", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.)", 180, 325, 40, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", ")", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.'", 220, 325, 40, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "'", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.\"", 260, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "\"", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.%", 290, 325, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "%", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.-", 10, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "-", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.+", 40, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "+", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.=", 70, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "=", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk./", 100, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "/", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.;", 130, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", ";", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.:", 160, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", ":", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.,", 190, 355, 40, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", ",", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk..", 230, 355, 40, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", ".", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.[", 270, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "[", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.]", 15, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "]", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.{", 45, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "{", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.}", 75, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "}", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.^", 105, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "^", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.!", 135, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "!", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.?", 165, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "?", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.∀", 195, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "∀", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.™", 225, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "™", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.©", 255, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "©", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.Þ", 285, 385, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "Þ", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.letters", 0, 415, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "A", "rgb(0, 0, 0)");
    BetterElementMakerAPI.Button("osk.space", 60, 415, 180, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "space", "rgb(0, 0, 0)");
        onEvent("osk.@", "click", function( ) {
      setText(inputid, getText(inputid) + "@");
    });
    onEvent("osk.#", "click", function( ) {
      setText(inputid, getText(inputid) + "#");
    });
    onEvent("osk.$", "click", function( ) {
      setText(inputid, getText(inputid) + "$");
    });
    onEvent("osk.%", "click", function( ) {
      setText(inputid, getText(inputid) + "%");
    });
    onEvent("osk.^", "click", function( ) {
      setText(inputid, getText(inputid) + "^");
    });
    onEvent("osk.&", "click", function( ) {
      setText(inputid, getText(inputid) + "&");
    });
    onEvent("osk.*", "click", function( ) {
      setText(inputid, getText(inputid) + "*");
    });
    onEvent("osk.(", "click", function( ) {
      setText(inputid, getText(inputid) + "(");
    });
    onEvent("osk.)", "click", function( ) {
      setText(inputid, getText(inputid) + ")");
    });
    onEvent("osk.(", "click", function( ) {
      setText(inputid, getText(inputid) + "(");
    });
    onEvent("osk.)", "click", function( ) {
      setText(inputid, getText(inputid) + ")");
    });
    onEvent("osk.letters", "click", function( ) {
      oskopen(0, inputid, letters);
    });
  } else {
    
  }
  if (!FirstRunOSK) {
    onEvent("osk.1", "click", function( ) {
      setText(inputid, getText(inputid) + "1");
    });
    onEvent("osk.2", "click", function( ) {
      setText(inputid, getText(inputid) + "2");
    });
    onEvent("osk.3", "click", function( ) {
      setText(inputid, getText(inputid) + "3");
    });
    onEvent("osk.4", "click", function( ) {
      setText(inputid, getText(inputid) + "4");
    });
    onEvent("osk.5", "click", function( ) {
      setText(inputid, getText(inputid) + "5");
    });
    onEvent("osk.6", "click", function( ) {
      setText(inputid, getText(inputid) + "6");
    });
    onEvent("osk.7", "click", function( ) {
      setText(inputid, getText(inputid) + "7");
    });
    onEvent("osk.8", "click", function( ) {
      setText(inputid, getText(inputid) + "8");
    });
    onEvent("osk.9", "click", function( ) {
      setText(inputid, getText(inputid) + "9");
    });
    onEvent("osk.0", "click", function( ) {
      setText(inputid, getText(inputid) + "0");
    });
    onEvent("osk.!", "click", function( ) {
      setText(inputid, getText(inputid) + "!");
    });
    FirstRunOSK = 1;
  }
  currentOSK = menu;
}
function biosBoot() {
  install("settings", 0, 0);
  install("store", 1, 0);
  setTimeout(function() {
    setScreen("TidalOS.setup.0");
  }, 1000);
}
function openApp(ID) {
  setScreen("TidalOS." + Icons[ID]);
}
function consoleDebugger() {
  console.clear();
  console.log("Codename: " + sysCodename);
  console.log("Human Version: " + sysVersion);
  console.log("Actual Version: " + sysBuild);
}
onEvent("TidalOS.setup.0.bar.next", "click", function( ) {
  setScreen("TidalOS.setup.1");
});
onEvent("TidalOS.setup.1.bar.back", "click", function( ) {
  setScreen("TidalOS.setup.0");
});
onEvent("TidalOS.setup.1.bar.next", "click", function( ) {
  setScreen("TidalOS.setup.2");
});
//Scales
function setScale(Scale) {
  setProperty("TidalOS.setup.0.window", "font-size", sysScales[Scale]);
  setProperty("TidalOS.setup.1.window", "font-size", sysScales[Scale]);
  setProperty("TidalOS.setup.2.window", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.window", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.abt", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.wall", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.aboutdiag.window", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.wallpapers.window", "font-size", sysScales[Scale]);
  setProperty("TidalOS.store.window", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.internet", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.wifi.window", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.wifi.join1", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.wifi.join2", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.wifi.join3", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.wifi.join4", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.wifi.join5", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.wifi.join6", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.scales", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.uefi", "font-size", sysScales[Scale]);
  setProperty("TidalOS.settings.scaling.window", "font-size", sysScales[Scale]);
}
function lock(retScreen, mode) {
  if (!mode) {
    if (usespasscode) {
      setScreen("TidalOS.passwordlock");
      onEvent("TidalOS.passwordlock.ok", "click", function( ) {
        if (getText("TidalOS.settings.passcodes.passcode") == getText("TidalOS.passwordlock.passcode")) {
          setScreen(retScreen);
        } else {
          showElement("TidalOS.passwordlock.in");
          setTimeout(function() {
            hideElement("TidalOS.passwordlock.in");
          }, 2000);
        }
      });
    } else {
      SFS.Alert("Authentication Host - Error \n Unable to load passcode screen.");
    }
  } else {
    if (usespasscode) {
      setScreen("TidalOS.passwordlock");
      onEvent("TidalOS.passwordlock.ok", "click", function( ) {
        if (getText("TidalOS.settings.passcodes.passcode") == getText("TidalOS.passwordlock.passcode")) {
          setScreen(retScreen);
        } else {
          showElement("TidalOS.passwordlock.in");
          setTimeout(function() {
            hideElement("TidalOS.passwordlock.in");
          }, 2000);
        }
      });
    } else {
      SFS.Alert("Authentication Host - Error \n Unable to load Slide To Unlock");
    }
  }
}
onEvent("TidalOS.setup.2.smaller", "click", function( ) {
  setScale(1);
});
onEvent("TidalOS.setup.2.small", "click", function( ) {
  setScale(2);
});
onEvent("TidalOS.setup.2.large", "click", function( ) {
  setScale(3);
});
onEvent("TidalOS.setup.2.bar.back", "click", function( ) {
  setScreen("TidalOS.setup.1");
});
//Debugging
onEvent("TidalOS.debugging.tohome", "click", function( ) {
  setScreen("TidalOS.homescreen");
});
onEvent("TidalOS.debugging.tosetup", "click", function( ) {
  setScreen("TidalOS.setup.0");
});
//Setup stage to home
onEvent("TidalOS.setup.2.bar.next", "click", function( ) {
  setScreen("TidalOS.homescreen");
});
//Home
onEvent("TidalOS.homescreen.icon.1", "click", function( ) {
  openApp(0);
});
onEvent("TidalOS.homescreen.icon.2", "click", function( ) {
  openApp(1);
});
onEvent("TidalOS.homescreen.icon.3", "click", function( ) {
  openApp(2);
});
//Settings
onEvent("TidalOS.settings.bar.exit", "click", function( ) {
  setScreen("TidalOS.homescreen");
});
//Settings (About)
onEvent("TidalOS.settings.abt", "click", function( ) {
  setScreen("TidalOS.settings.aboutdiag");
});
onEvent("TidalOS.settings.aboutdiag.bar.back", "click", function( ) {
  setScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.wallpapers.bar.exit", "click", function( ) {
  setScreen("TidalOS.homescreen");
});
onEvent("TidalOS.settings.wallpapers.bar.back", "click", function( ) {
  setScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.wallpapers.bar.exit", "click", function( ) {
  setScreen("TidalOS.homescreen");
});
//Settings (Wallpapers)
onEvent("TidalOS.settings.wall", "click", function( ) {
  setScreen("TidalOS.settings.wallpapers");
});
function wallpaper(index) {
  setProperty("TidalOS.settings", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.debugging", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.settings.aboutdiag", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.settings.wallpapers", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.setup.0", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.setup.1", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.setup.2", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.homescreen", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.store", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.settings.passcodes", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.settings.wifi", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.music", "image", ("tidaloswall" + index) + ".png");
  setProperty("TidalOS.settings.scaling", "image", ("tidaloswall" + index) + ".png");
  setProperty("SFS.BIOS", "image", ("tidaloswall" + index) + ".png");
}
onEvent("TidalOS.settings.wallpapers.wall1", "click", function( ) {
  wallpaper(1);
});
onEvent("TidalOS.settings.wallpapers.wall2", "click", function( ) {
  wallpaper(2);
});
onEvent("TidalOS.settings.wallpapers.wall3", "click", function( ) {
  wallpaper(3);
});
onEvent("TidalOS.settings.wallpapers.wall4", "click", function( ) {
  wallpaper(4);
});
//TidalOS.settings.wifi
onEvent("TidalOS.settings.internet", "click", function( ) {
  setScreen("TidalOS.settings.wifi");
});
onEvent("TidalOS.settings.wifi.bar.back", "click", function( ) {
  setScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.wifi.bar.exit", "click", function( ) {
  setScreen("TidalOS.homescreen");
});
onEvent("TidalOS.settings.wifi.join1", "click", function( ) {
  SFS.PromptNum("Password (numbers only)", function(result) {
  SFS.ConnectToNetwork((SFS.ListNetworks())[0], result);
  });
});
onEvent("TidalOS.settings.wifi.join2", "click", function( ) {
  SFS.PromptNum("Password (numbers only)", function(result) {
  SFS.ConnectToNetwork((SFS.ListNetworks())[1], result);
  });
});
onEvent("TidalOS.settings.wifi.join3", "click", function( ) {
  SFS.PromptNum("Password", function(result) {
    SFS.ConnectToNetwork((SFS.ListNetworks())[2], result);
  });
});
onEvent("TidalOS.settings.wifi.join4", "click", function( ) {
  SFS.PromptNum("Password", function(result) {
    SFS.ConnectToNetwork((SFS.ListNetworks())[3], result);
  });
});
onEvent("TidalOS.settings.wifi.join5", "click", function( ) {
  SFS.PromptNum("Password", function(result) {
    SFS.ConnectToNetwork((SFS.ListNetworks()), result);
  });
});
onEvent("TidalOS.settings.wifi.join6", "click", function( ) {
  SFS.PromptNum("Password", function(result) {
    SFS.ConnectToNetwork((SFS.ListNetworks())[5], result);
  });
});
//TidalOS.settings.scaling
onEvent("TidalOS.settings.scales", "click", function( ) {
  setScreen("TidalOS.settings.scaling");
});
onEvent("TidalOS.settings.scaling.bar.exit", "click", function( ) {
  setScreen("TidalOS.homescreen");
});
onEvent("TidalOS.settings.scaling.bar.back", "click", function( ) {
  setScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.scaling.small", "click", function( ) {
  setScale(1);
});
onEvent("TidalOS.settings.scaling.medium", "click", function( ) {
  setScale(2);
});
onEvent("TidalOS.settings.scaling.large", "click", function( ) {
  setScale(3);
});
//TidalOS.settings.passcodes
onEvent("TidalOS.settings.authentication", "click", function( ) {
  setScreen("TidalOS.settings.passcodes");
});
onEvent("TidalOS.settings.passcodes.bar.back", "click", function( ) {
  setScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.passcodes.bar.exit", "click", function( ) {
  setScreen("TidalOS.homescreen");
});
onEvent("TidalOS.settings.passcodes.window", "click", function( ) {
  oskopen(69, "TidalOS.settings.passcodes.passcode", qwerty_us);
});
onEvent("TidalOS.settings.passcodes.passcode", "click", function( ) {
  oskopen(0, "TidalOS.settings.passcodes.passcode", qwerty_us);
});
onEvent("TidalOS.settings.passcodes.check_base1", "click", function( ) {
  if (!bioslock) {
    bioslock = 1;
    setProperty("TidalOS.settings.passcodes.check_base1", "background-color", "rgba(26, 215, 52, 0.68)");
    setPosition("TidalOS.settings.passcodes.check_movable", 222.5, 188);
  } else {
    bioslock = 0;
    setProperty("TidalOS.settings.passcodes.check_base1", "background-color", "rgba(26, 37, 52, 0.68)");
    setPosition("TidalOS.settings.passcodes.check_movable", 206, 188);
  }
});
onEvent("TidalOS.settings.passcodes.check_movable", "click", function( ) {
  if (!bioslock) {
    bioslock = 1;
    setProperty("TidalOS.settings.passcodes.check_base1", "background-color", "rgba(26, 215, 52, 0.68)");
    setPosition("TidalOS.settings.passcodes.check_movable", 222.5, 188);
  } else {
    bioslock = 0;
    setProperty("TidalOS.settings.passcodes.check_base1", "background-color", "rgba(26, 37, 52, 0.68)");
    setPosition("TidalOS.settings.passcodes.check_movable", 206, 188);
  }
});
//SFS.BIOS
onEvent("TidalOS.settings.uefi", "click", function( ) {
  if (bioslock) {
    lock("SFS.BIOS");
    SFS.BIOS("TidalOS.homescreen");
  } else {
    SFS.BIOS("TidalOS.homescreen");
    SFS.Config(sysVersion, sysBuild, sysBatt, sysDevMode, "TidalOS");
  }
});
//TidalOS.store
function install(name, idx, ifs) {
  if (ifs) {
    hideElement(("TidalOS.store." + name) + ".add");
    showElement(("TidalOS.store." + name) + ".delete");
  }
  icns = icns + 1;
  appendItem(Icons, name);
  showElement("TidalOS.homescreen.icon." + icns);
  setProperty("TidalOS.homescreen.icon." + icns, "image", icons[idx]);
}
function remove(name, idx) {
  showElement(("TidalOS.store." + name) + ".add");
  hideElement(("TidalOS.store." + name) + ".delete");
  removeItem(Icons, idx);
  hideElement("TidalOS.homescreen.icon." + icns);
  setProperty("TidalOS.homescreen.icon." + icns, "image", "");
  icns = icns + -1;
}
onEvent("TidalOS.store.bar.exit", "click", function( ) {
  setScreen("TidalOS.homescreen");
});
onEvent("TidalOS.store.music.add", "click", function( ) {
  install("music", 2, 1);
});
onEvent("TidalOS.store.music.delete", "click", function( ) {
  remove("music", 2);
});
//TidalOS.music
onEvent("TidalOS.music.bar.exit", "click", function( ) {
  setScreen("TidalOS.homescreen");
});
onEvent("TidalOS.music.1", "click", function( ) {
  stopSound();
  playSound(getText("TidalOS.music.ID") + ".mp3", false);
});
onEvent("TidalOS.music.s", "click", function( ) {
  stopSound();
});
