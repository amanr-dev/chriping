interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screeh bg-slate-900">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-x-slate-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
