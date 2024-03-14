import React from "react";
import {
  BreadcrumbJsonLd,
  LogoJsonLd,
  NextSeo,
  OrganizationJsonLd,
} from "next-seo";
import GraphImage from "../../assets/graph-image.jpeg";

type Props = {};

export default function JSONSchema({}: Props) {
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "Strona główna",
            item: "https://webleaders.pl",
          },
        ]}
      />
      <OrganizationJsonLd
        useAppDir={true}
        type="Organization"
        id="https://webleaders.pl/"
        logo="https://www.example.com/photos/logo.jpg"
        legalName="WebLeaders"
        name="WebLeaders"
        contactPoint={[
          {
            contactType: "Customer Service",
            email: "kontakt@webleaders.pl",
            areaServed: ["PL", "EN"],
            availableLanguage: ["Polish", "English"],
          },
        ]}
        sameAs={["https://webleaders.pl"]}
        url="https://webleaders.pl"
      />
      <LogoJsonLd
        useAppDir
        logo="https://www.example.com/photos/logo.jpg"
        url="https://webleaders.pl"
      />
    </>
  );
}
