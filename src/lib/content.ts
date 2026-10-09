/**
 * Central content configuration for Simply Smilez Dental.
 * All facts below are taken from the clinic's published website
 * (simplysmilezdental.in) — address, hours, phone numbers, e-mail,
 * doctor qualifications, treatment descriptions, testimonials and links.
 * Nothing here is invented.
 */

export const site = {
  name: "Simply Smilez Dental",
  legalName: "Simply Smilez Dental Clinic",
  tagline: "Specialist dental care in Shaikpet, Hyderabad",
  founded: "2018",
  domain: "https://www.simplysmilezdental.in",
  address: {
    line1: "P.V. Reddy Complex, 1st Floor",
    line2: "Dwaraka Nagar Colony, O.U. Colony Road",
    line3: "Shaikpet, Hyderabad 500008",
    full: "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad 500008",
  },
  phones: [
    { label: "+91 77993 76656", href: "tel:+917799376656" },
    { label: "+91 96033 38904", href: "tel:+919603338904" },
  ],
  primaryPhone: { label: "+91 77993 76656", href: "tel:+917799376656" },
  whatsapp: "https://wa.me/917799376656",
  email: "info.invisaligndental@gmail.com",
  mapLink: "https://maps.app.goo.gl/wvkijcKcuaGCoHTq9",
  social: {
    facebook: "https://www.facebook.com/share/1F4XvjRLHq/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/sush_micro_dontist?stkn=cTMxejQ2ejl6djR0&utm_source=qr",
  },
  hours: [
    { days: "Monday – Saturday", time: "10:00 am – 9:00 pm" },
    { days: "Sunday", time: "11:00 am – 4:00 pm" },
  ],
  areas: [
    "O.U. Colony", "Dwaraka Nagar Colony", "Shaikpet", "Manikonda", "Tolichowki",
    "Raidurg", "Puppalaguda", "Film Nagar", "Jubilee Hills", "Banjara Hills",
    "Mehdipatnam", "Langar Houz", "Gachibowli", "Narsingi", "Kondapur",
  ],
  offer: "30% discount on Invisalign & dental implants",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
];

export type Treatment = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** optional wider/portrait photograph reserved for the full-height page opener */
  heroImage?: string;
  heroAlt?: string;
  facts: { label: string; value: string }[];
  who: string[];
  steps: { title: string; body: string }[];
  benefits: string[];
  considerations: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  seoTitle: string;
  seoDescription: string;
};

