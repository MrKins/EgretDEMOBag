class MainPanel {
    private gComponent: fairygui.GComponent;
    private gList: fairygui.GList;
    private gButtonItem: fairygui.GButton;
    private gButtonAdd: fairygui.GButton;
    private listIndex: number;

    public constructor() {
        this.gComponent = fairygui.UIPackage.createObject("ForDemoBag", "ComponentMain").asCom;
        this.gComponent.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this.gComponent);

        this.gList = this.gComponent.getChild("listBag").asList;
        this.gList.addEventListener(fairygui.ItemEvent.CLICK, this.ClickItem, this);

        this.gButtonItem = fairygui.UIPackage.createObject("ForDemoBag", "ButtomList").asButton;

        this.gButtonAdd = this.gComponent.getChild("ButtonAdd").asButton;
        this.gButtonAdd.addClickListener(this.ClickAdd, this);

        for (this.listIndex = 0; this.listIndex < 5; this.listIndex++) {
            let randomItem = Math.floor(Math.random() * 10);
            let button: fairygui.GButton = this.gList.getChildAt(this.listIndex).asButton;
            button.icon = `resource/assets/i${randomItem}.png`;
            button.title = `这个是${randomItem}号道具，没功能，没特效，随机的`;
        }
    }

    private ClickItem(evt: fairygui.ItemEvent): void {
        var item: fairygui.GButton = <fairygui.GButton>evt.itemObject;
        this.gComponent.getChild("imageSelected").asLoader.url = item.icon;
        this.gComponent.getChild("textSelected").text = item.title;
    }

    private ClickAdd(): void {
        let randomItem = Math.floor(Math.random() * 10);
        if (this.listIndex < this.gList.numChildren) {
            let button: fairygui.GButton = this.gList.getChildAt(this.listIndex++).asButton;
            button.icon = `resource/assets/i${randomItem}.png`;
            button.title = `这个是作弊添加的${randomItem}号道具，秒天秒地秒空气`;
        } else {
            //console.log("已经溢出列表，无法再添加");
            this.listIndex = 0;
        }
    }
}
