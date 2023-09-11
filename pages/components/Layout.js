/* eslint-disable react/prop-types */
import Head from "next/head";
import React from "react";

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add other global meta tags, styles, or scripts here */}
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Head>
      {children}
    </div>
  );
}
