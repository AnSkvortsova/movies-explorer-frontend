import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';
import { Portfolio } from '../Portfolio/Portfolio';

export function Main() {
  return (
    <main className="main">
      <div className="app app_color_pink">
        <Promo />
      </div>
      <AboutProject />
      <div className="app app_color_grey">
        <Techs />
      </div>
      <AboutMe />
      <Portfolio />
    </main>
  );
}