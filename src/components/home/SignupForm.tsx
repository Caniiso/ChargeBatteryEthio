import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

export function SignupForm() {
  const [email, setEmail] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      toast.success(t('signup_success'));
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <div className="relative flex-1">
        <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur-lg opacity-50" />
        <Input
          type="email"
          placeholder={t('signup_placeholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="relative border-border/40 bg-background/95"
          required
        />
      </div>
      <Button type="submit" className="relative overflow-hidden bg-primary hover:bg-primary/90">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary mix-blend-overlay" />
        <span className="relative">{t('signup_button')}</span>
      </Button>
    </form>
  );
}