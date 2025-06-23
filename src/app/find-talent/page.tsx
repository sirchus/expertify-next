import React from 'react';
import { MultiStepForm } from '@/components/forms/MultiStepForm';
import { talentFormConfig } from '@/config/forms';
import { FormLayout } from '@/components/forms/FormLayout';

export const metadata = {
  title: 'Find Top Talent | Expertify',
  description: 'Get matched with experienced fractional executives who can accelerate your business growth.',
};

export default function FindTalentPage() {
  return (
    <FormLayout
      title="Find Your Perfect Executive"
      description="Tell us what you need and we'll match you with seasoned executives who've scaled companies like yours. Start working with the right leader in days, not months."
    >
      <MultiStepForm config={talentFormConfig} />
    </FormLayout>
  );
}