import { Battery, MapPin, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function Features() {
  const { t } = useLanguage();

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Battery className="h-8 w-8" />}
            title={t('feature_1_title')}
            description={t('feature_1_desc')}
            gradient="from-blue-500 to-cyan-500"
          />
          <FeatureCard
            icon={<MapPin className="h-8 w-8" />}
            title={t('feature_2_title')}
            description={t('feature_2_desc')}
            gradient="from-violet-500 to-purple-500"
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8" />}
            title={t('feature_3_title')}
            description={t('feature_3_desc')}
            gradient="from-orange-500 to-red-500"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, gradient }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="group relative">
      <div className="absolute -inset-px bg-gradient-to-r rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
      <div className="relative p-6 rounded-xl border border-border/40 bg-card hover:border-primary/40 transition-colors">
        <div className={cn("p-3 rounded-lg w-fit bg-gradient-to-r", gradient)}>
          {icon}
        </div>
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}