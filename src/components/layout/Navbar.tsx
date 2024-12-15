import { Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-primary/10">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            ChargeGo Ethiopia
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">
              {t('nav_about')}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t('nav_contact')}
            </a>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            {language === 'en' ? 'አማርኛ' : 'English'}
          </Button>
        </div>
      </div>
    </nav>
  );
}