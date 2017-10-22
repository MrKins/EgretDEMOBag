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
        this.gButton = fairygui.UIPackage.createObject("ForDemoBag", "ButtomList").asButton;
        for (var i = 0; i < 5; i++) {
            var randomItem = Math.floor(Math.random() * 10);
            var button = this.gList.getChildAt(i).asButton;
            button.icon = "resource/assets/i" + randomItem + ".png";
            button.title = "Item: " + randomItem;
        }
    }
    MainPanel.prototype.ClickItem = function (evt) {
        var item = evt.itemObject;
        this.gComponent.getChild("imageSelected").asLoader.url = item.icon;
        this.gComponent.getChild("textSelected").text = item.title;
    };
    return MainPanel;
}());
__reflect(MainPanel.prototype, "MainPanel");
//# sourceMappingURL=MainPanel.js.map