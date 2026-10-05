// ============================================
// Site bilingue FR / EN — Riad Amirat Al Jamal
// ============================================
//
// Les textes de la page portent un attribut data-i18n="clé" (texte simple),
// data-i18n-html="clé" (texte avec mise en forme) ou data-i18n-<attribut>
// (alt, placeholder, aria-label). Les traductions sont toutes dans DICT :
// pour corriger un texte, il suffit de le modifier ici, en FR et en EN.
//
// Choix de la langue, dans l'ordre : ?lang=en dans l'adresse, puis le dernier
// choix du visiteur, puis la langue de son navigateur, sinon le français.

const DICT = {
  "fr": {
    "nav.home": "Accueil",
    "nav.rooms": "Chambres",
    "nav.dining": "Restauration",
    "nav.gallery": "Galerie",
    "nav.about": "Notre Histoire",
    "hero.subtitle": "Bienvenue dans un jardin secret",
    "hero.tagline": "Au cœur de la médina de Marrakech, une maison du XVIIIᵉ siècle où l'artisanat marocain rencontre le silence retrouvé.",
    "hero.cta": "Découvrir nos chambres",
    "book.checkIn": "Arrivée",
    "book.checkOut": "Départ",
    "book.adults": "Adultes",
    "book.children": "Enfants",
    "book.a1": "1 adulte",
    "book.a2": "2 adultes",
    "book.a3": "3 adultes",
    "book.a4": "4 adultes",
    "book.a5": "5 adultes",
    "book.a6": "6 adultes et +",
    "book.c0": "0 enfant",
    "book.c1": "1 enfant",
    "book.c2": "2 enfants",
    "book.c3": "3 enfants",
    "book.c4": "4 enfants",
    "book.submit": "Vérifier la disponibilité",
    "rooms.label": "Hébergement",
    "rooms.title": "Nos Chambres",
    "rooms.desc": "Cinq chambres, chacune avec son propre caractère — zellige, tadelakt et bois de cèdre sculpté façonnés par les artisans de la médina.",
    "rooms.blue": "Chamber Blue",
    "rooms.rachid": "Chamber Rachid",
    "rooms.margaret": "Chamber Margaret",
    "rooms.d1": "La plus spacieuse de nos chambres, baignée de lumière et ouverte sur le patio, pour un séjour au grand confort.",
    "rooms.d2": "Une chambre aux tons bleus apaisants, ornée de zellige fait main et pensée pour le repos.",
    "rooms.d3": "Un duplex privé avec accès direct à une terrasse exclusive, pour dormir sous les toits de la médina.",
    "rooms.d4": "Un cocon chaleureux au décor traditionnel, avec vue sur le patio et sa fontaine.",
    "rooms.d5": "Une chambre intimiste aux tapis berbères et à la lumière tamisée, proche du salon marocain.",
    "rooms.king": "Lit King",
    "rooms.queen": "Lit Queen",
    "rooms.patio": "Vue Patio",
    "rooms.wifi": "Wifi gratuit",
    "rooms.bath": "Salle de bain privée",
    "rooms.terrace": "Terrasse privée",
    "rooms.decor": "Décor traditionnel",
    "rooms.book": "Réserver",
    "amen.label": "L'Expérience",
    "amen.title": "Services & Bien-être",
    "amen.desc": "Chaque détail est pensé pour ralentir le temps.",
    "amen.cuisine": "Cuisine Marocaine",
    "amen.cuisineD": "Tagines, pastillas et pâtisseries au miel, préparés selon les recettes transmises de génération en génération.",
    "amen.pool": "Piscine du Patio",
    "amen.poolD": "Une piscine nichée au cœur de la maison, entourée de palmiers et de bougainvilliers en fleurs.",
    "amen.lounge": "Salon Marocain",
    "amen.loungeD": "Tapis berbères, banquettes basses et lumière tamisée, pour lire ou se retrouver après le souk.",
    "amen.concierge": "Concierge Médina",
    "amen.conciergeD": "Notre équipe vous guide dans les souks, réserve vos excursions et organise chaque détail du séjour.",
    "amen.transfer": "Transfert Aéroport",
    "amen.transferD": "Accueil privé à l'aéroport de Marrakech-Ménara et transfert en toute sérénité jusqu'au riad.",
    "dining.label": "Table & Saveurs",
    "dining.desc": "Une cuisine marocaine généreuse, servie dans la salle à manger ou, selon la météo, sur la terrasse. Feuilletez notre carte, page après page.",
    "dining.note": "Déjeuners et dîners trois services à 300 MAD par personne. Merci de réserver auprès de notre équipe la veille au soir. Premier soir sur demande : dîner pour deux à 300 MAD par personne (boissons non incluses) — un seul plat par table de deux : végétarien, agneau, bœuf, poulet ou couscous.",
    "dish.1": "Harira, dattes & shabakia",
    "dish.1d": "Une soupe marocaine traditionnelle aux lentilles, pois chiches et tomates, parfumée aux épices de la maison, servie avec des dattes fondantes et des shabakias croustillantes au miel.",
    "dish.2": "Couscous aux légumes",
    "dish.2d": "Semoule vapeur moelleuse surmontée de légumes de saison mijotés lentement, dans la pure tradition du couscous du vendredi.",
    "dish.3": "Salade marocaine",
    "dish.3d": "Tomates, oignons, poivrons et concombre finement coupés, relevés d'huile d'olive, de citron et d'un soupçon de coriandre fraîche.",
    "dish.4": "Tajine d'agneau aux pruneaux & amandes",
    "dish.4d": "Agneau fondant mijoté à l'étouffée avec pruneaux sucrés, amandes grillées et un voile de cannelle, entre douceur et tradition citadine.",
    "dish.5": "Tajine de poulet, olives & citron confit",
    "dish.5d": "Poulet fermier braisé au safran et gingembre, accompagné d'olives et de citron confit, un classique de la cuisine marocaine.",
    "dish.6": "Salade",
    "dish.6d": "Une salade fraîche et croquante, préparée avec les légumes du marché, pour ouvrir le repas en légèreté.",
    "dish.7": "Spaghetti sauce bolognaise",
    "dish.7d": "Pâtes al dente nappées d'une sauce bolognaise mijotée longuement, un clin d'œil italien à notre table marocaine.",
    "dish.8": "Pain à l'ail",
    "dish.8d": "Pain doré au four, généreusement parfumé au beurre à l'ail et aux herbes fraîches.",
    "dining.incl": "Dessert, café ou thé inclus dans chaque menu.",
    "exc.label": "Au-delà du Riad",
    "exc.desc": "Journées en minivan avec chauffeur (anglophone ou non), hors repas, entrées et pourboires — sur réservation.",
    "exc.agadir": "Plage et station balnéaire",
    "exc.essaouira": "Plage et médina historique",
    "exc.atlas": "Haut Atlas",
    "exc.atlasD": "Villages berbères jusqu'au pied du Jebel Toubkal (mule en option jusqu'au Kasbah Toubkal, déjeuner non inclus)",
    "exc.atlasP": "1800 MAD <small>/ 2 pers.</small>",
    "exc.ourika": "Vallée de l'Ourika",
    "exc.ourikaD": "Visite matinale de la vallée berbère",
    "exc.casaD": "Excursion à la journée",
    "exc.guides": "Guides (sur réservation)",
    "exc.g1": "Guide, visite de Marrakech (3h, sans véhicule)",
    "exc.g2": "Guide, visite de Marrakech (6h, sans véhicule)",
    "exc.g3": "Guide pour excursion hors Marrakech",
    "exc.g4": "Guide avec véhicule, visite de Marrakech (3h)",
    "exc.ask": "Nous consulter",
    "gal.label": "Voyage Visuel",
    "gal.desc": "Un aperçu de la sérénité qui vous attend.",
    "about.label": "À propos",
    "about.p1": "Niché au cœur du prestigieux quartier des palais de la Médina de Marrakech, Riad Amirat Al Jamal est une véritable oasis de calme où l'authenticité marocaine rencontre le confort moderne.",
    "about.p2": "Installé dans une demeure traditionnelle faisant partie d'un ancien palais de la dynastie alaouite, le riad a été soigneusement aménagé afin de préserver le charme de l'architecture marocaine. Chaque espace met en valeur l'artisanat local, les objets berbères, le tadelakt traditionnel et une décoration raffinée qui racontent l'histoire et la richesse culturelle du Maroc.",
    "about.p3": "À seulement quelques minutes de la célèbre place Jemaa El Fna et de la mosquée Koutoubia, notre riad offre à ses visiteurs une expérience unique : découvrir l'âme de Marrakech tout en profitant d'un cadre paisible, chaleureux et élégant.",
    "about.rooms": "Chambres Uniques",
    "about.rating": "Avis Voyageurs / 5",
    "rev.label": "Avis de Voyageurs",
    "rev.title": "Ils en Parlent Mieux que Nous",
    "rev.1": "Située ds ruelle - non accessibles aux voitures - à 3 minutes à pieds de place JemaaElFna à hauteur de la mosquée Koutoubia, excellent repère, beau riad très calme, chambre spacieuse et literie parfaite, rooftop où prendre soleil mais pas le petit déjeuner simple et classique qui se prend au rez-de-chaussée.",
    "rev.2": "Personnel au petit soin, très sympathique. La tortue est la star de cet hôtel. Bon emplacement.",
    "rev.3": "« L' emplacement est à deux pas de la place, notre hôte Said très gentil et disponible, la beauté du Riad »",
    "rev.be": "Belgique",
    "rev.jp": "Japon",
    "contact.label": "Nous Contacter",
    "contact.title": "Réservations & Renseignements",
    "contact.desc": "Nous serions ravis de vous accueillir. Écrivez-nous pour une réservation, une question ou une demande particulière.",
    "contact.address": "Adresse",
    "contact.addressFull": "33 Rue Fhal Zefriti, Médina<br>40000 Marrakech, Maroc<br><span class=\"contact-note\">(juste à côté de Riad BB Marrakech)</span>",
    "contact.phone": "Téléphone",
    "contact.map": "Voir l'itinéraire sur Google Maps",
    "contact.policy": "Politique de réservation",
    "contact.policyD": "Un acompte équivalent à un tiers du séjour est demandé, non remboursable en cas de no-show. Annulation entre J-7 et l'arrivée (ou no-show) : 100% du séjour retenu. Entre J-21 et J-7 : 50% du séjour retenu.",
    "form.name": "Nom complet",
    "form.subject": "Sujet",
    "form.s0": "Sélectionnez un sujet",
    "form.s1": "Réservation de chambre",
    "form.s2": "Réservation table",
    "form.s3": "Rendez-vous hammam",
    "form.s4": "Privatisation du riad",
    "form.s5": "Autre demande",
    "form.send": "Envoyer le message",
    "form.sent": "Message Envoyé",
    "form.thanks": "Merci de nous avoir écrit. Notre équipe vous répondra sous 24 heures.",
    "footer.tagline": "Une maison au cœur de la médina de Marrakech — Discover a Hidden Oasis.",
    "footer.exp": "Expériences",
    "footer.hammam": "Hammam Traditionnel",
    "footer.private": "Privatisation du Riad",
    "footer.address": "33 Rue Fhal Zefriti, Médina<br>40000 Marrakech, Maroc",
    "footer.copy": "&copy; 2026 Riad Amirat Al Jamal. Tous droits réservés.",
    "a.navToggle": "Ouvrir la navigation",
    "a.prevPage": "Page précédente",
    "a.nextPage": "Page suivante",
    "a.close": "Fermer",
    "a.prevImg": "Image précédente",
    "a.nextImg": "Image suivante",
    "a.rev1": "Avis 1",
    "a.rev2": "Avis 2",
    "a.rev3": "Avis 3",
    "p.name": "Votre nom",
    "p.email": "vous@email.com",
    "p.msg": "Comment pouvons-nous vous aider ?",
    "alt.court": "Cour intérieure du Riad Amirat Al Jamal",
    "meta.title": "Riad Amirat Al Jamal — Maison d'hôtes de charme, Médina de Marrakech",
    "meta.description": "Riad de charme au cœur de la médina de Marrakech, à quelques minutes de Jemaa El Fna. Cinq chambres, piscine et cuisine marocaine. Réservation en direct.",
    "book.childAge": "Âge enfant",
    "book.agePlaceholder": "Âge ?",
    "book.lessThanOne": "Moins de 1 an",
    "book.year": "an",
    "book.years": "ans",
    "book.errorIn": "Choisissez une date d’arrivée.",
    "book.errorOut": "Choisissez une date de départ après la date d’arrivée.",
    "book.errorAge": "Indiquez l’âge de chaque enfant.",
    "lightbox.alt": "Riad Amirat Al Jamal"
  },
  "en": {
    "nav.home": "Home",
    "nav.rooms": "Rooms",
    "nav.dining": "Dining",
    "nav.gallery": "Gallery",
    "nav.about": "Our Story",
    "hero.subtitle": "Welcome to a secret garden",
    "hero.tagline": "In the heart of the Marrakech medina, an 18th-century house where Moroccan craftsmanship meets rediscovered silence.",
    "hero.cta": "Discover our rooms",
    "book.checkIn": "Check-in",
    "book.checkOut": "Check-out",
    "book.adults": "Adults",
    "book.children": "Children",
    "book.a1": "1 adult",
    "book.a2": "2 adults",
    "book.a3": "3 adults",
    "book.a4": "4 adults",
    "book.a5": "5 adults",
    "book.a6": "6+ adults",
    "book.c0": "No children",
    "book.c1": "1 child",
    "book.c2": "2 children",
    "book.c3": "3 children",
    "book.c4": "4 children",
    "book.submit": "Check availability",
    "rooms.label": "Accommodation",
    "rooms.title": "Our Rooms",
    "rooms.desc": "Five rooms, each with its own character: zellige tiles, tadelakt and carved cedar wood crafted by the artisans of the medina.",
    "rooms.blue": "Blue Chamber",
    "rooms.rachid": "Rachid Chamber",
    "rooms.margaret": "Margaret Chamber",
    "rooms.d1": "The most spacious of our rooms, bathed in light and opening onto the patio, for a truly comfortable stay.",
    "rooms.d2": "A room in soothing blue tones, adorned with handmade zellige and designed for rest.",
    "rooms.d3": "A private duplex with direct access to an exclusive terrace, to sleep beneath the rooftops of the medina.",
    "rooms.d4": "A warm cocoon with traditional décor, overlooking the patio and its fountain.",
    "rooms.d5": "An intimate room with Berber rugs and soft lighting, close to the Moroccan lounge.",
    "rooms.king": "King bed",
    "rooms.queen": "Queen bed",
    "rooms.patio": "Patio view",
    "rooms.wifi": "Free Wi-Fi",
    "rooms.bath": "Private bathroom",
    "rooms.terrace": "Private terrace",
    "rooms.decor": "Traditional décor",
    "rooms.book": "Book",
    "amen.label": "The Experience",
    "amen.title": "Services & Wellbeing",
    "amen.desc": "Every detail is designed to slow time down.",
    "amen.cuisine": "Moroccan Cuisine",
    "amen.cuisineD": "Tagines, pastillas and honey pastries, prepared from recipes handed down from generation to generation.",
    "amen.pool": "Patio Pool",
    "amen.poolD": "A pool nestled at the heart of the house, surrounded by palm trees and blooming bougainvillea.",
    "amen.lounge": "Moroccan Lounge",
    "amen.loungeD": "Berber rugs, low banquettes and soft lighting, to read or unwind after the souk.",
    "amen.concierge": "Medina Concierge",
    "amen.conciergeD": "Our team guides you through the souks, books your excursions and takes care of every detail of your stay.",
    "amen.transfer": "Airport Transfer",
    "amen.transferD": "Private welcome at Marrakech-Menara airport and a relaxed transfer to the riad.",
    "dining.label": "Table & Flavours",
    "dining.desc": "Generous Moroccan cuisine, served in the dining room or, weather permitting, on the terrace. Leaf through our menu, page by page.",
    "dining.note": "Three-course lunches and dinners at 300 MAD per person. Please book with our team the evening before. First evening on request: dinner for two at 300 MAD per person (drinks not included), one dish per table of two: vegetarian, lamb, beef, chicken or couscous.",
    "dish.1": "Harira, dates & chebakia",
    "dish.1d": "A traditional Moroccan soup of lentils, chickpeas and tomatoes, scented with house spices, served with soft dates and crispy honey chebakia.",
    "dish.2": "Vegetable couscous",
    "dish.2d": "Fluffy steamed semolina topped with slow-simmered seasonal vegetables, in the true tradition of the Friday couscous.",
    "dish.3": "Moroccan salad",
    "dish.3d": "Finely chopped tomatoes, onions, peppers and cucumber, dressed with olive oil, lemon and a hint of fresh coriander.",
    "dish.4": "Lamb tagine with prunes & almonds",
    "dish.4d": "Tender lamb slow-cooked with sweet prunes, toasted almonds and a touch of cinnamon, a sweet classic of Moroccan city cooking.",
    "dish.5": "Chicken tagine with olives & preserved lemon",
    "dish.5d": "Free-range chicken braised with saffron and ginger, served with olives and preserved lemon, a classic of Moroccan cuisine.",
    "dish.6": "Salad",
    "dish.6d": "A fresh, crunchy salad made with market vegetables, for a light start to the meal.",
    "dish.7": "Spaghetti bolognese",
    "dish.7d": "Al dente pasta coated in a long-simmered bolognese sauce, an Italian nod at our Moroccan table.",
    "dish.8": "Garlic bread",
    "dish.8d": "Oven-baked golden bread, generously flavoured with garlic butter and fresh herbs.",
    "dining.incl": "Dessert, coffee or tea included with every menu.",
    "exc.label": "Beyond the Riad",
    "exc.desc": "Full-day trips by minivan with driver (English-speaking or not), excluding meals, entrance fees and tips, on reservation.",
    "exc.agadir": "Beach and seaside resort",
    "exc.essaouira": "Beach and historic medina",
    "exc.atlas": "High Atlas",
    "exc.atlasD": "Berber villages up to the foot of Jebel Toubkal (optional mule ride to Kasbah Toubkal, lunch not included)",
    "exc.atlasP": "1800 MAD <small>/ 2 people</small>",
    "exc.ourika": "Ourika Valley",
    "exc.ourikaD": "Morning visit to the Berber valley",
    "exc.casaD": "Day trip",
    "exc.guides": "Guides (on reservation)",
    "exc.g1": "Guide, Marrakech tour (3h, no vehicle)",
    "exc.g2": "Guide, Marrakech tour (6h, no vehicle)",
    "exc.g3": "Guide for excursions outside Marrakech",
    "exc.g4": "Guide with vehicle, Marrakech tour (3h)",
    "exc.ask": "On request",
    "gal.label": "Visual Journey",
    "gal.desc": "A glimpse of the serenity that awaits you.",
    "about.label": "About Us",
    "about.p1": "Nestled in the heart of the prestigious palace quarter of the Marrakech Medina, Riad Amirat Al Jamal is a true oasis of calm where Moroccan authenticity meets modern comfort.",
    "about.p2": "Set in a traditional residence that was once part of a former palace of the Alaouite dynasty, the riad has been carefully restored to preserve the charm of Moroccan architecture. Every space showcases local craftsmanship, Berber objects, traditional tadelakt and refined décor that tell the story and cultural richness of Morocco.",
    "about.p3": "Just a few minutes from the famous Jemaa El Fna square and the Koutoubia mosque, our riad offers its guests a unique experience: discovering the soul of Marrakech in a peaceful, warm and elegant setting.",
    "about.rooms": "Unique Rooms",
    "about.rating": "Guest Rating / 5",
    "rev.label": "Guest Reviews",
    "rev.title": "In Our Guests' Words",
    "rev.1": "Located in a lane closed to cars, a 3-minute walk from Jemaa El Fna square near the Koutoubia mosque, an excellent landmark. A beautiful, very quiet riad, a spacious room and perfect bedding, a rooftop to enjoy the sun, while the simple, classic breakfast is served on the ground floor.",
    "rev.2": "Very attentive and friendly staff. The tortoise is the star of this hotel. Good location.",
    "rev.3": "“The location is just steps from the square, our host Said is very kind and helpful, and the Riad is beautiful.”",
    "rev.be": "Belgium",
    "rev.jp": "Japan",
    "contact.label": "Contact Us",
    "contact.title": "Reservations & Enquiries",
    "contact.desc": "We would be delighted to welcome you. Write to us for a reservation, a question or a special request.",
    "contact.address": "Address",
    "contact.addressFull": "33 Rue Fhal Zefriti, Medina<br>40000 Marrakech, Morocco<br><span class=\"contact-note\">(right next to Riad BB Marrakech)</span>",
    "contact.phone": "Phone",
    "contact.map": "Get directions on Google Maps",
    "contact.policy": "Booking policy",
    "contact.policyD": "A deposit of one third of the stay is required, non-refundable in case of no-show. Cancellation within 7 days of arrival (or no-show): 100% of the stay is charged. Between 21 and 7 days before arrival: 50% of the stay is charged.",
    "form.name": "Full name",
    "form.subject": "Subject",
    "form.s0": "Select a subject",
    "form.s1": "Room booking",
    "form.s2": "Table booking",
    "form.s3": "Hammam appointment",
    "form.s4": "Private hire of the riad",
    "form.s5": "Other request",
    "form.send": "Send message",
    "form.sent": "Message Sent",
    "form.thanks": "Thank you for writing to us. Our team will reply within 24 hours.",
    "footer.tagline": "A house in the heart of the Marrakech medina. Discover a Hidden Oasis.",
    "footer.exp": "Experiences",
    "footer.hammam": "Traditional Hammam",
    "footer.private": "Private Hire of the Riad",
    "footer.address": "33 Rue Fhal Zefriti, Medina<br>40000 Marrakech, Morocco",
    "footer.copy": "&copy; 2026 Riad Amirat Al Jamal. All rights reserved.",
    "a.navToggle": "Open navigation",
    "a.prevPage": "Previous page",
    "a.nextPage": "Next page",
    "a.close": "Close",
    "a.prevImg": "Previous image",
    "a.nextImg": "Next image",
    "a.rev1": "Review 1",
    "a.rev2": "Review 2",
    "a.rev3": "Review 3",
    "p.name": "Your name",
    "p.email": "you@email.com",
    "p.msg": "How can we help you?",
    "alt.court": "Inner courtyard of Riad Amirat Al Jamal",
    "meta.title": "Riad Amirat Al Jamal — Boutique guesthouse in the Marrakech Medina",
    "meta.description": "Boutique riad in the heart of the Marrakech medina, a few minutes from Jemaa El Fna. Five rooms, pool and Moroccan cuisine. Book direct.",
    "book.childAge": "Child",
    "book.agePlaceholder": "Age?",
    "book.lessThanOne": "Under 1",
    "book.year": "year",
    "book.years": "years",
    "book.errorIn": "Please choose a check-in date.",
    "book.errorOut": "Please choose a check-out date after the check-in date.",
    "book.errorAge": "Please enter the age of each child.",
    "lightbox.alt": "Riad Amirat Al Jamal"
  }
};

