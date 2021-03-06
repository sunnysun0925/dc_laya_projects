module dc
{
    /**
     * 游戏主逻辑
     * @author hannibal
     * @time 2017-7-9
     */
    export class Procedure extends Singleton
    {
        private static instance:Procedure = null;
        public static get Instance():Procedure
        {
            if(!this.instance)this.instance = new Procedure();
            return this.instance;
        }
        /**
         * 初始化
        */
        public Setup():void
        {
            UIID.DEFAULT_WIDTH = 640;
            UIID.DEFAULT_HEIGHT = 960;
            //Laya.init(UIID.DEFAULT_WIDTH,UIID.DEFAULT_HEIGHT, Laya.WebGL);
            Laya3D.init(0,0, false);

            Log.Info("Procedure::setup");
            this.InitGameManager();
        }
        /**
         * 销毁
        */
        public Destroy():void
        {
            Laya.timer.clearAll(this);
            this.ReleaseGameManager();
        }
        /**
         * 开始游戏，逻辑开始执行
        */
        public Start():void
        {
            GameApp.Instance.Start();    
        }

        private InitGameManager():void
        {
            Framework.Instance.Setup(Laya.stage, LayaHandler.create(this, this.Tick, null, false));
            GameApp.Instance.Setup();
            SceneManager.Instance.Setup();
            LoadViewManager.Instance.Setup();
            ServerManager.Instance.Setup();
            UILoaderRegister.Setup();
            //add here
            
        }
        private ReleaseGameManager():void
        {
            SceneManager.Instance.Destroy();
            LoadViewManager.Instance.Destroy();
            ServerManager.Instance.Destroy();
            UILoaderRegister.Destroy();
            //add here

            GameApp.Instance.Destroy();
            Framework.Instance.Destroy();
        }

        private Tick():void
        {
            GameApp.Instance.Tick();
            SceneManager.Instance.Tick();
            ServerManager.Instance.Tick();
        }
    }
}