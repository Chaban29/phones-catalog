import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import homeIcon from '../../images/icons/Home.svg';
import rightArrowIcon from '../../images/icons/Chevron (Arrow Right).svg';
import leftArrowIcon from '../../images/icons/Chevron (Arrow Left).svg';
import cl from '../../pages/PhonePage/phonePage.module.scss';
import { ProductProps } from '../../interfaces/product-item';
import products from '../../common/products/products.json';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

const ProductItem: FC<ProductProps> = (): JSX.Element => {
  const navigate = useNavigate();
  const { phoneId } = useParams<{ phoneId: string }>();
  const parsedPhoneId = phoneId ? parseInt(phoneId) : undefined;
  const phone = products.find((product) => product.phoneId === parsedPhoneId);

  const goToHomePage = () => {
    navigate('/', { replace: true });
  };

  const backToPhonesPage = () => {
    navigate(-1);
  };
  if (!phone) {
    return <NotFoundPage />;
  }

  return (
    <>
      <div className={cl.phone__navigationItem}>
        <img
          onClick={goToHomePage}
          src={homeIcon}
          alt='Home Icon'
          style={{ cursor: 'pointer' }}
        />
        <img
          src={rightArrowIcon}
          alt='arrowRight Icon'
          className={cl.arrowRight__icon}
        />
        <h4 className={cl.phone__phonesTitle}>Phones</h4>
        <img
          src={rightArrowIcon}
          alt='arrowRight Icon'
          className={cl.arrowRight__icon}
        />
        <p className={cl.phoneModel__capture}>{phone.title}</p>
      </div>
      <div className={cl.backButton__item}>
        <img src={leftArrowIcon} alt='arrowLeft Icon' />
        <button onClick={backToPhonesPage} className={cl.phoneBack__button}>
          Back
        </button>
      </div>
      <h2 className={cl.phoneModel__title}>{phone.title}</h2>
    </>
  );
};

export { ProductItem };
