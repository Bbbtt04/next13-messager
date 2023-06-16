interface TimeLocalStorage {
  expiration: number;
}

type TimeLocalStorageItem = {
  [key: string]: any;
  expiration: number;
};

class TimeLocalStorage {
  constructor() {
    this.expiration = 1000 * 60 * 60 * 24 * 7; // 7 days
  }
  setItem(key: any,value: any,expiration = this.expiration){
    let now = new Date().getTime();
    let item = {
      [key]: value,
      expiration: now + expiration
    };
    localStorage.setItem(key, JSON.stringify(item))
  }
  getItem(key: any){
    let item: TimeLocalStorageItem = JSON.parse(localStorage.getItem(key) || '{}');
    if(!item.expiration) return null;

    let now = new Date().getTime();
    if(now > item.expiration){
      localStorage.removeItem(key);
      return null;
    }

    return item[key];
  }
  removeItem(key: any){
    localStorage.removeItem(key);
  }
}
export default new TimeLocalStorage();
