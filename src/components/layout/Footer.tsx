import { Mail, Phone, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                ChargeGo Ethiopia
              </span>
            </div>
            <div className="space-y-2">
              <a href="tel:+251911234567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                +251 91 123 4567
              </a>
              <a href="mailto:info@chargegoethiopia.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                info@chargegoethiopia.com
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Location / አድራሻ</h3>
            <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
            <p className="text-muted-foreground">አዲስ አበባ፣ ኢትዮጵያ</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-muted-foreground">
          <p>© 2024 ChargeGo Ethiopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}