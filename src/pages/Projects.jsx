import Header from "../components/Header";
import Heading from "../components/Heading";
import WeCraftedCard from "../components/WeCraftedCards";

export default function NarrativesWeCrafted() {
  return (
    <>
    <Header />  
    <div>
      <Heading />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-10">
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
    title: "Dynamics Design",
    logo: "/images/Projects/Client1.png",
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
  }
];