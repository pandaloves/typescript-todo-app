import React from "react";
import Layout from "@/components/shared/Layout";
import Image from "@/components/ui/Image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Home: React.FC = () => {
  const links = [{ href: "/todo", label: "Todo Lista" }];

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <Image
          src="/welcome--image.avif"
          alt="Welcome"
          className={styles.image}
        />
        <nav className={styles.nav}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </Layout>
  );
};

export default Home;

// @const starts
const title = "Välkommen!";
// @const ends