export const LANGS = ['fr', 'en'];
const DEFAULT_LANG = 'fr';
const STORAGE_KEY = 'raj-lang';
const ATTRS = ['alt', 'placeholder', 'aria-label'];

let current = DEFAULT_LANG;
const listeners = [];

/** Texte traduit pour la langue en cours (repli sur le français). */
export function t(key) {
  return (DICT[current] && DICT[current][key]) ?? DICT[DEFAULT_LANG][key] ?? key;
}

export function getLang() {
  return current;
}

/** Appelé à chaque changement de langue (ex. champs créés en JavaScript). */
export function onLangChange(fn) {
  listeners.push(fn);
}

function readStored() {
  try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
}

function store(lang) {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* navigation privée */ }
}

function detectLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (LANGS.includes(fromUrl)) return fromUrl;
  const saved = readStored();
  if (LANGS.includes(saved)) return saved;
  const nav = (navigator.language || '').slice(0, 2).toLowerCase();
  return nav === 'fr' || nav === 'ar' ? 'fr' : (LANGS.includes(nav) ? nav : 'en');
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  ATTRS.forEach((attr) => {
    document.querySelectorAll(`[data-i18n-${attr}]`).forEach((el) => {
      el.setAttribute(attr, t(el.getAttribute(`data-i18n-${attr}`)));
    });
  });

  document.documentElement.lang = current;
  document.title = t('meta.title');
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', t('meta.description'));

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === current));
  });
}

/** Change la langue du site et la mémorise pour les prochaines visites. */
export function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  current = lang;
  store(lang);
  applyTranslations();

  // Garde ?lang= dans l'adresse quand il y est déjà, pour les liens partagés
  const url = new URL(window.location.href);
  if (url.searchParams.has('lang')) {
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  }
  listeners.forEach((fn) => fn(lang));
}

function init() {
  current = detectLang();
  applyTranslations();
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

// Les modules s'exécutent après la lecture du HTML : la page est prête.
init();
