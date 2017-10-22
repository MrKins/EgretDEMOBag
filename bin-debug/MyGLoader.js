var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyGLoader = (function (_super) {
    __extends(MyGLoader, _super);
    function MyGLoader() {
        return _super.call(this) || this;
    }
    MyGLoader.prototype.loadExternal = function () {
        RES.getResByUrl(this.url, this.__myGetResCompleted, this);
    };
    MyGLoader.prototype.__myGetResCompleted = function (res, key) {
        if (res instanceof egret.Texture)
            this.onExternalLoadSuccess(res);
        else
            this.onExternalLoadFailed();
    };
    return MyGLoader;
}(fairygui.GLoader));
__reflect(MyGLoader.prototype, "MyGLoader");
//# sourceMappingURL=MyGLoader.js.map