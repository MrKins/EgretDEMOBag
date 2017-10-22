var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MainPanel = (function () {
    function MainPanel() {
        this.gComponent = fairygui.UIPackage.createObject("ForDemoBag", "ComponentMain").asCom;
        this.gComponent.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this.gComponent);
        this.gList = this.gComponent.getChild("listBag").asList;
        this.gList.addEventListener(fairygui.ItemEvent.CLICK, this.ClickItem, this);
        this.gButtonItem = fairygui.UIPackage.createObject("ForDemoBag", "ButtomList").asButton;
        this.gButtonAdd = this.gComponent.getChild("ButtonAdd").asButton;
        this.gButtonAdd.addClickListener(this.ClickAdd, this);
        for (this.listIndex = 0; this.listIndex < 5; this.listIndex++) {
            var randomItem = Math.floor(Math.random() * 10);
            var button = this.gList.getChildAt(this.listIndex).asButton;
            button.icon = "resource/assets/i" + randomItem + ".png";
            button.title = "\u8FD9\u4E2A\u662F" + randomItem + "\u53F7\u9053\u5177\uFF0C\u6CA1\u529F\u80FD\uFF0C\u6CA1\u7279\u6548\uFF0C\u968F\u673A\u7684";
        }
    }
    MainPanel.prototype.ClickItem = function (evt) {
        var item = evt.itemObject;
        this.gComponent.getChild("imageSelected").asLoader.url = item.icon;
        this.gComponent.getChild("textSelected").text = item.title;
    };
    MainPanel.prototype.ClickAdd = function () {
        var randomItem = Math.floor(Math.random() * 10);
        if (this.listIndex < this.gList.numChildren) {
            var button = this.gList.getChildAt(this.listIndex++).asButton;
            button.icon = "resource/assets/i" + randomItem + ".png";
            button.title = "\u8FD9\u4E2A\u662F\u4F5C\u5F0A\u6DFB\u52A0\u7684" + randomItem + "\u53F7\u9053\u5177\uFF0C\u79D2\u5929\u79D2\u5730\u79D2\u7A7A\u6C14";
        }
        else {
            //console.log("已经溢出列表，无法再添加");
            this.listIndex = 0;
        }
    };
    return MainPanel;
}());
__reflect(MainPanel.prototype, "MainPanel");
//# sourceMappingURL=MainPanel.js.map