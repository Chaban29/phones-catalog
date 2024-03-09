import { FC } from "react";
import cl from './home.module.scss';



const HomePage: FC = (): JSX.Element => {
  return (
    <div className={cl.home__page}></div>
  )
}


export { HomePage };