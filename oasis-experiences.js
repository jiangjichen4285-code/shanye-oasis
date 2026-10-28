/* 山野 OASIS — room specifications are design proposals, not live inventory. */
const art={hero:'assets/hero-reset.webp',sleep:'assets/sleep.webp',soak:'assets/soak.webp',escape:'assets/escape.webp',ritual:'assets/sleep-ritual.webp',spa:'assets/relax-spa.webp',walk:'assets/forest-walk.webp',aroma:'assets/aroma-detail.webp'};
const mediaRoot='assets/oasis-v6/';
const routes=[
 {id:'rest',name:'松风入梦',en:'PINE & SLUMBER',image:mediaRoot+'route-rest.webp',subtitle:'安睡与身体舒缓',fit:'想补充睡眠、偏爱安静，希望减少周末安排的人。',duration:'两晚山居，约 48 小时；身体舒缓建议 45–60 分钟。',description:'以一夜好眠为起点。把灯光调柔，让晚安安排与身体舒缓之间，留出安静的时间。',included:'晚安偏好沟通、淡香或无香选择、身体舒缓预约。',fee:'咨询确认；住宿与可选活动分别报价。',conditions:'身体舒缓需提前预约；服务项目、用品与开放时段以正式确认信息为准。',recommended:['night','body']},
 {id:'bath',name:'云水慢沐',en:'WATER & WARMTH',image:mediaRoot+'route-bath.webp',subtitle:'温水泡浴与茶歇',fit:'喜欢温水泡浴，希望舒展身体，愿意留出休息时间的人。',duration:'两晚山居，约 48 小时；单次泡浴按设施指引安排。',description:'在温水里慢下来，泡浴后喝水、歇一歇，再留一席茶，让午后从容展开。',included:'泡浴准备与使用说明、泡后补水休息、茶歇预约。',fee:'咨询确认；泡浴、茶歇及住宿分别说明费用。',conditions:'泡浴设施、水体类型与开放时间待确认；不承诺天然温泉或客房内私汤。',recommended:['bath','tea']},
 {id:'walk',name:'循径听风',en:'PATH & BREEZE',image:mediaRoot+'route-walk.webp',subtitle:'轻步漫游与林间停留',fit:'久坐室内、想接近自然，偏爱轻松步行的人。',duration:'两晚山居，约 48 小时；散步建议 60–90 分钟。',description:'沿山径走一段，听树叶与风。可以停步、拍照、喝茶，按体力决定走多远。',included:'步道建议、天气与路况提示、休息点及茶歇沟通。',fee:'咨询确认；接驳、茶歇及住宿分别说明费用。',conditions:'受雨雾、路况与季节影响；不适合外出时，可沟通改为室内茶歇。',recommended:['walk','tea']},
 {id:'tea',name:'松间茶叙',en:'TEA & STILLNESS',image:mediaRoot+'route-tea.webp',subtitle:'茶席品饮与草木手作',fit:'喜欢喝茶、安静手作，希望与同伴慢慢相处的人。',duration:'两晚山居，约 48 小时；茶席 30–45 分钟，草木手作 45–60 分钟。',description:'在松影里坐一坐，喝一席茶，再用叶片做一枚书签。把一个午后留给手边的小事。',included:'山景茶席、茶饮偏好沟通、草木书签手作预约。',fee:'咨询确认；茶饮、手作材料与住宿分别报价。',conditions:'茶席与手作需预约；茶品、材料和师资待确认，雨天优先安排室内。',recommended:['tea','leaf']}
];
const rooms=[
 {id:'view-double',name:'山景大床房',en:'MOUNTAIN VIEW',area:36,bed:'1 张 1.8 米大床',capacity:2,guests:'1–2 位',intro:'一张大床、一处阅读角，让目光停在山景里。',facilities:['山景窗','阅读角','独立卫浴','茶饮角'],fee:'价格待定'},
 {id:'courtyard-twin',name:'庭院双床房',en:'COURTYARD TWIN',area:42,bed:'2 张 1.2 米单人床',capacity:2,guests:'2 位',intro:'为结伴同行留出各自的床铺，也留一处可以闲坐的庭院。',facilities:['双床布局','庭院茶座','独立卫浴','行李收纳'],fee:'价格待定'},
 {id:'family-suite',name:'山居家庭套房',en:'FAMILY SUITE',area:62,bed:'1 张 1.8 米大床 + 2 张 1 米单床',capacity:4,guests:'2–4 位',intro:'两处睡眠空间与独立起居区，让家人相聚，也能各自休息。',facilities:['起居区','两处睡眠空间','家庭茶座','独立卫浴'],fee:'价格待定'}
];
const roomThemes={
 rest:{name:'松风入梦',description:'米白床品、柔和灯光与深色窗帘，让空间更适合安静休息。',note:'以安睡为主题的软装设计；无香偏好可在预约时沟通。'},
 bath:{name:'云水慢沐',description:'暖砂色织物、石质肌理与浴后茶饮角，让房间接续泡浴后的松弛。',note:'以泡浴后休息为主题；客房不承诺配备私汤或独立泡池。'},
 walk:{name:'循径听风',description:'苔绿与木色呼应窗外林景，茶座与休息椅迎接散步归来。',note:'以山间步行为主题的空间设计，具体步道与开放条件另行确认。'},
 tea:{name:'松间茶叙',description:'陶器、亚麻与木质茶座，把品茶和草木手作的安静延伸进房间。',note:'茶具与书签为主题设计元素，具体配置与手作材料以确认信息为准。'}
};
function roomForRoute(room,routeId='rest'){
 const key=roomThemes[routeId]?routeId:'rest',theme=roomThemes[key];
 const captions=room.id==='family-suite'?['整体布局与主卧','窗边反向视角','第二睡眠区与起居空间']:room.id==='courtyard-twin'?['双床与庭院全景','窗边反向视角','庭院入口与双床布局']:['大床与山景全景','窗边反向视角','阅读角与茶座'];
 const gallery=captions.map((caption,i)=>({src:mediaRoot+`room-${key}-${room.id}-0${i+1}.webp`,caption}));
 return {...room,image:gallery[0].src,gallery,theme,key,themeIntro:theme.description+' '+room.intro};
}
const activities=[
 {id:'night',name:'晚安安排',image:mediaRoot+'activity-night-01.webp',duration:'建议 20–30 分钟',text:'提前沟通灯光与香气偏好，也可以选择完全无香。',conditions:'用品、香气选项与是否包含在房费中待确认。'},
 {id:'body',name:'身体舒缓',image:mediaRoot+'activity-body-01.webp',duration:'建议 45–60 分钟',text:'以肩颈和背部的轻柔放松为主，预约时沟通力度。',conditions:'需提前预约；服务人员、项目与开放时段待确认。'},
 {id:'bath',name:'温水泡浴',image:mediaRoot+'activity-bath-01.webp',duration:'按设施指引安排',text:'备好浴巾与使用说明，泡浴后留出补水和休息时间。',conditions:'以实际设施和开放时段为准，水体类型待确认。'},
 {id:'walk',name:'林间散步',image:mediaRoot+'activity-walk-01.webp',duration:'建议 60–90 分钟',text:'沿轻松步道走走，按体力和天气决定距离与休息次数。',conditions:'受天气与路况影响，出发前确认步道是否开放。'},
 {id:'tea',name:'山景茶席',image:mediaRoot+'activity-tea-01.webp',duration:'建议 30–45 分钟',text:'在有遮蔽的观景位置品茶，留一段喝茶、闲坐的时间。',conditions:'茶品、茶点与供应时段待确认；雨天优先安排室内。'},
 {id:'leaf',name:'草木书签',image:mediaRoot+'activity-leaf-01.webp',duration:'建议 45–60 分钟',text:'用事先准备的叶片与纸材，做一枚可以带走的草木书签。',conditions:'使用事先准备的植物材料；材料、带领人员与可用时段待确认。'}
].map(a=>({...a,gallery:[{src:mediaRoot+`activity-${a.id}-01.webp`,caption:'体验空间'},{src:mediaRoot+`activity-${a.id}-02.webp`,caption:'细节与氛围'}]}));
const faqImages=['included','flexible','children','pets','weather','changes','availability'].map(id=>mediaRoot+`faq-${id}.webp`);
const schedule=[
 ['抵达','第一天午后','核对入住信息，了解房间、公共空间与当日可用设施。'],
 ['安顿','第一天傍晚','放好行李，确认用餐安排、活动时段和个人偏好。'],
 ['体验','第二天白天','按所选路线安排泡浴、舒缓或散步，活动之间留出休息。'],
 ['休息','第二天夜晚','减少额外安排，自行决定阅读、早睡或安静闲坐。'],
 ['离开','第三天上午','早餐、整理行李，按确认的退房时间从容启程。']
];
const faqs=[
 ['路线包含住宿和所有活动吗？','路线介绍是体验安排建议。房型、活动、餐食以及分别包含或另收费的项目，会在最终报价清单中逐项列明。'],
 ['可以不参加某项活动吗？','可以。在“活动安排”中加入或移除项目，也可以不选活动，只保留住宿意向。受预约和设施条件限制的项目需另外确认。'],
 ['可以带孩子吗？','房型设计中有适合 2–4 位的家庭套房。儿童年龄要求、加床、早餐与活动适用年龄仍需在实际房源与服务确定后说明。'],
 ['可以带宠物吗？','宠物政策尚未确定。请在预约备注中写明宠物种类、数量与体型，待确认是否接待及相关费用。'],
 ['下雨会影响行程吗？','林间散步会根据雨雾和路况调整。可以沟通改为室内茶歇、休息或其他当期可提供的活动。'],
 ['取消或改期有什么规则？','价格与取消、改期条款尚未确定。正式预订前需列明可退期限、扣费方式与特殊日期规则，确认后再付款。'],
 ['如何确认房态和价格？','当前为设计原型，未接入实时房态或收款。完成预约信息后会生成本地意向清单，实际房型、房态、费用和联系渠道确定后才能正式预订。']
];


