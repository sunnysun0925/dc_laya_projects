module dc
{
    /**
     * 队列：先入先出
     * @author hannibal
     * @time 2017-7-6
     */
    export class Queue<T>
    {
        private m_List:Array<T> = [];

        /**添加到队列尾*/
        public Enqueue(item:T):void
        {
            this.m_List.push(item);
        }
        /**获取队列头，并删除*/
        public Dequeue():T
        {
            return this.m_List.shift();
        }
        /**获取队列头，并不删除*/
        public Peek():T
        {
            if(this.m_List.length == 0)return null;
            return this.m_List[0];
        }
        /**转换成标准数组*/
        public ToArray():Array<T>
        {
            return this.m_List.slice(0, this.m_List.length);
        }
        /**是否包含指定元素*/
        public Contains(item:T):boolean
        {
            return (this.m_List.indexOf(item, 0) == -1 ? false : true);
        }
        /**清空*/
        public Clear():void
        {
            this.m_List.length = 0;
        }
        public get length():number
        {
            return this.m_List.length;
        }
        public Foreach(compareFn: (a: T) => boolean):void
        {
            for(let item of this.m_List)
            {
                if(!compareFn.call(null, item))
                    break
            }
        }
    }
}