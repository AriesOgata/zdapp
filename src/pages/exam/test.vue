<!--  -->
<template>
<div id ="test">
    <div class="test-header">
        <img src="../../images/back.png" alt="返回" class="back-img" @click="back">
        <img src="../../images/setting.png" alt="设置" class="set-img">
        <div class="header-btn">
            <div class ="in-b" :class="[headerBtn == 'dt'?'bg-choo':'']" @click="modelChoo('dt')">答题模式</div>
            <div class ="in-b" :class="[headerBtn == 'bt'?'bg-choo':'']" @click="modelChoo('bt')">背题模式</div>
        </div>
    </div>
    <div class="test-container">
        <p class="test-title"><span class="test-tag">单选</span>3.铁磁材料在磁化过程中，当外加磁场H不断增加，而测得的磁场强度几乎不变的性质称为（ ）。</p>
        <ul class="test-opt">
            <li class="opt-li"><i class="opt-li-i">A</i>磁铁啊</li>
            <li class="opt-li"><i class="opt-li-i">B</i>磁铁</li>
            <li class="opt-li"><i class="opt-li-i">C</i>高到磁性</li>
            <li class="opt-li"><i class="opt-li-i">D</i>磁饱和性</li>
        </ul>
    </div>
    <div class="test-footer">
        <div class="footer-shouc"><img src="../../images/shouc.jpg" alt="shouc" class="shouc-img"><i class="shouc-txt">收藏</i></div>
        <div class="footer-menu" @click="itemMenu()"><img src="../../images/menu.jpg" alt="menu" class="shouc-img"><i class="menu-num">3/1334</i></div>
        <div class="footer-ce">
            <img src="../../images/correct.jpg" alt="correct" class="shouc-img"><i class="correct-num">0</i>
            <img src="../../images/error.jpg" alt="error" class="shouc-img"><i class="error-num">0</i>
        </div>
    </div>
    <div class="menu-mask" :class="[menuShow?'mask-hid':'']" @click="itemMenu()"></div>
    <div class="menu-container" :class="[menuShow?'mask-hid':'']">
        <div class="menu-top">
            <div class="footer-shouc"><img src="../../images/shouc.jpg" alt="shouc" class="shouc-img"><i class="shouc-txt">收藏</i></div>
            <div class="footer-menu" @click="itemMenu()"><img src="../../images/menu.jpg" alt="menu" class="shouc-img"><i class="menu-num">3/1334</i></div>
            <div class="footer-ce">
                <img src="../../images/correct.jpg" alt="correct" class="shouc-img"><i class="correct-num">0</i>
                <img src="../../images/error.jpg" alt="error" class="shouc-img"><i class="error-num">0</i>
            </div>
        </div>
        <p class="menu-tittle">电工初级</p>
        <div class="tittle-container">
            <flexbox wrap="wrap" :gutter="0">
                <flexbox-item :span="1/7" ><div class="flex-demo">1</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">2</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">3</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">4</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">5</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">6</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">7</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">8</div></flexbox-item>

            </flexbox>
        </div>

    </div>
</div>
</template>

<script>

