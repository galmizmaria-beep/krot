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
  design:{theme:'forest',accent:'#7c5cff',button:'#7c5cff',text:'#ffffff',radius:24,font:'Manrope'},
  game:{duration:60,lives:3,targetScore:80,pauseDuringQuestion:true,showTimer:true,showScore:true,showLives:true},
  background:{preset:'garden',custom:null,fit:'cover'},
  holes:holeLayouts[6],
  characters:[
    {id:'mole',name:'Крот',emoji:'🦫',kind:'normal',points:10,scale:1},
    {id:'frog',name:'Лягушка',emoji:'🐸',kind:'bonus',points:20,scale:1},
    {id:'bomb',name:'Бомба',emoji:'💣',kind:'danger',points:-10,scale:1}
  ],
  hitItem:{name:'Молоток',emoji:'🔨',size:70,duration:260},
  spawnSettings:{mode:'random',minInterval:900,maxInterval:1700,visibleFor:1600,maxActive:2},
  spawnTimeline:[{time:2,character:'mole',hole:0},{time:5,character:'frog',hole:3},{time:8,character:'bomb',hole:1}],
  questions:[
    {id:'q1',type:'single',text:'Сколько будет 8 × 7?',options:['48','54','56','64'],correct:['56'],points:20},
    {id:'q2',type:'input',text:'Столица России?',options:[],correct:['Москва'],points:20},
    {id:'q3',type:'multiple',text:'Выберите гласные буквы',options:['А','Б','О','Т'],correct:['А','О'],points:20},
    {id:'q4',type:'order',text:'Расставьте числа по возрастанию',options:['12','3','8','1'],correct:['1','3','8','12'],points:20}
  ],
  screens:{subtitle:'Ударь крота и ответь на вопрос',instruction:'Попадай по кротам, отвечай на задания и не нажимай на бомбы!',playButton:'Начать игру',winTitle:'Отличная работа!',loseTitle:'Попробуй ещё раз!'},
  sounds:{enabled:true,volume:.6}, assets:[]
};
