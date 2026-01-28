const workingHours = (req, res, next) => {
  const date = new Date();

  const day = date.getDay(); 
  const hour = date.getHours();

  const isWeekDay = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWeekDay && isWorkingHour) {
    next();
  } else {
    res.send("<h1>الموقع متاح من الاثنين إلى الجمعة من 9 إلى 17 فقط</h1>");
  }
};

module.exports = workingHours;
