var sysVersion = "0.9.3";
var sysBuild = 729;
var sysCodename = "Conway";
var sysDevMode = 0;
var FirstRunOSK = 1;
var sysBatt = 100;
var wallp = 1;
var usespasscode = 0;
var settingsStu_dw = 0;
var currency = null;
var bioslock = 0;
var betafeatures = 0;
var scr = "TidalOS.boot";
var lbankPrivateID = SFS.sha256(SFS.generateRandomString(1) + randomNumber(1000000000, 9999999999));
var money = 14.38;
var settingsStu_ = 0;
var user = "root";
var device;
var Icons = [];
var currentOSK = 999;
var log = [];
var existingPolicies = [];
var purchasehistory = [];
var clsidMain = ["Main System", "Main Clock", "SFS UEFI", "Root User", "Main User", "AppCore", "CLSIDPolicy", "AppData", "System Settings", "System Domains", "On-screen keyboard", "UserCore", "SysMain.Extensions", "Fontcore", "System Terminal", "System Resources", "GUIcore", "Secure TidalOS Sandboxed Environment", "WiFi", "PXe", "SysRecovery"];
var coskscr = [];
var clsids = [(SFS.sha256(clsidMain[0])), (SFS.sha256(clsidMain[1])), (SFS.sha256(clsidMain[2])), (SFS.sha256(clsidMain[3])), (SFS.sha256(clsidMain[4])), (SFS.sha256(clsidMain[5])), (SFS.sha256(clsidMain[6])), (SFS.sha256(clsidMain[7])), (SFS.sha256(clsidMain[8])), (SFS.sha256(clsidMain[9])), (SFS.sha256(clsidMain[10])), (SFS.sha256(clsidMain[11])), (SFS.sha256(clsidMain[12])), (SFS.sha256(clsidMain[13])), (SFS.sha256(clsidMain[14])), (SFS.sha256(clsidMain[15])), (SFS.sha256(clsidMain[16])), (SFS.sha256(clsidMain[17])), (SFS.sha256(clsidMain[18])), (SFS.sha256(clsidMain[19])), (SFS.sha256(clsidMain[20]))];
var icons = ["icon://fa-cogs", "icon://fa-download", "icon://fa-music", "icon://fa-money"];
var songnames = ["Thatched Villagers", "2011", "Mind Control", "At The Speed Of Light", "The Falling Mysts", "Misery", "Hide and Seek"];
var songcomposers = ["Kevin MacLeod", "ColBreakz", "ColBreakz", "Dimrain47", "Dimrain47", "MattKC", "Schtiffles"];
var qwerty_us = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var Username = null;
SFS.Config(sysVersion, sysBuild, sysBatt, sysDevMode, "TidalOS");
SFS.Theme("#ffffff", "rgba(26, 37, 52, 0.68)", "rgba(26, 37, 52, 0.68)", "rgba(26, 37, 52, 0.68)", "rgba(26, 37, 52, 0.68)");
biosBoot(1);
consoleDebugger();
function LoadScreen(sce) {
  setScreen(sce);
  scr = sce;
}
setText("TidalOS.settings.aboutdiag.window", ("TidalOS Settings \n \n About \n \n Version " + sysVersion + "\n Build " + sysBuild + "\n Codename ") + sysCodename);
function ksAddConsoleLg(i) {
  appendItem(log, i);
}
function ksStopSystem() {
  LoadScreen("TidalOS.stopcode");
  currentOSK = null;
  currency = null;
}
function login(username) {
  readRecords(username, {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if((records[i]).Password == getText("TidalOS.settings.accounts.login.passwd") ){
       if ((records[i]).dev == 1) {
         sysDevMode = 1;
         Username = records.Username;
         LoadScreen("TidalOS.homescreen");
       } else {
         if((records[i]).Password == getText("TidalOS.settings.accounts.login.passwd") ){
          sysDevMode = 0;
          Username = records.Username;
          LoadScreen("TidalOS.homescreen");
          wallpaper(records[i].Wallpaper);
         }else{
           console.log("Incorrect Login-Name or Password");
         }
       }
      }else{
        console.log("Incorrect Login-Name or Password");
      }
      }
  });
}
function setAppslistApps() {
  if (Icons.length >= 1) {
    setText("TidalOS.appslist.app1", Icons[0]);
  } else {
    setText("TidalOS.appslist.app1", "");
  }
  if (Icons.length >= 2) {
    setText("TidalOS.appslist.app2", Icons[1]);
  } else {
    setText("TidalOS.appslist.app2", "");
  }
  if (Icons.length >= 3) {
    setText("TidalOS.appslist.app3", Icons[2]);
  } else {
    setText("TidalOS.appslist.app3", "");
  }
  if (Icons.length >= 4) {
    setText("TidalOS.appslist.app4", Icons[3]);
  } else {
    setText("TidalOS.appslist.app4", "");
  }
  if (Icons.length >= 1) {
    setImageURL("TidalOS.appslist.icon1", icons[0]);
  } else {
    setImageURL("TidalOS.appslist.icon1", "");
  }
  if (Icons.length >= 2) {
    setImageURL("TidalOS.appslist.icon2", icons[1]);
  } else {
    setImageURL("TidalOS.appslist.icon2", "");
  }
  if (Icons.length >= 3) {
    setImageURL("TidalOS.appslist.icon3", icons[2]);
  } else {
    setImageURL("TidalOS.appslist.icon3", "");
  }
  if (Icons.length >= 4) {
    setImageURL("TidalOS.appslist.icon4", icons[3]);
  } else {
    setImageURL("TidalOS.appslist.icon4", "");
  }
}
timedLoop(1, function() {
setAppslistApps();
setText("TidalOS.financing.money", money + " " + currency);
setText("TidalOS.music.sba", (songnames[(getText("TidalOS.music.ID"))] + " \n by \n ") + songcomposers[(getText("TidalOS.music.ID"))]);
setText("TidalOS.settings.wifi.window", "TidalOS Settings \n \n Internet \n \n Networks: \n  \n Network: " + SFS.ListNetworks().join("\n" + "\n Network: "));
setText("TidalOS.financing.purchaseh.history", "History \n" + purchasehistory);
setText("TidalOS.lockscreen.time", SFS.gettime("HH") + ":" + SFS.gettime("mm"));
if (getText("TidalOS.settings.passcodes.passcode") != "") {
  usespasscode = 1;
} else {
  usespasscode = 0;
}
});
function signup() {
  createRecord(getText("TidalOS.settings.accounts.login.username"), {usr: (getText("TidalOS.settings.accounts.login.username")), dev: 0, USERID: (getUserId()), currency:0, Wallpaper:wallp, Username:(getText("TidalOS.settings.accounts.login.username")), OTC:(randomNumber(10000, 99999)),money:"0", Password:(getText("TidalOS.settings.accounts.login.passwd")), });
  login(getText("TidalOS.settings.accounts.login.username"), getText("TidalOS.settings.accounts.login.passwd"));
}
function oskopen(menu, inputid, letters) {
  if ((coskscr.join("#").includes(scr) == 1)) {
    removeItem(coskscr, coskscr.indexOf("scr"));
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
    deleteElement("osk.backspace");
    deleteElement("osk.exit");
    deleteElement("osk.!");
    deleteElement("osk..");
    deleteElement("osk.,");
    deleteElement("osk.space");
  }
  if (menu == 0) {
    appendItem(coskscr, scr);
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
    BetterElementMakerAPI.Button("osk.space", 0, 415, 360, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "space", "rgb(0, 0, 0)");
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
    BetterElementMakerAPI.Button("osk.exit", 280, 355, 30, 30, 0, "rgba(26, 37, 52, 0.68)", "rgb(255,255,255)", "\/", "rgb(0, 0, 0)");
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
    onEvent("osk.1", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.1"));
    });
    onEvent("osk.2", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.2"));
    });
    onEvent("osk.3", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.3"));
    });
    onEvent("osk.4", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.4"));
    });
    onEvent("osk.5", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.5"));
    });
    onEvent("osk.6", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.6"));
    });
    onEvent("osk.7", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.7"));
    });
    onEvent("osk.8", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.8"));
    });
    onEvent("osk.9", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.9"));
    });
    onEvent("osk.0", "click", function( ) {
      setText(inputid, getText(inputid) + getText("osk.0"));
    });
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
    onEvent("osk.exit", "click", function( ) {
      oskopen(88);
    });
    onEvent("osk.backspace", "click", function( ) {
      setText(inputid, getText(inputid).substring(0, getText(inputid).length - 1));
    });
  }
  currentOSK = menu;
  FirstRunOSK = 0;
}
function biosBoot(rts) {
  ksAddConsoleLg("================================");
  ksAddConsoleLg("Version " + sysVersion);
  ksAddConsoleLg("Build " + sysBuild);
  ksAddConsoleLg("First Boot: " + rts);
  ksAddConsoleLg("SFS Version: " + SFS.SFSVersion());
  ksAddConsoleLg("================================");
  install("settings", 0, 0);
  setTimeout(function() {
    LoadScreen("TidalOS.homescreen");
    if (rts) {
      LoadScreen("TidalOS.setup.0");
      install("store", 1, 0);
    } else {
      install("store", 1, 0);
    }
  }, 431);
}
function openApp(ID) {
  LoadScreen("TidalOS." + Icons[ID]);
}
function consoleDebugger() {
  console.clear();
  console.log("Codename: " + sysCodename);
  console.log("Human Version: " + sysVersion);
  console.log("Actual Version: " + sysBuild);
}
onEvent("TidalOS.setup.0.bar.next", "click", function( ) {
  LoadScreen("TidalOS.setup.1");
  currency = getProperty("TidalOS.setup.0.$", "value");
});
onEvent("TidalOS.setup.1.bar.back", "click", function( ) {
  LoadScreen("TidalOS.setup.0");
});
onEvent("TidalOS.setup.1.mobile", "click", function( ) {
  device = 1;
  showElement("TidalOS.setup.1.bar.next");
});
onEvent("TidalOS.setup.1.touchless", "click", function( ) {
  device = 0;
  showElement("TidalOS.setup.1.bar.next");
});
onEvent("TidalOS.setup.1.bar.next", "click", function( ) {
  LoadScreen("TidalOS.setup.2");
});
//Scales
function setScale(Scale) {
  setProperty("TidalOS.setup.0.window", "font-size", Scale);
  setProperty("TidalOS.setup.1.window", "font-size", Scale);
  setProperty("TidalOS.setup.2.window", "font-size", Scale);
  setProperty("TidalOS.settings.window", "font-size", Scale);
  setProperty("TidalOS.settings.abt", "font-size", Scale);
  setProperty("TidalOS.settings.wall", "font-size", Scale);
  setProperty("TidalOS.settings.aboutdiag.window", "font-size", Scale);
  setProperty("TidalOS.settings.wallpapers.window", "font-size", Scale);
  setProperty("TidalOS.store.window", "font-size", Scale);
  setProperty("TidalOS.settings.internet", "font-size", Scale);
  setProperty("TidalOS.settings.wifi.window", "font-size", Scale);
  setProperty("TidalOS.settings.wifi.join1", "font-size", Scale);
  setProperty("TidalOS.settings.wifi.join2", "font-size", Scale);
  setProperty("TidalOS.settings.wifi.join3", "font-size", Scale);
  setProperty("TidalOS.settings.wifi.join4", "font-size", Scale);
  setProperty("TidalOS.settings.wifi.join5", "font-size", Scale);
  setProperty("TidalOS.settings.wifi.join6", "font-size", Scale);
  setProperty("TidalOS.settings.scales", "font-size", Scale);
  setProperty("TidalOS.settings.uefi", "font-size", Scale);
  setProperty("TidalOS.settings.scaling.window", "font-size", Scale);
  setProperty("TidalOS.music.s", "font-size", Scale);
  setProperty("TidalOS.music.sba", "font-size", Scale);
  setProperty("TidalOS.music.ID", "font-size", Scale);
  setProperty("TidalOS.music.1", "font-size", Scale);
  setProperty("TidalOS.settings.authentication", "font-size", Scale);
  setProperty("TidalOS.settings.acc", "font-size", Scale);
  setProperty("TidalOS.appslist.app1", "font-size", Scale);
  setProperty("TidalOS.appslist.app2", "font-size", Scale);
  setProperty("TidalOS.appslist.app3", "font-size", Scale);
}
onEvent("TidalOS.passwordlock.passcode", "click", function( ) {
  oskopen(0, "TidalOS.passwordlock.passcode", qwerty_us);
});
function lock(retScreen, mode) {
  if (!mode) {
    if (usespasscode) {
      LoadScreen("TidalOS.passwordlock");
      setText("TidalOS.passwordlock.window", "TidalOS \n \n What is your passcode");
      showElement("TidalOS.passwordlock.ok");
      showElement("TidalOS.passwordlock.passcode");
      hideElement("TidalOS.passwordlock.stu1");
      hideElement("TidalOS.passwordlock.stu2");
      hideElement("TidalOS.passwordlock.stu3");
      onEvent("TidalOS.passwordlock.ok", "click", function( ) {
        if (getText("TidalOS.settings.passcodes.passcode") == getText("TidalOS.passwordlock.passcode")) {
          LoadScreen(retScreen);
          setText("TidalOS.passwordlock.passcode", "");
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
    if (settingsStu_) {
      LoadScreen("TidalOS.passwordlock");
      setText("TidalOS.passwordlock.window", "TidalOS \n \n Please slide on the numbers on screen");
      showElement("TidalOS.passwordlock.stu1");
      showElement("TidalOS.passwordlock.stu2");
      showElement("TidalOS.passwordlock.stu3");
      hideElement("TidalOS.passwordlock.ok");
      hideElement("TidalOS.passwordlock.passcode");
      onEvent("TidalOS.passwordlock.stu1", "mouseover", function( ) {
        if (settingsStu_dw == 0) {
          settingsStu_dw = 1;
        }
      });
      onEvent("TidalOS.passwordlock.stu2", "mouseover", function( ) {
        if (settingsStu_dw == 1) {
          settingsStu_dw = 2;
        }
      });
      onEvent("TidalOS.passwordlock.stu3", "mouseover", function( ) {
        if (settingsStu_dw == 2) {
          LoadScreen("TidalOS.homescreen");
          settingsStu_dw = 0;
        }
      });
    } else {
      SFS.Alert("Authentication Host - Error \n Unable to load Slide To Unlock");
    }
  }
  //stub
}
onEvent("TidalOS.setup.2.tiny", "click", function( ) {
  setScale(9);
});
onEvent("TidalOS.setup.2.smaller", "click", function( ) {
  setScale(12);
});
onEvent("TidalOS.setup.2.small", "click", function( ) {
  setScale(18);
});
onEvent("TidalOS.setup.2.bar.back", "click", function( ) {
  LoadScreen("TidalOS.setup.1");
});
//Debugging
onEvent("TidalOS.debugging.tohome", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.debugging.tosetup", "click", function( ) {
  LoadScreen("TidalOS.setup.0");
});
//Setup stage to home
onEvent("TidalOS.setup.2.bar.next", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
//Home
onEvent("TidalOS.lockscreen.bar.next", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.homescreen.bar.next", "click", function( ) {
  LoadScreen("TidalOS.appslist");
});
onEvent("TidalOS.appslist.bar.back", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.homescreen.icon.1", "click", function( ) {
  openApp(0);
});
onEvent("TidalOS.homescreen.icon.2", "click", function( ) {
  openApp(1);
});
onEvent("TidalOS.homescreen.icon.3", "click", function( ) {
  openApp(2);
});
onEvent("TidalOS.homescreen.bar.back", "click", function( ) {
  if (usespasscode || settingsStu_) {
    lock("TidalOS.homescreen", settingsStu_);
  } else {
    LoadScreen("TidalOS.lockscreen");
  }
});
//Settings
onEvent("TidalOS.settings.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
//Settings (About)
onEvent("TidalOS.settings.abt", "click", function( ) {
  LoadScreen("TidalOS.settings.aboutdiag");
});
onEvent("TidalOS.settings.aboutdiag.bar.back", "click", function( ) {
  LoadScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.wallpapers.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.settings.wallpapers.bar.back", "click", function( ) {
  LoadScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.wallpapers.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
//Settings (Wallpapers)
onEvent("TidalOS.settings.wall", "click", function( ) {
  LoadScreen("TidalOS.settings.wallpapers");
});
function wallpaper(index) {
  wallp = "tidaloswall" + index + ".png";
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
  if (Username != null) {
    updateRecord(getText("TidalOS.settings.accounts.login.username"), {usr: (getText("TidalOS.settings.accounts.login.username")), dev: 0, USERID: (getUserId()), currency:0, Wallpaper:index, Username:(getText("TidalOS.settings.accounts.login.username")), OTC:(randomNumber(10000, 99999)),money:"0", Password:(getText("TidalOS.settings.accounts.login.passwd")), });
  }
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
  LoadScreen("TidalOS.settings.wifi");
});
onEvent("TidalOS.settings.wifi.bar.back", "click", function( ) {
  LoadScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.wifi.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.settings.wifi.join1", "click", function( ) {
  SFS.Prompt("What is the WiFi password", false, function(result) {
  SFS.ConnectToNetwork(SFS.ListNetworks()[0], result);
  });
});
onEvent("TidalOS.settings.wifi.join2", "click", function( ) {
  SFS.Prompt("What is the WiFi password", false, function(result) {
  SFS.ConnectToNetwork(SFS.ListNetworks()[1], result);
  });
});
onEvent("TidalOS.settings.wifi.join3", "click", function( ) {
  SFS.Prompt("What is the WiFi password", false, function(result) {
  SFS.ConnectToNetwork(SFS.ListNetworks()[2], result);
  });
});
onEvent("TidalOS.settings.wifi.join4", "click", function( ) {
  SFS.Prompt("What is the WiFi password", false, function(result) {
  SFS.ConnectToNetwork(SFS.ListNetworks()[3], result);
  });
});
onEvent("TidalOS.settings.wifi.join5", "click", function( ) {
  SFS.Prompt("What is the WiFi password", false, function(result) {
  SFS.ConnectToNetwork(SFS.ListNetworks()[4], result);
  });
});
onEvent("TidalOS.settings.wifi.join6", "click", function( ) {
  SFS.Prompt("What is the WiFi password", false, function(result) {
  SFS.ConnectToNetwork(SFS.ListNetworks()[5], result);
  });
});
//TidalOS.settings.scaling
onEvent("TidalOS.settings.scales", "click", function( ) {
  LoadScreen("TidalOS.settings.scaling");
});
onEvent("TidalOS.settings.scaling.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.settings.scaling.bar.back", "click", function( ) {
  LoadScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.scaling.75", "click", function( ) {
  setScale(9);
});
onEvent("TidalOS.settings.scaling.small", "click", function( ) {
  setScale(12);
});
onEvent("TidalOS.settings.scaling.medium", "click", function( ) {
  setScale(18);
});
onEvent("TidalOS.settings.scaling..custom%", "click", function( ) {
  setScale(getText("TidalOS.settings.scaling.customval") / (100 / 18));
});
//TidalOS.settings.passcodes
onEvent("TidalOS.settings.authentication", "click", function( ) {
  LoadScreen("TidalOS.settings.passcodes");
});
onEvent("TidalOS.settings.passcodes.bar.back", "click", function( ) {
  LoadScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.passcodes.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
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
onEvent("TidalOS.settings.passcodes.movable2", "click", function( ) {
  if (!settingsStu_) {
    settingsStu_ = 1;
    setProperty("TidalOS.settings.passcodes.base2", "background-color", "rgba(26, 215, 52, 0.68)");
    setPosition("TidalOS.settings.passcodes.movable2", 222.5, 228);
  } else {
    settingsStu_ = 0;
    setProperty("TidalOS.settings.passcodes.base2", "background-color", "rgba(26, 37, 52, 0.68)");
    setPosition("TidalOS.settings.passcodes.movable2", 206, 228);
  }
});
onEvent("TidalOS.settings.passcodes.base2", "click", function( ) {
  if (!settingsStu_) {
    settingsStu_ = 1;
    setProperty("TidalOS.settings.passcodes.base2", "background-color", "rgba(26, 215, 52, 0.68)");
    setPosition("TidalOS.settings.passcodes.movable2", 222.5, 228);
  } else {
    settingsStu_ = 0;
    setProperty("TidalOS.settings.passcodes.base2", "background-color", "rgba(26, 37, 52, 0.68)");
    setPosition("TidalOS.settings.passcodes.movable2", 206, 228);
  }
});
//TidalOS.settings.accounts
onEvent("TidalOS.settings.acc", "click", function( ) {
  LoadScreen("TidalOS.settings.accounts.login");
});
onEvent("TidalOS.settings.accounts.login.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.settings.accounts.login.bar.back", "click", function( ) {
  LoadScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.accounts.offline.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.settings.accounts.offline.bar.back", "click", function( ) {
  LoadScreen("TidalOS.settings");
});
onEvent("TidalOS.settings.accounts.offline.online", "click", function( ) {
  LoadScreen("TidalOS.settings.accounts.login");
});
onEvent("TidalOS.settings.accounts.login.offline", "click", function( ) {
  LoadScreen("TidalOS.settings.accounts.offline");
});
onEvent("TidalOS.settings.accounts.login.signin", "click", function( ) {
  login(getText("TidalOS.settings.accounts.login.username"), getText("TidalOS.settings.accounts.login.passwd"));
});
onEvent("TidalOS.settings.accounts.login.signup", "click", function( ) {
  signup(getText("TidalOS.settings.accounts.login.username"), getText("TidalOS.settings.accounts.login.passwd"));
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
  appendItem(Icons, name);
  showElement("TidalOS.homescreen.icon." + Icons.length);
  setProperty("TidalOS.homescreen.icon." + Icons.length, "image", icons[idx]);
}
function remove(name, idx) {
  showElement(("TidalOS.store." + name) + ".add");
  hideElement(("TidalOS.store." + name) + ".delete");
  hideElement("TidalOS.homescreen.icon." + Icons.length);
  setProperty("TidalOS.homescreen.icon." + Icons.length, "image", "");
  removeItem(Icons, idx);
}
onEvent("TidalOS.store.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.store.music.add", "click", function( ) {
  install("music", 2, 1);
});
onEvent("TidalOS.store.music.delete", "click", function( ) {
  remove("music", 2);
});
onEvent("TidalOS.store.financing.add", "click", function( ) {
  install("financing", 3, 1);
});
onEvent("TidalOS.store.financing.delete", "click", function( ) {
  remove("financing", 3);
});
//TidalOS.music
onEvent("TidalOS.music.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.music.1", "click", function( ) {
  stopSound();
  playSound(getText("TidalOS.music.ID") + ".mp3", false);
});
onEvent("TidalOS.music.s", "click", function( ) {
  stopSound();
});
//TidalOS.financing
function tryPurchase(id, cost, dn, date) {
  SFS.Prompt(("Are you sure you want to buy " + dn) + ". Please type YES in all caps to confirm", false, function(result) {
  if (cost > money && result != "YES") {
    return 0;
  } else {
    appendItem(purchasehistory, dn + " bought for " + cost + " at " + date);
    money = money - cost;
    return 1;
  }
  });
}
onEvent("TidalOS.financing.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.financing.purchaseh.bar.exit", "click", function( ) {
  LoadScreen("TidalOS.homescreen");
});
onEvent("TidalOS.financing.ph", "click", function( ) {
  LoadScreen("TidalOS.financing.purchaseh");
});
onEvent("TidalOS.financing.purchaseh.tb", "click", function( ) {
  LoadScreen("TidalOS.financing");
});
//TidalOS.term
onEvent("TidalOS.term.play", "click", function( ) {
  setText("TidalOS.term.term", ((((((("" + "\n TidalOS Version ") + sysVersion + "\n>" + getText("TidalOS.term.1")) + " ") + getText("TidalOS.term.2")) + " ") + getText("TidalOS.term.3")) + " " + getText("TidalOS.term.4")) + " " + getText("TidalOS.term.5"));
  if (getText("TidalOS.term.1") == "exit") {
    biosBoot(0);
  } else {
    if (getText("TidalOS.term.1") == "reboot") {
      biosBoot(0);
    } else {
      if (getText("TidalOS.term.1") == "version") {
        setText("TidalOS.term.term", getText("TidalOS.term.term") + "\n Version " + sysVersion);
      } else {
        if (getText("TidalOS.term.1") == "loadapp") {
          if (SFS.isBlank(getText("TidalOS.term.3"))) {
            LoadScreen("TidalOS." + getText("TidalOS.term.2"));
          } else {
            LoadScreen((("TidalOS." + getText("TidalOS.term.2")) + ".") + getText("TidalOS.term.3"));
          }
        } else {
          if (getText("TidalOS.term.1") == "softinfo") {
            setText("TidalOS.term.term", getText("TidalOS.term.term") + "\n Version " + sysVersion);
            setText("TidalOS.term.term", (getText("TidalOS.term.term") + "\n Build ") + sysBuild);
            setText("TidalOS.term.term", (getText("TidalOS.term.term") + "\n Codename ") + sysCodename);
            setText("TidalOS.term.term", (getText("TidalOS.term.term") + "\n Tartarus ") + "");
          } else {
            if (getText("TidalOS.term.1") == "registerapp") {
              setText("TidalOS.term.term", (getText("TidalOS.term.term") + "\n Registered app ") + getText("TidalOS.term.2"));
              install(getText("TidalOS.term.2"), getNumber("TidalOS.term.3"), getNumber("TidalOS.term.4"));
            } else {
              if (getText("TidalOS.term.1") == "access") {
                eval(getText("TidalOS.term.2"));
              } else {
                if (getText("TidalOS.term.1") == "hardinfo") {
                  setText("TidalOS.term.term", (getText("TidalOS.term.term") + "\n RAM 2147483647 bytes (2 GiB) \n Storage 68719476736 bytes (64 GiB)") + "");
                } else {
                  if (getText("TidalOS.term.1") == "beta-features") {
                    if (getText("TidalOS.term.2") == "-q") {
                      if (betafeatures) {
                        setText("TidalOS.term.term", (getText("TidalOS.term.term") + "\n Development features are enabled") + "");
                      } else {
                        setText("TidalOS.term.term", (getText("TidalOS.term.term") + "\n Development features are disabled") + "");
                      }
                    } else {
                      if (getText("TidalOS.term.2") == "-t") {
                        if (betafeatures) {
                          betafeatures = 0;
                        } else {
                          betafeatures = 1;
                        }
                      } else {
                        setText("TidalOS.term.term", (getText("TidalOS.term.term") + "\n Please use other flags like -q to see status or -t to toggle.") + "");
                      }
                    }
                  } else {
                    setText("TidalOS.term.term", ((getText("TidalOS.term.term") + "\n '") + getText("TidalOS.term.1")) + "'isn't a valid command");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
