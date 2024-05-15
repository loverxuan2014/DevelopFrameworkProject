import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
declare const window: Window & { pinus: any }

@ccclass('test')
export class test extends Component {
    onLoad() {
        var pinus = window.pinus;
        var host = "127.0.0.1";
        var port = "3010";
        pinus.init({
            host: host,
            port: port,
            log: true
        }, function () {
            pinus.request("connector.entryHandler.entry", "hello pinus", function (data: { msg: any; }) {
                console.log(data.msg);
            });
        });
    }
}


