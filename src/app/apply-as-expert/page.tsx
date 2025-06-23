import React from 'react';
import { MultiStepForm } from '@/components/forms/MultiStepForm';
import { expertFormConfig } from '@/config/forms';
import { FormLayout } from '@/components/forms/FormLayout';

export const metadata = {
  title: 'Apply as Expert | Expertify',
  description: 'Join our network of fractional executives and share your expertise with growing companies.',
};

export default function ApplyAsExpertPage() {
  return (
    <FormLayout
      title="Join Our Expert Network"
      description="Share your expertise with growing companies. Work flexibly with vetted startups and scale-ups that value your experience."
    >
      <MultiStepForm config={expertFormConfig} />
    </FormLayout>
  );
}