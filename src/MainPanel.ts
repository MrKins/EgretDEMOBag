class MainPanel {
    private gComponent: fairygui.GComponent;
    private gList: fairygui.GList;
    private gButton: fairygui.GButton;

    public constructor() {
        this.gComponent = fairygui.UIPackage.createObject("ForDemoBag", "ComponentMain").asCom;
        this.gComponent.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this.gComponent);

        this.gList = this.gComponent.getChild("listBag").asList;
        this.gList.addEventListener(fairygui.ItemEvent.CLICK, this.ClickItem, this);

        this.gButton = fairygui.UIPackage.createObject("ForDemoBag", "ButtomList").asButton;

        for (let i: number = 0; i < 5; i++) {
            let randomItem = Math.floor(Math.random() * 10);
            let button: fairygui.GButton = this.gList.getChildAt(i).asButton;
            button.icon = `resource/assets/i${randomItem}.png`;
            button.title = `Item: ${randomItem}`;
        }
    }

    private ClickItem(evt: fairygui.ItemEvent): void {
        var item: fairygui.GButton = <fairygui.GButton>evt.itemObject;
        this.gComponent.getChild("imageSelected").asLoader.url = item.icon;
        this.gComponent.getChild("textSelected").text = item.title;
    }
}
