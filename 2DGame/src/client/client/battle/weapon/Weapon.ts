module dc
{
	/**
     * 武器
     * @author hannibal
     * @time 2017-7-14
     */
	export class Weapon
	{
		constructor(obj:UnitObject)
		{

		}

		public CreateBullet(type:number, pos:Vector3, dir:Vector3):BaseBullet
		{
			let obj:BaseBullet = ObjectPools.Get(BaseBullet);
			obj.Init();
			obj.ObjectServerID = "";
			obj.Init();
			obj.SetPosition(pos.x, pos.y, pos.z);	
			obj.SetDirection(dir.x, dir.y, dir.z);		
			obj.Setup(null);
			obj.LoadResource([{url:"res/bullet/bullet.png", type:LayaLoader.IMAGE}]);
			SceneLayers.bullet.addChild(obj.RootNode);
			ObjectManager.Instance.AttachObject(obj);
			return null;
		}
	}
}