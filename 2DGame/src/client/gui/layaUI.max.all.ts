
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
import UIBaseView=dc.UIBaseView;
module client.gui.battle {
    export class BattleMainUI extends UIBaseView {
		public rightBottom:Laya.Panel;
		public skill1Img:Laya.Image;
		public skillIcon:Laya.Image;

        public static  uiView:any ={"type":"UIBaseView","props":{"width":960,"height":640},"child":[{"type":"Panel","props":{"width":180,"var":"rightBottom","right":50,"height":180,"bottom":50},"child":[{"type":"Image","props":{"y":90,"x":90,"var":"skill1Img","skin":"ui/common/img_kaiqiang.png","pivotY":90,"pivotX":90},"child":[{"type":"Image","props":{"y":90,"x":90,"var":"skillIcon","pivotY":0,"pivotX":0}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(client.gui.battle.BattleMainUI.uiView);
        }
    }
}

module client.gui.common {
    export class AlertViewUI extends UIBaseView {
		public mainBox:Laya.Box;
		public contentBg:Laya.Image;
		public lbTitle:Laya.Label;
		public btnClose:Laya.Button;
		public btnConfirm:Laya.Button;
		public btnCancel:Laya.Button;

        public static  uiView:any ={"type":"UIBaseView","props":{"width":640,"height":960},"child":[{"type":"Box","props":{"y":10,"x":10,"width":460,"visible":true,"var":"mainBox","name":"mainBox","height":"407","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":460,"visible":true,"top":0,"skin":"ui/common/img_bg_1.png","sizeGrid":"101,86,101,86","right":0,"left":0,"height":407,"bottom":0}},{"type":"Image","props":{"y":-12,"x":56,"visible":true,"skin":"ui/common/image_2.png"}},{"type":"Image","props":{"y":71.5,"x":26,"width":410,"var":"contentBg","skin":"ui/common/image_1.png","sizeGrid":"70,90,30,90","name":"contentBg","height":218}},{"type":"Label","props":{"y":11,"x":137,"width":188,"visible":true,"var":"lbTitle","text":"@温馨提示","stroke":1,"name":"lbTitle","height":30,"fontSize":23,"font":"黑体","color":"#f3ecce","centerX":0,"bold":true,"align":"center"}},{"type":"Button","props":{"y":9,"x":396,"visible":true,"var":"btnClose","top":3,"skin":"ui/common/btn_close.png","right":5,"name":"close"}},{"type":"Box","props":{"y":305,"x":0,"width":460,"visible":true,"height":65},"child":[{"type":"Button","props":{"y":0,"x":275,"visible":true,"var":"btnConfirm","skin":"ui/common/btn_common_1.png","name":"btnConfirm","labelStroke":1,"labelSize":26,"labelFont":"黑体","labelColors":"#f3ecce,#f3ecce,#f3ecce,#f3ecce","label":"@确定","centerY":0}},{"type":"Button","props":{"y":0,"x":50,"visible":true,"var":"btnCancel","skin":"ui/common/btn_common_1.png","name":"btnCancel","labelStroke":1,"labelSize":26,"labelFont":"黑体","labelColors":"#f3ecce,#f3ecce,#f3ecce,#f3ecce","label":"@取消","centerY":0}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(client.gui.common.AlertViewUI.uiView);
        }
    }
}

module client.gui.common {
    export class RockerScrollUI extends View {
		public bgImg:Laya.Image;
		public pushImg:Laya.Image;
		public pointImg:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":150,"x":150,"width":300,"scaleY":1,"scaleX":1,"pivotY":150,"pivotX":150,"height":300},"child":[{"type":"Image","props":{"y":150,"x":150,"var":"bgImg","skin":"ui/common/img_yidong kuang.png","pivotY":150,"pivotX":150},"child":[{"type":"Image","props":{"y":150,"x":150,"var":"pushImg","skin":"ui/common/img_yidong.png","pivotY":60,"pivotX":60}}]},{"type":"Image","props":{"y":149,"x":147,"var":"pointImg","skin":"ui/common/img_yidongzhizhen.png","rotation":0,"pivotY":184,"pivotX":120}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(client.gui.common.RockerScrollUI.uiView);
        }
    }
}

module client.gui.login {
    export class LoginViewUI extends UIBaseView {
		public btnNotice:Laya.Button;
		public titleLab1:Laya.Label;
		public panelServer:Laya.Box;
		public lblServer:Laya.Label;
		public imgState:Laya.Image;
		public lblNew:Laya.Label;
		public panelNormal:Laya.Box;
		public panelLogin:Laya.Box;
		public txtAccount:Laya.TextInput;
		public txtPassword:Laya.TextInput;
		public btnLogin:Laya.Button;
		public btnRegister:Laya.Button;

        public static  uiView:any ={"type":"UIBaseView","props":{"width":640,"height":960},"child":[{"type":"Button","props":{"y":40,"width":142,"var":"btnNotice","skin":"ui/common/btn_common_4.png","right":37,"name":"btnNotice","labelStrokeColor":"#321700","labelStroke":2,"labelSize":26,"labelFont":"黑体","labelColors":"#d3c8a5,#fff6db,#867f6a,#a7a7a7","labelBold":true,"label":"公 告","height":60}},{"type":"Box","props":{"y":661,"x":150},"child":[{"type":"Image","props":{"y":5,"width":344,"visible":true,"skin":"ui/common/image_1.png","sizeGrid":"80,90,20,90","height":110}},{"type":"Image","props":{"x":33,"width":349,"skin":"ui/common/image_2.png","scaleY":0.8,"scaleX":0.8,"height":68}},{"type":"Label","props":{"y":15,"x":111,"var":"titleLab1","text":"@选择服务器","fontSize":24,"font":"黑体","color":"#ab9787","centerX":0,"bold":true}},{"type":"Box","props":{"y":60,"x":55,"width":234,"var":"panelServer","name":"panelServer","height":35,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":234,"visible":true,"skin":"ui/common/image_3.png","sizeGrid":"16,16,16,16","height":35}},{"type":"Label","props":{"y":11,"x":70,"var":"lblServer","text":"@测试-165服","name":"lblServer","left":70,"fontSize":18,"font":"黑体","color":"#f37200","centerY":0,"bold":true}},{"type":"Image","props":{"y":0,"x":0,"var":"imgState","skin":"ui/common/img_state_1.png","name":"imgState","left":0,"centerY":0}},{"type":"Label","props":{"y":9,"x":198,"var":"lblNew","text":"@new","right":8,"name":"lblNew","fontSize":18,"font":"黑体","color":"#ff0000","centerY":0,"bold":true}}]}]},{"type":"Box","props":{"y":510,"x":114,"var":"panelNormal","name":"panelNormal","mouseThrough":true},"child":[{"type":"Box","props":{"x":36,"var":"panelLogin","name":"panelLogin"},"child":[{"type":"TextInput","props":{"width":344,"visible":true,"var":"txtAccount","skin":"ui/common/textinput.png","sizeGrid":"11,64,11,64","padding":"0,50,5,50","name":"account","multiline":false,"mouseEnabled":true,"height":67,"fontSize":20,"font":"黑体","color":"#ffe081","bold":true,"align":"center"}},{"type":"TextInput","props":{"y":70,"width":344,"var":"txtPassword","skin":"ui/common/textinput.png","sizeGrid":"11,64,11,64","padding":"0,50,5,50","name":"passwd","height":67,"fontSize":20,"font":"黑体","color":"#ffe081","bold":true,"asPassword":true,"align":"center"}}]},{"type":"Box","props":{"y":296,"centerX":0},"child":[{"type":"Button","props":{"y":35,"x":330,"width":198,"visible":true,"var":"btnLogin","stateNum":"3","skin":"ui/common/btn_common_5.png","pivotY":35,"pivotX":99,"name":"btnLogin","labelStroke":1,"labelSize":36,"labelPadding":"0,4,4,0","labelFont":"黑体","labelColors":"#fff9e6,#ffffff,#aba79a,#404040","labelBold":true,"label":"@登 陆","height":71}},{"type":"Button","props":{"width":198,"var":"btnRegister","stateNum":"3","skin":"ui/common/btn_common_5.png","name":"btnRegister","labelStroke":1,"labelSize":36,"labelPadding":"0,4,4,0","labelFont":"黑体","labelColors":"#fff9e6,#ffffff,#aba79a,#404040","labelBold":true,"label":"@注 册","height":71}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(client.gui.login.LoginViewUI.uiView);
        }
    }
}

module client.gui.login {
    export class SelectServerPanelUI extends UIBaseView {
		public panelMain:Laya.Panel;
		public windowTitle:Laya.Label;
		public btnClose:Laya.Button;
		public titleLab1:Laya.Label;
		public btnHistory1:Laya.Button;
		public btnHistory2:Laya.Button;
		public panelList:Laya.Box;
		public titleLab2:Laya.Label;

        public static  uiView:any ={"type":"UIBaseView","props":{"width":640,"height":960},"child":[{"type":"Image","props":{"y":658,"x":502,"top":0,"skin":"ui/common/img_bg_3.png","right":0,"left":0,"bottom":0}},{"type":"Panel","props":{"y":199,"x":60,"width":520,"visible":true,"var":"panelMain","name":"panelMain","height":569,"centerY":4,"centerX":5},"child":[{"type":"Image","props":{"width":520,"visible":true,"skin":"ui/common/img_bg_1.png","sizeGrid":"101,86,101,86","height":569}},{"type":"Image","props":{"y":-10,"x":84,"width":349,"visible":true,"skin":"ui/common/image_2.png","height":68,"centerX":-2}},{"type":"Label","props":{"y":13,"x":199,"var":"windowTitle","text":"@选择服务器","stroke":1,"pivotX":0,"fontSize":23,"font":"黑体","color":"#f3ecce","centerX":-2,"bold":true}},{"type":"Button","props":{"y":11,"x":457,"visible":true,"var":"btnClose","skin":"ui/common/btn_close.png","name":"close"}},{"type":"Box","props":{"y":74,"x":42,"width":435,"height":82},"child":[{"type":"Label","props":{"y":0,"x":8,"visible":true,"var":"titleLab1","text":"@历史服务器","pivotX":0,"fontSize":24,"font":"黑体","color":"#ffe081","bold":false}},{"type":"Button","props":{"y":38,"x":0,"width":205,"var":"btnHistory1","skin":"ui/common/btn_common_3.png","sizeGrid":"22,32,22,32","name":"btnHistory1","labelStroke":1,"labelSize":20,"labelPadding":"0,0,1,0","labelFont":"黑体","labelColors":"#f3ecce,#f3ecce,#f3ecce,#f3ecce","labelBold":true,"label":"@35区三分天下","height":44}},{"type":"Button","props":{"y":38,"x":230,"width":205,"var":"btnHistory2","skin":"ui/common/btn_common_3.png","sizeGrid":"22,32,22,32","name":"btnHistory2","labelStroke":1,"labelSize":20,"labelPadding":"0,0,1,0","labelFont":"黑体","labelColors":"#f3ecce,#f3ecce,#f3ecce,#f3ecce","labelBold":true,"label":"@35区三分天下","height":44}}]},{"type":"Box","props":{"y":170,"x":22,"var":"panelList","name":"panelList"},"child":[{"type":"Image","props":{"width":474,"visible":true,"skin":"ui/common/image_1.png","sizeGrid":"80,90,20,90","height":360}},{"type":"Label","props":{"y":34,"x":28,"visible":true,"var":"titleLab2","text":"@服务器","pivotX":0,"fontSize":24,"font":"黑体","color":"#ffe081","bold":false}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(client.gui.login.SelectServerPanelUI.uiView);
        }
    }
}