export const treatments: Treatment[] = [
  {
    slug: "braces-and-invisalign",
    index: "01",
    title: "Braces & Invisalign",
    eyebrow: "Orthodontics & Aligners",
    summary:
      "Advanced orthodontic solutions including traditional metal and ceramic braces and Invisalign clear aligners for teenagers and adults.",
    intro:
      "Crooked teeth, gaps and a bite that does not settle are among the most common reasons people walk into our clinic — and among the most rewarding to treat. Orthodontics moves teeth through bone at a controlled, biological rate, so the plan matters as much as the appliance. Dr. Ankush Kumar plans every case from records taken in-house: photographs, a digital scan or impressions, an OPG and, where needed, a lateral cephalogram. You are shown the finish before the first bracket is bonded.",
    image: "/images/braces.webp",
    imageAlt: "Orthodontic braces and clear aligner treatment at Simply Smilez Dental",
    facts: [
      { label: "Specialist", value: "Dr. Ankush Kumar, MDS (Orthodontics)" },
      { label: "Appliances", value: "Metal, ceramic & Invisalign clear aligners" },
      { label: "Typical duration", value: "6 months – 24 months, case dependent" },
      { label: "Reviews", value: "Progress checks every 4 – 8 weeks" },
    ],
    who: [
      "Crowding, spacing or overlapping teeth in teenagers and adults",
      "Overbite, underbite, open bite and crossbite concerns",
      "Teeth that have relapsed after earlier orthodontic treatment",
      "Patients who want a discreet option and are considering clear aligners",
      "Children referred for an early orthodontic assessment",
    ],
    steps: [
      { title: "Consultation & records", body: "Clinical examination with photographs, an OPG and a digital scan or study models. Your bite is analysed and the achievable finish is discussed honestly, including what orthodontics will not change." },
      { title: "Written plan", body: "A staged plan with appliance choice, estimated duration, number of appointments and the fee structure. With Invisalign, you see a digital simulation of the planned movement before you commit." },
      { title: "Active movement", body: "Braces are adjusted every four to eight weeks; aligners are changed at the interval prescribed. Elastics and other auxiliaries are added only when the bite needs them." },
      { title: "Retention", body: "Once teeth are in position, retainers hold them there. Fixed and removable retention options are explained at the end of treatment — retention is what protects the result." },
    ],
    benefits: [
      "Improved alignment, bite function and ease of cleaning",
      "Clear aligner option for patients who want treatment to go unnoticed",
      "Digital planning so the finish is understood before treatment begins",
      "Certified orthodontist-led care rather than general-dentist-supervised movement",
    ],
    considerations: [
      "Orthodontics requires commitment: appliances worn as instructed, hygiene maintained, appointments kept",
      "Gum and bone health must be established before movement starts",
      "Results differ with growth, bone quality and how faithfully instructions are followed",
      "Retainers are needed long term — teeth naturally drift with age",
    ],
    faqs: [
      { q: "Am I too old for braces?", a: "No. Teeth can be moved at any age provided the gums and bone are healthy. Adult orthodontics is a large part of our practice, and clear aligners are often the route adults prefer." },
      { q: "Invisalign or braces — which is right for me?", a: "It depends on the complexity of the movement, the bite and how you would prefer to live day to day. Simple to moderate alignment is often well suited to aligners; complex rotations and large corrections may be more predictable with fixed braces. The decision is made from your records, not from a preference for one product." },
      { q: "How long will treatment take?", a: "Most cases run between six months and two years. Your specialist will give an estimated range at planning stage and revise it as the teeth respond." },
      { q: "Will it hurt?", a: "Teeth feel tender for a few days after an adjustment or after changing to a new aligner tray. That is the bone responding, not damage, and it settles quickly." },
    ],
    related: ["pediatric-dentistry", "dental-veneers", "dental-crowns"],
    seoTitle: "Braces & Invisalign in Shaikpet, Hyderabad | Simply Smilez Dental",
    seoDescription:
      "Metal braces, ceramic braces and Invisalign clear aligners planned and delivered by Dr. Ankush Kumar, MDS, orthodontist at Simply Smilez Dental, Shaikpet, Hyderabad.",
  },
  {
    slug: "pediatric-dentistry",
    index: "02",
    title: "Pediatric Dentistry",
    eyebrow: "Dentistry for Children",
    summary:
      "Child-friendly dental care including preventive checkups, fluorides, sealants, cavity fillings, and early orthodontic evaluations for kids.",
    intro:
      "A child's first visits decide how they will feel about dentistry for the rest of their lives. Our approach is unhurried: first visit, no drill — a ride in the chair, a count of the teeth, a quick look, and something to smile about on the way out. Dr. Susheel Kumar, MDS, is a paediatric dentist and member of the Indian Society of Pedodontics & Preventive Dentistry, and handles everything from a toddler's first check-up to the management of a child who is already in pain.",
    image: "/images/pedia2.webp",
    imageAlt: "Paediatric dentistry and early orthodontic care for children at Simply Smilez Dental",
    facts: [
      { label: "Specialist", value: "Dr. Susheel Kumar, MDS (Paediatric Dentistry)" },
      { label: "First visit", value: "By the first birthday, or when the first tooth appears" },
      { label: "Prevention", value: "Fluoride varnish, sealants, hygiene instruction" },
      { label: "Early ortho", value: "Invisalign First assessments for suitable children" },
    ],
    who: [
      "Children due their first dental check-up",
      "Early childhood decay, including bottle and nursing caries",
      "A child with a broken, chipped or knocked-out tooth",
      "Deeply grooved molars that are hard to keep clean",
      "Parents who want an early orthodontic opinion for a growing smile",
    ],
    steps: [
      { title: "Tell, show, do", body: "Every instrument is introduced before it is used. Nothing happens in a child's mouth that they have not been shown first — this is how a first visit stays a good one." },
      { title: "Prevention first", body: "Examination, fluoride varnish, pit and fissure sealants on vulnerable molars, and dietary and brushing guidance that a child can actually follow." },
      { title: "Treatment", body: "Tooth-coloured fillings, pulp therapy for badly decayed baby teeth, and space maintenance — baby teeth hold the place for the adult teeth beneath them." },
      { title: "Growth review", body: "Around age seven the jaws are assessed for early orthodontic intervention. Some problems are far simpler to correct while a child is still growing." },
    ],
    benefits: [
      "Specialist paediatric care rather than adapted adult dentistry",
      "Prevention that keeps treatment small, short and painless",
      "Baby teeth protected so permanent teeth erupt in the right place",
      "Children leave as cooperative patients, not frightened ones",
    ],
    considerations: [
      "Behaviour guidance depends on the child's age and cooperation — some young or very anxious children need more time or additional support",
      "Radiographs are taken only when clinically justified",
      "Home brushing, diet and review intervals determine whether treatment lasts",
    ],
    faqs: [
      { q: "When should my child first see a dentist?", a: "By the first birthday or within six months of the first tooth appearing. Early visits are short, cheap on anxiety and they let us catch problems while they are still simple." },
      { q: "Will you treat my child's decay in one visit?", a: "It depends on the depth of the decay, the tooth and how your child is coping. Small cavities are often completed in a single appointment; deeper ones may need staging or pulp therapy." },
      { q: "Are baby teeth really worth treating?", a: "Yes. Baby teeth hold space for the permanent teeth, allow proper chewing and speech, and an infected baby tooth can affect the developing tooth beneath it." },
      { q: "What is Invisalign First?", a: "A clear-aligner approach designed for younger patients with developing dentitions, used where the case is suitable. Suitability is assessed clinically before any aligner treatment is proposed." },
    ],
    related: ["braces-and-invisalign", "composite-fillings", "root-canal-treatment"],
    seoTitle: "Pediatric Dentist in Shaikpet, Hyderabad | Simply Smilez Dental",
    seoDescription:
      "Gentle, specialist paediatric dental care — check-ups, fluoride, sealants, fillings and early orthodontic assessment with Dr. Susheel Kumar, MDS, in Shaikpet, Hyderabad.",
  },
  {
    slug: "dental-implants",
    index: "03",
    title: "Dental Implants",
    eyebrow: "Implantology",
    summary:
      "Fixed, natural-looking tooth replacement option to restore missing teeth, improve chewing function, facial structure, and smiling confidence.",
    intro:
      "A missing tooth changes more than your smile — the neighbouring teeth drift, the bite shifts and the bone above the socket slowly shrinks. A dental implant replaces the root as well as the crown, which is why it is the closest thing dentistry has to the tooth you lost. Implant placement at Simply Smilez is planned from a CBCT scan where indicated, so the position of the implant is decided in three dimensions before surgery begins.",
    image: "/images/dentalimp.webp",
    imageAlt: "Dental implant model and tooth replacement at Simply Smilez Dental, Hyderabad",
    heroImage: "/images/susheel2.webp",
    heroAlt: "Dental treatment in progress at Simply Smilez Dental clinic",
    facts: [
      { label: "Specialist", value: "Dr. Susheel Kumar, MDS (Implant Dentistry)" },
      { label: "Planning", value: "Clinical examination with CBCT imaging where indicated" },
      { label: "Healing", value: "Osseointegration typically 3 – 6 months" },
      { label: "Options", value: "Single tooth, multiple teeth, implant-supported bridge" },
    ],
    who: [
      "A single missing tooth, where a bridge would require cutting down healthy neighbours",
      "Several missing teeth, or a bridge that is no longer serviceable",
      "Difficulty chewing or a denture that moves while you eat",
      "Collapse of the lip or cheek support following long-term tooth loss",
      "A front tooth that has been lost to injury",
    ],
    steps: [
      { title: "Assessment", body: "Examination of the site, the bite and the opposing teeth, with radiographic planning to measure bone volume and locate structures that must be avoided." },
      { title: "Placement", body: "The implant is placed into the bone under local anaesthesia. Simple sites are straightforward; grafting or sinus augmentation, where required, changes the sequence and the timeline." },
      { title: "Integration", body: "Over the following months the bone fuses to the implant surface. A temporary tooth is provided for visible areas so you are never left without a front tooth." },
      { title: "The final tooth", body: "Once integration is confirmed, the crown is fabricated and fitted, its bite adjusted and its shade matched to the neighbouring teeth." },
    ],
    benefits: [
      "Replaces the root, helping preserve the bone in the missing-tooth site",
      "Neighbouring teeth are left untouched, unlike a conventional bridge",
      "Restores chewing efficiency and support for the lip and cheek",
      "Designed to look, feel and function like a natural tooth",
    ],
    considerations: [
      "Requires adequate bone and healthy gums; some patients need grafting first",
      "Smoking, uncontrolled diabetes and some medications affect healing and success",
      "Treatment takes months, not weeks — integration cannot be rushed",
      "Implants need the same daily cleaning and review visits as natural teeth",
    ],
    faqs: [
      { q: "How long does the whole process take?", a: "A straightforward single implant is usually around three to six months from placement to the finished crown, longer if grafting is needed first." },
      { q: "Is the surgery painful?", a: "The procedure is done under local anaesthesia and patients generally report it as easier than expected. Mild soreness for a few days afterwards is normal and is managed with routine painkillers." },
      { q: "How long do implants last?", a: "Implants have excellent long-term survival, but they are maintained, not set and forget. Hygiene, review visits and controlling grinding all affect how long an implant serves you." },
      { q: "Will I need a bone graft?", a: "Only if the scan shows insufficient bone at the planned site. This is assessed before surgery and explained with the plan, not discovered on the day." },
    ],
    related: ["dental-crowns", "wisdom-tooth-extraction", "root-canal-treatment"],
    seoTitle: "Dental Implants in Shaikpet, Hyderabad | Simply Smilez Dental",
    seoDescription:
      "Dental implants planned and placed with CBCT-guided precision by Dr. Susheel Kumar, MDS, implantologist at Simply Smilez Dental, Shaikpet, Hyderabad.",
  },
  {
    slug: "root-canal-treatment",
    index: "04",
    title: "Root Canal Treatment",
    eyebrow: "Endodontics",
    summary:
      "Modern laser-assisted root canal treatment designed to eliminate root canal bacterial infection, relieve pain, and save your natural tooth.",
    intro:
      "When the nerve inside a tooth becomes infected or dies, the tooth cannot heal itself — but it can absolutely be saved. Root canal treatment removes the infected tissue, disinfects the canal system and seals it, so the tooth can stay in your mouth doing its job for years. Most patients arrive in real pain and leave the same day without it. The reputation root canals have earned belongs to dentistry of several decades ago.",
    image: "/images/laserroot.webp",
    imageAlt: "Laser-assisted root canal treatment at Simply Smilez Dental, Hyderabad",
    facts: [
      { label: "Visits", value: "Usually one or two appointments" },
      { label: "Anaesthesia", value: "Local anaesthesia throughout" },
      { label: "Finishing", value: "Crown or filling to protect the treated tooth" },
      { label: "Technology", value: "Laser-assisted disinfection where indicated" },
    ],
    who: [
      "Lingering pain to hot or cold, or pain that wakes you at night",
      "An abscess, a swelling, or a pimple on the gum that keeps returning",
      "A tooth that has darkened after trauma",
      "A deep cavity or a cracked tooth that has reached the nerve",
      "A tooth that is tender to bite on and showing changes on radiograph",
    ],
    steps: [
      { title: "Diagnosis", body: "Cold testing, percussion, radiographs and your own description of the pain identify which tooth is responsible — occasionally more than one tooth can refer pain to the same place." },
      { title: "Cleaning the canals", body: "The tooth is numbed, the canals are located, measured, cleaned and shaped, and the infection is flushed out. Laser assistance is used where it adds value to the case." },
      { title: "Sealing", body: "The canals are dried and sealed with a biocompatible filling material. If the tooth is very infected it may be left to settle between visits with medication in the canal." },
      { title: "Restoration", body: "A filling or crown is placed to stop the tooth from fracturing. A root-treated tooth is brittle — a crown is usually the difference between keeping it for ten years and losing it to a split." },
    ],
    benefits: [
      "Relieves the pain of a dental abscess, usually quickly",
      "Keeps your natural tooth rather than replacing it",
      "Preserves the bone and the position of the neighbouring teeth",
      "Tooth-coloured restoration options for front teeth",
    ],
    considerations: [
      "A heavily damaged or cracked tooth may not be restorable and may need extraction",
      "A crown is commonly required afterwards and is a separate cost",
      "Retreatment is possible if a tooth fails years later, though success rates fall",
      "Radiographs taken at follow-up are how healing is confirmed",
    ],
    faqs: [
      { q: "Is a root canal painful?", a: "The treatment itself is done under local anaesthesia and is comparable to having a filling placed. It is the infection, untreated, that causes the pain — and most patients feel markedly better afterwards." },
      { q: "How many visits will I need?", a: "Many teeth are completed in one appointment. Infected teeth, or those with complex canal anatomy, are more predictable when staged over two visits." },
      { q: "Will I always need a crown?", a: "For back teeth that take the force of chewing, a crown is strongly recommended — a root-treated molar left with only a filling is at real risk of fracturing. Front teeth are often restored with a bonded filling instead." },
      { q: "What if the tooth cannot be saved?", a: "We will tell you plainly. Where a tooth is beyond repair, extraction and an implant or bridge option is discussed at the same appointment so you are not left waiting." },
    ],
    related: ["dental-crowns", "dental-implants", "composite-fillings"],
    seoTitle: "Root Canal Treatment in Shaikpet, Hyderabad | Simply Smilez Dental",
    seoDescription:
      "Laser-assisted root canal treatment to relieve dental pain and save your natural tooth — one or two comfortable appointments at Simply Smilez Dental, Shaikpet, Hyderabad.",
  },
  {
    slug: "dental-crowns",
    index: "05",
    title: "Dental Crowns",
    eyebrow: "Prosthodontics",
    summary:
      "Durable ceramic and zirconia crowns to protect weak teeth after root canal treatment or severe tooth damage, restoring strength and aesthetics.",
    intro:
      "When a tooth has lost too much structure — through decay, a crack, or root canal treatment — a filling no longer has anything to hold on to. A crown is a rigid cap that encircles the remaining tooth, sharing the load and stopping a split from travelling further. Modern ceramic and zirconia crowns are shade-matched and translucent enough that they sit quietly beside your natural teeth.",
    image: "/images/crowns.webp",
    imageAlt: "Ceramic and zirconia dental crowns at Simply Smilez Dental, Hyderabad",
    facts: [
      { label: "Materials", value: "Zirconia, e-max and metal-ceramic options" },
      { label: "Appointments", value: "Typically two visits plus a fit" },
      { label: "Duration", value: "Two to three weeks in most cases" },
      { label: "Lifespan", value: "Depends on bite, hygiene and grinding habits" },
    ],
    who: [
      "A tooth that has had root canal treatment and needs protection",
      "A cracked, fractured or badly broken-down tooth",
      "A heavily filled tooth with little healthy structure left",
      "A discoloured or misshapen tooth that will not respond to whitening",
      "A missing tooth replaced by a bridge, using crowns on either side",
    ],
    steps: [
      { title: "Preparation", body: "The tooth is reduced by a precise, even amount so the crown can seat without being bulky. The margin is designed to sit where it can be kept clean." },
      { title: "Impression or scan", body: "A digital scan or conventional impression is taken and sent to the laboratory. A temporary crown protects the tooth while the definitive one is made." },
      { title: "Try-in & fit", body: "Shade, contact and bite are checked before cementation. Adjustments are made in the mouth, not after you have gone home." },
      { title: "Aftercare", body: "The crown is reviewed at the next routine visit. With good hygiene and a night guard where grinding is a factor, a well-made crown serves for many years." },
    ],
    benefits: [
      "Restores the strength of a tooth that would otherwise split",
      "Improves shape, colour and symmetry in the smile line",
      "Protects a root-treated tooth from fracture",
      "Ceramic options avoid the dark margin of older metal-ceramic crowns",
    ],
    considerations: [
      "Healthy tooth structure is removed to make room for the crown",
      "A crown is an artificial restoration — it can still decay at its edge and needs careful cleaning",
      "Grinding and clenching shorten its life unless managed",
      "Very occasionally a tooth needs root canal treatment after preparation",
    ],
    faqs: [
      { q: "How long does a crown last?", a: "There is no single answer — bite forces, hygiene, diet and grinding all matter. Well-made crowns with good home care commonly last many years, and they are checked at every check-up." },
      { q: "Will I need a root canal first?", a: "Not usually. Root canal treatment is only needed if the nerve is already infected or is damaged during preparation, or if the tooth was symptomatic beforehand." },
      { q: "Can you match the colour?", a: "Shade is selected with you, in natural light, alongside the neighbouring teeth. Front teeth are the hardest to match and are the cases we plan most carefully." },
      { q: "Is there an alternative to a crown?", a: "Sometimes a large bonded filling will do — but only where enough tooth remains. We will show you both options and where each one is sensible." },
    ],
    related: ["root-canal-treatment", "composite-fillings", "dental-implants"],
    seoTitle: "Dental Crowns in Shaikpet, Hyderabad | Simply Smilez Dental",
    seoDescription:
      "Ceramic and zirconia dental crowns to protect and restore damaged teeth at Simply Smilez Dental, Shaikpet, Hyderabad. Two-visit treatment, shade-matched results.",
  },
  {
    slug: "composite-fillings",
    index: "06",
    title: "Composite Fillings",
    eyebrow: "Restorative Dentistry",
    summary:
      "Tooth-coloured composite resin restorations to treat decay, repair minor chips, and restore natural tooth structure seamlessly.",
    intro:
      "Composite bonding is the quiet workhorse of a dental practice. The decayed or chipped part of the tooth is removed conservatively, and the space is rebuilt with a resin matched to your tooth shade and cured hard with a blue light. Unlike the silver amalgam fillings of the past, the repair disappears — and because composite bonds to tooth structure, less healthy tooth needs to be removed.",
    image: "/images/composite.webp",
    imageAlt: "Tooth-coloured composite fillings for decay and chipped teeth at Simply Smilez Dental",
    facts: [
      { label: "Appointment", value: "Usually a single visit" },
      { label: "Anaesthesia", value: "Local anaesthesia for decay removal" },
      { label: "Shading", value: "Matched to the adjacent tooth" },
      { label: "Also used for", value: "Chips, gaps and minor reshaping" },
    ],
    who: [
      "A cavity in a tooth that is causing no symptoms yet",
      "A chipped or broken front tooth",
      "Old silver amalgam fillings you would like replaced",
      "Small gaps or worn edges you want reshaped",
      "Sensitivity at the necks of the teeth where enamel has worn",
    ],
    steps: [
      { title: "Removal of decay", body: "Decay is identified, often with a caries-detecting dye, and removed until only sound tooth remains. Anaesthesia keeps this painless." },
      { title: "Bonding & layering", body: "The tooth is isolated and bonded, then the resin is placed in thin layers, each cured individually, so the restoration behaves as closely as possible to enamel and dentine." },
      { title: "Finishing & bite adjustment", body: "The filling is contoured and polished so it is smooth to the tongue and correct against the opposing tooth. A high spot is what makes a tooth ache after a filling." },
      { title: "Review", body: "Sensitivity to cold for a short while can follow a deeper filling and normally settles. Anything longer than that is a reason to call us." },
    ],
    benefits: [
      "Tooth-coloured — the repair is effectively invisible",
      "Bonds to the tooth, allowing a more conservative preparation than amalgam",
      "Repairs chips and worn edges in the same appointment",
      "No mercury-containing material",
    ],
    considerations: [
      "Composite is not ideal for very large restorations or areas of heavy biting force, where a crown may last longer",
      "It can stain and wear at the margins over time and may need replacement",
      "Deep cavities may cause temporary sensitivity after treatment",
      "It does not stop decay — diet and hygiene decide how long the tooth stays well",
    ],
    faqs: [
      { q: "How long does a composite filling last?", a: "It depends on the size of the filling, its position and your diet. Small restorations do well for many years; larger ones on back teeth tend to have a shorter life and are reviewed at each check-up." },
      { q: "Can you replace my silver fillings?", a: "Yes. We remove the old material and rebuild the tooth with tooth-coloured resin. We do, however, remove sound amalgam only when there is a good clinical reason — we will discuss that with you first." },
      { q: "Will I need an injection?", a: "For decay removal, usually yes. For a purely cosmetic build-up on an intact tooth, often no." },
      { q: "Can a filling fix a gap between my teeth?", a: "Composite can close small diastemas and reshape teeth. For larger gaps or major alignment changes, orthodontics gives the more predictable result." },
    ],
    related: ["dental-crowns", "dental-veneers", "root-canal-treatment"],
    seoTitle: "Composite Fillings in Shaikpet, Hyderabad | Simply Smilez Dental",
    seoDescription:
      "Tooth-coloured composite fillings to treat decay and repair chipped teeth, conservatively and in a single visit, at Simply Smilez Dental, Shaikpet, Hyderabad.",
  },
  {
    slug: "dental-veneers",
    index: "07",
    title: "Dental Veneers",
    eyebrow: "Cosmetic Dentistry",
    summary:
      "Ultra-thin porcelain or composite veneers designed to correct discoloured, chipped, gapped, or slightly misaligned teeth for a red-carpet smile.",
    intro:
      "A veneer is a wafer-thin shell bonded to the front surface of a tooth — the dental equivalent of a perfectly fitted glaze. It changes colour, shape, length or the way light passes through a tooth, and it does so conservatively. The first conversation about veneers is always about what you would rather keep: alignment cases may be better served by orthodontics, and single discoloured teeth sometimes need nothing more than whitening or bonding.",
    image: "/images/veneers.webp",
    imageAlt: "Porcelain veneers for discoloured, chipped and gapped teeth at Simply Smilez Dental",
    facts: [
      { label: "Materials", value: "Porcelain or direct composite" },
      { label: "Visits", value: "Two to three appointments" },
      { label: "Planning", value: "Shade, proportion and smile-line design" },
      { label: "Longevity", value: "Cosmetic restoration — review at every check-up" },
    ],
    who: [
      "Deep or intrinsic discolouration that whitening will not lift",
      "Chipped or worn front teeth",
      "Uneven tooth shapes or small gaps you want closed",
      "Mild rotation or overlap where orthodontics is not your choice",
      "A smile where the proportions of teeth and gum line are unbalanced",
    ],
    steps: [
      { title: "Design", body: "Photographs and a scan are used to plan length, width and shade in relation to your lip line and face. You see and approve the proposed shape before irreversible work begins." },
      { title: "Preparation", body: "A minimal amount of enamel is removed — for some teeth, none at all — so the veneer sits flush rather than looking bulky at the gum." },
      { title: "Try-in", body: "The veneer is tried in, the shade verified with you and the bite checked. Cosmetic decisions are confirmed in the mouth, not from a shade tab." },
      { title: "Bonding", body: "The veneer is etched, conditioned and bonded under isolation, then polished. Gum health is re-evaluated at the follow-up visit." },
    ],
    benefits: [
      "Immediate, predictable change in colour, shape and proportion",
      "Porcelain resists staining far better than natural enamel or composite",
      "Minimal enamel removal compared with a full crown",
      "Restores confidence in the front teeth you show every day",
    ],
    considerations: [
      "Preparation is irreversible — enamel removed does not grow back",
      "Veneers can debond, chip or fracture and may need repair or replacement",
      "A bite that grinds heavily must be controlled first, or the veneers will suffer",
      "Veneers do not treat decay or gum disease; those are dealt with beforehand",
    ],
    faqs: [
      { q: "How many teeth should be treated?", a: "It depends on how wide your smile is and on the shade of your untreated teeth. We plan the number that looks natural rather than a fixed count." },
      { q: "Do I need to have my teeth drilled down?", a: "Most cases need a small, controlled reduction of enamel. Some teeth can be bonded with little or no preparation at all — that is decided tooth by tooth." },
      { q: "Porcelain or composite — which is better?", a: "Porcelain is stronger, more lifelike and keeps its polish and colour for longer. Composite is less costly and repairable in the mouth but stains and wears sooner. Both have a place." },
      { q: "How long do veneers last?", a: "They are durable but not permanent. Night grinding, hard biting on ice or pens, and missed check-ups all shorten their life; reviewed and cared for properly, they serve for many years." },
    ],
    related: ["teeth-whitening", "dental-crowns", "braces-and-invisalign"],
    seoTitle: "Dental Veneers in Shaikpet, Hyderabad | Simply Smilez Dental",
    seoDescription:
      "Porcelain and composite dental veneers for discoloured, chipped or gapped teeth, designed shade-by-shade at Simply Smilez Dental, Shaikpet, Hyderabad.",
  },
  {
    slug: "teeth-whitening",
    index: "08",
    title: "Teeth Whitening",
    eyebrow: "Laser & Whitening",
    summary:
      "Fast, safe laser-assisted bleaching treatments to remove stubborn stains and brighten your smile by several shades in a single in-clinic session.",
    intro:
      "Whitening works by oxidising the pigment molecules inside the tooth — it changes the colour of the enamel, not its shape or position. It is the simplest way to lift years of coffee, tea, tobacco and spice staining, and it is also the treatment most often bought without a proper examination first. We check for decay, leaking fillings, cracks and gum disease before any whitening begins, because peroxide on an unhealthy tooth is a very different experience.",
    image: "/images/laserteeth.webp",
    imageAlt: "Laser-assisted in-clinic teeth whitening at Simply Smilez Dental, Hyderabad",
    facts: [
      { label: "In-clinic", value: "Single session with laser activation" },
      { label: "Take-home", value: "Custom trays, worn as prescribed" },
      { label: "Preparation", value: "Full examination and shade record first" },
      { label: "Maintenance", value: "Top-ups as the shade settles over time" },
    ],
    who: [
      "General dulling and yellowing with age",
      "Extrinsic staining from tea, coffee, tobacco and spice",
      "A special event where a brighter smile is wanted",
      "Brides, grooms and wedding parties planning ahead",
      "Patients wanting to preview a brighter shade before veneers",
    ],
    steps: [
      { title: "Examination", body: "Decay, existing restorations, cracks and gum health are assessed and the starting shade is recorded, so progress is measured and not guessed." },
      { title: "Protection", body: "The gums are covered and the soft tissues isolated. Sensitivity during and after treatment relates directly to how carefully this step is done." },
      { title: "Whitening", body: "The bleaching gel is applied to the teeth and activated with the laser, in cycles, with the shade checked as it develops." },
      { title: "Home care", body: "Desensitising advice and, where appropriate, custom trays for topping up later — because whitening fades and is maintained, not completed once." },
    ],
    benefits: [
      "A noticeably brighter smile in a single appointment",
      "Non-invasive — no drilling and no change to tooth structure",
      "Custom take-home trays allow controlled top-ups",
      "Shade recorded before and after so results are visible",
    ],
    considerations: [
      "Fillings, crowns and veneers do not whiten — they stay their original colour",
      "Sensitivity during or after treatment is common and usually short-lived",
      "Some stains, particularly tetracycline discoloration, respond poorly",
      "Results fade with coffee, tea, tobacco and red wine, and need maintenance",
    ],
    faqs: [
      { q: "How many shades will I gain?", a: "It varies with the original shade and the cause of the staining. Natural enamel whitens well; deeper intrinsic discoloration may need a different approach altogether." },
      { q: "Is whitening safe?", a: "Used as directed, with a healthy mouth and properly protected gums, whitening is considered safe and is one of the most studied cosmetic procedures in dentistry." },
      { q: "Will it damage my enamel?", a: "No. Correctly dosed peroxide does not remove enamel, but over-use of products bought elsewhere can irritate gums and increase sensitivity. We prescribe the concentration and the timing." },
      { q: "Will my fillings change colour?", a: "No. Tooth-coloured fillings, crowns and veneers stay as they are, which is why we plan front-tooth work with the final shade in mind." },
    ],
    related: ["dental-veneers", "composite-fillings", "braces-and-invisalign"],
    seoTitle: "Teeth Whitening in Shaikpet, Hyderabad | Simply Smilez Dental",
    seoDescription:
      "Laser-assisted teeth whitening to lift coffee, tea and tobacco staining in a single in-clinic session at Simply Smilez Dental, Shaikpet, Hyderabad.",
  },
  {
    slug: "laser-gum-treatment",
    index: "09",
    title: "Laser Gum Treatment",
    eyebrow: "Periodontics",
    summary:
      "Minimally invasive laser gum therapy to treat periodontitis, bleeding gums, gum recession, and aesthetic gum depigmentation.",
    intro:
      "Bleeding gums are not normal, and they are not something to ignore. Bleeding on brushing usually means inflammation at the gum margin — gingivitis, which is reversible — and untreated inflammation that has begun to destroy the bone underneath is periodontitis, which is not. Laser therapy allows us to treat the pocket lining and reshape the gum with less bleeding, less swelling and a faster recovery than a scalpel in many cases.",
    image: "/images/lasergum.webp",
    imageAlt: "Laser gum treatment for bleeding gums and periodontal disease at Simply Smilez Dental",
    facts: [
      { label: "Indications", value: "Bleeding gums, periodontitis, recession, pigmentation" },
      { label: "Anaesthesia", value: "Local anaesthesia, usually minimal" },
      { label: "Recovery", value: "Typically faster than conventional surgery" },
      { label: "Maintenance", value: "Periodic review and maintenance visits" },
    ],
    who: [
      "Gums that bleed when you brush or floss",
      "Persistent bad breath or a bad taste in the mouth",
      "Gum pockets that hold plaque below the reach of a toothbrush",
      "Receding gums exposing the root surface",
      "Dark pigmentation of the gums you would like evened",
    ],
    steps: [
      { title: "Periodontal charting", body: "Pocket depths, bleeding points, gum recession and tooth mobility are measured and recorded, with radiographs to show bone levels. You cannot treat what you have not measured." },
      { title: "Scaling & root planing", body: "The root surfaces are cleaned beneath the gum line — this is the foundation of periodontal treatment, with or without a laser." },
      { title: "Laser therapy", body: "The soft tissue lining the pocket is treated to remove diseased tissue and reduce bacterial load, and the gum is gently contoured where shape is part of the problem." },
      { title: "Maintenance", body: "Periodontal disease is a long-term condition. Review and maintenance visits at the interval you are given are what hold the result." },
    ],
    benefits: [
      "Addresses the cause of bleeding gums rather than masking it",
      "Less bleeding and swelling, and usually a quicker recovery",
      "Pocket reduction that makes daily cleaning possible again",
      "Gum contouring can improve an uneven or low gum line",
    ],
    considerations: [
      "Periodontal disease is controlled, not cured — maintenance is lifelong",
      "Lost bone and gum do not fully regenerate without grafting procedures",
      "Smoking markedly worsens both the disease and the healing response",
      "Home cleaning technique is decisive; no laser compensates for a toothbrush used badly",
    ],
    faqs: [
      { q: "My gums bleed — is that serious?", a: "Bleeding on brushing is a sign of inflammation that should be assessed. It often reverses quickly with proper cleaning; bleeding that continues usually means deeper disease." },
      { q: "What is the difference between gingivitis and periodontitis?", a: "Gingivitis is inflammation of the gum only and is reversible. Periodontitis involves loss of the bone and ligament holding the tooth — it is manageable but the damage already done does not return by itself." },
      { q: "Does laser treatment hurt?", a: "Treatment is carried out under local anaesthesia. Afterwards, mild tenderness for a day or two is normal and settles with routine pain relief." },
      { q: "Will my gums grow back?", a: "Gum that has been lost does not regrow on its own. In selected cases grafting can restore coverage; in others the aim is to stop progression and keep the roots comfortable and clean." },
    ],
    related: ["root-canal-treatment", "wisdom-tooth-extraction", "dental-implants"],
    seoTitle: "Laser Gum Treatment in Shaikpet, Hyderabad | Simply Smilez Dental",
    seoDescription:
      "Minimally invasive laser gum therapy for bleeding gums, periodontitis and gum recession at Simply Smilez Dental, Shaikpet, Hyderabad.",
  },
  {
    slug: "wisdom-tooth-extraction",
    index: "10",
    title: "Wisdom Tooth Extraction",
    eyebrow: "Oral Surgery",
    summary:
      "Gentle, expert surgical removal of impacted, painful, or overcrowded third molars to prevent infection and structural jaw pain.",
    intro:
      "Wisdom teeth arrive last, in a jaw that often has no room for them. When they erupt sideways, partly come through, or trap gum and food against the tooth in front, the result is pain, swelling and recurrent infection. Not every wisdom tooth needs removal — an asymptomatic, fully erupted and cleanable one can be kept — but when they cause trouble, removing them early is usually simpler than waiting until they are infected.",
    image: "/images/wisdom.webp",
    imageAlt: "Wisdom tooth extraction and oral surgery at Simply Smilez Dental, Hyderabad",
    facts: [
      { label: "Assessment", value: "Clinical exam with OPG radiograph" },
      { label: "Procedure", value: "Local anaesthesia; sedation options discussed" },
      { label: "Time", value: "20 – 60 minutes depending on the tooth" },
      { label: "Aftercare", value: "Written instructions and a review call" },
    ],
    who: [
      "Pain or swelling at the back of the jaw, often worse at night",
      "Repeated infection or gum flap (pericoronitis) over a partly erupted tooth",
      "Decay on the wisdom tooth or on the tooth in front of it",
      "Cysts or damage identified on a radiograph",
      "A tooth that is preventing you from cleaning the neighbouring tooth",
    ],
    steps: [
      { title: "Radiographic assessment", body: "An OPG shows the number of roots, their curvature and how close the tooth sits to the inferior alveolar nerve — the information that decides how careful the surgery must be." },
      { title: "Removal", body: "The tooth is removed under local anaesthesia, with the site numbed thoroughly before anything begins. Impacted teeth may need the gum reflected and the tooth divided." },
      { title: "The first 48 hours", body: "Gauze, cold packs, soft food and no rinsing or spitting on the day — these instructions are what prevent a dry socket, the most common complication." },
      { title: "Review", body: "Sutures are removed or resorb as instructed. Numbness, bleeding that will not stop or increasing pain are reasons to contact us straight away." },
    ],
    benefits: [
      "Relieves pain, swelling and recurrent infection at the back of the mouth",
      "Protects the tooth in front from decay and bone loss",
      "Planned from a radiograph, so surprises are minimised",
      "Prevents cyst formation around an unerupted tooth",
    ],
    considerations: [
      "Swelling and limited opening for two to three days afterwards is normal",
      "Rarely, the nerve supplying the lower lip or tongue can be bruised",
      "Removal of deeply buried teeth near the nerve carries greater risk and may be referred",
      "Smoking and drinking through a straw increase the risk of dry socket",
    ],
    faqs: [
      { q: "Do all wisdom teeth need to be removed?", a: "No. A tooth that is fully erupted, in a good position and cleanable can stay. We remove only the ones causing problems or predicted to." },
      { q: "How long is the recovery?", a: "Most people are back to normal activities within a day or two, with full soft-tissue healing over a couple of weeks. Difficult, impacted teeth take longer." },
      { q: "Can I eat after the procedure?", a: "Yes, once the numbness wears off — soft, cool food on the first day, and nothing hot, crunchy or sharp at the site." },
      { q: "Is surgery needed if the tooth is under the gum?", a: "It is still a surgical removal, planned from a radiograph. How involved it is depends on the tooth's position and the shape of its roots." },
    ],
    related: ["root-canal-treatment", "laser-gum-treatment", "dental-implants"],
    seoTitle: "Wisdom Tooth Extraction in Shaikpet, Hyderabad | Simply Smilez Dental",
    seoDescription:
      "Gentle, radiograph-planned wisdom tooth extraction and oral surgery for painful or impacted third molars at Simply Smilez Dental, Shaikpet, Hyderabad.",
  },
];

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);

