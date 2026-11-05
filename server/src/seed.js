import 'dotenv/config'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from './generated/prisma/client.ts'

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'denzel'
})
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Seeding database...')

  // Languages
  const languages = await Promise.all([
    prisma.menuLanguage.upsert({
      where: { code: 'ita' },
      update: {},
      create: { code: 'ita', label: 'Menù Italiano' }
    }),
    prisma.menuLanguage.upsert({
      where: { code: 'eng' },
      update: {},
      create: { code: 'eng', label: 'English Menu' }
    }),
    prisma.menuLanguage.upsert({
      where: { code: 'ebr' },
      update: {},
      create: { code: 'ebr', label: 'Menù Ebrew' }
    }),
    prisma.menuLanguage.upsert({
      where: { code: 'fra' },
      update: {},
      create: { code: 'fra', label: 'Menù Français' }
    })
  ])
  const itaLang = languages[0]

  // Menu Categories and Items
  const categories = [
    {
      name: 'ANTIPASTI',
      sortOrder: 1,
      items: [
        { name: 'ORIENTAL DENZEL', price: '15€', description: 'Composizione di felafel, tehina (salsa di sesamo), humus (salsa di ceci) e insalata israeliana (insalata a base di cetrioli e peperoni)', sortOrder: 1 },
        { name: 'INSALATA VERDE', price: '9€', description: 'Lattuga e insalata baby condite con salsa Sacwan (senape, aceto bianco, olio EVO e miele) e mandorle', sortOrder: 2 },
        { name: 'MESSI VEGETARIAN', price: '12€', description: 'Involtini di melanzane fritte, farciti con tehina (salsa di sesamo) serviti su un letto di insalata israeliana', sortOrder: 3 },
        { name: 'J SALAD', price: '12€', description: 'Fette di pollo grigliate accompagnate da lattuga, insalata baby e pomodorini ciliegino, condite con olio, sale e limone', sortOrder: 4 },
        { name: 'DORKA SALAD', price: '14€', description: 'Cubetti di pollo saltati in padella con miele e mandorle accompagnati da pomodorini ciliegino, conditi con olio, sale e cumino', sortOrder: 5 },
        { name: 'KEBBE', price: '3€', unit: 'al pezzo', description: 'Polpetta fritta di carne macinata speziata e bulgur (chicchi di grano duro)', sortOrder: 6 },
        { name: 'DENZEL WINGS', price: '14€', description: 'Ali di pollo cotte al forno, passate nell\'olio bollente, saltate in padella, servite su un letto di insalata baby, accompagnate a scelta da salsa chili o teriyaki', sortOrder: 7 },
        { name: 'COPPA', price: '15€', description: 'Carpaccio di coppa di manzo, condito con olio EVO, sale e limone e un assaggio di insalata baby e pomodorini ciliegino', sortOrder: 8 },
        { name: 'MESSI MEAT', price: '14€', description: 'Polpettine di manzo avvolte su bastoncini di cannella, preparati con baharat, prezzemolo, pinoli tostati, serviti su un letto di insalata israeliana e tehina', sortOrder: 9 },
        { name: 'MINI WÜRSTEL', price: '14€', description: 'Mini würstel libanesi accompagnati da patatine fritte e carciofini fritti', sortOrder: 10 }
      ]
    },
    {
      name: 'PANINI DENZEL',
      sortOrder: 2,
      items: [
        { name: 'DENZEL BURGER', price150g: '11,50€', price180g: '13€', price230g: '14,50€', description: 'Carne trita fresca di manzo preparata in casa con insalata, pomodori, cipolle e cetrioli sott\'aceto', addonName: 'DENZEL BURGER PLUS', addonPrice: '+ 6€', addonDescription: 'Aggiungi altri 100gr di manzo al tuo burger: 330gr, 430gr 530gr', sortOrder: 1 },
        { name: 'ART AGNELLO', price: '14,50€', weight: '180gr', description: 'Carne trita fresca di agnello preparata in casa con insalata, pomodori, cipolle e cetrioli sott\'aceto', addonName: 'ART AGNELLO PLUS', addonPrice: '+ 6€', addonDescription: 'Aggiungi altri 100gr di agnello al tuo art agnello: 280gr, 380gr 480gr', sortOrder: 2 },
        { name: 'PIMENTO BURGER', price: '14,50€', weight: '180gr', description: 'Carne trita fresca, mista di manzo e agnello con peperoncino olandese piccante, insalata, pomodori, cipolle, cetrioli sott\'aceto, con salsa BBQ Denzel', addonName: 'PIMENTO PLUS', addonPrice: '+ 6€', addonDescription: 'Aggiungi altri 100gr di carne al tuo Pimento Burger: 280gr, 380gr 480gr', sortOrder: 3 },
        { name: 'CHICKEN BURGER', price: '12€', description: 'Hamburger di pollo speziato servito con insalata, pomodori, zucchine e maionese', sortOrder: 4 },
        { name: 'SNITZEL', price: '15€', description: 'Cotoletta di petto di pollo servita nella ciabatta con insalata, pomodori e peperoni', sortOrder: 5 },
        { name: 'PASTRAMI', price: '16€', description: 'Ciabatta ripiena di fettine di pastrami (affettato di manzo affumicato) insalata, pomodori e verdure alla griglia', sortOrder: 6 },
        { name: 'ART CHICKEN', price: '13,50€', description: 'Petto di pollo marinato in olio EVO, vino bianco e spezie, cotto alla griglia e servito nella ciabatta con maionese fatta in casa, insalata, pomodori e peperoni', sortOrder: 7 },
        { name: 'JUMBO DOG', price: '14€', description: 'Salsicciotto di manzo alla griglia con insalata, pomodoro, chimichurri, cipolle grigliate e senape', sortOrder: 8 },
        { name: 'ARTROCA', price: '15€', description: 'Ciabatta ripiena di fettine di roastbeef scottate con insalata, salsa chimichurri e pomodori', sortOrder: 9 },
        { name: 'ARTROCA BBQ', price: '15€', description: 'Ciabatta ripiena di roastbeef scottate con salsa BBQ Denzel, insalata, pomodori, cipolle grigliate e peperoni', sortOrder: 10 },
        { name: 'DENZEL FISH', price: '15€', description: 'Filetto intero di orata o branzino fritto in tempura servito nella ciabatta con insalata, pomodori, maionese fatta in casa e limone', sortOrder: 11 },
        { name: 'CRISPY TORTILLA', price: '15€', description: 'Fettine di snitzel avvolte nella tortilla con misticanza, pomodoro, guacamole e salsa chili', sortOrder: 12 },
        { name: 'CHICKEN TORTILLA', price: '15€', description: 'Fettine di petto di pollo avvolte nella tortilla con misticanza, maionese e pomodoro', sortOrder: 13 }
      ]
    },
    {
      name: 'PIATTI DENZEL',
      sortOrder: 3,
      items: [
        { name: 'TRANCIO DI SALMONE', price: '20€', description: 'Trancio di salmone al forno con contorno a scelta', sortOrder: 1 },
        { name: 'DENZEL STEAK', price: '29€', description: 'Bistecca di roast-beef (300gr) con patate', sortOrder: 2 },
        { name: 'FISH AND CHIPS', price: '16€', description: 'Filetti di orata o branzino in tempura serviti su un letto di patate fritte a mezzaluna', sortOrder: 3 },
        { name: 'ASIAN DENZEL', price: '16€', description: 'Bocconcini di pollo saltati in padella con verdure miste, miele e salsa di soia, serviti con mandorle tostate', sortOrder: 4 },
        { name: 'PESCE AL FORNO', price: '20€', description: 'Filetto di orata o branzino al forno con contorno a scelta', sortOrder: 5 },
        { name: 'DENZEL VIEL', price: '25€', description: 'Filetto di vitello accompagnato da una crema di funghi al brandy', sortOrder: 6 },
        { name: 'LAMB CHOP', price: '26€', description: 'Costolette di agnello alla brace, accompagnate da patate al forno', sortOrder: 7 },
        { name: 'FIORENTINA', price: '39€', description: 'Costata di manzo con contorno a scelta', sortOrder: 8 },
        { name: 'SHWARMA', price: '17€', description: 'Fettine di carne di tacchino speziate accompagnate da insalata e humus', sortOrder: 9 },
        { name: 'CHICKEN NUGGETS', price: '15€', description: 'Bocconcini di pollo fritti accompagnati da french fries', sortOrder: 10 },
        { name: 'ART KEBAB', price: '21€', description: 'Spiedini di carne di manzo macinata speziati alla brace, servito con riso basmati', sortOrder: 11 },
        { name: 'SPIEDO DENZEL', price: '21€', description: 'Spiedini di pollo e pomodorini accompagnati da riso basmati', sortOrder: 12 },
        { name: 'ART LAMB', price: '21€', description: 'Spiedini di carne macinata di agnello speziati alla brace, accompagnati da riso basmati', sortOrder: 13 },
        { name: 'SPIEDO TRIS', price: '21€', description: 'Tris di spiedini di agnello, pollo, manzo speziati alla brace accompagnati da riso basmati', sortOrder: 14 },
        { name: 'MIX GRILL', price: '58€', unit: 'per due persone', description: 'Composizione di steak di manzo, spiedini di pollo, di manzo, di agnello, mini burger, mini würstel e mini chicken serviti con insalata baby', sortOrder: 15 },
        { name: 'TAGLIATA DENZEL', price: '20€', description: 'Fettine di roastbeef scottate su letto di misticanza servite con salsa agrodolce a base di pere e senape', sortOrder: 16 },
        { name: 'SPICY NUGGETS', price: '15€', description: 'Cubetti di pollo impanati e fritti immersi nella salsa chili piccante', sortOrder: 17 },
        { name: 'HUMUS BIL LAHME', price: '18€', description: 'Carne trita speziata accompagnata da humus', sortOrder: 18 }
      ]
    },
    {
      name: 'CONTORNI',
      sortOrder: 4,
      items: [
        { name: 'DENZEL CHIPS', price: '6€', description: 'Patate a sfoglie sottili', sortOrder: 1 },
        { name: 'PATATE AMERICANE', price: '6€', description: 'Patate dolci a sfoglie sottili', sortOrder: 2 },
        { name: 'ONION', price: '6€', description: 'Cipolle impanate e fritte', sortOrder: 3 },
        { name: 'FRENCH FRIES', price: '6€', note: 'senza glutine', sortOrder: 4 },
        { name: 'HOME FRIES', price: '7€', description: 'Patate a mezzaluna saltate in padella con salsa chili e teriyaki', sortOrder: 5 },
        { name: 'PATATE AL FORNO', price: '6,50€', description: 'Misto di patate e patate americane al forno', sortOrder: 6 },
        { name: 'ZUCCHINE', price: '6€', sortOrder: 7 },
        { name: 'SPINACI', price: '8€', description: 'Spinaci baby saltati in padella con pinoli', sortOrder: 8 },
        { name: 'CARCIOFINI A SPICCHI', price: '6€', note: 'senza glutine', sortOrder: 9 },
        { name: 'FAGIOLINI', price: '7€', sortOrder: 10 },
        { name: 'FUNGHI E CIPOLLE', price: '6€', description: 'grigliati e speziati', sortOrder: 11 },
        { name: 'MELANZANE BALEDI', price: '8€', description: 'melanzane al forno con salsa tehina, pomodori e prezzemolo', sortOrder: 12 },
        { name: 'RISO', price: '5€', sortOrder: 13 }
      ]
    },
    {
      name: 'SWEET DENZEL',
      sortOrder: 5,
      items: [
        { name: 'PROFITTEROL', price: '6€', description: 'Bignè ripieno di panna e ricoperto di cioccolato', sortOrder: 1 },
        { name: 'GRACY', price: '6,50€', description: 'Pere cotte nel vino rosso con bastoncini di cannella', sortOrder: 2 },
        { name: 'SOUFFLÈ', price: '6€', description: 'Tortino caldo al cioccolato accompagnato da una pallina di gelato alla crema', sortOrder: 3 },
        { name: 'TARTE TATIN', price: '6€', description: 'Torta di mele caramellate accompagnata da una pallina di gelato alla crema', sortOrder: 4 },
        { name: 'CHOCO BANANA', price: '6€', description: 'Banana fritta in tempura accompagnata da una pallina di gelato al cioccolato', sortOrder: 5 },
        { name: 'ANANAS', price: '6,50€', description: 'Cubetti di ananas con gelato alla fragola', sortOrder: 6 },
        { name: 'GELATO', price: '5€', description: 'Gusto crema, fragola, cioccolato', sortOrder: 7 }
      ]
    }
  ]

  for (const cat of categories) {
    const category = await prisma.menuCategory.upsert({
      where: { name: cat.name },
      update: { sortOrder: cat.sortOrder },
      create: { name: cat.name, sortOrder: cat.sortOrder }
    })

    for (const item of cat.items) {
      const existing = await prisma.menuItem.findFirst({
        where: { name: item.name, categoryId: category.id, languageId: itaLang.id }
      })
      if (!existing) {
        await prisma.menuItem.create({
          data: {
            ...item,
            categoryId: category.id,
            languageId: itaLang.id
          }
        })
      }
    }
  }

  // Gallery images
  const galleryImages = [
    { title: 'DENZEL WINGS', uri: 'c6595a_ec075595e31b4f938ea91a6319354b1d.jpg', sortOrder: 1 },
    { title: 'DENZEL BURGER 330g', uri: 'c6595a_7400d6e5f32640d3973062abeecf804f.jpg', sortOrder: 2 },
    { title: 'FISH AND CHIPS', uri: 'c6595a_f1862194bed249818e8c9cc7d9eb0237.jpg', sortOrder: 3 },
    { title: 'DENZEL FRIENDS', uri: 'c6595a_8b7ae040e39c4749bfbfbf9a9c0880ee.jpg', sortOrder: 4 },
    { title: 'LOCATION', uri: 'c6595a_64379c74d98e4484a84f777c0a1e8c64.jpg', sortOrder: 5 },
    { title: 'GOLDSTAR & MACCABEE', uri: 'c6595a_8c63d0b979ad4dafa6edd97694375b96.jpg', sortOrder: 6 },
    { title: 'MACCIO CAPATONDA', uri: 'c6595a_6a5cb86d04e94270bdea90985140dd73.jpg', sortOrder: 7 },
    { title: 'WORK IN PROGRESS', uri: 'c6595a_be4293595a8145b4b27697b00d10c741.jpg', sortOrder: 8 },
    { title: 'ALBERTO BRANDI', uri: 'c6595a_73cd851ae94d4d4da0e1bb148275d11e.jpg', sortOrder: 9 },
    { title: 'BENVENUTI', uri: 'c6595a_084570b2c8a1472db6a6b9041e051444.jpg', sortOrder: 10 },
    { title: 'MISS ISRAELE 2013', uri: 'c6595a_0cc0b45856cd4d10ab69ed89f6d62de3.png', sortOrder: 11 },
    { title: 'FELAFEL', uri: 'c6595a_c45804059d7b49fbae5adcbd5fbc8fd8.jpg', sortOrder: 12 },
    { title: 'HAPPY BIRTHDAY', uri: 'c6595a_d659a4dc2938405fac8d88a9ee444f2b.jpg', sortOrder: 13 },
    { title: 'PIMENTO BURGER', uri: 'c6595a_dd550b214c9544d0a3dc1fb387535fc7.jpg', sortOrder: 14 },
    { title: 'FEDERICO BASSO DA ZELIG', uri: 'c6595a_a24dab3c11ca48a4acae5a60b4dfe865.jpg', sortOrder: 15 },
    { title: 'CHOCO BANANA', uri: 'c6595a_b62390b85d484664861a6915df8d10b1.jpg', sortOrder: 16 },
    { title: 'HANNUKA', uri: 'c6595a_2d596fa4f0314707a3d7d6994788f070.jpg', sortOrder: 17 },
    { title: 'HOMEMADE CHIPS', uri: 'c6595a_6abd384b5b4a4746944f7403dcd7a307.jpg', sortOrder: 18 },
    { title: 'JOELE DIX', uri: 'c6595a_06eb83aeb61e47178bad93b7443441d7.jpg', sortOrder: 19 },
    { title: 'MIX GRILL', uri: 'c6595a_62ac42845eeb422b9edbdf0c762721e0.jpg', sortOrder: 20 },
    { title: 'COPPA DI MANZO', uri: 'c6595a_0115d33807ec4aabbaf7180246d7f3b6.jpg', sortOrder: 21 },
    { title: 'ALESSANDRO BORGHESE', uri: 'c6595a_064664924c3749018f315ff4c61372bb.jpg', sortOrder: 22 },
    { title: 'DENZEL BURGERS', uri: 'c6595a_2a8a2e66b17e4dfe9fbef52d1dc7d38e.jpg', sortOrder: 23 },
    { title: 'LO ZOO DI 105', uri: 'c6595a_b9da6ca9d1a4485184f00097004c4b89.jpg', sortOrder: 24 },
    { title: 'D.BURGER CON COPPA E CIPOLLE', uri: 'c6595a_5e911785702240d4b9cc4cc105407df5.jpg', sortOrder: 25 },
    { title: 'ORIENTAL DENZEL', uri: 'c6595a_a5edf5a8190a4ba3b64f46ee0b032b4f.jpg', sortOrder: 26 },
    { title: 'DENZEL FRIENDS', uri: 'c6595a_4bb9fb620707448184463f9b8feff3f2.jpg', sortOrder: 27 },
    { title: 'LE MASSIME DI DENZEL', uri: 'c6595a_0d9e1941207c47b09297d08b1ecf564c.jpg', sortOrder: 28 }
  ]

  for (const img of galleryImages) {
    const existing = await prisma.galleryImage.findFirst({ where: { title: img.title, sortOrder: img.sortOrder } })
    if (!existing) {
      await prisma.galleryImage.create({ data: img })
    }
  }

  // Reviews
  const reviews = [
    { text: 'Oltre ad un hamburger di agnello che, cosi buono, l\'avevo mangiato solo negli Stati Uniti mi sono ritrovata in un clima degno del Lower East Side di Manhattan.', source: 'Eat It Milano', url: 'http://www.eatitmilano.it/2013/01/04/denzel/', sortOrder: 1 },
    { text: 'Posto d\'onore per gli hamburger (da 150, 180 e 230 grammi e senza formaggio, perche l\'ortodossia kasher non permette commistione tra carne e latticini)', source: 'Corriere della Sera, Vivimilano', url: 'http://vivimilano.corriere.it/ristoranti/denzel_1903195418768.shtml', sortOrder: 2 },
    { text: 'E ovviamente un pranzo della domenica, uno di quelli in cui perdersi fra gusti e sapori, profumi e dettagli che fanno la differenza in una citta come Milano dove le hamburgherie non mancano di certo. Promosso? Assolutamente si, da provare e soprattutto da addentare tenendo ben fermo il panino fra le mani. Buon appetito', source: 'The Old Now', url: 'http://www.theoldnow.it/denzel-art-burger-fish-more-il-burger.html', sortOrder: 3 },
    { text: 'Denzel e un indirizzo da consigliare, ottimi bocconi kasher', source: 'Corriere della Sera, Archivio Storico', url: 'http://archiviostorico.corriere.it/2013/maggio/05/Sugli_sgabellotti_ottimi_hamburger_kasher_co_0_20130505_e2264dce-b54b-11e2-a739-17156323ce70.shtml', sortOrder: 4 },
    { text: 'La cottura della carne, che avevo chiesto media, e perfetta. Il pane, che arriva direttamente da un forno kasher, e ben cotto e scrocchiante, all\'altezza dell\'ottimo contenuto. Il cetriolino che a prima vista non mi aveva convinta, da invece il giusto tono agrodolce', source: 'Dissapore', url: 'http://www.dissapore.com/mangiare-fuori/denzel-il-migliore-hamburger-di-milano-ragioniamo/', sortOrder: 5 },
    { text: 'Si dovrebbe andare da Denzel solo per sgranocchiare queste lamelle, che sono croccantissime e invitanti, intingendole nella maionese o nel ketchup che acquisiscono un sapore inedito proprio per la dolcezza di base delle patate. Strepitose.', source: 'The Royal Taster', url: 'http://theroyaltaster.com/2012/02/le-patate-dolci-fritte-di-denzel-milano/', sortOrder: 6 },
    { text: 'Il risultato e un menu estremamente cosmopolita, frutto delle suggestioni gastronomiche colte dal popolo ebraico in tutto il mondo: accanto agli hamburger (sia di manzo che di agnello che misti) in diverse varianti e personalizzabili sia nel peso che nei condimenti ci sono ricette come il pastrami', source: 'Tamtam Milano', url: 'http://www.tamtammilano.it/en/place/le2f/milano/ristorante/denzel', sortOrder: 7 }
  ]

  for (const review of reviews) {
    const existing = await prisma.review.findFirst({ where: { source: review.source, sortOrder: review.sortOrder } })
    if (!existing) {
      await prisma.review.create({ data: review })
    }
  }

  // FAQ items
  const faqItems = [
    { question: 'Che cosa e lo Shabbat?', answer: 'Lo Shabbat e il giorno di riposo settimanale della religione ebraica. Ha inizio al tramonto del venerdi e finisce al tramonto del sabato, per questo motivo non siamo aperti il venerdi sera e durante l\'ora legale anche il sabato sera.', sortOrder: 1 },
    { question: 'Che cosa e quella pergamena attaccata alla porta?', answer: 'Si chiama Mezuzah ed e appunto una pergamena su cui e stilata una preghiera fondamentale della religione ebraica. E usanza che chi entra in casa tocchi la mezuzah con le dita e baci le dita stesse, in segno di rispetto per la Torah di cui contiene passi.', sortOrder: 2 },
    { question: 'Sono intollerante al lattosio, posso stare tranquillo?', answer: 'Assolutamente si, nel nostro ristorante non possono essere introdotti latticini essendo basari (di carne) Glatt - Kosher. Non rinunciamo ai dolci pero che sono fatti di latte di soia.', sortOrder: 3 },
    { question: 'Che cosa rappresenta il candelabro con 9 braccia?', answer: 'Si chiama Menorah ed e un candelabro con nove candele: otto di queste rappresentano le notti di Chanukah, l\'ultima (la piu alta) e chiamata Shamash o "serva" perche e usata per illuminare le altre candele. Nella prima notte di Chanukah viene accesa una candela che continuera a bruciare per otto notti, fino a quando cioe tutte le candele saranno accese.', sortOrder: 4 },
    { question: 'Avete anche piatti vegetariani nel vostro menu?', answer: 'Si, ci sono i nostri croccanti felafel, insalate, involtini di melanzane e a breve anche l\'hamburger vegetariano.', sortOrder: 5 }
  ]

  for (const faq of faqItems) {
    const existing = await prisma.faqItem.findFirst({ where: { question: faq.question } })
    if (!existing) {
      await prisma.faqItem.create({ data: faq })
    }
  }

  // Services
  const services = [
    { name: 'PRENOTAZIONE', description: 'Invia una mail o chiama e ti riserveremo subito un tavolo', sortOrder: 1 },
    { name: 'TAKE AWAY', description: 'Chiama oppure ordina direttamente qui da noi i nostri piatti da gustare a casa', sortOrder: 2 },
    { name: 'DELIVERY', description: 'Denzel direttamente a casa tua grazie a Just Eat, Deliveroo, oppure tramite whatsapp al numero 3398246521', sortOrder: 3 }
  ]

  for (const service of services) {
    const existing = await prisma.service.findFirst({ where: { name: service.name } })
    if (!existing) {
      await prisma.service.create({ data: service })
    }
  }

  console.log('Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
