import { Battery, Sparkles } from 'lucide-react';
import { SignupForm } from './SignupForm';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/60 backdrop-blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container relative mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/95 px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Coming Soon to Addis Ababa</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            {t('hero_title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('hero_subtitle')}
          </p>
          <div className="pt-8">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}