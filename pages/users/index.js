import React from "react";
import DisplayHappyUser from "../components/DisplayHappyUser";
import Layout from "../components/Layout";

export default function Users() {
  return (
    <Layout title="User-information Page" description="Contact page.">
      <div
        style={{ minHeight: "85.5vh", paddingTop: "2rem", margin: "0 5rem" }}
      >
        <DisplayHappyUser />
      </div>
    </Layout>
  );
}
