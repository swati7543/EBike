import Image from "next/image";
import styles from "./infoHighlights.module.css";

const InfoHighlights = () => {
  const highlights = [
    {
      img: "//www.hiboy.ca/cdn/shop/files/Free-Shipping_2048x2048_747e4c03-8e8a-4e47-9686-5d4b658bc409.png?v=1722675064&width=100",
      title: "Free Shipping",
      desc: "3-5 Business Days Delivery",
    },
    {
      img: "//www.hiboy.ca/cdn/shop/files/1-year-warranty_2048x2048_d59b5d46-5944-4298-be4d-54c4e3b14976.png?v=1722675063&width=100",
      title: "1-year Warranty",
      desc: "Buy with Confidence",
    },
    {
      img: "//www.hiboy.ca/cdn/shop/files/Expert-Supoort_2048x2048_0a934477-0990-4d94-b441-c40fdeb8819c.png?v=1722675063&width=100",
      title: "Customer Support",
      desc: "Contact Us Anytime for Assistance.",
    },
    {
      img: "//www.hiboy.ca/cdn/shop/files/Secure-Payment_2048x2048_139f1cc6-c88d-4efb-867c-fcec644909dc.png?v=1722675063&width=100",
      title: "Security Payment",
      desc: "Your Money's Safe with Us.",
    },
    {
      img: "//www.hiboy.ca/cdn/shop/files/6_d8f6d4ba-a07a-4ece-b73e-41b27fc811ca.png?v=1722675949&width=100",
      title: "UL Certified",
      desc: "Quality You Can Trust.",
    },
  ];

  return (
    <section className={styles.infoHighlights}>
      <div className={styles.container}>
        <div className={styles.infoGrid}>
          {highlights.map((item, index) => (
            <div key={index} className={styles.infoItem}>
              <img src={item.img} alt={item.title} width={"100"}  height={"100"}/>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoHighlights;