import { Flexbox, FlexboxItem } from 'vux'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Flexbox,
    FlexboxItem
},
data() {
//这里存放数据
return {
    borderColor: {
            borderColor: '#333'
        },
    headerBtn:'dt',
    menuShow:true,
    examList:[{"code":"1","msg":"success","time":"1560225537","data":{"questype":{"1":{"questid":1,"questype":"单选题","questsort":0},"2":{"questid":2,"questype":"多选题","questsort":0},"3":{"questid":3,"questype":"判断题","questsort":0},"4":{"questid":4,"questype":"定值填空","questsort":0},"5":{"questid":5,"questype":"填空题","questsort":1},"6":{"questid":6,"questype":"问答题","questsort":1}},"sessionvars":{"examsessionid":"p9s3rual803d9uhs5eplf0nsj1","examsessionuserid":0,"examsession":"动画概论阶段测评（4）","examsessionsetting":{"examid":11,"examsubject":2,"exam":"动画概论阶段测评（4）","examsetting":{"examtime":"90","comfrom":"","score":"100","passscore":"60","questypelite":{"1":"1","2":"1","3":"1","4":"1","5":"1","6":"1"},"questype":{"1":{"number":"43","score":"2","describe":""},"2":{"number":"7","score":"2","describe":""},"3":{"number":"0","score":"0","describe":""},"4":{"number":"0","score":"0","describe":""},"5":{"number":"0","score":"0","describe":""},"6":{"number":"0","score":"0","describe":""}}},"examquestions":{"1":{"questions":",42,43,44,54,53,52,51,50,49,48,47,46,45,64,63,62,61,60,59,58,57,56,55,74,73,72,71,70,69,68,67,66,65,84,83,82,81,80,79,78,77,76,75,","rowsquestions":""},"2":{"questions":",101,100,99,98,97,96,95,","rowsquestions":""},"3":{"questions":"","rowsquestions":""},"4":{"questions":"","rowsquestions":""},"5":{"questions":"","rowsquestions":""},"6":{"questions":"","rowsquestions":""}},"examscore":"","examstatus":0,"examtype":2,"examauthorid":1,"examauthor":"admin","examtime":1545039460,"examkeyword":"","examdecide":1},"examsessionsign":null,"examsessionbasic":1,"examsessiontype":1,"examsessionkey":"11","examsessionquestion":{"questions":{"1":[{"questionid":42,"questiontype":1,"question":"41、对动画艺术创作而言，（）就是通过对现实的思考，让现实的东西浪漫起来的。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、未来&lt;\/p&gt;&lt;p&gt;B、梦想&lt;\/p&gt;&lt;p&gt;C、思想&lt;\/p&gt;&lt;p&gt;D、创造&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"对对动画艺术创作而言，梦想就是通过对现实的思考，让现实的东西浪漫起来的。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":43,"questiontype":1,"question":"42、动画片《幻想曲》是对动画概论（）效果的检验。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、敏锐的观察力&lt;\/p&gt;&lt;p&gt;B、丰富的想象力&lt;\/p&gt;&lt;p&gt;C、准确的概括力&lt;\/p&gt;&lt;p&gt;D、综合的创作力&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"动画片《幻想曲》中，经验和知识决定梦想的领域，社会责任决定精灵的作为，综合素质决定创造性，专业知识技能决定梦想实现的效果。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":44,"questiontype":1,"question":"43、中国动画《铁扇公主》广泛（）戏曲和视觉审美方面，为我们树立了榜样。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、观察经典&lt;\/p&gt;&lt;p&gt;B、借鉴传统&lt;\/p&gt;&lt;p&gt;C、研究经典&lt;\/p&gt;&lt;p&gt;D、改编传统&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"我国动画艺术创作的开山人物万事兄弟出于爱国心理涉足动画事业，其制作的《铁扇公主》广泛借鉴传统戏曲和视觉审美方面，为我们树立了榜样。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":45,"questiontype":1,"question":"44、（）是学习一切知识的重要途径，动画也不例外。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、观察作品&lt;\/p&gt;&lt;p&gt;B、研究作品&lt;\/p&gt;&lt;p&gt;C、解读作品&lt;\/p&gt;&lt;p&gt;D、借鉴作品&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"C","questiondescribe":"作品解读是学习一切知识的重要途径，动画也不例外。选C。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":46,"questiontype":1,"question":"45、动画片的故事更像哲学故事或者语言故事，需要提炼出真理，然后将真理演变为动画描述的故事。说的是（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、情节提炼&lt;\/p&gt;&lt;p&gt;B、形象提炼&lt;\/p&gt;&lt;p&gt;C、情节描述&lt;\/p&gt;&lt;p&gt;D、故事描述&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"文学故事和生活故事都比较复杂，动画片的故事更像哲学故事或者语言故事，需要提炼出真理，然后将真理演变为动画描述的故事。说的是情节描述。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":47,"questiontype":1,"question":"46、（）是以剧本既定的角色特征为基础，通过对生活中类似形象素材的舍取、提炼与重组，创造一个鲜活的充满个性特征的动画角色。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、情节提炼&lt;\/p&gt;&lt;p&gt;B、形象提炼&lt;\/p&gt;&lt;p&gt;C、情节描述&lt;\/p&gt;&lt;p&gt;D、故事描述&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"动画形象的提炼是以剧本既定的角色特征为基础，通过对生活中类似形象素材的舍取、提炼与重组，创造一个鲜活的充满个性特征的动画角色。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":48,"questiontype":1,"question":"47、（）就是在一个动画剧本初次被确立的时候，为了描绘出整个故事的轮廓而画出的粗略的分镜头台本。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、故事草图&lt;\/p&gt;&lt;p&gt;B、故事板&lt;\/p&gt;&lt;p&gt;C、分镜本&lt;\/p&gt;&lt;p&gt;D、剧本草图&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"故事草图就是在一个动画剧本初次被确立的时候，为了描绘出整个故事的轮廓而画出的粗略的分镜头台本。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":49,"questiontype":1,"question":"48、（）是需要主创人员完成的、动画创作前期设计中的最主要工作之一。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、故事版设计&lt;\/p&gt;&lt;p&gt;B、造型设计&lt;\/p&gt;&lt;p&gt;C、场景设计&lt;\/p&gt;&lt;p&gt;D、施工计划&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"动画造型是需要主创人员完成的、动画创作前期设计中的最主要工作之一。动画造型设计包括角色设计、道具设计、动作设计等。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":50,"questiontype":1,"question":"49、（）是在动画制作的前期工作中，导演与绘景师共同协作所完成的一切关于背景、色彩、光影以及镜头画面构图的工作。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、故事版设计&lt;\/p&gt;&lt;p&gt;B、造型设计&lt;\/p&gt;&lt;p&gt;C、场景设计&lt;\/p&gt;&lt;p&gt;D、施工计划&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"C","questiondescribe":"动画场景设计是在动画制作的前期工作中，导演与绘景师共同协作所完成的一切关于背景、色彩、光影以及镜头画面构图的工作。选C。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":51,"questiontype":1,"question":"50、设计稿就是动画影像构成的每一个镜头的生成机制，设计稿这个概念属于动画专用名词，源自layout的释义，即“安排布局、设计”，它在工作性质上接近于中文的“构图”。说的是（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、故事版设计&lt;\/p&gt;&lt;p&gt;B、造型设计&lt;\/p&gt;&lt;p&gt;C、场景设计&lt;\/p&gt;&lt;p&gt;D、施工计划&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"D","questiondescribe":"施工计划：设计稿就是动画影像构成的每一个镜头的生成机制，设计稿这个概念属于动画专用名词，源自layout的释义，即“安排布局、设计”，它在工作性质上接近于中文的“构图”。选D。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":52,"questiontype":1,"question":"51、如果说动画是赋予造型符号生命意义的艺术，那么（）就是赋予本来没有活力的符号以生命和灵魂过程的第一步，即关键瞬间的确定。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、故事板设计&lt;\/p&gt;&lt;p&gt;B、原画设计&lt;\/p&gt;&lt;p&gt;C、背景绘制&lt;\/p&gt;&lt;p&gt;D、后期拍摄&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"如果说动画是赋予造型符号生命意义的艺术，那么原画就是赋予本来没有活力的符号以生命和灵魂过程的第一步，即关键瞬间的确定。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":53,"questiontype":1,"question":"52、（）类似风景绘画，但是存在一个重要差异，即动画背景是一个活动的窗口。动画背景是一个空间世界的局部，这个世界的主体是角色。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、故事板设计&lt;\/p&gt;&lt;p&gt;B、原画设计&lt;\/p&gt;&lt;p&gt;C、背景绘制&lt;\/p&gt;&lt;p&gt;D、后期拍摄&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"C","questiondescribe":"背景绘制类似风景绘画，但是存在一个重要差异，即动画背景是一个活动的窗口。动画背景是一个空间世界的局部，这个世界的主体是角色。选C。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":54,"questiontype":1,"question":"53、立体动画的第一本教科书是（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、《动画电影技术》&lt;\/p&gt;&lt;p&gt;B、《木偶动画电影的历史和技术》&lt;\/p&gt;&lt;p&gt;C、《三维动画设计与制作》&lt;\/p&gt;&lt;p&gt;D、《三维动画实训》&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"立体动画的第一本教科书是《木偶动画电影的历史和技术》，这本书详细讲述了立体动画电影的历史、创作原理和技术流程。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":55,"questiontype":1,"question":"54、被誉为“动画之父”的是（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、埃米尔·雷诺&lt;\/p&gt;&lt;p&gt;B、约瑟夫·普拉托&lt;\/p&gt;&lt;p&gt;C、约翰·A·帕瑞斯&lt;\/p&gt;&lt;p&gt;D、彼德·马克·罗葛特&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"法国人埃米尔·雷诺被称为“动画之父”。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":56,"questiontype":1,"question":"55、《关于移动物体的视觉暂留现象》是（）著作的。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、埃米尔·雷诺&lt;\/p&gt;&lt;p&gt;B、约瑟夫·普拉托&lt;\/p&gt;&lt;p&gt;C、约翰·A·帕瑞斯&lt;\/p&gt;&lt;p&gt;D、彼德·马克·罗葛特&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"D","questiondescribe":"英国人彼德·马克·罗葛特1824年著作了《关于移动物体的视觉暂留现象》的科学研究论文及相关实验。选D。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":57,"questiontype":1,"question":"56、（）是以观众和市场为目标创作的故事类动画片。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、主流动画&lt;\/p&gt;&lt;p&gt;B、商业广告动画&lt;\/p&gt;&lt;p&gt;C、非主流动画&lt;\/p&gt;&lt;p&gt;D、影院动画&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"主流动画是以观众和市场为目标创作的故事类动画片。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":58,"questiontype":1,"question":"57、法国人埃米尔.科尔用摄影机上的（）技术拍摄了世界上第一部动画系列影片《幻影集》。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、升降&lt;\/p&gt;&lt;p&gt;B、旋转&lt;\/p&gt;&lt;p&gt;C、变焦&lt;\/p&gt;&lt;p&gt;D、停格&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"D","questiondescribe":"埃米尔·科尔的作品《幻影集》这部影片是运用停格拍摄技术，表现不断变化的图像拍摄出来的。选D。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":59,"questiontype":1,"question":"58、动画作品在世界上最早出现在电视上是（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、迪斯尼&lt;\/p&gt;&lt;p&gt;B、万古蟾&lt;\/p&gt;&lt;p&gt;C、手冢治虫&lt;\/p&gt;&lt;p&gt;D、宫崎骏&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"动画作品在世界上最早出现在电视上是迪士尼的动画片。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":60,"questiontype":1,"question":"59、由爱德华.麦博里基发明的，被称为“第一架动态景象放映机”是（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、幻透镜&lt;\/p&gt;&lt;p&gt;B、旋转画盘&lt;\/p&gt;&lt;p&gt;C、变焦实用镜&lt;\/p&gt;&lt;p&gt;D、回转画筒&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"1877年至1879年间，爱德华.麦博里基首先将一套马在奔跑的连续照片搬上幻透镜，随后又改良了艾米尔.雷诺的装置，发明了“变焦实用镜”，被称为“第一架动态景象放映机”。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":61,"questiontype":1,"question":"60、大约４个场景构成矛盾的起因：希伯来人受苦的场面，躲避捕杀的场面，母子生死离别的场面，摇篮在尼罗河漂流的场面以及王后发现摇篮后的场面构成一个相对完整的事件。是（）动画作品中的片段。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、《埃及王子》&lt;\/p&gt;&lt;p&gt;B、《圣诞夜惊魂》&lt;\/p&gt;&lt;p&gt;C、《飞天巨桃历险记》&lt;\/p&gt;&lt;p&gt;D、《玩具总动员》&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"《埃及王子》的第一段落，大约４个场景构成矛盾的起因：希伯来人受苦的场面，躲避捕杀的场面，母子生死离别的场面，摇篮在尼罗河漂流的场面以及王后发现摇篮后的场面构成一个相对完整的事件。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":62,"questiontype":1,"question":"61、每一种艺术都有自己的（），动画作品的（）基于一个关键性技术，这个技术被西方理论界视为“上帝之手”。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、独特性&lt;\/p&gt;&lt;p&gt;B、独创性&lt;\/p&gt;&lt;p&gt;C、独立性&lt;\/p&gt;&lt;p&gt;D、特殊性&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"每一种艺术都有自己的独创性，动画作品的独创性基于一个关键性技术，这个技术被西方理论界视为“上帝之手”，这个理论的依据是“上帝创造了人类世界的假说”。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":63,"questiontype":1,"question":"62、美国动画片史上第一个有性格魅力的动画人物是（）","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、米老鼠&lt;\/p&gt;&lt;p&gt;B、菲利克斯猫&lt;\/p&gt;&lt;p&gt;C、机器猫&lt;\/p&gt;&lt;p&gt;D、加菲猫&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"美国动画片史上第一个有性格魅力的动画人物是米老鼠。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":64,"questiontype":1,"question":"63、动画的视觉特征有具象的、非具象的、立体的与虚拟的。是说的视觉形象特质的（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、符号特征&lt;\/p&gt;&lt;p&gt;B、性格特征&lt;\/p&gt;&lt;p&gt;C、心理活动&lt;\/p&gt;&lt;p&gt;D、运动特征&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"视觉形式特征的符号特性：动画的视觉符号有具象的、非具象的、立体的与虚拟的。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":65,"questiontype":1,"question":"64、动画是以位移和变形的方式呈现意思，即符号位置与形状的有机变化是传达意义的关键。是说的视觉形象特质的（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、符号特征&lt;\/p&gt;&lt;p&gt;B、性格特征&lt;\/p&gt;&lt;p&gt;C、心理活动&lt;\/p&gt;&lt;p&gt;D、运动特征&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"D","questiondescribe":"视觉形式特征的运动特性：动画是以位移和变形的方式呈现意思，即符号位置与形状的有机变化是传达意义的关键。选D。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":66,"questiontype":1,"question":"65、（）是指电脑里生成的无材料动画形象，有具象的三维动画形象符号，也有非具象的三维或二维的形象符号。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、材料符号&lt;\/p&gt;&lt;p&gt;B、形象符号&lt;\/p&gt;&lt;p&gt;C、虚拟符号&lt;\/p&gt;&lt;p&gt;D、特征符号&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"C","questiondescribe":"虚拟符号是指电脑里生成的无材料动画形象，有具象的三维动画形象符号，也有非具象的三维或二维的形象符号。选C。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":67,"questiontype":1,"question":"66、（）在这里是指材料化过程，即角色、情节、动作、环境、服饰道具及所有在银幕上出现的内容全部固定在某种材料上面成为待拍摄的半成品，包括各种传统造型艺术手法制作的画面或模型。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、分镜故事板&lt;\/p&gt;&lt;p&gt;B、分解运动过程&lt;\/p&gt;&lt;p&gt;C、影像加工&lt;\/p&gt;&lt;p&gt;D、拍摄技术&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"C","questiondescribe":"影像加工技术在这里是指材料化过程，即角色、情节、动作、环境、服饰道具及所有在银幕上出现的内容全部固定在某种材料上面成为待拍摄的半成品，包括各种传统造型艺术手法制作的画面或模型。选C。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":68,"questiontype":1,"question":"67、（）的方法是为了对真理诉求的实现而采纳的步骤和途径，研究动画自然需要正确方法探索动画艺术的真理。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、思想思考&lt;\/p&gt;&lt;p&gt;B、观测考查&lt;\/p&gt;&lt;p&gt;C、学术研究&lt;\/p&gt;&lt;p&gt;D、实验探索&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"C","questiondescribe":"学术研究的方法是为了对真理诉求的实现而采纳的步骤和途径，研究动画自然需要正确方法探索动画艺术的真理。选C。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":69,"questiontype":1,"question":"68、（）可以为我们发现问题节约很多成本，其除了本身的学术价值以外，还能够告诉我们学术研究的各种意义，包括学者对真理的态度和信念都会流露在字里行间。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、文献阅读&lt;\/p&gt;&lt;p&gt;B、作品解读&lt;\/p&gt;&lt;p&gt;C、上网搜索&lt;\/p&gt;&lt;p&gt;D、观看影片&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"文献阅读可以为我们发现问题节约很多成本，尤其是经典文献的阅读。经典文献除了本身的学术价值以外，还能够告诉我们学术研究的各种意义，包括学者对真理的态度和信念都会流露在字里行间。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":70,"questiontype":1,"question":"69、（）通常是发现研究对象和问题的最佳方式。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、文献阅读&lt;\/p&gt;&lt;p&gt;B、作品解读&lt;\/p&gt;&lt;p&gt;C、上网搜索&lt;\/p&gt;&lt;p&gt;D、观看影片&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"作品文本解读通常是发现研究对象和问题的最佳方式，就像人类学家通过解读远古时代遗骸发现地球上某个部落突然消失的原因，同时也为人类学其他方面的研究提供了新的证据。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":71,"questiontype":1,"question":"70、1961年，中国第一部水墨动画片是（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、《小蝌蚪找妈妈》&lt;\/p&gt;&lt;p&gt;B、《聪明的鸭子》&lt;\/p&gt;&lt;p&gt;C、《猪八戒吃西瓜》&lt;\/p&gt;&lt;p&gt;D、《牧笛》&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"中国第一部水墨动画片是《小蝌蚪找妈妈》（1960年）：五六十年代的中国水墨动画是世界动画界的珍宝，《小蝌蚪找妈妈》就是代表作之一，取材于齐白石的鱼虾形象，奠定了影片的美术水准。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":72,"questiontype":1,"question":"71、1941年万氏兄弟摄制大型动画片（）是中国也是亚洲的第一部动画长片。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、《龟兔赛跑》&lt;\/p&gt;&lt;p&gt;B、《皇帝梦》&lt;\/p&gt;&lt;p&gt;C、《铁扇公主》&lt;\/p&gt;&lt;p&gt;D、《神笔》&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"C","questiondescribe":"1941年万氏兄弟摄制大型动画片《铁扇公主》是中国也是亚洲的第一部动画长片。选C。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":73,"questiontype":1,"question":"72、迪斯尼公司于1995年与皮克斯公司推出的完全用电脑制作的动画电影是（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、《埃及王子》&lt;\/p&gt;&lt;p&gt;B、《圣诞夜惊魂》&lt;\/p&gt;&lt;p&gt;C、《飞天巨桃历险记》&lt;\/p&gt;&lt;p&gt;D、《玩具总动员》&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"D","questiondescribe":"迪斯尼公司于1995年与皮克斯公司推出的完全用电脑制作的动画电影是《玩具总动员》。选D。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":74,"questiontype":1,"question":"73、1957年4月1日，中国第一家独立摄制美术片的专业厂是（）美术制片厂。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、东北&lt;\/p&gt;&lt;p&gt;B、上海&lt;\/p&gt;&lt;p&gt;C、长春&lt;\/p&gt;&lt;p&gt;D、北京&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"1957-1965年是中国动画片第一个繁荣时期。1957年，上海美术电影制片厂建立，使中国有了第一家独立摄制美术片的专业厂。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":75,"questiontype":1,"question":"74、（）主要是指作为动画专业学生必须具备的基本知识，通常是人文社科和艺术理论范畴的经典知识。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、专业课程&lt;\/p&gt;&lt;p&gt;B、实验课程&lt;\/p&gt;&lt;p&gt;C、理论课程&lt;\/p&gt;&lt;p&gt;D、学科基础课程&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"D","questiondescribe":"学科基础课程主要是指作为动画专业学生必须具备的基本知识，通常是人文社科和艺术理论范畴的经典知识。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":76,"questiontype":1,"question":"75、《大闹天宫》美术设计中负责人物造型的人是（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、张正宇&lt;\/p&gt;&lt;p&gt;B、张光宇&lt;\/p&gt;&lt;p&gt;C、李克弱&lt;\/p&gt;&lt;p&gt;D、万超尘&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"《大闹天宫》美术设计中负责人物造型的人是张光宇。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":77,"questiontype":1,"question":"76、动画与（）几乎是同时诞生，它们共享动态视觉艺术的基本原理。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、电视&lt;\/p&gt;&lt;p&gt;B、收音机&lt;\/p&gt;&lt;p&gt;C、电影&lt;\/p&gt;&lt;p&gt;D、光盘&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"C","questiondescribe":"动画与电影几乎是同时诞生，它们共享动态视觉艺术的基本原理。动画制作与电影制作最初只是工艺的差别，后来各自有了语言学方面的发展和形式独立性方面的造诣。选C。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":78,"questiontype":1,"question":"77、动画（）是学习动画的核心内容，所有其他知识都围绕技术掌握的需要。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、绘画技巧&lt;\/p&gt;&lt;p&gt;B、鉴赏能力&lt;\/p&gt;&lt;p&gt;C、学习能力&lt;\/p&gt;&lt;p&gt;D、专业技术&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"D","questiondescribe":"动画专业技术内容包括动画创作流程的各个环节，动画的专业技术课程应该教会学生如何掌握动画知识体系中的每一个技术问题，如何通过技术手段来表达思想、传递信息，是学习动画的核心内容。选D。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":79,"questiontype":1,"question":"78、（）除了将编剧的工作转化成可视可听的动画艺术造型语言之外，还要负责动画片生产过程所有环节的把关，是生产流程全部工序的规划者和总监督。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、编剧&lt;\/p&gt;&lt;p&gt;B、导演&lt;\/p&gt;&lt;p&gt;C、美术总监&lt;\/p&gt;&lt;p&gt;D、场务&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"导演除了将编剧的工作转化成可视可听的动画艺术造型语言之外，还要负责动画片生产过程所有环节的把关，是生产流程全部工序的规划者和总监督。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":80,"questiontype":1,"question":"79、（）负责整个动画影片的视觉风格，同时要在文学剧本基础上制定未来影片的关键场景气氛图。美术总监还要负责指导造型设计和背景绘制。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、编剧&lt;\/p&gt;&lt;p&gt;B、导演&lt;\/p&gt;&lt;p&gt;C、美术总监&lt;\/p&gt;&lt;p&gt;D、场务&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"C","questiondescribe":"美术总监负责整个动画影片的视觉风格，同时要在文学剧本基础上制定未来影片的关键场景气氛图。美术总监还要负责指导造型设计和背景绘制。选C。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":81,"questiontype":1,"question":"80、动画片生产的（）是非常关键的环节，这个环节是艺术设想和艺术实现的转折点，起步顺利的前期也有可能毁于于此。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、前期&lt;\/p&gt;&lt;p&gt;B、中期&lt;\/p&gt;&lt;p&gt;C、后期&lt;\/p&gt;&lt;p&gt;D、尾期&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"B","questiondescribe":"动画片生产的中期是非常关键的环节，这个环节是艺术设想和艺术实现的转折点，起步顺利的前期也有可能毁于缺乏审美的中期设计。选B。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":82,"questiontype":1,"question":"81、（）负责全部背景绘制的总体效果把握，而背景画家则负责绘制每一个镜头需要的环境。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、背景总监&lt;\/p&gt;&lt;p&gt;B、摄影监督&lt;\/p&gt;&lt;p&gt;C、色彩指定员&lt;\/p&gt;&lt;p&gt;D、动画总监&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"A","questiondescribe":"背景总监负责全部背景绘制的总体效果把握，而背景画家则负责绘制每一个镜头需要的环境。选A。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":83,"questiontype":1,"question":"82、负责指定全片动画部分色彩调配，包括每个角色的肤色、服饰、道具在不同光源的影响下的变化色谱编号，还要制作示范标本的是（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、背景总监&lt;\/p&gt;&lt;p&gt;B、摄影监督&lt;\/p&gt;&lt;p&gt;C、色彩指定员&lt;\/p&gt;&lt;p&gt;D、动画总监&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"C","questiondescribe":"色彩指定员负责指定全片动画部分色彩调配，包括每个角色的肤色、服饰、道具在不同光源的影响下的变化色谱编号，还要制作示范标本。选C。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":84,"questiontype":1,"question":"83、负责拍摄前的成品审查，察看线条质量并对照色谱检查问题的是（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、音响监督&lt;\/p&gt;&lt;p&gt;B、描线师&lt;\/p&gt;&lt;p&gt;C、染色员&lt;\/p&gt;&lt;p&gt;D、校对员&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"D","questiondescribe":"校对员负责拍摄前的成品审查，察看线条质量并对照色谱检查问题。校对员还要负责核实每一个镜头画面的结构层次及相关部件的数量与匹配情况，以及镜头之间的连接方式是否明确无误。选D。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null}],"2":[{"questionid":95,"questiontype":2,"question":"94、动画概论教学效果的检验需要（）方面的考查。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、对生活的观察力、概括力和表现力&lt;\/p&gt;&lt;p&gt;B、对梦想的落实能力&lt;\/p&gt;&lt;p&gt;C、对手绘能力的应用&lt;\/p&gt;&lt;p&gt;D、对动画专业技术的应用能力&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"ABD","questiondescribe":"动画概论教学效果的检验需呀三个方面的考查：对对生活的观察力、概括力和表现力，对梦想的落实能力以及对动画专业技术的应用能力。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":96,"questiontype":2,"question":"95、动画专业的能力是综合性的，这种能力集中表现在（）方面。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、故事版绘制&lt;\/p&gt;&lt;p&gt;B、想象能力&lt;\/p&gt;&lt;p&gt;C、形象设计&lt;\/p&gt;&lt;p&gt;D、动作表现&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"ACD","questiondescribe":"动画专业的能力是综合性的，这种能力集中表现在故事版（画面分镜头设计）绘制、形象设计和动作表现三个方面。选ACD。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":97,"questiontype":2,"question":"96、动画造型设计包括（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、角色设计&lt;\/p&gt;&lt;p&gt;B、道具设计&lt;\/p&gt;&lt;p&gt;C、背景设计&lt;\/p&gt;&lt;p&gt;D、动作设计&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"ABD","questiondescribe":"动画造型设计包括角色设计、道具设计、动作设计等。选ABD。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":98,"questiontype":2,"question":"97、动画本体理论有哪些（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、商业特性&lt;\/p&gt;&lt;p&gt;B、形式特性&lt;\/p&gt;&lt;p&gt;C、审美特性&lt;\/p&gt;&lt;p&gt;D、原创特性&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"BCD","questiondescribe":"动画本体理论有：形式特性、审美特性和原创特性。选BCD。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":99,"questiontype":2,"question":"98、动画作为描述故事、表达思想的方法依托于广泛的文化知识和艺术技能。需要哪些素养（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、丰富的文化修养&lt;\/p&gt;&lt;p&gt;B、艺术知识&lt;\/p&gt;&lt;p&gt;C、剧作常识&lt;\/p&gt;&lt;p&gt;D、电影语言&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"ABCD","questiondescribe":"动画作为描述故事、表达思想的方法依托于广泛的文化知识和艺术技能。要具备丰富的文化修养和艺术知识，还要懂得剧作常识和电影语言。选ABCD。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":100,"questiontype":2,"question":"99、动画片的叙事方式可以归纳为（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、散文风格&lt;\/p&gt;&lt;p&gt;B、戏剧风格&lt;\/p&gt;&lt;p&gt;C、抒情风格&lt;\/p&gt;&lt;p&gt;D、寓意风格&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"ABCD","questiondescribe":"动画片的叙事方式可以归纳为散文风格、戏剧风格、抒情与寓意风格等，主流动画作品通常遵循戏剧叙事的一般规律和电影思维的一般模式描述故事。选ABCD。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null},{"questionid":101,"questiontype":2,"question":"100、动画审美特性有（）。","questionuserid":0,"questionusername":"","questionlastmodifyuser":"","questionselect":"&lt;p&gt;A、情操美&lt;\/p&gt;&lt;p&gt;B、设计美&lt;\/p&gt;&lt;p&gt;C、次序美&lt;\/p&gt;&lt;p&gt;D、结构美&lt;\/p&gt;","questionselectnumber":4,"questionanswer":"AC","questiondescribe":"动画审美特性有：情操美和次序美。选AC。","questionknowsid":"a:1:{i:0;a:2:{s:7:\"knowsid\";s:1:\"6\";s:5:\"knows\";s:12:\"动画概论\";}}","questioncreatetime":1545727767,"questionstatus":1,"questionhtml":"","questionparent":0,"questionsequence":0,"questionlevel":0,"questiondeler":null,"questiondeltime":null}]},"questionrows":[]},"examsessionuseranswer":null,"examsessionstarttime":1560223208,"examsessiontime":90,"examsessionstatus":0,"examsessionscore":"0.0","examsessionscorelist":null,"examsessionissave":0,"examsessiontimelist":null},"lefttime":0,"donumber":0}}]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    back(){
        this.$router.go(-1)
    },
    modelChoo(e){
        this.headerBtn = e
    },
    itemMenu(){
        this.menuShow = !this.menuShow;
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped>

.test-header{
    width: 100%;
    height: 1.8rem;
    padding: .3rem .5rem;
    background-color: rgb(245, 245, 245);
    border-bottom: 1px solid #ccc;
}
.back-img{
    float: left;
    height: 1rem;
    width: 1rem;
}
.set-img{
    float: right;
    height: 1rem;
    width: 1rem;
}
.header-btn{
    margin: 0 auto;
    height: 1.1rem;
    width: 8.1rem;
    border: 1px solid #000;
    border-radius: 5px;
}
.in-b{
    font-size: .6rem;
    float: left;
    width: 4rem;
    text-align: center;
    line-height: 1.1rem;
}
.bg-choo{
    background: #000;
    color: #fff;
}
.test-container{
    background: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
}
.test-title{
    font-size: .8rem;
    padding: .5rem;
    line-height: 1.2rem;
    letter-spacing: 1px;
}
.test-tag{
    display: inline-block;
    background: #5ebf83;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    color: #fff;
    font-size: .4rem;
    line-height: .8rem;
    padding: 0 .2rem;
    margin-right: .3rem;
}
.test-opt{
    height: 100%;
    background: #fff;
    padding-left: .3rem;
}
.opt-li{
    font-size: .7rem;
    height: 2rem;
    padding-top: .5rem;
}
.opt-li-i{
    display: inline-block;
    height: 1rem;
    width: 1rem;
    text-align: center;
    line-height: 1rem;
    box-shadow: 2px 3px 10px #ccc;
    border-radius: 50%;
    margin-right: .5rem;
}
.test-footer{
    height: 2rem;
    background: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ccc;
    font-size: .6rem;
    padding: .5rem;
}
.shouc-img{
    width: .8rem;
    height: .8rem;
    vertical-align: bottom;
    padding-right: .2rem;
}
.footer-shouc{
    float: left;
    height: .8rem;
}
.shouc-txt{
    line-height: .8rem;
}
.footer-ce{
    float: right;
}
.correct-num{
    color: #26c27b;
}
.error-num{
    color: #fb6e52;
}
.footer-menu{
    float: right;
    padding-left: 1.5rem;
}
.menu-mask{
    height: 100%;
    width: 100%;
    position: fixed;
    background: #000;
    opacity: .3;
    top: 0;
    left: 0;
}
.menu-container{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70%;
    background: #fff;
}
.menu-top{
    height: 2rem;
    background: #fff;
    width: 100%;
    position: absolute;
    top: 0;
    border-top: 1px solid #ccc;
    font-size: .6rem;
    padding: .5rem;
}
.menu-tittle{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    background: #f5f5f5;
    font-size: .7rem;
    padding-top: 2rem;
    padding-left: .4rem;
}
.flex-demo {
    text-align: center;
    color: #888;
    font-size: .8rem;
    border: 1px solid #888;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    margin: .2rem 0;
}
.tittle-container{
    width: 100%;
    padding-top: 2rem;
}
.mask-hid{
    display: none;
}
</style>
