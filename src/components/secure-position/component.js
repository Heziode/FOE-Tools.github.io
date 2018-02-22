import Cookies from "js-cookie";
import utils from "~/src/services/utils";

function calculate() {
   if (this::formValid()) {
      let result = Math.ceil((this.state['level-cost'] -
            this.state['current-deposits'] -
            (this.state['other-participation'] - this.state['your-participation'])
         ) / 2) + this.state['other-participation'];

      if (result <= this.state['other-participation']) {
         this.state.fp = -1;
      } else {
         this.state.fp = result;
         if ((this.state['your-arc-bonus'] >= 0) && (this.state['fp-target-reward'] > 0)) {
           this.state.roi = Math.round(((1 + (this.state['your-arc-bonus'] / 100)) *
             this.state['fp-target-reward']) - result);
           Cookies.set('your_arc_bonus', this.state['your-arc-bonus'], { path: '' });
         }
      }
   }
}

function formValid() {
   this.state.formValid = true;

   this.getEl('level-cost').classList.remove('is-danger');
   this.getEl('current-deposits').classList.remove('is-danger');
   this.getEl('your-participation').classList.remove('is-danger');
   this.getEl('other-participation').classList.remove('is-danger');

   // This case is default state.
   // simple comparison (no strict) is normal here.
   if ((this.state['level-cost'] == this.state['current-deposits'] ==
      this.state['your-participation'] == this.state['other-participation']) &&
      (this.state['level-cost'] == 0)) {
         return true;
   }

   if (!(this.state['level-cost'] > 0)) {
      this.state.formValid = false;
      this.getEl('level-cost').classList.add('is-danger');
   }

   if (!(this.state['current-deposits'] < this.state['level-cost'])) {
      this.state.formValid = false;
      this.getEl('level-cost').classList.add('is-danger');
      this.getEl('current-deposits').classList.add('is-danger');
   }

   if (!(this.state['your-participation'] < this.state['level-cost'])) {
      this.state.formValid = false;
      this.getEl('your-participation').classList.add('is-danger');
      this.getEl('level-cost').classList.add('is-danger');
   }

   if (!(this.state['other-participation'] < this.state['level-cost'])) {
      this.state.formValid = false;
      this.getEl('other-participation').classList.add('is-danger');
      this.getEl('level-cost').classList.add('is-danger');
   }

   if (!((this.state['your-participation'] + this.state['other-participation'])
         <= this.state['current-deposits'])) {
      this.state.formValid = false;
      this.getEl('your-participation').classList.add('is-danger');
      this.getEl('other-participation').classList.add('is-danger');
      this.getEl('current-deposits').classList.add('is-danger');
   }

   return this.state.formValid;
}

function checkInputLevelCost(input) {
   return (input.levelCost !== undefined) && !isNaN(input.levelCost);
}

function handlerForm(key, comparator) {
  let elt = this.getEl(key);
  let result = utils.checkFormNumeric(elt.value, [comparator, 0], this.state[key]);
  elt.classList.remove('is-danger');
  if (result.state === utils.FormCheck.VALID) {
    this.state[key] = result.value;
  } else if (result.state === utils.FormCheck.INVALID) {
    elt.classList.add('is-danger');
  }
  return result.state;
}


export default class {
   onCreate(input) {
      this.state = {
         fp: 0,
         'your-participation' : 0,
         'other-participation' : 0,
         'level-cost' : checkInputLevelCost(input) ? input.levelCost : 0,
         'current-deposits' : 0,
         'your-arc-bonus': Cookies.get('your_arc_bonus') === undefined ? 0 : Cookies.get('your_arc_bonus'),
         'fp-target-reward': 0,
         roi: 0,
         formValid: false,
         DOMReady: false
      };
   }

   onInput(input) {
      if (this.state.DOMReady && checkInputLevelCost(input)) {
         this.state['level-cost'] = parseInt(input.levelCost);
         this::calculate();
      }
   }

   onMount() {
     let data = {
       'level-cost': '>',
       'current-deposits': '>=',
       'your-participation': '>=',
       'other-participation': '>=',
       'your-arc-bonus': '>=',
       'fp-target-reward': '>=',
     };

     for (let key in data) {
       this.subscribeTo(this.getEl(key)).on('keyup', () => {
         if (this::handlerForm(key, data[key]) === utils.FormCheck.VALID) { this::calculate(); }
       });
     }

      this.subscribeTo(this.getEl('submit-secure-position')).on('click', () => {
        let change = utils.FormCheck.NO_CHANGE;
        let listCheck = true;
        for (let key in data) {
          let result = this::handlerForm(key, data[key]);
          if (result.state === utils.FormCheck.VALID) {
            change = listCheck ? utils.FormCheck.VALID : change;
          } else if (result.state === utils.FormCheck.INVALID) {
            listCheck = false;
            change = utils.FormCheck.INVALID;
          }
        }

        if (change !== utils.FormCheck.INVALID) { this::calculate(); }
      });

      this.subscribeTo(window).on('DOMContentLoaded', () => {
         this.state.DOMReady = true;
         this::calculate();
      });
   }
}