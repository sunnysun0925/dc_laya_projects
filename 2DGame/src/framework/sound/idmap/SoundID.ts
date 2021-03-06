module dc
{    
	/**
     * 声音
     * @author hannibal
     * @time 2017-7-11
     */
	export class SoundID
	{
		public static SOUND_LISTENER_ENTER:string = "SOUND_LISTENER_ENTER";		//声音听众
		public static SOUND_LISTENER_LEAVE:string = "SOUND_LISTENER_LEAVE";		//声音听众
	}
	/**声音事件*/
	export class SoundEvent
	{
		public static SWITCH_BG_SOUND:string      = "SWITCH_BG_SOUND";		//切换背景声音(开启/关闭)
		public static SWITCH_EFFECT_SOUND:string  = "SWITCH_EFFECT_SOUND";	//切换音效(开启/关闭)
		public static SWITCH_CHAT_SOUND:string    = "SWITCH_CHAT_SOUND";	//切换语音(开启/关闭)
		public static ADJUST_BG_VOLUME:string     = "ADJUST_BG_VOLUME";		//调节背景音量(0-1)
		public static ADJUST_EFFECT_VOLUME:string = "ADJUST_EFFECT_VOLUME";	//调节音效音量(0-1)
		public static ADJUST_CHAT_VOLUME:string   = "ADJUST_CHAT_VOLUME";	//调节语音音量(0-1)

		public static PLAY_COMPLETE:string   	  = "PLAY_COMPLETE";		//播放完成事件
	}

	/**背景声音播放模式*/
	export enum eSoundPlayMode
	{
		ONCE,           //播放一次
		SINGLE_CYCLE,   //单曲循环
		SEQUENCE,       //顺序
		RANDOM,         //随机
	}
}