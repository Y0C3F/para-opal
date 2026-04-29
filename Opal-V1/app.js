const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

const DEFAULT_PRODUCTS = [
  {id:'p1',slug:'serum-hydratant-opal',cat:'face',brand:'Opal Derm',price:249,oldPrice:null,badge:'expert',stock:12,active:true,featured:true,img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85',name:{fr:'Sérum hydratant premium',ar:'سيروم ترطيب فاخر',en:'Premium hydrating serum'},desc:{fr:'Hydratation intense et éclat naturel.',ar:'ترطيب عميق وإشراقة طبيعية.',en:'Deep hydration and natural glow.'}},
  {id:'p2',slug:'creme-solaire-spf50',cat:'solar',brand:'Sun Luxe',price:179,oldPrice:219,badge:'promo',stock:24,active:true,featured:true,img:'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85',name:{fr:'Crème solaire SPF50+',ar:'كريم واقي من الشمس SPF50+',en:'SPF50+ sunscreen cream'},desc:{fr:'Protection élevée, fini invisible.',ar:'حماية عالية بلمسة غير مرئية.',en:'High protection, invisible finish.'}},
  {id:'p3',slug:'gel-nettoyant-doux',cat:'face',brand:'Pure Opal',price:139,oldPrice:null,badge:'bestseller',stock:30,active:true,featured:true,img:'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=900&q=85',name:{fr:'Gel nettoyant doux',ar:'جل تنظيف لطيف',en:'Gentle cleansing gel'},desc:{fr:'Nettoie sans agresser la barrière cutanée.',ar:'ينظف بلطف دون إضعاف حاجز البشرة.',en:'Cleanses without disrupting the skin barrier.'}},
  {id:'p4',slug:'huile-seche-corps',cat:'body',brand:'Maison Opal',price:199,oldPrice:null,badge:'new',stock:8,active:true,featured:true,img:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85',name:{fr:'Huile sèche satin corps',ar:'زيت جاف للجسم بلمسة حريرية',en:'Satin dry body oil'},desc:{fr:'Nourrit et sublime la peau.',ar:'يغذي البشرة ويمنحها نعومة راقية.',en:'Nourishes and enhances the skin.'}},
  {id:'p5',slug:'shampoing-dermatologique',cat:'hair',brand:'Capillaire Pro',price:159,oldPrice:null,badge:'bestseller',stock:18,active:true,featured:false,img:'https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?auto=format&fit=crop&w=900&q=85',name:{fr:'Shampoing dermatologique',ar:'شامبو Dermatologique',en:'Dermatological shampoo'},desc:{fr:'Confort du cuir chevelu.',ar:'راحة لفروة الرأس.',en:'Scalp comfort.'}},
  {id:'p6',slug:'lait-bebe-douceur',cat:'baby',brand:'Baby Opal',price:129,oldPrice:null,badge:'new',stock:20,active:true,featured:false,img:'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=85',name:{fr:'Lait bébé douceur',ar:'حليب ترطيب لطيف للرضيع',en:'Gentle baby lotion'},desc:{fr:'Soin tendre pour peau délicate.',ar:'عناية لطيفة للبشرة الحساسة.',en:'Tender care for delicate skin.'}}
];

const CATEGORIES = [
  {id:'all',icon:'✦',name:{fr:'Tout',ar:'الكل',en:'All'},desc:{fr:'Toute la sélection',ar:'كل الاختيارات',en:'All selection'}},
  {id:'face',icon:'✨',name:{fr:'Soins visage',ar:'العناية بالوجه',en:'Face care'},desc:{fr:'Sérums, crèmes et rituels.',ar:'سيرومات وكريمات وروتينات.',en:'Serums, creams and rituals.'}},
  {id:'body',icon:'💧',name:{fr:'Soins corps',ar:'العناية بالجسم',en:'Body care'},desc:{fr:'Textures sensorielles.',ar:'تركيبات لطيفة للجسم.',en:'Sensorial textures.'}},
  {id:'hair',icon:'〰️',name:{fr:'Cheveux',ar:'الشعر',en:'Hair'},desc:{fr:'Solutions capillaires expertes.',ar:'حلول متخصصة للشعر.',en:'Expert hair solutions.'}},
  {id:'baby',icon:'🍼',name:{fr:'Bébé & maman',ar:'الرضيع والأم',en:'Baby & mother'},desc:{fr:'Douceur et sécurité.',ar:'لطف وأمان.',en:'Softness and safety.'}},
  {id:'solar',icon:'☀️',name:{fr:'Solaire',ar:'واقي الشمس',en:'Sun care'},desc:{fr:'Protection SPF premium.',ar:'حماية شمسية فعالة.',en:'Premium SPF protection.'}}
];

const I18N = {
  fr:{products:'Produits',story:'Notre histoire',location:'Localisation',admin:'Admin',heroK:'Parapharmacie premium',heroT:'L’élégance du soin, l’exigence de la confiance.',heroS:'Une sélection raffinée de soins, beauté, bien-être et conseils experts — commandable directement via WhatsApp.',discover:'Découvrir nos produits',wa:'Commander via WhatsApp',storyK:'Brand Story',storyT:'Une maison de soin pensée avec exigence.',storyP:'Parapharmacie Opal réunit l’exigence du conseil, la beauté du soin et une sélection premium pensée pour votre quotidien.',cats:'Univers Opal',featured:'Produits vedettes',quizT:'Trouvez votre routine beauté',quizS:'Répondez à 3 questions rapides et découvrez une sélection recommandée.',start:'Lancer le quiz',why:'Pourquoi Opal',locT:'Localisation & horaires',open:'Ouvert maintenant',closed:'Fermé',cart:'Panier',empty:'Votre panier est vide.',checkout:'Envoyer la commande WhatsApp',total:'Total estimé',add:'Ajouter',search:'Rechercher un soin...',dashboard:'Dashboard'},
  ar:{products:'المنتجات',story:'قصتنا',location:'الموقع',admin:'الإدارة',heroK:'بارافارماسي راقية',heroT:'فخامة العناية… وثقة الاختيار.',heroS:'اختيار راقٍ من منتجات العناية والجمال والرفاهية، مع إمكانية الطلب مباشرة عبر واتساب.',discover:'اكتشف المنتجات',wa:'اطلب عبر واتساب',storyK:'قصة العلامة',storyT:'دار عناية صُممت بذوق وثقة.',storyP:'تجمع بارافارماسي أوبال بين دقة النصيحة وجمال العناية واختيار راقٍ يناسب يومك.',cats:'عوالم أوبال',featured:'منتجات مختارة',quizT:'اكتشف روتين العناية المناسب لك',quizS:'أجب عن ثلاثة أسئلة سريعة لتحصل على اقتراحات مناسبة.',start:'ابدأ الاختبار',why:'لماذا أوبال',locT:'الموقع وساعات العمل',open:'مفتوح الآن',closed:'مغلق',cart:'السلة',empty:'سلتك فارغة.',checkout:'إرسال الطلب عبر واتساب',total:'المجموع التقديري',add:'أضف',search:'ابحث عن منتج...',dashboard:'لوحة التحكم'},
  en:{products:'Products',story:'Our story',location:'Location',admin:'Admin',heroK:'Premium parapharmacy',heroT:'Where care meets quiet luxury.',heroS:'A refined selection of care, beauty and wellness essentials — ready to order on WhatsApp.',discover:'Discover products',wa:'Order on WhatsApp',storyK:'Brand Story',storyT:'A care house designed with quiet precision.',storyP:'Parapharmacie Opal combines trusted advice, beautiful care and a premium selection for everyday wellbeing.',cats:'Opal Worlds',featured:'Featured products',quizT:'Find your beauty routine',quizS:'Answer 3 quick questions and discover a recommended selection.',start:'Start quiz',why:'Why Opal',locT:'Location & opening hours',open:'Open now',closed:'Closed',cart:'Cart',empty:'Your cart is empty.',checkout:'Send WhatsApp order',total:'Estimated total',add:'Add',search:'Search care products...',dashboard:'Dashboard'}
};

const DEFAULT_SETTINGS = {
  logo:'assets/opal-logo.svg', accent:'#C9A96E', whatsapp:'+212600000000', phone:'+212 600 000 000', email:'contact@opal.ma',
  address:{fr:'Mohammedia, Maroc',ar:'المحمدية، المغرب',en:'Mohammedia, Morocco'},
  maps:'https://www.google.com/maps?q=Mohammedia%2C%20Morocco&output=embed',
  hours:{monday:{closed:false,open:'09:00',close:'20:00'},tuesday:{closed:false,open:'09:00',close:'20:00'},wednesday:{closed:false,open:'09:00',close:'20:00'},thursday:{closed:false,open:'09:00',close:'20:00'},friday:{closed:false,open:'09:00',close:'20:00'},saturday:{closed:false,open:'10:00',close:'18:00'},sunday:{closed:true,open:'00:00',close:'00:00'}}
};

let state = {
  lang: localStorage.getItem('opal_lang') || 'fr',
  products: JSON.parse(localStorage.getItem('opal_products') || 'null') || DEFAULT_PRODUCTS,
  settings: JSON.parse(localStorage.getItem('opal_settings') || 'null') || DEFAULT_SETTINGS,
  cart: JSON.parse(localStorage.getItem('opal_cart') || '[]'),
  admin: localStorage.getItem('opal_admin') === 'true',
  activeCat:'all'
};

function tr(k){return I18N[state.lang][k] || I18N.fr[k]}
function loc(obj){return obj[state.lang] || obj.fr || ''}
function save(){localStorage.setItem('opal_products',JSON.stringify(state.products));localStorage.setItem('opal_settings',JSON.stringify(state.settings));localStorage.setItem('opal_cart',JSON.stringify(state.cart));localStorage.setItem('opal_lang',state.lang);localStorage.setItem('opal_admin',state.admin?'true':'false')}
function setLang(l){state.lang=l;document.body.classList.toggle('rtl',l==='ar');document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';save();render()}
function cleanWa(n){return (n||'').replace(/\D/g,'')}
function money(n){return `${Number(n).toFixed(0)} MAD`}

function productCard(p){
  return `<article class="product-card glass">
    <div class="product-media">
      <img src="${p.img}" alt="${loc(p.name)}">
      ${p.badge?`<span class="badge">${p.badge}</span>`:''}
    </div>
    <div class="product-body">
      <div class="muted" style="font-size:12px;letter-spacing:.2em;text-transform:uppercase">${p.brand}</div>
      <h3>${loc(p.name)}</h3>
      <p class="muted">${loc(p.desc)}</p>
      <div style="display:flex;justify-content:space-between;align-items:end;gap:12px;margin-top:16px">
        <strong class="price">${money(p.price)}</strong>
        <button class="btn add-cart" data-id="${p.id}">${tr('add')}</button>
      </div>
    </div>
  </article>`
}

function renderParticles(){
  const hero = $('.hero');
  $$('.hero .particle').forEach(e=>e.remove());
  for(let i=0;i<34;i++){
    const s=document.createElement('span');s.className='particle';
    s.style.left=((i*37)%100)+'%';s.style.top=((i*53)%100)+'%';s.style.animationDuration=(9+(i%8))+'s';
    hero.appendChild(s);
  }
}

function render(){
  document.body.classList.toggle('rtl',state.lang==='ar');
  document.documentElement.dir = state.lang==='ar'?'rtl':'ltr';
  document.documentElement.lang = state.lang;
  document.documentElement.style.setProperty('--gold', state.settings.accent || '#C9A96E');
  $('#brandLogo').src = state.settings.logo || 'assets/opal-logo.svg';
  $('#adminBrandLogo').src = state.settings.logo || 'assets/opal-logo.svg';

  $$('[data-t]').forEach(el=>el.textContent=tr(el.dataset.t));
  $$('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===state.lang));
  $('#storyText').textContent = tr('storyP');
  $('#addressText').textContent = loc(state.settings.address);
  $('#mapFrame').src = state.settings.maps;

  renderCategories();
  renderProducts();
  renderCart();
  renderAdmin();
  renderOpenStatus();
}

function renderCategories(){
  $('#categories').innerHTML = CATEGORIES.filter(c=>c.id!=='all').map(c=>`<article class="card glass"><div class="ico">${c.icon}</div><h3 class="serif" style="font-size:32px;margin:18px 0 4px">${loc(c.name)}</h3><p class="muted">${loc(c.desc)}</p></article>`).join('');
  $('#filters').innerHTML = CATEGORIES.map(c=>`<button class="${state.activeCat===c.id?'active':''}" data-cat="${c.id}">${c.icon} ${loc(c.name)}</button>`).join('');
  $$('#filters button').forEach(b=>b.onclick=()=>{state.activeCat=b.dataset.cat;renderProducts();renderCategories()});
}

function renderProducts(){
  const q=($('#search')?.value||'').toLowerCase();
  const items=state.products.filter(p=>p.active!==false).filter(p=>(state.activeCat==='all'||p.cat===state.activeCat)).filter(p=>loc(p.name).toLowerCase().includes(q)||p.brand.toLowerCase().includes(q));
  $('#productsGrid').innerHTML = items.map(productCard).join('');
  $$('.add-cart').forEach(b=>b.onclick=()=>addToCart(b.dataset.id));
}

function addToCart(id){
  const product=state.products.find(p=>p.id===id); if(!product)return;
  const existing=state.cart.find(i=>i.id===id);
  if(existing) existing.qty++;
  else state.cart.push({id,qty:1});
  save();renderCart();openCart();
}

function renderCart(){
  const items=state.cart.map(i=>({ ...i, product:state.products.find(p=>p.id===i.id)})).filter(i=>i.product);
  $('#cartCount').textContent=items.reduce((a,b)=>a+b.qty,0);
  $('#cartItems').innerHTML = items.length?items.map(i=>`<div class="cart-item"><img src="${i.product.img}"><div style="flex:1"><strong class="serif" style="font-size:22px">${loc(i.product.name)}</strong><div class="gold">${money(i.product.price)}</div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:7px"><input class="input qty" style="width:70px;padding:6px" type="number" min="1" value="${i.qty}" data-id="${i.id}"><button class="icon-btn remove" data-id="${i.id}">×</button></div></div></div>`).join(''):`<p class="muted">${tr('empty')}</p>`;
  const total=items.reduce((s,i)=>s+i.product.price*i.qty,0);
  $('#cartTotal').textContent=money(total);
  $$('.qty').forEach(inp=>inp.onchange=()=>{const it=state.cart.find(x=>x.id===inp.dataset.id);if(it)it.qty=Math.max(1,Number(inp.value)||1);save();renderCart()});
  $$('.remove').forEach(btn=>btn.onclick=()=>{state.cart=state.cart.filter(x=>x.id!==btn.dataset.id);save();renderCart()});
}

function openCart(){$('#overlay').classList.add('open');$('#cart').classList.add('open')}
function closePanels(){$('#overlay').classList.remove('open');$('#cart').classList.remove('open');$('#loginPanel').classList.remove('open')}

function checkoutWhatsApp(){
  const items=state.cart.map(i=>({ ...i, product:state.products.find(p=>p.id===i.id)})).filter(i=>i.product);
  if(!items.length)return;
  const lines=items.map(i=>`• ${loc(i.product.name)} x${i.qty} — ${i.product.price*i.qty} MAD`).join('\n');
  const total=items.reduce((s,i)=>s+i.product.price*i.qty,0);
  const msg=`🌿 *Nouvelle commande — Parapharmacie Opal*\n─────────────────────\n🛒 *Produits :*\n${lines}\n─────────────────────\n💰 *Total estimé :* ${total} MAD\n─────────────────────\n📍 Client confirmera ses coordonnées de livraison.\nMerci ! ✨`;
  window.open(`https://wa.me/${cleanWa(state.settings.whatsapp)}?text=${encodeURIComponent(msg)}`,'_blank');
}

function renderOpenStatus(){
  const keys=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  const now=new Date(); const day=keys[now.getDay()]; const h=state.settings.hours[day];
  const cm=now.getHours()*60+now.getMinutes();
  const toMin=v=>{const [a,b]=v.split(':').map(Number);return a*60+b};
  const open=h && !h.closed && cm>=toMin(h.open) && cm<=toMin(h.close);
  $('#statusDot').className='dot '+(open?'open':'closed');
  $('#statusLabel').textContent=open?tr('open'):tr('closed');
  $('#hoursList').innerHTML=Object.entries(state.settings.hours).map(([d,v])=>`<div class="glass" style="border-radius:17px;padding:10px 12px;display:flex;justify-content:space-between;margin:6px 0"><span>${d}</span><span>${v.closed?'Closed':v.open+' - '+v.close}</span></div>`).join('');
}

function openAdminLogin(){ if(state.admin){showAdminPage();return} $('#overlay').classList.add('open');$('#loginPanel').classList.add('open') }
function login(){
  const email=$('#loginEmail').value.trim(), pass=$('#loginPass').value;
  if(email==='admin@opal.ma' && pass==='Opal@2026'){state.admin=true;save();closePanels();showAdminPage()}
  else $('#loginError').textContent='Identifiants incorrects. Démo : admin@opal.ma / Opal@2026';
}
function showSite(){ $('#sitePage').style.display='block'; $('#adminPage').style.display='none'; window.scrollTo(0,0)}
function showAdminPage(){ $('#sitePage').style.display='none'; $('#adminPage').style.display='block'; renderAdmin(); window.scrollTo(0,0)}
function logout(){state.admin=false;save();showSite()}

function renderAdmin(){
  $('#adminStats').innerHTML=[
    ['Produits',state.products.length],['Actifs',state.products.filter(p=>p.active!==false).length],['Panier',state.cart.length],['Langues','FR / AR / EN']
  ].map(([k,v])=>`<div class="glass card"><p class="muted">${k}</p><strong class="gold" style="font-size:32px">${v}</strong></div>`).join('');
  $('#adminProductsTable').innerHTML=state.products.map(p=>`<tr><td>${loc(p.name)}</td><td>${p.brand}</td><td>${money(p.price)}</td><td>${p.cat}</td><td><button class="btn ghost edit-product" data-id="${p.id}">Edit</button> <button class="btn ghost delete-product" data-id="${p.id}">Delete</button></td></tr>`).join('');
  $$('.edit-product').forEach(b=>b.onclick=()=>loadProductForm(b.dataset.id));
  $$('.delete-product').forEach(b=>b.onclick=()=>{state.products=state.products.filter(p=>p.id!==b.dataset.id);save();render()});
  $('#setLogo').value=state.settings.logo; $('#setAccent').value=state.settings.accent; $('#setWhatsapp').value=state.settings.whatsapp; $('#setMaps').value=state.settings.maps;
}

function loadProductForm(id){
  const p=state.products.find(x=>x.id===id); if(!p)return;
  $('#prodId').value=p.id; $('#prodNameFr').value=p.name.fr; $('#prodNameAr').value=p.name.ar; $('#prodNameEn').value=p.name.en;
  $('#prodDescFr').value=p.desc.fr; $('#prodDescAr').value=p.desc.ar; $('#prodDescEn').value=p.desc.en;
  $('#prodBrand').value=p.brand; $('#prodPrice').value=p.price; $('#prodCat').value=p.cat; $('#prodImg').value=p.img; $('#prodBadge').value=p.badge||'';
}

function saveProduct(){
  const id=$('#prodId').value || ('p'+Date.now());
  const p={id,slug:$('#prodNameFr').value.toLowerCase().replace(/\s+/g,'-'),cat:$('#prodCat').value,brand:$('#prodBrand').value||'Opal',price:Number($('#prodPrice').value)||0,oldPrice:null,badge:$('#prodBadge').value||null,stock:0,active:true,featured:true,img:$('#prodImg').value||DEFAULT_PRODUCTS[0].img,name:{fr:$('#prodNameFr').value,ar:$('#prodNameAr').value,en:$('#prodNameEn').value},desc:{fr:$('#prodDescFr').value,ar:$('#prodDescAr').value,en:$('#prodDescEn').value}};
  const idx=state.products.findIndex(x=>x.id===id);
  if(idx>=0)state.products[idx]=p; else state.products.push(p);
  save();render();clearProductForm();
}
function clearProductForm(){$$('#productForm input,#productForm textarea').forEach(i=>i.value='');$('#prodCat').value='face';$('#prodBadge').value=''}

function saveSettings(){
  state.settings.logo=$('#setLogo').value||'assets/opal-logo.svg';
  state.settings.accent=$('#setAccent').value||'#C9A96E';
  state.settings.whatsapp=$('#setWhatsapp').value||'+212600000000';
  state.settings.maps=$('#setMaps').value||DEFAULT_SETTINGS.maps;
  save();render();
}
function resetDemo(){
  if(confirm('Réinitialiser toutes les données de démonstration ?')){
    localStorage.clear();
    location.reload();
  }
}

window.addEventListener('load',()=>{
  setTimeout(()=>$('#loader').classList.add('off'),1500);
  renderParticles();
  render();
  window.addEventListener('scroll',()=>$('#header').classList.toggle('scrolled',scrollY>36));
  $$('.lang-btn').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
  $('#openCart').onclick=openCart; $('#overlay').onclick=closePanels; $('#closeCart').onclick=closePanels; $('#checkout').onclick=checkoutWhatsApp;
  $('#adminBtn').onclick=openAdminLogin; $('#loginBtn').onclick=login; $('#logoutBtn').onclick=logout; $('#backSite').onclick=showSite;
  $('#search').oninput=renderProducts; $('#quizBtn').onclick=()=>{$('#quizResults').classList.remove('hidden');$('#quizResults').innerHTML=state.products.filter(p=>['expert','bestseller'].includes(p.badge)).slice(0,3).map(productCard).join('');$$('.add-cart').forEach(b=>b.onclick=()=>addToCart(b.dataset.id));};
  $('#saveProduct').onclick=saveProduct; $('#clearProduct').onclick=clearProductForm; $('#saveSettings').onclick=saveSettings; $('#resetDemo').onclick=resetDemo;
  $$('.admin-tab').forEach(b=>b.onclick=()=>{$$('.admin-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');$$('.admin-section').forEach(s=>s.classList.add('hidden'));$('#admin-'+b.dataset.tab).classList.remove('hidden')});
});
