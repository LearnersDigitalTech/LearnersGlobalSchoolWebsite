import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Streams } from "@/components/home/Streams";
import { Methodology } from "@/components/home/Methodology";
import { Mentors } from "@/components/home/Mentors";
import { Achievers } from "@/components/home/Achievers";
import { Activities } from "@/components/home/Activities";
import { Clubs } from "@/components/home/Clubs";
import { Affiliates } from "@/components/home/Affiliates";
import { StudentToast } from "@/components/ui/Toast";
import styles from "./page.module.scss";

import { EnquiryPopup } from "@/components/home/EnquiryPopup";
import { EventPopup } from "@/components/home/EventPopup";
import { Announcements } from "@/components/home/Announcements";

export const metadata: Metadata = {
  title: "Learners Global School Sathagalli | Premier CBSE School in Mysore",
  description: "Welcome to Learners Global School Sathagalli - A leading CBSE school in Mysore offering world-class education from Pre-KG to Class 12. Admissions open for 2024-25. Shaping future leaders through innovative learning.",
  keywords: ["CBSE school Mysore", "best school Sathagalli", "admissions open Mysore", "top school in Mysore", "holistic education", "international curriculum"],
  openGraph: {
    title: "Learners Global School Sathagalli | Premier CBSE School in Mysore",
    description: "Welcome to Learners Global School - Shaping future leaders through innovative CBSE education in Mysore.",
    url: "https://learnersglobalschool.com",
    images: [{ url: "/LL.png", width: 1200, height: 630, alt: "Learners Global School" }],
  },
};

export default function Home() {
  return (
    <main id="main-content" className={styles.main}>
      <EventPopup />
      <EnquiryPopup />
      <Header />
      <Hero />
      <Announcements />
      <Streams />
      <Methodology />
      <Mentors />
      <Achievers />
      <Activities />
      <Clubs />
      <Affiliates />
      {/* <StudentToast /> */}
      <Footer />
    </main>
  );
}
