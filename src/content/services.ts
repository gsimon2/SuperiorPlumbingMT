export type PlumbingService = {
   slug: string;
   imageSource: string;
   imageAltText: string;
   title: string;
   text: string;
   seoTitle: string;
   seoDescription: string;
   heading: string;
   intro: string;
   details: ReadonlyArray<string>;
   relatedSlugs: ReadonlyArray<string>;
};

export const plumbingServices: ReadonlyArray<PlumbingService> = [
   {
      slug: "leak-detection-repair",
      imageSource: "/assets/services/services-leaking-pipe.svg",
      imageAltText: "Illustration of a leaking pipe",
      title: "Leak Detection & Repair:",
      text: "Got a mystery leak? No problem! We specialize in sniffing out leaks wherever they hide and fixing them promptly to save your home from water damage and keep your bills from skyrocketing.",
      seoTitle: "Leak Detection & Repair in Superior, MT",
      seoDescription:
         "Find and fix hidden plumbing leaks in Superior, MT and Mineral, Sanders, and Missoula Counties. Fast leak detection to protect your home and water bill.",
      heading: "Leak detection and repair in Western Montana",
      intro: "Unexplained water stains, a spike in your bill, or the sound of running water when everything is off usually means a leak is hiding in a wall, slab, or yard. Superior Plumbing Service locates the source and repairs it before it turns into structural damage.",
      details: [
         "We diagnose dripping fixtures, supply-line leaks, and slab or underground leaks serving homes across Mineral, Sanders, and Missoula Counties.",
         "Prompt repairs help prevent mold, warped flooring, and wasted water through the winter, when freeze-related breaks are common in this region.",
         "After the repair, we check related piping so you are not calling again for the next weak joint down the line.",
      ],
      relatedSlugs: ["pipe-maintenance", "water-heater-solutions"],
   },
   {
      slug: "drain-unclogging",
      imageSource: "/assets/services/services-plunger.svg",
      imageAltText: "Illustration of a plunger for drain cleaning",
      title: "Drain Unclogging:",
      text: "Say goodbye to blocked drains! Our expert team uses state-of-the-art technology to clear out clogs from your sinks, showers, and toilets, ensuring free-flowing drains and peace of mind.",
      seoTitle: "Drain Cleaning & Unclogging in Superior, MT",
      seoDescription:
         "Professional drain cleaning for sinks, showers, and toilets in Superior, MT. Clear stubborn clogs for homes in Mineral, Sanders, and Missoula Counties.",
      heading: "Drain cleaning and unclogging",
      intro: "Slow drains and backups are more than an inconvenience in a Montana home, especially when guests are over or temperatures drop. We clear kitchen, bath, and laundry lines so water moves the way it should.",
      details: [
         "We clear clogs caused by grease, hair, soap, and debris without the guesswork of store-bought chemicals that can damage pipes.",
         "Recurring backups often point to a deeper main-line issue. We inspect the line and recommend a lasting fix instead of a temporary plunge.",
         "Same-day drain service is available when a kitchen or bathroom is unusable and you need it back in service quickly.",
      ],
      relatedSlugs: ["toilet-services", "pipe-maintenance"],
   },
   {
      slug: "toilet-services",
      imageSource: "/assets/services/services-toilet.svg",
      imageAltText: "Illustration of a toilet",
      title: "Toilet Services:",
      text: "Whether it's a toilet that won't stop running or a complete replacement, we can handle it. We'll get your throne functioning royally again in no time.",
      seoTitle: "Toilet Repair & Replacement in Superior, MT",
      seoDescription:
         "Toilet repair, replacement, and troubleshooting in Superior, MT. Stop running toilets, leaks, and clogs with local plumbers serving Western Montana.",
      heading: "Toilet repair and replacement",
      intro: "A running toilet wastes water every hour it is ignored. A leaking wax ring or cracked bowl can damage flooring. We repair and replace toilets for homes throughout Mineral, Sanders, and Missoula Counties.",
      details: [
         "Common repairs include fill valves, flappers, supply lines, and stubborn clogs that a plunger cannot clear.",
         "When a toilet is cracked, inefficient, or due for an upgrade, we install a reliable replacement and haul away the old fixture.",
         "We also help with comfort-height and water-saving models during bathroom updates.",
      ],
      relatedSlugs: ["drain-unclogging", "fixture-fittings"],
   },
   {
      slug: "water-heater-solutions",
      imageSource: "/assets/services/services-water-heater.svg",
      imageAltText: "Illustration of a water heater",
      title: "Water Heater Solutions:",
      text: "Cold showers aren't fun. Whether you need a quick repair or a new, energy-efficient installation, we ensure you have hot water whenever you need it.",
      seoTitle: "Water Heater Repair & Installation in Superior, MT",
      seoDescription:
         "Water heater repair and energy-efficient installation in Superior, MT. Tank and tankless options for homes in Mineral, Sanders, and Missoula Counties.",
      heading: "Water heater repair and installation",
      intro: "When hot water runs out too soon or the tank is leaking, you need a plumber who can diagnose the unit and keep your household in hot water. We service conventional tanks and tankless systems, including Rinnai equipment.",
      details: [
         "Repairs cover no-hot-water calls, pilot and ignition issues, leaking tanks, and temperature that will not stay consistent.",
         "If replacement is the better value, we size the unit for your household and install it to manufacturer specifications.",
         "Tankless upgrades can be a strong fit for energy savings and continuous hot water in Western Montana homes.",
      ],
      relatedSlugs: ["gas-line-services", "leak-detection-repair"],
   },
   {
      slug: "pipe-maintenance",
      imageSource: "/assets/services/services-pipe-maintenance.svg",
      imageAltText: "Illustration of pipe maintenance",
      title: "Pipe Maintenance:",
      text: "From minor repairs to full replacements, we handle pipes with care. We'll ensure your plumbing system is running smoothly, without leaks or bursts to worry about.",
      seoTitle: "Pipe Repair & Replacement in Superior, MT",
      seoDescription:
         "Pipe repair, replacement, and freeze-break service in Superior, MT. Keep supply and drain lines reliable through Western Montana winters.",
      heading: "Pipe repair, replacement, and maintenance",
      intro: "Aging galvanized lines, freeze breaks, and corroded fittings are familiar problems in this part of Montana. We repair damaged sections and replace failing pipe before a small drip becomes a flood.",
      details: [
         "We work on supply lines, drain lines, and exposed piping in crawl spaces, basements, and utility rooms.",
         "Winter freeze protection and thaw-related repairs are a regular part of the work we do for Mineral County and neighboring communities.",
         "Repiping may be recommended when multiple leaks appear in a short span, which is often cheaper than repeating emergency calls.",
      ],
      relatedSlugs: ["leak-detection-repair", "remodel-services"],
   },
   {
      slug: "fixture-fittings",
      imageSource: "/assets/services/services-fixture.svg",
      imageAltText: "Illustration of a bathroom fixture",
      title: "Fixture Fittings:",
      text: "Upgrading your kitchen or bathroom? We install and repair all types of plumbing fixtures, enhancing your space's functionality and aesthetics.",
      seoTitle: "Faucet & Fixture Installation in Superior, MT",
      seoDescription:
         "Install and repair faucets, sinks, and bathroom fixtures in Superior, MT. Kitchen and bath plumbing upgrades for Western Montana homes.",
      heading: "Faucet and fixture installation",
      intro: "New faucets, sinks, and showers only work as well as the plumber who sets them. We install and repair fixtures so they look right, shut off cleanly, and do not leak behind the wall.",
      details: [
         "Kitchen and bath faucet replacements, shutoff valves, supply lines, and leaking angle stops are everyday calls for our team.",
         "We can match new fixtures to an existing remodel plan or replace a failing faucet without a full renovation.",
         "Proper installation protects cabinets and counters from slow leaks that often go unnoticed for months.",
      ],
      relatedSlugs: ["toilet-services", "remodel-services"],
   },
   {
      slug: "sump-pump-installation-repair",
      imageSource: "/assets/services/services-sump-pump.svg",
      imageAltText: "Illustration of a sump pump",
      title: "Sump Pump Installation & Repair:",
      text: "Keep your basement dry and your home safe from flood damage with our sump pump services. We ensure your pump is ready to handle whatever Mother Nature throws at it.",
      seoTitle: "Sump Pump Installation & Repair in Superior, MT",
      seoDescription:
         "Sump pump installation, repair, and replacement in Superior, MT. Protect basements from groundwater and snowmelt in Western Montana.",
      heading: "Sump pump installation and repair",
      intro: "Snowmelt and spring groundwater can overwhelm a basement that does not have a working sump pump. We install new pumps, replace failed units, and get stalled pumps running again.",
      details: [
         "A pump that runs constantly, never runs, or sounds strained needs service before the next storm or thaw.",
         "We size and install pumps for the pit and discharge path in your home so water is moved away from the foundation.",
         "Backup options can be discussed for homes that cannot afford a dry basement during a power outage.",
      ],
      relatedSlugs: ["pipe-maintenance", "leak-detection-repair"],
   },
   {
      slug: "gas-line-services",
      imageSource: "/assets/services/services-gas-line.svg",
      imageAltText: "Illustration of a gas line",
      title: "Gas Line Services:",
      text: "We're not just about water; we also specialize in gas line installations and repairs, ensuring your gas appliances operate safely and efficiently.",
      seoTitle: "Gas Line Installation & Repair in Superior, MT",
      seoDescription:
         "Safe gas line installation and repair in Superior, MT. Service for water heaters, ranges, and other gas appliances in Western Montana.",
      heading: "Gas line installation and repair",
      intro: "Gas piping has to be installed and tested correctly. We run and repair lines for water heaters, ranges, and other appliances so they operate safely in your home.",
      details: [
         "We install new appliance connections and repair damaged or outdated gas piping.",
         "If you smell gas, leave the home, call the utility emergency line, and contact us for repair after the area is safe.",
         "Gas line work is often paired with tankless water heater installs and kitchen or laundry appliance upgrades.",
      ],
      relatedSlugs: ["water-heater-solutions", "remodel-services"],
   },
   {
      slug: "remodel-services",
      imageSource: "/assets/services/services-remodel.svg",
      imageAltText: "Illustration of a bathtub for plumbing remodels",
      title: "Remodel Services",
      text: "Transform your space with our remodeling services. Whether you're updating a bathroom or kitchen, we work closely with you to install the plumbing necessary for your dream space.",
      seoTitle: "Kitchen & Bath Plumbing Remodels in Superior, MT",
      seoDescription:
         "Plumbing for kitchen and bathroom remodels in Superior, MT. Rough-in, fixture installation, and layout changes for Western Montana homes.",
      heading: "Plumbing for kitchen and bath remodels",
      intro: "A remodel succeeds or fails on the plumbing behind the walls. We handle rough-in, relocation, and finish plumbing for kitchen and bathroom projects in Mineral, Sanders, and Missoula Counties.",
      details: [
         "We coordinate supply, drain, and vent work so new layouts drain correctly and meet code.",
         "Fixture setting, water heater changes, and gas connections can be included so you are not juggling multiple trades for the wet work.",
         "Whether you are refreshing a hall bath or rebuilding a kitchen, we plan the plumbing around how you actually use the space.",
      ],
      relatedSlugs: ["fixture-fittings", "water-heater-solutions"],
   },
];

