interface TimelineItem {
  title: string;
  company: string;
  duration: string;
  description: string;
};

interface Data {
  items: TimelineItem[];
};

export default function Timeline({ items }: Data) {
  return (
    <div className="relative border-l-2 border-cyan-500 pl-6">
      {items.map((item, index) => (
        <div key={index} className="relative mb-10 ml-4 bg-neutral-900 p-6 rounded-2xl">

      
          <div className="absolute -left-6 top-2 w-4 h-4 bg-cyan-500 rounded-full" />
          
          
          {/* Konten */}
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-sm text-cyan-400 mb-1">{item.company} • {item.duration}</p>
          <p className="text-sm text-gray-300 text-justify indent-8">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
