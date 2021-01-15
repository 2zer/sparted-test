import m from 'mithril';
import { PictureList } from "./PictureList";

export function MainView({ attrs }) {
  function view({ attrs }) {
    return m('div', [
      m('header', [
        m('div.container', [
          m('div.avatar'),
          m('h3', "Sparted test - Rémi Blin")
        ])
      ]),
      m('div.container', [
        m(PictureList)
      ])
    ]);
  }
  return { view };
}