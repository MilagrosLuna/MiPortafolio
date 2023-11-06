import React from "react";
import MyNavBar from "./navbar";
import Footer from "./footer";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
};
export default function Layout({ children }) {
  return (
    <div style={styles.container}>
      <MyNavBar />
      {children}
      <Footer />
    </div>
  );
}
