interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg text-sky/90 max-w-2xl mx-auto animate-slide-up">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