export type Doctor = {
  slug: string;
  name: string;
  credential: string;
  role: string;
  seniority: string;
  portrait: string;
  portraitAlt: string;
  /** frame ratio / crop that respects the native aspect of the authentic photograph */
  portraitFrame: string;
  portraitPosition: string;
  bio: string;
  qualifications: { label: string; value: string }[];
  experience: string[];
  practice: string[];
  treatments: string[];
  faqs: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-ankush-kumar-orthodontist-invisalign-provider-hyderabad",
    name: "Dr. Ankush Kumar",
    credential: "MDS",
    role: "Orthodontist and Invisalign Provider",
    seniority: "Senior Doctor",
    portrait: "/images/ankush.webp",
    portraitAlt: "Dr. Ankush Kumar, orthodontist and Invisalign provider at Simply Smilez Dental",
    portraitFrame: "aspect-[6/5]",
    portraitPosition: "object-[50%_38%]",
    bio: "Dr. Ankush Kumar is an orthodontist and Invisalign provider practising in Hyderabad with nine years of experience. He practises at Simply Smilez Dental Clinic and works as a consultant at twenty dental clinics across the city. Specialising in advanced orthodontic techniques, clear aligners and full smile makeovers, he is recognised by the clinic for delivering precision smiles with maximum patient comfort.",
    qualifications: [
      { label: "MDS — Master of Dental Surgery", value: "SVS Institute of Dental Sciences" },
      { label: "BDS — Bachelor of Dental Surgery", value: "P. M. N. M. Dental College, Bagalkot, Karnataka" },
    ],
    experience: [
      "Nine years of dedicated experience in orthodontic and dental care",
      "Certified orthodontist and Invisalign provider",
      "Consultant orthodontist at 20 dental clinics across Hyderabad",
      "Member, Indian Orthodontic Society (IOS)",
    ],
    practice: [
      "Orthodontics",
      "Invisalign treatment",
      "Teeth alignment",
      "Orthodontic consultation",
      "Correcting dental alignment and bite concerns",
    ],
    treatments: ["braces-and-invisalign", "pediatric-dentistry", "dental-veneers"],
    faqs: [
      { q: "Where does Dr. Ankush Kumar practise?", a: "He practises at Simply Smilez Dental Clinic and works as a consultant at 20 dental clinics across Hyderabad." },
      { q: "What are Dr. Ankush Kumar's qualifications?", a: "He completed his BDS at P. M. N. M. Dental College, Bagalkot, Karnataka, and his MDS at SVS Institute of Dental Sciences. He is a member of the Indian Orthodontic Society." },
      { q: "Does he provide Invisalign?", a: "Yes. Clear aligner therapy is a core part of his practice, alongside fixed metal and ceramic braces for suitable cases." },
    ],
    seoTitle: "Dr. Ankush Kumar — Orthodontist & Invisalign Provider in Hyderabad",
    seoDescription:
      "Dr. Ankush Kumar, MDS — orthodontist and Invisalign provider with nine years of experience, practising at Simply Smilez Dental Clinic, Hyderabad. Member, Indian Orthodontic Society.",
  },
  {
    slug: "dr-susheel-kumar-pediatric-dentist-implantologist-hyderabad",
    name: "Dr. Susheel Kumar",
    credential: "MDS",
    role: "Pediatric Dentist and Implantologist",
    seniority: "Senior Doctor",
    portrait: "/images/susheel.webp",
    portraitAlt: "Dr. Susheel Kumar, paediatric dentist and implantologist at Simply Smilez Dental",
    portraitFrame: "aspect-[4/5]",
    portraitPosition: "object-[50%_30%]",
    bio: "Dr. Susheel Kumar is a paediatric dentist and implantologist practising in Hyderabad with nine years of experience. He practises at Simply Smilez Dental Clinic and serves as a consultant at multiple dental clinics across the city. Dedicated to paediatric oral wellness, preventive healthcare for children and advanced dental implant rehabilitation, he combines clinical work with child-friendly, compassionate care.",
    qualifications: [
      { label: "MDS — Master of Dental Surgery", value: "Panineeya Dental College, Hyderabad" },
      { label: "BDS — Bachelor of Dental Surgery", value: "P. M. N. M. Dental College, Bagalkot, Karnataka" },
    ],
    experience: [
      "Nine years of dedicated experience in dentistry, paediatric procedures and dental implantology",
      "Senior paediatric dentist and implantologist at Simply Smilez Dental Clinic",
      "Consultant dentist across 30 dental clinics in Hyderabad",
      "Member, Indian Society of Pedodontics & Preventive Dentistry (ISPPD)",
    ],
    practice: [
      "Paediatric dentistry",
      "Implant dentistry",
      "Preventive dental care",
      "Dental care for children",
      "General dental consultation",
    ],
    treatments: ["pediatric-dentistry", "dental-implants", "wisdom-tooth-extraction"],
    faqs: [
      { q: "Where does Dr. Susheel Kumar practise?", a: "He practises at Simply Smilez Dental Clinic and works as a consultant at 30 clinics across Hyderabad." },
      { q: "What are Dr. Susheel Kumar's qualifications?", a: "He completed his BDS at P. M. N. M. Dental College, Bagalkot, Karnataka, and his MDS at Panineeya Dental College, Hyderabad. He is a member of the Indian Society of Pedodontics & Preventive Dentistry." },
      { q: "Does he treat adults?", a: "Yes. Alongside children's dentistry he works in dental implant rehabilitation and general dental consultation, and he performs oral surgical procedures such as wisdom tooth extraction." },
    ],
    seoTitle: "Dr. Susheel Kumar — Pediatric Dentist & Implantologist in Hyderabad",
    seoDescription:
      "Dr. Susheel Kumar, MDS — paediatric dentist and implantologist with nine years of experience, practising at Simply Smilez Dental Clinic, Hyderabad. Member, ISPPD.",
  },
];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);

