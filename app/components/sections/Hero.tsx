"use client";

import React from 'react';
import Section from '../ui/Section';

type Props = {}

const Hero = (props: Props) => {
  return (
    <Section className="pt-32 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hero Section</h1>
        <p className="text-xl text-gray-600">Content coming soon...</p>
      </div>
    </Section>
  )
}

export default Hero