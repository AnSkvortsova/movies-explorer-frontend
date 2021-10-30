import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';

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
    </main>
  );
}