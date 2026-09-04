export const holeLayouts = {
  3:[{x:25,y:40},{x:75,y:40},{x:50,y:75}],
  4:[{x:25,y:36},{x:75,y:36},{x:25,y:74},{x:75,y:74}],
  6:[{x:20,y:32},{x:50,y:32},{x:80,y:32},{x:20,y:72},{x:50,y:72},{x:80,y:72}],
  8:[{x:14,y:30},{x:38,y:30},{x:62,y:30},{x:86,y:30},{x:14,y:72},{x:38,y:72},{x:62,y:72},{x:86,y:72}],
  9:[{x:18,y:27},{x:50,y:27},{x:82,y:27},{x:18,y:53},{x:50,y:53},{x:82,y:53},{x:18,y:79},{x:50,y:79},{x:82,y:79}],
  12:Array.from({length:12},(_,i)=>({x:12+(i%4)*25.3,y:24+Math.floor(i/4)*28}))
};

export const defaultProject = {
  version:1,
  meta:{id:crypto.randomUUID?.()||String(Date.now()),title:'Бей крота — Учебная игра',language:'ru'},
  design:{theme:'forest',accent:'#7c5cff',button:'#7c5cff',text:'#ffffff',radius:24,font:'Manrope',holeStyle:'stones',hud:{background:'#11172d',border:'#ffffff',timerBorder:'#55dfd0',scoreBorder:'#ffd75e',livesBorder:'#ff6d9e',text:'#ffffff'},
    screens:{
      title:{font:'Manrope',titleSize:48,text:'#ffffff',background:'#0e1529',border:'#927bff',glow:'#7657e8',button:'#7657e8',buttonText:'#ffffff',buttonGlow:'#7657e8'},
      question:{font:'Manrope',titleSize:30,text:'#ffffff',background:'#121a31',border:'#7060cb',glow:'#7657e8',button:'#7657e8',buttonText:'#ffffff',buttonGlow:'#7657e8',answerBackground:'#202947',inputBackground:'#091020'},
      correct:{font:'Manrope',titleSize:42,text:'#ffffff',background:'#103329',border:'#54e3b2',glow:'#32c997',button:'#20b486',buttonText:'#ffffff',buttonGlow:'#32c997'},
      wrong:{font:'Manrope',titleSize:42,text:'#ffffff',background:'#351728',border:'#ff629f',glow:'#e83e7f',button:'#df3977',buttonText:'#ffffff',buttonGlow:'#e83e7f'},
      win:{font:'Manrope',titleSize:46,text:'#ffffff',background:'#102b27',border:'#54e3b2',glow:'#32c997',button:'#20b486',buttonText:'#ffffff',buttonGlow:'#32c997'},
      lose:{font:'Manrope',titleSize:46,text:'#ffffff',background:'#301827',border:'#ff629f',glow:'#e83e7f',button:'#df3977',buttonText:'#ffffff',buttonGlow:'#e83e7f'}
    }},
  game:{duration:60,lives:3,lifeIcon:'❤️',targetScore:80,pauseDuringQuestion:true,showTimer:true,showScore:true,showLives:true},
  background:{preset:'adventure',custom:null,fit:'cover'},
  holes:holeLayouts[6],
  characters:[
    {id:'mole',name:'Крот',emoji:'🐹',artIndex:0,kind:'normal',points:10,scale:1},
    {id:'frog',name:'Лягушка',emoji:'🐸',artIndex:1,kind:'bonus',points:20,scale:1},
    {id:'bomb',name:'Бомба',emoji:'💣',toolArtIndex:0,kind:'danger',points:-10,scale:1}
  ],
  hitItem:{name:'Молоток',emoji:'🔨',toolArtIndex:3,size:70,duration:360,exitAnimation:'sink'},
  editorLayout:{hero:{x:50,y:72,size:14},danger:{x:50,y:72,size:14},hammer:{x:75,y:62,size:22}},
  objectOffsets:{hero:{x:0,y:0},danger:{x:0,y:0}},
  spawnSettings:{mode:'random',minInterval:900,maxInterval:1700,visibleFor:1600,maxActive:2},
  spawnTimeline:[{time:2,character:'mole',hole:0},{time:5,character:'frog',hole:3},{time:8,character:'bomb',hole:1}],
  questions:[
    {id:'q1',type:'single',text:'Сколько будет 8 × 7?',options:['48','54','56','64'],correct:['56'],points:20},
    {id:'q2',type:'input',text:'Столица России?',options:[],correct:['Москва'],points:20},
    {id:'q3',type:'multiple',text:'Выберите гласные буквы',options:['А','Б','О','Т'],correct:['А','О'],points:20},
    {id:'q4',type:'order',text:'Расставьте числа по возрастанию',options:['12','3','8','1'],correct:['1','3','8','12'],points:20}
  ],
  screens:{subtitle:'Ударь крота и ответь на вопрос',instruction:'Попадай по кротам, отвечай на задания и не нажимай на бомбы!',playButton:'Начать игру',correctTitle:'Правильно!',wrongTitle:'Попробуй ещё раз',winTitle:'Отличная работа!',loseTitle:'Попробуй ещё раз!'},
  sounds:{enabled:true,volume:.6,spawn:true,hit:true,correct:true,wrong:true,win:true,lose:true},
  assets:[], integrations:{giphyApiKey:''}
};
