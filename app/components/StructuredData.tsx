export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Levantate Labs",
    "url": "https://www.levantate.in",
    "logo": "https://www.levantate.in/logo.png",
    "description": "Levantate Labs empowers businesses with cutting-edge Blockchain Development, AI Solutions, Web Development, and UI/UX Design services.",
    "email": "contact@levantate.in",
    "sameAs": [
      "https://twitter.com/LevantateLabs",
      "https://linkedin.com/company/levantate-labs",
      "https://github.com/levantatelabs",
      "https://instagram.com/levantatelabs"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@levantate.in",
      "contactType": "customer service"
    },
    "services": [
      {
        "@type": "Service",
        "serviceType": "Blockchain Development",
        "description": "Build secure, scalable blockchain solutions with smart contracts and DApps"
      },
      {
        "@type": "Service",
        "serviceType": "AI Solutions",
        "description": "Leverage cutting-edge AI and machine learning for intelligent applications"
      },
      {
        "@type": "Service",
        "serviceType": "Web Development",
        "description": "Develop robust, scalable web applications using modern technologies"
      },
      {
        "@type": "Service",
        "serviceType": "UI/UX Design",
        "description": "Create beautiful, intuitive user experiences with modern design principles"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}



