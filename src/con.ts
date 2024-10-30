import { Func } from '../core/func';
import { LvhGetter } from '../core/lvhGetter';
import { MyDisplay } from '../core/myDisplay';
import { SvhGetter } from '../core/svhGetter';
import { DisplayConstructor } from '../libs/display';


export class Con extends MyDisplay {

  private _debug: HTMLElement

  private _text: string = 'I want to, drink beer, because it’s, refreshing, after a long, day, it helps, me relax and, unwind, it’s, a great way, to socialize, with friends, I enjoy the, variety of, flavors and, styles, each, type of beer, has unique, characteristics, it pairs well, with different, types of food, it’s fun to, try new and, unique brews, beer can be, enjoyed in a, variety of, settings, it’s, a cultural, experience in, itself, the, coldness of a, beer is so, satisfying on, a hot day, I, appreciate the, craftsmanship, in good beers, drinking beer, is a way to, support local, breweries, it, offers escape, from routine, it brings a, sense of joy, and helps us, celebrate the, moment!'

  private _textArr: string[] = this._text.split(', ')
  private _textEl: HTMLElement[] = []

  constructor(opt: DisplayConstructor) {
    super(opt);

    this._debug = document.createElement('div')
    this._debug.classList.add('l-debug')
    document.body.appendChild(this._debug)
    this._debug.innerHTML = 'DEBUG'

    const current = document.querySelector('.l-con') as HTMLElement
    this._textArr.forEach((text) => {
      const el = document.createElement('div')
      el.classList.add('text')

      const inner = document.createElement('div')
      inner.classList.add('inner')
      el.appendChild(inner)
      inner.innerHTML = text
      
      this._textEl.push(el)
      current.appendChild(el)
    })
  }


  // 更新
  protected _update(): void {
    super._update();

    const h1 = SvhGetter.instance.val
    const h2 = LvhGetter.instance.val
    const h3 = Func.sh()

    let scrollRate = (h3 - h1) / (h2 - h1)
    if(Number.isNaN(scrollRate) || isNaN(scrollRate)) scrollRate = 0

    this._debug.innerHTML = 'rate: ' + scrollRate

    if(scrollRate > 0.8) {
      document.body.classList.add('-scroll')
    } else {
      document.body.classList.remove('-scroll')
    }
  }
}

