/**
 * 存储sessionStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

/**
 * 获取sessionStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};

/**
 * 删除sessionStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};
/*
* 删除sessionStorage全部
*/
export const removeAllStore = () => {
  window.sessionStorage.clear();
};
/**
 * 获取当前Building ID
 */
export const getCurBldgId = () =>
  window.atob(getStore('btoaCurBldgId')).split(':')[1];

export const getApiUrl = () => {
  let url = '';
  switch (process.env.srconfig) {
    case 'ucloud':
      url = 'http://106.75.223.108:8000/';
      break;
    case 'aliyun':
      url = 'http://47.97.123.50:8000/';
      break;
    case 'test':
      url = 'http://40.73.118.20/';
      break;
    default:
      url = 'http://106.75.223.108:8000/';
      break;
  }
  return url;
};
