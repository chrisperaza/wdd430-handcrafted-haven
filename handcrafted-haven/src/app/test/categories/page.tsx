import { categoriesArray } from '@/database/categories';

export default function Page() {
  return (
    <section className='py-10 w-full flex flex-col justify-center text-center'>
      <h1 className='text-2xl font-bold pb-10'>Categories Array</h1>

      <ul className='flex flex-col flex-wrap gap-10 justify-start px-20'>
        {categoriesArray.map((currentCategoryObj, index) => (
          <li className='text-start' key={index}>
            <h2>{currentCategoryObj.categoryName}</h2>
            <p>{currentCategoryObj.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