export const testimonials = [
  {
    quote:
      "Dr. Susheel Kumar is my dental doctor for years now. I am very happy and pleased with his work. He is very smart and his work is excellent.",
    name: "Ashok",
  },
  {
    quote:
      "Dr Ankush has been working on my problematic teeth for the last 6 months. I am so thankful to him. He is very gentle and caring.",
    name: "Ankush",
  },
  {
    quote: "Awesome dentist. Great and legitimate service. You will look forward to going there.",
    name: "Samatha",
  },
];

export const homeFaqs = [
  {
    q: "Where is Simply Smilez Dental Clinic located?",
    a: "The clinic is at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad – 500008. It is easily reachable from Shaikpet, O.U. Colony, Manikonda, Tolichowki, Mehdipatnam and nearby areas.",
  },
  {
    q: "Do you provide Invisalign?",
    a: "Yes. We provide Invisalign clear aligners for teens and adults looking for a comfortable, discreet alternative to traditional braces, and Invisalign First for children with developing smiles.",
  },
  {
    q: "What treatments are available at the clinic?",
    a: "Invisalign and braces, Invisalign First for kids, root canal treatment, dental implants, cosmetic dentistry, teeth whitening, crowns and bridges, composite fillings, veneers, paediatric dentistry, wisdom tooth extraction, laser gum treatment and general dental care.",
  },
  {
    q: "Is root canal treatment painful?",
    a: "Modern root canal treatment is typically comfortable and performed under local anaesthesia. Most patients experience little to no pain during the procedure and feel significant relief afterwards.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call us on +91 77993 76656 or +91 96033 38904, message us on WhatsApp, or send the enquiry form on the contact page. Our team will help you schedule a convenient time.",
  },
];

