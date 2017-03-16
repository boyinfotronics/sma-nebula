import { observable } from 'mobx';

const userStore = observable (
  {
      username: '',
      password: '',
  }
);
userStore.SetData = function (user,pass){

    this.username=user
    this.password=pass

}
module.exports = userStore;
