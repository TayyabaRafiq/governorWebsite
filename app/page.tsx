
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
       <div className="flex p-14">
      
          <div className=" grid-cols-2">
            
              <p className="hero-top-data">Welcome To My First Trial Website.</p>
              <br />
              <h1 className="font-bold text-blue-900">Governor Sindh</h1>
              <h3 className="text-blue-900">Kamran Khan Tessori</h3>
              <h3 className="font-bold text-cyan-400">Certified Cloud </h3>
              <h3 className="font-bold text-cyan-400">Applied Generative AI</h3>
              <h3 className="font-bold text-cyan-400">Engineer ( GenEng )</h3>
              <br />
              <p className="font-bold text-blue-900">Earn up to $ 5,000/month</p>
              <br />
              <p className="font-bold text-blue-900">Now admission are open in</p>
              <p className="font-bold text-blue-900">Hyderabad</p>
              
            </div>
            
            
              
          <div className="section-hero-image">
            <Image src="/images/governorSindh.png" alt="governorSindh" height= {400} width={400} />
            
            </div>
             
          
    </div>
     <Footer />
    </div>
  );
}
