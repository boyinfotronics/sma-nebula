import { observable } from 'mobx';

const registerStore = observable (
  {

      email_reg: '',
  }
);
registerStore.SetData = function (eml_reg){


    this.email_reg=eml_reg

}
module.exports = registerStore;
