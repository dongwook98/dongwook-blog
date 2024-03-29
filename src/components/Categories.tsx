type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className='text-center text-lg ml-10'>
      <h2 className='text-xl font-bold border-b border-accent mb-2'>
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-accent ${
              category === selected && 'text-accent'
            }`}
            key={category}
            onClick={() => {
              onClick(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
