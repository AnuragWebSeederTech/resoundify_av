import Header from "../components/Header";
import WeCraftedCard from "../components/WeCraftedCards";

export default function NarrativesWeCrafted() {
  return (
    <>
    <Header />  
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-10 pt-30">
        {clientData.map((card, index) => (
          <WeCraftedCard
            key={index}
            title={card.title}
            logo={card.logo}
            description={card.description}
            goal={card.goal}
            stat={card.stat}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export const clientData = [
  {
    title: "Infinitalent Consulting Pvt Ltd",
    logo: "/client_logo/INFINITALENT.webp",
    description: "Government-authorized HR consultancy specializing in apprenticeship compliance and recruitment across IT, manufacturing, healthcare, and FMCG.",
    stat: "3,500+ professionals served",
    goal: "Efficient, compliant staffing solutions nationwide"
  },
  {
    title: "Dynamics Design",
    logo: "/client_logo/dynamicDesigne.jpg",
    description: "MEP consulting firm with global presence, offering expert solutions for commercial, residential, and industrial projects.",
    stat: "Global MEP specialists",
    goal: "Reliable, efficient, and safe building solutions"
  },
  {
    title: "Edulfin",
    logo: "/client_logo/edulfin.webp",
    description: "Ed-tech platform offering job-ready courses with live projects, mentorship, and placement support.",
    stat: "5,000+ learners, 4,000+ placed, highest CTC ₹24 LPA",
    goal: "Accessible, career-focused upskilling"
  },
  {
    title: "Zelh",
    logo: "/client_logo/zel.webp",
    description: "Global staffing company providing AI-enhanced remote teams for logistics, engineering, and technology sectors.",
    stat: "3,000+ experts placed, 100+ projects, 10+ global offices",
    goal: "Scalable staffing solutions for operational excellence"
  },
  {
    title: "Jober Group",
    logo: "/client_logo/jober_group.webp",
    description: "French recruitment firm specializing in dental, medical, and paramedical sectors across France.",
    stat: "4,000+ job listings, 99% candidate satisfaction",
    goal: "Connecting healthcare professionals with ideal opportunities"
  },
  {
    title: "Organo Mantra",
    logo: "/client_logo/orgnomantra.webp",
    description: "Premium FMCG brand offering organic foods, personal care, and wellness products.",
    stat: "Serving India and UAE markets",
    goal: "Promoting healthier lifestyles through natural products"
  },
  {
    title: "SYWA Consulting",
    logo: "/client_logo/sywa.webp",
    description:
      "SYWA is a global consulting firm helping organizations solve complex challenges, drive transformation.",
    stat: "Trusted by global leaders for ICT, AV, Security, and ELV expertise.",
    goal: "To empower growth and performance with efficient, future-ready solutions."
  },
  {
    title: "One Za’abeel",
    logo: "/client_logo/oneZaabeel.png",
    description:
      "One Za’abeel is a landmark destination in the heart of Dubai, offering iconic living, working, and leisure experiences for the modern urban citizen.",
    stat: "Redefining luxury and innovation in the heart of the city.",
    goal: "To create a timeless icon that blends world-class lifestyle, business, and hospitality in one address."
  },
  {
    title: "CabBazar",
    logo: "/client_logo/cabbazar.webp",
    description: "Indian cab aggregator for outstation, local, and airport taxi services across 3,000+ cities.",
    stat: "24/7 booking via app and web",
    goal: "Seamless, affordable intercity and local travel"
  },
  {
    title: "Asian Extrusions Pvt. Ltd",
    logo: "/client_logo/Asian.webp",
    description: "Trusted aluminium extrusions manufacturer known for precision, quality, and reliability.",
    stat: "Industry-leading extrusion solutions",
    goal: "Excellence in aluminium manufacturing"
  },
  {
    title: "Skinpuritys Dermatology & Aesthetics",
    logo: "/client_logo/skinpuritys.webp",
    description: "Indore's premier skin clinic led by Dr. Harshita Kothari, offering advanced dermatology and aesthetic treatments.",
    stat: "5,000+ clients including celebrities",
    goal: "Ethical, expert-led skincare with cutting-edge technology"
  },
  {
    title: "Vayve Mobility",
    logo: "/client_logo/VayveMobility.webp",
    description: "Revolutionary solar electric car manufacturer creating efficient, sustainable urban mobility solutions.",
    stat: "Next-gen clean mobility solutions",
    goal: "Setting new standards in EV efficiency and innovation"
  },
  {
    title: "Wanderlust",
    logo: "/client_logo/wanderlust.webp",
    description: "UK's leading travel magazine championing authentic, responsible, and sustainable journeys since 1993.",
    stat: "12M+ annual online visitors, 180K+ social followers",
    goal: "Promoting conscious, responsible travel worldwide"
  },
  {
    title: "Ellis Brigham",
    logo: "/client_logo/ellis.webp",
    description: "UK's leading outdoor retailer providing expert advice and top-quality gear since 1933.",
    stat: "90+ years of outdoor expertise",
    goal: "Inspiring and equipping outdoor adventures"
  },
  {
    title: "Matthew Fisher",
    logo: "/client_logo/fisher.png",
    description: "Renowned artist creating bespoke art objects and commissions using rare natural stones and refined craftsmanship.",
    stat: "Featured in galleries across US, London, Paris, Shanghai",
    goal: "Timeless works honoring natural beauty"
  },
  {
    title: "SOBHA",
    logo: "/client_logo/sobha.png",
    description: "Premium real estate developer committed to world-class quality, transparency, and on-time delivery.",
    stat: "Benchmark in craftsmanship and trust",
    goal: "Best-in-class products with uncompromising quality"
  },
  {
    title: "ETS",
    logo: "/client_logo/ETS_logo.webp",
    description: "Global education organization providing innovative assessments and talent solutions to advance educational equity.",
    stat: "Empowering millions through research-based assessments",
    goal: "Helping people demonstrate proficiency and achieve better outcomes"
  },
  {
    title: "McALPINE",
    logo: "/client_logo/mc.png",
    description: "Interior design consultancy creating homes that reflect personal identity and emotional connection.",
    stat: "Soulful spaces in harmony with inner self",
    goal: "Homes that inspire belonging and comfort"
  },
  {
    title: "Hadean",
    logo: "/client_logo/Hadean.png",
    description: "Distributed computing company pushing boundaries of scalable, secure, high-performance systems.",
    stat: "Next-gen computing solutions",
    goal: "Building the future of distributed computing"
  },
  {
    title: "The Blobmixer",
    logo: "/client_logo/blob.png",
    description: "Interactive 3D art creation tool with VR compatibility and charitable NFT collection.",
    stat: "1,414 NFTs, 100% profits to charity",
    goal: "Blending creativity, technology, and philanthropy"
  },
  {
    title: "Coachable",
    logo: "/client_logo/coachable.png",
    description: "Professional development platform helping individuals secure interviews and master career skills.",
    stat: "Personalized coaching and skill-building tools",
    goal: "Empowering career success in competitive markets"
  },
  {
    title: "3Degrees",
    logo: "/client_logo/3degree.jpg",
    description: "Climate solutions pioneer helping organizations implement science-based strategies for urgent climate action.",
    stat: "Trusted by global organizations",
    goal: "Accelerating transition to sustainable, low-carbon future"
  },
  {
    title: "Montfort Group",
    logo: "/client_logo/montfort.png",
    description: "Global commodity trading company specializing in energy trading, refining, storage, and transport.",
    stat: "15+ global offices connecting emerging and mature markets",
    goal: "Sustainable energy solutions with environmental focus"
  },
  {
    title: "Levers Labs",
    logo: "/client_logo/levers.png",
    description: "Operating system for data-driven companies providing integrated tools to track, analyze, and optimize performance.",
    stat: "Trusted by world-class operators",
    goal: "Data-driven decision-making and continuous improvement"
  },
  {
    title: "Mira Estate",
    logo: "/client_logo/mira.png",
    description: "Award-winning Dubai real estate agency offering comprehensive services from property selection to business setup.",
    stat: "Top-performing agency across UAE and Oman",
    goal: "Seamless, transparent real estate investment experience"
  },
  {
    title: "WoodenStreet",
    logo: "/client_logo/woodenStreet.png",
    description: "WoodenStreet offers stylish, well-crafted furniture that blends elegance with comfort, redefining how India shops for home decor.",
    stat: "Trusted by thousands across India for premium yet affordable home furnishing solutions.",
    goal: "To make stylish, quality furniture accessible and effortless for every home."
  },
  {
    title: "MD²",
    logo: "/client_logo/md2.png",
    description:
      "MD² is the nation’s most distinguished network of concierge medical practices, offering personalized, physician-led care with unmatched access and attention.",
    stat: "Exceptional care. Unrushed time. Nation-wide excellence.",
    goal: "To redefine the doctor-patient relationship through highly personalized, world-class medical care."
  },
  {
    title: "Metropolitan",
    logo: "/client_logo/metro.png",
    description:
      "Established in 2008, The Metropolitan Group delivers expert real estate services with unmatched support for local and international clients.",
    stat: "Trusted property advisors since 2008.",
    goal: "To provide exceptional service and guidance across every step of the property journey."
  },
  {
    title: "Trulia",
    logo: "/client_logo/trulia.png",
    description:
      "Trulia is a real estate platform that helps you discover the perfect place to live by offering detailed listings, neighborhood insights, and lifestyle data.",
    stat: "Find homes and neighborhoods that fit your lifestyle.",
    goal: "To simplify the home search journey by connecting people with real estate and local communities they’ll love."
  },
  {
    title: "The Sleep Company",
    logo: "/client_logo/thesleep.avif",
    description:
      "The Sleep Company revolutionizes rest with SmartGRID® technology, delivering advanced comfort, support, and sleep solutions for better health and well-being.",
    stat: "India’s leading SmartGRID mattress and comfort brand.",
    goal: "To transform the way India sleeps with science-backed, ergonomic products designed for ultimate comfort."
  },
  {
    title: "CalorieCam",
    logo: "/client_logo/caloriecam.webp",
    description:
      "CalorieCam makes weight loss simple with precise calorie and macro tracking, plus personalized coaching tailored to your goals.",
    stat: "Smart tracking. Real results.",
    goal: "To empower healthy habits through accurate data and expert guidance."
  },
  {
    title: "ITP App",
    logo: "/client_logo/itp.webp",
    description:
      "Designed for ITP clients, this app simplifies tax season with smart receipt scanning, secure cloud storage, and easy sharing with your tax consultant.",
    stat: "Streamline your tax prep with ITP.",
    goal: "To help ITP customers manage receipts and tax documents effortlessly with secure, cloud-based tools."
  },
  {
    title: "B2match App",
    logo: "/client_logo/B2match.webp",
    description:
      "b2match is your smart event networking app — schedule meetings, access agendas, explore marketplace opportunities, and connect with AI-powered matchmaking.",
    stat: "Smarter networking. Seamless events.",
    goal: "To transform event experiences through intelligent, goal-driven networking and real-time engagement tools."
  },
  {
    title: "City Mall Online",
    logo: "/client_logo/cityMall.webp",
    description:
      "City Mall Online is Myanmar’s most trusted grocery app—offering fast delivery, exclusive deals, and seamless shopping with mobile banking and order tracking.",
    stat: "Groceries delivered in as fast as 2 hours.",
    goal: "To make everyday grocery shopping simple, fast, and rewarding for customers across Myanmar."
  },
  {
    title: "HRxLawMate",
    logo: "/client_logo/Hrxlaw.webp",
    description:
      "HRxLawMate offers instant AI-powered legal advice and state-specific policy insights. With easy navigation and secure UPI-based subscriptions, get reliable legal guidance anytime, anywhere.",
    stat: "AI-based legal answers tailored to your state.",
    goal: "To simplify legal access with accurate, personalized, and secure support for users across India."
  }
];