export function getPlumbingService(slug: string) {
   return plumbingServices.find((service) => service.slug === slug);
}

export const homeFaqs: ReadonlyArray<{
   id: string;
   question: string;
   answer: string;
}> = [
   {
      id: "service-area",
      question: "What areas does Superior Plumbing Service cover?",
      answer:
         "We serve Mineral County, Sanders County, and Missoula County in Western Montana, including Superior and surrounding communities.",
   },
   {
      id: "superior-mt",
      question: "Do you serve Superior, Montana?",
      answer:
         "Yes. Superior Plumbing Service works in and around Superior, MT, and regularly serves homes throughout Mineral County as well as Sanders County and Missoula County.",
   },
   {
      id: "services-offered",
      question: "What plumbing services do you offer?",
      answer:
         "We handle leak detection and repair, drain cleaning, toilets, water heaters, pipe repair, fixtures, sump pumps, gas lines, and plumbing for kitchen and bath remodels.",
   },
   {
      id: "request-quote",
      question: "How do I request service or a quote?",
      answer:
         "Call (406) 550-0868 or send a message through our contact form. Tell us the town you are in and what is going on with the plumbing so we can get you scheduled.",
   },
   {
      id: "hidden-leak",
      question: "What should I do if I think I have a hidden leak?",
      answer:
         "Shut off the water if you can, then call (406) 550-0868. We locate leaks in fixtures, supply lines, slabs, and yards so they can be fixed before they cause water damage.",
   },
   {
      id: "frozen-pipes",
      question: "Can you help with frozen or burst pipes?",
      answer:
         "Yes. Freeze-related breaks are common in Western Montana winters. We repair damaged pipe and can help you reduce the chance of the next freeze turning into a flood.",
   },
   {
      id: "tankless-water-heaters",
      question: "Do you install tankless water heaters?",
      answer:
         "Yes. We repair and install conventional and tankless water heaters, including Rinnai systems, and can advise which option fits your home.",
   },
   {
      id: "rinnai",
      question: "Are you a Rinnai Pro installer?",
      answer:
         "Yes. We install and service Rinnai tankless water heaters and can help you decide whether a tankless unit is a good fit.",
   },
   {
      id: "gas-lines",
      question: "Do you work on gas lines?",
      answer:
         "Yes. We install and repair gas piping for water heaters, ranges, and other appliances. If you smell gas, leave the home and call the utility emergency line first, then contact us for the repair.",
   },
   {
      id: "sump-pumps",
      question: "Do you install and repair sump pumps?",
      answer:
         "Yes. We install new pumps, replace failed units, and service pumps that run constantly or not at all so basements stay drier through snowmelt and storms.",
   },
   {
      id: "remodels",
      question: "Can you handle plumbing for a kitchen or bathroom remodel?",
      answer:
         "Yes. We handle rough-in, fixture setting, and layout changes for kitchen and bath projects so the plumbing behind the walls matches the new space.",
   },
   {
      id: "who-we-are",
      question: "Who owns Superior Plumbing Service?",
      answer:
         "The company is owned by Brody Barr, a fourth-generation plumber and master plumber with more than a decade in the field.",
   },
];
