// 获取当前登录时间点
export const getTime = () => {
  let message = "";
  const hour = new Date();
  if (hour.getHours() <= 9) {
    message = "上午";
  } else if (hour.getHours() > 9 && hour.getHours() <= 14) {
    message = "中午";
  } else if (hour.getHours() > 14 && hour.getHours() <= 18) {
    message = "下午";
  } else {
    message = "傍晚";
  }
  return message;
};