export const galleryCases = [
  { src: "/images/gallery-5.webp", alt: "Pre-treatment and post-treatment image of a Simply Smilez Dental patient case", cap: "Case record — pre and post treatment" },
  { src: "/images/gallery-6.webp", alt: "Smile transformation before and after orthodontic treatment", cap: "Orthodontic transformation" },
  { src: "/images/one.webp", alt: "Before and after correction of crowded teeth", cap: "Crowding corrected" },
  { src: "/images/three.webp", alt: "Before and after paediatric dental treatment", cap: "Paediatric treatment result" },
  { src: "/images/teeth-1.webp", alt: "Before and after alignment correction", cap: "Alignment correction" },
  { src: "/images/pedia2.webp", alt: "Paediatric dental treatment results", cap: "Growing smiles" },
];

export const galleryClinic = [
  { src: "/images/susheel3.webp", alt: "The clinical team at Simply Smilez Dental", cap: "The team" },
  { src: "/images/lasergum.webp", alt: "Dental treatment in progress at Simply Smilez Dental", cap: "Treatment in progress" },
  { src: "/images/laserteeth.webp", alt: "Laser teeth whitening in the surgery", cap: "Laser whitening" },
  { src: "/images/laserroot.webp", alt: "Root canal treatment being carried out", cap: "Endodontics" },
  { src: "/images/seven.webp", alt: "A young patient in the dental chair", cap: "A first visit" },
  { src: "/images/dentalimp.webp", alt: "Dental implant model used for patient consultation", cap: "Implant consultation" },
];

