import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import cl from './phones.module.scss';
import { Phones } from '../../components/Phones/Phones';
import { useState, useEffect } from 'react';
import phonesProducts from '../../common/products/products.json';
import { Pagination } from '../../components/Pagination/Pagination';
import { CustomSelect } from '../../components/Select/Select';

interface Phone {
  phoneId: number;
  imgUrl: string;
  title: string;
  price: string;
  discount: string;
  memory: number;
  capacity: number;
  displaySize: string;
}

const PhonesPage: FC = (): JSX.Element => {
  const [products, setProducts] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [phonePerPage] = useState<number>(4);
  const [isNextPageEnabled, setIsNextPageEnabled] = useState<boolean>(true);

  const getPhonesProducts = () => {
    setProducts(phonesProducts);
  };

  useEffect(() => {
    getPhonesProducts();
  }, []);

  useEffect(() => {
    const lastUserIndex = currentPage * phonePerPage;
    const nextUserIndex = lastUserIndex + 1;
    setIsNextPageEnabled(nextUserIndex <= products.length);
  }, [currentPage, phonePerPage, products]);

  const lastUserIndex = currentPage * phonePerPage;
  const firstUserIndex = lastUserIndex - phonePerPage;
  const currentUserPage = products.slice(firstUserIndex, lastUserIndex);

  const paginate = (pageNumber: number) => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
    setCurrentPage(pageNumber);
  };

  const nextPage = (event: { preventDefault: () => void }) => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
    if (!isNextPageEnabled) {
      event.preventDefault();
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <main className={cl.phones} style={{ margin: '0 auto' }}>
      <div className={cl.catalog__container}>
        <CatalogPage
          smallTitle='Phones'
          models='95 models'
          mainTitle='Mobile phones'
        />
        <div className={cl.page__select}>
          <CustomSelect />
        </div>
      </div>
      <div>
        <Phones products={currentUserPage} />
        <div className={cl.pagination__item}>
          <button className='btn btn-primary' id='btn' onClick={prevPage}>
            Prev Page
          </button>
          <Pagination
            currentPage={currentPage}
            phonePerPage={phonePerPage}
            totalPhones={products.length}
            paginate={paginate}
          />
          <button
            id='btn'
            className='btn btn-primary'
            disabled={!isNextPageEnabled}
            onClick={nextPage}
          >
            Next Page
          </button>
        </div>
      </div>
    </main>
  );
};

export { PhonesPage };
