import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Poppins } from "next/font/google";

import "./css/style.css";
import "./css/bootstrap.min.css";
import "./lib/twentytwenty/twentytwenty.css";
import "./lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "./lib/animate/animate.min.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import Head from "next/head";

export const metadata = {
  title: "Dr Amit Kankariya",
  description:
    "Dr. Amit Kankariya is a Dentist in Somwar Peth, Pune and has an experience of 13 years in this field. Dr. Amit Kankariya practices at Dr. Kankariya's Laser Dental Clinic in Somwar Peth, Pune,Dr. Rathods Dental Clinic ( DRDC ) in Camp, Pune and Oradent Dental and Oral Health Care Centre in Karve Nagar, Pune. He completed BDS from Tatyasaheb Kore Dental College and Research Centre, Kolhapur in 2011 and MDS from BHARATI VIDYAPEETH'S DENTAL COLLEGE &HOSPITAL PUNE in 2015.He is a member of Indian Dental Association. Some of the services provided by the doctor are: Dental Braces Fixing,Impaction / Impacted Tooth Extraction,Cosmetic/ Aesthetic Dentistry,Presurgical Orthodontics and Complete/Partial Dentures Fixing etc.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </Head>
      <body className={poppins.className}>
        {children}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
        {/* 
        <Script src="../app/lib/easing/easing.min.js"></Script>
        <Script src="../app/lib/waypoints/waypoints.min.js"></Script>
        <Script src="../app/lib/owlcarousel/owl.carousel.min.js"></Script>
        <Script src="../app/lib/tempusdominus/js/moment.min.js"></Script>
        <Script src="../app/lib/tempusdominus/js/moment-timezone.min.js"></Script>
        <Script src="../app/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></Script>
        <Script src="../app/lib/twentytwenty/jquery.event.move.js"></Script>
        <Script src="../app/lib/twentytwenty/jquery.twentytwenty.js"></Script> */}
        <Script src="../app/js/main.js"></Script>
      </body>
    </html>
  );
}
