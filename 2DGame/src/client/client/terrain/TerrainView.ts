module dc
{
    /**
     * 地图表现
     * @author hannibal
     * @time 2017-7-26
     */
	export class TerrainView extends LayaSprite
	{
		public Setup(map_id:number):void
		{	
			ResourceManager.Instance.LoadRes("res/image/map/1001.jpg", LayaLoader.IMAGE, LayaHandler.create(this, this.OnLoadComplete));
		}

		public Destroy():void
		{
			this.UnRegisterEvent();
		}

		private OnLoadComplete(url:string):void
		{
			let tex:LayaTexture = ResourceManager.Instance.GetRes(url);
			assertNullOrNil(tex);
			this.graphics.drawTexture(tex);
			this.size(tex.width, tex.height);
			this.pivot(0, 0);
			SceneLayers.terrain.addChild(this);
			this.RegisterEvent();
		}


        private RegisterEvent():void
        {
			this.on(LayaEvent.MOUSE_DOWN, this, this.OnMouseDown);
			this.on(LayaEvent.MOUSE_UP, this, this.OnMouseUp);
			this.on(LayaEvent.CLICK, this, this.OnMouseClick);
        }
        private UnRegisterEvent():void
        {
			this.off(LayaEvent.MOUSE_DOWN, this, this.OnMouseDown);
			this.off(LayaEvent.MOUSE_UP, this, this.OnMouseUp);
			this.off(LayaEvent.CLICK, this, this.OnMouseClick);
        }

		private OnMouseDown(evt:any):void
		{
			//Log.Debug("OnMouseDown x:" + evt.stageX + " y:" + evt.stageY);
		}
		private OnMouseUp(evt:any):void
		{
			//Log.Debug("OnMouseUp");
		}
		private OnMouseClick(evt:any):void
		{
			Log.Debug("OnMouseClick x:" + evt.stageX + " y:" + evt.stageY);
			Vector3.Temp.Set(evt.x,evt.y, 0);
			//MainObjCmdFacade.Instance.pushCommand_KeyboardMove(Vector3.Temp);
		}
	}
}