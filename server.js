"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginServer = void 0;
const Http = require("http"); //Es werden die Funktionalitäten von der Klasse "http" importiert und das wird Http genannt
var LoginServer;
(function (LoginServer) {
    console.log("Starting server"); //wird in der Konsole des Servers ausgegeben
    let port = Number(process.env.PORT); // neue Variable wird initialisiert und process.env.PORT wird getypcast zum type number
    //port des Servers (heroku) wird in eine Variable gespeichert 
    if (!port) // Bedingung ist, wenn der port nicht gesetzt wird, dann setzt er den port auf 8100
        port = 8100; //port = Schnittstelle; 
    let server = Http.createServer(); //neuer Server wird erstellt
    server.addListener("request", handleRequest); //dem Server wird einem Event Listener für "request" hinzugefügt
    server.addListener("listening", handleListen); // das Gleiche für "listening"
    server.listen(port); // der Server "hört" ob requests kommen
    function handleListen() {
        console.log("Listening"); //wenn er was "hört" gibt er "Listening" in der Konsole aus
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url); //Teilaufgabe 2
        _response.setHeader("content-type", "text/html; charset=utf-8"); // wie head in HTML; unsichtbarer Teil; enthält die Meta-Informationen
        _response.setHeader("Access-Control-Allow-Origin", "*"); //bestimmt wer alles die Antwort empfangen darf
        _response.write(_request.url); //Antwort, die im Text steht; request.url -> die Antwort wird an der URL angehängt
        _response.end(); //beendet die response
    }
})(LoginServer = exports.LoginServer || (exports.LoginServer = {}));
//# sourceMappingURL=server.js.map