/** Old published URL → new route. Mirrored in next.config.ts redirects. */
export const redirectMap: { source: string; destination: string; permanent: boolean }[] = [
  { source: "/index.html", destination: "/", permanent: true },
  { source: "/about.html", destination: "/about", permanent: true },
  { source: "/all-services.html", destination: "/treatments", permanent: true },
  { source: "/gallery.html", destination: "/gallery", permanent: true },
  { source: "/doctor.html", destination: "/doctors", permanent: true },
  { source: "/testimonal.html", destination: "/testimonials", permanent: true },
  { source: "/contact.html", destination: "/contact", permanent: true },
  { source: "/dentalimplant.html", destination: "/treatments/dental-implants", permanent: true },
  { source: "/composite-fillings-hyderabad.html", destination: "/treatments/composite-fillings", permanent: true },
  { source: "/crowns.html", destination: "/treatments/dental-crowns", permanent: true },
  { source: "/dental-veneers-hyderabad.html", destination: "/treatments/dental-veneers", permanent: true },
  { source: "/laserteeth.html", destination: "/treatments/teeth-whitening", permanent: true },
  { source: "/braces.html", destination: "/treatments/braces-and-invisalign", permanent: true },
  { source: "/laserroot.html", destination: "/treatments/root-canal-treatment", permanent: true },
  { source: "/lasergum.html", destination: "/treatments/laser-gum-treatment", permanent: true },
  { source: "/pediatary.html", destination: "/treatments/pediatric-dentistry", permanent: true },
  { source: "/wisdom.html", destination: "/treatments/wisdom-tooth-extraction", permanent: true },
  {
    source: "/doctor/dr-ankush-kumar-orthodontist-invisalign-provider-hyderabad.html",
    destination: "/doctors/dr-ankush-kumar-orthodontist-invisalign-provider-hyderabad",
    permanent: true,
  },
  {
    source: "/doctor/dr-susheel-kumar-pediatric-dentist-implantologist-hyderabad.html",
    destination: "/doctors/dr-susheel-kumar-pediatric-dentist-implantologist-hyderabad",
    permanent: true,
  },
];
